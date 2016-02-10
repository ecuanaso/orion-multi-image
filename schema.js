GalleryAlbums.attachSchema(new SimpleSchema({
  image: orion.attribute('image', {
    label: 'Album Cover'
  }),
  title: {
    type: String,
    unique: true,
    label: 'Album Title'
  },
  description: {
  	type: String,
  	label: 'Description'
  },
  images: orion.attribute('images', {
    label: 'Gallery Images',
    optional: true,
    autoform: {
      omit: true
    }
  }),

  createdAt: orion.attribute('createdAt')
}));