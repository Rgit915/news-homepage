import "./globals.css";

export const metadata = {
  title: "News homepage",
  description: "NextJs News homepage",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./assets/images/favicon-32x32.png"
        />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className="bg-off-white">{children}</body>
    </html>
  );
}

