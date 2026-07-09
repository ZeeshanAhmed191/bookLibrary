import { LucideActivity } from "lucide-react";

interface Props {
  title: string;
  value: string;
  icon: typeof LucideActivity;
}

const StatCard = ({ title, value, icon: Icon }: Props) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-lg transition">

      <div className="flex justify-between items-center">

        <div>

          <p className="text-gray-500">
            {title}
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {value}
          </h2>

        </div>

        <div className="w-14 h-14 rounded-xl bg-primary flex justify-center items-center">

          <Icon className="text-white" />

        </div>

      </div>

    </div>
  );
};

export default StatCard;