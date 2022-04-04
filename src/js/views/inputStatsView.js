class InputStatsView {
  _parentElement = document.querySelector(".text-stats__content");
  _data;

  render(data) {
    this._clear();
    this._data = data;
    this._data.sort((a, b) => (a.count > b.count ? 1 : -1));
    const maxCount = this._data[this._data.length - 1].count;
    let sumCount = 0;
    this._data.forEach((el) => {
      sumCount = sumCount + el.count;
    });
    this._data.forEach((el) => {
      console.log(el);
      this._parentElement.insertAdjacentHTML(
        "afterbegin",
        this._generateMarkup(el.name, el.count, maxCount, sumCount)
      );
    });
  }

  _clear() {
    this._parentElement.innerHTML = "";
  }

  _generateMarkup(name, count, maxCount, sumCount) {
    return `
    <div class="text-stats__row">
        <div class="text-stats__name stats-element">${name.toUpperCase()}</div>
        <div class="text-stats__graph stats-element">
          <div class="text-stats__graph-line"style="
            width: calc(85% *(${count} / ${maxCount}))
          "
          ></div>
          <div class="text-stats__value">${count} | ${(
      (100 / sumCount) *
      count
    ).toFixed(2)}%</div>
          </div>        
        
    </div>
        `;
  }
}

export default new InputStatsView();

// Comment
let cooper = 2;
cooper = 4;
