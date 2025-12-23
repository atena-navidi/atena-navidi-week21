
// next-admin-panel/src/pages/login.jsx
// next-admin-panel/src/pages/login.jsx
import AuthCard from "../components/AuthCard";
import AuthForm from "../components/AuthForm";
import { loginSchema } from "../validation/authSchema";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import PublicLayout from "../layouts/PublicLayout";

const Login = () => {
  const { login } = useAuth(); // فقط login کافیه
  const router = useRouter();

  const fields = [
    { name: "username", label: "نام کاربری", type: "text" },
    { name: "password", label: "رمز عبور", type: "password" },
  ];

  const onSubmit = async (data) => {
  console.log("Submitting login:", data); // log ورودی

  try {
    const result = await login(data); // نتیجه login
    console.log("Login result:", result); // log نتیجه

    toast.success("ورود موفقیت‌آمیز بود!");
     console.log("Redirecting to /products");
    router.replace("/products");
    console.log("After replace");
  } catch (err) {
    console.error("Login error:", err);
    toast.error(err.message || "خطا در ورود");
  }
};


  return (
    <AuthCard
      title="فرم ورود"
      linkText="ایجاد حساب کاربری!"
      linkTo="/register"
    >
      <AuthForm
        fields={fields}
        schema={loginSchema}
        onSubmit={onSubmit}
        buttonText="ورود"
      />
    </AuthCard>
  );
};

// Layout عمومی برای صفحات ورود/ثبت نام
Login.getLayout = (page) => <PublicLayout>{page}</PublicLayout>;

// مشخص کردن اینکه این صفحه نیاز به auth ندارد
Login.requiresAuth = false;

export default Login;
