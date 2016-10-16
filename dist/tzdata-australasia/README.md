
## Synopsis

This is (a portion of) the [IANA TZ database](https://www.iana.org/time-zones), represented as JSON. Use this module in combination with [timezonecomplete](https://www.npmjs.com/package/timezonecomplete).

This module contains all zones of IANA TZ database file 'australasia'.



## TZ Database Version

2016g

## Use

In Node.JS, to get at the JSON data, simply do:

```javascript
var jsonData = require('tzdata-australasia');
```

In a browser, use the [bundled UMD module](./tzdata-australasia.js):

```
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>tzdata-australasia example</title>
    <script src="./tzdata-australasia.js"></script>
    <script>
        function onLoad() {
            var data = tzdataAustralasia;
        }
    </script>
</head>
<body onLoad="onLoad()">
</body>
</html>
```

## License

MIT

## Zones in This Module

Antarctica/Macquarie, Antarctica/McMurdo, Australia/Adelaide, Australia/Brisbane, Australia/Broken_Hill, Australia/Currie, Australia/Darwin, Australia/Eucla, Australia/Hobart, Australia/Lindeman, Australia/Lord_Howe, Australia/Melbourne, Australia/Perth, Australia/Sydney, Indian/Christmas, Indian/Cocos, Pacific/Apia, Pacific/Auckland, Pacific/Bougainville, Pacific/Chatham, Pacific/Chuuk, Pacific/Efate, Pacific/Enderbury, Pacific/Fakaofo, Pacific/Fiji, Pacific/Funafuti, Pacific/Gambier, Pacific/Guadalcanal, Pacific/Guam, Pacific/Kiritimati, Pacific/Kosrae, Pacific/Kwajalein, Pacific/Majuro, Pacific/Marquesas, Pacific/Midway, Pacific/Nauru, Pacific/Niue, Pacific/Norfolk, Pacific/Noumea, Pacific/Pago_Pago, Pacific/Palau, Pacific/Pitcairn, Pacific/Pohnpei, Pacific/Port_Moresby, Pacific/Rarotonga, Pacific/Saipan, Pacific/Tahiti, Pacific/Tarawa, Pacific/Tongatapu, Pacific/Wake, Pacific/Wallis