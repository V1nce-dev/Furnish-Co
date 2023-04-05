import "./globals.css";
import Nav from "./components/nav"
import Footer from "./components/footer";

export const metadata = {
  title: "ecomerse",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
