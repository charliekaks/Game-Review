import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    saveGame(){
      var params ={
        name: this.get("name"),
        description: this.get("description"),
        image : this.get("image")
      };
      this.sendAction("saveGame", params);
    }
  }
});
