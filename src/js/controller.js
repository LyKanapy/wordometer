import * as model from "./model.js";
import inputView from "./views/inputView.js";
import inputStatsView from "./views/inputStatsView.js";

const button = document.querySelector(".btn");

console.log(button);

const controlInput = function () {
  // Add string to model after pressing button
  const input = inputView.getInput();
  model.loadInput(input);
  inputStatsView.render(model.state.inputStats);
};

// const controlResults = function () {
//     // Display and arrange results

// }

const init = function () {
  inputView.addHandlerInput(controlInput);
};
init();
