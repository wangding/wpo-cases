# Properly size images

The Opportunities section of your Lighthouse report lists all images in your page that aren't appropriately sized, along with the potential savings in kibibytes (KiB). Resize these images to save data and improve page load time:

A screenshot of the Lighthouse Properly size images audit

![img1](./img/uses-responsive-images-1.png)

## How Lighthouse calculates oversized images

For each image on the page, Lighthouse compares the size of the rendered image against the size of the actual image. The rendered size also accounts for device pixel ratio. If the rendered size is at least 4KiB smaller than the actual size, then the image fails the audit.

## Strategies for properly sizing images

Ideally, your page should never serve images that are larger than the version that's rendered on the user's screen. Anything larger than that just results in wasted bytes and slows down page load time.

The main strategy for serving appropriately sized images is called "responsive images". With responsive images, you generate multiple versions of each image, and then specify which version to use in your HTML or CSS using media queries, viewport dimensions, and so on. See Serve responsive images to learn more.

Image CDNs are another main strategy for serving appropriately sized images. You can think of image CDNs like web service APIs for transforming images.

Another strategy is to use vector-based image formats, like SVG. With a finite amount of code, an SVG image can scale to any size. See Replace complex icons with SVG to learn more.

Tools like gulp-responsive or responsive-images-generator can help automate the process of converting an image into multiple formats. There are also image CDNs which let you generate multiple versions, either when you upload an image, or request it from your page.

## Stack-specific guidance

### AMP

Use the amp-img component's support for srcset to specify which image assets to use based on the screen size. See also Responsive images with srcset, sizes & heights.

### Angular

Consider using the BreakpointObserver utility in the Component Dev Kit (CDK) to manage image breakpoints.

### Drupal

Use the built-in Responsive Image Styles feature (available in Drupal 8 and above) when rendering image fields through view modes, views, or images uploaded through the WYSIWYG editor.

### Gatsby

Use the gatsby-image plugin to generate multiple smaller images for smartphones and tablets. It can also create SVG image placeholders for efficient lazy loading.

### Joomla

Consider using a responsive images plugin.

### WordPress

Upload images directly through the media library to ensure that the required image sizes are available, and then insert them from the media library or use the image widget to ensure the optimal image sizes are used (including those for the responsive breakpoints). Avoid using Full Size images unless the dimensions are adequate for their usage. See Inserting images into posts and pages.

## Resources

- [Source code for Properly size images audit](https://github.com/GoogleChrome/lighthouse/blob/master/lighthouse-core/audits/byte-efficiency/uses-responsive-images.js)
- [Serve images with correct dimensions](https://web.dev/serve-images-with-correct-dimensions)
