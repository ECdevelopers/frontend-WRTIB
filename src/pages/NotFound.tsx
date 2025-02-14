import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function NotFound() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return isVisible ? (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-6xl font-bold linear-grad-text animete-grad">404</h1>
      <p className="text-xl mt-2 mb-2">
        Oops! Halaman yang Anda cari tidak ditemukan.
      </p>
      <Link to="/" className="btn">
        Kembali ke Beranda
      </Link>
    </div>
  ) : null;
}
