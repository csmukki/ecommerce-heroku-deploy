import React, {Component} from 'react';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';

import {
    SignInContainer, 
    TitleContainer, 
    ButtonsContainer, 
    SubtitleContainer
} from './sign-in.styles';

import { emailSignInStart, googleSignInStart } from '../../redux/user/user.actions';
import CustomInput from '../custom-input/custom-input.component';
import CustomButton from '../custom-button/custom-button.component';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "", 
            password: ""
        }
    }

    handleChange = event => {
        const {name, value} = event.currentTarget;
        this.setState({[name]: value});
    };

    handleSubmit = async event => {
        event.preventDefault();
        const {email, password} = this.state;
        const {emailSignInStart} = this.props;
        if(email && password) {
            emailSignInStart(email, password);
        }else {
            toast.warning("Invalid email and password!");
        }
        this.setState({email: "", password: ""});
    };

    render() {
        const {email, password} = this.state;
        const {googleSignInStart} = this.props;
        return(
            <SignInContainer>
                <TitleContainer>Already have an account</TitleContainer>
                <SubtitleContainer>sign in with email and password</SubtitleContainer>
                <form onSubmit={this.handleSubmit}>
                    <CustomInput 
                        name="email"
                        type="email"
                        value={email}
                        label="Email"
                        onChange={this.handleChange}
                        required
                    />
                    <CustomInput 
                        name="password"
                        type="password"
                        value={password}
                        label="Password"
                        onChange={this.handleChange}
                        required
                    />
                    <ButtonsContainer>
                        <CustomButton inverted="true">Sign in</CustomButton>
                        <CustomButton type="button"
                            googleSignIn="true"
                            onClick={() => googleSignInStart()}
                        >Sign in with google</CustomButton>
                    </ButtonsContainer>
                </form>
            </SignInContainer>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()), 
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password})) 
});

export default connect(null, mapDispatchToProps)(SignIn);