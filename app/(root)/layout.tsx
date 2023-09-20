import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

import "../globals.css";
import LeftSidebar from "@/components/shared/LeftSidebar";
import Bottombar from "@/components/shared/Bottombar";
import RightSidebar from "@/components/shared/RightSidebar";
import Topbar from "@/components/shared/Topbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Code-Wings",
  description: "A Next.js 13 Meta application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang='en'>
        <body className={inter.className}>
          <Topbar />

          <main className='flex flex-row'>
            <LeftSidebar />
            <div className="bg-[url('../public/assets/MBBG.jpg')] sm:bg-[url('../public/assets/BGCO.jpg')] bg-no-repeat bg-fixed bg-cover overflow-hidden items-center w-screen h-auto">
            <div className="w-full h-full  items-center sm:backdrop-blur-[5px] backdrop-blur-[4px]">
            <section className='flex min-h-screen flex-1 flex-col items-center  px-6 pb-10 pt-28 max-md:pb-32 sm:px-10 w-full overflow-hidden '>
              <div className='w-full overflow-hidden  max-w-4xl'>{children}</div>
            </section>
            </div>
            </div>
            {/* @ts-ignore */}
            <RightSidebar />
          </main>

          <Bottombar />
        </body>
      </html>
    </ClerkProvider>
  );
}
