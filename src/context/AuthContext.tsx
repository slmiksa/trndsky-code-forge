
import React, { createContext, useContext, useEffect, useState } from "react";
import { User, Session } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

type AuthContextType = {
  user: User | null;
  session: Session | null;
  loading: boolean;
  signOut: () => Promise<void>;
  isAdmin: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // تعيين مستمع لتغييرات حالة المصادقة أولاً
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, currentSession) => {
        console.log("Auth state changed:", event);
        setSession(currentSession);
        setUser(currentSession?.user ?? null);
        
        // تأجيل استدعاء Supabase لتجنب حالات الانسداد
        if (currentSession?.user) {
          setTimeout(() => {
            checkUserRole(currentSession.user.id);
          }, 0);
        } else {
          setIsAdmin(false);
        }

        if (event === 'SIGNED_IN') {
          console.log("User signed in successfully:", currentSession?.user);
          toast.success("تم تسجيل الدخول بنجاح");
          navigate('/');
        }
        if (event === 'SIGNED_OUT') {
          toast.info("تم تسجيل الخروج");
          navigate('/login');
        }
      }
    );

    // ثم التحقق من وجود جلسة حالية
    supabase.auth.getSession().then(({ data: { session: currentSession } }) => {
      console.log("Current session:", currentSession);
      setSession(currentSession);
      setUser(currentSession?.user ?? null);
      
      if (currentSession?.user) {
        checkUserRole(currentSession.user.id);
      }
      
      setLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [navigate]);

  const checkUserRole = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .rpc('is_admin', { user_id: userId });
        
      if (error) throw error;
      setIsAdmin(!!data);
    } catch (error) {
      console.error("خطأ في التحقق من صلاحيات المستخدم:", error);
      setIsAdmin(false);
    }
  };

  const signOut = async () => {
    try {
      await supabase.auth.signOut();
    } catch (error) {
      console.error("خطأ أثناء تسجيل الخروج:", error);
      toast.error("حدث خطأ أثناء تسجيل الخروج");
    }
  };

  return (
    <AuthContext.Provider value={{ user, session, loading, signOut, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth يجب استخدامه داخل AuthProvider");
  }
  return context;
};
