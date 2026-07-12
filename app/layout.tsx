import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Converso | Bridging Communication",
  
   icons: {
    icon: "/icons/Official.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <ClerkProvider
         appearance={{

          options:{
            logoImageUrl: '/icons/converso (1).png',
            socialButtonsVariant: 'iconButton',

          },
          variables: {
            colorForeground: "#fff",
            colorPrimary: "#0E78F9",
            colorBackground: "#1c1f2e",
            colorInput: "#252a41",
            colorBorder: "#fff",
            fontFamily: "'Poppins', sans-serif",
            

          }
        }}
      
      
      >
        <body className="bg-dark-2">{children}</body>

      </ClerkProvider>
      
    </html>
  );
}
