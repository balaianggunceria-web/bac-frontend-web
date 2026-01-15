import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js' 
import { Elements } from '@stripe/react-stripe-js' 
import api from '../api/api';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51SH7J42O6zVf9Ra2BFQOnAc9qL6m2lrMkVscoyIYxJBcwKvZjTfNbwnb8PdH1QmjZFZyDvAcPiksg3zPkdi2Tj8E00zV7rqtFk')

const Stripe = ({ price, orderId }) => {

    const [clientSecret, setClientSecret] = useState('')

    const apperance = {
        theme: 'stripe'
    }
    const options = {
        apperance,
        clientSecret
    }

     const create_payment = async () => {
        try {
            // ✅ Use api instance instead of hardcoded URL
            const { data } = await api.post('/order/create-payment', { price })
            setClientSecret(data.clientSecret)
        } catch (error) {
            // ✅ Better error handling
            console.log(error.response?.data || error.message)
        }
    }


    return (
        <div className='mt-4'>
            {
                clientSecret ? (
                    <Elements options={options} stripe={stripePromise}>
                        <CheckoutForm orderId={orderId} />
                    </Elements>
                ) : <button onClick={create_payment}  className='px-10 py-[6px] rounded-sm hover:shadow-green-700/30 hover:shadow-lg bg-green-700 text-white'>Start Payment</button>
            }
        </div>
    );
};

export default Stripe;