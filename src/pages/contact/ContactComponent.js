import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Button from "../../components/button/Button";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { LanguageContext } from "../../context/LanguageContext";
import { withTranslation } from "react-i18next";
import myResumePdf from "../../assets/docs/CV-Ricardo-Goncalves-2026.pdf";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

class Contact extends Component {
  static contextType = LanguageContext;
  constructor(props) {
    super(props);
    this.state = {
      pageWidth: null,
      numPages: null,
      currentPage: 1,
      isLoading: true,
      error: null,
    };
  }

  componentDidMount() {
    this.setPageWidth();
    window.addEventListener("resize", this.setPageWidth);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.setPageWidth);
  }

  setPageWidth = () => {
    const width = window.innerWidth;
    let pageWidth;
    if (width > 1200) {
      pageWidth = 930;
    } else if (width > 768) {
      pageWidth = 700;
    } else {
      pageWidth = width * 0.9;
    }
    this.setState({ pageWidth });
  };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages, isLoading: false, error: null });
  };

  onDocumentLoadError = (error) => {
    console.error("Error loading PDF:", error);
    this.setState({
      error: "Failed to load resume. Please try again later.",
      isLoading: false,
    });
  };

  goToPreviousPage = () => {
    this.setState((prev) => ({
      currentPage: Math.max(prev.currentPage - 1, 1),
    }));
  };

  goToNextPage = () => {
    this.setState((prev) => ({
      currentPage: Math.min(prev.currentPage + 1, prev.numPages),
    }));
  };

  render() {
    const theme = this.props.theme;
    const { t } = this.props;
    const { portfolio } = this.context;
    const ContactData = portfolio.contactPageData.contactSection;
    const { pageWidth, numPages, currentPage, isLoading, error } = this.state;

    return (
      <div className="contact-main">
        <Header theme={theme} />
        <div className="basic-contact">
          <Fade bottom duration={800} distance="20px">
            <div className="contact-heading-text-div">
              <h1
                className="contact-heading-text"
                style={{ color: theme.text }}
              >
                {ContactData["title"]}
              </h1>
              <p
                className="contact-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {ContactData["description"]}
              </p>
            </div>
          </Fade>

          <Fade bottom duration={800} distance="20px">
            <div className="contact-resume-section">
              <div className="contact-download-btn">
                <Button
                  text={t("buttons.downloadResume")}
                  newTab={true}
                  href={portfolio.greeting.resumeLink}
                  theme={theme}
                />
              </div>

              {isLoading && !error && (
                <div className="resume-loading">
                  <div className="loading-spinner"></div>
                  <p style={{ color: theme.secondaryText }}>
                    {t("contact.loadingResume")}
                  </p>
                </div>
              )}

              {error && (
                <div className="resume-error">
                  <p style={{ color: theme.secondaryText }}>{error}</p>
                  <button
                    onClick={() => window.location.reload()}
                    className="retry-btn"
                  >
                    {t("buttons.tryAgain")}
                  </button>
                </div>
              )}

              {!error && (
                <div className="resume-page">
                  <Document
                    file={myResumePdf}
                    onLoadSuccess={this.onDocumentLoadSuccess}
                    onLoadError={this.onDocumentLoadError}
                    loading={
                      <div className="resume-loading">
                        <div className="loading-spinner"></div>
                        <p style={{ color: theme.secondaryText }}>
                          {t("contact.loadingResume")}
                        </p>
                      </div>
                    }
                  >
                    {pageWidth && (
                      <Page
                        pageNumber={currentPage}
                        width={pageWidth}
                        loading={
                          <div className="page-loading">
                            <div className="loading-spinner"></div>
                          </div>
                        }
                      />
                    )}
                  </Document>

                  {numPages && numPages > 1 && (
                    <div className="pagination-controls">
                      <button
                        onClick={this.goToPreviousPage}
                        disabled={currentPage === 1}
                        className="pagination-btn"
                      >
                        ← {t("buttons.previous")}
                      </button>
                      <span
                        className="page-info"
                        style={{ color: theme.secondaryText }}
                      >
                        {t("contact.pageInfo", { current: currentPage, total: numPages })}
                      </span>
                      <button
                        onClick={this.goToNextPage}
                        disabled={currentPage === numPages}
                        className="pagination-btn"
                      >
                        {t("buttons.next")} →
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </Fade>
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default withTranslation()(Contact);
