import Backbone from 'backbone';

const Reservation = Backbone.Model.extend({
  urlRoot: function() {
    return `https://ada-backtrek-api.herokuapp.com/trips/${this.get('tripId')}/reservations`;
  },


  validate(attributes) {
    const errors = {};
    if (!attributes.name) {
      errors.name = ['cannot be blank'];
    }

    if (!attributes.email) {
      errors.email = ['cannot be blank'];
    }

    if (Object.keys(errors).length < 1) {
      return false;
    }
    return errors;
  },

});


export default Reservation;
