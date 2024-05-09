import { FooterContainer, NavContainer, StyledLink, CopyrightText } from './FooterStyles';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <FooterContainer>
      <NavContainer>
        <StyledLink to='/profile'>
          <div>Profile</div>
        </StyledLink>
        <StyledLink to='/about'>
          <div style={{ marginLeft: '10px' }}>About</div>
        </StyledLink>
      </NavContainer>
      <CopyrightText>Copyright Keith 2024</CopyrightText>
    </FooterContainer>
  );
};

export default Footer;
