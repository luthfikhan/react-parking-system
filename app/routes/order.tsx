import { ClientOnly } from "remix-utils/client-only";
import Order from "~/containers/order.client";

export default function OrderDetail() {

  return (
    <ClientOnly>
      {() => <Order />}
    </ClientOnly>
  );
}