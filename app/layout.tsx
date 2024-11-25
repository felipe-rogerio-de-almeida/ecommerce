import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/header";
import AuthProvider from "./_providers/auth";
import Footer from "./_components/ui/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="flex flex-col h-full">
        <AuthProvider>
          <Header/>
          <div className="flex-1">{children}</div>
          <Footer/>
        </AuthProvider>
        </div>
        
      </body>
    </html>
  );
}
