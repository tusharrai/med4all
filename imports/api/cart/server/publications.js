import { Cart } from '../cart';

Meteor.publish('cart', function() {
  return Cart.find({
    "userId": this.userId
  });
});
