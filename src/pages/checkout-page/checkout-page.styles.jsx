import styled from 'styled-components';
import StripeCheckoutButton from '../../components/stripe-checkout-button/stripe-checkout-button.component';


export const CheckoutPageContainer = styled.div`
    width: 55%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto 100px;
`;

export const CheckoutItemsContainer = styled.div`
    width: 100%;
`;

export const TotalAmountContainer = styled.div`
    margin-top: 30px;
    margin-left: auto;
    font-size: 25px;
`;

export const TestWarningContainer = styled.div`
    text-align: center;
    margin-top: 40px;
    font-size: 24px;
    color: red;
`;

export const CheckoutButtonContainer  = styled(StripeCheckoutButton)`
    margin-left: auto;
    margin-top: 100px;
`;