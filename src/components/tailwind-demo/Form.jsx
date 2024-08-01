/* eslint-disable react/prop-types */
import Button from "./Button";
import InputField from "./InputField";

const Form = () => {
  function handleEventSubmit(e) {
    e.preventDefault();

    alert("Finyaaaaa!!!");
  }

  return (
    <FormContainer onSubmit={handleEventSubmit}>
      <InputField id="first_name" label="First Name" />
      <InputField id="second_name" label="Second Name" />
      <InputField id={"username"} label={"Username"} />
      <InputField id={"mentor"} label={"Password"} type={"password"} />
      <InputField id={"class"} label={"Class"} type={"tel"} />
      <Button label={"Add Student"} />
    </FormContainer>
  );
};

export default Form;

function FormContainer({ onSubmit, children }) {
  return (
    <form
      onSubmit={onSubmit}
      className="flex w-fit flex-col items-center gap-8 border-2 p-8"
    >
      {children}
    </form>
  );
}
