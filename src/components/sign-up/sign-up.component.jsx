import React, {Component} from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';

import { signUpStart } from '../../redux/user/user.actions';
import CustomInput from '../custom-input/custom-input.component';
import { SignUpContainer, TitleContainer, ButtonContainer } from './sign-up.styles';



class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "", 
            email: "", 
            password: "", 
            confirmPassword: ""
        };
    }

    handleChange = event => {
        const {name, value} = event.currentTarget;
        this.setState({[name]: value});
    };

    handleSubmit = event => {
        event.preventDefault();
        const {email, password, username, confirmPassword} = this.state;
        const {signUpStart} = this.props;
        if(password === confirmPassword) {
            signUpStart(email, password, username);
        }else {
            toast.error("Password should be equal");
        }
        this.setState({});
    }

    render() { 
        const {username, email, password, confirmPassword} = this.state;
        return (
            <SignUpContainer>
                <TitleContainer>Dont have an account</TitleContainer>
                <span>Sign up with email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <CustomInput 
                        name="username"
                        value={username}
                        onChange={this.handleChange}
                        label="Username"
                        required
                    />
                    <CustomInput 
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        label="Email"
                        type="email"
                        required
                    />
                    <CustomInput 
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                        label="Password"
                        type="password"
                        required
                    />
                    <CustomInput 
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label="Confirm Password"
                        type="password"
                        required
                    />
                    <ButtonContainer>Sign up</ButtonContainer>
                </form>
            </SignUpContainer>
        );
    }
}
 
const mapDispatchToProps = dispatch => ({
    signUpStart: (email, password, username) => dispatch(signUpStart({email, password, username}))
});

export default connect(null, mapDispatchToProps)(SignUp);