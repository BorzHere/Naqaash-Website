const photos = Array.from({ length: 14 }, (_, index) => ({
  src: `/assets/img/work/work-${String(index + 1).padStart(2, "0")}.jpg`,
  alt: `Naqaash Foundation community work photo ${index + 1}`,
}));

export default function OurWorkPageContent() {
  return (
    <main id="main">
      <section className="page-hero">
        <div className="wrap">
          <div className="crumb"><a href="/">Home</a> / Our Work</div>
          <h1>Our work, <em>in action</em>.</h1>
          <p className="lede">A look at Naqaash Foundation&apos;s workshops, skills training and community programmes.</p>
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <div className="eyebrow">Together, building opportunity</div>
            <h2>Real people. Practical skills. Stronger communities.</h2>
            <p className="lede">From jewellery-making and financial literacy to women-led enterprise, our work supports women as they build skills, confidence and sustainable livelihoods.</p>
          </div>
          <div className="work-gallery" aria-label="Photos of Naqaash Foundation's work">
            {photos.map((photo, index) => (
              <figure className="work-photo" key={photo.src}>
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading={index < 3 ? "eager" : "lazy"}
                  decoding="async"
                />
                <figcaption>
                  <span className="work-photo-number">{String(index + 1).padStart(2, "0")}</span>
                  Naqaash Foundation · Our work
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="work-cta">
            <div>
              <div className="eyebrow">Be part of the work</div>
              <h2>Help create more opportunities for women.</h2>
            </div>
            <a className="btn btn-brand" href="/get-involved">Get involved <svg><use href="#i-arrow" /></svg></a>
          </div>
        </div>
      </section>
    </main>
  );
}
