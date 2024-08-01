/* eslint-disable react/prop-types */
const Button = ({ label, backgroundColor, onClick }) => {
  return (
    <button
      style={{
        backgroundColor: backgroundColor,
      }}
      onClick={onClick}
      className="group relative flex h-14 w-56 cursor-pointer items-center justify-center overflow-hidden rounded-md border bg-sky-800 p-2 font-extrabold text-sky-50 duration-500 hover:border-sky-600"
    >
      <div className="absolute z-10 h-48 w-48 rounded-full bg-sky-900 transition-all delay-150 duration-500 ease-in-out group-hover:scale-150 group-hover:delay-75"></div>
      <div className="absolute z-10 h-40 w-40 rounded-full bg-sky-800 transition-all delay-150 duration-500 ease-in-out group-hover:scale-150 group-hover:delay-100"></div>
      <div className="absolute z-10 h-32 w-32 rounded-full bg-sky-700 transition-all delay-150 duration-500 ease-in-out group-hover:scale-150 group-hover:delay-150"></div>
      <div className="absolute z-10 h-24 w-24 rounded-full bg-sky-600 transition-all delay-150 duration-500 ease-in-out group-hover:scale-150 group-hover:delay-200"></div>
      <div className="absolute z-10 h-16 w-16 rounded-full bg-sky-500 transition-all delay-150 duration-500 ease-in-out group-hover:scale-150 group-hover:delay-300"></div>
      <p className="z-10">{label}</p>
    </button>
  );
};

export default Button;
