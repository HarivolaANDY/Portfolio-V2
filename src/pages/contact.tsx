import { useState } from "react";
import { motion } from "framer-motion";
import { AlertCircle, CheckCircle2, Send } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";
import { cn, sanitizeUrl } from "@/lib/utils";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_NAME = 2;
const MIN_MESSAGE = 10;

type Field = "name" | "email" | "message";
type Values = Record<Field, string>;
type Status = "idle" | "submitting" | "success" | "error";

const FIELDS: Field[] = ["name", "email", "message"];
const EMPTY: Values = { name: "", email: "", message: "" };

function validate(field: Field, value: string): string | undefined {
  const v = value.trim();
  switch (field) {
    case "name":
      return v.length < MIN_NAME ? `Le nom doit contenir au moins ${MIN_NAME} caractères.` : undefined;
    case "email":
      return !EMAIL_REGEX.test(v) ? "Veuillez entrer une adresse email valide." : undefined;
    case "message":
      return v.length < MIN_MESSAGE ? `Le message doit contenir au moins ${MIN_MESSAGE} caractères.` : undefined;
  }
}

function FieldFeedback({
  id,
  error,
  valid,
  hint,
}: {
  id: string;
  error?: string;
  valid: boolean;
  hint?: string;
}) {
  return (
    <p
      id={id}
      aria-live="polite"
      className={cn(
        "flex min-h-5 items-center gap-1.5 text-sm",
        error ? "font-medium text-error" : valid ? "text-success" : "text-base-content/60"
      )}
    >
      {error ? (
        <>
          <AlertCircle aria-hidden="true" className="size-4 shrink-0" /> {error}
        </>
      ) : valid ? (
        <>
          <CheckCircle2 aria-hidden="true" className="size-4 shrink-0" /> Parfait.
        </>
      ) : (
        hint
      )}
    </p>
  );
}

export default function ContactPage() {
  const [values, setValues] = useState<Values>(EMPTY);
  const [touched, setTouched] = useState<Record<Field, boolean>>({
    name: false,
    email: false,
    message: false,
  });
  const [status, setStatus] = useState<Status>("idle");

  const errors: Partial<Record<Field, string>> = {};
  for (const field of FIELDS) {
    const error = validate(field, values[field]);
    if (error) errors[field] = error;
  }

  const shown = (field: Field) => (touched[field] ? errors[field] : undefined);
  const isValid = (field: Field) => touched[field] && !errors[field];

  const inputState = (field: Field) =>
    shown(field) ? "input-error" : isValid(field) ? "input-success" : "";
  const textareaState = (field: Field) =>
    shown(field) ? "textarea-error" : isValid(field) ? "textarea-success" : "";

  const handleChange =
    (field: Field) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleBlur = (field: Field) => () => setTouched((prev) => ({ ...prev, [field]: true }));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });

    const firstInvalid = FIELDS.find((field) => errors[field]);
    if (firstInvalid) {
      // Move focus to the first invalid field so keyboard/screen reader users land on the problem
      e.currentTarget.querySelector<HTMLElement>(`#${firstInvalid}`)?.focus();
      return;
    }

    setStatus("submitting");
    try {
      // TODO: replace this simulated delay with a real API call (e.g. a serverless endpoint).
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("success");
      setValues(EMPTY);
      setTouched({ name: false, email: false, message: false });
    } catch {
      setStatus("error");
    }
  };

  const isSubmitting = status === "submitting";
  const remaining = Math.max(0, MIN_MESSAGE - values.message.trim().length);

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto max-w-4xl"
      >
        <h1 className="mb-10 text-center font-heading text-4xl font-bold">Me contacter</h1>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-8">
            <p className="text-lg leading-relaxed text-base-content/75">
              Vous avez un projet en tête ou vous souhaitez simplement dire bonjour ? N&apos;hésitez pas à me contacter via le formulaire ou sur les réseaux sociaux.
            </p>

            <ul className="space-y-3">
              {SOCIAL_LINKS.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.name}>
                    <a
                      href={sanitizeUrl(link.url)}
                      {...(link.url.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="group flex items-center gap-4 rounded-full font-medium transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                      <span className="flex size-12 items-center justify-center rounded-full border border-base-300 bg-base-100 shadow-sm transition-colors group-hover:border-primary/40 group-hover:bg-primary/10">
                        <Icon aria-hidden="true" className="size-5" />
                      </span>
                      <span>{link.name === "Email" ? link.url.replace("mailto:", "") : link.name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Form */}
          <div className="rounded-box border border-base-300 bg-base-100 p-6 shadow-sm md:p-8">
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="flex h-full flex-col justify-center gap-5 py-6"
              >
                <div role="status" className="alert alert-success alert-soft items-start">
                  <CheckCircle2 aria-hidden="true" className="size-6 shrink-0" />
                  <div>
                    <h2 className="font-heading text-lg font-bold">Message envoyé !</h2>
                    <p className="text-sm">
                      Merci de m&apos;avoir contacté. Je vous répondrai dans les plus brefs délais.
                    </p>
                  </div>
                </div>
                <button type="button" className="btn btn-outline self-start" onClick={() => setStatus("idle")}>
                  Envoyer un autre message
                </button>
              </motion.div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit} noValidate>
                {status === "error" && (
                  <div role="alert" className="alert alert-error alert-soft">
                    <AlertCircle aria-hidden="true" className="size-5 shrink-0" />
                    <span>L&apos;envoi a échoué. Vérifiez votre connexion puis réessayez.</span>
                  </div>
                )}

                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-sm font-medium">
                    Nom
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Votre nom"
                    value={values.name}
                    onChange={handleChange("name")}
                    onBlur={handleBlur("name")}
                    disabled={isSubmitting}
                    aria-invalid={shown("name") ? true : undefined}
                    aria-describedby="name-feedback"
                    className={cn("input w-full", inputState("name"))}
                  />
                  <FieldFeedback id="name-feedback" error={shown("name")} valid={isValid("name")} />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="votre@email.com"
                    value={values.email}
                    onChange={handleChange("email")}
                    onBlur={handleBlur("email")}
                    disabled={isSubmitting}
                    aria-invalid={shown("email") ? true : undefined}
                    aria-describedby="email-feedback"
                    className={cn("input w-full", inputState("email"))}
                  />
                  <FieldFeedback id="email-feedback" error={shown("email")} valid={isValid("email")} />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Votre message..."
                    value={values.message}
                    onChange={handleChange("message")}
                    onBlur={handleBlur("message")}
                    disabled={isSubmitting}
                    aria-invalid={shown("message") ? true : undefined}
                    aria-describedby="message-feedback"
                    className={cn("textarea min-h-32 w-full resize-y", textareaState("message"))}
                  />
                  <FieldFeedback
                    id="message-feedback"
                    error={shown("message")}
                    valid={isValid("message")}
                    hint={
                      remaining > 0 && values.message.length > 0
                        ? `Encore ${remaining} caractère${remaining > 1 ? "s" : ""} minimum.`
                        : undefined
                    }
                  />
                </div>

                <button type="submit" className="btn btn-primary w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <span className="loading loading-spinner loading-sm" aria-hidden="true" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      Envoyer
                      <Send aria-hidden="true" className="size-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
