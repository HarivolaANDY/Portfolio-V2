"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-4 text-center space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4 max-w-3xl"
      >
        <h1 className="text-4xl md:text-6xl font-bold font-heading tracking-tighter">
          Créer des expériences numériques <span className="text-primary">uniques</span>
        </h1>
        <p className="text-xl text-muted-foreground md:text-2xl font-light">
          Je suis Alex, un designer UX et développeur passionné par la création d'interfaces intuitives et élégantes.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <Link href="/projects">
          <Button size="lg" className="group">
            Voir mon travail
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
        <Link href="/contact">
          <Button variant="outline" size="lg">
            Me contacter
          </Button>
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute bottom-8 animate-bounce"
      >
        <span className="text-muted-foreground text-sm">Scroll pour découvrir</span>
      </motion.div>
    </div>
  );
}
