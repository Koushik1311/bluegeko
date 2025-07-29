import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      <div className="mt-16">{children}</div>
      <Footer />
    </div>
  );
}
