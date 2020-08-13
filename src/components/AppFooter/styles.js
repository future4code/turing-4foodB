import styled from 'styled-components';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';

export const AppFooterWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 3rem;
  width: 22.5rem;
  position: relative;
  bottom: 0rem; 
  box-shadow: 0 -1px 3px 0 rgba(0, 0, 0, 0.2), 0 -2px 1px -1px rgba(0, 0, 0, 0.12), 0 -1px 1px 0 rgba(0, 0, 0, 0.14);
  background-color: #ffffff;
`;

export const HomeIcon = styled(HomeOutlinedIcon)`
  font-size: xx-large!important;
  color: gray;
  cursor: pointer;
`;
export const HomeIconRed = styled(HomeOutlinedIcon)`
  font-size: xx-large!important;
  color: #e8222e;
  cursor: pointer;
`;

export const CartIcon = styled(ShoppingCartOutlinedIcon)`
  font-size: xx-large!important;
  color: gray;
  cursor: pointer;
`;
export const CartIconRed = styled(ShoppingCartOutlinedIcon)`
  font-size: xx-large!important;
  color: #e8222e;
  cursor: pointer;
`;

export const PersonIcon = styled(PersonOutlineOutlinedIcon)`
  font-size: xx-large!important;
  color: gray;
  cursor: pointer;
`;
export const PersonIconRed = styled(PersonOutlineOutlinedIcon)`
  font-size: xx-large!important;
  color: #e8222e;
  cursor: pointer;
`;