import Link from "next/link";
import Image from "next/image";

const AuthCard = ({ title, children, linkText, linkTo }) => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-xl font-semibold mb-40">بوت کمپ بوتواستارت</h1>

      <div className="bg-white w-full max-w-md p-8 rounded-3xl shadow-sm text-center">
        <div className=" flex items-center justify-center">
          <Image src="/assets/Union.svg" alt="logo" width={80} height={80} />
        </div>

        <h2 className="text-xl font-medium mt-[62px] mb-6">{title}</h2>

        {children}

        <div className="mt-4 text-right">
          <Link href={linkTo} className="text-blue-600 text-sm inline-block">
            {linkText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthCard;
