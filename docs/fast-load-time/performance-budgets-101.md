# 性能预算基础

性能是用户体验的重要组成部分，它会影响业务绩效。人们很容易认为，如果你是一个优秀的开发人员，你最终会得到一个高性能的网站，但事实是，良好的性能很少是开发的副产品。与大多数其他事情一样，要达到目标，你必须清楚地定义它，并且从通过制定预算开始着手。

## 定义

性能预算是对网站性能指标产生影响的一组限制条件。这可能是页面的总大小、在移动网络上加载所需的时间，甚至是发送的 HTTP 请求数。定义预算有助于启动 Web 性能测试和调优。它可以为网站设计、技术选型以及功能特性的添加，等提供决策参考。

有了预算，设计师就可以考虑高分辨率图像以及他们选择的网页字体数量对性能的影响。它还可以帮助开发人员比较解决问题的不同方法，并且根据框架和库的大小以及解析成本对其进行评估。

## 选择指标

### 基于数量的指标

这些指标在开发的早期非常有用，因为它们突显了包含庞大图片和脚本对性能的影响。它们也很容易与设计人员和开发人员进行沟通。

我们已经提到了一些可以在性能预算中包含的内容，例如：页面体积以及 HTTP 请求数，但您可以将这些拆分为更精细的限制，例如：

- 图片的最大尺寸
- 网页字体数的最大数量
- 脚本（包括框架）的最大体积
- 外部资源（如第三方脚本）的总数

但是，这些数字并不能告诉您有关用户体验的更多信息。具有相同请求数或相同大小的两个页面，可以根据请求资源的顺序，以不同的方式呈现。如果某个页面上的关键资源（如主图片或样式表）在流程的后期加载，则用户将等待更长的时间才能看到有用的东西，并认为页面速度较慢。而在另一个页面上，最重要的部分加载得很快，他们甚至可能不会注意到页面的其余部分没有加载。

![performance-budgets-101-1](./img/performance-budgets-101-1.png)

上图显示网页基于关键路径的渐进渲染

这就是为什么要跟踪另一种类型的指标的重要原因。

### 里程碑时间

里程碑时间标记在页面加载期间发生的事件，如 DOMContentLoaded 或 load 事件。最有用的计时是以用户为中心的性能指标，这些指标可以告诉您有关加载页面的体验。这些指标可通过浏览器 API 获得，并作为 Lighthouse 报告的一部分提供。

FCP 测量浏览器何时显示 DOM 中的第一块内容，如文本或图像。

Time to Interactive (TTI) measures how long it takes for a page to become fully interactive and reliably respond to user input. It's a very important metric to track if you expect any kind of user interaction on the page like clicking links, buttons, typing or using form elements.
TTI 测量页面完全交互并可靠地响应用户输入所需的时间。这是一个非常重要的指标，可以跟踪您是否期望在页面上进行任何类型的用户交互，例如单击链接，按钮，键入或使用表单元素。

### 基于规则的指标

Lighthouse and WebPageTest calculate performance scores based on general best practice rules, that you can use as guidelines. As a bonus, Lighthouse also offers you hints for simple optimizations.

You'll get the best results if you keep track of a combination of quantity-based and user-centric performance metrics. Focus on asset sizes in the early phases of a project and start tracking FCP and TTI as soon as possible.

Lighthouse 和 WebPageTest 根据一般最佳实践规则计算性能分数，您可以将其用作指南。作为奖励，灯塔还为您提供了简单优化的提示。

如果您跟踪基于数量和以用户为中心的绩效指标的组合，您将获得最佳结果。在项目的早期阶段关注资产规模，并尽快开始跟踪FCP和TTI。

## 建立基线

The only way to really know what works best for your site is to try it—research and then test your findings. Analyze the competition to see how you stack up. ������️

If you don't have time for that, here are good default numbers to get you started:
真正知道什么最适合您的网站的唯一方法是尝试它 - 研究然后测试您的发现。分析竞争对手，看看你的实力如何。������️

如果您没有时间，这里有一些很好的默认数字可以帮助您入门：

Under 5 s Time to Interactive
Under 170 KB of critical-path resources (compressed/minified)
- 5 秒以下的互动时间
- 关键路径资源小于 170 KB（压缩/缩小）

These numbers are calculated based on real-world baseline devices and 3G network speed. Over half of the internet traffic today happens on mobile networks, so you should use 3G network speed as a starting point.
这些数字是根据实际基准设备和3G网络速度计算得出的。如今，超过一半的互联网流量发生在移动网络上，因此您应该使用3G网络速度作为起点。

## Examples of budgets预算示例

You should have a budget in place for different types of pages on your site since the content will vary. For example:
您应该为网站上不同类型的网页制定预算，因为内容会有所不同。例如：

Our product page must ship less than 170 KB of JavaScript on mobile
Our search page must include less than 2 MB of images on desktop
Our home page must load and get interactive in < 5 s on slow 3G on a Moto G4 phone
Our blog must score > 80 on Lighthouse performance audits
我们的产品页面必须在移动设备上发布少于 170 KB 的 JavaScript
我们的搜索页面在桌面设备上包含的图片必须少于 2 MB
我们的主页必须在Moto G4手机上的慢速3G上加载并在5秒内<进行交互
我们的博客必须在灯塔性能审计方面获得>80分

## Add performance budgets to your build process
向生成过程添加性能预算

![performance-budgets-101-2](./img/performance-budgets-101-2.png)

Webpack, bundlesize and Lighthouse logos
Choosing a tool for this will depend a lot on the scale of your project and resources that you can dedicate to the task. There are a few open-source tools that can help you add budgeting to your build process:
为此选择一个工具将在很大程度上取决于项目的规模和您可以用于任务的资源。有一些开源工具可以帮助您将预算添加到构建过程中：

- Webpack 性能特性
- bundle 大小
- Lighthouse CI

If something goes over a defined threshold, you can either:
如果某些内容超过定义的阈值，您可以：

Optimize an existing feature or asset ������️
Remove an existing feature or asset ������️
Not add the new feature or asset ✋⛔
- 优化现有要素或资产
- 移除现有要素或资产
- 不添加新功能或资产 ✋⛔

## 跟踪性能

Making sure your site is fast enough means you have to keep measuring after the initial launch. Monitoring these metrics over time and getting data from real users will show you how changes in performance impact key business metrics.
确保您的网站足够快意味着您必须在首次发布后继续进行测量。随着时间的推移监控这些指标并从真实用户那里获取数据，将向您展示性能的变化如何影响关键业务指标。

## 总结

The purpose of a performance budget is to make sure you focus on performance throughout a project and setting it early will help prevent backtracking later. It should be the point of reference for helping you figure out what to include on your website. The main idea is to set goals so that you can better balance performance without harming functionality or user experience.

The next guide will walk you through defining your first performance budget in a few simple steps.
性能预算的目的是确保您专注于整个项目的性能，尽早设置它将有助于防止以后回溯。它应该是帮助您弄清楚要在网站上包含的内容的参考点。主要思想是设定目标，以便您可以更好地平衡性能，而不会损害功能或用户体验。

下一个指南将通过几个简单的步骤引导您定义第一个效果预算。
