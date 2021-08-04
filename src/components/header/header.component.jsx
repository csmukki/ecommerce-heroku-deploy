import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {ReactComponent as Logo} from '../../assets/logo.svg';

import { HeaderContainer, 
        OptionsContainer, 
        OptionLink, 
        OptionDiv, 
        LogoContainer} from './header.styles';

import {signOutStart} from '../../redux/user/user.actions';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({hidden, currentUser, signOut}) => (
    <HeaderContainer>
       <LogoContainer to="/">
           <Logo />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to="/shop">Shop</OptionLink>
            <OptionLink to="/contact">Contact</OptionLink>
            {
                currentUser ? (
                    <OptionDiv
                        onClick={signOut}
                    >Sign Out</OptionDiv>
                ): (
                    <OptionLink to="/sign-in">Sign in</OptionLink>
                )
            }
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
    hidden: selectCartHidden, 
    currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
    signOut: () => dispatch(signOutStart())
});


export default connect(mapStateToProps, mapDispatchToProps)(Header);