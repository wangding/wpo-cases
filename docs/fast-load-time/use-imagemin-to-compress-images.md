# 使用 Imagemin 压缩图像

## 为什么要关注这一问题？

未压缩的图像会因不必要的字节使页面膨胀。右边的这张照片比左边的这张小 40%，但对于普通用户来说可能看起来一样。

![压缩图片前后对比](./img/use-imagemin-to-compress-images-1.png)

## 措施

运行 Lighthouse 以检查通过压缩图像来改善页面加载的机会。这些优化机会列在“有效编码图片”下：

![Lighthouse 有效编码图片](./img/use-imagemin-to-compress-images-2.png)

Lighthouse 目前仅报告压缩 JPEG 格式图像的机会。

## Imagemin

Imagemin 是图像压缩的绝佳选择，因为它支持多种图像格式，并且很容易与构建脚本和构建工具集成。Imagemin 可用作 CLI 和 npm 模块。一般来说，npm 模块是最好的选择，因为它提供了更多的配置选项，但如果您想在不接触任何代码的情况下尝试 Imagemin，CLI 是一个不错的选择。

## 插件

Imagemin 是围绕“插件”构建的。插件是压缩特定图像格式的 npm 包（例如“mozjpeg”压缩 JPEG）。流行的图像格式可能有多个插件可供选择。

选择插件时要考虑的最重要的事项是它是“有损”还是“无损”。在无损压缩中，不会丢失任何数据。有损压缩可减小文件大小，但可能会降低图像质量。如果插件没有提及“有损”还是“无损”，则可以通过其 API 来判断：如果可以指定输出图像的质量，说明它是“有损”的。

对于大多数人来说，有损插件是最好的选择。它们会显著降低文件大小，可以自定义压缩级别来满足需求。下表列出了流行的 Imagemin 插件。这些不是唯一可用的插件，但它们都是您项目的理想选择。

| 图像格式 | 有损插件 | 无损插件 |
| --- | --- | --- |
| JPEG | imagemin-mozjpeg | imagemin-jpegtran |
| PNG | imagemin-pngquant | imagemin-optipng |
| GIF | imagemin-giflossy | imagemin-gifsicle |
| SVG | Imagemin-svgo | - |
| WebP | imagemin-webp | -  |

## Imagemin CLI

Imagemin CLI 使用 5 种不同的插件：imagemin-gifsicle、imagemin-jpegtran、imagemin-optipng、imagemin-pngquant 和 imagemin-svgo。Imagemin 根据输入的图像格式使用适当的插件。

要压缩“images/”目录中的图像并将它们保存到同一目录，请运行以下命令（覆盖原始文件）：

```bash
$ imagemin images/* --out-dir=images
```

## Imagemin npm 模块

如果您使用其中一种构建工具，请使用 webpack、gulp 或 grunt 查看 Imaginemin 的代码实验室。

您还可以将 Imagemin 本身用作 Node 脚本。此代码使用“imagemin-mozjpeg”插件将 JPEG 文件压缩到值为 50 的质量（“0”表示最差质量；“100”表示最佳质量）：

```javascript
const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');

(async() => {
  const files = await imagemin(
      ['source_dir/*.jpg', 'another_dir/*.jpg'],
      {
        destination: 'destination_dir',
        plugins: [imageminMozjpeg({quality: 50})]
      }
  );
  console.log(files);
})();
```
