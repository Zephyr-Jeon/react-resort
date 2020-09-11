import styled from 'styled-components';
import defaultImg from '../images/room-1.jpeg';

const StyledHero = styled.header`
  min-height: 60vh;
  background: url('${({ img }) => img}') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default StyledHero;

// Set props from where StyledHero used
