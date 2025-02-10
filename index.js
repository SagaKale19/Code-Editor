  function updateOutput() {
            let html = document.getElementById('html-area').value;
            let css = document.getElementById('css-area').value;
            let js = document.getElementById('js-area').value;
            let output = document.getElementById('op_code');

            // Properly inject JS inside a script tag
            let code = `
                <html>
                <head>
                    <style>${css}</style>
                </head>
                <body>
                    ${html}
                    <script>${js}<\/script>
                </body>
                </html>
            `;

            output.srcdoc = code; // Inject content into the iframe
  }