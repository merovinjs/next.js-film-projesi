import "@/styles/global.css";
import "@/styles/reset.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Layout({ children }) {
  return (
    <html lang="tr">
      <body className="container">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
