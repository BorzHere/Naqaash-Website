# Launch checklist

## A. Content the Foundation needs to confirm

| # | Item | Where | Status |
|---|---|---|---|
| 1 | Main email address. The old site showed both `hello@naqaashfoundations.com` (with an extra "s") and `naqaashfoundation@gmail.com`. The new site uses `hello@naqaashfoundation.com`. | Contact page, footer | ☐ |
| 2 | Phone and WhatsApp number. The old site's number looked malformed, so none is shown yet. | Contact page | ☐ |
| 3 | Mission and vision. These are new wording. | About page | ☐ |
| 4 | Climate programs: flood preparedness, drought and water, heat and maternal health, climate-smart livelihoods, green enterprise. Confirm which are running now and which are planned. | Climate page | ☐ |
| 5 | ESG and export services: carbon footprint, ESG report, green upgrades, export readiness, and the company services. Confirm the scope and who delivers them. | ESG page | ☐ |
| 6 | Impact figures carried over from the old site (5,000+, 300+, PKR 20,000, 200+, 1,000+, 200+, 5 centres) and targets (1,500 / 500 / 100 / 10 / 1M). Re-check these against current records. | Home, Impact | ☐ |
| 7 | Project locations are now shown as "Pakistan". Add specific locations if wanted. ICT Skills shows "Multan", but the old site's description said Sialkot. | Economic, Impact | ☐ |
| 8 | Team bios and photos. Initials are used as placeholders. | About | ☐ |
| 9 | Bank transfer details and donation gateway. | Get Involved | ☐ |
| 10 | Links for other social channels (WhatsApp, LinkedIn, YouTube, X), if active. | Contact, footer | ☐ |
| 11 | High-resolution or vector logo. | assets/img | ☐ |

## B. Fact cards and sources (check before publishing)

| Claim on site | Source |
|---|---|
| Pakistan ranked 148/148 in the Global Gender Gap Index 2025, with 56.7% of the gap closed | World Economic Forum, Global Gender Gap Report 2025 |
| 33 million people affected by the 2022 floods, about 650,000 of them pregnant women | UNFPA statement, 2022 |
| Fewer than 1 in 4 working-age women are in Pakistan's labour force | Pakistan Bureau of Statistics, Labour Force Survey. **Confirm the latest figure from LFS 2024-25.** |
| SECP adopted IFRS S1 and S2 in phases from 2025 | SECP press release, 1 January 2025 |
| EU carbon border rules and supply-chain due diligence raise data requirements for exporters | EU CBAM regulation; EU due-diligence rules |
| Supplier emissions (Scope 3) are often the largest part of a company's footprint | GHG Protocol |

## C. Build tasks

- [ ] Connect the contact form to a backend and add spam protection
- [ ] Connect donations to a payment gateway and set up receipts
- [ ] Add a privacy policy page and link it in the footer
- [ ] Add analytics and conversion events
- [ ] Set the absolute `og:image` URL, canonical tags, `sitemap.xml`, `robots.txt` and Organization JSON-LD
- [ ] Set up 301 redirects from the old URLs (see README §6)
- [ ] Self-host fonts (optional, faster)
- [ ] Add a cookie banner if analytics or ads cookies require one

## D. QA before go-live

- [ ] Test on Chrome, Safari, Firefox and Edge, plus iOS Safari and Android Chrome
- [ ] Check widths 360, 390, 768, 1024, 1280 and 1440 px for horizontal scroll and wrapping
- [ ] Check light and dark mode (switch the operating system theme)
- [ ] Use keyboard only: the skip link, menu, all links, the donation radios and the form
- [ ] Run Lighthouse and aim for 90+ in Performance, Accessibility, Best Practices and SEO
- [ ] Submit the form end to end and confirm the email or CRM record arrives
- [ ] Make a real test donation and confirm the receipt
- [ ] Check all `?topic=` deep links pre-select the right form option
