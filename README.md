#Chromium caching issue

##Set up

Run `npm install`.

##Steps to recreate

- Start server using `node server.js`
- Go to http://localhost:3000/ in Chrome
- Select the 'Dogs' option & press the continue button
- Select the 'Half full' option & press the continue button
- Select the 'tails' option & press the continue button
- Click the back button & inspect the HTML to see if `checked="checked"` is set on either option.
- Results vary but at least one page always has `checked="checked"` set but that option is not shown as being selected in the rendered page.

##Issues raised

[https://code.google.com/p/chromium/issues/detail?id=387098](https://code.google.com/p/chromium/issues/detail?id=387098)
