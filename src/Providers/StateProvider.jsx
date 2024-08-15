import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const StateContext = createContext();

const StateProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [group, setGroup] = useState(JSON.parse(localStorage.getItem('pocket-notes')) || []);
  const [selectedGroup, setSelectedGroup] = useState("");
  const [mobileSidebar, setMobileSidebar] = useState(false);

  const open = () => {
    setIsOpen(true);
  };
  const close = () => {
    setIsOpen(false);
  };

  const openSidebar = () => {
    setMobileSidebar(true);
  };

  const closeSidebar = () => {
    setMobileSidebar(false);
  };

  const addGroup = (group) => {
    setGroup((pre) => [...pre, group]);
    localStorage.setItem('pocket-notes',JSON.stringify(group));
  };

  const addNote = (id, note) => {
    const idGroup = group.find((item) => item.id === id);
    const otherGroup = group.filter((item) => item.id !== id);

    idGroup.notes.unshift(note);

    setGroup([idGroup, ...otherGroup]);
    localStorage.setItem('pocket-notes',JSON.stringify(group))
  };

  const handleSelectedGroup = (id) => {
    setSelectedGroup(id);
  };
  return (
    <StateContext.Provider
      value={{
        isOpen,
        open,
        close,
        group,
        addGroup,
        selectedGroup,
        handleSelectedGroup,
        addNote,
        mobileSidebar,
        openSidebar,
        closeSidebar,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
StateProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StateProvider;
