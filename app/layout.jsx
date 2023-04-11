import "./globals.css";
import Nav from "./components/nav";
import Footer from "./components/footer";

export const metadata = {
  title: "ecomerse",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className="flex flex-col min-h-screen">
        <Nav />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
