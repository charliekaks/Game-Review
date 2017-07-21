import Ember from 'ember';

export default Ember.Route.extend({
  // model(){
  //   return Ember.RSVP.hash({
  //   games: this.store.findAll('game'),
  //   ratings: this.store.findAll('rating')
  // });
  // }
  model(){
    return this.store.findAll('game');
  }
  // ,
  // actions:{
  //   saveComment(params){
  //     var newGame = this.store.createRecord('game', params);
  //     newGame.save();
  //   }
  // }
});
