import { Lato } from "next/font/google";

export const lato = Lato({
  subsets: ['latin'], // ✅ Tambahkan ini
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
});
