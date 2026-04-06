function getRandomNumber() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const random = Math.floor(Math.random() * 100) + 1;
      resolve(random);
    }, 1000);
  });
}

async function processNumber() {
  try {
    const number = await getRandomNumber();
    console.log(number);

    if (number < 50) {
      return await Promise.resolve(number + 20);
    } else {
      return await Promise.reject("Занадто велике число!");
    }
  } catch (error) {
    console.log(error);
    return "Оброблено помилку";
  }
}

processNumber().then(result => console.log(result));