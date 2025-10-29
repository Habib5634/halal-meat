import { Geist, Geist_Mono,Sniglet,Poppins,Livvic,Manrope } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});
const sniglet = Sniglet({
  variable: "--font-sniglet",
  subsets: ["latin"],
  weight:["400","800"]
});
const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const livvic = Livvic({
   weight: ['300', '400', '500', '600', '700', '900'],
  subsets: ['latin'],
})

export const metadata = {
  title: "Halal Meat",
  description: "Eat Cleaner With Halal Meat",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
