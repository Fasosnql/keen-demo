import styled, {css} from 'styled-components';

export const MenuWrapper = styled.div`
  background: #eee;
  padding: 15px;
  &:after {
    content: "";
    clear: both;
    display: block;
  }
`;

export const MenuItem = styled.div`
  float: left;
  margin: 0 10px;
  
  a {
    color: #000;
    text-decoration: none;
    
    &:hover {
      color: rgba(0, 0, 0, .8);
    }
  }
  
  ${props => props.toRight && css`
    float: right;
  `}
`;