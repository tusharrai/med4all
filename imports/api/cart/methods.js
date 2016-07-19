import { Cart } from './cart';

export const insertCart = new ValidatedMethod({
  name: 'cart.insert',
  validate: new SimpleSchema({
    userId: {type: String},
    brand: { type: String },
    manufacturer: {type: String},
    category: {type: String},
    quantity: {type: String},

  }).validator(),
  run(cart) {
    Cart.insert(cart);
  },
});

export const updateCart = new ValidatedMethod({
  name: 'cart.update',
  validate: new SimpleSchema({
    _id: { type: String },
    'update.quantity': { type: String, optional: true },
  }).validator(),
  run({ _id, update }) {
    Cart.update(_id, { $set: update });
  },
});

export const removeCart = new ValidatedMethod({
  name: 'cart.remove',
  validate: new SimpleSchema({
    _id: { type: String },
  }).validator(),
  run({ _id }) {
    Cart.remove(_id);
  },
});
