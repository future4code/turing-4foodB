import styled from 'styled-components';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

export const AppHeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  width: 23.5rem;
  height: 4rem;
  position: absolute;
  top: 0;
  margin: 1rem 0;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
  background-color: #ffffff;
  p{
    margin: 0;
    padding: 0;
    text-align: center;
  }
`;

export const VoltarIcone = styled(ArrowBackIosIcon)`
  padding: 0 1rem;
  font-size: x-large!important;
  color: gray;
  cursor: pointer;
  &:active{
    color: #e8222e;
  }
`;
