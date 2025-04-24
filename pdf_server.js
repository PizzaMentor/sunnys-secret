const express = require('express');
const puppeteer = require('puppeteer');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files
app.use(express.static('./'));

// Route to generate PDF
app.get('/generate-pdf', async (req, res) => {
    try {
        // Launch browser
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        // Set page size to A4
        await page.setViewport({
            width: 794, // A4 width in pixels at 96 DPI
            height: 1123, // A4 height in pixels at 96 DPI
            deviceScaleFactor: 2
        });

        // Load the HTML file
        await page.goto(`http://localhost:${port}`, {
            waitUntil: 'networkidle0'
        });

        // Generate PDF
        const pdf = await page.pdf({
            format: 'A4',
            printBackground: true,
            preferCSSPageSize: true,
            margin: {
                top: '0mm',
                right: '0mm',
                bottom: '0mm',
                left: '0mm'
            }
        });

        await browser.close();

        // Send PDF
        res.contentType('application/pdf');
        res.send(pdf);

    } catch (error) {
        console.error('Error generating PDF:', error);
        res.status(500).send('Error generating PDF');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    console.log(`Generate PDF at http://localhost:${port}/generate-pdf`);
}); 