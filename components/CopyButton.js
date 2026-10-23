import { useRef, useState } from "react";

export default function CopyButton({ targetId }) {
  const [label, setLabel] = useState("Copy");
  const timeoutRef = useRef(null);

  async function handleCopy() {
    const target = document.getElementById(targetId);
    if (!target) return;

    try {
      await navigator.clipboard.writeText(target.textContent || "");
      setLabel("Copied");
      timeoutRef.current = window.setTimeout(() => setLabel("Copy"), 1600);
    } catch {
      const range = document.createRange();
      range.selectNodeContents(target);
      const selection = window.getSelection();
      selection?.removeAllRanges();
      selection?.addRange(range);
      setLabel("Selected");
    }
  }

  return <button className="copy" type="button" onClick={handleCopy}>{label}</button>;
}
