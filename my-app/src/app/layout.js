import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
        <title>QR-code Generator free website</title>
    </head>
      <body>
        {children}
      </body>
    </html>
  );
}
