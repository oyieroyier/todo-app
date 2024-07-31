import AddTodoForm from "./components/AddTodoForm";
import PageTitle from "./components/PageTitle";

const App = () => {
  return (
    <main>
      <PageTitle text={"My Todo App"} />
      <AddTodoForm />

      <div className="todos-container"></div>
    </main>
  );
};

export default App;
