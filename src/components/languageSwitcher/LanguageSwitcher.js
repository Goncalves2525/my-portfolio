import React, { Component } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import "./LanguageSwitcher.css";

const USFlag = () => (
  <svg viewBox="0 0 640 480" className="flag-icon">
    <g fillRule="evenodd">
      <g strokeWidth="1pt">
        <path fill="#bd3d44" d="M0 0h640v37h-640zm0 73.9h640v37h-640zm0 73.8h640v37h-640zm0 73.8h640v37h-640zm0 74h640v36.8h-640zm0 73.7h640v37h-640zm0 73.9h640v37h-640z" />
        <path fill="#fff" d="M0 37h640v36.9h-640zm0 73.8h640v36.9h-640zm0 73.8h640v37h-640zm0 73.9h640v37h-640zm0 73.8h640v37h-640zm0 73.8h640v37h-640z" />
      </g>
      <path fill="#192f5d" d="M0 0h364.8v258.5H0z" />
      <path fill="#fff" d="m30.4 11 3.4 10.3h10.6l-8.6 6.3 3.3 10.3-8.7-6.4-8.6 6.3 3.3-10.2-8.6-6.3h10.7zm60.8 0 3.3 10.3h10.8l-8.7 6.3 3.2 10.3-8.6-6.4-8.7 6.3 3.3-10.2-8.6-6.3h10.6zm60.8 0 3.3 10.3H166l-8.6 6.3 3.3 10.3-8.7-6.4-8.7 6.3 3.3-10.2-8.6-6.3h10.6zm60.8 0 3.3 10.3h10.8l-8.8 6.3 3.4 10.3-8.7-6.4-8.7 6.3 3.4-10.2-8.8-6.3h10.7zm60.8 0 3.3 10.3h10.7l-8.6 6.3 3.3 10.3-8.7-6.4-8.7 6.3 3.3-10.2-8.6-6.3H274zm60.8 0 3.4 10.3h10.7l-8.8 6.3 3.4 10.3-8.7-6.4-8.6 6.3 3.2-10.2-8.6-6.3h10.8zM60.8 37l3.3 10.2H75l-8.7 6.2 3.2 10.3-8.5-6.3-8.7 6.3 3.1-10.3-8.4-6.2h10.6zm60.8 0 3.4 10.2h10.7l-8.8 6.2 3.4 10.3-8.7-6.3-8.7 6.3 3.3-10.3-8.7-6.2h10.8zm60.8 0 3.3 10.2h10.8l-8.7 6.2 3.3 10.3-8.7-6.3-8.7 6.3 3.4-10.3-8.8-6.2h10.7zm60.8 0 3.4 10.2h10.7l-8.8 6.2 3.4 10.3-8.7-6.3-8.6 6.3 3.2-10.3-8.6-6.2h10.8zm60.8 0 3.3 10.2h10.8l-8.7 6.2 3.3 10.3-8.7-6.3-8.7 6.3 3.3-10.3-8.6-6.2h10.7z" />
    </g>
  </svg>
);

const PTFlag = () => (
  <svg viewBox="0 0 640 480" className="flag-icon">
    <rect width="640" height="480" fill="#060" />
    <rect x="256" width="384" height="480" fill="#f00" />
    <g fill="#ff0" fillRule="evenodd" stroke="#000" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="256" cy="240" r="64" fill="#060" stroke="#ff0" strokeWidth="3" />
      <path d="M256 176c-35.3 0-64 28.7-64 64s28.7 64 64 64 64-28.7 64-64-28.7-64-64-64z" fill="none" stroke="#ff0" strokeWidth="3" />
    </g>
    <g fill="#fff">
      <rect x="233" y="208" width="46" height="64" rx="4" />
    </g>
    <g fill="#039" stroke="#000" strokeWidth="0.4">
      <rect x="237" y="212" width="38" height="26" rx="2" />
    </g>
  </svg>
);

const languages = [
  { code: "en", label: "English", Flag: USFlag },
  { code: "pt", label: "Português", Flag: PTFlag },
];

class LanguageSwitcher extends Component {
  static contextType = LanguageContext;

  constructor(props) {
    super(props);
    this.state = { open: false };
    this.ref = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside(e) {
    if (this.ref.current && !this.ref.current.contains(e.target)) {
      this.setState({ open: false });
    }
  }

  render() {
    const { language, changeLanguage } = this.context;
    const { open } = this.state;
    const current = languages.find((l) => l.code === language) || languages[0];
    const CurrentFlag = current.Flag;

    return (
      <div className="language-switcher" ref={this.ref}>
        <button
          className="lang-trigger"
          onClick={() => this.setState({ open: !open })}
          aria-label="Change language"
          aria-expanded={open}
        >
          <CurrentFlag />
          <svg className="lang-chevron" viewBox="0 0 12 12" style={{ transform: open ? "rotate(180deg)" : "none" }}>
            <path d="M2.5 4.5L6 8l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {open && (
          <div className="lang-dropdown">
            {languages.map(({ code, label, Flag }) => (
              <button
                key={code}
                className={`lang-option ${code === language ? "active" : ""}`}
                onClick={() => {
                  changeLanguage(code);
                  this.setState({ open: false });
                }}
              >
                <Flag />
                <span>{label}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default LanguageSwitcher;
