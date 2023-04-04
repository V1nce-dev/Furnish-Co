import "./globals.css";
import Header from "./components/header";

export const metadata = {
  title: "ecomerse",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      <body>{children}</body>
    </>
  );
}
