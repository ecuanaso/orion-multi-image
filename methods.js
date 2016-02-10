Meteor.methods({
		'updateImageName': function(currentAlbum){
			console.log('This is the id of the single image ', currentAlbum.fileId );
			console.log('This is the current album id ', currentAlbum.id );
			console.log('This is the name of the single image ', currentAlbum.name );

             var ImageobjListinAlbum = GalleryAlbums.find({_id: currentAlbum.id }, {images :1, _id:0} );
             var arrImages;
			 ImageobjListinAlbum.forEach(function (imgobj) {
				// ...
				// console.log ('this is the fileId on the server ', imgobj.images.[0].fileId);
				// console.log('this is the url on the server ', imgobj.images.[0].url);
				arrImages = imgobj.images;

				// This is the entire images array of objects inside the selected Gallery Album
				console.log('This is the array of objects of the current Gallery Album Im in ', arrImages );

				arrImages.forEach(function(img){
				// if the image you're updatings id is equal to fileId
				// Updating one single image name
				 if ( currentAlbum.fileId == img.fileId ) {
				 	console.log('This is the name of the image inside mongodb', img.name );
				 	console.log( "The image file id of the single image I'm updating is ", img.fileId );	
				 	console.log( "The image url of the single image I'm updating is ", img.url );
				 	console.log( "The new image name of the single image I'm updating is now " + currentAlbum.name );

				 	GalleryAlbums.update({'images.fileId':img.fileId},{$set:{'images.$.name':currentAlbum.name}});

				 }	

			  });
			});
		},

		'removeImage':  function(albumId, imagefileid){
			//var image = orion.filesystem.collection.remove({_id: id })\
			console.log('on the server ', albumId );
			console.log('on the server ', imagefileid );
			// Before the documents are removed from collections , get the url so as to get filename 
			var ImageobjListinAlbum = GalleryAlbums.find({_id: albumId}, {images :1, _id:0} );
			var arrImages;
			//console.log ('on server :', ImageobjListinAlbum );
			//console.log(ImageobjListinAlbum.images);
			ImageobjListinAlbum.forEach(function (imgobj) {
				// ...
				// console.log ('this is the fileId on the server ', imgobj.images.[0].fileId);
				// console.log('this is the url on the server ', imgobj.images.[0].url);
				arrImages = imgobj.images;

				arrImages.forEach(function(img){
				 if (imagefileid == img.fileId) {
				 	// remove the file from file system. by stripping the filename from URL field.
				 	console.log('image file id is ', img.fileId);	
				 	console.log('image url  is ', img.url);

				 	var filename = img.url.split('/').pop();
				 	console.log('here is the filename that is on top of the stack' , filename);
				 	// delete the file from filesystem

				 	// var fs = Meteor.npmRequire('fs');
				 	// console.log(process.cwd());
				 	// //fs.unlinkSync(path)
				 	// fs.unlinkSync('../../../../../.uploads/' + filename, function(err){
				 	// 	if ( err ){
				 	// 		return console.error(err);
				 	// 	}
				 	// 	console.log('File deleted successfully!');
				 	// });


				 }	
				 

				});
			});

			// remove the image from galleryImages Mongo Collection 
			//GalleryAlbums.update({"_id" : "2ej4ypxxuaFkro5cQ"}, {"$pull":{"images":{fileId:'mtEKsbGhoY4Rc2Yyx'}}});
		    GalleryAlbums.update({"_id" : albumId }, { "$pull":{ "images":{fileId:imagefileid }}});
		    
		    // remove document from orion files
		    orion.filesystem.collection.remove(imagefileid);
		    // remove file from file system 
		    // get the file name from url either from orion.filesystem.collection or from GalleryAlbums collection
		    //Invoke system level command to delete the file from system.


		}
});