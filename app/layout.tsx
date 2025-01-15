import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";
import { CSPostHogProvider } from "@/providers/posthog";

export const metadata = {
  title: "Spisová služba SpisUm",
  description:
    "Spisová služba SpisUm, je nová generace spisové služby. SpisUm bylo vytvořeno podle nové legislativy a je připravené na certifikaci",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CSPostHogProvider>
      <ClerkProvider>
        <html lang="en">
          <body className="flex flex-col w-full h-screen mx-auto overflow-hidden">
            <Header />
            <div className="overflow-hidden h-full ">{children}</div>
            <Footer />
            <Toaster />
          </body>
        </html>
      </ClerkProvider>
    </CSPostHogProvider>
  );
}
