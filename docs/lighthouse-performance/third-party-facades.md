# 使用 Facade （外观）延迟加载第三方资源

第三方资源通常用于展示广告或视频以及集成社交媒体。默认方法是在页面加载后立即加载第三方资源，但这可能会不必要地减慢页面的加载速度。如果第三方内容不是那么重要，则可以通过延迟加载来降低这种性能消耗。

此审计重点介绍了可以在交互时延迟加载的第三方嵌入内容。在这种情况下，在用户与其交互之前，将使用*{nbsp}facade*替换掉第三方内容。

重要词汇

Facade 是一个静态元素，它外表与实际嵌入的第三方内容相似，但没有功能性，因此对页面加载的消耗要小得多。

一个加载 YouTube 嵌入式播放器的示例，facade 的大小是 3 KB，交互时会加载大小为 540 KB 的播放器。
使用 facade 加载 YouTube 嵌入式播放器。

## Lighthouse 检测可延迟加载的第三方嵌入内容的方法

Lighthouse 会寻找可延迟加载的第三方产品，例如社交按钮小部件或视频嵌入内容（例如 YouTube 嵌入式播放器）。

有关可延迟加载的产品和可用 facade 的数据在第三方网络中维护。

如果网页加载隶属这些第三方嵌入之一的资源，则本次审计将失败。

Lighthouse 第三方 facade 审计突出显示 Vimeo 嵌入式播放器和 Drift 实时聊天。
![img1](./img/third-party-facades-1.png)
Lighthouse 第三方 facade 审计。

## 如何使用 Facade 延迟加载第三方资源

不要将第三方嵌入直接添加到 HTML 中，而是在加载网页时使用外观类似于实际嵌入的第三方的静态元素。交互模式应该如下所示：

加载时：向页面添加 facade。

鼠标悬停时：facade 预连接到第三方资源。

单击时：facade 会将自己替换为第三方产品。

## 推荐的 Facade

一般来说，视频嵌入、社交按钮小部件和聊天小部件都可以采用 facade 模式。我们在下面列出了推荐的开源 facade。在选择 facade 时，请考虑大小和功能集之间的平衡。您还可以使用延迟 iframe 加载器，例如 vb/lazyframe。

## YouTube 嵌入式播放器

![paulirish/lite-youtube-embed](https://github.com/paulirish/lite-youtube-embed)

![justinribeiro/lite-youtube](https://github.com/justinribeiro/lite-youtube)

![Daugilas/lazyYT](https://github.com/Daugilas/lazyYT)

## Vimeo 嵌入式播放器

- [luwes/lite-vimeo-embed](https://github.com/luwes/lite-vimeo-embed)
- [slightlyoff/lite-vimeo](https://github.com/slightlyoff/lite-vimeo)

### 实时聊天（Intercom, Drift, Help Scout, Facebook Messenger）

calibreapp/react-live-chat-loader （博客文章）

## 编写自己的 facade

您可以选择构建使用上述交互模式的自定义 facade 解决方案。与延迟加载的第三方产品相比，facade 应该小得多，并且只会包含用来模仿产品外观的代码。

如果您希望将自己的解决方案加入上面的列表中，请查看提交流程。

## 资源

- [使用 Facade 延迟加载第三方资源审计](https://github.com/GoogleChrome/lighthouse/blob/master/lighthouse-core/audits/third-party-facades.js)的源代码。
