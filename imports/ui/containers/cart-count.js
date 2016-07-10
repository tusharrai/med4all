import { composeWithTracker } from 'react-komposer';
import { Cart } from '../../api/cart/cart.js';
import { CartCount } from '../components/cart-count.js';
import { Loading } from '../components/loading.js';

const composer = (params, onReady) => {
  const subscription = Meteor.subscribe('cart');
  if (subscription.ready()) {
    const cartCount = Cart.find().count();
    onReady(null, { cartCount });
  }
};

export default composeWithTracker(composer, Loading)(CartCount);
