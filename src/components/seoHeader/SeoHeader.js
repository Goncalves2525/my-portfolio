import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { LanguageContext } from "../../context/LanguageContext";

const SITE_URL = "https://ricardogoncalves.dev/";

function SeoHeader() {
  const { portfolio, language } = useContext(LanguageContext);
  const {
    greeting,
    seo,
    socialMediaLinks,
    experience,
    contactPageData,
    certifications,
    skills,
    degrees,
  } = portfolio;

  const baseUrl = (seo && seo.og && seo.og.url) || SITE_URL;

  let sameAs = [];
  socialMediaLinks
    .filter(
      (media) =>
        media.link &&
        !(media.link.startsWith("tel") || media.link.startsWith("mailto"))
    )
    .forEach((media) => {
      sameAs.push(media.link);
    });

  let mailMedia = socialMediaLinks.find(
    (media) => media.link && media.link.startsWith("mailto")
  );
  let mail = mailMedia
    ? mailMedia.link.substring("mailto:".length)
    : undefined;

  let job = experience.sections
    ?.find((section) => section.work)
    ?.experiences?.at(0);

  let knowsAbout = [];
  if (skills && skills.data) {
    skills.data.forEach((category) => {
      knowsAbout.push(category.title);
      (category.softwareSkills || []).forEach((s) => {
        if (s.skillName) knowsAbout.push(s.skillName);
      });
    });
  }

  let alumniOf = ((degrees && degrees.degrees) || []).map((degree) => ({
    "@type": "EducationalOrganization",
    name: degree.title,
  }));

  let credentials = [];
  certifications.certifications.forEach((certification) => {
    credentials.push({
      "@type": "EducationalOccupationalCredential",
      url: certification.certificate_link,
      name: certification.title,
      description: certification.subtitle,
    });
  });

  const person = {
    "@type": "Person",
    "@id": baseUrl + "#person",
    name: greeting.title,
    url: baseUrl,
    image: seo && seo.image,
    description: seo && seo.description,
    email: mail,
    telephone: contactPageData.phoneSection?.subtitle || undefined,
    sameAs: sameAs,
    jobTitle: job && job.title,
    worksFor:
      job && job.company
        ? { "@type": "Organization", name: job.company }
        : undefined,
    knowsAbout: knowsAbout,
    alumniOf: alumniOf,
    address: {
      "@type": "PostalAddress",
      addressLocality: contactPageData.addressSection?.locality || "Porto",
      addressRegion: contactPageData.addressSection?.region || undefined,
      addressCountry: contactPageData.addressSection?.country || "PT",
      postalCode: contactPageData.addressSection?.postalCode || undefined,
      streetAddress:
        contactPageData.addressSection?.streetAddress || undefined,
    },
    hasCredential: credentials,
  };

  const website = {
    "@type": "WebSite",
    "@id": baseUrl + "#website",
    url: baseUrl,
    name: (seo && seo.og && seo.og.site_name) || greeting.title,
    inLanguage: language,
    publisher: { "@id": baseUrl + "#person" },
  };

  const data = {
    "@context": "https://schema.org",
    "@graph": [person, website],
  };

  const og = (seo && seo.og) || {};
  const ogLocale = og.locale || (language === "pt" ? "pt_PT" : "en_US");

  return (
    <Helmet htmlAttributes={{ lang: language }}>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <link rel="canonical" href={baseUrl} />
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />

      <meta property="og:site_name" content={og.site_name} />
      <meta property="og:title" content={og.title} />
      <meta property="og:description" content={og.description} />
      <meta property="og:type" content={og.type} />
      <meta property="og:url" content={og.url} />
      <meta property="og:image" content={og.image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={og.image_alt} />
      <meta property="og:locale" content={ogLocale} />
      <meta property="og:locale:alternate" content={og.locale_alternate} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={og.title} />
      <meta name="twitter:description" content={og.description} />
      <meta name="twitter:image" content={og.image} />
      <meta name="twitter:image:alt" content={og.image_alt} />

      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
}

export default SeoHeader;
