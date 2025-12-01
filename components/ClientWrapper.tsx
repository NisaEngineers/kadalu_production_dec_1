"use client";

import { SessionProvider } from "next-auth/react";
import Header from "@/components/ui/header";
import Chat from "@/components/Chat";
import FAQIcon from "@/components/FAQIcon";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <Header />
      <Chat />
      <FAQIcon />
      {children}
    </SessionProvider>
  );
}
