import "./globals.css";

export const metadata = {
  title: "Credit Platform",
  description: "AI-powered credit management platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
