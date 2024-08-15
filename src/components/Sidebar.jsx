import { useContextState } from "../hooks/useContextState";
import GroupItem from "./GroupItem";

const Sidebar = () => {
  const { open, group, mobileSidebar } = useContextState();
  return (
    <div className={`w-full h-screen fixed z-20 inset-0 lg:relative lg:z-0 transition-all duration-300 ease-in-out ${mobileSidebar ? "translate-x-0" : "translate-x-[1000rem] lg:translate-x-0"} `}>
      <div className="w-full h-full bg-white pt-12 flex flex-col overflow-auto">
        <h2 className="text-black font-bold px-5 text-3xl">Pocket Notes</h2>
        <div className="px-2 pt-10 space-y-3 pb-5">
          {group.map((el) => (
            <GroupItem
              key={el.id}
              id={el.id}
              name={el.name}
              tag={el.tag}
              color={el.color}
            />
          ))}
        </div>

        <button
          type="button"
          className="absolute bottom-5 right-5 w-16 h-16 flex justify-center items-center bg-secondary-background text-white font-bold text-5xl hover:text-6xl transition-all duration-300 ease-in-out rounded-full cursor-pointer"
          onClick={() => open()}
        >
          {" "}
          +
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
