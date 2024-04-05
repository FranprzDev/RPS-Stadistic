import { Inter } from "next/font/google";
import "./styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rock Paper and Sicssors Game",
  description: "A counter app of the game Rock Paper and Sicssors to make an stadistic of the games played by Francisco Perez & Gonzalo Posse",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
