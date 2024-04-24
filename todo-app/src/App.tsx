import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Container, Header, SearchInput, TodoList } from './components';

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  const addTask = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    const inputValue: string = e.currentTarget.value;
    if (e.key === 'Enter' && inputValue.trim().length !== 0) {
      const updatedTodos: Todo[] = [
        ...todos,
        {
          id: uuid(),
          name: inputValue,
          isComplete: false,
        },
      ];
      setTodos(updatedTodos);
      setInputValue('');
    }
  };

  const changeStatusTask = (id: string): void => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isComplete: !todo.isComplete };
        } else {
          return todo;
        }
      }),
    );
  };

  return (
    <Container>
      <Header />
      <SearchInput addTask={addTask} inputValue={inputValue} setInputValue={setInputValue} />
      <TodoList todos={todos} changeStatusTask={changeStatusTask} />
    </Container>
  );
};

export default App;
