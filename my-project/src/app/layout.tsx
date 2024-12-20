import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/shared/Navigation/Navigation";

const roboto = Roboto({
 
  subsets: ["latin"],
  weight: ["100","300","400","500","700","900"],
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "MyApp",
  description: "Broadcast yourself",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className  }>
        <Navigation/>
        <div className="pt-16">{children}</div>
        
      </body>
    </html>
  );
}
