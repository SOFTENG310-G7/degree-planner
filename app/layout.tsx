import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "UoA Degree Planner",
  description: "UoA Degree Planner",
};

export const dynamic = 'force-dynamic';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen bg-background flex flex-col items-center">
          <div className="w-full">
            <NavBar />
            {children}
            <Footer />
          </div>
        </main>
      </body>
    </html>
  );
}
