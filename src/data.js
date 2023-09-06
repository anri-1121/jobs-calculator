var profitablePrice = 50; //არეგულირებს იმ მოსამატებელ ფასს რომელიც ბაშვების ასაკი ცვლილებით ემატება ეტაპობრივად
var profitablePriceForAmountOfChild = 10; //არეგულირებს იმ მოსამატებელ ფასს რომელიც ბაშვების რაოდენობის ცვლილებით ემატება ეტაპობრივად
var driverProfitablePrice = 500; //არეგულირებს მძღოლის ანაზღაურებას იმ შემთხვევაში თუ იქნება საწვავის გარეშე არჩეული
var driverPriceDif = 50; //არეგულირებს მძღოლის ანაზღაურებას როცა დღიური განრიგი არის არჩეული საწვავისა და საწვავის გარეშე
var cleanerProfitablePrice = 50;
var cleanerProfitablePriceForDaily = 25;

export const dzidzaSchedule = [
  {
    scheduleCat: "day",
    fixPriceArr: [
      {
        daysNum: "1",
        fixPrice: 300,
        workdaysInMonth: 5,
        profitablePrice: profitablePrice,
      },
      {
        daysNum: "2",
        fixPrice: 500,
        workdaysInMonth: 10,
        profitablePrice: profitablePrice,
      },
      {
        daysNum: "3",
        fixPrice: 700,
        workdaysInMonth: 13,
        profitablePrice: profitablePrice,
      },
      {
        daysNum: "4",
        fixPrice: 900,
        workdaysInMonth: 17,
        profitablePrice: profitablePrice,
      },
      {
        daysNum: "5",
        fixPrice: 1000,
        workdaysInMonth: 23,
        profitablePrice: profitablePrice,
      },
      {
        daysNum: "6",
        fixPrice: 1100,
        workdaysInMonth: 25,
        profitablePrice: profitablePrice,
      },
    ],
  },
  {
    scheduleCat: "night",
    fixPriceArr: [
      {
        daysNum: "1",
        fixPrice: 350,
        workdaysInMonth: 5,
        profitablePrice: profitablePrice,
      },
      {
        daysNum: "2",
        fixPrice: 500,
        workdaysInMonth: 10,
        profitablePrice: profitablePrice,
      },
      {
        daysNum: "3",
        fixPrice: 600,
        workdaysInMonth: 13,
        profitablePrice: profitablePrice,
      },
      {
        daysNum: "4",
        fixPrice: 700,
        workdaysInMonth: 17,
        profitablePrice: profitablePrice,
      },
      {
        daysNum: "5",
        fixPrice: 750,
        workdaysInMonth: 23,
        profitablePrice: profitablePrice,
      },
      {
        daysNum: "6",
        fixPrice: 800,
        workdaysInMonth: 25,
        profitablePrice: profitablePrice,
      },
    ],
  },
  {
    scheduleCat: "dayOrNight",
    fixPriceArr: [
      {
        daysNum: "1",
        fixPrice: 250,
        workdaysInMonth: 5,
        profitablePrice: profitablePrice,
      },
      {
        daysNum: "2",
        fixPrice: 400,
        workdaysInMonth: 10,
        profitablePrice: profitablePrice,
      },
      {
        daysNum: "3",
        fixPrice: 550,
        workdaysInMonth: 13,
        profitablePrice: profitablePrice,
      },
      {
        daysNum: "4",
        fixPrice: 600,
        workdaysInMonth: 17,
        profitablePrice: profitablePrice,
      },
      {
        daysNum: "5",
        fixPrice: 650,
        workdaysInMonth: 23,
        profitablePrice: profitablePrice,
      },
      {
        daysNum: "6",
        fixPrice: 700,
        workdaysInMonth: 25,
        profitablePrice: profitablePrice,
      },
    ],
  },
  {
    scheduleCat: "dayAndNight",
    fixPriceArr: [
      {
        daysNum: "1",
        fixPrice: 400,
        workdaysInMonth: 5,
        profitablePrice: profitablePrice,
      },
      {
        daysNum: "2",
        fixPrice: 700,
        workdaysInMonth: 10,
        profitablePrice: profitablePrice,
      },
      {
        daysNum: "3",
        fixPrice: 900,
        workdaysInMonth: 13,
        profitablePrice: profitablePrice,
      },
      {
        daysNum: "4",
        fixPrice: 1000,
        workdaysInMonth: 17,
        profitablePrice: profitablePrice,
      },
      {
        daysNum: "5",
        fixPrice: 1200,
        workdaysInMonth: 23,
        profitablePrice: profitablePrice,
      },
      {
        daysNum: "6",
        fixPrice: 1300,
        workdaysInMonth: 25,
        profitablePrice: profitablePrice,
      },
    ],
  },
  {
    scheduleCat: "daily",
    fixPriceArr: [
      {
        daysNum: "1",
        fixPrice: 55,
        workdaysInMonth: 1,
        profitablePrice: profitablePriceForAmountOfChild,
      },
      {
        daysNum: "2",
        fixPrice: 110,
        workdaysInMonth: 2,
        profitablePrice: profitablePriceForAmountOfChild * 2,
      },
      {
        daysNum: "3",
        fixPrice: 165,
        workdaysInMonth: 3,
        profitablePrice: profitablePriceForAmountOfChild * 3,
      },
      {
        daysNum: "4",
        fixPrice: 220,
        workdaysInMonth: 4,
        profitablePrice: profitablePriceForAmountOfChild * 4,
      },
      {
        daysNum: "5",
        fixPrice: 275,
        workdaysInMonth: 5,
        profitablePrice: profitablePriceForAmountOfChild * 5,
      },
      {
        daysNum: "6",
        fixPrice: 330,
        workdaysInMonth: 6,
        profitablePrice: profitablePriceForAmountOfChild * 6,
      },
      {
        daysNum: "7",
        fixPrice: 385,
        workdaysInMonth: 7,
        profitablePrice: profitablePriceForAmountOfChild * 7,
      },
      {
        daysNum: "8",
        fixPrice: 440,
        workdaysInMonth: 8,
        profitablePrice: profitablePriceForAmountOfChild * 8,
      },
      {
        daysNum: "9",
        fixPrice: 495,
        workdaysInMonth: 9,
        profitablePrice: profitablePriceForAmountOfChild * 9,
      },
      {
        daysNum: "10",
        fixPrice: 550,
        workdaysInMonth: 10,
        profitablePrice: profitablePriceForAmountOfChild * 10,
      },
      {
        daysNum: "11",
        fixPrice: 605,
        workdaysInMonth: 11,
        profitablePrice: profitablePriceForAmountOfChild * 11,
      },
      {
        daysNum: "12",
        fixPrice: 660,
        workdaysInMonth: 12,
        profitablePrice: profitablePriceForAmountOfChild * 12,
      },
      {
        daysNum: "13",
        fixPrice: 715,
        workdaysInMonth: 13,
        profitablePrice: profitablePriceForAmountOfChild * 13,
      },
      {
        daysNum: "14",
        fixPrice: 770,
        workdaysInMonth: 14,
        profitablePrice: profitablePriceForAmountOfChild * 14,
      },
      {
        daysNum: "15",
        fixPrice: 825,
        workdaysInMonth: 16,
        profitablePrice: profitablePriceForAmountOfChild * 15,
      },
      {
        daysNum: "16",
        fixPrice: 880,
        workdaysInMonth: 16,
        profitablePrice: profitablePriceForAmountOfChild * 16,
      },
      {
        daysNum: "17",
        fixPrice: 935,
        workdaysInMonth: 17,
        profitablePrice: profitablePriceForAmountOfChild * 17,
      },
      {
        daysNum: "18",
        fixPrice: 990,
        workdaysInMonth: 18,
        profitablePrice: profitablePriceForAmountOfChild * 18,
      },
      {
        daysNum: "19",
        fixPrice: 1045,
        workdaysInMonth: 19,
        profitablePrice: profitablePriceForAmountOfChild * 19,
      },
      {
        daysNum: "20",
        fixPrice: 1100,
        workdaysInMonth: 20,
        profitablePrice: profitablePriceForAmountOfChild * 20,
      },
      {
        daysNum: "21",
        fixPrice: 1155,
        workdaysInMonth: 21,
        profitablePrice: profitablePriceForAmountOfChild * 21,
      },
      {
        daysNum: "22",
        fixPrice: 1210,
        workdaysInMonth: 22,
        profitablePrice: profitablePriceForAmountOfChild * 22,
      },
      {
        daysNum: "23",
        fixPrice: 1265,
        workdaysInMonth: 23,
        profitablePrice: profitablePriceForAmountOfChild * 23,
      },
      {
        daysNum: "24",
        fixPrice: 1320,
        workdaysInMonth: 24,
        profitablePrice: profitablePriceForAmountOfChild * 24,
      },
      {
        daysNum: "25",
        fixPrice: 1375,
        workdaysInMonth: 25,
        profitablePrice: profitablePriceForAmountOfChild * 25,
      },
    ],
  },
  {
    scheduleCat: "hourly",
    fixPriceArr: [
      {
        daysNum: "1",
        fixPrice: 10,
        workdaysInMonth: 5,
        profitablePrice: 5,
      },
      {
        daysNum: "2",
        fixPrice: 15,
        workdaysInMonth: 10,
        profitablePrice: 5,
      },
      {
        daysNum: "3",
        fixPrice: 165,
        workdaysInMonth: 13,
        profitablePrice: 5,
      },
      {
        daysNum: "4",
        fixPrice: 220,
        workdaysInMonth: 17,
        profitablePrice: 5,
      },
      {
        daysNum: "5",
        fixPrice: 275,
        workdaysInMonth: 23,
        profitablePrice: 5,
      },
      {
        daysNum: "6",
        fixPrice: 330,
        workdaysInMonth: 25,
        profitablePrice: 10,
      },
    ],
  },
];

// mzareulis grafiki
export const mzareuliSchedule = [
  {
    scheduleCat: "day",
    fixPriceArr: [
      {
        daysNum: "1",
        fixPrice: 300,
        workdaysInMonth: 5,
        profitablePrice: profitablePrice,
      },
      {
        daysNum: "2",
        fixPrice: 500,
        workdaysInMonth: 10,
        profitablePrice: profitablePrice,
      },
      {
        daysNum: "3",
        fixPrice: 600,
        workdaysInMonth: 13,
        profitablePrice: profitablePrice,
      },
      {
        daysNum: "4",
        fixPrice: 700,
        workdaysInMonth: 17,
        profitablePrice: profitablePrice,
      },
      {
        daysNum: "5",
        fixPrice: 800,
        workdaysInMonth: 23,
        profitablePrice: profitablePrice,
      },
      {
        daysNum: "6",
        fixPrice: 900,
        workdaysInMonth: 25,
        profitablePrice: profitablePrice,
      },
    ],
  },
  {
    scheduleCat: "daily",
    fixPriceArr: [
      {
        daysNum: "1",
        fixPrice: 55,
        workdaysInMonth: 1,
        profitablePrice: profitablePriceForAmountOfChild,
      },
      {
        daysNum: "2",
        fixPrice: 110,
        workdaysInMonth: 2,
        profitablePrice: profitablePriceForAmountOfChild * 2,
      },
      {
        daysNum: "3",
        fixPrice: 165,
        workdaysInMonth: 3,
        profitablePrice: profitablePriceForAmountOfChild * 3,
      },
      {
        daysNum: "4",
        fixPrice: 220,
        workdaysInMonth: 4,
        profitablePrice: profitablePriceForAmountOfChild * 4,
      },
      {
        daysNum: "5",
        fixPrice: 275,
        workdaysInMonth: 5,
        profitablePrice: profitablePriceForAmountOfChild * 5,
      },
      {
        daysNum: "6",
        fixPrice: 330,
        workdaysInMonth: 6,
        profitablePrice: profitablePriceForAmountOfChild * 6,
      },
      {
        daysNum: "7",
        fixPrice: 385,
        workdaysInMonth: 7,
        profitablePrice: profitablePriceForAmountOfChild * 7,
      },
      {
        daysNum: "8",
        fixPrice: 440,
        workdaysInMonth: 8,
        profitablePrice: profitablePriceForAmountOfChild * 8,
      },
      {
        daysNum: "9",
        fixPrice: 495,
        workdaysInMonth: 9,
        profitablePrice: profitablePriceForAmountOfChild * 9,
      },
      {
        daysNum: "10",
        fixPrice: 550,
        workdaysInMonth: 10,
        profitablePrice: profitablePriceForAmountOfChild * 10,
      },
      {
        daysNum: "11",
        fixPrice: 605,
        workdaysInMonth: 11,
        profitablePrice: profitablePriceForAmountOfChild * 11,
      },
      {
        daysNum: "12",
        fixPrice: 660,
        workdaysInMonth: 12,
        profitablePrice: profitablePriceForAmountOfChild * 12,
      },
      {
        daysNum: "13",
        fixPrice: 715,
        workdaysInMonth: 13,
        profitablePrice: profitablePriceForAmountOfChild * 13,
      },
      {
        daysNum: "14",
        fixPrice: 770,
        workdaysInMonth: 14,
        profitablePrice: profitablePriceForAmountOfChild * 14,
      },
      {
        daysNum: "15",
        fixPrice: 825,
        workdaysInMonth: 16,
        profitablePrice: profitablePriceForAmountOfChild * 15,
      },
      {
        daysNum: "16",
        fixPrice: 880,
        workdaysInMonth: 16,
        profitablePrice: profitablePriceForAmountOfChild * 16,
      },
      {
        daysNum: "17",
        fixPrice: 935,
        workdaysInMonth: 17,
        profitablePrice: profitablePriceForAmountOfChild * 17,
      },
      {
        daysNum: "18",
        fixPrice: 990,
        workdaysInMonth: 18,
        profitablePrice: profitablePriceForAmountOfChild * 18,
      },
      {
        daysNum: "19",
        fixPrice: 1045,
        workdaysInMonth: 19,
        profitablePrice: profitablePriceForAmountOfChild * 19,
      },
      {
        daysNum: "20",
        fixPrice: 1100,
        workdaysInMonth: 20,
        profitablePrice: profitablePriceForAmountOfChild * 20,
      },
      {
        daysNum: "21",
        fixPrice: 1155,
        workdaysInMonth: 21,
        profitablePrice: profitablePriceForAmountOfChild * 21,
      },
      {
        daysNum: "22",
        fixPrice: 1210,
        workdaysInMonth: 22,
        profitablePrice: profitablePriceForAmountOfChild * 22,
      },
      {
        daysNum: "23",
        fixPrice: 1265,
        workdaysInMonth: 23,
        profitablePrice: profitablePriceForAmountOfChild * 23,
      },
      {
        daysNum: "24",
        fixPrice: 1320,
        workdaysInMonth: 24,
        profitablePrice: profitablePriceForAmountOfChild * 24,
      },
      {
        daysNum: "25",
        fixPrice: 1375,
        workdaysInMonth: 25,
        profitablePrice: profitablePriceForAmountOfChild * 25,
      },
    ],
  },
];

// mdzgolis grafiki
export const mdzgoliSchedule = [
  {
    scheduleCat: "day",
    fixPriceArr: [
      {
        daysNum: "1",
        fixPrice: 300,
        workdaysInMonth: 5,
        profitablePrice: 200,
      },
      {
        daysNum: "2",
        fixPrice: 600,
        workdaysInMonth: 10,
        profitablePrice: 200,
      },
      {
        daysNum: "3",
        fixPrice: 800,
        workdaysInMonth: 13,
        profitablePrice: 200,
      },
      {
        daysNum: "4",
        fixPrice: 1000,
        workdaysInMonth: 17,
        profitablePrice: driverProfitablePrice,
      },
      {
        daysNum: "5",
        fixPrice: 1300,
        workdaysInMonth: 23,
        profitablePrice: driverProfitablePrice,
      },
      {
        daysNum: "6",
        fixPrice: 1500,
        workdaysInMonth: 25,
        profitablePrice: driverProfitablePrice,
      },
    ],
  },
  {
    scheduleCat: "daily",
    fixPriceArr: [
      {
        daysNum: "1",
        fixPrice: 100,
        workdaysInMonth: 1,
        profitablePrice: driverPriceDif,
      },
      {
        daysNum: "2",
        fixPrice: 200,
        workdaysInMonth: 2,
        profitablePrice: driverPriceDif * 2,
      },
      {
        daysNum: "3",
        fixPrice: 300,
        workdaysInMonth: 3,
        profitablePrice: driverPriceDif * 3,
      },
      {
        daysNum: "4",
        fixPrice: 400,
        workdaysInMonth: 4,
        profitablePrice: driverPriceDif * 4,
      },
      {
        daysNum: "5",
        fixPrice: 500,
        workdaysInMonth: 5,
        profitablePrice: driverPriceDif * 5,
      },
      {
        daysNum: "6",
        fixPrice: 600,
        workdaysInMonth: 6,
        profitablePrice: driverPriceDif * 6,
      },
      {
        daysNum: "7",
        fixPrice: 700,
        workdaysInMonth: 7,
        profitablePrice: driverPriceDif * 7,
      },
      {
        daysNum: "8",
        fixPrice: 800,
        workdaysInMonth: 8,
        profitablePrice: driverPriceDif * 8,
      },
      {
        daysNum: "9",
        fixPrice: 900,
        workdaysInMonth: 9,
        profitablePrice: driverPriceDif * 9,
      },
      {
        daysNum: "10",
        fixPrice: 1000,
        workdaysInMonth: 10,
        profitablePrice: driverPriceDif * 10,
      },
      {
        daysNum: "11",
        fixPrice: 1100,
        workdaysInMonth: 11,
        profitablePrice: driverPriceDif * 11,
      },
      {
        daysNum: "12",
        fixPrice: 1200,
        workdaysInMonth: 12,
        profitablePrice: driverPriceDif * 12,
      },
      {
        daysNum: "13",
        fixPrice: 1300,
        workdaysInMonth: 13,
        profitablePrice: driverPriceDif * 13,
      },
      {
        daysNum: "14",
        fixPrice: 1400,
        workdaysInMonth: 14,
        profitablePrice: driverPriceDif * 14,
      },
      {
        daysNum: "15",
        fixPrice: 1500,
        workdaysInMonth: 16,
        profitablePrice: driverPriceDif * 15,
      },
      {
        daysNum: "16",
        fixPrice: 1600,
        workdaysInMonth: 16,
        profitablePrice: driverPriceDif * 16,
      },
      {
        daysNum: "17",
        fixPrice: 1700,
        workdaysInMonth: 17,
        profitablePrice: driverPriceDif * 17,
      },
      {
        daysNum: "18",
        fixPrice: 1800,
        workdaysInMonth: 18,
        profitablePrice: driverPriceDif * 18,
      },
      {
        daysNum: "19",
        fixPrice: 1900,
        workdaysInMonth: 19,
        profitablePrice: driverPriceDif * 19,
      },
      {
        daysNum: "20",
        fixPrice: 2000,
        workdaysInMonth: 20,
        profitablePrice: driverPriceDif * 20,
      },
      {
        daysNum: "21",
        fixPrice: 2100,
        workdaysInMonth: 21,
        profitablePrice: driverPriceDif * 21,
      },
      {
        daysNum: "22",
        fixPrice: 2200,
        workdaysInMonth: 22,
        profitablePrice: driverPriceDif * 22,
      },
      {
        daysNum: "23",
        fixPrice: 2300,
        workdaysInMonth: 23,
        profitablePrice: driverPriceDif * 23,
      },
      {
        daysNum: "24",
        fixPrice: 2400,
        workdaysInMonth: 24,
        profitablePrice: driverPriceDif * 24,
      },
      {
        daysNum: "25",
        fixPrice: 2500,
        workdaysInMonth: 25,
        profitablePrice: driverPriceDif * 25,
      },
    ],
  },
];

// damlageblis grafiki
export const damlagebeliSchedule = [
  {
    scheduleCat: "day",
    fixPriceArr: [
      {
        daysNum: "1",
        fixPrice: 350,
        workdaysInMonth: 5,
        profitablePrice: cleanerProfitablePrice,
      },
      {
        daysNum: "2",
        fixPrice: 450,
        workdaysInMonth: 10,
        profitablePrice: cleanerProfitablePrice,
      },
      {
        daysNum: "3",
        fixPrice: 500,
        workdaysInMonth: 13,
        profitablePrice: cleanerProfitablePrice,
      },
      {
        daysNum: "4",
        fixPrice: 600,
        workdaysInMonth: 17,
        profitablePrice: cleanerProfitablePrice,
      },
      {
        daysNum: "5",
        fixPrice: 700,
        workdaysInMonth: 23,
        profitablePrice: cleanerProfitablePrice,
      },
      {
        daysNum: "6",
        fixPrice: 750,
        workdaysInMonth: 25,
        profitablePrice: profitablePrice,
      },
    ],
  },
  {
    scheduleCat: "daily",
    fixPriceArr: [
      {
        daysNum: "1",
        fixPrice: 60,
        workdaysInMonth: 1,
        profitablePrice: cleanerProfitablePriceForDaily,
      },
      {
        daysNum: "2",
        fixPrice: 120,
        workdaysInMonth: 2,
        profitablePrice: cleanerProfitablePriceForDaily * 2,
      },
      {
        daysNum: "3",
        fixPrice: 180,
        workdaysInMonth: 3,
        profitablePrice: cleanerProfitablePriceForDaily * 3,
      },
      {
        daysNum: "4",
        fixPrice: 240,
        workdaysInMonth: 4,
        profitablePrice: cleanerProfitablePriceForDaily * 4,
      },
      {
        daysNum: "5",
        fixPrice: 300,
        workdaysInMonth: 5,
        profitablePrice: cleanerProfitablePriceForDaily * 5,
      },
      {
        daysNum: "6",
        fixPrice: 360,
        workdaysInMonth: 6,
        profitablePrice: cleanerProfitablePriceForDaily * 6,
      },
      {
        daysNum: "7",
        fixPrice: 420,
        workdaysInMonth: 7,
        profitablePrice: cleanerProfitablePriceForDaily * 7,
      },
      {
        daysNum: "8",
        fixPrice: 480,
        workdaysInMonth: 8,
        profitablePrice: cleanerProfitablePriceForDaily * 8,
      },
      {
        daysNum: "9",
        fixPrice: 540,
        workdaysInMonth: 9,
        profitablePrice: cleanerProfitablePriceForDaily * 9,
      },
      {
        daysNum: "10",
        fixPrice: 600,
        workdaysInMonth: 10,
        profitablePrice: cleanerProfitablePriceForDaily * 10,
      },
      {
        daysNum: "11",
        fixPrice: 660,
        workdaysInMonth: 11,
        profitablePrice: cleanerProfitablePriceForDaily * 11,
      },
      {
        daysNum: "12",
        fixPrice: 720,
        workdaysInMonth: 12,
        profitablePrice: cleanerProfitablePriceForDaily * 12,
      },
      {
        daysNum: "13",
        fixPrice: 780,
        workdaysInMonth: 13,
        profitablePrice: cleanerProfitablePriceForDaily * 13,
      },
      {
        daysNum: "14",
        fixPrice: 840,
        workdaysInMonth: 14,
        profitablePrice: cleanerProfitablePriceForDaily * 14,
      },
      {
        daysNum: "15",
        fixPrice: 900,
        workdaysInMonth: 16,
        profitablePrice: cleanerProfitablePriceForDaily * 15,
      },
      {
        daysNum: "16",
        fixPrice: 960,
        workdaysInMonth: 16,
        profitablePrice: cleanerProfitablePriceForDaily * 16,
      },
      {
        daysNum: "17",
        fixPrice: 1020,
        workdaysInMonth: 17,
        profitablePrice: cleanerProfitablePriceForDaily * 17,
      },
      {
        daysNum: "18",
        fixPrice: 1080,
        workdaysInMonth: 18,
        profitablePrice: cleanerProfitablePriceForDaily * 18,
      },
      {
        daysNum: "19",
        fixPrice: 1140,
        workdaysInMonth: 19,
        profitablePrice: cleanerProfitablePriceForDaily * 19,
      },
      {
        daysNum: "20",
        fixPrice: 1200,
        workdaysInMonth: 20,
        profitablePrice: cleanerProfitablePriceForDaily * 20,
      },
      {
        daysNum: "21",
        fixPrice: 1260,
        workdaysInMonth: 21,
        profitablePrice: cleanerProfitablePriceForDaily * 21,
      },
      {
        daysNum: "22",
        fixPrice: 1320,
        workdaysInMonth: 22,
        profitablePrice: cleanerProfitablePriceForDaily * 22,
      },
      {
        daysNum: "23",
        fixPrice: 1380,
        workdaysInMonth: 23,
        profitablePrice: cleanerProfitablePriceForDaily * 23,
      },
      {
        daysNum: "24",
        fixPrice: 1440,
        workdaysInMonth: 24,
        profitablePrice: cleanerProfitablePriceForDaily * 24,
      },
      {
        daysNum: "25",
        fixPrice: 1500,
        workdaysInMonth: 25,
        profitablePrice: cleanerProfitablePriceForDaily * 25,
      },
    ],
  },
];

// damlageblis grafiki
export const ojaxuriWyvili = [
  {
    scheduleCat: "day",
    fixPriceArr: [
      {
        daysNum: "1",
        fixPrice: 1200,
        workdaysInMonth:30,
        profitablePrice: 400,
      },
    ],
  },
];

// sabavshvo bais agmzrdelis grafiki
export const bagisAgmzrdeli = [
  {
    scheduleCat: "day",
    fixPriceArr: [
      {
        daysNum: "1",
        fixPrice: 700,
        workdaysInMonth:23,
        profitablePrice: 50,
      },
      {
        daysNum: "2",
        fixPrice: 800,
        workdaysInMonth:25,
        profitablePrice: 50,
      },
    ],
  },
];
