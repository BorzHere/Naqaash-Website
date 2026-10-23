"use client";

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const topics = [
  ["donate", "Make a donation"],
  ["esg", "Book an ESG / export assessment"],
  ["partner", "Partner with Naqaash"],
  ["mentor", "Mentor an entrepreneur"],
  ["volunteer", "Volunteer"],
  ["apply", "Apply for a program or loan"],
  ["other", "Something else"],
];

const funds = {
  starter: "pledge a starter loan",
  growth: "pledge a growth loan",
  climate: "give to the climate fund",
  export: "sponsor an export-ready business",
  scholar: "fund a scholarship",
};

export default function ContactForm() {
  const { search } = useLocation();
  const [topic, setTopic] = useState("other");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(search);
    const requestedTopic = params.get("topic");
    const fund = params.get("fund");

    setTopic(topics.some(([value]) => value === requestedTopic) ? requestedTopic : "other");
    setMessage(fund && funds[fund] ? `I would like to: ${funds[fund]}.` : "");
    setStatus("");
  }, [search]);

  function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const organisation = String(form.get("org") || "").trim();
    const formMessage = String(form.get("message") || "").trim();

    if (!name || !/^\S+@\S+\.\S+$/.test(email) || !formMessage) {
      setStatus("Please add your name, a valid email and a message.");
      return;
    }

    const subject = encodeURIComponent(`Website enquiry: ${String(form.get("topic") || "general")}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}${organisation ? `\nOrganisation: ${organisation}` : ""}\n\n${formMessage}`,
    );
    window.location.href = `mailto:hello@naqaashfoundation.com?subject=${subject}&body=${body}`;
    setStatus("Your email app will open with your enquiry ready to send.");
  }

  return (
    <form className="cform" id="cform" noValidate onSubmit={handleSubmit}>
      <div className="row2">
        <div className="field"><label htmlFor="c-name">Your name</label><input id="c-name" name="name" autoComplete="name" required /></div>
        <div className="field"><label htmlFor="c-email">Email</label><input id="c-email" name="email" type="email" autoComplete="email" required /></div>
      </div>
      <div className="row2">
        <div className="field"><label htmlFor="c-org">Organisation (optional)</label><input id="c-org" name="org" autoComplete="organization" /></div>
        <div className="field">
          <label htmlFor="c-topic">I&apos;d like to</label>
          <select id="c-topic" name="topic" value={topic} onChange={(event) => setTopic(event.target.value)}>
            {topics.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
          </select>
        </div>
      </div>
      <div className="field"><label htmlFor="c-msg">Message</label><textarea id="c-msg" name="message" value={message} onChange={(event) => setMessage(event.target.value)} required /></div>
      <button className="btn btn-brand" type="submit" style={{ justifySelf: "start" }}>Send message <svg><use href="#i-arrow" /></svg></button>
      {status && <div className="form-msg" role="status">{status}</div>}
    </form>
  );
}
