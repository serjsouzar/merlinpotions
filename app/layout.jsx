import Footer from "@/components/Footer";
import "./global.css";
import Nav from "@/components/Nav";

export const metadata = {
  title: "Merlin's Potions",
  description: "The best potions of Hogsmeade!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
