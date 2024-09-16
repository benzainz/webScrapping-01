# Hacker News Article Date Checker

This script automates the process of checking whether the articles listed in the "Newest" section of Hacker News are displayed in the correct chronological order. It uses the Playwright library to interact with the website and extract the publication dates of the articles.

## How It Works

1. **Launch Browser**: The script launches a headless instance of the Chrome browser using Playwright.
2. **Navigate to URL**: It navigates to the "Newest" section of Hacker News.
3. **Extract Dates**: The script extracts the publication dates of the articles displayed on the page.
4. **Load More Articles**: If fewer than 100 dates are extracted, the script clicks the "more" button to load additional articles and repeats the process.
5. **Check Order**: Once 100 dates are collected, the script checks if they are in descending chronological order.
6. **Close Browser**: After the dates are verified, the browser instance is closed.

## Features

- **Automated Date Extraction**: Automatically scrapes the publication dates from the "Newest" section of Hacker News.
- **Order Validation**: Validates whether the articles are correctly ordered by date.
- **Pagination Support**: Automatically loads more articles if fewer than 100 are displayed.
- **Headless Browser**: Uses a headless browser to scrape data quickly without opening a visible browser window.

## Prerequisites

Before running this script, ensure you have the following installed:

- **Node.js** (version 14 or higher)
- **npm** (Node Package Manager)
- **Playwright** (installed via npm)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/bezainz/webScrapping-01.git
   npm install
   npx playwright install
   node script.js
Example output
1: 2024-09-15T12:34:00.000Z
2: 2024-09-15T11:45:00.000Z
...
100: 2024-09-12T08:23:00.000Z

The articles are in the correct chronological order.

 
