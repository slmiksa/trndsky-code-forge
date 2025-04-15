
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Package, ShoppingCart, BarChart3 } from "lucide-react";
import AdminSidebar from "@/components/admin/AdminSidebar";

const AdminDashboard = () => {
  return (
    <div className="flex min-h-screen" dir="rtl">
      <AdminSidebar />
      
      <main className="flex-1 p-6 overflow-y-auto bg-trnd-lightgray">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">لوحة التحكم</h1>
          <div>
            <span className="text-sm text-trnd-gray">مرحباً، المدير</span>
          </div>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">المستخدمين</CardTitle>
              <Users className="h-4 w-4 text-trnd-gray" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">128</div>
              <p className="text-xs text-trnd-gray">+10% من الشهر الماضي</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">المنتجات</CardTitle>
              <Package className="h-4 w-4 text-trnd-gray" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-trnd-gray">+2 منتج جديد</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">المبيعات</CardTitle>
              <ShoppingCart className="h-4 w-4 text-trnd-gray" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">45</div>
              <p className="text-xs text-trnd-gray">+12% من الشهر الماضي</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">الإيرادات</CardTitle>
              <BarChart3 className="h-4 w-4 text-trnd-gray" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24,500 ﷼</div>
              <p className="text-xs text-trnd-gray">+18% من الشهر الماضي</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>أحدث المبيعات</CardTitle>
              <CardDescription>قائمة بأحدث المبيعات على المنصة</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-3 text-sm font-medium text-trnd-gray">
                  <div>المنتج</div>
                  <div>العميل</div>
                  <div>المبلغ</div>
                </div>
                <div className="grid grid-cols-3 text-sm py-2 border-b">
                  <div>نظام إدارة المبيعات</div>
                  <div>محمد أحمد</div>
                  <div>2,999 ﷼</div>
                </div>
                <div className="grid grid-cols-3 text-sm py-2 border-b">
                  <div>منصة التعليم الإلكتروني</div>
                  <div>فاطمة علي</div>
                  <div>3,999 ﷼</div>
                </div>
                <div className="grid grid-cols-3 text-sm py-2 border-b">
                  <div>نظام إدارة العيادات</div>
                  <div>عبدالله محمد</div>
                  <div>4,299 ﷼</div>
                </div>
                <div className="grid grid-cols-3 text-sm py-2 border-b">
                  <div>تطبيق إدارة المشاريع</div>
                  <div>سارة خالد</div>
                  <div>1,999 ﷼</div>
                </div>
              </div>
              
              <div className="mt-4 flex justify-center">
                <Button variant="outline" size="sm">
                  عرض جميع المبيعات
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>أحدث المستخدمين</CardTitle>
              <CardDescription>قائمة بأحدث المستخدمين المسجلين</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-3 text-sm font-medium text-trnd-gray">
                  <div>الاسم</div>
                  <div>البريد الإلكتروني</div>
                  <div>تاريخ التسجيل</div>
                </div>
                <div className="grid grid-cols-3 text-sm py-2 border-b">
                  <div>مهند علي</div>
                  <div>mohannad@example.com</div>
                  <div>2025-04-14</div>
                </div>
                <div className="grid grid-cols-3 text-sm py-2 border-b">
                  <div>نورة سعد</div>
                  <div>noura@example.com</div>
                  <div>2025-04-13</div>
                </div>
                <div className="grid grid-cols-3 text-sm py-2 border-b">
                  <div>خالد العمري</div>
                  <div>khalid@example.com</div>
                  <div>2025-04-12</div>
                </div>
                <div className="grid grid-cols-3 text-sm py-2 border-b">
                  <div>هند محمد</div>
                  <div>hind@example.com</div>
                  <div>2025-04-11</div>
                </div>
              </div>
              
              <div className="mt-4 flex justify-center">
                <Button variant="outline" size="sm">
                  عرض جميع المستخدمين
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
