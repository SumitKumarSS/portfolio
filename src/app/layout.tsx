import type { Metadata } from "next";
import { Inter, Poppins, Fira_Code } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins"
});

const firaCode = Fira_Code({
  weight: ["300", "400", "600"],
  subsets: ["latin"],
  variable: "--font-fira-code"
});

export const metadata: Metadata = {
  title: "Sumit Kumar",
  description: "Sumit Kumar Portfolio",
  authors: [{ name: "Sumit Kumar" }],
  icons: {
    icon: "/favicon.ico"
  },
  openGraph: {
    title: "Sumit Kumar"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} ${firaCode.variable} font-sans antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
