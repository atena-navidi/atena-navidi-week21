
// next-admin-panel/src/components/DashboardHeader.jsx
import Image from "next/image";
import { useAuth } from "../context/AuthProvider";

const DashboardHeader = ({ search, setSearch }) => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    // ❌ هیچ redirect ای اینجا نداریم
    // AuthGuard خودش کاربر را می‌فرستد /login
  };

  return (
    <header className="bg-white p-4 rounded-2xl mb-6 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Image
          src="/assets/person.svg"
          alt="avatar"
          width={40}
          height={40}
          className="rounded-full"
        />
        <div className="text-right">
          <p className="text-sm font-semibold">
            {user?.username || "کاربر"}
          </p>
          <p className="text-xs text-gray-400">مدیر</p>
        </div>
      </div>

      <div className="relative">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="جستجو کالا"
          className="bg-gray-100 rounded-xl pr-10 pl-4 py-2 w-64 text-right"
        />
        <span className="absolute right-3 top-1/2 -translate-y-1/2">
          🔍
        </span>
      </div>

      <button
        onClick={handleLogout}
        className="
          flex items-center gap-2
          px-4 py-2
          rounded-xl
          bg-red-50 text-red-600
          hover:bg-red-100
          transition
          text-sm font-medium
        "
      >
        خروج
      </button>
    </header>
  );
};

export default DashboardHeader;
