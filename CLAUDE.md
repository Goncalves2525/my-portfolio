# CLAUDE.md — Execução do Projeto

## Stack
- React (Create React App)
- Styled Components
- react-i18next + i18next
- Font Awesome / Iconify
- Deploy: Vercel

## Limitações Técnicas
- react-scripts 3.2.0
- NÃO usar optional chaining (?.) em node_modules
- Manter compatibilidade:
  - react-i18next@11.x
  - i18next@21.x
  - i18next-browser-languagedetector@7.x

## Tema & Design (obrigatório)
- Tema ativo: `darkNavyTheme`
- Fonte: Space Grotesk (`var(--font-family)`)
- Accent color: `theme.imageHighlight` (cyan)
- Cards:
  - background: `theme.cardBackground`
  - border: `theme.cardBorder`
  - shadow: `theme.cardShadow`
- Botões: sistema global com hover swap (`--btn-text` / `--btn-bg`)
- NÃO usar Google Sans nem Inter

## Layout & Animações
- max-width: `var(--max-width)`
- Espaçamento via CSS custom properties
- React Reveal:
  - duration: 800ms
  - distance: 20px
- Ilustrações: SVG inline com cores do tema

## Internacionalização (regra crítica)
- Conteúdo longo: `portfolio.en.js` / `portfolio.pt.js`
- UI strings curtas: `i18n/locales/*/ui.json`
- Estrutura dos ficheiros EN/PT deve ser idêntica
- NÃO traduzir:
  - URLs
  - skillName
  - nomes de tecnologias
  - logo_path
  - nomes de empresas
- Idioma ativo vem do `LanguageContext`

## Padrões de Componentes
- Preferir componentes funcionais
- i18n:
  - `useContext(LanguageContext)` → dados
  - `useTranslation()` → UI strings
- Cards usam sempre `theme.cardBackground`
- Hover padrão: `translateY(-4px)` + shadow

## Assets
- Imagens em `/src/assets/images/`
- NÃO usar `/public/` para assets do portfólio

## Escopo de Trabalho
- Não refatorar código fora do escopo pedido
- Não alterar APIs públicas
- Não mudar estilos globais sem instrução explícita
- Executar apenas o que foi pedido

## Output Esperado
- Preferir diffs
- Não explicar decisões
- Não sugerir alternativas
