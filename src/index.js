import { iframeResizer } from 'iframe-resizer';

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelectorAll(
    '[data-ref="async-responsive-iframe"]',
  )[0];

  const {
    mail, countries, theme, url,
  } = container.dataset;

  const iframe = document.createElement('iframe');
  iframe.setAttribute('src', url);
  iframe.setAttribute('id', 'async-responsive-iframe');
  iframe.style.width = '100%';
  iframe.style.border = 'none';

  container.innerHTML = iframe.outerHTML;

  const data = { mail, countries, theme };

  iframeResizer({
    log: false,
    checkOrigin: false,
    onInit(node) {
      node.iFrameResizer.sendMessage(data);
    },
  }, '#async-responsive-iframe');
});
