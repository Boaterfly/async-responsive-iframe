# Async-responsive-iframe

This script will load `your.iframe.url` provided a DOM node with the following attributes is present:

```html
<div data-ref="async-responsive-iframe" data-url="https://your.iframe.url"></div>
```

It will then:

- create an iframe in that node
- set the iframe url to the `data-url` attribute
- style the iframe with no border and a 100% width
- wait for a message from the iframe using the [postMessage](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage) API, sending the height of the document inside the iframe
- get that height and set the iframe's height to the received value.