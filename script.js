const scoreElement = document.getElementById("score");
const colorParts = document.querySelectorAll(".colors");
const containerElement = document.querySelector(".container");
const startBtn = document.querySelector("#start-btn");
const resultElement = document.querySelector("#score-result");
const wrapperElement = document.querySelector(".wrapper");

// [current and new colors object]
const colorObject = {
  color1: { current: "006400", new: "00ff00" },
  color2: { current: "800000", new: "ff0000" },
  color3: { current: "00008b", new: "0000ff" },
  color4: { current: "808000", new: "ffff00" },
};

// [game variables]
let randomColors = [];
let isPathGenerating = false;
let score = 0;
let clickCount = 0;

// [function to get a random color from colors object]
const getRandomColor = (colorsObject) => {
  const colorKeys = Object.keys(colorsObject);
  return colorKeys[Math.floor(Math.random() * colorKeys.length)];
};
