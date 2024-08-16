// const { chromium } = require('playwright');

// (async () => {
//   // Launch a new instance of the Chrome browser
//   const browser = await chromium.launch();
//   const page = await browser.newPage();

//   // Navigate to the URL
//   await page.goto('https://news.ycombinator.com/newest');

//   // Extract the list of timestamps
//   const times = await page.$$eval('span.age', nodes =>
//     nodes.map(node => new Date(node.getAttribute('title')).getTime())
//   );

//   // Logic to check if the times are ordered correctly
//   let isOrderedCorrectly = true;
//   for (let i = 1; i < times.length; i++) {
//     if (times[i] > times[i - 1]) {
//       isOrderedCorrectly = false;
//       break;
//     }
//   }



//   if (isOrderedCorrectly) {
//     console.log('The articles are ordered correctly.');
//   } else {
//     console.log('The articles are NOT ordered correctly.');
//   }
//   // print times to console
//   console.log('Lista de fechas:', times.map(time => new Date(time).toString()))

//   // Close the browser instance
//   await browser.close();
// })();

// const { chromium } = require('playwright');

// (async () => {
//   // Launch a new instance of the Chrome browser
//   const browser = await chromium.launch();
//   const page = await browser.newPage();

//   // Navegar a la URL inicial
//   await page.goto('https://news.ycombinator.com/newest');

//   let allTimes = [];

//   // Repetir el proceso hasta tener al menos 100 fechas
//   while (allTimes.length < 100) {
//     // Extraer las fechas actuales en la página
//     const times = await page.$$eval('.age > a', nodes =>
//       nodes.map(node => new Date(node.getAttribute('title')).getTime())
//     );
//     allTimes = allTimes.concat(times);

//     // Si no hemos alcanzado las 100 fechas, hacer clic en "more" para cargar más artículos
//     if (allTimes.length < 100) {
//       // await page.click('.morelink');
//       // await page.waitForLoadState('networkidle'); // Esperar a que la nueva página cargue completamente
//       const moreLink = await page.$('.morelink');
//       if (moreLink) {
//         await moreLink.click();
//         await page.waitForLoadState('networkidle'); // Esperar a que la nueva página cargue completamente
//       } else {
//         console.log('El enlace "more" no se encontró.');
//       }

//     }
//   }

//   // Truncar la lista a las primeras 100 fechas si es necesario
//   allTimes = allTimes.slice(0, 100);

//   // Verificar si las fechas están en orden correcto
//   let isOrderedCorrectly = true;
//   for (let i = 1; i < allTimes.length; i++) {
//     if (allTimes[i] > allTimes[i - 1]) {
//       isOrderedCorrectly = false;
//       break;
//     }
//   }

//   if (isOrderedCorrectly) {
//     console.log('The articles are ordered correctly.');
//   } else {
//     console.log('The articles are NOT ordered correctly.');
//   }

//   // Close the browser instance
//   await browser.close();
// })();
const { chromium } = require('playwright');

(async () => {
  // Launch a new instance of the Chrome browser
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Navegar a la URL inicial
  await page.goto('https://news.ycombinator.com/newest');

  let allTimes = [];

  // Repetir el proceso hasta tener al menos 100 fechas
  while (allTimes.length < 100) {
    // Extraer las fechas actuales en la página
    const times = await page.$$eval('span.age', nodes =>
      nodes.map(node => new Date(node.getAttribute('title')).getTime())
    );
    allTimes = allTimes.concat(times);

    // Si no hemos alcanzado las 100 fechas, hacer clic en "more" para cargar más artículos
    if (allTimes.length < 100) {
      const moreLink = await page.$('.morelink');
      if (moreLink) {
        await moreLink.click();
        await page.waitForLoadState('networkidle'); // Esperar a que la nueva página cargue completamente
      } else {
        console.log('El enlace "more" no se encontró.');
        break;
      }
    }
  }

  // Truncar la lista a las primeras 100 fechas si es necesario
  allTimes = allTimes.slice(0, 100);

  // Mostrar la lista de fechas con un número correspondiente del 1-100
  console.log('Lista de fechas:');
  allTimes.forEach((time, index) => {
    console.log(`${index + 1}. ${new Date(time).toString()}`);
  });

  // Verificar si las fechas están en orden correcto
  let isOrderedCorrectly = true;
  for (let i = 1; i < allTimes.length; i++) {
    if (allTimes[i] > allTimes[i - 1]) {
      isOrderedCorrectly = false;
      break;
    }
  }

  if (isOrderedCorrectly) {
    console.log('The articles are ordered correctly.');
  } else {
    console.log('The articles are NOT ordered correctly.');
  }

  // Close the browser instance
  await browser.close();
})();
