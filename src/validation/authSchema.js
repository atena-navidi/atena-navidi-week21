
//next-admin-panel/src/validation/authSchema.js
import * as yup from "yup";

/* -------------------- Login Schema -------------------- */
export const loginSchema = yup.object().shape({
  username: yup
    .string()
    .required("نام کاربری الزامی است")
    .min(3, "نام کاربری باید حداقل ۳ کاراکتر باشد"),

  password: yup
    .string()
    .required("رمز عبور الزامی است")
    .min(6, "رمز عبور باید حداقل ۶ کاراکتر باشد"),
});

/* -------------------- Register Schema -------------------- */
export const registerSchema = yup.object().shape({
  username: yup
    .string()
    .required("نام کاربری الزامی است")
    .min(3, "نام کاربری باید حداقل ۳ کاراکتر باشد"),

  password: yup
    .string()
    .required("رمز عبور الزامی است")
    .min(6, "رمز عبور باید حداقل ۶ کاراکتر باشد"),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "رمز عبور مطابقت ندارد")
    .required("تکرار رمز عبور الزامی است"),
});


