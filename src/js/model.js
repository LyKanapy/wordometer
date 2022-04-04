export const state = {
  input: "",
  inputRaw: [],
  inputArr: [],
  inputSet: [],
  inputStats: [],
};

const mySet = new Set();

export const loadInput = function (input) {
  mySet.clear();
  state.inputStats = [];
  state.input = input;
  console.log(state.input);
  state.inputRaw = input.toLowerCase().replaceAll(" ", "");
  console.log(state.inputRaw);
  state.inputArr = state.inputRaw.split("");
  console.log(state.inputArr);
  state.inputArr.forEach((el) => mySet.add(el));
  console.log(mySet);
  state.inputSet = Array.from(mySet);
  console.log(state.inputSet);

  for (let i = 0; i < state.inputSet.length; i++) {
    let name = state.inputSet[i];
    let count = 0;
    for (let x = 0; x < state.inputArr.length; x++) {
      if (state.inputArr[x] === name) {
        count++;
      }
    }
    state.inputStats.push({ name, count });
  }
  console.log(state.inputStats);
};
