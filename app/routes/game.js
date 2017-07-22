import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('game', params.game_id);
  },
  saveRating(params){
    var newRating = this.store.createRecord("rating", params);
    var game = params.game;
    game.get("ratings").addObject(newRating);
    newRating.save().then(function(){
      return
    });
  }
});
