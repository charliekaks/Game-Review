import Ember from 'ember';

export default Ember.Component.extend({
  addNewReview : false,

  actions:  {
    showReviewForm(){
      this.set("addNewReview", true)
    },
    saveReview(){
      var params={
        comment : this.get("comment"),
        reviewer : this.get("reviewer")
      };
      this.set("addNewReview", false)
      this.sendAction("saveReview", params);
    }
  }

});
