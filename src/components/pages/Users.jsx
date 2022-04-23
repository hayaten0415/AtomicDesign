import styled from "styled-components";
import { SearchInput } from '../molecules/SearchInput';
import { UserCard } from '../organisms/user/UserCard';

const users = [...Array(10).keys()].map(((val) => {
  return {
    id: val,
    name: `John-${val}`,
    image: "https://source.unsplash.com/qQLJ3Ceiqwk",
    company: {
      name: "hogehoge合同会社",
    },
    email: "4444@example.com",
    phone: "080-1111-2222",
    website: "https://google.com",
  };
}))


export const Users = () => {
  return (
    <StyledContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <StyledUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </StyledUserArea>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding 24px;
`;

const StyledUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`