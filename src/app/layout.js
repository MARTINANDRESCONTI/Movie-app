import { Poppins } from "next/font/google";

import "./globals.css";
import Footer from "@/app/components/footer";
import Header from "./components/header";
import Providers from "./store/provider";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight:['100','200','300','400', '600','700', '800','900']
 });

export const metadata = {
  title: "Movie's Searcher",
  description: "A movie's searcher app with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Providers>
        <body className={poppins.className}> 
          <Header />      
          {children}
          <Footer />
        </body>
      </Providers>
    </html>
  );
}
