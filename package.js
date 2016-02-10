Package.describe({
  name: 'ecuanaso:orion-multi-upload',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Multi-image upload for orion',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/aldeed/meteor-simple-schema/blob/master/package.js',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
    // Core Dependencies
  api.use(
    [
      'blaze@2.0.0',
      'templating@1.0.5',
      'underscore',
      'ui',
      'meteor'
    ]
  );
  api.use([
    'ecmascript', 
    'orionjs:core@1.7.0',
    'aldeed:simple-schema@1.5.3' 
    // 'tomi:upload-jquery@2.2.0', 
    // 'tomi:upload-server@1.3.3',
    'iron:router@1.0.12',
    // 'orionjs:image-attribute@1.7.0'
  ]);


  // I guess you can think of imply doing the add for you.

  api.imply([
    'tomi:upload-jquery@2.2.0', 
    'tomi:upload-server@1.3.3',
  ]);

  api.addFiles([
    'collections.js',
    'schema.js',
    'routes.js' 
  ]);
  
  api.addFiles([
    'lib/add-gallery-images.html',
    'lib/multi-uploads.html',
    'lib/add-gallery-images.js',
    'lib/multi-uploads.css',
    'lib/multi-uploads.js'
  ], 'client');

  api.addFiles([
    'init.js',
    'methods.js',
    'publish.js'

    ], "server");

  api.export(['GalleryAlbums']);

});

Package.onTest(function(api) {
});

// Package.onTest(function(api) {
//   api.use('ecmascript');
//   api.use('tinytest');
//   api.use('ecuanaso:orion-multi-upload');
//   api.addFiles('orion-multi-upload-tests.js');
// });
