"use client";

import { useSearchParams } from "next/navigation";

export default function OrderSuccessContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams?.get("orderId");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded shadow text-center">
        <h1 className="text-2xl font-bold">Order Placed Successfully!</h1>

        {orderId ? (
          <>
            <p className="mt-4">Your Order ID is:</p>
            <p className="text-lg font-semibold mt-2">{orderId}</p>
          </>
        ) : (
          <p className="mt-4 text-red-500">No order ID found in the URL.</p>
        )}

        <p className="mt-2">Please keep this ID for your records.</p>
      </div>
    </div>
  );
}