import DS from 'ember-data';

export default DS.Model.extend({
  name : DS.attr(),
  image: DS.attr(),
  description: DS.attr()
  //rating : DS.hasMany('rating', { async: true })
});
