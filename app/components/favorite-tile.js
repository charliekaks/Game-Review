import Ember from 'ember';

export default Ember.Component.extend({
  favoriteList: Ember.inject.service(),

 actions: {
   addToCart(item) {
      this.get('shoppingCart').add(item);
 }
 }
});
