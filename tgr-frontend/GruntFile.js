module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';'
      },
      js: {
        src: ['src/main/assets/**/*.js'],
        dest: 'target/assets/js/<%= pkg.name %>.js'
      },
      css: {
        src: ['src/main/assets/**/*.css'],
        dest: 'target/assets/css/<%= pkg.name %>.css'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'target/assets/js/<%= pkg.name %>.min.js': ['<%= concat.js.dest %>']
        }
      }
    },
    copy: {
      main: {
        expand: true,
        flatten: true,
        src: 'src/main/assets/templates/*',
        dest: 'target/assets/templates/',
      },
      sec: {
        expand: true,
        flatten: true,
        src: 'src/main/assets/static/*',
        dest: 'target/assets/static/',
      }
    },
    jshint: {
      files: ['Gruntfile.js', 'src/main/assets/**/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');


  grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'copy']);

};