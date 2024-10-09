import "./globals.css";

export const metadata = {
  title: "Week 7 - Components",
  description: "Idk this is just stuff",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
