import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import StatCard from "../components/Statcard";
import { useState } from "react";
import { BookOpen, Download, Eye } from "lucide-react";
import UploadBookForm from "../components/UploadBook";

const AdminDashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex bg-background">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <main className="flex-1 p-8">
        <Topbar setIsOpen={setIsOpen} />

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <StatCard title="Books" value="0" icon={BookOpen} />

          <StatCard title="Views" value="0" icon={Eye} />

          <StatCard title="Downloads" value="0" icon={Download} />
        </div>

        <div className="bg-white rounded-3xl shadow-sm mt-10 p-10">
          <h2 className="text-3xl font-bold text-primary">Upload New Book</h2>

          <div className="text-gray-500 mt-2">
            <UploadBookForm />
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
