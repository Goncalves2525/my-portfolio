# Plano: Day/Night Mode Toggle

## Context

O portfólio tem uma UI com estética de "céu noturno/espaço" — gradient azul escuro, partículas brancas/cyan a flutuar como estrelas. Queremos adicionar um **day mode** (céu diurno) com um toggle elegante no header, mantendo o night mode como default.

## Arquitetura Atual

- **Tema estático**: `darkNavyTheme` exportado de `theme.js`, passado via styled-components `ThemeProvider` + prop drilling (`App → Main → Pages → Components`)
- **Partículas**: cores hardcoded no CSS (branco + cyan)
- **Header**: sticky com glassmorphism, class component
- **React 16.14**: suporta `useContext`
- **5 ficheiros CSS** com `#06B6D4` hardcoded

---

## Decisões do Utilizador

- **Accent day mode**: Sky Blue (#0284C7) — mantém coerência "céu" em ambos os modos
- **Default sem localStorage**: Sempre night mode (não respeita `prefers-color-scheme`)
- **Background day mode**: Nuvens suaves/minimalistas (não partículas) a deslizar horizontalmente
- **Background night mode**: Estrelas (partículas atuais) sem alterações

---

## Implementação

### 1. Criar `dayTheme` em `src/theme.js`

Novo tema com estética de céu diurno — fundo azul claro, cards brancos, accent sky-blue:

```javascript
export const dayTheme = {
  body: "#E8F4FD",            // sky blue claro
  text: "#1E293B",            // slate-800
  expTxtColor: "#1E293B",
  highlight: "#BFDBFE",
  dark: "#F8FAFC",            // near-white (gradient endpoint)
  secondaryText: "#475569",   // slate-600
  imageHighlight: "#0284C7",  // sky-600 (accent)
  compImgHighlight: "#F1F5F9",
  jacketColor: "#0369A1",
  headerColor: "#0284C777",
  splashBg: "#0C4A6E",
  cardBackground: "#FFFFFF",
  cardBorder: "rgba(148, 163, 184, 0.15)",
  cardShadow: "0 4px 24px rgba(0, 0, 0, 0.06)",
  cardShadowHover: "0 12px 40px rgba(0, 0, 0, 0.10)",
  navBackground: "rgba(232, 244, 253, 0.85)",
  navShadow: "0 1px 12px rgba(0, 0, 0, 0.06)",
  buttonPrimary: "#0284C7",
  buttonPrimaryHover: "#0369A1",
  buttonText: "#FFFFFF",
  borderRadius: "12px",
  footerBackground: "#DBEAFE",
  footerText: "#0284C7",
};
```

### 2. Criar `src/context/ThemeContext.js`

React Context que gere o estado do tema:

- **Estado**: `mode` (`"night"` | `"day"`)
- **Inicialização** (por ordem): localStorage → default `"night"` (não usa `prefers-color-scheme`)
- **Fornece**: `{ theme, mode, toggleTheme }`
- **Efeitos**: persiste em `localStorage("themeMode")`, define `data-theme` no `<html>`
- **Wrapa** o styled-components `<ThemeProvider>`

### 3. Adaptar `src/App.js`

- Remover import estático de `chosenTheme`
- Envolver tudo no `ThemeContextProvider`
- O contexto já wrapa o `ThemeProvider` internamente
- Passar `theme` para `<Main>` a partir do contexto
- Renderizar `<CloudsBackground />` ao lado de `<ParticlesBackground />`

### 4. Criar componente toggle — `src/components/themeToggle/`

**ThemeToggle.js** + **ThemeToggle.css**

Toggle pill-shaped (56×28px) com knob circular que desliza:
- **Night**: track azul escuro com estrelinhas (box-shadows), knob com lua crescente (amarela)
- **Day**: track azul céu com gradient, knob com sol (âmbar) com raios
- **Animação**: `transform: translateX()` com `cubic-bezier(0.68, -0.15, 0.27, 1.15)` (overshoot suave)
- **Transição**: cores do track fazem fade, ícone muda opacidade
- Usa `useContext(ThemeContext)` internamente — self-contained
- `<button>` com `aria-label` para acessibilidade

### 5. Integrar toggle no `src/components/header/Header.js`

- Importar `<ThemeToggle />` e renderizar depois do `<ul class="menu">`
- **Desktop**: flex layout, toggle à direita dos nav links com `margin-left`
- **Mobile**: toggle visível no header bar ao lado do hamburger (sempre acessível)
- **Fix**: substituir 5x `color: "#06B6D4"` hardcoded por `theme.imageHighlight`

### 6. Background dinâmico: Estrelas (night) vs Nuvens (day)

**Night mode**: manter as partículas/estrelas atuais (sem alterações).

**Day mode**: esconder as partículas e mostrar nuvens minimalistas a deslizar horizontalmente.

**Abordagem**: Criar um novo componente `CloudsBackground` que coexiste com `ParticlesBackground`. A visibilidade é controlada via CSS com `[data-theme]`:

- `ParticlesBackground`: visível por default, escondido com `[data-theme="day"]`
- `CloudsBackground`: escondido por default, visível com `[data-theme="day"]`

**Novo ficheiro: `src/components/cloudsBackground/CloudsBackground.js`**
- 6-8 nuvens geradas com posições variadas (top: 10%-80% do viewport)
- Cada nuvem é um `<div>` com `border-radius: 50%` e pseudo-elements para criar forma de nuvem suave
- Branco semi-transparente (`rgba(255, 255, 255, 0.4-0.7)`)
- Tamanhos variados (80px-200px largura)

**Novo ficheiro: `src/components/cloudsBackground/CloudsBackground.css`**
- Animação `@keyframes driftRight`: move da esquerda (-200px) para a direita (100vw + 200px)
- Durações variadas: 40s-80s para sensação natural
- `position: fixed`, `z-index: 0`, `pointer-events: none` (igual às partículas)
- Mobile: reduzir número de nuvens
- `prefers-reduced-motion`: nuvens estáticas

**Em `src/index.css`**, adicionar CSS var para accent:
```css
:root {
  --accent-color: #06B6D4;
}
[data-theme="day"] {
  --accent-color: #0284C7;
}
```

**Em `ParticlesBackground.css`**, adicionar:
```css
[data-theme="day"] .particles-container {
  opacity: 0;
  transition: opacity 0.6s ease;
  pointer-events: none;
}
```

**Em `CloudsBackground.css`**, adicionar:
```css
.clouds-container {
  opacity: 0;
  transition: opacity 0.6s ease;
}
[data-theme="day"] .clouds-container {
  opacity: 1;
}
```

Isto cria um crossfade suave entre estrelas e nuvens durante a transição.

### 7. Corrigir `#06B6D4` hardcoded em CSS

Substituir por `var(--accent-color)` nos seguintes ficheiros:
- `src/components/header/Header.css` (hover color)
- `src/pages/contact/ContactComponent.css`
- `src/components/softwareSkills/SoftwareSkill.css`
- `src/components/competitiveSites/CompetitiveSites.css`

### 8. Prevenir flash de tema errado

Adicionar script inline em `public/index.html` (antes do React):

```html
<script>
  (function() {
    var mode = localStorage.getItem('themeMode');
    if (mode === 'day') document.documentElement.setAttribute('data-theme', 'day');
  })();
</script>
```

### 9. Transições suaves

- `global.js` já tem `transition: background 0.3s ease, color 0.3s ease` no body
- Crossfade estrelas↔nuvens via `opacity 0.6s ease` (controlado por `[data-theme]`)
- Adicionar transições nos cards/footer onde faltam
- SVGs inline (FeelingProud, CloudInfraImg, FullStackImg) mudam instantaneamente — aceitável, o gradient do body domina visualmente

---

## Ficheiros a Criar (5)

| Ficheiro | Propósito |
|----------|-----------|
| `src/context/ThemeContext.js` | Estado do tema, localStorage, `data-theme` |
| `src/components/themeToggle/ThemeToggle.js` | Toggle sol/lua |
| `src/components/themeToggle/ThemeToggle.css` | Estilos e animações do toggle |
| `src/components/cloudsBackground/CloudsBackground.js` | Nuvens minimalistas para day mode |
| `src/components/cloudsBackground/CloudsBackground.css` | Animação drift horizontal + crossfade |

## Ficheiros a Modificar (10)

| Ficheiro | Alteração |
|----------|-----------|
| `src/theme.js` | Adicionar `dayTheme` |
| `src/App.js` | Usar `ThemeContextProvider`, renderizar `<CloudsBackground />` |
| `src/components/header/Header.js` | Renderizar `<ThemeToggle />`, fix 5x hardcoded colors |
| `src/components/header/Header.css` | Estilos do toggle wrapper, fix hover color |
| `src/index.css` | CSS var `--accent-color` com `[data-theme="day"]` override |
| `src/components/particlesBackground/ParticlesBackground.css` | Esconder com `[data-theme="day"]` (crossfade) |
| `src/pages/contact/ContactComponent.css` | `#06B6D4` → `var(--accent-color)` |
| `src/components/softwareSkills/SoftwareSkill.css` | `#06B6D4` → `var(--accent-color)` |
| `src/components/competitiveSites/CompetitiveSites.css` | `#06B6D4` → `var(--accent-color)` |
| `public/index.html` | Script anti-flash |

## Ficheiros a Apagar (2, opcional)

- `src/components/footer/ToggleSwitch.js` (não usado)
- `src/components/footer/ToggleSwitch.scss` (não usado)

---

## Ordem de Execução

1. **Fundação**: `dayTheme` + `ThemeContext` + adaptar `App.js`
2. **Toggle**: criar componente `ThemeToggle`
3. **Header**: integrar toggle + fix hardcoded colors
4. **Partículas**: CSS + `[data-theme]` overrides para esconder no day mode
5. **Nuvens**: criar `CloudsBackground` + CSS, renderizar em `App.js`
6. **Cleanup CSS**: substituir todos os `#06B6D4` hardcoded por `var(--accent-color)`
7. **Anti-flash**: script em `index.html`
8. **Testar**: ambos os modos, transições, crossfade estrelas↔nuvens, mobile, localStorage

## Verificação

- `npm start` e testar visualmente ambos os modos
- Verificar toggle no desktop e mobile
- Confirmar localStorage persistence (reload mantém escolha)
- Confirmar que sem localStorage, começa sempre em night mode
- Confirmar transições suaves (especialmente o gradient do body e crossfade estrelas↔nuvens)
- Testar todas as páginas em day mode (cards, botões, footer, certificações)
