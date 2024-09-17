import "./globals.css";

export const metadata = {
  title: "News homepage",
  description: "NextJs News homepage",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body >
        {children}
      </body>
    </html>
  );
}
