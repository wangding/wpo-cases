#Ensure text remains visible during webfont load
May 2, 2019 — Updated Apr 29, 2020
Available in: Español, 한국어, Português, Русский, English
Appears in: Performance audits
On this page
Fonts are often large files that take awhile to load. Some browsers hide text until the font loads, causing a flash of invisible text (FOIT).

##How the Lighthouse font-display audit fails
Lighthouse flags any font URLs that may flash invisible text:

A screenshot of the Lighthouse Ensure text remains visible during webfont loads audit
See the Lighthouse performance scoring post to learn how your page's overall performance score is calculated.

##How to avoid showing invisible text
The easiest way to avoid showing invisible text while custom fonts load is to temporarily show a system font. By including font-display: swap in your @font-face style, you can avoid FOIT in most modern browsers:

```css
@font-face {
  font-family: 'Pacifico';
  font-style: normal;
  font-weight: 400;
  src: local('Pacifico Regular'), local('Pacifico-Regular'), url(https://fonts.gstatic.com/s/pacifico/v12/FwZY7-Qmy14u9lezJ-6H6MmBp0u-.woff2) format('woff2');
  font-display: swap;
}
```
The font-display API specifies how a font is displayed. swap tells the browser that text using the font should be displayed immediately using a system font. Once the custom font is ready, it replaces the system font. (See the Avoid invisible text during loading post for more information.)

###Preload web fonts
Use <link rel="preload" as="font"> to fetch your font files earlier. Learn more:

Preload web fonts to improve loading speed (codelab)
Prevent layout shifting and flashes of invisibile text (FOIT) by preloading optional fonts

## Google Fonts

Add the &display=swap parameter to the end of your Google Fonts URL:

```html
<link href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap" rel="stylesheet">
```
##Browser support

It's worth mentioning that not all major browsers support font-display: swap, so you may need to do a bit more work to fix the invisible text problem.

Try it

Check out the Avoid flash of invisible text codelab to learn how to avoid FOIT across all browsers.

## Stack-specific guidance
### Drupal

Specify @font-display when defining custom fonts in your theme.

### Magento

Specify @font-display when defining custom fonts.

###Resources

- [Source code for Ensure text remains visible during webfont load audit](https://github.com/GoogleChrome/lighthouse/blob/master/lighthouse-core/audits/font-display.js)
- [Avoid](https://web.dev/avoid-invisible-text)
- [Preload web fonts to improve loading speed (codelab)](https://developers.google.com/web/updates/2016/02/font-display)
- [Prevent layout shifting and flashes of invisibile text (FOIT) by preloading optional fonts](https://web.dev/preload-optional-fonts/)
