import { Bell, Menu } from "lucide-react";

interface Props {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Topbar = ({ setIsOpen }: Props) => {
  return (
    <header className="bg-white rounded-2xl shadow-sm p-5 flex justify-between items-center">

      <div>

        <button
          onClick={() => setIsOpen(true)}
          className="lg:hidden"
        >
          <Menu size={30} />
        </button>

        <div className="hidden lg:block">

          <h1 className="text-3xl font-bold text-primary">
            Dashboard
          </h1>

          <p className="text-gray-500">
            Welcome Back 👋
          </p>

        </div>

      </div>

      <button className="w-12 h-12 rounded-xl bg-gray-100 flex justify-center items-center">

        <Bell />

      </button>

    </header>
  );
};

export default Topbar;