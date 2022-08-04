(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{408:function(t,s,a){t.exports=a.p+"assets/img/themeInit.be26db04.png"},423:function(t,s,a){"use strict";a.r(s);var e=a(1),r=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"本节前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#本节前言"}},[t._v("#")]),t._v(" 本节前言")]),t._v(" "),s("p",[t._v("到目前为止, 我们已经完成了一个个人博客基本框架的搭建, 实现了导航、目录和内容展示功能, 但是网页整体看起来还是比较简陋, 并且缺少一些常见的效果, 比如 loading、过度动画、主题切换等, 你可以自己开发相关功能, 但是为了减少开发和学习成本, 我们可以直接使用 vuepress 的主题库来实现这些;")]),t._v(" "),s("p",[t._v("在本次项目中, 我们使用 vuepress-theme-reco 主题")]),t._v(" "),s("h3",{attrs:{id:"安装主题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装主题"}},[t._v("#")]),t._v(" 安装主题")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("// npm安装\nnpm install vuepress-theme-reco --save-dev\n// yarn安装\nyarn add vuepress-theme-reco\n")])])]),s("h3",{attrs:{id:"配置-config-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置-config-js"}},[t._v("#")]),t._v(" 配置 config.js")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("theme")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'reco'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 配置文档主题,")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("locales")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 配置语言设置, vuepress 默认的 lang 是 en-US , 我个人喜欢把它修改为 zh-CN")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'/'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("lang")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'zh-CN'")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("themeConfig")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("subSidebar")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'auto'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 自动生成右侧子侧边栏")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"添加文档信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加文档信息"}},[t._v("#")]),t._v(" 添加文档信息")]),t._v(" "),s("p",[t._v("此时, 我们便可以在文档中添加一下其他信息, 比如")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("---\ntitle: README\nauthor: 李巳\ndate: '2022-07-24'\ncategories:\n  - frontEnd\ntags:\n  - vue\n  - vuepress\n---\n")])])]),s("h3",{attrs:{id:"成功预览"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#成功预览"}},[t._v("#")]),t._v(" 成功预览")]),t._v(" "),s("p",[t._v("最后, 我们再次启动项目, 会发现我们本节开头提到的一些功能现在都有了, 你的页面应该会长这样\n"),s("img",{attrs:{src:a(408),alt:"图片"}})])])}),[],!1,null,null,null);s.default=r.exports}}]);