import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="container mx-auto flex min-h-[60dvh] flex-col items-center justify-center gap-6 px-4 py-16 text-center">
      <h1 className="font-heading text-4xl font-bold text-balance">Page introuvable</h1>
      <p className="max-w-md text-lg text-base-content/70">
        La page que vous cherchez n&apos;existe pas ou a été déplacée.
      </p>
      <Link to="/" className="btn btn-primary btn-lg">
        Retour à l&apos;accueil
      </Link>
    </div>
  );
}
