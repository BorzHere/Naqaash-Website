import { useState } from "react";

const funds = [
  ["starter", "Starter loan", "Seed capital for a new home business", "PKR 10,000"],
  ["growth", "Growth loan", "Equipment and stock to scale up", "PKR 50,000"],
  ["climate", "Climate resilience fund", "Flood and drought preparedness, recovery", "Any amount"],
  ["export", "Export-ready business", "ESG assessment and export support for one business", "Any amount"],
  ["scholar", "Scholarship", "Keep a girl in school or training", "Any amount"],
];

const pledges = {
  starter: "Pledge a starter loan",
  growth: "Pledge a growth loan",
  climate: "Give to the climate fund",
  export: "Sponsor an export-ready business",
  scholar: "Fund a scholarship",
};

export default function DonationPicker() {
  const [selected, setSelected] = useState("starter");

  return (
    <div className="donate-card">
      <h3>Choose what your gift does</h3>
      <p>Every rupee goes into a program.</p>
      <div className="funds" role="radiogroup" aria-label="Donation options">
        {funds.map(([value, name, description, amount], index) => (
          <label className="fund" key={value}>
            <input
              type="radio"
              name="fund"
              id={`f${index + 1}`}
              value={value}
              checked={selected === value}
              onChange={() => setSelected(value)}
            />
            <div><b>{name}</b><span>{description}</span></div>
            <span className="amt">{amount}</span>
          </label>
        ))}
      </div>
      <a className="btn btn-gold" href={`/contact?topic=donate&fund=${encodeURIComponent(selected)}`} style={{ justifySelf: "start" }}>
        {pledges[selected]} <svg><use href="#i-arrow" /></svg>
      </a>
      <p className="note">To give by bank transfer, contact us and we&apos;ll share account details and a receipt. <b>Corporate and CSR partners</b> can fund a full cohort or district.</p>
    </div>
  );
}
