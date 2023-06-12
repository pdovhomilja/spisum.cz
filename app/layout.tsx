import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";

export const metadata = {
  title: "Spisová služba SpisUm",
  description: "Spisová služba SpisUm, je nová generace spisové služby",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col w-full h-screen mx-auto overflow-hidden">
        <Header />
        <div className="overflow-hidden h-full ">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
