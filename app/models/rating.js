import DS from 'ember-data';

export default DS.Model.extend({
  comment : DS.attr(),
  reviewer : DS.attr(),
  //game : DS.belongsTo("game", {async : true})

});
