import styled from "styled-components";
import { BasicButton } from "./BasicButton";

export const PrimaryButton = (props) => {
  const {children} = props
  return  (
    <StyledButton>{children}</StyledButton>
  )
}

const StyledButton = styled(BasicButton)`
  background-color: #40514e;
`;