(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{483:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),t("blockquote",[t("p",[t("code",[s._v("作用域")]),s._v("和"),t("code",[s._v("this")]),s._v("一直都是js里令人头疼的问题，个人总结了一下自己对"),t("code",[s._v("作用域")]),s._v("以及"),t("code",[s._v("this指向")]),s._v("的一些理解。")])]),s._v(" "),t("h2",{attrs:{id:"作用域"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#作用域"}},[s._v("#")]),s._v(" 作用域")]),s._v(" "),t("h3",{attrs:{id:"什么是作用域"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是作用域"}},[s._v("#")]),s._v(" 什么是作用域？")]),s._v(" "),t("blockquote",[t("p",[s._v("作用域本身指的就是某个"),t("code",[s._v("变量")]),s._v("所"),t("code",[s._v("能被访问")]),s._v("的区域，也就是你在某处定义了一个变量，那么有这么一个区域内，是可以访问这个"),t("code",[s._v("变量")]),s._v("的。出了这个区域。你就"),t("code",[s._v("无法访问")]),s._v("他了。对于这种现象，就可以理解为"),t("code",[s._v("作用域")]),s._v("\n而作用域从概念上来区分有两种，一是词法作用域，二是动态作用域。")])]),s._v(" "),t("h4",{attrs:{id:"词法作用域和动态作用域"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#词法作用域和动态作用域"}},[s._v("#")]),s._v(" 词法作用域和动态作用域")]),s._v(" "),t("blockquote",[t("p",[t("code",[s._v("词法作用域")]),s._v("指的是变量在何处定义，他的"),t("code",[s._v("作用域")]),s._v("就在哪里。而"),t("code",[s._v("动态作用域")]),s._v("则是变量在何处被"),t("code",[s._v("调用")]),s._v("，则他的作用域就在何处。在"),t("code",[s._v("js")]),s._v("中采用的就是"),t("code",[s._v("词法作用域")])])]),s._v(" "),t("h4",{attrs:{id:"全局作用域-函数作用域-块级作用域"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#全局作用域-函数作用域-块级作用域"}},[s._v("#")]),s._v(" 全局作用域，函数作用域，块级作用域")]),s._v(" "),t("p",[s._v("上面介绍了两种概念上的作用域，接下来介绍一下js中的三种作用域。")]),s._v(" "),t("ul",[t("li",[s._v("全局作用域")])]),s._v(" "),t("blockquote",[t("p",[t("code",[s._v("全局作用域")]),s._v("，顾名思义，就是定义在全局的变量。在代码的"),t("code",[s._v("任何地方")]),s._v("都可以访问全局作用域内的变量。至于是为什么，这里留个疑问。")])]),s._v(" "),t("ul",[t("li",[s._v("块级作用域")])]),s._v(" "),t("blockquote",[t("p",[s._v("js本身是没有"),t("code",[s._v("块级作用域")]),s._v("的，也就是我们定义在"),t("code",[s._v("{}")]),s._v("里的变量都会被提升到"),t("code",[s._v("全局")]),s._v("。而在es6引入了"),t("code",[s._v("let")]),s._v("关键字后，就有了"),t("code",[s._v("块级作用域")]),s._v("下面看一段代码示例")])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" a "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 1")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" a "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//a is not defined")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("在没有"),t("code",[s._v("let")]),s._v("之前，用"),t("code",[s._v("var声明的变量")]),s._v("会被"),t("code",[s._v("提升")]),s._v("到全局，所以我们在花括号外面也能访问到a。而在使用了"),t("code",[s._v("let")]),s._v("之后，就会形成"),t("code",[s._v("块级作用域")]),s._v("，也就是变量只能再花括号内访问了，所以第二段代码会报错，提示a为定义")]),s._v(" "),t("ul",[t("li",[s._v("函数作用域")])]),s._v(" "),t("blockquote",[t("p",[s._v("最有意思的东西来了，"),t("code",[s._v("函数作用域")]),s._v("，他是一个能牵扯出很多东西的作用域。许许多多复杂的概念都是在他里头出现的，比如"),t("code",[s._v("闭包")]),s._v("，"),t("code",[s._v("作用域链")]),s._v("，"),t("code",[s._v("执行上下文")]),s._v("等等。\n那么他到底是个什么东西呢，其实可以把他理解成"),t("code",[s._v("函数体")]),s._v("内的区域，和块级作用域"),t("code",[s._v("相似")]),s._v("。都是花括号包裹的这个区域，不过在函数作用域内会发生许许多多奇怪的事情\n例如，在函数内访问别的变量，就会牵扯出闭包，作用域链的概念，再比如在函数体内能访问哪些变量。这就又涉及到了函数的执行上下文的概念。下面就让我来一一解答一下")])]),s._v(" "),t("h2",{attrs:{id:"作用域链-执行上下文"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#作用域链-执行上下文"}},[s._v("#")]),s._v(" 作用域链，执行上下文")]),s._v(" "),t("ul",[t("li",[s._v("执行上下文")])]),s._v(" "),t("blockquote",[t("p",[s._v("先从"),t("code",[s._v("执行上下文")]),s._v("开始讲起，执行上下文又分为"),t("code",[s._v("全局执行上下文")]),s._v("和"),t("code",[s._v("函数执行上下文")]),s._v("。可以把他理解成一个对象。这个对象上包含了当前可访问的"),t("code",[s._v("活动变量")]),s._v("，"),t("code",[s._v("this")]),s._v("等一些列东西。\njs自身维护了一个"),t("code",[s._v("执行上下文栈")]),s._v("，没当一个函数被"),t("code",[s._v("调用")]),s._v("时，就会"),t("code",[s._v("创建")]),s._v("一个函数的"),t("code",[s._v("执行上下文")]),s._v("，将他"),t("code",[s._v("压入")]),s._v("栈内。这个"),t("code",[s._v("执行上下文")]),s._v("包含了他"),t("code",[s._v("父级上下文的变量")]),s._v("。栈的最底部就是"),t("code",[s._v("全局执行上下文")]),s._v("。\n当我们在一个函数体内访问一个"),t("code",[s._v("变量")]),s._v("时，首先js会在"),t("code",[s._v("当前")]),s._v("函数执行上下文内查找是否有这个变量，没有的话就会去"),t("code",[s._v("父级执行上下文")]),s._v("内查找，一直到"),t("code",[s._v("全局执行上下文")]),s._v("为止。这也就是上文中为什么任何地方都可以访问到"),t("code",[s._v("全局变量")]),s._v("了。因为全局变量就被放在全局执行上下文里头")])]),s._v(" "),t("ul",[t("li",[s._v("作用域链")])]),s._v(" "),t("blockquote",[t("p",[s._v("根据执行上下文中变量查找的概念，是不是感觉很像原型链的查找，没错这种查找就可以称为是"),t("code",[s._v("作用域链")]),s._v("。")])]),s._v(" "),t("h2",{attrs:{id:"this"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#this"}},[s._v("#")]),s._v(" this")]),s._v(" "),t("blockquote",[t("p",[s._v("this到底是是个什么东西？")])]),s._v(" "),t("p",[s._v("在js中this一般分为三种")]),s._v(" "),t("ul",[t("li",[s._v("在构造函数中，this指向当前"),t("code",[s._v("被创建的对象")])]),s._v(" "),t("li",[s._v("在函数调用中，this指向"),t("code",[s._v("调用函数的那个对象")])]),s._v(" "),t("li",[s._v("在call，bind，apply中，this指向"),t("code",[s._v("传入的那个对象")])]),s._v(" "),t("li",[s._v("在箭头函数里，指向"),t("code",[s._v("父级执行上下文")]),s._v("里的"),t("code",[s._v("this")])])]),s._v(" "),t("p",[s._v("在不同的情况下，this会有不同的含义，下面通过几段代码来更深层次的理解一下")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 在函数中")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" obj "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("hi")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'嗨喽'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("sayHi")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("hi"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\nobj"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sayHi")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 嗨喽")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 在构造函数中")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" obj2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("111")]),s._v("\n    console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//{name:111}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 在箭头函数中，因为父级是全局执行上下文，里面并没有hi这个变量，所以输出undefined")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" obj "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("hi")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'嗨喽'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("sayHi")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("hi"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//undefined")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 在call，bind，apply中,this会变成传入的那个对象")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" o "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("hi")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'我是o的hi属性'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nobj"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sayHi")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("call")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("o"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//'我是o的hi属性'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);