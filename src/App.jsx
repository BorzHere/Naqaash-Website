import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import SiteShell from "../components/SiteShell";
import { pages } from "../content/pages";

const defaultDescription =
  "Naqaash Foundation helps women across Pakistan earn their own income, protect it from climate shocks, and grow sustainable businesses.";

function RouteContent() {
  const { pathname } = useLocation();
  const slug = pathname === "/" ? "home" : pathname.replace(/^\/+|\/+$/g, "");
  const page = pages[slug];

  useEffect(() => {
    document.title = page?.title || "Page not found · Naqaash Foundation";
    document.querySelector('meta[name="description"]')?.setAttribute(
      "content",
      page?.description || defaultDescription,
    );
  }, [page, slug]);

  if (!page) {
    return (
      <main id="main" className="mx-auto grid min-h-[55vh] max-w-content content-center gap-5 px-5 py-20">
        <p className="font-mono text-xs uppercase tracking-[.14em] text-brand">Page not found</p>
        <h1 className="text-5xl font-extrabold">This page is not here.</h1>
        <a className="font-semibold text-brand-dark" href="/">Return to the home page →</a>
      </main>
    );
  }

  const PageContent = page.component;
  return <PageContent />;
}

export default function App() {
  return (
    <SiteShell>
      <Routes>
        <Route path="*" element={<RouteContent />} />
      </Routes>
    </SiteShell>
  );
}
