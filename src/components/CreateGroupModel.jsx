import { useState } from "react";
import { useContextState } from "../hooks/useContextState";
import { v4 as uuid } from "uuid";

const CreateGroupModel = () => {
  const { isOpen, close, addGroup } = useContextState();

  const handleClick = (e) => {
    e.stopPropagation();
    if (e.currentTarget.id === "bg_popup") {
      setValue("");
      setColor("");
      close();
    }
  };

  const [value, setValue] = useState("");
  const [color, setColor] = useState("");

  const handleCreate = () => {
    if (value.length < 3) {
      alert("Group name must be at least 3 characters long");
      return;
    }
    if (color.length === 0) {
      alert("Please select a color");
      return;
    }
    const splitNames = value.split(" ");
    let tag = "";

    if (splitNames.length === 1) {
      tag = splitNames[0].charAt(0).toUpperCase();
    } else {
      tag =
        splitNames[0].charAt(0).toUpperCase() +
        splitNames[1].charAt(0).toUpperCase();
    }

    const group = {
      id: uuid(),
      name: value,
      color: color,
      tag,
      notes: [],
    };

    addGroup(group);

    setValue("");
    setColor("");
    close();
  };

  return (
    <div
      className={`w-screen bg-gray-400/50 z-50 h-screen justify-center items-center fixed inset-0 ${
        isOpen ? "flex" : "hidden"
      }`}
      id="bg_popup"
      onClick={handleClick}
    >
      <div
        className="bg-white rounded-lg space-y-4 px-7 py-4 text-sm lg:text-base w-11/12 lg:w-auto"
        id="popup"
        onClick={handleClick}
      >
        <h4 className="font-semibold text-xl">Create New Group</h4>
        <div className="flex justify-start items-center gap-x-5 font-medium">
          <span className="shrink-0">Group Name</span>
          <input
            type="text" autoFocus 
            className="px-3 py-2 text-sm rounded-xl text-[#979797] border border-gray-400 tracking-wider focus-within:outline-none font-normal w-full"
            placeholder="Enter group name"
            value={value}
            onChange={(e) => setValue(e.currentTarget.value)}
          />
        </div>

        <div className="flex justify-start items-center gap-x-5 font-medium text-sm sm:text-base">
          <span>Choose colour</span>

          <div className="flex justify-start items-center gap-x-3">
            <button
              onClick={(e) => setColor(e.currentTarget.value)}
              type="button"
              value="#B38BFA"
              className={`w-5 h-5 lg:w-7 lg:h-7 rounded-full hover:ring-2 hover:ring-grey-200 hover:offset-4 bg-[#B38BFA] ring-2 transition-all duration-300 ease-in-out  ${
                color === "#B38BFA" ? "ring-grey-200" : "ring-transparent"
              }`}
            ></button>
            <button
              onClick={(e) => setColor(e.currentTarget.value)}
              type="button"
              value="#FF79F2"
              className={`w-5 h-5 lg:w-7 lg:h-7 rounded-full hover:ring-2 hover:ring-grey-200 hover:offset-4 bg-[#FF79F2] ring-2 transition-all duration-300 ease-in-out ${
                color === "#FF79F2" ? "ring-grey-200" : "ring-transparent"
              }`}
            ></button>
            <button
              onClick={(e) => setColor(e.currentTarget.value)}
              type="button"
              value="#43E6FC"
              className={`w-5 h-5 lg:w-7 lg:h-7 rounded-full hover:ring-2 hover:ring-grey-200 hover:offset-4 bg-[#43E6FC] ring-2 transition-all duration-300 ease-in-out ${
                color === "#43E6FC" ? "ring-grey-200" : "ring-transparent"
              }`}
            ></button>
            <button
              onClick={(e) => setColor(e.currentTarget.value)}
              type="button"
              value="#F19576"
              className={`w-5 h-5 lg:w-7 lg:h-7 rounded-full hover:ring-2 hover:ring-grey-200 hover:offset-4 bg-[#F19576] ring-2 transition-all duration-300 ease-in-out ${
                color === "#F19576" ? "ring-grey-200" : "ring-transparent"
              }`}
            ></button>
            <button
              onClick={(e) => setColor(e.currentTarget.value)}
              type="button"
              value="#0047FF"
              className={`w-5 h-5 lg:w-7 lg:h-7 rounded-full hover:ring-2 hover:ring-grey-200 hover:offset-4 bg-[#0047FF] ring-2 transition-all duration-300 ease-in-out ${
                color === "#0047FF" ? "ring-grey-200" : "ring-transparent"
              }`}
            ></button>
            <button
              onClick={(e) => setColor(e.currentTarget.value)}
              type="button"
              value="#6691FF"
              className={`w-5 h-5 lg:w-7 lg:h-7 rounded-full hover:ring-2 hover:ring-grey-200 hover:offset-4 ring-2 transition-all ease-in-out duration-300 bg-[#6691FF] ${
                color === "#6691FF" ? "ring-grey-200" : "ring-transparent"
              }`}
            ></button>
          </div>
        </div>

        <button
          className="w-40 relative px-4 py-2 text-center float-end bg-secondary-background rounded-xl text-white"
          type="button"
          onClick={handleCreate}
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default CreateGroupModel;
