import Ember from 'ember';

export default Ember.Component.extend({

  actions:  {
    saveRating(){
      var params={
        comment : this.get("comment"),
        reviewer : this.get("reviewer"),
        star : parseInt(this.get("star")),
        game :this.get("game")
      };
      this.sendAction("saveRating", params);
    }
  }

});
