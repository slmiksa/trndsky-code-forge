
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  Package, 
  FileText, 
  Users, 
  Settings, 
  LogOut, 
  ChevronDown, 
  ChevronRight 
} from 'lucide-react';

interface SidebarLinkProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  hasSubmenu?: boolean;
  onClick?: () => void;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ to, icon, label, active = false, hasSubmenu = false, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className={cn(
      "flex items-center gap-3 rounded-lg px-3 py-2 transition-all",
      active
        ? "bg-trnd-blue text-white"
        : "text-trnd-gray hover:bg-trnd-lightgray hover:text-trnd-blue"
    )}
  >
    {icon}
    <span className="flex-1">{label}</span>
    {hasSubmenu && (
      <ChevronRight className="h-4 w-4" />
    )}
  </Link>
);

const AdminSidebar = () => {
  const location = useLocation();
  const [pagesExpanded, setPagesExpanded] = useState(false);
  
  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4 border-b">
        <h1 className="text-xl font-bold gradient-text">TrndSky Admin</h1>
      </div>
      
      <nav className="flex-1 overflow-y-auto p-4 space-y-1">
        <SidebarLink 
          to="/admin" 
          icon={<LayoutDashboard className="h-5 w-5" />}
          label="لوحة التحكم"
          active={location.pathname === "/admin"}
        />
        
        <SidebarLink 
          to="/admin/products" 
          icon={<Package className="h-5 w-5" />}
          label="المنتجات"
          active={location.pathname.startsWith("/admin/products")}
        />
        
        <div className="space-y-1">
          <button
            onClick={() => setPagesExpanded(!pagesExpanded)}
            className={cn(
              "w-full flex items-center gap-3 rounded-lg px-3 py-2 transition-all",
              location.pathname.startsWith("/admin/pages")
                ? "bg-trnd-blue text-white"
                : "text-trnd-gray hover:bg-trnd-lightgray hover:text-trnd-blue"
            )}
          >
            <FileText className="h-5 w-5" />
            <span className="flex-1">الصفحات</span>
            <ChevronDown className={cn("h-4 w-4 transition-transform", pagesExpanded ? "transform rotate-180" : "")} />
          </button>
          
          {pagesExpanded && (
            <div className="pr-4 border-r border-gray-200 mr-2 space-y-1">
              <SidebarLink 
                to="/admin/pages" 
                icon={<div className="w-2 h-2 rounded-full bg-current" />}
                label="جميع الصفحات"
                active={location.pathname === "/admin/pages"}
              />
              <SidebarLink 
                to="/admin/pages/new" 
                icon={<div className="w-2 h-2 rounded-full bg-current" />}
                label="إضافة صفحة جديدة"
                active={location.pathname === "/admin/pages/new"}
              />
            </div>
          )}
        </div>
        
        <SidebarLink 
          to="/admin/users" 
          icon={<Users className="h-5 w-5" />}
          label="المستخدمين"
          active={location.pathname.startsWith("/admin/users")}
        />
        
        <SidebarLink 
          to="/admin/settings" 
          icon={<Settings className="h-5 w-5" />}
          label="الإعدادات"
          active={location.pathname === "/admin/settings"}
        />
      </nav>
      
      <div className="p-4 border-t">
        <SidebarLink 
          to="/" 
          icon={<LogOut className="h-5 w-5" />}
          label="الخروج"
        />
      </div>
    </div>
  );
};

export default AdminSidebar;
