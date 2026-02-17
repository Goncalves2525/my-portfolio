# CLAUDE.md - Instruções para o Portfólio

Este arquivo contém instruções e contexto para ajudar o Claude a trabalhar eficientemente neste projeto de portfólio.

## Visão Geral do Projeto

Este é um portfólio pessoal construído com React, baseado no template masterPortfolio. O projeto usa:
- React (Create React App)
- Styled Components
- React Reveal (animações - duração padrão: 800ms)
- Font Awesome / Iconify para ícones
- **react-i18next** (v11.18.6) + **i18next** (v21.10.0) para internacionalização (EN/PT)
- **Space Grotesk** como fonte principal (substituiu Inter, que substituiu Google Sans)
- **Dark Navy + Cyan** como tema visual (`darkNavyTheme`)
- Deploy via **Vercel** (auto-deploy on push): `https://ricardo-goncalves.vercel.app`

> **Nota sobre versões i18n:** `react-scripts 3.2.0` não transpila optional chaining (`?.`) em `node_modules`. Por isso, as versões de i18next devem manter-se compatíveis: `react-i18next@11.x`, `i18next@21.x`, `i18next-browser-languagedetector@7.x`.

## Design System

### Tema Ativo: `darkNavyTheme`
- **Arquivo:** `src/theme.js` — `export const chosenTheme = darkNavyTheme;`
- Paleta de cores:
  - Body: `#0F172A` (dark navy)
  - Cards: `#1E293B` (slate-800) — via `theme.cardBackground`
  - Text: `#F1F5F9` (light)
  - Secondary text: `#94A3B8` (muted slate) — via `theme.secondaryText`
  - Accent/Highlight: `#06B6D4` (cyan) — via `theme.imageHighlight`
  - Card border: `rgba(148, 163, 184, 0.08)` — via `theme.cardBorder`
  - Card shadow: `0 4px 24px rgba(0, 0, 0, 0.25)` — via `theme.cardShadow`
  - Button primary: `#06B6D4` — via `theme.buttonPrimary`
  - Footer bg: `#020617` — via `theme.footerBackground`

### CSS Custom Properties (Design Tokens)
Definidas em `src/index.css`:
```css
:root {
  --font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --text-xs: 0.75rem; --text-sm: 0.875rem; --text-base: 1rem;
  --text-lg: 1.125rem; --text-xl: 1.25rem; --text-2xl: 1.5rem;
  --text-3xl: 1.875rem; --text-4xl: 2.25rem; --text-5xl: 3rem; --text-6xl: 3.75rem;
  --font-normal: 400; --font-medium: 500; --font-semibold: 600; --font-bold: 700; --font-extrabold: 800;
  --space-1 through --space-24;
  --max-width: 1200px;
  --transition-fast: 150ms ease; --transition-base: 250ms ease;
  --transition-slow: 400ms cubic-bezier(0.16, 1, 0.3, 1);
}
```

### Typography
- **Font:** Space Grotesk (loaded via Google Fonts in `public/index.html`)
- Pesos disponíveis: 400, 500, 600, 700 (não tem 800/extrabold — usa 700/bold)
- Todas as referências a "Google Sans" e "Inter" foram substituídas
- Usar `var(--font-family)` em CSS, nunca hardcoded

### Global Layout
- Containers usam `max-width: var(--max-width)` + `margin: 0 auto` + `padding: 0 var(--space-6)`
- Configurado em `src/global.js`

## Estrutura de Arquivos Importantes

### Internacionalização (i18n)
- **`src/i18n/config.js`** - Configuração i18next com deteção de idioma (localStorage → navigator → fallback `en`)
- **`src/i18n/locales/en/ui.json`** - Strings UI em inglês (~20% do texto: nav, botões, títulos de seções)
- **`src/i18n/locales/pt/ui.json`** - Strings UI em português
- **`src/portfolio/portfolio.en.js`** - Conteúdo do portfólio em inglês (~80% do texto)
- **`src/portfolio/portfolio.pt.js`** - Conteúdo do portfólio em português
- **`src/portfolio.js`** - Ficheiro original mantido para compatibilidade com componentes não usados do template
- **`src/context/LanguageContext.js`** - Context que gere idioma ativo + expõe portfolio correto
- **`src/components/languageSwitcher/LanguageSwitcher.js`** - Toggle EN/PT no header

> **Arquitetura híbrida:** Dados complexos do portfólio (skills, experiência, projetos) são duplicados em ficheiros separados (`portfolio.en.js` / `portfolio.pt.js`). Strings UI simples (nav labels, botões, títulos) usam `react-i18next` com ficheiros JSON.

### Configuração Principal (Portfolio)
- **`src/portfolio/portfolio.en.js`** - Arquivo central de configuração (versão inglesa)
- **`src/portfolio/portfolio.pt.js`** - Versão portuguesa
  - Contém todas as informações pessoais (nome, bio, redes sociais)
  - Skills e suas ilustrações
  - Experiências, educação, certificações
  - Projetos e publicações
  - `blogSection` e `addressSection` estão vazios (dados do template removidos)
  - Campos **não traduzidos**: URLs, `skillName`, nomes de tecnologias, `logo_path`, nomes de empresas (mantidos iguais)

### Componentes de Greeting/Hero
- **`src/containers/greeting/Greeting.js`** - Hero section da home page
  - Usa `FeelingProud` (inline SVG com `theme.body` para cores)
  - Fade bottom `duration={800} distance="20px"`
- **`src/containers/greeting/Greeting.css`** - Layout do hero
  - `min-height: 60vh`, `gap: var(--space-12)`
  - Título: `var(--text-6xl)`, `font-weight: 800`, `letter-spacing: -0.03em`
  - Subtítulo: `var(--text-xl)`, `max-width: 540px`
  - Animação float na ilustração: `@keyframes float` 6s infinite `translateY(-12px)`
  - Mobile: stack vertical, imagem no topo (`order: -1`)
- **`src/containers/greeting/FeelingProud.js`** - Ilustração hero (**inline SVG**)

### Componentes de Loader
- **`src/components/Loader/LoaderLogo.js`** - Logo "RG" no loader (inline SVG com hexágono)
  - Usa `theme.body` para stroke color
  - Animação de dash draw (stroke-dasharray)

### Componentes de Skills
- **`src/containers/skills/`**
  - `SkillSection.js` - Renderiza as seções de skills
  - `CloudInfraImg.js` - Ilustração DevOps (**inline SVG** com `theme.imageHighlight`)
  - `FullStackImg.js` - Ilustração Full Stack (**inline SVG** com `theme.imageHighlight`)
  - `Skills.css` - Estilos das seções de skills

> **Nota:** CloudInfraImg e FullStackImg foram convertidos de `<img src={require()}>` para componentes React com SVG inline. Isso permite que as cores do SVG respondam ao tema (accent color via `theme.imageHighlight`).

### Componentes de Header/Navegação
- **`src/components/header/Header.js`** - Navegação sticky com glassmorphism (**componente funcional**)
  - Usa `useContext(LanguageContext)` + `useTranslation()` para i18n
  - Logo `< Ricardo Gonçalves />` usa `theme.imageHighlight` (cyan)
  - Nav links traduzidos via `t("nav.home")`, `t("nav.education")`, etc.
  - Inclui `LanguageSwitcher` ao lado do `ThemeToggle` no `header-toggle-wrapper`
  - Active page: bold + cyan via `activeStyle`
- **`src/components/header/Header.css`** - `.header-wrapper` com `backdrop-filter: blur(12px)`
- **`src/components/languageSwitcher/LanguageSwitcher.js`** - Toggle EN/PT
  - Botão ativo: cor `theme.imageHighlight` (cyan) + border
  - Inativo: `theme.secondaryText`
  - Hover: `translateY(-2px)`

### Componentes de Buttons
- **`src/components/button/Button.js`** - Botão reutilizável com hover via CSS
  - Usa CSS custom properties (`--btn-text`, `--btn-bg`) para hover color swap
  - Hover: cores invertidas + `translateY(-2px)` + `box-shadow` glow
- **`src/components/button/Button.css`** - Hover com `var(--btn-text)` e `var(--btn-bg)`

### Componentes de Educação
- **`src/pages/education/EducationComponent.js`** - Página principal de educação
- **`src/containers/education/Educations.js`** - Lista de degrees
- **`src/components/degreeCard/DegreeCard.js`** - Card individual de degree
  - Importa `Button.css` para o botão "Visit Website" (usa `.main-button`)
- **`src/components/competitiveSites/CompetitiveSites.js`** - Ícones de sites (Credly, Udemy, etc.)
  - Layout centrado com `display: flex; justify-content: center; gap`

### Componentes de Certificações
- **`src/containers/certifications/Certifications.js`** - Container de certificações (CSS Grid)
- **`src/components/certificationCard/CertificationCard.js`** - Card individual de certificação
- Suporta dois tipos de seções: Main Certifications e Other Certifications

### Componentes de Experiência
- **`src/pages/experience/Experience.js`** - Página de experiência **sem Accordion**
  - Itera pelas secções (`Work`, `Internships`) com título `<h2>` para cada uma
  - Renderiza `ExperienceCard` diretamente (tudo visível, sem cliques)
- **`src/pages/experience/Experience.css`** - Estilos com `.experience-section` e `.experience-section-title`
- **`src/components/experienceCard/ExperienceCard.js`** - Card de experiência
  - Background: `theme.cardBackground` (não `theme.body`)
  - Descrição: `color: theme.secondaryText`
- **`src/containers/experienceAccordion/`** - **Deprecated** (não mais usado, mantido no código)

### Componentes de Projects
- **`src/pages/projects/Projects.js`** - Página principal de projetos
- **`src/containers/projectsAccordion/ProjectsAccordion.js`** - Container de projetos
- **`src/components/githubRepoCard/GithubRepoCard.js`** - Card individual de projeto (CSS Grid layout)
- **Suporta tags de categoria**: DevOps, Web, Mobile, Desktop

### Componentes de Footer
- **`src/components/footer/Footer.js`** - Footer com SocialMedia icons + copyright
- **`src/components/footer/Footer.css`** - Border-top accent, dark bg

### Componentes de Social Media
- **`src/components/socialMedia/SocialMedia.js`** - Icons com flex + gap layout
- **`src/components/socialMedia/SocialMedia.css`** - Icons 2.4rem, hover `translateY(-3px)`
  - `.icon-button i` tem `color: white` para visibilidade nos backgrounds coloridos

### Componentes de Background
- **`src/components/particlesBackground/ParticlesBackground.js`** - Partículas flutuantes no background
  - 45 partículas com distribuição golden angle (137.5°) para espaçamento natural
  - Cada partícula tem posição, tamanho (1-3px), opacidade (0.15-0.70), duração (15-45s) únicos
  - 1 em cada 5 partículas é cyan (#06B6D4), outras são brancas
  - Geração determinística via pseudo-random baseado em índice
- **`src/components/particlesBackground/ParticlesBackground.css`** - Animação de float vertical
  - `@keyframes floatUp`: movimento de baixo para cima com drift lateral e fade in/out
  - Mobile: esconde 1/3 das partículas para performance
  - `prefers-reduced-motion`: respeita preferência de acessibilidade
  - `z-index: 0` (background), `aria-hidden="true"`

### Componentes de Resume/CV
- **`src/pages/resume/Resume.js`** - Página standalone de resume (usa `react-pdf`)
- **`src/assets/docs/CV-Ricardo-Goncalves-2026.pdf`** - Ficheiro PDF do CV
  - **Nota:** Nome sem espaços nem caracteres especiais (evita problemas em deployments)
  - Importado via Webpack: `import myResumePdf from "../../assets/docs/CV-Ricardo-Goncalves-2026.pdf"`

### Assets de Imagens
- **`/src/assets/images/`** - Logos e ilustrações
  - `devops.svg` e `fullstack.svg` - Originais SVG (não mais usados diretamente; inline nos componentes)
  - Logos de empresas/universidades (`.png`, `.svg` files)
  - **Importante:** Assets devem estar aqui, não em `/public/`

## Customizações Aplicadas

### Redes Sociais
- Implementado sistema de `display: true/false` para mostrar/ocultar redes sociais
- Localização: `src/portfolio/portfolio.en.js` e `src/portfolio/portfolio.pt.js`
- Componente: `src/components/socialMedia/SocialMedia.js`
- Usa `.filter()` para filtrar apenas items com `display !== false`
- **Removido** da página Contact Me (apenas aparece no Footer)

### Greeting/Hero Section
- `min-height: 60vh` com alinhamento vertical centrado
- Título: `var(--text-6xl)` extrabold com `letter-spacing: -0.03em`
- Subtítulo: `var(--text-xl)`, `line-height: 1.7`, `max-width: 540px`, cor `theme.secondaryText`
- Ilustração: `FeelingProud` inline SVG com animação float (`translateY(-12px)` 6s infinite)
- Gap entre colunas: `var(--space-12)`
- Mobile: stack vertical, imagem no topo (`order: -1`), texto centrado
- SocialMedia e botões "Star Me On Github" / "Contact Me" estão comentados

### Skills
- Espaçamento entre seções: `10rem` (160px)
- Headings (`What I Do?`, `What Do I Do?`): centradas com `text-align: center`
- Ilustrações são **inline SVG** com cores do tema (`theme.imageHighlight` para accent)
- Todas as ilustrações têm animação float: `@keyframes float` 6s infinite `translateY(-12px)`
- Software skill icons: `display: flex; flex-wrap: wrap; gap` layout, hover `translateY(-3px)`

### Education Page
- Logo do ISEP: 280px com border-radius circular e shadow
- Ícones de Competitive Sites (Credly, Udemy): 7rem, centrados com flexbox
- Texto "Basic Qualification and Certifcations" removido

### Degree Cards (Educação)
- Cards: `border-radius: var(--space-3)`, `box-shadow: 0 4px 24px rgba(0,0,0,0.25)`
- Hover: shadow elevation effect
- Botão "Visit Website": usa `.main-button` com hover color swap (mesmo sistema dos outros botões)
- Suporte a cores personalizadas por degree via propriedade `headerColor`
- Se não especificado, usa `theme.headerColor`

### Certificações
- **Layout CSS Grid**: `grid-template-columns: repeat(3, 1fr)`, responsive 3→2→1 cols
- **Estrutura dupla**: `mainCertifications` e `otherCertifications`
- Cards: `theme.cardBackground`, consistent border/shadow/radius com hover elevation
- Suporte a **ícones Iconify** ou **imagens locais**
- Ícones Udemy têm `iconStyle: { color: "#A435F0" }` para cor púrpura

### Botões (Sistema Global)
- Background: `theme.buttonPrimary` (#06B6D4 cyan)
- Hover: cores invertidas via CSS custom properties (`--btn-text`, `--btn-bg`)
- Hover effect: `translateY(-2px)` + `box-shadow: 0 6px 20px rgba(6, 182, 212, 0.3)`
- Font: `var(--font-family)`, `var(--font-semibold)`, `var(--text-sm)`
- Todos os botões (Resume, Visit Website, etc.) usam o mesmo sistema

### Navegação (Header)
- **Componente funcional** (convertido de class para usar hooks: `useContext`, `useTranslation`)
- **Sticky** com glassmorphism: `backdrop-filter: blur(12px)`, background transparente (permite gradiente visível)
- **Full-width**: sem max-width constraint, ocupa toda a largura da página
- Logo `< Ricardo Gonçalves />`: cor `theme.imageHighlight` (cyan), tamanho `1.6em`
- Nav links traduzidos via `t("nav.home")`, etc.: `theme.secondaryText` (#94A3B8) por defeito, tamanho `var(--text-base)`
- Nav hover: cyan (#06B6D4) + `translateY(-2px)`
- Active page: bold + cyan via `activeStyle`
- **LanguageSwitcher**: Toggle EN/PT ao lado do ThemeToggle no `header-toggle-wrapper`
- Hamburger icon: `background: currentColor` (theme-aware)
- Menu dropdown: background transparente (sem cor sólida)

### Experience Page
- **Sem Accordion**: Secções (`Work`, `Internships`) mostradas diretamente com títulos `<h2>`
- `.experience-section`: `max-width: var(--max-width)`, centrado, `margin-bottom: var(--space-16)`
- `.experience-section-title`: `text-3xl bold`, centrado, `letter-spacing: -0.02em`
- **Vertical spacing**: `.experience-heading-div` com `padding-top: var(--space-16)`, `margin-bottom: var(--space-12)`
- **Float animation**: Ilustração de cabeçalho com animação float 6s infinite
- Breakpoints: 1200px (desktop) → 768px (mobile)

### Projects Page
- **Vertical spacing**: `.projects-heading-div` com `padding-top: var(--space-16)`, `margin-bottom: var(--space-12)`
- **Float animation**: Ilustração de cabeçalho com animação float 6s infinite
- Breakpoints: 1200px (desktop) → 768px (mobile)

### Contact Page
- **Sem imagem de perfil**: Removida a foto `ricardo.svg`
- **Resume integrado**: PDF viewer (`react-pdf`) embutido diretamente na página
- Botão "Download Resume" acima do PDF (link para Google Drive via `greeting.resumeLink`)
- Paginação se o CV tiver mais de 1 página
- Loading spinner e error state com cores do tema (cyan)
- Secções de blog e address comentadas no JSX

### Animações
- **React Reveal duração padrão: 800ms** (reduzido de 2000ms)
- Distance: 20px (reduzido de 40px)
- Footer: 600ms / 10px
- Top Fade (Header): 600ms / 10px
- Degree card Flip: 1000ms
- **Float animations**: Todas as ilustrações de páginas (Hero, Skills, Education, Experience, Projects, Contact) têm animação float 6s infinite com `translateY(-12px)`

### Top Button
- Circular: 48px, `border-radius: 50%`
- Hover: `translateY(-3px)` + elevated shadow
- `z-index: 999`

## Diretrizes de Desenvolvimento

### Ao Adicionar/Editar Traduções

**Conteúdo do portfólio** (textos longos, dados estruturados):
1. Editar `src/portfolio/portfolio.en.js` e `src/portfolio/portfolio.pt.js`
2. Manter a mesma estrutura em ambos os ficheiros
3. Não traduzir: URLs, `skillName`, nomes de tecnologias, `logo_path`, `fontAwesomeIcon`

**Strings UI** (labels curtos, botões, títulos de seções):
1. Editar `src/i18n/locales/en/ui.json` e `src/i18n/locales/pt/ui.json`
2. Usar `t("chave")` no componente via `useTranslation()` (funcional) ou `withTranslation()` (class)
3. Interpolação: `t("contact.pageInfo", { current: 1, total: 5 })` → `"Page 1 of 5"`

**Padrões nos componentes:**
- **Componentes funcionais**: `useContext(LanguageContext)` para portfolio data + `useTranslation()` para UI strings
- **Class components**: `static contextType = LanguageContext` para portfolio data + `withTranslation()` HOC para UI strings
- **Nota**: Nenhum class component usa `static contextType` para `ThemeContext` (usam `ThemeContext.Consumer` ou props), por isso `LanguageContext` é seguro em `contextType`

**Persistência**: Idioma guardado em `localStorage` (key: `"language"`). Deteção automática: localStorage → navigator language → fallback `en`.

### Ao Adicionar Novo Idioma
1. Criar `src/portfolio/portfolio.XX.js` (copiar de `portfolio.en.js` e traduzir)
2. Criar `src/i18n/locales/XX/ui.json` (copiar de `en/ui.json` e traduzir)
3. Registar em `src/i18n/config.js`: adicionar `import uiXX` e `XX: { ui: uiXX }` nos resources
4. Registar em `src/context/LanguageContext.js`: adicionar `import * as portfolioXX` e `XX: portfolioXX` no objeto `portfolios`
5. Adicionar botão no `src/components/languageSwitcher/LanguageSwitcher.js`

### Ao Modificar Redes Sociais
- Editar `src/portfolio/portfolio.en.js` e `src/portfolio/portfolio.pt.js`
- Usar `display: true` para mostrar, `display: false` para ocultar
- **Importante:** Não remover o item Gmail completamente (usado pelo SEO)

### Ao Adicionar/Modificar Ilustrações de Skills
As ilustrações DevOps e FullStack são **inline SVG** nos componentes React:
- `src/containers/skills/CloudInfraImg.js` — DevOps
- `src/containers/skills/FullStackImg.js` — Full Stack

Para modificar cores do accent, editar os elementos com `fill={accent}` onde `accent = theme.imageHighlight`.

Para adicionar nova ilustração de skill:
1. Criar componente React em `src/containers/skills/`
2. Converter SVG para JSX inline
3. Usar `theme.imageHighlight` para elementos accent
4. Registar no `SkillSection.js`

### Ao Adicionar Certificações com Ícones Iconify
1. Editar `src/portfolio/portfolio.en.js` e `src/portfolio/portfolio.pt.js`
2. Adicionar no array `mainCertifications` ou `otherCertifications`:
```javascript
{
  title: "Nome da Certificação",
  subtitle: "Instituição",
  iconifyClassname: "logos:nome-do-icone",
  iconStyle: { fontSize: "80px" },         // Opcional
  certificate_link: "https://...",
  color_code: "#FF990033",                 // Cor de fundo
}
```
3. **Pesquisar ícones em:** https://icon-sets.iconify.design/

### Ao Adicionar Certificações com Imagem Local
1. Colocar imagem em `/src/assets/images/`
2. Adicionar em `portfolio.en.js` e `portfolio.pt.js`:
```javascript
{
  title: "CCNA",
  subtitle: "Cisco",
  logo_path: "cisco_logo.png",
  certificate_link: "https://...",
  alt_name: "Cisco",
}
```

### Ao Editar Cores do Tema
- Arquivo: `src/theme.js`
- Tema ativo: `export const chosenTheme = darkNavyTheme;`
- Tokens importantes: `body`, `text`, `secondaryText`, `imageHighlight`, `cardBackground`, `cardBorder`, `buttonPrimary`, `buttonText`, `footerBackground`
- `headerColor` pode ser sobreposto por degree individualmente

### Ao Editar Estilos
- **Usar sempre CSS custom properties** (`var(--font-family)`, `var(--space-4)`, etc.)
- **Nunca usar "Google Sans" ou "Inter"** — substituídos por `var(--font-family)` (Space Grotesk)
- CSS das skills: `src/containers/skills/Skills.css`
- CSS do degree card: `src/components/degreeCard/DegreeCard.css`
- CSS de certificações: `src/components/certificationCard/CertificationCard.css`
- CSS dos botões: `src/components/button/Button.css`

### Ao Adicionar Novos Componentes
- Cards devem usar `theme.cardBackground` para background, `theme.cardBorder` para border
- Shadows: `0 4px 24px rgba(0, 0, 0, 0.25)`, hover: `0 12px 40px rgba(0, 0, 0, 0.35)`
- Hover pattern: `transform: translateY(-4px)` + elevated shadow
- Botões: usar o sistema de `--btn-text` / `--btn-bg` CSS vars para hover swap
- Animações React Reveal: `duration={800} distance="20px"` padrão
- **z-index layering**: Partículas de background (0), conteúdo principal (1), header sticky (1000), top button (999)

## Recursos Úteis

### Para Encontrar SVGs de Qualidade
- **unDraw** (https://undraw.co) - Melhor opção, estilo similar
- **Storyset** (https://storyset.com) - Animadas e estáticas
- **DrawKit** (https://drawkit.com) - Vetoriais modernas

### Para Encontrar Ícones Iconify
- **Iconify** (https://icon-sets.iconify.design/) - Biblioteca completa de ícones
- Exemplos populares:
  - Logos: `logos:aws`, `logos:docker-icon`, `logos:google-cloud`
  - Simple Icons: `simple-icons:credly`, `simple-icons:udemy`
  - Font Awesome: `fa-brands:github`, `fa-solid:certificate`

### Comandos Principais
```bash
npm start          # Inicia servidor de desenvolvimento
npm run build      # Cria build de produção
npx serve -s build # Serve o build localmente (testar antes de deploy)
npm test           # Executa testes
```

## Notas Importantes

1. **Assets de Imagens**:
   - Usar `/src/assets/images/` para logos
   - DevOps/FullStack SVGs são inline nos componentes (não usam `require()`)
   - **Não usar** `/public/` para imagens do portfólio

2. **Responsividade**: Breakpoints unificados a 1200px (desktop) e 768px (mobile).

3. **Animações**: React Reveal com duração padrão 800ms / 20px. Header/Footer mais rápidos (600ms / 10px).

4. **Temas**:
   - Arquivo: `src/theme.js`
   - Tema ativo: `darkNavyTheme`
   - Cores gerenciadas via `theme` props
   - CSS vars definidas em `src/index.css`

5. **SEO**:
   - `SeoHeader.js` usa `LanguageContext` para obter dados do portfolio ativo (meta tags e structured data mudam com o idioma)
   - `<html lang="en">` / `<html lang="pt">` dinâmico via `react-helmet`
   - `seo.description` personalizada em `portfolio.en.js` / `portfolio.pt.js`
   - `og:url` aponta para `https://ricardo-goncalves.vercel.app/`
   - `sitemap.xml` atualizado com URLs da Vercel (5 páginas: home, experience, education, projects, contact)
   - `robots.txt` com `Allow: /` e referência ao sitemap
   - Google Search Console configurado (ficheiro de verificação em `public/`)

6. **Iconify**: Já integrado. Usar em Certifications e Competitive Sites.

7. **Template cleanup**: Scripts de tracking do autor original (AdSense, Google Ads, GA) foram removidos do `index.html`.

8. **Dados por personalizar**:
   - `publications` em `portfolio.en.js`/`portfolio.pt.js` ainda tem dados do autor original (secção escondida na UI)
   - `blogSection` e `addressSection` foram esvaziados (secções comentadas no Contact page)

9. **Contact page**: Título + descrição centrados, seguido de PDF viewer com o CV embutido. Secções de blog e address comentadas. SocialMedia apenas no Footer.

10. **Deployment**:
    - **Vercel**: Auto-deploy via GitHub (push → build → deploy automático)
    - URL: `https://ricardo-goncalves.vercel.app`
    - **GitHub Pages**: Configurado mas não usado (gh-pages branch existe)
    - `package.json` tem scripts `predeploy` e `deploy` para gh-pages (legacy)

10. **Background Particles**:
   - Componente `ParticlesBackground` renderizado em `App.js` antes do conteúdo principal
   - 45 partículas com animação CSS pura (melhor performance que JS)
   - Golden angle distribution (137.5°) para espaçamento natural sem sobreposição
   - Otimizado para mobile (reduz 1/3 das partículas) e acessibilidade (prefers-reduced-motion)

## Sistema de Tags de Projetos

### Estrutura no portfolio.en.js / portfolio.pt.js
```javascript
const projects = {
  sections: [
    {
      title: "Personal Projects",
      projects: [
        {
          id: "1",
          name: "Gestor-QR",
          categories: ["DevOps", "Web"],  // Múltiplas tags
          // ... outros campos
        }
      ]
    },
    {
      title: "Academic Projects",
      projects: [
        {
          // Sem categories = sem tags
        }
      ]
    }
  ]
}
```

### Cores das Tags
- **DevOps**: Laranja (`#ff6800`)
- **Web**: Azul (`#4285f4`)
- **Mobile**: Verde (`#34a853`)
- **Desktop**: Roxo (`#9c27b0`)

Para adicionar novas categorias, editar CSS em:
`src/components/githubRepoCard/GithubRepoCard.css`

```css
.category-novacategoria {
  background-color: #cor33;
  color: #cor;
  border: 1px solid #cor66;
}
```

## Histórico de Customizações

### Fevereiro 2026 - Funcionalidades
- Migração de SVGs para `/src/assets/images/`
- Aumento do logo do ISEP (300px desktop, 250px mobile)
- Ícones Credly/Udemy aumentados para 7rem
- Suporte a cores personalizadas em degree cards
- Divisão de certificações em Main e Other
- Suporte a ícones Iconify em certificações
- Remoção do texto "Basic Qualification and Certifcations"
- Sistema de tags de categoria em projetos (DevOps, Web, Mobile, Desktop)
- Suporte a múltiplas tags por projeto
- Estrutura simplificada de projetos (remoção de subsections)
- README personalizado para o portfólio
- LICENSE atualizada com copyright do Ricardo
- Publications section escondida na página de Projects
- Página "Open Source" escondida do menu de navegação
- Logo do Loader personalizado - Alterado de "AH" para "RG"

### Fevereiro 2026 - UI Overhaul (branch `better-ui`)
- **Design System**: Dark Navy (#0F172A) + Cyan (#06B6D4) tema com CSS custom properties
- **Tipografia**: Space Grotesk (substituiu Inter, que substituiu Google Sans)
- **Tema**: `darkNavyTheme` criado em `theme.js` com tokens: cardBackground, cardBorder, cardShadow, buttonPrimary, buttonText, footerBackground, secondaryText, etc.
- **Navegação**: Header sticky com glassmorphism (backdrop-filter: blur), logo cyan, nav links com hover cyan
- **Hero/Greeting**: min-height 60vh, título 3.75rem extrabold, animação float na ilustração
- **Botões**: Sistema de hover com CSS custom properties (--btn-text, --btn-bg), translateY + glow
- **Cards**: CSS Grid layouts, background `#1E293B`, border/shadow/radius consistentes, hover elevation
- **Certificações**: CSS Grid 3→2→1 colunas responsivo, hover com scale/glow
- **Skills**: Espaçamento var(--space-16), ilustrações convertidas para inline SVG com cores do tema
- **Page Headers**: Tipografia unificada (text-5xl bold), breakpoint consistente 1200px
- **Footer**: Redesenhado com SocialMedia icons, border-top accent, dark bg (#020617)
- **Social Media**: Flex + gap layout, icons 2.4rem, hover translateY(-3px)
- **Animações**: React Reveal reduzido de 2000ms para 800ms, distance de 40px para 20px
- **Top Button**: Circular 48px, hover com lift + shadow
- **Experience Cards**: Background `theme.cardBackground`, texto `theme.secondaryText`
- **Cleanup**: Removidos scripts AdSense/Google Ads/GA, corrigido og:url, esvaziados blogSection e addressSection
- **Inline SVGs**: CloudInfraImg e FullStackImg convertidos para React SVG inline com theme.imageHighlight
- **Ícones Udemy**: Cor púrpura (#A435F0) via iconStyle
- **Contact page**: Removido SocialMedia (apenas no Footer)
- **Background Particles**: 45 partículas flutuantes com distribuição golden angle, animação vertical com fade in/out
- **Header Full-Width**: Background transparente para permitir gradiente visível, fontes aumentadas (logo 1.6em, links text-base), menu sem background
- **Skills Spacing**: Espaçamento entre seções aumentado para 10rem (160px), headings centradas
- **Float Animations**: Todas as ilustrações de páginas (Hero, Skills, Education, Experience, Projects, Contact) com animação float 6s
- **Page Vertical Spacing**: Experience e Projects com padding-top var(--space-16) e margin-bottom var(--space-12) nos headings

### Fevereiro 2026 - Session 3 (Deployment & Refinements)
- **Tipografia**: Migração de Inter para **Space Grotesk** (look mais tech/developer)
- **Experience Page**: Removido Accordion (baseui), secções mostradas diretamente com títulos `<h2>`
- **Contact Page**: Removida imagem de perfil, removido botão "See My Resume", adicionado PDF viewer inline com `react-pdf`
- **CV File**: Renomeado de `CV Ricardo Gonçalves 2026.pdf` para `CV-Ricardo-Goncalves-2026.pdf` (sem espaços)
- **SEO**: `seo.description` personalizada, `og:url` atualizado para Vercel
- **sitemap.xml**: URLs atualizados de `ashutoshhathidara.com` para `ricardo-goncalves.vercel.app`
- **robots.txt**: Adicionado `Allow: /` e referência ao sitemap
- **Deployment**: Configurado Vercel (auto-deploy via GitHub push)
- **Google Search Console**: Configurado e verificado

### Fevereiro 2026 - Internacionalização (branch `translation`)
- **Abordagem híbrida**: Ficheiros portfolio duplicados (`portfolio.en.js` / `portfolio.pt.js`) para conteúdo + `react-i18next` para UI strings
- **Dependências**: `react-i18next@11.18.6`, `i18next@21.10.0`, `i18next-browser-languagedetector@7.1.0` (versões compatíveis com `react-scripts 3.2.0`)
- **LanguageContext**: Segue padrão do `ThemeContext` existente (class component provider), expõe `{ language, portfolio, changeLanguage }`
- **LanguageSwitcher**: Toggle EN/PT no header ao lado do ThemeToggle, estilo consistente com design system
- **Header**: Convertido de class para functional component para usar `useContext` + `useTranslation`
- **Componentes atualizados** (15+ ficheiros): Greeting, SkillSection, Skills, Educations, EducationComponent, Experience, Projects (page), ProjectsAccordion, Contact, Resume, Error404, Footer, SeoHeader, SocialMedia, DegreeCard, CertificationCard, GithubRepoCard
- **Deteção automática**: localStorage → browser language → fallback EN
- **SEO dinâmico**: `<html lang>` muda com idioma, meta tags traduzidas
- **Backward compatibility**: `src/portfolio.js` original mantido para componentes não usados do template (Achievement, Blogs, Talks, etc.)

## Melhorias Futuras Sugeridas

- [ ] Remover ou substituir dados de `publications` em `portfolio.js` (dados do autor original)
- [ ] Adicionar mais certificações na seção "Other Certifications"
- [ ] Personalizar descriptions do degree (ISEP)
- [ ] Adicionar projetos reais nas categorias DevOps, Web e Mobile
- [ ] Atualizar informações de experiência
- [ ] Adicionar mais competitive sites se necessário
- [ ] Criar novas categorias de tags se necessário
- [ ] Comprar domínio personalizado (ex: ricardogoncalves.dev) e configurar na Vercel
- [ ] Rever e refinar traduções portuguesas em `portfolio.pt.js`
- [ ] Atualizar `sitemap.xml` com versões alternativas de idioma (`hreflang`)
