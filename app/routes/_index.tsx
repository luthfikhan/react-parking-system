import type { MetaFunction } from "@remix-run/node";
import Dashboard from "../containers/dashboard.client";
import { ClientOnly } from "remix-utils/client-only";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <ClientOnly>
      {() => <Dashboard />}
    </ClientOnly>
  );
}
