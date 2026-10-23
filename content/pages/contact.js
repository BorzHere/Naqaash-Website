import ContactForm from "../../components/ContactForm";
import CopyButton from "../../components/CopyButton";

export default function ContactPageContent() {
  return (
    <main id="main">
      <section className="page-hero">
        <div className="wrap">
          <div className="crumb"><a href="/">Home</a> / Contact</div>
          <h1>Let&apos;s <em>talk</em>.</h1>
          <p className="lede">For donations, partnerships, ESG assessments or program applications.</p>
        </div>
      </section>
      <section className="sec">
        <div className="wrap contact">
          <div className="cinfo">
            <dl>
              <div><dt>Visit</dt><dd>112F Model Town, Lahore, Pakistan</dd></div>
              <div><dt>Email</dt><dd><span id="email">hello@naqaashfoundation.com</span><CopyButton targetId="email" /></dd></div>
            </dl>
            <div className="socials">
              <a href="https://www.facebook.com/profile.php?id=61560872367491" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><svg><use href="#i-fb" /></svg></a>
              <a href="https://www.instagram.com/naqaash_foundation" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><svg><use href="#i-ig" /></svg></a>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
