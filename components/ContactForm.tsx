"use client";

import { useState } from "react";

type FormState = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [notice, setNotice] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");
    setNotice("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message")
      })
    });

    const result = await response.json().catch(() => ({}));

    if (!response.ok) {
      setState("error");
      setNotice(result.error ?? "Message failed to send. Please try again.");
      return;
    }

    form.reset();
    setState("sent");
    setNotice("Message sent. Thank you, I will reply as soon as possible.");
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-bg-secondary p-5 shadow-sm md:p-8">
      <h2 className="font-display text-5xl leading-none text-text-primary">Start a Conversation</h2>
      <div className="mt-6 grid gap-4">
        <label className="grid gap-2 text-xs font-bold uppercase text-text-secondary">
          Name
          <input
            required
            className="border border-border bg-bg-primary px-4 py-3 text-sm normal-case text-text-primary outline-none transition placeholder:text-dust focus:border-accent"
            name="name"
            placeholder="Your name"
          />
        </label>
        <label className="grid gap-2 text-xs font-bold uppercase text-text-secondary">
          Email
          <input
            required
            className="border border-border bg-bg-primary px-4 py-3 text-sm normal-case text-text-primary outline-none transition placeholder:text-dust focus:border-accent"
            name="email"
            type="email"
            placeholder="you@example.com"
          />
        </label>
        <label className="grid gap-2 text-xs font-bold uppercase text-text-secondary">
          Message
          <textarea
            required
            className="min-h-36 border border-border bg-bg-primary px-4 py-3 text-sm normal-case text-text-primary outline-none transition placeholder:text-dust focus:border-accent"
            name="message"
            placeholder="Tell me about the role, project, or system you need built."
          />
        </label>
        <button
          type="submit"
          disabled={state === "sending"}
          className="rounded-lg bg-cta px-5 py-3 text-sm font-black uppercase text-white transition hover:bg-cta-hover disabled:cursor-not-allowed disabled:opacity-60"
        >
          {state === "sending" ? "Sending..." : "Send Message"}
        </button>
        {notice ? (
          <p className={`text-sm font-semibold ${state === "error" ? "text-red-500" : "text-accent"}`}>
            {notice}
          </p>
        ) : null}
      </div>
    </form>
  );
}
