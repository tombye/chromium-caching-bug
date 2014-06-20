#Chromium caching issue

##Steps to recreate

- Start server using `node server.js`
- Go to http://localhost:3000/ in Chrome
- Select the 'Dogs' option & press the continue button
- Select the 'Half full' option & press the continue button
- Select the 'tails' option & press the continue button
- Click the back button & inspect the HTML to see if `checked="checked"` is set on either option.
- Results vary but at least one page always has `checked="checked"` set but that option is not shown as being selected in the rendered page.
