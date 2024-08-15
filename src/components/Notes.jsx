import { useCallback, useEffect, useRef, useState } from "react";
import { useContextState } from "../hooks/useContextState";
import NotesItem from "./NotesItem";
import { v4 as uuid } from "uuid";

const Notes = () => {
  const [textValue, setTextValue] = useState("");
  const ref = useRef();

  const { selectedGroup, group, addNote, openSidebar } = useContextState();

  const currentGroup = group.find((el) => el.id === selectedGroup);

  const handleTextInput = useCallback(() => {
    const date = new Date();
    const options = {
      day: "numeric",
      month: "short", 
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };

    const formattedDate = new Intl.DateTimeFormat("en-IN", options).format(
      date
    );

    const newNote = {
      id: uuid(),
      content: textValue,
      date: formattedDate,
    };
    addNote(selectedGroup, newNote);
    setTextValue("");
  },[selectedGroup,textValue,addNote]);

  useEffect(()=>{

    const handleEnter = (e)=>{
      if(ref.current=== document.activeElement && textValue.trim().length!==0 && e.key === "Enter"){
      handleTextInput()
      setTextValue('')
      }
    }

    document.addEventListener('keypress',handleEnter);

    return () => document.removeEventListener('keypress',handleEnter);

  },[textValue,selectedGroup,addNote,handleTextInput]);



  if (currentGroup === null || currentGroup === undefined) return null;

  return (
    <div
      className={`w-full h-screen flex-col justify-between items-center ${
        selectedGroup.length !== 0 ? "flex" : "hidden"
      }`}
    >
      <div className="w-full bg-secondary-background flex justify-start items-center px-4 py-2 gap-x-3">
      <img src="./arrow.png" className="lg:hidden  lg:pointer-events-none" alt="arrow" onClick={()=>{openSidebar()}}/>
        <div className={`h-12 w-12 rounded-full flex justify-center items-center bg-[${currentGroup.color}] text-white text-lg tracking-wider`}>
          {currentGroup.tag}
        </div>

        <p className="text-white font-medium">{currentGroup.name}</p>
      </div>

      {/* content */}
      <div className="w-full flex-1 min-h-96 h-full overflow-auto p-4 space-y-5">
      {currentGroup.notes.map((el) => (
        <NotesItem
          content={el.content}
          date={el.date.split(",")[0]}
          time={el.date.split(",")[1].trim()}
          key={el.id}
        />
      ))}
      </div>
      {/* Input */}

      <div className="w-full h-44 px-4 py-3 bg-secondary-background relative">
        <textarea ref={ref}
          rows={5}
          className="w-full font-semibold tracking-wider p-4 text-[#9a9a9a] rounded-xl hover:outline-none focus:outline-none relative"
          placeholder="Enter your text here..........."
          value={textValue}
          onChange={(e) => setTextValue(e.currentTarget.value)}
        ></textarea>
        <img
          src={`${
            textValue.trim().length === 0 ? "./grey_Vector.png" : "./blue_Vector.png"
          }`}
          className={`absolute w-7 h-7 bottom-10 right-10 ${
            textValue.trim().length === 0
              ? "pointer-events-none cursor-not-allowed"
              : "pointer-events-auto cursor-pointer"
          }`}
          onClick={handleTextInput}
        />
      </div>
    </div>
  );
};

export default Notes;
