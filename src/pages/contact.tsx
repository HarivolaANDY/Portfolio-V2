import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";
import { cn, sanitizeUrl } from "@/lib/utils";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = (formData: FormData) => {
    const newErrors: { [key: string]: string } = {};
    const email = formData.get("email") as string;
    const name = formData.get("name") as string;
    const message = formData.get("message") as string;

    if (!name || name.length < 2) {
      newErrors.name = "Le nom doit contenir au moins 2 caractères.";
    }

    if (!email || !EMAIL_REGEX.test(email)) {
      newErrors.email = "Veuillez entrer une adresse email valide.";
    }

    if (!message || message.length < 10) {
      newErrors.message = "Le message doit contenir au moins 10 caractères.";
    }

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});

    const formData = new FormData(e.currentTarget);
    const validationErrors = validateForm(formData);

    const firstInvalid = (["name", "email", "message"] as const).find(
      (field) => validationErrors[field]
    );

    if (firstInvalid) {
      setErrors(validationErrors);
      // Move focus to the first invalid field so keyboard/screen reader users land on the problem
      e.currentTarget.querySelector<HTMLElement>(`#${firstInvalid}`)?.focus();
      return;
    }

    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold font-heading mb-8 text-center">Me contacter</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <p className="text-muted-foreground text-lg leading-relaxed">
              Vous avez un projet en tête ou vous souhaitez simplement dire bonjour ? N&apos;hésitez pas à me contacter via le formulaire ou sur les réseaux sociaux.
            </p>
            
            <div className="space-y-4">
              {SOCIAL_LINKS.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={sanitizeUrl(link.url)}
                    {...(link.url.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="flex items-center gap-4 rounded-full text-foreground hover:text-primary transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    <div className="p-3 bg-secondary rounded-full group-hover:bg-primary/10 transition-colors">
                      <Icon aria-hidden="true" className="h-6 w-6" />
                    </div>
                    <span className="font-medium">
                      {link.name === "Email" ? link.url.replace("mailto:", "") : link.name}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Form */}
          <div className="bg-card border rounded-2xl p-8 shadow-sm">
            {isSuccess ? (
              <motion.div
                role="status"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12"
              >
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold">Message envoyé !</h3>
                <p className="text-muted-foreground">
                  Merci de m&apos;avoir contacté. Je vous répondrai dans les plus brefs délais.
                </p>
                <Button variant="outline" onClick={() => setIsSuccess(false)}>
                  Envoyer un autre message
                </Button>
              </motion.div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Nom
                  </label>
                  <Input
                    name="name"
                    type="text"
                    id="name"
                    placeholder="Votre nom"
                    autoComplete="name"
                    disabled={isSubmitting}
                    aria-invalid={errors.name ? true : undefined}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className={errors.name ? "border-destructive focus-visible:ring-destructive" : ""}
                  />
                  {errors.name && (
                    <p id="name-error" role="alert" className="text-sm font-medium text-destructive flex items-center gap-1.5">
                      <AlertCircle aria-hidden="true" className="h-4 w-4 shrink-0" /> {errors.name}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Email
                  </label>
                  <Input
                    name="email"
                    type="email"
                    id="email"
                    placeholder="votre@email.com"
                    autoComplete="email"
                    disabled={isSubmitting}
                    aria-invalid={errors.email ? true : undefined}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={errors.email ? "border-destructive focus-visible:ring-destructive" : ""}
                  />
                  {errors.email && (
                    <p id="email-error" role="alert" className="text-sm font-medium text-destructive flex items-center gap-1.5">
                      <AlertCircle aria-hidden="true" className="h-4 w-4 shrink-0" /> {errors.email}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    id="message"
                    placeholder="Votre message..."
                    className={cn(
                      "min-h-[120px] resize-y",
                      errors.message ? "border-destructive focus-visible:ring-destructive" : ""
                    )}
                    disabled={isSubmitting}
                    aria-invalid={errors.message ? true : undefined}
                    aria-describedby={errors.message ? "message-error" : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" role="alert" className="text-sm font-medium text-destructive flex items-center gap-1.5">
                      <AlertCircle aria-hidden="true" className="h-4 w-4 shrink-0" /> {errors.message}
                    </p>
                  )}
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    "Envoi en cours..."
                  ) : (
                    <>
                      Envoyer
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
