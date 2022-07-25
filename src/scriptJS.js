// Для зручності можете змінити формат з .txt на .js

// Вам дана інформація про Продукти(products), Послуги(services) та Курс валют до гривні(currencyToUAH).
// Знайдіть:
// 1. Загальну ціну всіх Продуктів в гривні
// 2. Індекс Послуги, де сума цін усіх Підпослуг(subservices) відрізняється від загальної ціни(totalPrice).

const data = {
  products: [
    {
      id: 1,
      name: "Product 1",
      price: 350,
      currency: "UAH",
      amount: 5,
    },
    {
      id: 2,
      name: "Product 2",
      price: 100,
      currency: "EUR",
      amount: 2,
    },
    {
      id: 3,
      name: "Product 3",
      price: 5,
      currency: "USD",
      amount: 1,
    },
    {
      id: 4,
      name: "Product 4",
      price: 120,
      currency: "EUR",
      amount: 52,
    },
  ],
  services: [
    {
      id: 1,
      name: "Service 1",
      totalPrice: 50,
      currency: "UAH",
      subservices: [
        {
          id: 55,
          name: "Subservice 1",
          price: 10,
          currency: "UAH",
        },
        {
          id: 56,
          name: "Subservice 2",
          price: 25,
          currency: "UAH",
        },
        {
          id: 57,
          name: "Subservice 3",
          price: 15,
          currency: "UAH",
        },
      ],
    },
    {
      id: 2,
      name: "Service 2",
      totalPrice: 75,
      currency: "UAH",
      subservices: [
        {
          id: 58,
          name: "Subservice 1",
          price: 15,
          currency: "UAH",
        },
        {
          id: 59,
          name: "Subservice 2",
          price: 20,
          currency: "UAH",
        },
        {
          id: 60,
          name: "Subservice 3",
          price: 30,
          currency: "UAH",
        },
      ],
    },
  ],
  currencyToUAH: {
    UAH: 1,
    USD: 36,
    EUR: 37,
  },
};

// Рішення:

const allProductsPriceUAH = (data) => {
  let totalPrice = 0;
  data.products.forEach(({ currency, price, amount }) => {
    if (currency === "EUR") {
      return (totalPrice =
        price * data.currencyToUAH.EUR * amount + totalPrice);
    }
    if (currency === "USD") {
      return (totalPrice =
        price * data.currencyToUAH.USD * amount + totalPrice);
    }
    if (currency === "UAH") {
      return (totalPrice =
        price * data.currencyToUAH.UAH * amount + totalPrice);
    }
  });
  return console.log("Загальнa цінa всіх Продуктів в гривні : ", totalPrice);
};
allProductsPriceUAH(data);

const indexServicesSubservicesDiffersTotalPrice = (data) => {
  data.forEach(({ subservices, totalPrice }, index) => {
    let totalPriceSubservices = 0;

    subservices.forEach(({ price }) => {
      totalPriceSubservices = price + totalPriceSubservices;
    });
    if (totalPrice === totalPriceSubservices) {
      return console.log(
        "Індекс Послуги, де сума цін усіх Підпослуг(subservices) відрізняється від загальної ціни(totalPrice) : ",
        index
      );
    }
  });
};
indexServicesSubservicesDiffersTotalPrice(data.services);
