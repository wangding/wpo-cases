# 缩小和压缩网络有效负载

有两种实用技术可用于提高网页的性能：

- 缩小
- 数据压缩

结合使用这两种技术，可以减少有效负载大小，进而缩短页面加载时间。

## 测量

如果 Lighthouse 在您的页面上检测到任何可以缩小的 CSS 或 JS 资源，则会显示审计失败。

![Lighthouse 缩小 CSS 审计Lighthouse 缩小 JS 审计](./img/reduce-network-payloads-using-text-compression-1.png)

它还会审计任何未压缩的资产。

![Lighthouse: 启用文本压缩](./img/reduce-network-payloads-using-text-compression-2.png)

## 缩小

**缩小**是删除空格和不需要的代码，从而创建较小但完全有效的代码文件的过程。Terser 是一种流行的 JavaScript 压缩工具，webpack v4 默认为这个库提供一个插件，用于创建缩小的构建文件。

- 如果您使用的是 webpack v4 或更高版本，那么无需任何额外工作就可以直接使用。
- 如果您使用的是旧版 webpack，请安装 `TerserWebpackPlugin`，并将其包含到您的 webpack 配置设置中。请按照文档中的介绍操作。
- 如果您不使用模块捆绑程序，那么请将Terser用作 CLI 工具或将其直接包含为您的应用程序的依赖项。项目文档提供了相关说明。

## 数据压缩

**压缩**是使用压缩算法修改数据的过程。Gzip 是用于服务器和客户端交互的最广泛使用的压缩格式。Brotli 是一种较新的压缩算法，可以提供比 Gzip 更好的压缩结果。

压缩文件可以显著提高网页的性能，但很少需要您亲自执行此操作。许多托管平台、CDN 和反向代理服务器默认情况下都会对资产进行压缩编码，或允许您轻松配置它们。在尝试推出您自己的解决方案之前，请阅读您正在使用工具的文档以查看是否已经支持压缩。

有两种不同的方法可以压缩发送到浏览器的文件：

- 动态压缩
- 静态压缩

这两种方法各有优缺点，下一节将介绍这些方法。请使用最适合您的应用的方法。

## 动态压缩

此过程涉及在浏览器请求时即时压缩资产。这可能比手动或使用构建过程压缩文件更简单，但如果使用高压缩级别会导致延迟。

Express 是一个流行的 Node web 框架，它提供了一个压缩中间件库。使用它来在请求时压缩任何资产。下面列出了正确使用它压缩整个服务器文件的示例：

```javascript
const express = require('express');
const compression = require('compression');

const app = express();

app.use(compression());

app.use(express.static('public'));

const listener = app.listen(process.env.PORT, function() {
	console.log('Your app is listening on port ' + listener.address().port);
});
```

上述代码会使用 gzip 压缩您的资产。如果您的 web 服务器支持它，请考虑使用一个单独的模块（如shrink-ray）通过 Brotli 进行压缩，以实现更好的压缩率。

## 静态压缩

静态压缩涉及提前压缩和保存资产。这会使构建过程花费更长的时间，尤其是在使用高压缩级别的情况下，但可确保浏览器获取压缩资源时不会出现延迟。

如果您的 web 服务器支持 Brotli，那么请使用 BrotliWebpackPlugin 等插件通过 webpack 压缩您的资产，将其纳入构建步骤。否则，请使用 CompressionPlugin 通过 gzip 压缩您的资产。它可以像 webpack 配置文件中的任何其他插件一样包含在内：

```javascript
module.exports = {
  //...
  plugins: [
    //...
    new CompressionPlugin()
  ]
}
```
当压缩文件成为构建文件夹的一部分后，去在服务器中创建一个路由来处理所有 JS 端点以提供压缩文件。下面的示例说明了如何使用 Node 和 Express 为使用 gzip 压缩的资产完成此操作。

```javascript
const express = require('express');
const app = express();

<strong>app.get('*.js', (req, res, next) => {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});</strong>

app.use(express.static('public'));
```
