GalleryAlbums = new orion.collection('galleryalbums', {
  singularName: 'Gallery Album',
  pluralName: 'Gallery Albums',
  title: 'Gallery Albums',
  link: {
    title: 'Gallery Albums',
    index: 20
  }, 
  tabular: {
    columns: [
       orion.attributeColumn('image', 'image', 'Cover Image'),
      { data: 'title', title: 'Title' },
      orion.attributeColumn('createdAt', 'createdAt', 'Created At'),
      { data: 'actions',className: 'text-center', orderable: false, title: 'Actions',
        render: function (val,type,doc){
          var html = '<a data-toggle="tooltip" title="Edit Album" class="green-success" href="';
            html +=  Router.path('collections.galleryalbums.update', doc);
            html +=  '"><i class="fa fa-pencil-square-o fa-lg"></i></a>';
            // html +=  '&nbsp;<a class="" id="addImages" data-toggle="tooltip" title="Add Images">';
            // html +=  '<i class="fa fa-picture-o fa-lg"></i></a>';
            return html;
        },
        tmpl: Meteor.isClient && Template.addGalleryImages
     }
    ]
  }
});

