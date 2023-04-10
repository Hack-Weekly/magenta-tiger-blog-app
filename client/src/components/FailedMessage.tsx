import styled from "styled-components";

const FailedMessageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
  h2,
  p,
  a {
    font-family: "Roboto";
  }
`;

const Title = styled.h2`
  color: #2c2c2c;
`;
const Description = styled.p`
  font-weight: 400;
  color: #646464;
`;

const Link = styled.a`
  margin-top: 1rem;
  font-size: 1.1rem;
  color: #9041da;
  cursor: pointer;
  font-weight: 500;
  text-decoration: underline;
  &:hover,
  &:focus {
    color: #a34df3;
  }
  &:active {
    color: #9041da;
  }
  &:visited {
    color: #9041da;
  }
`;

const FailedMessage = () => {
  return (
    <FailedMessageWrapper>
      <Title>Oops, something went wrong :c</Title>
      <Description>We cannot load data</Description>
      <Link onClick={() => window.location.reload()}>Refresh page</Link>
    </FailedMessageWrapper>
  );
};

export { FailedMessage };
