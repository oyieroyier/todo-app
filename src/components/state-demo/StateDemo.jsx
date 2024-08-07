import { useState } from "react";

const StateDemo = () => {
  const [name, setName] = useState("Keith");
  let person = "Phillip";

  console.log("From React's VDOM, name is: ", name);
  console.log("From Direct DOM Manipulation, person is : ", person);

  return (
    <div>
      <h1 onClick={() => setName(name === "Keith" ? "Bethuel" : "Keith")}>
        {name}
      </h1>
      <h1
        id="hello"
        onClick={() => {
          const element = document.querySelector("#hello");
          person = person === "Phillip" ? "Mark" : "Phillip";
          element.textContent = person;
        }}
      >
        {person}
      </h1>
    </div>
  );
};

export default StateDemo;
