import "./globals.css";

export const metadata = {
  title: "FH Chemicals",
  description:
    "Global Importers & Traders of Premium PU Systems, Leather Chemicals & Industrial Materials",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}