import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Button from "../../components/button/Button";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { contactPageData, greeting } from "../../portfolio.js";
import myResumePdf from "../../assets/docs/CV-Ricardo-Goncalves-2026.pdf";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const ContactData = contactPageData.contactSection;

class Contact extends Component {
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
                  text="Download Resume"
                  newTab={true}
                  href={greeting.resumeLink}
                  theme={theme}
                />
              </div>

              {isLoading && !error && (
                <div className="resume-loading">
                  <div className="loading-spinner"></div>
                  <p style={{ color: theme.secondaryText }}>
                    Loading resume...
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
                    Try Again
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
                          Loading resume...
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
                        ← Previous
                      </button>
                      <span
                        className="page-info"
                        style={{ color: theme.secondaryText }}
                      >
                        Page {currentPage} of {numPages}
                      </span>
                      <button
                        onClick={this.goToNextPage}
                        disabled={currentPage === numPages}
                        className="pagination-btn"
                      >
                        Next →
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

export default Contact;
