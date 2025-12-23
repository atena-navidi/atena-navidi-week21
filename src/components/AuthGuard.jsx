import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../context/AuthProvider";

const AuthGuard = ({ children, isProtected = false, isGuestOnly = false }) => {
  const router = useRouter();
  const { user, loading } = useAuth();

  useEffect(() => {
    console.log("AuthGuard -> user:", user, "loading:", loading);
    if (loading) return; 

    
    if (isProtected && !user) {
      router.replace("/login");
    }

    
    if (isGuestOnly && user) {
      router.replace("/products");
    }
  }, [loading, user, isProtected, isGuestOnly, router]);

if (loading) return null;
if (isProtected && !user) return null;


  return children;
};

export default AuthGuard;
