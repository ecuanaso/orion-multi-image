Router.route('/add-images/:_id', {
  name: 'addImages',
  layoutTemplate: 'orionBootstrapLayout',
  data: function(){
    var albumId = this.params._id;
    console.log('this is the ' + albumId + 'from the routes');
  }
});