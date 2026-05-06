"use client";

import { type FormEvent, useState } from "react";

const emailTarget = "Goldlionpainting@gmail.com";

function getFormValue(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export default function ColorConsultationForm() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = getFormValue(formData, "name");
    const email = getFormValue(formData, "email");
    const phone = getFormValue(formData, "phone");
    const roomType = getFormValue(formData, "roomType");
    const styleGoals = getFormValue(formData, "styleGoals");
    const message = [
      `Room type: ${roomType}`,
      "",
      "Style goals:",
      styleGoals,
    ].join("\n");

    setStatus("submitting");

    try {
      const response = await fetch("/api/estimate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          email,
          date: "",
          message,
          source: "Color consultation form",
        }),
      });

      if (!response.ok) {
        throw new Error("Unable to send color consultation request.");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-1">
        <label
          htmlFor="consult-name"
          className="text-sm font-black text-[#0c0d0e]"
        >
          Name
        </label>
        <input
          id="consult-name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Your name"
          className="rounded-xl border border-[#0c0d0e]/20 bg-white p-3 text-[#0c0d0e] transition placeholder:text-[#5d646b] focus:border-[#e4ad42] focus:outline-none"
          required
        />
      </div>

      <div className="flex flex-col gap-1">
        <label
          htmlFor="consult-email"
          className="text-sm font-black text-[#0c0d0e]"
        >
          Email
        </label>
        <input
          id="consult-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          className="rounded-xl border border-[#0c0d0e]/20 bg-white p-3 text-[#0c0d0e] transition placeholder:text-[#5d646b] focus:border-[#e4ad42] focus:outline-none"
          required
        />
      </div>

      <div className="flex flex-col gap-1">
        <label
          htmlFor="consult-phone"
          className="text-sm font-black text-[#0c0d0e]"
        >
          Phone Number
        </label>
        <input
          id="consult-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="941-000-0000"
          className="rounded-xl border border-[#0c0d0e]/20 bg-white p-3 text-[#0c0d0e] transition placeholder:text-[#5d646b] focus:border-[#e4ad42] focus:outline-none"
          required
        />
      </div>

      <div className="flex flex-col gap-1">
        <label
          htmlFor="consult-room"
          className="text-sm font-black text-[#0c0d0e]"
        >
          Room Type
        </label>
        <input
          id="consult-room"
          name="roomType"
          type="text"
          placeholder="Living room, bedroom, office..."
          className="rounded-xl border border-[#0c0d0e]/20 bg-white p-3 text-[#0c0d0e] transition placeholder:text-[#5d646b] focus:border-[#e4ad42] focus:outline-none"
          required
        />
      </div>

      <div className="flex flex-col gap-1">
        <label
          htmlFor="consult-style"
          className="text-sm font-black text-[#0c0d0e]"
        >
          Style Goals
        </label>
        <textarea
          id="consult-style"
          name="styleGoals"
          rows={4}
          placeholder="Tell us about the mood, finishes, and spaces you want help coordinating."
          className="resize-none rounded-xl border border-[#0c0d0e]/20 bg-white p-3 text-[#0c0d0e] transition placeholder:text-[#5d646b] focus:border-[#e4ad42] focus:outline-none"
          required
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-2 w-full rounded-xl bg-[#d90000] px-4 py-3 text-lg font-black text-white transition hover:bg-[#e4ad42] hover:text-[#0c0d0e] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? "Sending..." : "Request Consultation"}
      </button>

      {status === "success" ? (
        <p className="text-sm leading-6 font-semibold text-[#1d7f3f]">
          Thank you. Your consultation request was sent.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="text-sm leading-6 font-semibold text-[#b00000]">
          We could not send the form. Please call or email us directly.
        </p>
      ) : null}
      <p className="text-sm leading-6 text-[#1f2124]">
        Submit the form and our team will receive your consultation request.
      </p>
      <p className="text-sm text-[#1f2124]">
        Prefer direct contact? Call{" "}
        <a
          href="tel:9414625894"
          className="font-black text-[#a97a36] underline underline-offset-4"
        >
          941-462-5894
        </a>{" "}
        or email{" "}
        <a
          href={`mailto:${emailTarget}`}
          className="font-black text-[#a97a36] underline underline-offset-4"
        >
          {emailTarget}
        </a>
        .
      </p>
    </form>
  );
}
