Template.addImages.onCreated(function(){
	this.subscribe('myuploads');
});


Template.addImages.events({
  'click .back-btn': function() {
    window.history.go(-1);
  },
  'click .editButton':function(){
  	Session.set('editingImageName', this.name );
  	Session.set('editingImage',this.fileId);
  	Session.set('currentAlbumId', Router.current().params._id );
  },
  	"click  .deleteUpload": function(){
		if ( confirm('Are you sure?'))
			//TODO
			var albumId = Router.current().params._id; // Get albumId for this image.
			console.log(albumId);
			Meteor.call('removeImage',albumId, this.fileId);

	}
});

Template.addImages.helpers({
	// thumbId: function() {
	//     return "thumb-" + this._id;
	//   },
	editing_image_name: function(){
		return Session.get('editing_image');
	},
	noImages : function(){
	    return GalleryAlbums.find().count() === 0
	},
	myUploadFormData: function(title, desc){
		console.log(Router.current().params._id);
		return {
	        id: Router.current().params._id,
	        title: title,
	        desc: desc
	    }
	},
	image: function () {
	    return GalleryAlbums.findOne(Router.current().params._id);
	  }
});


Template.editButtonDialog.helpers({
  imageId: function(){
    return Session.get('editingImageName');
  }
});



Template.editButtonDialog.events({
	"click .updateImageName":function(e, tmpl){
		var currentAlbumId = Session.get('currentAlbumId');
		var singeImageId = Session.get('editingImage');
		var singeImageNameVal = tmpl.find('#imageName').value;

		var currentAlbum = {}; 
		currentAlbum.id = currentAlbumId;
		currentAlbum.fileId = singeImageId;
		currentAlbum.name = singeImageNameVal;

		// ^^Is the same as declaring it as 
		//				var currentAlbum = { id: currentAlbumId,  
		//                                     fileId: singeImageId,
		//										name: singeImageNameVal
		//									 }

		console.log('This is the album obj with images', currentAlbum )

		Meteor.call('updateImageName', currentAlbum, function(err){
			if (err){
				console.log(err);
			} else {	
				console.log('Sending the call update image call from the client to a server is a success!');
			}
		});

		$('#myModal').modal('hide');

		// var savingImageName = Session.get('editingImage');
		// var currentAlbumId = Session.get('currentAlbumId');
		// var imageName = tmpl.find('#imageName').value;
		// console.log('imageId: ', savingImageName, 'albumId: ',currentAlbumId, 'image name: ', imageName );
		// Meteor.call('updateImageName', savingImageName, currentAlbumId,  imageName );
		// $('#myModal').modal('hide');

	}
});