//next-admin-panel/src/pages/_app.js
import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "../context/AuthProvider";
import AuthGuard from "../components/AuthGuard";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  const isProtected = Component.requiresAuth ?? false;
  const isGuestOnly = Component.guestOnly ?? false;
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <AuthGuard isProtected={isProtected} isGuestOnly={isGuestOnly}>
          <div dir="rtl" className="font-sans">
          {getLayout(<Component {...pageProps} />)}
        </div>
        </AuthGuard>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
