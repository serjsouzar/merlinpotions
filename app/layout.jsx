import "./global.css";

export const metadata = {
  title: "Merlin's Potions",
  description: "The best potions of Hogsmeade!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
