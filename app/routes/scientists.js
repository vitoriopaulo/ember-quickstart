import Ember from 'ember';

export default Ember.Route.extend({
  model () {
return ['Albert Einstein', 'Isaac Newton', 'Galileo Galilei',
'Nicolau Copernico', 'Stephen Hawking', 'Linus Pauling', 'Marie Curie'];
  }
});
