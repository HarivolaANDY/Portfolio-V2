import { Link } from "react-router-dom";
import { buttonVariants } from "@/components/ui/button-variants";

export default function NotFoundPage() {
  return (
    <div className="container mx-auto flex min-h-[60dvh] flex-col items-center justify-center gap-6 px-4 py-16 text-center">
      <h1 className="text-4xl font-bold font-heading">Page introuvable</h1>
      <p className="max-w-md text-lg text-muted-foreground">
        La page que vous cherchez n&apos;existe pas ou a été déplacée.
      </p>
      <Link to="/" className={buttonVariants({ size: "lg" })}>
        Retour à l&apos;accueil
      </Link>
    </div>
  );
}
