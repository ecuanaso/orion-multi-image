Meteor.startup(function () {
    UploadServer.init({
      tmpDir: process.env.PWD + '/.uploads/tmp',
      uploadDir: process.env.PWD + '/.uploads/',
      checkCreateDirectories: true, //create the directories for you
      finished: function(fileInfo, formData) {
	      // perform a disk operation
	      console.log('form data is ', formData );


    	var albumid = formData.id;

    	console.log('The image ' + albumid + "Has been successfully uploaded!")
    	
    	console.log('The file name is ', fileInfo.name );
	      

	      var newfileinfo = _.extend(fileInfo, { uploader:"image-attribute" } );
	      var uploadedfileid = orion.filesystem.collection.insert(newfileinfo);
	      // insert into Gallery Albums the files uploaded

	      var albumobj = {
            'fileId' : uploadedfileid,
            // 'name' : fileInfo.name,
            'name' : '',
            'url' : fileInfo.url,
            'info' : {
                'width' : 350,
                'height' : 350,
                'backgroundColor' : "#bdbbc0",
                'primaryColor' : "#5a301e",
                'secondaryColor' : "#080406"
             }
	      }

	      var uploadedfileid = GalleryAlbums.update({ _id: albumid }, { 
	        	$push: { 'images': albumobj }
	      }, { validate: false } );
	    }
    });
  });