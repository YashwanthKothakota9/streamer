import { Toggle } from './toggle';
import { Wrapper } from './wrapper';

export const Sidebar = () => {
  //Wrapper is responsible for collapsing the sidebar
  return (
    <Wrapper>
      <Toggle />
    </Wrapper>
  );
};
