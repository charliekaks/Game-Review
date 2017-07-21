import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    saveComment(){
      var params ={
        name: this.get("name"),
        description: this.get("description"),
        image : this.get("image")
      };
      this.sendAction("saveComment", params);
    }
  }
});
