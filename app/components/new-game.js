import Ember from 'ember';

export default Ember.Component.extend({
  addNewGame : false,
  actions:{
    showGameForm(){
      this.set("addNewGame", true)
    },
    saveGame(){
      var params ={
        name: this.get("name"),
        description: this.get("description"),
        image : this.get("image")
      };
      this.set("addNewGame", false)
      this.sendAction("saveGame", params);
    }
  }
});
