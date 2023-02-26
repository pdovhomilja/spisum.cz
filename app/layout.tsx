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
      <body className="flex flex-col w-full h-screen  overflow-x-auto mx-auto">
        <Header />
        <div className="flex ">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
