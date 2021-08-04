import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const SignUpContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 380px;
`;

export const TitleContainer = styled.h2`
    padding: 10px;
`;

export const ButtonContainer = styled(CustomButton)`
    margin-left: auto;
    margin-right: auto;
    background: purple;
    color: white;

    &:hover {
        background: cyan;
        color: black;
    }
`;