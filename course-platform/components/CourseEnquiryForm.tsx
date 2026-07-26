"use client";

import { FormEvent, useState } from "react";

type FormData = {
  name: string;
  email: string;
  course: string;
};

const initialFormData: FormData = {
  name: "",
  email: "",
  course: "",
};

const fieldClassName =
  "w-full border border-line bg-white px-4 py-3 text-base text-ink placeholder:text-ink-soft/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blueprint disabled:cursor-not-allowed disabled:opacity-60";

export default function CourseEnquiryForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function updateField(field: keyof FormData, value: string) {
    setFormData((currentData) => ({
      ...currentData,
      [field]: value,
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setMessage("");
    setIsError(false);

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.course.trim()
    ) {
      setIsError(true);
      setMessage("Please complete all fields.");
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Unable to submit enquiry.");
      }

      setMessage(result.message);
      setFormData(initialFormData);
    } catch (error) {
      setIsError(true);

      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="enquiry" className="bg-paper-deep">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-blueprint">
            Enquire
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Enquire About a Course
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft md:text-lg">
            Share your details and our team will contact you with more
            information.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-10 grid max-w-xl gap-5"
          noValidate
        >
          <div className="grid gap-2">
            <label htmlFor="name" className="text-sm font-semibold text-ink">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              value={formData.name}
              onChange={(event) => updateField("name", event.target.value)}
              disabled={isSubmitting}
              className={fieldClassName}
            />
          </div>

          <div className="grid gap-2">
            <label htmlFor="email" className="text-sm font-semibold text-ink">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={formData.email}
              onChange={(event) => updateField("email", event.target.value)}
              disabled={isSubmitting}
              className={fieldClassName}
            />
          </div>

          <div className="grid gap-2">
            <label htmlFor="course" className="text-sm font-semibold text-ink">
              Course
            </label>
            <select
              id="course"
              name="course"
              value={formData.course}
              onChange={(event) => updateField("course", event.target.value)}
              disabled={isSubmitting}
              className={fieldClassName}
            >
              <option value="">Select a course</option>
              <option value="Full-Stack Development">
                Full-Stack Development
              </option>
              <option value="Data Science">Data Science</option>
              <option value="DSA and Interview Preparation">
                DSA and Interview Preparation
              </option>
            </select>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex h-12 w-fit items-center justify-center bg-signal px-7 text-sm font-semibold text-white transition-colors hover:bg-signal-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blueprint disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? "Submitting..." : "Submit Enquiry"}
          </button>
        </form>

        {message && (
          <p
            role="status"
            aria-live="polite"
            className={`mt-6 max-w-xl text-sm ${
              isError ? "text-signal" : "text-blueprint"
            }`}
          >
            {isError ? `Error: ${message}` : message}
          </p>
        )}
      </div>
    </section>
  );
}
