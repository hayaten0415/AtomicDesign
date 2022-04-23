import styled from "styled-components";
import { Card } from "../../atoms/card/Card";
import { UserIconWithName } from '../../molecules/user/UserIconWithName';

export const UserCard = (prop) => {
  const {user} = prop;
  return (
    <Card>
      <UserIconWithName image={user.image} name={user.name} />
      <StyledDl>
        <dt>会社名</dt>
        <dd>{user.company.name}</dd>
        <dt>メール</dt>
        <dd>{user.email}</dd>
        <dt>TEL</dt>
        <dd>{user.phone}</dd>
        <dt>サイト</dt>
        <dd>{user.website}</dd>
      </StyledDl>
    </Card>
  );
}

const StyledDl = styled.dl`
  text-align: left;
  margin-bottom: 0px;
  dt {
    float: left;
  }
  dd {
    padding-left: 30px;
    padding-bottom: 8px;
    overflow-wrap: break-word;
  }
`