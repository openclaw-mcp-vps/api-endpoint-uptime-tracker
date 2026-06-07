import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "API Uptime Tracker — Monitor API Endpoints with Instant Alerts",
  description: "Track API endpoint availability, response times, and get instant alerts when your endpoints go down or slow down. Built for dev teams and startups."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="bdfa2b9c-21bb-4e64-8d46-8a05b53e6ef3"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
