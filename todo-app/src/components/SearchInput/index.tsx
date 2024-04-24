import { Input } from './styles';

type SeachInputProps = {
  inputValue: string;
  setInputValue: (e: string) => void;
  addTask: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

export const SearchInput = ({ inputValue, setInputValue, addTask }: SeachInputProps) => {
  return (
    <Input
      name="name"
      type="text"
      placeholder="Digite o texto"
      onKeyDown={addTask}
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    />
  );
};
