import AddNewTodo from "./add-new-todo";
import TodoList from "./todo-list";

export default function Page() {
  console.log("Hello")
  return(
  <div>
    <AddNewTodo />
    <TodoList/>
    </div>
     );
}
