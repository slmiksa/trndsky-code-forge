
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, UserCircle, LogOut, Settings } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut, isAdmin } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSignOut = async () => {
    await signOut();
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
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="h-9 flex gap-2 items-center">
                    <UserCircle className="h-4 w-4" />
                    {user.user_metadata?.full_name || user.email?.split('@')[0]}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>حسابي</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {isAdmin && (
                    <>
                      <DropdownMenuItem onClick={() => navigate('/admin')}>
                        <Settings className="ml-2 h-4 w-4" />
                        لوحة التحكم
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                    </>
                  )}
                  <DropdownMenuItem onClick={() => navigate('/profile')}>
                    <UserCircle className="ml-2 h-4 w-4" />
                    الملف الشخصي
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleSignOut}>
                    <LogOut className="ml-2 h-4 w-4" />
                    تسجيل الخروج
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="outline" className="h-9">تسجيل الدخول</Button>
                </Link>
                <Link to="/register">
                  <Button className="h-9">إنشاء حساب</Button>
                </Link>
              </>
            )}
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
              {user ? (
                <>
                  {isAdmin && (
                    <Link to="/admin" onClick={toggleMenu}>
                      <Button variant="outline" className="w-full justify-start">
                        <Settings className="ml-2 h-4 w-4" />
                        لوحة التحكم
                      </Button>
                    </Link>
                  )}
                  <Link to="/profile" onClick={toggleMenu}>
                    <Button variant="outline" className="w-full justify-start">
                      <UserCircle className="ml-2 h-4 w-4" />
                      الملف الشخصي
                    </Button>
                  </Link>
                  <Button 
                    className="w-full justify-start" 
                    variant="destructive"
                    onClick={async () => {
                      await handleSignOut();
                      toggleMenu();
                    }}
                  >
                    <LogOut className="ml-2 h-4 w-4" />
                    تسجيل الخروج
                  </Button>
                </>
              ) : (
                <>
                  <Link to="/login" onClick={toggleMenu}>
                    <Button variant="outline" className="w-full">تسجيل الدخول</Button>
                  </Link>
                  <Link to="/register" onClick={toggleMenu}>
                    <Button className="w-full">إنشاء حساب</Button>
                  </Link>
                </>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
