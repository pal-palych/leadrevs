import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(request: any) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
    apiVersion: "2023-10-16",
  });
  let data = await request.json();
  let priceId = data.priceId;

  if (!priceId || typeof priceId !== "string") {
    return NextResponse.json({ error: "Invalid price ID" }, { status: 400 });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: "subscription",
      success_url: process.env.SITE_URL as string,
      cancel_url: process.env.SITE_URL as string,
    });

    return NextResponse.json(session.url);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 },
    );
  }
}
