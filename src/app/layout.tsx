import "~/styles/globals.css";

import { Roboto } from "next/font/google";
import { Footer } from "~/components/footer";
import { Toaster } from "../components/ui/toaster";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Samyam Katwal",
  description: "Protfolio Website",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${roboto.className} bg-[#0A0A0A] text-lg text-[#FFFFE6]`}
    >
      <body>
        <Toaster />
        {children}
        <Footer />
      </body>
    </html>
  );
}
