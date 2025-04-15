
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import BrandMarquee from "@/components/BrandMarquee";

// Sample data for products and brands
const featuredProducts = [
  {
    id: "1",
    title: "نظام إدارة المبيعات",
    description: "نظام متكامل لإدارة المبيعات والمخزون ومتابعة الطلبات بواجهة سهلة الاستخدام",
    price: 2999,
    imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
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
    features: [
      "إدارة المهام",
      "مخططات جانت",
      "متابعة الوقت",
      "إدارة الموارد",
      "تقارير التقدم"
    ]
  }
];

const brands = [
  { id: "1", name: "Microsoft", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png" },
  { id: "2", name: "Google", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png" },
  { id: "3", name: "Amazon", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" },
  { id: "4", name: "Apple", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png" },
  { id: "5", name: "Tesla", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Tesla_logo.png/1200px-Tesla_logo.png" },
  { id: "6", name: "IBM", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/2560px-IBM_logo.svg.png" }
];

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen" dir="rtl">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-trnd-darkblue to-trnd-blue text-white py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              نحول أفكارك إلى <span className="text-trnd-lightblue">حلول برمجية متكاملة</span>
            </h1>
            <p className="text-xl">
              في TrndSky نجمع بين الخبرة التقنية والإبداع لنقدم لك أفضل الحلول البرمجية المخصصة لأعمالك
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <Link to="/services">
                <Button size="lg">استكشف خدماتنا</Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline">تواصل معنا</Button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0 md:pr-10">
            <img 
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80" 
              alt="Programming services" 
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">عن TrndSky</h2>
            <p className="text-lg text-trnd-gray">
              نحن شركة برمجيات متخصصة في تطوير الحلول التقنية المبتكرة. نعمل على تحويل أفكار عملائنا إلى واقع ملموس من خلال تقديم خدمات برمجية عالية الجودة تلبي احتياجات السوق وتواكب أحدث التقنيات.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-trnd-lightgray p-6 rounded-lg text-center hover:shadow-md transition">
              <div className="bg-trnd-blue inline-flex p-3 rounded-full text-white mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m18 16 4-4-4-4"></path>
                  <path d="m6 8-4 4 4 4"></path>
                  <path d="m14.5 4-5 16"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">تطوير البرمجيات</h3>
              <p className="text-trnd-gray">
                نقدم خدمات تطوير برمجيات متكاملة بأحدث التقنيات لتلبية احتياجات عملك
              </p>
            </div>
            <div className="bg-trnd-lightgray p-6 rounded-lg text-center hover:shadow-md transition">
              <div className="bg-trnd-blue inline-flex p-3 rounded-full text-white mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                  <path d="M7 7h.01"></path>
                  <path d="M11 7h.01"></path>
                  <path d="M15 7h.01"></path>
                  <path d="M7 11h.01"></path>
                  <path d="M11 11h.01"></path>
                  <path d="M15 11h.01"></path>
                  <path d="M7 15h.01"></path>
                  <path d="M11 15h.01"></path>
                  <path d="M15 15h.01"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">حلول مخصصة</h3>
              <p className="text-trnd-gray">
                نصمم حلولاً برمجية مخصصة حسب احتياجات عملك الفريدة لتحقيق أقصى فائدة
              </p>
            </div>
            <div className="bg-trnd-lightgray p-6 rounded-lg text-center hover:shadow-md transition">
              <div className="bg-trnd-blue inline-flex p-3 rounded-full text-white mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">الدعم والصيانة</h3>
              <p className="text-trnd-gray">
                نقدم دعمًا فنيًا متواصلاً وخدمات صيانة للحفاظ على أداء أنظمتك بأفضل شكل
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Products Section */}
      <section className="py-16 bg-trnd-lightgray">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">البرمجيات الجاهزة</h2>
            <Link to="/products" className="flex items-center text-trnd-blue hover:underline">
              عرض الكل
              <ArrowRight className="h-4 w-4 mr-2" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
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
        </div>
      </section>
      
      {/* Clients Section */}
      <BrandMarquee brands={brands} />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-trnd-blue to-trnd-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">جاهز لتحويل أفكارك إلى واقع؟</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            تواصل معنا اليوم لمناقشة مشروعك واحتياجاتك البرمجية، ودع فريقنا المتخصص يساعدك في تحقيق أهدافك
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-trnd-blue">
                تواصل معنا
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" className="bg-white text-trnd-blue hover:bg-trnd-lightgray">
                استكشف خدماتنا
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
