import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import CookieBanner from "@/components/CookieBanner";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Spisová služba SpisUm",
  description:
    "Spisová služba SpisUm, je nová generace spisové služby. SpisUm bylo vytvořeno podle nové legislativy a je připravené na certifikaci",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <GoogleAnalytics GA_MEASUREMENT_ID="G-LW4LQC1HLM" />
        <body className="flex flex-col w-full h-screen mx-auto overflow-hidden">
          <Header />
          <div className="overflow-hidden h-full ">{children}</div>
          <Footer />
          <CookieBanner />
          <Toaster />
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  );
}
