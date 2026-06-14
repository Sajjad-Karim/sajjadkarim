"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import { cn } from "@/lib/utils";
import { Button } from "@/app/components/ui/button";
import { contactFormConfig } from "@/config/contact-content";
import { isValidEmail } from "@/utils/check-email";

const initialState = {
  name: "",
  email: "",
  projectType: "",
  budget: "",
  message: "",
};

function ContactForm() {
  const [userInput, setUserInput] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInput((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined, form: undefined }));
    setIsSuccess(false);

    if (name === "email" && value) {
      setErrors((prev) => ({
        ...prev,
        email: isValidEmail(value) ? undefined : "Enter a valid email address.",
      }));
    }
  };

  const validate = () => {
    const next = {};

    if (!userInput.name.trim()) next.name = "Name is required.";
    if (!userInput.email.trim()) {
      next.email = "Email is required.";
    } else if (!isValidEmail(userInput.email)) {
      next.email = "Enter a valid email address.";
    }
    if (!userInput.projectType) next.projectType = "Select a project type.";
    if (!userInput.message.trim()) next.message = "Message is required.";

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);
    setIsSuccess(false);

    const budgetLabel =
      contactFormConfig.budgetRanges.find((b) => b.value === userInput.budget)
        ?.label ?? "Not specified";

    const composedMessage = [
      `Project Type: ${userInput.projectType}`,
      `Budget: ${budgetLabel}`,
      "",
      userInput.message.trim(),
    ].join("\n");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: userInput.name.trim(),
          email: userInput.email.trim(),
          message: composedMessage,
          projectType: userInput.projectType,
          budget: budgetLabel,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to send message.");
      }

      setIsSuccess(true);
      toast.success("Message sent — I'll be in touch soon.");
      setUserInput(initialState);
    } catch (err) {
      toast.error(
        err.message || "Something went wrong. Please email me directly."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const fieldClass = (field) =>
    cn(
      "w-full rounded-lg border bg-canvas/60 px-4 py-2.5 text-body-md text-neutral-100",
      "placeholder:text-muted transition-hover",
      "focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20",
      errors[field]
        ? "border-error/60"
        : "border-border hover:border-border-strong"
    );

  return (
    <div
      id="contact-form"
      className="contact-form section-reveal section-stagger-4 scroll-mt-28"
    >
      <div className="mb-6">
        <p className="type-mono mb-2 text-primary">Project inquiry</p>
        <h3 className="type-h3 text-neutral-100">Tell me about your idea</h3>
        <p className="mt-2 text-body-sm text-muted">
          Share a few details — I&apos;ll respond with next steps.
        </p>
      </div>

      <div className="contact-form__panel rounded-2xl border border-border bg-surface/30 p-5 sm:p-6 lg:p-8">
        {isSuccess && (
          <div
            role="status"
            className="mb-6 rounded-lg border border-success/30 bg-success/10 px-4 py-3 text-body-sm text-success"
          >
            Thank you — your message was sent successfully.
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          noValidate
          className="flex flex-col gap-5"
          aria-label="Contact form"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="contact-name" className="type-label">
                Name <span className="text-primary">*</span>
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                maxLength={100}
                autoComplete="name"
                value={userInput.name}
                onChange={handleChange}
                className={fieldClass("name")}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "contact-name-error" : undefined}
                placeholder="Your name"
              />
              {errors.name && (
                <p id="contact-name-error" className="text-caption text-error" role="alert">
                  {errors.name}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="contact-email" className="type-label">
                Email <span className="text-primary">*</span>
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                maxLength={100}
                autoComplete="email"
                value={userInput.email}
                onChange={handleChange}
                className={fieldClass("email")}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "contact-email-error" : undefined}
                placeholder="you@company.com"
              />
              {errors.email && (
                <p id="contact-email-error" className="text-caption text-error" role="alert">
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="contact-project-type" className="type-label">
                Project type <span className="text-primary">*</span>
              </label>
              <select
                id="contact-project-type"
                name="projectType"
                required
                value={userInput.projectType}
                onChange={handleChange}
                className={cn(fieldClass("projectType"), "cursor-pointer")}
                aria-invalid={!!errors.projectType}
                aria-describedby={
                  errors.projectType ? "contact-project-type-error" : undefined
                }
              >
                <option value="" disabled>
                  Select a type
                </option>
                {contactFormConfig.projectTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              {errors.projectType && (
                <p
                  id="contact-project-type-error"
                  className="text-caption text-error"
                  role="alert"
                >
                  {errors.projectType}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="contact-budget" className="type-label">
                Budget <span className="text-muted">(optional)</span>
              </label>
              <select
                id="contact-budget"
                name="budget"
                value={userInput.budget}
                onChange={handleChange}
                className={cn(fieldClass("budget"), "cursor-pointer")}
              >
                {contactFormConfig.budgetRanges.map((range) => (
                  <option key={range.value || "none"} value={range.value}>
                    {range.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="contact-message" className="type-label">
              Message <span className="text-primary">*</span>
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={5}
              maxLength={2000}
              value={userInput.message}
              onChange={handleChange}
              className={cn(fieldClass("message"), "resize-y min-h-[8rem]")}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "contact-message-error" : undefined}
              placeholder="Tell me about your project, timeline, and goals..."
            />
            {errors.message && (
              <p id="contact-message-error" className="text-caption text-error" role="alert">
                {errors.message}
              </p>
            )}
          </div>

          <div className="flex flex-col items-start gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              loading={isLoading}
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send inquiry"}
            </Button>
            <p className="text-caption text-muted">
              By submitting, you agree to be contacted about your inquiry.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
