"use client";

import { type FormEvent, useState } from "react";

const emailTarget = "goldlionpainting@gmail.com";

export default function ColorConsultationForm() {
  const [status, setStatus] = useState<"idle" | "opening">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const roomType = String(formData.get("roomType") ?? "").trim();
    const styleGoals = String(formData.get("styleGoals") ?? "").trim();

    const subject = `Color consultation request from ${name || "website visitor"}`;
    const body = [
      "Hello Gold Lion Painting Inc,",
      "",
      "I would like to request a color consultation.",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Room type: ${roomType}`,
      "",
      "Style goals and project notes:",
      styleGoals,
    ].join("\n");

    setStatus("opening");
    window.location.href = `mailto:${emailTarget}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-1">
        <label htmlFor="consult-name" className="text-sm font-semibold text-[#8f6220]">
          Name
        </label>
        <input
          id="consult-name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Your name"
          className="rounded-xl border border-[#dfcfb5] bg-[#fffaf2] p-3 text-[#2f2a24] placeholder:text-[#8f7d6a] transition focus:border-[#c7942f] focus:outline-none"
          required
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="consult-email" className="text-sm font-semibold text-[#8f6220]">
          Email
        </label>
        <input
          id="consult-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          className="rounded-xl border border-[#dfcfb5] bg-[#fffaf2] p-3 text-[#2f2a24] placeholder:text-[#8f7d6a] transition focus:border-[#c7942f] focus:outline-none"
          required
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="consult-phone" className="text-sm font-semibold text-[#8f6220]">
          Phone Number
        </label>
        <input
          id="consult-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="941-000-0000"
          className="rounded-xl border border-[#dfcfb5] bg-[#fffaf2] p-3 text-[#2f2a24] placeholder:text-[#8f7d6a] transition focus:border-[#c7942f] focus:outline-none"
          required
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="consult-room" className="text-sm font-semibold text-[#8f6220]">
          Room Type
        </label>
        <input
          id="consult-room"
          name="roomType"
          type="text"
          placeholder="Living room, bedroom, office..."
          className="rounded-xl border border-[#dfcfb5] bg-[#fffaf2] p-3 text-[#2f2a24] placeholder:text-[#8f7d6a] transition focus:border-[#c7942f] focus:outline-none"
          required
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="consult-style" className="text-sm font-semibold text-[#8f6220]">
          Style Goals
        </label>
        <textarea
          id="consult-style"
          name="styleGoals"
          rows={4}
          placeholder="Tell us about the mood, finishes, and spaces you want help coordinating."
          className="resize-none rounded-xl border border-[#dfcfb5] bg-[#fffaf2] p-3 text-[#2f2a24] placeholder:text-[#8f7d6a] transition focus:border-[#c7942f] focus:outline-none"
          required
        />
      </div>

      <button
        type="submit"
        className="mt-2 w-full rounded-xl bg-[#d4a038] px-4 py-3 text-lg font-bold text-[#2f2a24] transition hover:bg-[#c7942f]"
      >
        {status === "opening" ? "Opening your email app..." : "Request Consultation"}
      </button>

      <p className="text-sm leading-6 text-[#64584c]">
        Submitting opens your email app with your consultation request pre-filled.
      </p>
      <p className="text-sm text-[#64584c]">
        Prefer direct contact? Call{" "}
        <a href="tel:9414625894" className="font-semibold text-[#8f6220] underline underline-offset-4">
          941-462-5894
        </a>{" "}
        or email{" "}
        <a
          href={`mailto:${emailTarget}`}
          className="font-semibold text-[#8f6220] underline underline-offset-4"
        >
          {emailTarget}
        </a>
        .
      </p>
    </form>
  );
}
