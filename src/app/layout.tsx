import TopNavi from "./Components/TopNavi";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Blog App 🐱‍👓",
  description: "This is a blog for documenting development trials and errors.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <TopNavi />
        <main className="flex min-h-screen flex-col  justify-between p-24">
          {children}
        </main>
        <footer className="flex justify-center p-2 items-center fixed bottom-0 left-0 z-50 text-white w-full bg-black">
          Copyright 2023. @newl All rights reserved ✨
        </footer>
      </body>
    </html>
  );
}
