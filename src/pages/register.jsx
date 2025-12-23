import AuthCard from "../components/AuthCard";
import AuthForm from "../components/AuthForm";
import { registerSchema } from "../validation/authSchema";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import PublicLayout from "../layouts/PublicLayout";

const Register = () => {
  const router = useRouter();
  const { register, login } = useAuth();

  const fields = [
    { name: "username", label: "نام کاربری", type: "text" },
    { name: "password", label: "رمز عبور", type: "password" },
    { name: "confirmPassword", label: "تکرار رمز عبور", type: "password" },
  ];

  const onSubmit = async (data) => {
    try {
      await register({
        username: data.username,
        password: data.password,
      });

      await login({
        username: data.username,
        password: data.password,
      });

      toast.success("ثبت نام موفقیت‌آمیز بود!");
      router.replace("/products");
    } catch (error) {
      toast.error(error.message || "خطا در ثبت نام");
    }
  };

  return (
    <AuthCard
      title="فرم ثبت نام"
      linkText="حساب کاربری دارید؟"
      linkTo="/login"
    >
      <AuthForm
        fields={fields}
        schema={registerSchema}
        onSubmit={onSubmit}
        buttonText="ثبت نام"
      />
    </AuthCard>
  );
};

Register.guestOnly = true;
Register.getLayout = (page) => <PublicLayout>{page}</PublicLayout>;

export default Register;
