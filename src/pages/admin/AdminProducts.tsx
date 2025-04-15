
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Edit, Trash2, Plus } from "lucide-react";
import { toast } from "sonner";
import AdminSidebar from "@/components/admin/AdminSidebar";

// Sample products data
const initialProducts = [
  {
    id: "1",
    title: "نظام إدارة المبيعات",
    price: 2999,
    category: "business",
    featured: true,
    createdAt: "2025-03-15"
  },
  {
    id: "2",
    title: "منصة التعليم الإلكتروني",
    price: 3999,
    category: "education",
    featured: true,
    createdAt: "2025-02-28"
  },
  {
    id: "3",
    title: "تطبيق إدارة المشاريع",
    price: 1999,
    category: "productivity",
    featured: true,
    createdAt: "2025-03-05"
  },
  {
    id: "4",
    title: "نظام إدارة المطاعم",
    price: 2499,
    category: "business",
    featured: false,
    createdAt: "2025-01-20"
  },
  {
    id: "5",
    title: "نظام الموارد البشرية",
    price: 3499,
    category: "business",
    featured: false,
    createdAt: "2025-03-10"
  },
  {
    id: "6",
    title: "نظام إدارة العيادات",
    price: 4299,
    category: "healthcare",
    featured: false,
    createdAt: "2025-02-15"
  }
];

const AdminProducts = () => {
  const [products, setProducts] = useState(initialProducts);
  const [searchQuery, setSearchQuery] = useState("");
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState<string | null>(null);

  const filteredProducts = products.filter(product => 
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDeleteClick = (id: string) => {
    setProductToDelete(id);
    setIsDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    if (productToDelete) {
      setProducts(products.filter(product => product.id !== productToDelete));
      toast.success("تم حذف المنتج بنجاح");
      setIsDeleteDialogOpen(false);
      setProductToDelete(null);
    }
  };

  return (
    <div className="flex min-h-screen" dir="rtl">
      <AdminSidebar />
      
      <main className="flex-1 p-6 overflow-y-auto bg-trnd-lightgray">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">إدارة المنتجات</h1>
          <Button className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            إضافة منتج جديد
          </Button>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="p-4 border-b">
            <div className="flex gap-4">
              <div className="flex-1">
                <Input
                  placeholder="البحث عن منتج..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
          
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>المنتج</TableHead>
                <TableHead>السعر</TableHead>
                <TableHead>التصنيف</TableHead>
                <TableHead>مميز</TableHead>
                <TableHead>تاريخ الإضافة</TableHead>
                <TableHead className="text-left">الإجراءات</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredProducts.length > 0 ? (
                filteredProducts.map(product => (
                  <TableRow key={product.id}>
                    <TableCell className="font-medium">{product.title}</TableCell>
                    <TableCell>{product.price} ﷼</TableCell>
                    <TableCell>{product.category}</TableCell>
                    <TableCell>{product.featured ? "نعم" : "لا"}</TableCell>
                    <TableCell>{product.createdAt}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <Edit className="h-4 w-4" />
                          <span className="sr-only">تعديل</span>
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="h-8 w-8 p-0 text-destructive hover:text-destructive"
                          onClick={() => handleDeleteClick(product.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">حذف</span>
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-4">
                    لم يتم العثور على منتجات
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </main>
      
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>تأكيد حذف المنتج</DialogTitle>
            <DialogDescription>
              هل أنت متأكد من رغبتك في حذف هذا المنتج؟ لا يمكن التراجع عن هذا الإجراء.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
              إلغاء
            </Button>
            <Button variant="destructive" onClick={confirmDelete}>
              حذف
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminProducts;
