"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

export default function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <span className="inline-flex items-center gap-1">
      <span>{email}</span>
      <button
        onClick={handleCopy}
        className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Copy email address"
      >
        {copied ? <Check size={14} /> : <Copy size={14} />}
      </button>
    </span>
  );
}
