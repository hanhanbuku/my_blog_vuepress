(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{515:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),a("blockquote",[a("p",[t._v("此前遇到了h5网页在ios设备上跳转不会刷新的问题，总结了以下几种解决办法")])]),t._v(" "),a("p",[t._v("在ios上，返回上一页ios内核会直接从缓存中拿到上一个页面，而不会重新请求服务器，这也就意味着，整个页面拿出来后是静止的状态，无论是html css还是js都是处于一个暂停的状态，某些情况下这并不是我们理想的状态，有时候可能某个页面或者网页需要载入后就发起请求获取最新的数据，这个时候在ios上就会出现问题。 解决办法有如下几种")]),t._v(" "),a("ul",[a("li",[t._v("1.添加meat标签设置no-cache")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("meta http"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("equiv"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Pragma"')]),t._v(" content"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"no-cache"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("meta http"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("equiv"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Cache-control"')]),t._v(" content"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"no-cache"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("meta http"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("equiv"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Cache"')]),t._v(" content"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"no-cache"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[a("strong",[t._v("附：html页面中meta的作用")]),t._v("\nmeta是用来在HTML文档中模拟HTTP协议的响应头报文。meta 标签用于网页的")]),a("head",[t._v("与")]),t._v("中，meta 标签的用处很多。meta 的属性有两种：name和http-equiv。name属性主要用于描述网页，对应于content（网页内容），以便于搜索引擎机器人查找、分类（目前几乎所有的搜索引擎都使用网上机器人自动查找meta值来给网页分类）。这其中最重要的是description（站点在搜索引擎上的描述）和keywords（分类关键词），所以应该给每页加一个meta值。比较常用的有以下几个："),a("p"),t._v(" "),a("p",[t._v("name 属性")]),t._v(" "),a("p",[t._v("1、")]),a("meta",{attrs:{name:"Generator",contect:""}}),t._v("用以说明生成工具（如Microsoft FrontPage 4.0）等；"),a("p"),t._v(" "),a("p",[t._v("2、")]),a("meta",{attrs:{name:"KEYWords",contect:""}}),t._v("向搜索引擎说明你的网页的关键词；"),a("p"),t._v(" "),a("p",[t._v("3、")]),a("meta",{attrs:{name:"DEscription",contect:""}}),t._v("告诉搜索引擎你的站点的主要内容；"),a("p"),t._v(" "),a("p",[t._v("4、")]),a("meta",{attrs:{name:"Author",contect:"你的姓名"}}),t._v("告诉搜索引擎你的站点的制作的作者；"),a("p"),t._v(" "),a("p",[t._v("5、")]),a("meta",{attrs:{name:"Robots",contect:"all|none|index|noindex|follow|nofollow"}}),a("p"),t._v(" "),a("p",[t._v("其中的属性说明如下：")]),t._v(" "),a("p",[t._v("设定为all：文件将被检索，且页面上的链接可以被查询；")]),t._v(" "),a("p",[t._v("设定为none：文件将不被检索，且页面上的链接不可以被查询；")]),t._v(" "),a("p",[t._v("设定为index：文件将被检索；")]),t._v(" "),a("p",[t._v("设定为follow：页面上的链接可以被查询；")]),t._v(" "),a("p",[t._v("设定为noindex：文件将不被检索，但页面上的链接可以被查询；")]),t._v(" "),a("p",[t._v("设定为nofollow：文件将不被检索，页面上的链接可以被查询。")]),t._v(" "),a("p",[t._v("http-equiv属性")]),t._v(" "),a("p",[t._v('1、<meta http-equiv="Content-Type" contect="text/html";charset=gb_2312-80">和 ')]),a("meta",{attrs:{"http-equiv":"Content-Language",contect:"zh-CN"}}),t._v("用以说明主页制作所使用的文字以及语言；"),a("p"),t._v(" "),a("p",[t._v("又如英文是ISO-8859-1字符集，还有BIG5、utf-8、shift-Jis、Euc、Koi8-2等字符集；")]),t._v(" "),a("p",[t._v("2、")]),a("meta",{attrs:{"http-equiv":"Refresh",contect:"n;url=http://yourlink"}}),t._v("定时让网页在指定的时间n内，跳转到页面http://yourlink；"),a("p"),t._v(" "),a("p",[t._v("3、")]),a("meta",{attrs:{"http-equiv":"Expires",contect:"Mon,12 May 2001 00:20:00 GMT"}}),t._v("可以用于设定网页的到期时间，一旦过期则必须到服务器上重新调用。需要注意的是必须使用GMT时间格式；"),a("p"),t._v(" "),a("p",[t._v("4、")]),a("meta",{attrs:{"http-equiv":"Pragma",contect:"no-cache"}}),t._v("是用于设定禁止浏览器从本地机的缓存中调阅页面内容，设定后一旦离开网页就无法从Cache中再调出；"),a("p"),t._v(" "),a("p",[t._v("5、")]),a("meta",{attrs:{"http-equiv":"set-cookie",contect:"Mon,12 May 2001 00:20:00 GMT"}}),t._v("cookie设定，如果网页过期，存盘的cookie将被删除。需要注意的也是必须使用GMT时间格式；"),a("p"),t._v(" "),a("p",[t._v("6、")]),a("meta",{attrs:{"http-equiv":"Pics-label",contect:""}}),t._v("网页等级评定，在IE的internet选项中有一项内容设置，可以防止浏览一些受限制的网站，而网站的限制级别就是通过meta属性来设置的；"),a("p"),t._v(" "),a("p",[t._v("7、")]),a("meta",{attrs:{"http-equiv":"windows-Target",contect:"_top"}}),t._v("强制页面在当前窗口中以独立页面显示，可以防止自己的网页被别人当作一个frame页调用；"),a("p"),t._v(" "),a("p",[t._v("8、")]),a("meta",{attrs:{"http-equiv":"Page-Enter",contect:"revealTrans(duration=10,transtion= 50)"}}),t._v("和"),a("meta",{attrs:{"http-equiv":"Page-Exit",contect:"revealTrans(duration=20，transtion=6)"}}),t._v("设定进入和离开页面时的特殊效果，这个功能即FrontPage中的“格式/网页过渡”，不过所加的页面不能够是一个frame页面。"),a("p"),t._v(" "),a("ul",[a("li",[t._v("2.pageShow事件")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pageshow'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("persisted "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("location"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("reload")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("为了查看页面是直接从服务器上载入还是从缓存中读取，可以使用 PageTransitionEvent 对象的 persisted 属性来判断。如果页面从浏览器的缓存中读取该属性返回 ture，否则返回 false,所以可以通过这个值来决定是否重载网页")])])}),[],!1,null,null,null);a.default=n.exports}}]);