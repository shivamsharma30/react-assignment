module.exports = {
    plugins:[
        '@babel/plugin-transform-react-jsx'
    ],
    reporters: ['default',  ['jest-sonar', {
        outputDirectory: 'test-report',
        outputName: 'report.xml',
        reportedFilePath: 'absolute'
    }]],
}