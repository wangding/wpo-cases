# 快速加载

## 概述

在构建现代网络体验时，如果您希望持续获得快速的体验，那么对网站性能进行测量、优化和监控就显得至关重要。性能对于任何线上项目的成功都起着重要作用，因为高性能网站比性能欠佳的网站更能吸引和留住用户。网站应该专注于优化以用户为中心的性能指标。Lighthouse 等工具可以突显这些指标，并帮助您采取正确的步骤来提高性能。若想“维持快速的体验”，请制定并执行性能预算来帮助您的团队在特定的需求下工作，从而在您的网站上线后继续提供快速的加载体验并让用户满意。

## 介绍

- [为什么速度很重要？](./fast-load-time/why-speed-matters.md)
- [速度是什么？](./fast-load-time/what-is-speed.md)
- [如何测量速度？](./fast-load-time/how-to-measure-speed.md)
- [如何保持快速？](./fast-load-time/how-to-stay-fast.md)
- [使用 RAIL 模型衡量性能](./fast-load-time/rail.md)

## 制定性能预算

- [性能预算基础](./fast-load-time/performance-budgets-101.md)
- [Your first performance budget](./fast-load-time/your-first-performance-budget.md)
- [Incorporate performance budgets into your build process](./fast-load-time/incorporate-performance-budgets-into-your-build-tools.md)
- [使用 Lighthouse 进行性能预算](./fast-load-time/use-lighthouse-for-performance-budgets.md)
- [Using bundlesize with Travis CI](./fast-load-time/using-bundlesize-with-travis-ci.md)
- [Using Lighthouse Bot to set a performance budget](./fast-load-time/using-lighthouse-bot-to-set-a-performance-budget.md)
- [Performance monitoring with Lighthouse CI](./fast-load-time/lighthouse-ci.md)

## 优化图片

- [选择正确的图片格式](./fast-load-time/choose-the-right-image-format.md)
- [选择正确的压缩级别](./fast-load-time/compress-images.md)
- [使用 Imagemin 压缩图像](./fast-load-time/use-imagemin-to-compress-images.md)
- [用视频替换 GIF 动画以加快页面加载](./fast-load-time/replace-gifs-with-videos.md)
- [提供响应式图像](./fast-load-time/serve-responsive-images.md)
- [提供尺寸正确的图像](./fast-load-time/serve-images-with-correct-dimensions.md)
- [使用 WebP 图像](./fast-load-time/serve-images-webp.md)
- [使用图像 CDN 优化图像](./fast-load-time/image-cdns.md)

## 延迟加载图片和视频

- [使用延迟加载提高加载速度](./fast-load-time/lazy-loading.md)
- [延迟加载图像](./fast-load-time/lazy-loading-images.md)
- [延迟加载视频](./fast-load-time/lazy-loading-video.md)
- [浏览器内置图像延迟加载](./fast-load-time/browser-level-image-lazy-loading.md)
- [使用 lazysizes 延迟加载图像](./fast-load-time/use-lazysizes-to-lazyload-images.md)

## 优化 JavaScript

- [使用 PRPL 模式实现即时加载](./fast-load-time/apply-instant-loadi
ng-with-prpl.md)
- [通过代码拆分减少 JavaScript 负载](./fast-load-time/reduce-javasc
ript-payloads-with-code-splitting.md)
- [删除未使用的代码](./fast-load-time/remove-unused-code.md)
- [缩小和压缩网络有效负载](./fast-load-time/reduce-network-payloads
-using-text-compression.md)
- [为现代浏览器提供现代代码以加快页面加载速度](./fast-load-time/serve-modern-code-to-modern-browsers.md)
- [发布、传输和安装现代 JavaScript 以实现更快的应用程序](./fast-load-time/publish-modern-javascript.md)
- [CommonJS 如何让您的捆绑包变得更大](./fast-load-time/commonjs-larger-bundles.md)

## 优化资源交付

- [Content delivery networks (CDNs)]()
- [Prioritize resources]()
- [预加载关键资产以提高加载速度]()
- [Establish network connections early to improve perceived page speed]()
- [Prefetch resources to speed up future navigations]()
- [快速播放音频和视频预加载]()

## 优化 CSS

- [延迟加载非关键 CSS](./fast-load-time/defer-non-critical-css.md)
- [压缩 CSS](./fast-load-time/minify-css.md)
- [提取关键 CSS (Critical CSS)](./fast-load-time/extract-critical-css.md)
- [使用媒体查询优化 CSS 背景图像](./fast-load-time/optimize-css-background-images-with-media-queries.md)

## 优化第三方资源

- [第三方 JavaScript 性能](./fast-load-time/third-party-javascript.md)
- [识别慢速第三方 JavaScript](./fast-load-time/identify-slow-third-party-javascript.md)
- [高效加载第三方 JavaScript](./fast-load-time/efficiently-load-third-party-javascript.md)

## 优化网络字体

- [在字体加载期间避免不可见的文本](fast-load-time/avoid-invisible-text.md)
- [优化 WebFont 加载和呈现](fast-load-time/optimize-webfont-loading.md)
- [减小 WebFont 大小](fast-load-time/reduce-webfont-size.md)

## 针对网络质量优化

- [Adaptive serving based on network quality]()

## 对性能进行实测

- [Using the Chrome UX Report to look at performance in the field]()
- [在 Data Studio 上使用 CrUX Dashboard]()
- [Using the Chrome UX Report on PageSpeed Insights]()
- [Using the Chrome UX Report on BigQuery]()
- [Using the Chrome UX Report API]()

## 建立性能文化

- [速度的价值](fast-load-time/value-of-speed.md)
- [性能如何提高转化率？](fast-load-time/how-can-performance-improve-conversion.md)
- [你应该测量什么来提高性能？](fast-load-time/what-should-you-measure-to-improve-performance.md)
- [如何报告指标和建立绩效文化](fast-load-time/how-to-report-metrics.md)
- [跨功能修复网站速度](fast-load-time/fixing-website-speed-cross-functionally.md)
- [关联网站速度和业务指标](fast-load-time/site-speed-and-business-metrics.md)
