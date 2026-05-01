import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "NorthOps - AI Automations + Social Media Systems for Businesses",
  description: "NorthOps builds the systems behind modern businesses: short-form content, lead capture, CRM automation, AI agents, internal dashboards, and revenue operations workflows.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}