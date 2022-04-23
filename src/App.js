import './App.css';
import { PrimaryButton } from './components/atoms/button/PrimaryButton';
import { SecondaryButton } from './components/atoms/button/SecondaryButton';
import { SearchInput } from './components/molecules/SearchInput';
import { UserCard } from './components/organisms/user/UserCard';
import { BrowserRouter } from 'react-router-dom'
import { DefaultLayout } from './components/templates/DefaultLayout';

const user = {
  name: "John",
  image: 'https://source.unsplash.com/qQLJ3Ceiqwk',
  company: {
    name: "hogehoge合同会社",
  },
  email: "4444@example.com",
  phone: "080-1111-2222",
  website: "https://google.com",
};

const App = () => {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <PrimaryButton>テスト</PrimaryButton>
        <SecondaryButton>検索</SecondaryButton>
        <br />
        <SearchInput />
        <UserCard user={user} />
      </DefaultLayout>
    </BrowserRouter>
  );
}

export default App;
