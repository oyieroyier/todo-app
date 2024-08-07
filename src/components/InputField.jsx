/* eslint-disable react/prop-types */

const InputField = ({
  value,
  onChange,
  placeholder = "Type new Todo here",
}) => {
  return (
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="input"
      name="text"
      type="text"
      required
    />
  );
};

export default InputField;
