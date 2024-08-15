import PropTypes from "prop-types"
import { useContextState } from "../hooks/useContextState"
const GroupItem = ({id,tag,name,color}) => {

    const {handleSelectedGroup,selectedGroup,closeSidebar} = useContextState();
  return (
    <div className={`flex px-3 py-2 rounded-xl gap-x-3 justify-start items-center cursor-pointer border hover:border-gray-400 ${selectedGroup === id ? "border-gray-400":" border-transparent"}`} onClick={()=>{
        handleSelectedGroup(id);
        closeSidebar();
    }}>
    <p className={`w-12 h-12 rounded-full text-white flex justify-center items-center text-xl bg-[${color}]`}>
        {tag}
    </p>
    <span className='text-lg'>
        {name}
    </span>

    </div>
  )
}
GroupItem.propTypes = {
    name:PropTypes.string,
    tag:PropTypes.string,
    color:PropTypes.string,
    id:PropTypes.string,
}
export default GroupItem