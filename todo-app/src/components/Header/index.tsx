import { MdOutlineWbSunny } from 'react-icons/md';
import { HeaderBox, SwitchThemeButton, Title } from './styles';

export const Header = () => {
  return (
    <HeaderBox>
      <Title>TODO</Title>
      <SwitchThemeButton>
        <MdOutlineWbSunny />
      </SwitchThemeButton>
    </HeaderBox>
  );
};
