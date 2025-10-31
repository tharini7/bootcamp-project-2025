import type { Metadata } from "next"; // Object to set metadata
import { Inter } from "next/font/google"; // You can change the font to anything you want.
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ProjectLayout from "@/components/project";
// If you are experiencing an error "localFont is undefined", you might need to add the following blocks of code
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tharini's Personal Website",
  description: "A personal website for Tharini.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
		// returns boilerplate
  return (
    <html lang="en">
      <body className={inter.className}> 
	        <Navbar/> 
        {children}
          <Footer/>
        </body>
    </html>
  );
}