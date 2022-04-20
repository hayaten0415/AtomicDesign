import styled from "styled-components";
import { BasicButton } from "./BasicButton";

export const SecondaryButton = (props) => {
  const { children } = props;
  return <StyledButton>{children}</StyledButton>;
};

const StyledButton = styled(BasicButton)`
  background-color: #11888e;
`;

