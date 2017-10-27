import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return ['Bill Gates', 'Steve Jobs', 'Mark Zuckerberg', 'Mike Finneran',
    'Scott Davidson', 'Jessica', 'Tony', 'Maria', 'Vitorio'];
  }
});
