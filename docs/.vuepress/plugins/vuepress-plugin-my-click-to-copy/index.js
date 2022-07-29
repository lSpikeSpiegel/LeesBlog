const { resolve } = require('path')


module.exports = (options, ctx) => {
    return {
        name: 'vuepress-plugin-my-click-to-copy',
        clientRootMixin: resolve(__dirname, './mixin.js'), // 使用clientRootMixin API来把插件加载到代码中
        define: { // 使用define API就可以把options中的配置数据，注册到插件的全局使用
            copyButtonText: options.copyButtonText || 'copy',
            copiedButtonText: options.copiedButtonText || 'copied'
        }
    }
}