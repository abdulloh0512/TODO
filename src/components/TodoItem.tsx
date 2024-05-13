import { FC } from "react";
import { FaTrash } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

interface DataType {
  data: {
    id: number;
    name: string;
    status: boolean;
    date: string;
  };
}

function handleCheck(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(event.target.checked);
    
}
const TodoItem: FC<DataType> = (props) => {
  return (
    <div className="flex justify-between items-center bg-white mb-5 p-4 rounded-lg">
      <div className="label-check flex items-center gap-4 ">
        <label className="label cursor-pointer">
          <input
            onChange={handleCheck}
            type="checkbox"
            checked={props.data.status}
            className="checkbox"
          />
        </label>
        <div className="info">
          <h3 className={`text-2xl ${props.data.status ? "line-through" : ""}`}>
            {props.data.name}
          </h3>
          <time></time>
        </div>
      </div>
      <div className="actions flex items-center gap-1 text-xl">
        <span className="bg-gray-300 p-1 rounded-sm">
          <FaTrash className="cursor-pointer" />
        </span>
        <span className="bg-gray-300 p-1 rounded-sm">
          <MdEdit className="text-1xl cursor-pointer" />
        </span>
      </div>
    </div>
  );
};

export default TodoItem;
