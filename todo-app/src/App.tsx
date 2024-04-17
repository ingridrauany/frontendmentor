import { useState } from 'react';
import { v4 as uuid } from 'uuid';

type Todo = {
  id: string;
  name: string;
  isComplete: boolean;
};

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const value: string = e.currentTarget.value;
      const updatedTodos: Todo[] = [
        ...todos,
        {
          id: uuid(),
          name: value,
          isComplete: false,
        },
      ];
      setTodos(updatedTodos);
      setInputValue('');
    }
  };

  return (
    <div>
      <input
        name="name"
        type="text"
        placeholder="Digite o texto"
        onKeyDown={handleKeyPress}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <ul>
        {todos.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
