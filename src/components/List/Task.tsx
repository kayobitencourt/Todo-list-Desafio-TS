import { useState } from "react";
import { Trash } from "@phosphor-icons/react";

export interface TaskProps {
  isChecked: boolean;
  content: string;
}

export function Task() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex gap-3 py-4 px-5 bg-gray-500 rounded-lg border border-gray-400 items-start text-sm">
      <input 
        type="checkbox" 
        className="w-5 mt-1" 
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <p className={`text-gray-100 ${isChecked ? 'line-through text-gray-300' : ''}`}>
        Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
      </p>
      <button>
        <Trash 
          size={24} 
          className="text-gray-300 leading-[0]"
        />
      </button>
    </div>
  );
}
