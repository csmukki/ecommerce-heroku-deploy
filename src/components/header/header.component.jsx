import React from 'react';

import {ReactComponent as Logo} from '../../assets/logo.svg';

import { HeaderContainer, 
        OptionsContainer, 
        OptionLink, 
        OptionDiv, 
        LogoContainer} from './header.styles';
import CartIcon from '../cart-icon/cart-icon.component';

const Header = ({history}) => (
    <HeaderContainer>
       <LogoContainer to="/">
           <Logo />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to="/shop">Shop</OptionLink>
            <OptionLink to="/contact">Contact</OptionLink>
            <OptionLink to="/sign-in">Sign in</OptionLink>
            <OptionDiv>
                <CartIcon />
            </OptionDiv>
        </OptionsContainer>
    </HeaderContainer>
);

export default Header;