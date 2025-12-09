"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ClientLayout({ children }) {
  const pathname = usePathname();

  // Hide header/footer for login and register pages
  const hideLayout =
    pathname === "/loginPage" || pathname === "/register";

  return (
    <>
      {!hideLayout && <Header />}
      {children}
      {!hideLayout && <Footer />}
    </>
  );
}
