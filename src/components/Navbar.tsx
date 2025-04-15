
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-background/80 backdrop-blur-sm border-b">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold gradient-text">TrndSky</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
              الرئيسية
            </Link>
            <Link to="/products" className="text-sm font-medium hover:text-primary transition-colors">
              البرمجيات
            </Link>
            <Link to="/services" className="text-sm font-medium hover:text-primary transition-colors">
              الخدمات
            </Link>
            <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">
              عن الشركة
            </Link>
            <Link to="/contact" className="text-sm font-medium hover:text-primary transition-colors">
              اتصل بنا
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4">
            <Link to="/login">
              <Button variant="outline" className="h-9">تسجيل الدخول</Button>
            </Link>
            <Link to="/register">
              <Button className="h-9">إنشاء حساب</Button>
            </Link>
          </div>
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col p-4 bg-background border-b">
            <Link to="/" className="py-2 hover:text-primary transition-colors" onClick={toggleMenu}>
              الرئيسية
            </Link>
            <Link to="/products" className="py-2 hover:text-primary transition-colors" onClick={toggleMenu}>
              البرمجيات
            </Link>
            <Link to="/services" className="py-2 hover:text-primary transition-colors" onClick={toggleMenu}>
              الخدمات
            </Link>
            <Link to="/about" className="py-2 hover:text-primary transition-colors" onClick={toggleMenu}>
              عن الشركة
            </Link>
            <Link to="/contact" className="py-2 hover:text-primary transition-colors" onClick={toggleMenu}>
              اتصل بنا
            </Link>
            <div className="flex flex-col gap-2 mt-4">
              <Link to="/login" onClick={toggleMenu}>
                <Button variant="outline" className="w-full">تسجيل الدخول</Button>
              </Link>
              <Link to="/register" onClick={toggleMenu}>
                <Button className="w-full">إنشاء حساب</Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
