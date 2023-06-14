import React from 'react';
import useCart from '../../Hooks/useCart';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckOutForm from './CheckOutForm';
import Loader from '../../components/Loader/Loader';
import Animation from '../../components/Animation';


const stripePromise = loadStripe(import.meta.env.VITE_Payment_PK)

const Payment = () => {
      const [cart] = useCart();
      console.log(cart);
      // how does reduce work!!!
      const total = cart.reduce((sum, item) => item.price + sum, 0);
      const price = parseFloat(total.toFixed(2));
      return (
            <div>
                  {/* <SectionHeader title={"Pay Here"}></SectionHeader> */}
                  <Animation body={"Pay Here"}></Animation>
                  <Loader></Loader>
                  <Elements stripe={stripePromise}>

                        <CheckOutForm cart={cart} price={price}></CheckOutForm>
                  </Elements>

            </div>
      );
};

export default Payment;