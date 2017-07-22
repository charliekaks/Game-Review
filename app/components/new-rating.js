import Ember from 'ember';

export default Ember.Component.extend({
  addNewReview : false,

  actions:  {
    showReviewForm(){
      this.set("addNewReview", true)
    },
    saveRating(){
      var params={
        comment : this.get("comment"),
        reviewer : this.get("reviewer"),
        star : this.get("star"),
        game :this.get("game")
      };
      this.set("addNewReview", false)
      this.sendAction("saveRating", params);
    }
  }

});
