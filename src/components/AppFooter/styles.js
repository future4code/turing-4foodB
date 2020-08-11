import styled from 'styled-components';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';

export const AppFooterWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  height: 2.5rem;
  width: 23.5rem;
  position: absolute;
  bottom: 0; 
  margin-bottom: 0.8rem;
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