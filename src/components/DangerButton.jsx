/* eslint-disable react/prop-types */

const DangerButton = ({ text, ...props }) => {
  return (
    <button
      {...props}
      className="flex-1 cursor-pointer rounded-lg border-none bg-red-600 px-[1.7em] py-[0.7em] uppercase text-[#090909] shadow-[6px_6px_12px_#c5c5c5] transition-all delay-300 active:text-white active:shadow-[inset_4px_4px_12px_#9c3d3d]"
    >
      {text}
    </button>
  );
};

export default DangerButton;
