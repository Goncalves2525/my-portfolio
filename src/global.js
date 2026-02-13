import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: var(--font-family);
    transition: background 0.3s ease, color 0.3s ease;
    margin: 0;
    padding: 0;
  }

  /* Max-width containers */
  .main,
  .basic-education,
  .basic-experience,
  .basic-projects,
  .basic-contact,
  .greet-main,
  .experience-accord,
  .projects-accord {
    max-width: var(--max-width);
    margin-left: auto;
    margin-right: auto;
    padding-left: var(--space-6);
    padding-right: var(--space-6);
  }

  /* Selection color */
  ::selection {
    background: ${({ theme }) => theme.imageHighlight};
    color: ${({ theme }) => theme.body};
  }

  /* Link defaults */
  a {
    color: ${({ theme }) => theme.imageHighlight};
    transition: color var(--transition-fast);
  }
  a:hover {
    color: ${({ theme }) => theme.text};
  }
`;
