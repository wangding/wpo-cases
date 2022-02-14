# 避免多个页面重定向

重定向会减慢页面加载速度。当浏览器请求已重定向的资源时，服务器通常会返回如下 HTTP 响应：


HTTP/1.1 301 Moved Permanently
Location: /path/to/new/location
然后，浏览器必须向新位置发出另一个 HTTP 请求才能检索资源。这种额外的跨网络行程可能使资源的加载延迟数百毫秒。

## Lighthouse 多个重定向审计如何失败

Lighthouse 会标记具有多个重定向的页面：
![img1](./img/redirects-1.png)

当页面有两个或更多重定向时，该页面无法通过此审计。

## 如何消除重定向

将指向标记的资源的链接指向资源的当前位置。在关键渲染路径所需的资源中避免重定向尤为重要。

如果您使用重定向将移动用户转移到页面的移动版本，请考虑重新设计网站以使用响应式设计。

## 程序栈特定的指南

### React

如果使用 React Router，请尽量减少使用 <Redirect> 组件进行路由导航。

## 资源
- [避免多个页面重定向审计的源代码](https://github.com/GoogleChrome/lighthouse/blob/master/lighthouse-core/audits/redirects.js)
- [HTTP 中的重定向](https://developer.mozilla.org/docs/Web/HTTP/Redirections)
- [避免登陆页面重定向](https://developers.google.com/speed/docs/insights/AvoidRedirects)
