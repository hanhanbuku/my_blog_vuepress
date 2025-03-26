(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{563:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),t("blockquote",[t("p",[s._v("在做项目的时候使用了"),t("code",[s._v("element")]),s._v("的图标库，后续又想扩展一些自己图标库上去。但由于后面引入的图标库的使用方式和"),t("code",[s._v("element")]),s._v("的有区别，所以选择封装一个图标组件来进行渲染。组件是通过"),t("code",[s._v("jsx")]),s._v("写的，于是在开发过程中就遇到了动态组件失效的问题。下面就来介绍一下在"),t("code",[s._v("jsx")]),s._v("中该如何去使用动态组件")])]),s._v(" "),t("h2",{attrs:{id:"在vue3-vite项目中使用jsx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在vue3-vite项目中使用jsx"}},[s._v("#")]),s._v(" 在vue3+vite项目中使用jsx")]),s._v(" "),t("p",[s._v("首先需要安装一下编译"),t("code",[s._v("jsx")]),s._v("的插件")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("pnpm")]),s._v(" i @vitejs/plugin-vue-jsx "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-D")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("然后再配置文件中使用一下这个插件")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" vueJsx "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@vitejs/plugin-vue-jsx'")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("defineConfig")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("plugins")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vue")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vueJsx")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("下面就可以开心的去使用"),t("code",[s._v("jsx")]),s._v("来编写代码啦。")]),s._v(" "),t("h2",{attrs:{id:"icon组件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#icon组件"}},[s._v("#")]),s._v(" Icon组件")]),s._v(" "),t("div",{staticClass:"language-vue line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-vue"}},[t("code",[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("script")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("lang")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("tsx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),t("span",{pre:!0,attrs:{class:"token script"}},[t("span",{pre:!0,attrs:{class:"token language-javascript"}},[s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" defineComponent"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" h"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" resolveComponent "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'vue'")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("defineComponent")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'NcIcon'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("props")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("keys")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("type")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" String"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("setup")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("props")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("keys")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" string\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ctx")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" props"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("keys "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" props"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("keys"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("indexOf")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'nc-'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("span "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'iconfont'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" props"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("keys"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("span"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n              "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("el"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("icon"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("h")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("resolveComponent")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("props"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("keys"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n              "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("el"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("icon"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("script")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br")])]),t("p",[s._v("需要把"),t("code",[s._v("script")]),s._v("标签的"),t("code",[s._v("lang")]),s._v("改为"),t("code",[s._v("tsx")]),s._v("，文件后缀正常使用"),t("code",[s._v(".vue")]),s._v("就行。")]),s._v(" "),t("p",[s._v("组件非常简单，就是区分了一下传入的"),t("code",[s._v("keys")]),s._v("来渲染不同的图标。正常来说在"),t("code",[s._v("el-icon")]),s._v("里会去选择使用"),t("code",[s._v("component")]),s._v("组件来动态渲染"),t("code",[s._v("element")]),s._v("的图标，但是由于图标组件没有在这个组件中注册，而是注册在全局，所以在"),t("code",[s._v("jsx")]),s._v("中使用的话，\n并不会去渲染组件，而是把你传入的"),t("code",[s._v("keys")]),s._v("当成"),t("code",[s._v("字符串")]),s._v("输出了。后面经过官网查阅资料发现了这个"),t("code",[s._v("api")]),s._v("。")]),s._v(" "),t("h2",{attrs:{id:"h"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#h"}},[s._v("#")]),s._v(" h")]),s._v(" "),t("p",[s._v("这个"),t("code",[s._v("api")]),s._v("大家都知道，他就是用来创建"),t("code",[s._v("vnode")]),s._v("的，也就是俗称的"),t("code",[s._v("虚拟DOM")]),s._v("。最终交由"),t("code",[s._v("render")]),s._v("渲染的就是他。")]),s._v(" "),t("h2",{attrs:{id:"resolvecomponent"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#resolvecomponent"}},[s._v("#")]),s._v(" resolveComponent")]),s._v(" "),t("p",[s._v("重点是这个函数，由于h函数需要传入一个组件实例或者一个标签类型，很显然我们传入的字符串是不符合要求的，所以需要用到"),t("code",[s._v("resolveComponent")]),s._v("函数。")]),s._v(" "),t("p",[s._v("官网对他的解释是：按名称手动解析已注册的组件。我们的图标组件已经注册在全局了，这个函数刚好可以通过字符串解析出以注册的组件。这不就正好能达成需求了嘛。")]),s._v(" "),t("p",[s._v("以后在"),t("code",[s._v("jsx")]),s._v("中想动态渲染都可以通过这个方案,当然前提是组件你已经注册了。")]),s._v(" "),t("div",{staticClass:"language-vue line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-vue"}},[t("code",[s._v("{h(resolveComponent('组件名称'))}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("这里记录一下小tips：最近"),t("code",[s._v("vue")]),s._v("和"),t("code",[s._v("react")]),s._v("交替开发，在写"),t("code",[s._v("vue")]),s._v("的"),t("code",[s._v("jsx")]),s._v("的时候先入为主的将"),t("code",[s._v("react")]),s._v("函数式组件的思维带入进去了，导致忘记声明"),t("code",[s._v("props")]),s._v("了。搞的半天接受不到父组件传入的"),t("code",[s._v("props")]),s._v("....还以为jsx有什么特殊的姿势去接受"),t("code",[s._v("props")]),s._v("呢，结果整半天是没声明哈哈哈哈")])])}),[],!1,null,null,null);t.default=e.exports}}]);