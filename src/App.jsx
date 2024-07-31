import React from "react";
import PageTitle from "./components/PageTitle";

function App() {
  
  return (
    <main>
     <PageTitle text={"My Todo App"} />

      <form>
        <input
          placeholder="Type new Todo here"
          className="input"
          name="text"
          type="text"
          required
        />

        <button className="button">Add Todo</button>
      </form>
      <div className="todos-container"></div>
    </main>
  );
}

export default App;
