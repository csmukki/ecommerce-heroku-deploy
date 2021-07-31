import React from 'react';
import { connect } from 'react-redux';

import {ReactComponent as Logo} from '../../assets/logo.svg';

import { HeaderContainer, 
        OptionsContainer, 
        OptionLink, 
        OptionDiv, 
        LogoContainer} from './header.styles';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { createStructuredSelector } from 'reselect';

const Header = ({hidden}) => (
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
        {
            hidden ? null : <CartDropdown />
        }
    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
    hidden: selectCartHidden
});


export default connect(mapStateToProps)(Header);