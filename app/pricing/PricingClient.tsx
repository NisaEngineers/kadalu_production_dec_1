"use client";

import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

// THIS LINE IS REQUIRED — NO EXCEPTIONS
export const dynamic = "force-dynamic";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY || "pk_test_xxx");

interface PaymentFormProps {
  selectedPlan: string;
}

function PaymentForm({ selectedPlan }: PaymentFormProps) {
  const stripe = useStripe();
  const elements = useElements();
  const [cardholderName, setCardholderName] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements || !cardholderName) return;

    const card = elements.getElement(CardNumberElement);
    if (!card) return;

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
      billing_details: { name: cardholderName },
    });

    if (error) {
      alert(error.message);
    } else {
      alert(`Payment method created: ${paymentMethod.id}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      <div>
        <label className="block text-sm mb-1 text-white">Cardholder Name</label>
        <input
          type="text"
          value={cardholderName}
          onChange={(e) => setCardholderName(e.target.value)}
          className="w-full px-4 py-2 bg-gray-800 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
      </div>
      <div>
        <label className="block text-sm mb-1 text-white">Card Number</label>
        <div className="p-2 bg-gray-800 rounded-md border border-gray-600">
          <CardNumberElement className="w-full" />
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex-1">
          <label className="block text-sm mb-1 text-white">Expiry</label>
          <div className="p-2 bg-gray-800 rounded-md border border-gray-600">
            <CardExpiryElement className="w-full" />
          </div>
        </div>
        <div className="flex-1">
          <label className="block text-sm mb-1 text-white">CVC</label>
          <div className="p-2 bg-gray-800 rounded-md border border-gray-600">
            <CardCvcElement className="w-full" />
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="w-full py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:from-green-500 hover:to-blue-600 transition-all"
      >
        Pay Now
      </button>
    </form>
  );
}

export default function PricingClient() {
  const { data: session } = useSession();
  const router = useRouter();

  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);

  const plans = [
    {
      name: "Free",
      pricing: "Free",
      features: {
        "Vocal Remover": 3,
        "Basic Splitter": 2,
        "Advanced Splitter": "No",
        "Mixing & Mastering": "1 track",
        "Chord Extractor": 3,
        "Track Duration": "Up to 3 min",
        "Stem Downloads": "8 minutes",
        "Track Retention": "24 hours",
      },
      action: session ? "Current Plan" : "Sign In",
      onClick: () => router.push("/auth/signin"),
    },
    {
      name: "Beginner",
      pricing: "₹415 per day",
      features: {
        "Vocal Remover": "30 (15 tracks×2)",
        "Basic Splitter": "40 (10 tracks×4)",
        "Advanced Splitter": "30 (5 tracks×6)",
        "Mixing & Mastering": "5 tracks",
        "Chord Extractor": 30,
        "Track Duration": "Up to 6 min",
        "Stem Downloads": "100 minutes",
        "Track Retention": "7 days",
      },
      action: "Pay with Card",
      onClick: () => {
        setSelectedPlan("Beginner");
        setShowModal(true);
      },
    },
    { name: "Creator", pricing: "Coming Soon", features: {}, disabled: true },
    { name: "Producer", pricing: "Coming Soon", features: {}, disabled: true, bestValue: true },
  ];

  return (
    <Elements stripe={stripePromise}>
      <section className="relative min-h-screen overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="./videos/pricing_background.mp4"
          autoPlay
          muted
          loop
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/30 to-blue-900/40 backdrop-blur-sm" />
        <div className="relative z-10 text-white">
          <div className="container mx-auto px-4 py-12 md:py-20">
            <div className="text-center pb-12">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-300 via-blue-400 to-green-300 bg-clip-text text-transparent animate-gradient-shift">
                Pricing Plans
              </h1>
              <p className="mt-4 text-lg text-gray-300">All prices in INR</p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {plans.map((plan, i) => (
                <div
                  key={i}
                  className={`relative rounded-2xl bg-gray-900/80 backdrop-blur-lg border p-8 shadow-2xl transition-all ${
                    plan.disabled
                      ? "opacity-60 grayscale"
                      : plan.bestValue
                      ? "border-green-500 scale-[1.03] shadow-green-500/30"
                      : "border-gray-700/50 hover:shadow-green-500/20"
                  }`}
                >
                  {plan.bestValue && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                      COMING SOON
                    </div>
                  )}
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                    {plan.name}
                  </h2>
                  <div className="mt-4 text-3xl font-bold">{plan.pricing}</div>

                  {plan.disabled ? (
                    <p className="mt-8 text-gray-400 italic">Available soon</p>
                  ) : (
                    <>
                      <ul className="my-6 space-y-3 text-sm">
                        {Object.entries(plan.features).map(([k, v]) => (
                          <li key={k} className="flex text-gray-300">
                            <svg className="w-5 h-5 mr-2 text-green-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 5.707 8.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span><strong>{k}:</strong> {v}</span>
                          </li>
                        ))}
                      </ul>
                      <button
                        onClick={plan.onClick}
                        className={`w-full py-3 rounded-lg font-medium ${
                          plan.name === "Free"
                            ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                            : "bg-gradient-to-r from-green-400 to-blue-500 text-white hover:from-green-500 hover:to-blue-600"
                        }`}
                        disabled={plan.name === "Free" && session !== null}
                      >
                        {plan.action}
                      </button>
                    </>
                  )}
                </div>
              ))}
            </div>

            {showModal && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
                <div className="bg-gray-900 p-6 rounded-2xl max-w-md w-full border border-gray-700 shadow-2xl">
                  <button
                    onClick={() => setShowModal(false)}
                    className="absolute top-3 right-3 text-gray-400 hover:text-white"
                  >
                    X
                  </button>
                  <h3 className="text-xl font-semibold mb-4 text-white">
                    Pay for <span className="text-green-400">{selectedPlan}</span>
                  </h3>
                  <PaymentForm selectedPlan={selectedPlan!} />
                </div>
              </div>
            )}
          </div>
        </div>

        <style jsx>{`
          @keyframes gradient-shift {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          .animate-gradient-shift {
            background-size: 200% auto;
            animation: gradient-shift 6s linear infinite;
          }
        `}</style>
      </section>
    </Elements>
  );
}
