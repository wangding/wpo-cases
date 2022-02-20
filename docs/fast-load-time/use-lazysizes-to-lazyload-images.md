# 使用 lazysizes 延迟加载图像

**延迟加载**是根据需要而不是提前加载资源的策略。这种方法在初始页面加载期间释放资源并避免加载从未使用过的资源。

在初始页面加载期间屏幕外的图像是此技术的理想候选者。最重要的是，lazysizes 使这个策略实现起来非常简单。

## lazysizes 是什么？

lazysizes 是最流行的延迟加载图像库。它是一个脚本，可以在用户浏览页面时智能地加载图像，并优先考虑用户很快会遇到的图像。

## 添加 lazysizes

添加 lazysizes 很简单：

- 将 lazysizes 脚本添加到您的页面。
- 选择要延迟加载的图像。
- 更新这些图像的 `<img>` 和 `<picture>` 标签。

### 添加 lazysizes 脚本

将 lazysizes 脚本添加到您的页面：

```html
<script src="lazysizes.min.js" async></script>
```

### 更新 img 和 picture 标签

**img 标签的说明**

**修改前：**

```html
<img src="flower.jpg" alt="">
```

**修改后：**

```html
<img data-src="flower.jpg" class="lazyload" alt="">
```

当您更新 `<img>` 标签时，您会进行两项更改：

- **添加 `lazyload` 类**：这向 lazysizes 表明应该延迟加载图像。
- **将 `src` 属性更改为 `data-src`**：当加载图像时，lazysizes 代码 `src` 使用属性中的值设置图像 `data-src` 属性。

**picture 标签说明**

**修改前：**

```html
<picture>
  <source type="image/webp" srcset="flower.webp">
  <source type="image/jpeg" srcset="flower.jpg">
  <img src="flower.jpg" alt="">
</picture>
```

**修改后：**

```html
<picture>
  <source type="image/webp" data-srcset="flower.webp">
  <source type="image/jpeg" data-srcset="flower.jpg">
  <img data-src="flower.jpg" class="lazyload" alt="">
</picture>
```

当您更新 `<picture>` 标签时，您会进行两项更改：

- 将 `lazyload` 类添加到 `<img>` 标签中。
- `<source>` 将标签 `srcset` 属性更改为 `data-srcset`

## 验证

打开 DevTools 并向下滚动页面以查看这些更改的实际效果。当您滚动时，您应该会看到出现了新的网络请求并且 `<img>` 标记类从 `lazyload` 变为 `lazyloaded`。

此外，您可以使用 Lighthouse 来验证您没有忘记延迟加载任何屏幕外图像。运行 Lighthouse 性能审核（Lighthouse > Options > Performance）并查看延迟离屏图像审核的结果。
