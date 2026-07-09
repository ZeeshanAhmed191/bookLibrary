import { LayoutDashboard, BookOpen, Upload, LogOut, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { logout } from "../../api/loginApi";
interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = ({ isOpen, setIsOpen }: Props) => {
  const { setAdmin } = useAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    console.log("Inside Handle Logout");
    const response = await logout();
    console.log(response.data);
    setAdmin(null);
    if (response.data.success) {
      navigate("/uk-zadminpanel");
    }
  };
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`
        fixed lg:static
        top-0 left-0
        z-50
        h-screen
        w-72
        bg-primary
        text-white
        flex
        flex-col
        justify-between
        transition-transform
        duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
      >
        <div>
          <div className="flex items-center justify-between p-6 border-b border-green-700">
            <div>
              <h1 className="text-2xl font-bold">UrduKitabain</h1>

              <p className="text-green-200 text-sm">Admin Panel</p>
            </div>

            <button className="lg:hidden" onClick={() => setIsOpen(false)}>
              <X />
            </button>
          </div>

          <nav className="mt-8 px-4 space-y-2">
            <Link
              to="/dashboard"
              className="flex items-center gap-4 p-4 rounded-xl bg-white text-[#0B5D3B] font-semibold"
            >
              <LayoutDashboard />
              Dashboard
            </Link>

            <Link
              to="/dashboard/upload"
              className="flex items-center gap-4 p-4 rounded-xl hover:bg-green-700 transition"
            >
              <Upload />
              Upload Book
            </Link>

            <Link
              to="/dashboard/books"
              className="flex items-center gap-4 p-4 rounded-xl hover:bg-green-700 transition"
            >
              <BookOpen />
              Books
            </Link>
          </nav>
        </div>

        <div className="p-4">
          <button
            className="flex items-center gap-4 w-full p-4 rounded-xl hover:bg-red-600 transition"
            onClick={handleLogout}
          >
            <LogOut />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
