import { styled } from "styled-components";

const ButtonStypled = styled.button`
  height: 2.125rem;
  padding-left: 1rem;
  padding-right: 1rem;
  background-color: white;
`;

type Props = {
  text: string;
};

export default function Button({}: Props) {
  return <ButtonStypled></ButtonStypled>;
}
