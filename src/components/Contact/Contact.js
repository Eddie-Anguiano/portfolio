import githubImg from "../../images/social-icons/github.svg";
import linkedinImg from "../../images/social-icons/linkedin.svg";

export default function Contact() {
  return (
    <section className="Contact">
      <div className="Contact-wrapper wrapper">
        <div className="Contact-info">
          <div className="Contact-background"></div>
          <h2 className="Contact-header">Contact</h2>
          <div className="Contact-email">eddie@eamakes.com</div>
          <a
            href="https://github.com/Eddie-Anguiano"
            className="Contact__github">
            <img src={githubImg} alt="github" className="Contact__icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/eddie-anguiano-2a3442206/"
            className="Contact__linkedin">
            <img src={linkedinImg} alt="figma" className="Contact__icon" />
          </a>
          <p className="Contact-about">
            My name is Eddie Anguiano. I'm a front-end web developer focused on
            making beautiful, functional, and scalable websites and web apps.
            I'm currently working within the Jamstack, connecting dynamic React
            front-ends to flexible and scalable content management systems. So,
            what are we building?{" "}
          </p>
        </div>

        <form
          className="Contact-form"
          name="contact"
          method="POST"
          data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />
          <div className="Contact-name-container">
            <div className="Contact-first-name">
              <label htmlFor="first_name" className="Contact-label">
                First Name
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                className="Contact-input"
              />
            </div>
            <div className="Contact-last_name">
              <label htmlFor="last_name" className="Contact-label">
                last Name
              </label>
              <input
                name="lastName"
                id="lastName"
                type="text"
                className="Contact-input"
              />
            </div>
            <div className="Contact-last_name"></div>
          </div>

          <label htmlFor="email" className="Contact-label">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="Contact-input"
          />

          <label htmlFor="message" className="Contact-label">
            Message
          </label>
          <textarea
            id="message"
            type="text"
            className="Contact-input Contact-textarea"
            name="message"
          />

          <button type="submit" className="Contact-button">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
