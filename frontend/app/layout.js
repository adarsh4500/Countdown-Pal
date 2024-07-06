import { Exo_2 } from "next/font/google";
import "./globals.css";
import Header from "./components/header";

const font = Exo_2({ subsets: ["latin"] });

export const metadata = {
  title: "Countdown Pal",
  description: "Your buddy who can accompany you to wait for things we like",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ font.className + " bg-gradient-to-r from-slate-900 to-slate-700 text-white"}>
        <div className="flex flex-col w-screen h-screen">
          <Header></Header>
          {children}
        </div>
      </body>
    </html>
  );
}
