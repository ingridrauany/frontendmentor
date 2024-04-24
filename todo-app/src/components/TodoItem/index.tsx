import { Checkbox, Item } from './styles';

interface TodoItemProps {
  item: Todo;
  changeStatusTask: (id: string) => void;
}

export const TodoItem = ({ item, changeStatusTask }: TodoItemProps) => {
  return (
    <Item>
      <Checkbox type="checkbox" checked={item.isComplete} onChange={() => changeStatusTask(item.id)} />
      {item.name}
    </Item>
  );
};
