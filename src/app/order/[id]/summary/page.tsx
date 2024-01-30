import { OrderSummary } from "@/components/order-summary";
import React from "react";

export default function page({ params }: any) {
  const { id } = params;

  return <OrderSummary id={id} />;
}
