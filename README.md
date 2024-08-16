##Hacker News Article Date Checker

This script is designed to automate the process of checking if the articles listed on the "Newest" section of Hacker News are in the correct chronological order.
It uses the Playwright library to interact with the website and extract the publication dates of articles.

#Prerequisites
Before running this script, ensure you have the following installed:

Node.js (version 14 or higher)
npm (Node Package Manager)
Playwright


#The script will display a list of the first 100 article publication dates along with their corresponding positions.
It will then check if these articles are ordered correctly by date and print a message indicating whether they are ordered correctly or not.
How It Works

Launch Browser: The script launches a headless instance of the Chrome browser using Playwright.
Navigate to URL: It navigates to the "Newest" section of Hacker News.

Extract Dates: The script extracts the publication dates of articles displayed on the page.
Load More Articles: If fewer than 100 dates are extracted, the script clicks the "more" button to load additional articles and repeats the process.

Check Order: Once 100 dates are collected, the script checks if they are in descending chronological order.

Close Browser: Finally, the browser instance is closed.

Notes
The script assumes that the publication dates on Hacker News are displayed with a span element and a class of age.
The dates are extracted using the title attribute of the span.age element, which is assumed to be in a format that can be parsed by JavaScript's Date object.

License
This project is licensed under the MIT License.

Contributing
Feel free to fork this project and submit pull requests if you have any improvements or fixes.
