
//next-admin-panel/src/components/AuthGuard.jsx
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../context/AuthProvider";

const AuthGuard = ({ children, isProtected = false, isGuestOnly = false }) => {
  const router = useRouter();
  const { user, loading } = useAuth();

  useEffect(() => {
    console.log("AuthGuard -> user:", user, "loading:", loading);
    if (loading) return; 

    // صفحه محافظت شده و user لاگین نیست → login
    if (isProtected && !user) {
      router.replace("/login");
    }

    // صفحه برای مهمان (login/register) و user لاگین هست → products
    if (isGuestOnly && user) {
      router.replace("/products");
    }
  }, [loading, user, isProtected, isGuestOnly, router]);

if (loading) return null;
if (isProtected && !user) return null; // جلوگیری flicker


  return children;
};

export default AuthGuard;
