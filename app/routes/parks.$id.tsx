import Park from "../containers/park.client";
import { ClientOnly } from "remix-utils/client-only";


export default function Index() {
  return (
    <ClientOnly>
      {() => <Park />}
    </ClientOnly>
  );
}
