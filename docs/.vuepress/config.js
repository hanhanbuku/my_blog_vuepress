const dayjs = require('dayjs')
const DOMAIN_NAME = 'UzumakiItachi.com' // 域名 (不带https)
const WEB_SITE = `https://${DOMAIN_NAME}` // 网址

module.exports = {
    title: 'UzumakiItachi',
    description: 'UzumakiItachi',
    theme:'vdoing',
    dest: './dist',
    port: '8080',
    base: '/my_blog_vuepress/', // 默认'/'。如果你想将你的网站部署到如 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/",（否则页面将失去样式等文件）
    themeConfig: {
        // 导航配置
        nav: [
            { text: '首页', link: '/' },
            {
                text: '前端',
                link: '/web/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
                items: [
                    // 说明：以下所有link的值只是在相应md文件头部定义的永久链接（不是什么特殊编码）。另外，注意结尾是有斜杠的
                    {
                        text: 'JavaSript',
                        link: '/web/#JavaScript',
                    },
                ],
            },
            {
                text: '框架',
                link: '/frame/',
                items: [
                    {
                        text: 'Vue',
                        items:[
                            {
                                text: 'Vue2',
                                link: '/frame/Vue2/'
                            },
                            {
                                text: 'Vue3',
                                link: '/frame/Vue3/'
                            },
                        ]
                  },
                    {
                        text:'React',
                        items:[
                            {
                                text: 'React_18',
                                link: '/frame/React/'
                            },
                        ]
                    }
                ],
            },
            {
                text: '技术',
                link: '/technology/',
                items: [
                    { text: 'WebPack', link: '/technology/#WebPack' },
                    { text: '浏览器相关', link: '/technology/#浏览器相关' },
                    { text: '工程化相关', link: '/technology/#工程化相关' },
                    { text: '工作中遇到的问题以及解决方案', link: '/technology/#工作中遇到的问题以及解决方案' },
                    { text: 'Git', link: '/technology/#Git' },
                ],
            },
            {
                text: '更多',
                link: '/more/',
                items: [
                    { text: '学习', link: '/pages/f2a556/' },
                    { text: '面试', link: '/pages/aea6571b7a8bae86/' },
                    { text: '心情杂货', link: '/pages/2d615df9a36a98ed/' },
                    { text: '实用技巧', link: '/pages/baaa02/' },
                    { text: '友情链接', link: '/friends/' },
                ],
            },
            { text: '关于', link: '/about/' },
            {
                text: '收藏',
                link: '/pages/beb6c0bd8a66cea6/',
                // items: [
                //   { text: '网站', link: '/pages/beb6c0bd8a66cea6/' },
                //   { text: '资源', link: '/pages/eee83a9211a70f9d/' },
                //   { text: 'Vue资源', link: '/pages/12df8ace52d493f6/' },
                // ],
            },
            {
                text: '索引',
                link: '/archives/',
                items: [
                    { text: '分类', link: '/categories/' },
                    { text: '标签', link: '/tags/' },
                    { text: '归档', link: '/archives/' },
                ],
            },
        ],
        sidebar: 'structuring',
        sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
        // logo: '/img/logo.png', // 导航栏logo
        repo: 'hanhanbuku/my_blog_vuepress', // 导航栏右侧生成Github链接
        searchMaxSuggestions: 10, // 搜索结果显示最大数
        lastUpdated: '上次更新', // 开启更新时间，并配置前缀文字   string | boolean (取值为git提交时间)
        docsDir: 'docs', // 编辑的文件夹
        // docsBranch: 'master', // 编辑的文件所在分支，默认master。 注意：如果你的分支是main则修改为main
        editLinks: true, // 启用编辑
        editLinkText: '编辑',
        //*** 以下是Vdoing主题相关配置，文档：https://doc.xugaoyi.com/pages/a20ce8/ ***//

        category: true, // 是否打开分类功能，默认true
        tag: true, // 是否打开标签功能，默认true
        archive: true, // 是否打开归档功能，默认true
        // categoryText: '随笔', // 碎片化文章（_posts文件夹的文章）预设生成的分类值，默认'随笔'

        // pageStyle: 'line', // 页面风格，可选值：'card'卡片 | 'line' 线（未设置bodyBgImg时才生效）， 默认'card'。 说明：card时背景显示灰色衬托出卡片样式，line时背景显示纯色，并且部分模块带线条边框

        bodyBgImg: [
          'https://pic.imgdb.cn/item/63fca038f144a01007245d99.jpg',
        ], // body背景大图，默认无。 单张图片 String | 多张图片 Array, 多张图片时隔bodyBgImgInterval切换一张。
        bodyBgImgOpacity: 1, // body背景图透明度，选值 0.1~1.0, 默认0.5
        // bodyBgImgInterval: 15, // body多张背景图时的切换间隔, 默认15，单位s
        titleBadge: true, // 文章标题前的图标是否显示，默认true
        // titleBadgeIcons: [ // 文章标题前图标的地址，默认主题内置图标
        //   '图标地址1',
        //   '图标地址2'
        // ],
        // contentBgStyle: 1, // 文章内容块的背景风格，默认无. 1 方格 | 2 横线 | 3 竖线 | 4 左斜线 | 5 右斜线 | 6 点状

        updateBar: { // 最近更新栏
          showToArticle: true, // 显示到文章页底部，默认true
          moreArticle: '/archives' // “更多文章”跳转的页面，默认'/archives'
        },
        // rightMenuBar: false, // 是否显示右侧文章大纲栏，默认true (屏宽小于1300px下无论如何都不显示)
        // sidebarOpen: false, // 初始状态是否打开左侧边栏，默认true
        // pageButton: false, // 是否显示快捷翻页按钮，默认true

        // 默认外观模式（用户未在页面手动修改过模式时才生效，否则以用户设置的模式为准），可选：'auto' | 'light' | 'dark' | 'read'，默认'auto'。
        // defaultMode: 'auto',

        // 文章默认的作者信息，(可在md文件中单独配置此信息) string | {name: string, link?: string}
        author: {
            name: 'hanhanbuku', // 必需
            link: 'https://github.com/hanhanbuku/', // 可选的
        },
        // 博主信息 (显示在首页侧边栏)
        blogger: {
            avatar: 'https://pic.imgdb.cn/item/63fca046f144a01007247d23.jpg',
            name: 'UzumakiItachi',
            slogan: '起风了，唯有努力生存。',
        },
        // 社交图标 (显示于博主信息栏和页脚栏。内置图标：https://doc.xugaoyi.com/pages/a20ce8/#social)
        social: {
            // iconfontCssFile: '//at.alicdn.com/t/xxx.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自己添加。阿里图片库：https://www.iconfont.cn/
            icons: [
                {
                    iconClass: 'icon-youjian',
                    title: '发邮件',
                    link: 'mailto:894072666@qq.com',
                },
                {
                    iconClass: 'icon-github',
                    title: 'GitHub',
                    link: 'https://github.com/hanhanbuku/',
                },
                {
                    iconClass: 'icon-gitee',
                    title: 'Gitee',
                    link: 'https://gitee.com/wangyuhan123',
                },
            ],
        },
        // 页脚信息
        footer: {
            createYear: 2023, // 博客创建年份
            copyrightInfo:
                'UzumakiItachi | <a href="https://github.com/xugaoyi/vuepress-theme-vdoing/blob/master/LICENSE" target="_blank">MIT License</a>', // 博客版权信息、备案信息等，支持a标签或换行标签</br>
        },
        // 自定义hmtl(广告)模块
        // htmlModules
    },
    // 注入到页面<head>中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
    head: [
        ['link', { rel: 'icon', href: '/img/favicon.ico' }], //favicons，资源放在public文件夹
        [
            'meta',
            {
                name: 'keywords',
                content: '前端博客,个人技术博客,前端,前端开发,前端框架,web前端,前端面试题,技术文档,学习,面试,JavaScript,js,ES6,TypeScript,vue,python,css3,html5,Node,git,github,markdown',
            },
        ],
        ['meta', { name: 'baidu-site-verification', content: '7F55weZDDc' }], // 百度统计的站长验证（你可以去掉）
        ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
        // [
        //   'script',
        //   {
        //     'data-ad-client': 'ca-pub-7828333725993554',
        //     async: 'async',
        //     src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
        //   },
        // ], // 网站关联Google AdSense 与 html格式广告支持（你可以去掉）
    ],
    // 插件配置
    plugins:[
        [
            "sitemap", // 网站地图
            {
                hostname: WEB_SITE,
            },
        ],
        // 可以添加第三方搜索链接的搜索框（继承原官方搜索框的配置参数）
        [
            'thirdparty-search',
            {
                thirdparty: [
                    {
                        title: '在MDN中搜索',
                        frontUrl: 'https://developer.mozilla.org/zh-CN/search?q=', // 搜索链接的前面部分
                        behindUrl: '', // 搜索链接的后面部分，可选，默认 ''
                    },
                    {
                        title: '在Runoob中搜索',
                        frontUrl: 'https://www.runoob.com/?s=',
                    },
                    {
                        title: '在Vue API中搜索',
                        frontUrl: 'https://cn.vuejs.org/v2/api/#',
                    },
                    {
                        title: '在Bing中搜索',
                        frontUrl: 'https://cn.bing.com/search?q=',
                    },
                    {
                        title: '通过百度搜索本站的',
                        frontUrl: `https://www.baidu.com/s?wd=site%3A${DOMAIN_NAME}%20`,
                    },
                ],
            }
        ],

        [
            'one-click-copy', // 代码块复制按钮
            {
                copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
                copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
                duration: 1000, // prompt message display time.
                showInMobile: false, // whether to display on the mobile side, default: false.
            },
        ],

        [
            'demo-block', // demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
            {
                settings: {
                    // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
                    // cssLib: ['http://xxx'], // 在线示例中的css依赖
                    // vue: 'https://fastly.jsdelivr.net/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
                    jsfiddle: false, // 是否显示 jsfiddle 链接
                    codepen: true, // 是否显示 codepen 链接
                    horizontal: false, // 是否展示为横向样式
                },
            },
        ],

        [
            'vuepress-plugin-zooming', // 放大图片
            {
                selector: '.theme-vdoing-content img:not(.no-zoom)', // 排除class是no-zoom的图片
                options: {
                    bgColor: 'rgba(0,0,0,0.6)',
                },
            },
        ],

        [
            'vuepress-plugin-comment', // 评论
            {
                choosen: 'gitalk',
                options: {
                    clientID: '060c6c92841566af1d39',
                    clientSecret: '3356583f16e94f45035b1bb57711783ccae1160a',
                    repo: 'my_blog_vuepress', // GitHub 仓库
                    owner: 'hanhanbuku', // GitHub仓库所有者
                    admin: ['hanhanbuku'], // 对仓库有写权限的人
                    // distractionFreeMode: true,
                    pagerDirection: 'last', // 'first'正序 | 'last'倒序
                    id: '<%- (frontmatter.permalink || frontmatter.to.path).slice(-16) %>', //  页面的唯一标识,长度不能超过50
                    title: '「评论」<%- frontmatter.title %>', // GitHub issue 的标题
                    labels: ['Gitalk', 'Comment'], // GitHub issue 的标签
                    body:
                        '页面：<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>', // GitHub issue 的内容
                },
            },
        ],

        [
            '@vuepress/last-updated', // "上次更新"时间格式
            {
                transformer: (timestamp, lang) => {
                    return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
                },
            },
        ],

        //光标效果的插件
        [
            'cursor-effects', {
            size: 2, // size of the particle, default: 2
            shape: 'star', // ['star' | 'circle'], // shape of the particle, default: 'star'
            zIndex: 999999999, // z-index property of the canvas, default: 999999999
        }
        ],
        //阅读进度插件
        [
            'reading-progress'
        ],
        // 这个插件将会向 page 对象注入预计阅读时间与字数统计。
        [
            "@mr-hope/reading-time",
            {
                // 配置选项
            },
        ],
        //动态标题展示
        ['dynamic-title', {
            showIcon: 'https://pic.imgdb.cn/item/63fca046f144a01007247d77.jpg',
            showText: '客官欢迎回来~',
            hideIcon: 'https://pic.imgdb.cn/item/63fca046f144a01007247d77.jpg',
            hideText: '客官不要走嘛~',
            recoverTime: 2000,
        }]
    ],
    lastUpdated: 'Last Updated',
    searchMaxSuggestoins: 10,
    serviceWorker: {
        updatePopup: {
            message: "有新的内容.",
            buttonText: '更新'
        }
    },
    markdown: {
        lineNumbers: true,
        extractHeaders: ['h2', 'h3', 'h4', 'h5', 'h6'], // 提取标题到侧边栏的级别，默认['h2', 'h3']
    },

    // 监听文件变化并重新构建
    extraWatchFiles: [
        '.vuepress/config.ts',
        '.vuepress/config/htmlModules.ts',
    ],
    // locales: {
    //     '/': {
    //         lang: 'zh-CN',
    //         title: "UzumakiItachi's blog",
    //         description: 'web前端技术博客,专注web前端学习与总结。JavaScript,js,ES6,TypeScript,vue,React,python,css3,html5,Node,git,github等技术文章。',
    //     }
    // },
}
