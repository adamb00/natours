import axios from 'axios';
// import { loadStripe } from '@stripe/stripe-js';
import { showAlert } from './alerts';

export const bookTour = async tourId => {
  const stripe = Stripe(
    'pk_test_51LtASpCBtn53vFV4xUPJ8tNRK5QLEsNTmCwDsW7eDTea1J5udeG2y5Hj6sjMhmxUje6ysMcY1paL4L5Ie0SXyjhv00MKN89Uyo'
  );
  // const stripe = await loadStripe(
  //   'pk_test_51LtASpCBtn53vFV4xUPJ8tNRK5QLEsNTmCwDsW7eDTea1J5udeG2y5Hj6sjMhmxUje6ysMcY1paL4L5Ie0SXyjhv00MKN89Uyo'
  // );
  try {
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    showAlert('error', err);
  }
};
