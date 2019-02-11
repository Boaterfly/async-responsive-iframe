document.addEventListener("DOMContentLoaded", function() {
  const container = document.getElementById("calypso");
  const url = container.dataset.url;

  const iframe = document.createElement("iframe");
  iframe.setAttribute("src", url);
  iframe.setAttribute("id", "myIframe");
  iframe.style.width = "100%";
  iframe.style.border = "none";

  container.innerHTML = iframe.outerHTML;

  // Add event listener for messages being passed from the iframe
  const setHeight = e => {
    // Check that message being passed is the documentHeight
    if (typeof e.data === "string" && e.data.indexOf("documentHeight") > -1) {
      const height = e.data.split("documentHeight:")[1];
      const heightWithPadding = parseInt(height, 10) + 50; // add a bit of extra space

      // Change height of iframe
      document.getElementById("myIframe").height = `${heightWithPadding}px`;
    }
  };

  window.addEventListener("message", setHeight);
});