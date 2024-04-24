import { TodoItem } from '../TodoItem';

interface TodoListProps {
  todos: Todo[];
  changeStatusTask: (id: string) => void;
}

export const TodoList = ({ todos, changeStatusTask }: TodoListProps) => {
  return (
    <ul>
      {todos.map((item) => (
        <TodoItem key={item.id} item={item} changeStatusTask={changeStatusTask} />
      ))}
    </ul>
  );
};
