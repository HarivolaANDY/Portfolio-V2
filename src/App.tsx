import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "@/components/root-layout";
import Home from "@/pages/home";

// Secondary routes are code-split; Home stays eager as the landing page.
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "projects",
        lazy: async () => ({ Component: (await import("@/pages/projects")).default }),
      },
      {
        path: "about",
        lazy: async () => ({ Component: (await import("@/pages/about")).default }),
      },
      {
        path: "contact",
        lazy: async () => ({ Component: (await import("@/pages/contact")).default }),
      },
      {
        path: "*",
        lazy: async () => ({ Component: (await import("@/pages/not-found")).default }),
      },
    ],
  },
]);
