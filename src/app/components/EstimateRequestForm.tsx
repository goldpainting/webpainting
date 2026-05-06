"use client";

import { type FormEvent, useState } from "react";

type EstimateRequestFormProps = {
  buttonLabel?: string;
  className?: string;
  helperText?: string | null;
  showContactLinks?: boolean;
  source?: string;
  tone?: "light" | "dark";
};

const emailTarget = "Goldlionpainting@gmail.com";

function getFormValue(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export default function EstimateRequestForm({
  buttonLabel = "Send",
  className,
  helperText = "Send your project details directly to our team.",
  showContactLinks = true,
  source = "Website estimate form",
  tone = "light",
}: EstimateRequestFormProps) {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const isDark = tone === "dark";
  const fieldClass = isDark
    ? "rounded-full border border-white/20 bg-white px-4 py-3 text-[#0c0d0e] placeholder:text-[#777777] transition focus:border-[#e4ad42] focus:outline-none"
    : "rounded-full border border-[#6d7782] bg-white px-4 py-3 text-[#2f2a24] placeholder:text-[#777777] transition focus:border-[#c7942f] focus:outline-none";
  const helperClass = isDark ? "text-[#dddddd]/85" : "text-[#64584c]";
  const statusMessageClass =
    status === "success"
      ? "text-[#1d7f3f]"
      : isDark
        ? "text-[#ffb4b4]"
        : "text-[#b00000]";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = getFormValue(formData, "name");
    const phone = getFormValue(formData, "phone");
    const email = getFormValue(formData, "email");
    const date = getFormValue(formData, "date");
    const message = getFormValue(formData, "message");

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/estimate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, phone, email, date, message, source }),
      });

      if (!response.ok) {
        throw new Error("Unable to send estimate request.");
      }

      form.reset();
      setStatus("success");
    } catch {
      setErrorMessage(
        "We could not send the form. Please call or email us directly.",
      );
      setStatus("error");
    }
  }

  return (
    <form className={className} onSubmit={handleSubmit}>
      <div className="flex flex-col gap-1">
        <label htmlFor="estimate-name" className="sr-only">
          Name
        </label>
        <input
          id="estimate-name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Name"
          className={fieldClass}
          required
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="estimate-phone" className="sr-only">
          Phone Number
        </label>
        <input
          id="estimate-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="Phone Number"
          className={fieldClass}
          required
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="estimate-email" className="sr-only">
          Email
        </label>
        <input
          id="estimate-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="Email"
          className={fieldClass}
          required
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="estimate-date" className="sr-only">
          Preferred Date
        </label>
        <input
          id="estimate-date"
          name="date"
          type="text"
          placeholder="Give us a Date"
          className={fieldClass}
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="estimate-message" className="sr-only">
          Message
        </label>
        <textarea
          id="estimate-message"
          name="message"
          rows={5}
          placeholder="Message"
          className={`${fieldClass} min-h-32 resize-y rounded-xl`}
          required
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-2 w-full rounded-full bg-[#d90000] px-4 py-3 text-lg font-bold text-white shadow-[0_12px_22px_rgba(0,0,0,0.28)] transition hover:bg-[#0c0d0e] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? "Sending..." : buttonLabel}
      </button>

      {status === "success" ? (
        <p className={`text-sm leading-6 font-semibold ${statusMessageClass}`}>
          Thank you. Your estimate request was sent.
        </p>
      ) : null}
      {status === "error" ? (
        <p className={`text-sm leading-6 font-semibold ${statusMessageClass}`}>
          {errorMessage}
        </p>
      ) : null}
      {helperText ? (
        <p className={`text-sm leading-6 ${helperClass}`}>{helperText}</p>
      ) : null}
      {showContactLinks ? (
        <p className={`text-sm ${helperClass}`}>
          Prefer faster contact? Call{" "}
          <a
            href="tel:9414625894"
            className="font-semibold text-[#e4ad42] underline underline-offset-4"
          >
            941-462-5894
          </a>{" "}
          or email{" "}
          <a
            href={`mailto:${emailTarget}`}
            className="font-semibold text-[#e4ad42] underline underline-offset-4"
          >
            {emailTarget}
          </a>
          .
        </p>
      ) : null}
    </form>
  );
}
