module.exports = function( grunt ){

   // tell grunt to load jshint task plugin.
   grunt.loadNpmTasks('grunt-contrib-jshint');

   // configure tasks
   grunt.initConfig({
      jshint: {
          files: [
             'GruntFile.js'
          ],
          options: {
            globals: {
                jQuery: true
            }
          }
      },
      uglify: {
      build: {
          files: {
            'target/resources/js/*.js': ['src/main/resources/js/*.js'],
            'target/resources/css/*.css': ['src/main/resources/css/*.css'],
            'target/resources/templates/*.ftl': ['src/main/resources/templates/*.ftl']
          }
      }

      }
   });

   grunt.loadNpmTasks('grunt-freemarker');
   grunt.loadNpmTasks('grunt-contrib-uglify');

   grunt.registerTask('default',['jshint']);
   grunt.registerTask('default',['uglify']);

};