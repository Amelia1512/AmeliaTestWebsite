import { Inter } from "next/font/google";
import "@/app/styles.css";
import Footer from '@/app/components/footer';
import Navigation from "@/app/components/navigation";
import Header from "@/app/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="content">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
