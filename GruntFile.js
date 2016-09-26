module.exports = function( grunt ){

   // tell grunt to load jshint task plugin.
   grunt.loadNpmTasks('grunt-contrib-jshint');

   // configure tasks
   grunt.initConfig({
      jshint: {
          files: [
             'GruntFile.js',
             'src/main/resources/js/*.js',
             'src/main/resources/css/*.css',
             'src/main/template/*.ftl'
          ],
          options: {
            globals: {
                jQuery: true
            }
          }
      },
      watch: {
        files: ['<%= jshint.files %>'],
        tasks: ['jshint']
      }
   });

   grunt.registerTask('default',['jshint']);

};