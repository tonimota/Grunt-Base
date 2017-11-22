module.exports = function(grunt) {

  grunt.initConfig({
    sass: {
      dev: {
        options: {
          //custom
          sourcemap: 'none',
          style:'compressed'
        },
        files: {
          //'output':'input'
          'public/assets/css/custom.css': 'public/assets/css/sass/custom.scss'
        }
      },
      dist: {
        files: {
          //'output':'input'
          'public/assets/css/custom.css': 'public/assets/css/sass/custom.scss'
        }
      }
    },
    //concatenate files css
    concat: {
      css: {
        //input
        src: ["public/assets/css/sass/mobile.scss","public/assets/css/sass/header.scss","public/assets/css/sass/body.scss"],
        //output
        dest: "public/assets/css/sass/custom.scss"
      },
    },
    //watch files and task's
    watch: {
      sass: {
          files: 'public/assets/css/sass/*.scss',
          tasks: ['concat','sass:dev']
      },
    }    
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.registerTask('default', ['concat:css'],['sass:dist']);
  grunt.registerTask('build', ['sass:dist']);
};