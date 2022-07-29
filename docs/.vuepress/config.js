const { resolve } = require('path')

module.exports = {
    base: '/LeesBlog/',
    title: "Lee's Blog",
    description: '李巳的个人博客，记录一些学习和撸码过程中的事情',
    theme: 'reco',
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    },
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            {
                text: '其他',
                items: [
                    { text: '我的 GitHub', link: 'https://github.com/lSpikeSpiegel' },
                ]
            },
            { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' }
        ],
        sidebar: [
            {
                title: '欢迎来访',
                path: '/',
            },
            {
                title: "vuepress",
                path: '/studyNotes/vuepress/index',
                collapsable: true, // 不折叠
                children: [
                    { title: "vuepress快速上手", path: "/studyNotes/vuepress/01vuepress快速上手" },
                    { title: "进行一些简单的自定义修改", path: "/studyNotes/vuepress/10进行一些简单的自定义修改" },
                    { title: "使用主题", path: "/studyNotes/vuepress/20使用主题" },
                    { title: "部署", path: "/studyNotes/vuepress/30部署" }
                ],
            }
        ],
        blogConfig: {
            category: {
                location: 2,     // 在导航栏菜单中所占的位置，默认2
                text: '分类' // 默认文案 “分类”
            },
            tag: {
                location: 3,     // 在导航栏菜单中所占的位置，默认3
                text: '标签'      // 默认文案 “标签”
            }
        },
        vssueConfig: {
            platform: 'github',
            owner: 'OWNER_OF_REPO',
            repo: 'NAME_OF_REPO',
            clientId: 'YOUR_CLIENT_ID',
            clientSecret: 'YOUR_CLIENT_SECRET',
        }
    },
    plugins: [
        [
            resolve(__dirname, './plugins/vuepress-plugin-my-click-to-copy'),// 自定义代码复制插件
            // {
            //     'copyButtonText': '复制',
            //     'copiedButtonText': '已复制！'
            // }
        ],

    ]
}

