import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../context/AuthProvider";

export default function Home() {
  const router = useRouter();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading) {
      if (user) {
        
        router.replace("/products");
      } else {
        
        router.replace("/login");
      }
    }
  }, [loading, user, router]);

  return null; 
}
