module.exports = function (grunt) {
  grunt.initConfig({
    htmlmin: {
      options: {
        collapseWhitespace: true,
        preserveLineBreaks: false
      },
      files: {
        expand: true,
        cwd: '_book',
        src: ['*.html', 'docs/*.html'],
        dest: 'dist/'
      }
    },
    unescape: {
      files: {
        src: ['_book/*.html', '_book/docs/*.html'],
        dist: 'dist/'
      }
    },
    replace: {
      html: {
        src: ['dist/*.html', 'dist/docs/*.html'],
        overwrite: true,
        replacements: [{
          form: '<link rel="apple-touch-icon-precomposed" sizes="152x152" href="gitbook/images/apple-touch-icon-precomposed-152.png">',
          to: '<link rel="apple-touch-icon-precomposed" sizes="152x152" href="https://cdn.jsdelivr.net/gh/wangding/i@master/favicon.svg">'
        }, {
          from: '<link rel="shortcut icon" href="gitbook/images/favicon.ico" type="image/x-icon">',
          to: '<link rel="shortcut icon" href="https://cdn.jsdelivr.net/gh/wangding/i@master/favicon.svg">'
        }, {
          from: '<li class="divider"></li><li><a href="https://www.gitbook.com" target="blank" class="gitbook-link">本书使用 GitBook 发布</a></li>',
          to: ''
        }, {
          from: '<li class="chapter" data-level="3.3" data-path="docs/services.html"><a href="docs/services.html">服务项目</a></li>',
          to: ''
        }, {
          from: '<li class="chapter" data-level="3.3" data-path="services.html"><a href="services.html">服务项目</a></li>',
          to: ''
        }]
      }
    },
    copy: {
      html: {
        files: [{
          expand: true,
          cwd: 'dist',
          src: ['*.html', 'docs/*.html'],
          dest: '_book/'
        }]
      },
      js: {
        files: [{
          expand: true,
          cwd: 'dist',
          src: ['gitbook/**'],
          dest: '_book/'
        }]
      }
    },
    'json-minify': {
      build: {
        files: 'cases/*.json'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-text-replace');
  grunt.loadNpmTasks('grunt-unescape-html');
  grunt.loadNpmTasks('grunt-json-minify');

  grunt.registerTask('minify', ['unescape', 'copy:html', 'htmlmin', 'replace', 'copy:html', 'json-minify']);
};
