(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{503:function(t,_,v){"use strict";v.r(_);var l=v(0),a=Object(l.a)({},(function(){var t=this,_=t._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h2",{attrs:{id:"http协议是什么"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http协议是什么"}},[t._v("#")]),t._v(" http协议是什么")]),t._v(" "),_("ul",[_("li",[t._v("概念：http协议指的是超文本传输协议，它定义了客户端和服务器之间交换报文的格式和方式，默认使用80端口。他采用TCP协议作为传输层协议")])]),t._v(" "),_("p",[t._v("特点：")]),t._v(" "),_("ul",[_("li",[t._v("支持客户端和服务端")]),t._v(" "),_("li",[t._v("通信速度快")]),t._v(" "),_("li",[t._v("无连接：所谓的无连接就是不需要通信双方保持长时间的连接，他限制每次连接只处理一个请求，服务端处理完请求并收到客户端的应答之后就会断开连接。这种方式可以节省传输时间")]),t._v(" "),_("li",[t._v("无状态：这里的无状态指的是通信过程的上下文信息，缺少状态也就意味着下一次通信无法复用上一次通信的信息，只能全部重新传输。这种模式在服务器不需要上次通信信息的通信过程中会显得比较高效。")]),t._v(" "),_("li",[t._v("灵活：http支持传输多种数据对象，正在传输的类型有content-type字段标记")])]),t._v(" "),_("h2",{attrs:{id:"http1-0和http1-1有什么区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http1-0和http1-1有什么区别"}},[t._v("#")]),t._v(" http1.0和http1.1有什么区别")]),t._v(" "),_("ul",[_("li",[t._v("请求方式：http1.1比http1.0新增了PUT,HEAD,OPTIONS等请求方式")]),t._v(" "),_("li",[t._v("长连接：http1.0采用的是短连接也就是每次通信结束就会断开连接，下一次通信则又会重新建立TCP连接。而http1.1采用的是长连接，多个http请求会复用同一个TCP连接。这样做节省了每次通信都要重新建立TCP连接的时间")]),t._v(" "),_("li",[t._v("资源请求方面：http1.0不支持断点续传，在请求一个资源时无法只请求一部分。而http1.1加入了range请求头，支持只请求一部分数据")]),t._v(" "),_("li",[t._v("缓存方面：http1.1引入了更多的缓存控制策略，比如Etag、If-None-Match等更多可以控制缓存的请求头标识")]),t._v(" "),_("li",[t._v("http1.1 中新增了 host 字段，用来指定服务器的域名。http1.0 中认为每台服务器都绑定一个唯一的 IP 地址，因此，请求消息中的 URL 并没有传递主机名（hostname）。但随着虚拟主机技术的发展，在一台物理服务器上可以存在多个虚拟主机，并且它们共享一个IP地址。因此有了 host 字段，这样就可以将请求发往到同一台服务器上的不同网站。")])]),t._v(" "),_("h2",{attrs:{id:"队头堵塞"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#队头堵塞"}},[t._v("#")]),t._v(" 队头堵塞")]),t._v(" "),_("p",[t._v("由于http采用“请求-应答”模型，规定必须一发一收。所以当我们有多个请求发出时他会有一个请求队列，这个队列中并没有优先级。而是按照入队顺序去执行。这也就会出现第一个请求非常慢时会堵住后面所有的请求，每一个请求必须等他前一个请求响应结束才会去执行，这就是队头阻塞现象")]),t._v(" "),_("h2",{attrs:{id:"http1-1和http2-0"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http1-1和http2-0"}},[t._v("#")]),t._v(" http1.1和http2.0")]),t._v(" "),_("ul",[_("li",[t._v('二进制协议：HTTP/2 是一个二进制协议。在 HTTP/1.1 版中，报文的头信息必须是文本（ASCII 编码），数据体可以是文本，也可以是二进制。HTTP/2 则是一个彻底的二进制协议，头信息和数据体都是二进制，并且统称为"帧"，可以分为头信息帧和数据帧。 帧的概念是它实现多路复用的基础。')]),t._v(" "),_("li",[t._v('多路复用：HTTP/2 实现了多路复用，HTTP/2 仍然复用 TCP 连接，但是在一个连接里，客户端和服务器都可以同时发送多个请求或回应，而且不用按照顺序一一发送，这样就避免了"队头堵塞"的问题。')]),t._v(" "),_("li",[t._v("数据流：HTTP/2.0中，一个流是一个双向的、独立的、虚拟的通信管道，可以承载一个或多个帧。每个流都有一个唯一的标识符，并且可以承载请求和响应。这允许多个请求和响应同时存在于同一个连接上，而不会相互阻塞。")]),t._v(" "),_("li",[t._v("头信息压缩：由于http1.1是无状态的所以每次请求都会发送完整的头部信息，这样会浪费很多时间和网络带宽，HTTP/2.0使用了一种称为HPACK的头部压缩算法，可以显著减少头部数据的大小。这降低了每个请求和响应的开销，减少了网络带宽的使用，同时提高了性能。")]),t._v(" "),_("li",[t._v("服务器推送： HTTP/2 允许服务器未经请求，主动向客户端发送资源，这叫做服务器推送。使用服务器推送提前给客户端推送必要的资源，这样就可以相对减少一些延迟时间。这里需要注意的是 http2 下服务器主动推送的是静态资源，和 WebSocket 以及使用 SSE 等方式向客户端发送即时数据的推送是不同的。")])]),t._v(" "),_("h2",{attrs:{id:"hpack头部压缩算法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#hpack头部压缩算法"}},[t._v("#")]),t._v(" HPACK头部压缩算法")]),t._v(" "),_("p",[t._v("所谓的HPACK头部压缩算法指的就是在第一次请求和响应之后，在服务端和客户端同时维护一张头部字段表，这个表用于存储已发送和已接收的头部字段以及他的值，这样后续的请求就不用发送完整的头部字段。只需要发送相对应的索引，双方就能在字段表中找到索引对应的头部字段的值。")]),t._v(" "),_("h2",{attrs:{id:"http状态码"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http状态码"}},[t._v("#")]),t._v(" HTTP状态码")]),t._v(" "),_("h3",{attrs:{id:"_2xx"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2xx"}},[t._v("#")]),t._v(" 2xx")]),t._v(" "),_("ul",[_("li",[t._v("200 OK，表示从客户端发来的请求在服务器端被正确处理")]),t._v(" "),_("li",[t._v("204 No content，表示请求成功，但响应报文不含实体的主体部分")]),t._v(" "),_("li",[t._v("205 Reset Content，表示请求成功，但响应报文不含实体的主体部分，但是与 204 响应不同在于要求请求方重置内容")]),t._v(" "),_("li",[t._v("206 Partial Content，进行范围请求")])]),t._v(" "),_("h3",{attrs:{id:"_3xx"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3xx"}},[t._v("#")]),t._v(" 3xx")]),t._v(" "),_("ul",[_("li",[t._v("301 moved permanently，永久性重定向，表示资源已被分配了新的 URL")]),t._v(" "),_("li",[t._v("302 found，临时性重定向，表示资源临时被分配了新的 URL")]),t._v(" "),_("li",[t._v("303 see other，表示资源存在着另一个 URL，应使用 GET 方法获取资源")]),t._v(" "),_("li",[t._v("304 not modified，表示服务器允许访问资源，但因发生请求未满足条件的情况")]),t._v(" "),_("li",[t._v("307 temporary redirect，临时重定向，和302含义类似，但是期望客户端保持请求方法不变向新的地址发出请求")])]),t._v(" "),_("h3",{attrs:{id:"_4xx"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4xx"}},[t._v("#")]),t._v(" 4xx")]),t._v(" "),_("ul",[_("li",[t._v("400 bad request，请求报文存在语法错误")]),t._v(" "),_("li",[t._v("401 unauthorized，表示发送的请求需要有通过 HTTP 认证的认证信息")]),t._v(" "),_("li",[t._v("403 forbidden，表示对请求资源的访问被服务器拒绝")]),t._v(" "),_("li",[t._v("404 not found，表示在服务器上没有找到请求的资源")])]),t._v(" "),_("h3",{attrs:{id:"_5xx"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5xx"}},[t._v("#")]),t._v(" 5xx")]),t._v(" "),_("ul",[_("li",[t._v("500 internal sever error，表示服务器端在执行请求时发生了错误")]),t._v(" "),_("li",[t._v("501 Not Implemented，表示服务器不支持当前请求所需要的某个功能")]),t._v(" "),_("li",[t._v("503 service unavailable，表明服务器暂时处于超负载或正在停机维护，无法处理请求")])]),t._v(" "),_("h2",{attrs:{id:"_302-303-307的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_302-303-307的区别"}},[t._v("#")]),t._v(" 302,303,307的区别")]),t._v(" "),_("p",[t._v("302是http1.0的协议状态码，在http1.1版本的时候为了细化302状态码⼜出来了两个303和307。 303明确表示客户端应当采⽤get⽅法获取资源，他会把POST请求变为GET请求进⾏重定向。 307会遵照浏览器标准，不会从post变为get。")]),t._v(" "),_("h2",{attrs:{id:"在浏览器地址栏输入一个网址并按下回车发生了什么"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#在浏览器地址栏输入一个网址并按下回车发生了什么"}},[t._v("#")]),t._v(" 在浏览器地址栏输入一个网址并按下回车发生了什么")]),t._v(" "),_("ol",[_("li",[t._v("域名解析：")])]),t._v(" "),_("ul",[_("li",[t._v('浏览器首先会解析输入的网址，提取其中的域名部分。例如，如果您输入的是 "www.example.com"，浏览器会提取 "example.com"。')]),t._v(" "),_("li",[t._v("浏览器需要将域名解析为IP地址，以便知道如何连接到远程服务器。为此，浏览器通常会首先查找本地DNS缓存，如果找不到则向DNS服务器发出请求。")])]),t._v(" "),_("ol",{attrs:{start:"2"}},[_("li",[t._v("建立TCP连接：")])]),t._v(" "),_("ul",[_("li",[t._v("一旦浏览器获得了服务器的IP地址，它会尝试建立与服务器的TCP连接。这是通过三次握手（TCP三次握手）来完成的，确保浏览器和服务器之间的通信能够顺利开始。")])]),t._v(" "),_("ol",{attrs:{start:"3"}},[_("li",[t._v("发送HTTP请求：")])]),t._v(" "),_("ul",[_("li",[t._v("一旦建立了TCP连接，浏览器会向服务器发送一个HTTP请求。这个请求包括请求方法（通常是GET或POST）、请求的URL路径、HTTP版本、以及一些请求头部（例如，User-Agent、Accept等）。")]),t._v(" "),_("li",[t._v("如果是POST请求，还会包括请求体，其中可能包含表单数据或其他需要发送到服务器的信息。")])]),t._v(" "),_("ol",{attrs:{start:"4"}},[_("li",[t._v("服务器处理请求：")])]),t._v(" "),_("ul",[_("li",[t._v("服务器接收到浏览器发送的HTTP请求后，会根据请求的内容和路径来处理请求。这可能涉及到数据库查询、动态生成内容、读取文件等操作，具体取决于服务器上的网站或应用程序。")])]),t._v(" "),_("ol",{attrs:{start:"5"}},[_("li",[t._v("服务器发送HTTP响应：")])]),t._v(" "),_("ul",[_("li",[t._v("服务器处理请求后，会生成一个HTTP响应。这个响应包括HTTP状态码（例如200表示成功，404表示未找到，500表示服务器错误）以及响应头部（例如Content-Type、Content-Length等）。")]),t._v(" "),_("li",[t._v("如果是GET请求，响应还包括请求的内容，通常是HTML页面或其他资源（如图像、CSS文件等）。")]),t._v(" "),_("li",[t._v("如果是POST请求，响应通常包含与请求相关的信息，例如成功或失败的消息。")])]),t._v(" "),_("ol",{attrs:{start:"6"}},[_("li",[t._v("浏览器渲染页面：")])]),t._v(" "),_("ul",[_("li",[t._v("一旦浏览器接收到HTTP响应，它会根据响应的内容类型（Content-Type）来渲染页面。如果响应是HTML页面，浏览器会解析HTML、CSS和JavaScript，并显示网页内容。")]),t._v(" "),_("li",[t._v("浏览器还会处理其他资源，如图像、样式表和脚本文件，以确保网页正常加载和显示。")])]),t._v(" "),_("ol",{attrs:{start:"7"}},[_("li",[t._v("关闭TCP连接：")])]),t._v(" "),_("ul",[_("li",[t._v("当所有资源都加载完毕并且页面被渲染后，浏览器可以选择关闭TCP连接，或者保持连接以便更快地获取其他资源（例如，用户浏览其他页面时）。")])]),t._v(" "),_("h2",{attrs:{id:"tcp-ip五层协议"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tcp-ip五层协议"}},[t._v("#")]),t._v(" TCP/IP五层协议")]),t._v(" "),_("ul",[_("li",[t._v("应用层 (application layer)：直接为应用进程提供服务。应用层协议定义的是应用进程间通讯和交互的规则，不同的应用有着不同的应用层协议，如 HTTP协议（万维网服务）、FTP协议（文件传输）、SMTP协议（电子邮件）、DNS（域名查询）等。")]),t._v(" "),_("li",[t._v("传输层 (transport layer)：有时也译为运输层，它负责为两台主机中的进程提供通信服务。该层主要有以下两种协议：\n"),_("ul",[_("li",[t._v("传输控制协议 (Transmission Control Protocol，TCP)：提供面向连接的、可靠的数据传输服务，数据传输的基本单位是报文段（segment）；")]),t._v(" "),_("li",[t._v("用户数据报协议 (User Datagram Protocol，UDP)：提供无连接的、尽最大努力的数据传输服务，但不保证数据传输的可靠性，数据传输的基本单位是用户数据报。")])])]),t._v(" "),_("li",[t._v("网络层 (internet layer)：有时也译为网际层，它负责为两台主机提供通信服务，并通过选择合适的路由将数据传递到目标主机。")]),t._v(" "),_("li",[t._v("数据链路层 (data link layer)：负责将网络层交下来的 IP 数据报封装成帧，并在链路的两个相邻节点间传送帧，每一帧都包含数据和必要的控制信息（如同步信息、地址信息、差错控制等）。")]),t._v(" "),_("li",[t._v("物理层 (physical Layer)：确保数据可以在各种物理媒介上进行传输，为数据的传输提供可靠的环境。")])]),t._v(" "),_("h2",{attrs:{id:"tcp协议和udp协议的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tcp协议和udp协议的区别"}},[t._v("#")]),t._v(" TCP协议和UDP协议的区别")]),t._v(" "),_("ol",[_("li",[t._v("连接导向 vs. 无连接：")])]),t._v(" "),_("ul",[_("li",[t._v("TCP是一种连接导向的协议。在数据传输之前，TCP建立一个可靠的连接，确保数据的可靠性和完整性。它使用三次握手来建立连接，并使用四次握手来关闭连接。")]),t._v(" "),_("li",[t._v("UDP是一种无连接的协议。它不建立连接，只是简单地将数据包发送到目标，没有连接建立和断开的过程。因此，UDP通常更加轻量级和快速。")])]),t._v(" "),_("ol",{attrs:{start:"2"}},[_("li",[t._v("可靠性：")])]),t._v(" "),_("ul",[_("li",[t._v("TCP提供可靠性传输。它使用序列号、确认和重传机制来确保数据的可靠传输。如果数据包在传输过程中丢失或损坏，TCP会负责重发。")]),t._v(" "),_("li",[t._v("UDP不提供可靠性。它将数据包发送出去，但不负责检查数据的可靠性。因此，UDP更适合一些对实时性要求较高的应用，如音频和视频流。")])]),t._v(" "),_("ol",{attrs:{start:"3"}},[_("li",[t._v("流量控制：")])]),t._v(" "),_("ul",[_("li",[t._v("TCP具有流量控制机制，以确保发送端不会发送过多的数据导致网络拥塞或接收端不堪重负。它使用滑动窗口等技术来控制数据的流量。")]),t._v(" "),_("li",[t._v("UDP没有内置的流量控制机制。发送的数据包将按原样传输，不会根据网络条件进行调整。")])]),t._v(" "),_("ol",{attrs:{start:"4"}},[_("li",[t._v("数据包顺序：")])]),t._v(" "),_("ul",[_("li",[t._v("TCP保证数据包的有序传输。如果数据包以不同的顺序到达，TCP会重新排序它们，以确保数据在接收端以正确的顺序组装。")]),t._v(" "),_("li",[t._v("UDP不保证数据包的有序传输。如果数据包以不同的顺序到达，UDP不会进行重排序。")])]),t._v(" "),_("ol",{attrs:{start:"5"}},[_("li",[t._v("开销：")])]),t._v(" "),_("ul",[_("li",[t._v("TCP通常比UDP更消耗资源，因为它需要维护连接状态、执行错误检测和纠正、实施流量控制等机制。")]),t._v(" "),_("li",[t._v("UDP具有较低的开销，适用于对实时性要求较高、快速传输更为重要的应用。")])]),t._v(" "),_("blockquote",[_("p",[t._v("总结：TCP协议更适合需要可靠性，完整性的数据传输。比如网页内容下载文件等。而UDP协议则更适用于对实时性要求比较高并且可以容忍一点数据丢失的场景，比如视频流，直播，小游戏等")])]),t._v(" "),_("h2",{attrs:{id:"dns解析过程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#dns解析过程"}},[t._v("#")]),t._v(" DNS解析过程")]),t._v(" "),_("p",[t._v("DNS（Domain Name System）解析是将域名（如www.example.com）转换为IP地址（如192.168.1.1）的过程，使您的计算机能够在互联网上找到目标服务器。DNS解析过程涉及多个步骤，通常包括以下主要阶段")]),t._v(" "),_("ol",[_("li",[t._v("本地域名解析缓存：\n"),_("ul",[_("li",[t._v("在进行DNS解析之前，操作系统会首先检查本地DNS缓存。如果之前已经解析过相同的域名，系统会直接从缓存中获取IP地址，避免了向DNS服务器发出请求的步骤。")])])]),t._v(" "),_("li",[t._v("递归查询：\n"),_("ul",[_("li",[t._v("如果在本地缓存中找不到相应的域名解析结果，操作系统会向本地DNS服务器发出递归查询请求。")]),t._v(" "),_("li",[t._v("本地DNS服务器通常由您的互联网服务提供商（ISP）或网络管理员设置，是您计算机连接的网络中的DNS服务器。")])])]),t._v(" "),_("li",[t._v("本地DNS服务器查询：\n"),_("ul",[_("li",[t._v("本地DNS服务器会首先检查自己的缓存，看是否已经解析过该域名。如果有缓存，它将返回结果。")]),t._v(" "),_("li",[t._v("如果本地DNS服务器的缓存中没有目标域名的记录，它将继续向根域名服务器发出请求，以获取目标域名的IP地址。")])])]),t._v(" "),_("li",[t._v("根域名服务器查询：\n"),_("ul",[_("li",[t._v("本地DNS服务器会将查询请求发送给根域名服务器，根域名服务器负责管理全球DNS系统的最高级别域名（如.com、.org、.net等）。")]),t._v(" "),_("li",[t._v("根域名服务器会回复，告诉本地DNS服务器应该向哪个顶级域名服务器发送下一步的查询请求，例如.com域的顶级域名服务器。")])])]),t._v(" "),_("li",[t._v("顶级域名服务器查询：\n"),_("ul",[_("li",[t._v("本地DNS服务器将向负责目标域名的顶级域名服务器发出查询请求（例如，对于www.example.com，将向.com顶级域名服务器查询）。")]),t._v(" "),_("li",[t._v("顶级域名服务器会回复，告诉本地DNS服务器应该向哪个权威域名服务器发送下一步的查询请求。")])])]),t._v(" "),_("li",[t._v("权威域名服务器查询：\n"),_("ul",[_("li",[t._v("本地DNS服务器向权威域名服务器发送查询请求，权威域名服务器通常由目标域名的所有者（例如，example.com的所有者）管理。")]),t._v(" "),_("li",[t._v("权威域名服务器将返回目标域名的IP地址，以及其他相关的DNS记录，如MX记录（邮件交换记录）或CNAME记录（别名记录）等。")])])]),t._v(" "),_("li",[t._v("本地DNS服务器缓存结果：\n"),_("ul",[_("li",[t._v("一旦本地DNS服务器获得目标域名的IP地址，它会将结果存储在自己的缓存中，以便将来的查询可以更快速地获得解析结果。")])])]),t._v(" "),_("li",[t._v("结果返回给客户端：\n"),_("ul",[_("li",[t._v("最后，本地DNS服务器将解析结果返回给客户端的操作系统，使其能够建立TCP或UDP连接到目标服务器，以获取所需的内容。")])])])])])}),[],!1,null,null,null);_.default=a.exports}}]);