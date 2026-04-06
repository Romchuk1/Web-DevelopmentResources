function fetchUser(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!userId) {
        reject("Немає userId");
        return;
      }

      const user = {
        id: userId,
        name: "Roman"
      };

      resolve(user);
    }, 2000);
  });
}

function fetchOrders(userId) {
  return fetchUser(userId).then(user => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!user) {
          reject("Користувача не знайдено");
          return;
        }

        const orders = [
          { id: 1, item: "Laptop" },
          { id: 2, item: "Phone" }
        ];

        resolve(orders);
      }, 3000);
    });
  });
}

async function getUserWithOrders(userId) {
  try {
    const user = await fetchUser(userId);
    console.log(user);

    const orders = await fetchOrders(userId);
    console.log(orders);
  } catch (error) {
    console.log(error);
  }
}

getUserWithOrders(1);