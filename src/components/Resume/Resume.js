import Header from "../Header/Header";
import resumeImg from "../../images/resume.jpg";
import resumePdf from "../../resume.pdf";

export default function Resume() {
  return (
    <main className="Resume">
      <Header theme="dark" />
      <div className="Resume-container">
        <img className="Resume-img" src={resumeImg} alt="resume" />
        <a href={resumePdf} className="Resume-downloadBtn" download>
          Download as Pdf
        </a>
      </div>
    </main>
  );
}
