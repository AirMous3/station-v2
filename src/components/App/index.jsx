import { Devops } from '@/components/Devops';
import { Header } from '@/components/Header';
import { Main } from '@/components/Main';
import { StartInfoLine } from '@/components/StartInfoLine';

export const App = () => {
  return (
    <div>
      <Header />
      <Main />
      <StartInfoLine />
      <Devops />
    </div>
  );
};