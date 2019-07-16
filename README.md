# Async-responsive-iframe

This script will attach to a DOM node with a data-ref attribute of "async-responsive-iframe" value an iframe pointing to the provided data-url value.

```html
<div data-ref="async-responsive-iframe" data-url="https://your.iframe.url"></div>
```

It will also:

- style the iframe with no border and a 100% width
- use [iframeResizer](https://github.com/davidjbradshaw/iframe-resizer) to style the height of the iframe to match the children document.
- communicate to the iframe using the postMessage API to send over the following data attributes [mail, countries, theme, site, group] as a `data` object.

## Usage

```html
<div data-ref="async-responsive-iframe" data-url="https://your.iframe.url"></div>
<script src="https://cdn.jsdelivr.net/npm/async-responsive-iframe@0.2.5"></script>
```
