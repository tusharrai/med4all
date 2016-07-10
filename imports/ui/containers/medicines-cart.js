import { composeWithTracker } from 'react-komposer';
import { Cart } from '../../api/cart/cart.js';
import { MedicinesCart } from '../components/medicines-cart.js';
import { Loading } from '../components/loading.js';

const composer = (params, onReady) => {
  const subscription = Meteor.subscribe('cart');
  if (subscription.ready()) {
    const cart = Cart.find().fetch();
    onReady(null, { cart });
  }
};

export default composeWithTracker(composer, Loading)(MedicinesCart);
