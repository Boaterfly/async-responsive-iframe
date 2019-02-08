```        _                             _  __                          
  ___ __ _| |_   _ _ __  ___  ___       (_)/ _|_ __ __ _ _ __ ___   ___ 
 / __/ _` | | | | | '_ \/ __|/ _ \ _____| | |_| '__/ _` | '_ ` _ \ / _ \
| (_| (_| | | |_| | |_) \__ \ (_) |_____| |  _| | | (_| | | | | | |  __/
 \___\__,_|_|\__, | .__/|___/\___/      |_|_| |_|  \__,_|_| |_| |_|\___|
             |___/|_|                                                   
```

This script will load `your.iframe.url` provided a DOM node with the following attributes is present:

```
<div id="calypso" data-url="https://your.iframe.url"></div>
```

It will then:

- create an iframe in that node
- set the iframe url to the data-url attribute
- style the iframe with no border and a 100% width
- wait for a message from the iframe using the postMessage API, sending the height of the document inside the iframe
- get that height and set the iframe's height to the sent value.
