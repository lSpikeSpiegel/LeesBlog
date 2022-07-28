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
            }
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
                    { title: "博客发布", path: "/studyNotes/vuepress/30博客发布" }
                ],
            }
        ],
        subSidebar: 'auto'
    }
}

