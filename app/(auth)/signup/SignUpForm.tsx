"use client";

import { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SignUpForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      // Create account in DB
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        // Immediately log in with credentials provider
        const loginRes = await signIn("credentials", {
          redirect: false,
          email,
          password,
        });
        if (!loginRes?.error) {
          router.push("/");
        } else {
          setMessage(loginRes.error || "Login after signup failed.");
        }
      } else {
        setMessage(data.error || "Registration failed.");
      }
    } catch {
      setMessage("Error connecting to server.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = () => {
    signIn("google", { callbackUrl: "/" });
  };

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center">
            <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-green-200),var(--color-blue-200),var(--color-green-50),var(--color-blue-300),var(--color-green-200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Create an account
            </h1>
          </div>

          {/* Signup form */}
          <form className="mx-auto max-w-[400px]" onSubmit={handleRegister}>
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-1 block text-sm font-medium text-green-200/65">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  disabled={loading}
                  className="form-input w-full"
                  placeholder="Your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-medium text-green-200/65">
                  Work Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  disabled={loading}
                  className="form-input w-full"
                  placeholder="Your work email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-green-200/65">
                  Password <span className="text-red-500">*</span>
                </label>
                <input
                  id="password"
                  type="password"
                  disabled={loading}
                  className="form-input w-full"
                  placeholder="Password (at least 10 characters)"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="mt-6 space-y-5">
              <button
                type="submit"
                disabled={loading}
                className="btn w-full bg-gradient-to-t from-green-600 to-green-500 text-white"
              >
                {loading ? "Registering..." : "Register"}
              </button>

              <div className="flex items-center gap-3 text-center text-sm italic text-gray-300 before:h-px before:flex-1 before:bg-gradient-to-r before:from-transparent before:via-gray-400/25 after:h-px after:flex-1 after:bg-gradient-to-r after:from-transparent after:via-gray-400/25">
                or
              </div>

              <button
                type="button"
                onClick={handleGoogleSignIn}
                className="btn w-full bg-gradient-to-b from-green-800 to-green-800/60 text-gray-300"
              >
                Sign Up with Google
              </button>
            </div>
          </form>

          {/* Message */}
          {message && (
            <div className="mt-4 text-center text-sm text-green-200">
              {message}
            </div>
          )}

          {/* Link to signin */}
          <div className="mt-6 text-center text-sm text-green-200/65">
            Already have an account?{" "}
            <Link className="font-medium text-green-500" href="/signin">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
