# Defer offscreen images

The Opportunities section of your Lighthouse report lists all offscreen or hidden images in your page along with the potential savings in kibibytes (KiB). Consider lazy-loading these images after all critical resources have finished loading to lower Time to Interactive:

A screenshot of the Lighthouse Defer offscreen images audit
See also Lazy load offscreen images with lazysizes codelab.

## Stack-specific guidance

### AMP

Automatically lazy-load images with amp-img. See the Images guide.

### Drupal

Install a Drupal module that can lazy load images. Such modules provide the ability to defer any offscreen images to improve performance.

### Joomla

Install a lazy-load Joomla plugin that provides the ability to defer any offscreen images, or switch to a template that provides that functionality. Starting with Joomla 4.0, a dedicated lazy-loading plugin can be enabled by using the "Content - Lazy Loading Images" plugin. Also consider using an AMP plugin.

### Magento

Consider modifying your product and catalog templates to make use of the web platform's lazy loading feature.

### WordPress

Install a lazy-load WordPress plugin that provides the ability to defer any offscreen images, or switch to a theme that provides that functionality. Also consider using the AMP plugin.

## Resources
- [Source code for Defer offscreen images audit](https://github.com/GoogleChrome/lighthouse/blob/master/lighthouse-core/audits/byte-efficiency/offscreen-images.js)
