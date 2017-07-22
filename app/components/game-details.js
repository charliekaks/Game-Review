import Ember from 'ember';

export default Ember.Component.extend({
  sortedReviews: Ember.computed.sort('game.rating', 'sortDefinition'),
  sortDefinition: ['star:desc'],
});
