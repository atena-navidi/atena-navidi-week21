const FormInput = ({ label, register, name, type = "text", errors }) => {
  return (
    <div className="mb-3 text-right">
      <input
        type={type}
        placeholder={label}
        className={`w-full p-3 rounded-xl bg-gray-100 text-right focus:ring-2 focus:ring-blue-400 outline-none ${
          errors[name] ? "border border-red-500" : ""
        }`}
        {...register(name)}
      />
      {errors[name] && (
        <p className="text-red-500 text-sm mt-1">{errors[name]?.message}</p>
      )}
    </div>
  );
};

export default FormInput;
