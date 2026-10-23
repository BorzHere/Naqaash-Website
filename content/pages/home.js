import FabricCanvas from "../../components/FabricCanvas";

const economicServices = [
  ["i-coin", "Interest-free microfinance", "PKR 10,000–50,000 at 0% interest, with grace periods."],
  ["i-laptop", "Digital & vocational skills", "ICT, freelancing, jewelry making, tailoring."],
  ["i-bulb", "Enterprise lab", "Business plans, finance, legal and tax guidance."],
  ["i-globe", "Export readiness", "Standards, certification and buyer-ready documentation."],
];

const climateServices = [
  ["i-wave", "Flood & disaster preparedness", "Women-led early warning, safe shelter and quick recovery."],
  ["i-drop", "Drought & water resilience", "Water harvesting, drought-tolerant crops, fodder security."],
  ["i-therm", "Heat & maternal health", "Protecting mothers during heatwaves and after floods."],
  ["i-chart", "ESG & carbon reporting", "Measure emissions, report impact, meet buyer standards."],
];

const ladder = [
  ["01", "Assess", "ESG and export-readiness check"],
  ["02", "Measure", "Carbon footprint and social baseline"],
  ["03", "Improve", "Energy, waste and workplace upgrades"],
  ["04", "Report", "A simple, buyer-ready ESG report"],
  ["05", "Export", "Matched with buyers and supply chains"],
];

const facts = [
  ["148/148", "Pakistan's rank", " in the 2025 Global Gender Gap Index, last of all countries measured.", "World Economic Forum, 2025"],
  ["33M", "People affected", " by the 2022 floods, including about 650,000 pregnant women.", "UNFPA, 2022"],
  ["<1 in 4", "Women of working age", " in Pakistan's labour force, one of the lowest rates in the world.", "Pakistan Bureau of Statistics, Labour Force Survey"],
  ["2025", "SECP adopted", " IFRS sustainability disclosure standards in phases, raising ESG expectations across supply chains.", "Securities & Exchange Commission of Pakistan"],
];

const impact = [
  ["Women", "5,000+", "Reached through education and skills training.", ""],
  ["Businesses", "300+", "Women-led small businesses supported.", "g"],
  ["Health camps", "200+", "Free camps in underserved communities.", "t"],
  ["Students", "1,000+", "Supported with scholarships.", ""],
];

function ServiceList({ items }) {
  return (
    <ul className="plist">
      {items.map(([icon, title, description], index) => (
        <li className={index === items.length - 1 ? "new" : undefined} key={title}>
          <svg><use href={`#${icon}`} /></svg>
          <div><b>{title}</b><span>{description}</span></div>
        </li>
      ))}
    </ul>
  );
}

export default function HomePageContent() {
  return (
    <main id="main">
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <div className="eyebrow">Women · Climate · Enterprise · Pakistan</div>
            <h1 style={{ marginTop: "22px" }}>When women <span className="p">earn</span>, communities <span className="t">weather</span> the storm.</h1>
            <p className="lede">Naqaash Foundation helps women across Pakistan earn their own income, protect it from climate shocks, and grow businesses that meet the ESG and export standards global buyers now expect.</p>
            <div className="actions">
              <a className="btn btn-brand" href="/get-involved">Support a woman entrepreneur <svg><use href="#i-arrow" /></svg></a>
              <a className="btn btn-ghost" href="/about">About us</a>
            </div>
            <div className="meta">
              <span><i className="dot" style={{ background: "var(--gold)" }}></i>Economic empowerment</span>
              <span><i className="dot" style={{ background: "var(--teal)" }}></i>Climate resilience</span>
              <span><i className="dot" style={{ background: "var(--brand)" }}></i>ESG & export readiness</span>
            </div>
          </div>
          <div className="fabric" aria-label="Naqaash Foundation seal on a phulkari-style stitched pattern">
            <FabricCanvas />
            <div className="stamp"><span className="logo" aria-hidden="true"></span></div>
            <div className="fabric-label">
              <span className="urdu" lang="ur">نقاش</span>
              <p><b>Naqqash</b>: the artisan who leaves a lasting mark. The diamonds come from phulkari, the embroidery women in Pakistan have stitched and sold for generations.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec tight">
        <div className="wrap">
          <div className="sec-head">
            <div className="eyebrow">Our two specialties</div>
            <h2>Income she controls. Resilience she can count on.</h2>
            <p className="lede">Climate shocks hit women's livelihoods first. So we build income and resilience together, and help women-led businesses prove their impact to buyers and investors.</p>
          </div>
          <div className="pillars">
            <article className="pillar econ">
              <div className="tag">Specialty one</div>
              <h3>Women's Economic Empowerment</h3>
              <ServiceList items={economicServices} />
              <a className="link" href="/economic-empowerment">Explore economic empowerment →</a>
            </article>
            <article className="pillar clim">
              <div className="tag">Specialty two</div>
              <h3>Women & Climate Resilience</h3>
              <ServiceList items={climateServices} />
              <a className="link" href="/climate-resilience">Explore climate resilience →</a>
            </article>
          </div>
        </div>
      </section>

      <section className="sec tight">
        <div className="wrap">
          <div className="feature">
            <div>
              <div className="eyebrow">Sustainable enterprise</div>
              <h2>From home business to export-ready, ESG-ready supplier.</h2>
              <p className="lede">Global buyers now ask suppliers for carbon data, social safeguards and sustainability reports. We help women-led businesses measure, improve and report, so they can sell to bigger markets instead of being shut out.</p>
              <div className="actions"><a className="btn btn-gold" href="/esg-export-readiness">See the ESG & export program <svg><use href="#i-arrow" /></svg></a></div>
            </div>
            <ol className="ladder">
              {ladder.map(([number, title, description]) => (
                <li key={number}><span className="k">{number}</span><div><b>{title}</b><span>{description}</span></div></li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="sec band">
        <div className="wrap split">
          <div>
            <div className="eyebrow">Why this work, why now</div>
            <h2>Pakistan's women stand at the sharp end of two crises.</h2>
            <p className="lede">Few women work for pay or own assets, and most live where floods, drought and heat strike hardest. Each gap makes the other worse. A secure income of her own is often the best climate protection a woman has.</p>
          </div>
          <div className="facts">
            {facts.map(([number, title, detail, source]) => (
              <div className="fact" key={number}>
                <div className="n">{number}</div>
                <p><b>{title}</b>{detail}<cite>{source}</cite></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <div className="eyebrow">Impact since 2020</div>
            <h2>Results built with women across Pakistan.</h2>
          </div>
          <div className="stats" style={{ "--c": "4" }}>
            {impact.map(([label, number, description, tone]) => (
              <div className={`stat${tone ? ` ${tone}` : ""}`} key={label}>
                <span className="u">{label}</span>
                <div className="n">{number}</div>
                <p>{description}</p>
              </div>
            ))}
          </div>
          <div className="actions"><a className="link" href="/impact">See our full impact →</a></div>
        </div>
      </section>

      <section className="sec tight">
        <div className="wrap">
          <div className="cta">
            <h2>Fund a livelihood that can survive the next flood.</h2>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a className="btn btn-gold" href="/get-involved">Donate</a>
              <a className="btn btn-ghost" href="/esg-export-readiness">Partner on ESG</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
