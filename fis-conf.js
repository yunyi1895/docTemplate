fis.set('project.ignore', [
    'build/**',
    'config/**',
    'node_modules/**',
    'src/**',
    'static/**',
    'BACK/**',
    '.git/**',
    '.svn/**',
    '.babelrc',
    '.editorconfig',
    '.gitignore',
    '.postcssrc.js',
    'fis-conf.js',
    'index.html',
    'package.json',
    'README.md',
]);
fis.media('dev')
    .match('**', {
        release: '$0'
    })
    .match('*', {
        deploy: fis.plugin('http-push', {
            receiver: 'http://192.168.1.110:8999/receiver',
            //远端目录
            to: '/evcard/www/csms'
        })
    })