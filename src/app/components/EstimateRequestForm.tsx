"use client";

import { type FormEvent, useState } from "react";

type EstimateRequestFormProps = {
  buttonLabel?: string;
  className?: string;
  helperText?: string;
};

const emailTarget = "goldlionpainting@gmail.com";

export default function EstimateRequestForm({
  buttonLabel = "Send Request",
  className,
  helperText = "Submitting opens your email app with your project details pre-filled.",
}: EstimateRequestFormProps) {
  const [status, setStatus] = useState<"idle" | "opening">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const service = String(formData.get("service") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const subject = `Free estimate request from ${name || "website visitor"}`;
    const body = [
      "Hello Gold Lion Painting Inc,",
      "",
      "I would like to request a free estimate.",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Service needed: ${service}`,
      "",
      "Project details:",
      message,
    ].join("\n");

    setStatus("opening");
    window.location.href = `mailto:${emailTarget}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className={className} onSubmit={handleSubmit}>
      <div className="flex flex-col gap-1">
        <label htmlFor="estimate-name" className="text-sm font-semibold text-[#8f6220]">
          Name
        </label>
        <input
          id="estimate-name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Your name"
          className="rounded-xl border border-[#dfcfb5] bg-[#fffaf2] p-3 text-[#2f2a24] placeholder:text-[#8f7d6a] transition focus:border-[#c7942f] focus:outline-none"
          required
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="estimate-email" className="text-sm font-semibold text-[#8f6220]">
          Email
        </label>
        <input
          id="estimate-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          className="rounded-xl border border-[#dfcfb5] bg-[#fffaf2] p-3 text-[#2f2a24] placeholder:text-[#8f7d6a] transition focus:border-[#c7942f] focus:outline-none"
          required
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="estimate-phone" className="text-sm font-semibold text-[#8f6220]">
          Phone Number
        </label>
        <input
          id="estimate-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="941-000-0000"
          className="rounded-xl border border-[#dfcfb5] bg-[#fffaf2] p-3 text-[#2f2a24] placeholder:text-[#8f7d6a] transition focus:border-[#c7942f] focus:outline-none"
          required
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="estimate-service" className="text-sm font-semibold text-[#8f6220]">
          Service Needed
        </label>
        <select
          id="estimate-service"
          name="service"
          defaultValue=""
          className="rounded-xl border border-[#dfcfb5] bg-[#fffaf2] p-3 text-[#2f2a24] transition focus:border-[#c7942f] focus:outline-none"
          required
        >
          <option value="" disabled>
            Select a service
          </option>
          <option value="Interior painting">Interior painting</option>
          <option value="Exterior painting">Exterior painting</option>
          <option value="Cabinet painting">Cabinet painting</option>
          <option value="Multiple services">Multiple services</option>
        </select>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="estimate-message" className="text-sm font-semibold text-[#8f6220]">
          Project Details
        </label>
        <textarea
          id="estimate-message"
          name="message"
          rows={4}
          placeholder="Tell us about the space, rough timeline, and anything important to quote accurately."
          className="resize-none rounded-xl border border-[#dfcfb5] bg-[#fffaf2] p-3 text-[#2f2a24] placeholder:text-[#8f7d6a] transition focus:border-[#c7942f] focus:outline-none"
          required
        />
      </div>

      <button
        type="submit"
        className="mt-2 w-full rounded-xl bg-[#d4a038] px-4 py-3 text-lg font-bold text-[#2f2a24] transition hover:bg-[#c7942f]"
      >
        {status === "opening" ? "Opening your email app..." : buttonLabel}
      </button>

      <p className="text-sm leading-6 text-[#64584c]">{helperText}</p>
      <p className="text-sm text-[#64584c]">
        Prefer faster contact? Call{" "}
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
