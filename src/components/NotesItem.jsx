import PropTypes from "prop-types";
const NotesItem = ({ content, date, time }) => {
  return (
      <div className="w-full px-3 py-4 bg-white shadow-sm rounded-lg text-sm sm:text-base md:text-lg ">
        <p>{content}</p>

        <p className="pt-5 text-xs sm:text-sm flex justify-end items-center gap-x-2 px-2 text-[#353535]">
          <span>{date}</span>
          <span className="w-2 h-2 rounded-xl bg-[#353535]"></span>
          <span>{time.toUpperCase()}</span>
        </p>
      </div>
  );
};

NotesItem.propTypes = {
  content: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default NotesItem;
