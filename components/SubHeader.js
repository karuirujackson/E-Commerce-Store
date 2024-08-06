import { useRouter } from 'next/router';
import styled from 'styled-components';
import Button from './Button';
import CardButton from './CartButton';

const SubHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background: cornflowerBlue;
  padding: 5px 10px;
`;

const Title = styled.h2`
  text-align: center;
  flex-basis: 60%;
  &:first-child {
    margin-left: 20%;
  }
  &:last-child {
    margin-right: 20%;
  }
`;

function SubHeader({ title, goToCart = false }) {
  const router = useRouter();

  return (
    <SubHeaderWrapper>
      <Button onClick={() => router.back()}>
        {`< Go Back`}
      </Button>
      <Title>{title}</Title>
      {
        goToCart && (
          <CardButton onClick={() => router.push('/cart')} />
        )
      }
    </SubHeaderWrapper>
  );
}

export default SubHeader;
