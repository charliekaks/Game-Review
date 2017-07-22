import Ember from 'ember';

export function starReview(params) {
  var star = parseInt(params[0]);

  if (star === 1) {
      return "\u2605";
    } else if (star === 2) {
      return "\u2605\u2605";
    } else if (star === 3) {
      return "\u2605\u2605\u2605";
    } else if (star === 4) {
      return "\u2605\u2605\u2605\u2605";
    } else if (star === 5) {
      return "\u2605\u2605\u2605\u2605\u2605";
    } else if (star === 6) {
      return "\u2605\u2605\u2605\u2605\u2605\u2605";
    }
  }


export default Ember.Helper.helper(starReview);
