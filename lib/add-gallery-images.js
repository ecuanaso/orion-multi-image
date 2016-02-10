Template.addGalleryImages.events({
	'click #addImages': function(){
		//alert('clicked');
		// console.log(Router.current().path);
		console.log( this._id )
		var pathtoredirect = "add-images" + "/" + this._id
		Router.go('addImages', {_id : this._id });
		//Router.path('addimages', this._id )
	},
	// "click  #deleteRow": function(){
	// 	if ( confirm('Are you sure?'))
	// 		Meteor.call('removeRow',this._id);
	// }
});
