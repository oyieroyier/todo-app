import PageTitle from "./components/PageTitle";
import AddTodoForm from "./components/AddTodoForm";

function App() {
  return (
    <main>
      <PageTitle text={"My Todo App"} />
      <AddTodoForm />

      <div className="todos-container"></div>
    </main>
  );
}

export default App;
