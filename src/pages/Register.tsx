
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Separator } from "@/components/ui/separator";
import { useAuth } from "@/context/AuthContext";
import { Loader2 } from "lucide-react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  
  // عنوان إعادة التوجيه المُحدد
  const redirectUrl = "https://trndsky.com/dashboard";
  
  console.log("صفحة التسجيل، عنوان إعادة التوجيه:", redirectUrl);
  
  // إذا كان المستخدم مسجل الدخول بالفعل، قم بتوجيهه إلى الصفحة الرئيسية
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (user) {
    return <Navigate to="/" replace />;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !password || !confirmPassword) {
      toast.error("الرجاء ملء جميع الحقول المطلوبة");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("كلمات المرور غير متطابقة");
      return;
    }

    setIsLoading(true);
    
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: name
          }
        }
      });
      
      if (error) {
        throw error;
      }
      
      toast.success("تم إنشاء الحساب بنجاح");
      
      // إذا كان التحقق من البريد الإلكتروني غير مطلوب، سيتم توجيه المستخدم إلى الصفحة الرئيسية
      // وإلا سيتم توجيهه إلى صفحة تأكيد البريد الإلكتروني
      if (data.session) {
        navigate("/");
      } else {
        toast.info("تم إرسال رابط التحقق إلى بريدك الإلكتروني");
        navigate("/login");
      }
    } catch (error: any) {
      console.error("خطأ في التسجيل:", error);
      
      // رسائل خطأ مخصصة
      if (error.message.includes("already registered")) {
        toast.error("البريد الإلكتروني مستخدم بالفعل");
      } else {
        toast.error(error.message || "حدث خطأ أثناء التسجيل");
      }
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleGoogleSignIn = async () => {
    try {
      setIsLoading(true);
      console.log("تسجيل الدخول عبر Google مع إعادة التوجيه إلى:", redirectUrl);
      
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: redirectUrl,
          queryParams: {
            access_type: 'offline',
            prompt: 'consent'
          }
        }
      });
      
      if (error) {
        throw error;
      }
      
      console.log("نتيجة تسجيل الدخول عبر Google:", data);
      
    } catch (error: any) {
      console.error("خطأ في تسجيل الدخول باستخدام Google:", error);
      toast.error(error.message || "حدث خطأ أثناء تسجيل الدخول");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-trnd-lightgray py-12 px-4" dir="rtl">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-bold">إنشاء حساب جديد</CardTitle>
          <CardDescription>
            أدخل بياناتك لإنشاء حسابك الجديد
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            <button
              type="button"
              disabled={isLoading}
              className="w-full bg-white text-gray-700 border border-gray-300 py-2 px-4 rounded-md font-medium flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
              onClick={handleGoogleSignIn}
            >
              <img 
                src="https://developers.google.com/identity/images/g-logo.png" 
                alt="Google" 
                className="w-5 h-5" 
              />
              {isLoading ? "جارٍ التسجيل..." : "تسجيل باستخدام Google"}
            </button>
            
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">أو</span>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="name">
                  الاسم الكامل
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="محمد أحمد"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="email">
                  البريد الإلكتروني
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="example@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="password">
                  كلمة المرور
                </label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="confirmPassword">
                  تأكيد كلمة المرور
                </label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "جارٍ إنشاء الحساب..." : "إنشاء حساب"}
              </Button>
            </form>
            
            <div className="text-center text-sm">
              لديك حساب بالفعل؟{" "}
              <Link to="/login" className="text-trnd-blue hover:underline">
                تسجيل الدخول
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;
