# 延迟加载视频

与图像元素一样，您也可以延迟加载视频。视频通常使用 `<video>` 元素加载（尽管已出现一种使用 `<img>` 的替代方法，但实施受限）。然而，如何延迟加载 `<video>` 取决于用例。让我们讨论几个场景，每个场景都需要不同的解决方案。

## 对于不自动播放的视频

对于由用户启动回放的视频（即不自动播放的视频），可能需要在 `<video>` 元素上指定 `preload` 属性：

```html
<video controls preload="none" poster="one-does-not-simply-placeholder.jpg">
  <source src="one-does-not-simply.webm" type="video/webm">
  <source src="one-does-not-simply.mp4" type="video/mp4">
</video>
```

上面的示例使用值为 `none` 的 `preload` 属性来防止浏览器预加载任何视频数据。`poster` 属性为 `<video>` 元素提供一个占位符，用于占用视频加载时的空间。这样做的原因是视频加载默认行为因浏览器而异：

- 在 Chrome 中，`preload` 的默认值过去是 `auto`，但从 Chrome 64 开始，它现在默认为 `metadata`。即便如此，在桌面版 Chrome 上，可能会使用 `Content-Range` 标头预加载视频的一部分。Firefox、Edge 和 Internet Explorer 11 的行为类似。
- 与桌面版 Chrome 一样，Safari 11.0 桌面版将预加载一系列视频。从版本 11.2 开始，则仅预加载视频元数据。在 iOS 上的 Safari 中，视频从不会预加载。
- 启用 Data Saver 模式后，`preload` 默认为 `none`。

因为关于 `preload` 的浏览器默认行为并非一成不变，所以直接操作可能是您最好的选择。在用户启动回放的情况下，在所有平台上延迟加载视频的最简单方法是使用 `preload="none"`。`preload` 属性并不是延迟加载视频内容的唯一方法。使用视频预加载进行快速回放可能会为您提供一些在 JavaScript 中使用视频回放的想法和见解。

遗憾的是，当您想用视频代替动画 GIF 时，它并没有什么用，这将在接下来的内容中介绍。

## 对于代替动画 GIF 的视频

虽然动画 GIF 使用广泛，但它们在许多方面都劣于等效的视频，尤其是文件大小。动画 GIF 可能需要几兆字节的数据。视觉质量相似的视频往往要小得多。

使用 `<video>` 元素替换动画 GIF 不像 `<img>` 元素那样简单明了。动画 GIF 具有三个特征：

1. 加载时自动播放。
2. 不断循环（尽管并非始终如此）。
3. 没有音轨。

使用 `<video>` 元素实现这一点应与下面内容类似：

```html
<video autoplay muted loop playsinline>
  <source src="one-does-not-simply.webm" type="video/webm">
  <source src="one-does-not-simply.mp4" type="video/mp4">
</video>
```

`autoplay`、`muted` 和 `loop` 属性一目了然。要在 iOS 中自动播放，playsinline 必不可少。现在，您拥有了可跨平台使用的准备就绪的视频即 GIF 替换项。但是如何延迟加载它呢？首先，相应地修改您的 `<video>` 标记：

```html
<video class="lazy" autoplay muted loop playsinline width="610" height="254" poster="one-does-not-simply.jpg">
  <source data-src="one-does-not-simply.webm" type="video/webm">
  <source data-src="one-does-not-simply.mp4" type="video/mp4">
</video>
```

您会注意到添加了 `poster` 属性，该属性允许您指定一个占位符来占用 `<video>` 元素的空间，直到视频延迟加载。与 `<img>` 延迟加载示例一样，将视频 URL 存放在每个 `<source>` 元素上的 `data-src` 属性中。从那里，使用类似于基于 Intersection Observer 的图像延迟加载示例的 JavaScript 代码：

```javascript
document.addEventListener("DOMContentLoaded", function() {
  var lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));

  if ("IntersectionObserver" in window) {
    var lazyVideoObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(video) {
        if (video.isIntersecting) {
          for (var source in video.target.children) {
            var videoSource = video.target.children[source];
            if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
              videoSource.src = videoSource.dataset.src;
            }
          }

          video.target.load();
          video.target.classList.remove("lazy");
          lazyVideoObserver.unobserve(video.target);
        }
      });
    });

    lazyVideos.forEach(function(lazyVideo) {
      lazyVideoObserver.observe(lazyVideo);
    });
  }
});
```

延迟加载 `<video>` 元素时，需要迭代所有子 `<source>` 元素，并将其 `data-src` 属性改为 `src` 属性。完成后，需要通过调用元素的 `load` 方法来触发视频的加载，此后，媒体将根据 `autoplay` 属性开始自动播放。

使用此方法，您将拥有一个模拟动画 GIF 行为的视频解决方案，但不会出现像动画 GIF 那样使用大量数据的情况，而且可以延迟加载此内容。

## 延迟加载库

以下库可以帮助您延迟加载视频：

- vanilla-lazyload 和 lozad.js 是仅使用 Intersection Observer 的超轻量级选项。因此它们的性能很好，但需要先进行 polyfill 然后才能在较旧的浏览器上使用。
- yall.js 是一个使用 Intersection Observer 并回退到事件处理程序的库。它与 IE11 和主要浏览器都兼容。
- 如果您需要 React 特定的延迟加载库，或许应该考虑 react-lazyload 。虽然它不使用 Intersection Observer，但确实为那些习惯于使用 React 开发应用程序的人们提供了一种熟悉的延迟加载图像方法。

这些延迟加载库中的每一个都有详细介绍，而且有许多标记模式可以用于各种延迟加载工作。
