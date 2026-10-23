import DonationPicker from "../../components/DonationPicker";

export default function GetInvolvedPageContent() {
  return (
    <main id="main">
      <section className="page-hero">
        <div className="wrap">
          <div className="crumb"><a href="/">Home</a> / Get Involved</div>
          <h1>Give, partner, <em>mentor</em> or volunteer.</h1>
          <p className="lede">Every loan is repaid and lent again, so your support keeps working long after you give it.</p>
        </div>
      </section>
      <section className="sec">
        <div className="wrap give">
          <DonationPicker />
          <div className="ways">
            <div className="card">
              <h3>Partner with us</h3>
              <p>Companies, donors and development agencies can co-design programs in women&apos;s enterprise, climate adaptation and ESG.</p>
              <a className="link" href="/contact?topic=partner">Start a partnership →</a>
            </div>
            <div className="card">
              <h3>Mentor an entrepreneur</h3>
              <p>Share your skills in finance, marketing, law, sustainability or tech with a woman launching her first business.</p>
              <a className="link" href="/contact?topic=mentor">Become a mentor →</a>
            </div>
            <div className="card">
              <h3>Volunteer</h3>
              <p>Help at training sessions, health camps and climate preparedness drills across Pakistan.</p>
              <a className="link" href="/contact?topic=volunteer">Volunteer with us →</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
