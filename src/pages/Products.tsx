
import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ProductCard from "@/components/ProductCard";
import { Search } from "lucide-react";

// Sample products data
const allProducts = [
  {
    id: "1",
    title: "نظام إدارة المبيعات",
    description: "نظام متكامل لإدارة المبيعات والمخزون ومتابعة الطلبات بواجهة سهلة الاستخدام",
    price: 2999,
    imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    category: "business",
    features: [
      "واجهة مستخدم سهلة",
      "تقارير مفصلة",
      "إدارة المخزون",
      "نظام فواتير متكامل",
      "دعم فني مستمر"
    ]
  },
  {
    id: "2",
    title: "منصة التعليم الإلكتروني",
    description: "منصة متكاملة للتعليم عن بعد مع دعم للفصول الافتراضية والاختبارات الإلكترونية",
    price: 3999,
    imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    category: "education",
    features: [
      "فصول افتراضية",
      "نظام اختبارات",
      "منتدى للنقاش",
      "مكتبة فيديوهات",
      "تقارير أداء الطلاب"
    ]
  },
  {
    id: "3",
    title: "تطبيق إدارة المشاريع",
    description: "برنامج احترافي لإدارة المشاريع ومتابعة المهام وإدارة فرق العمل",
    price: 1999,
    imageUrl: "https://images.unsplash.com/photo-1572015124294-e678d0b27441?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    category: "productivity",
    features: [
      "إدارة المهام",
      "مخططات جانت",
      "متابعة الوقت",
      "إدارة الموارد",
      "تقارير التقدم"
    ]
  },
  {
    id: "4",
    title: "نظام إدارة المطاعم",
    description: "نظام شامل لإدارة المطاعم والكافيهات مع دعم للطلبات والمخزون وإدارة الموظفين",
    price: 2499,
    imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    category: "business",
    features: [
      "إدارة الطلبات",
      "إدارة المخزون",
      "نظام نقاط البيع",
      "تقارير المبيعات",
      "برنامج ولاء العملاء"
    ]
  },
  {
    id: "5",
    title: "نظام الموارد البشرية",
    description: "نظام متكامل لإدارة شؤون الموظفين والرواتب والإجازات والتقييمات",
    price: 3499,
    imageUrl: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    category: "business",
    features: [
      "إدارة بيانات الموظفين",
      "نظام الرواتب",
      "إدارة الإجازات",
      "تقييمات الأداء",
      "التوظيف الإلكتروني"
    ]
  },
  {
    id: "6",
    title: "نظام إدارة العيادات",
    description: "برنامج متخصص لإدارة العيادات والمراكز الطبية مع نظام حجز المواعيد والملفات الطبية",
    price: 4299,
    imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    category: "healthcare",
    features: [
      "إدارة المواعيد",
      "الملفات الطبية الإلكترونية",
      "إدارة الفواتير والتأمين",
      "تذكير المرضى بالمواعيد",
      "تقارير إحصائية"
    ]
  }
];

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  
  const filteredProducts = allProducts
    .filter(product => 
      (product.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
       product.description.toLowerCase().includes(searchQuery.toLowerCase())) && 
      (categoryFilter === "all" || product.category === categoryFilter)
    )
    .sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      if (sortBy === "name") return a.title.localeCompare(b.title);
      return 0; // featured - default order
    });
  
  return (
    <div className="min-h-screen bg-trnd-lightgray" dir="rtl">
      <div className="bg-trnd-blue text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">البرمجيات الجاهزة</h1>
          <p className="text-lg max-w-2xl mx-auto">
            اكتشف مجموعتنا من البرمجيات الجاهزة المصممة لتلبية احتياجات مختلف الأعمال والمؤسسات
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="ابحث عن المنتجات..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="w-full md:w-48">
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="التصنيف" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">الكل</SelectItem>
                  <SelectItem value="business">إدارة أعمال</SelectItem>
                  <SelectItem value="education">تعليم</SelectItem>
                  <SelectItem value="healthcare">رعاية صحية</SelectItem>
                  <SelectItem value="productivity">إنتاجية</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="w-full md:w-48">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue placeholder="الترتيب حسب" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">الأكثر شهرة</SelectItem>
                  <SelectItem value="price-asc">السعر: من الأقل للأعلى</SelectItem>
                  <SelectItem value="price-desc">السعر: من الأعلى للأقل</SelectItem>
                  <SelectItem value="name">الاسم</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        
        {filteredProducts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                description={product.description}
                price={product.price}
                imageUrl={product.imageUrl}
                features={product.features}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold mb-2">لم يتم العثور على منتجات</h3>
            <p className="text-trnd-gray">
              حاول تغيير معايير البحث أو التصفية للعثور على المنتجات
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
