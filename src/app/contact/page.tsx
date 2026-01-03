"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    // Reset success message after 3 seconds
    setTimeout(() => setIsSuccess(false), 3000);
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
            <p className="text-muted-foreground text-lg">
              Vous avez un projet en tête ou vous souhaitez simplement dire bonjour ? N'hésitez pas à me contacter via le formulaire ou sur les réseaux sociaux.
            </p>
            
            <div className="space-y-4">
              <a href="mailto:hello@example.com" className="flex items-center gap-4 text-foreground hover:text-primary transition-colors">
                <div className="p-3 bg-secondary rounded-full">
                  <Mail className="h-6 w-6" />
                </div>
                <span className="font-medium">andyharivola@gmail.com</span>
              </a>
              <a href="https://www.linkedin.com/in/harivola-andy-randriamangamparany" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-foreground hover:text-primary transition-colors">
                <div className="p-3 bg-secondary rounded-full">
                  <Linkedin className="h-6 w-6" />
                </div>
                <span className="font-medium">LinkedIn</span>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-foreground hover:text-primary transition-colors">
                <div className="p-3 bg-secondary rounded-full">
                  <Github className="h-6 w-6" />
                </div>
                <span className="font-medium">GitHub</span>
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="bg-card border rounded-2xl p-8 shadow-sm">
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12"
              >
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold">Message envoyé !</h3>
                <p className="text-muted-foreground">
                  Merci de m'avoir contacté. Je vous répondrai dans les plus brefs délais.
                </p>
                <Button variant="outline" onClick={() => setIsSuccess(false)}>
                  Envoyer un autre message
                </Button>
              </motion.div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Nom
                  </label>
                  <Input
                    type="text"
                    id="name"
                    placeholder="Votre nom"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Email
                  </label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="votre@email.com"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Votre message..."
                    className="min-h-[120px] resize-y"
                    required
                    disabled={isSubmitting}
                  />
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
