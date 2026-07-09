import { Search } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Input = ({ placeholder }: { placeholder: string }) => {
  const[searchValue, setSearchValue] = useState("")
  const navigate = useNavigate()
  return (
    <div className="flex">
      <input
        type="text"
        value={searchValue}
        onChange={(e)=>setSearchValue(e.target.value)}
        className="w-full border border-gray-200 outline-none rounded-l-md p-2 bg-gray-50 placeholder:"
        placeholder={placeholder}
      />
      <button
        className="bg-primary px-3 rounded-r-md items-center"
        onClick={() =>
          navigate(`/books?search=${encodeURIComponent(searchValue)}`)
        }
      >
        <Search color="#fff" />
      </button>
    </div>
  );
};

export default Input;
