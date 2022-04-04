class InputView {
  _parentElement = document.querySelector(".text-input");

  getInput() {
    const input = this._parentElement.querySelector(".text-input__field").value;
    this._clearInput();
    return input;
  }

  _clearInput() {
    this._parentElement.querySelector(".text-input__field").value = "";
  }

  addHandlerInput(handler) {
    this._parentElement.addEventListener("submit", function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new InputView();
