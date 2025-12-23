import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormInput from "./FormInput";

const AuthForm = ({ fields, schema, onSubmit, buttonText }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} dir="rtl">
      {fields.map((field) => (
        <FormInput
          key={field.name}
          label={field.label}
          name={field.name}
          type={field.type}
          register={register}
          errors={errors}
        />
      ))}

      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-3 rounded-xl mt-4 hover:bg-blue-600 transition"
        disabled={isSubmitting}
      >
        {buttonText}
      </button>
    </form>
  );
};

export default AuthForm;