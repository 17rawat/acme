import Stripe from "stripe";
import { NextResponse } from "next/server";

export async function POST(request) {
  const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY, {
    apiVersion: "2023-08-16",
  });

  const { items } = await request.json();

  // console.log(items);

  const modifiedItems = items.map((item) => ({
    quantity: item.quantity,
    price_data: {
      currency: "inr",
      unit_amount: item.price * 100,

      product_data: {
        name: `${item.name} - Size ${item.size}`,
      },
    },
  }));

  const session = await stripe.checkout.sessions.create({
    shipping_address_collection: {
      allowed_countries: ["IN"],
    },
    line_items: modifiedItems,
    mode: "payment",
    success_url: `${process.env.DOMAIN}/checkout/success`,
    cancel_url: `${process.env.DOMAIN}/cart`,
  });

  return NextResponse.json(session.url);
}
