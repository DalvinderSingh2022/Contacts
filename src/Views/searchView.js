class SearchView {
  container = document.querySelector(".search-form");
  inputQuery = document.querySelector(".search-input");

  addHandleClear(handler) {
    this.container.querySelector(".clear").addEventListener("click", handler.bind(this));
  }

  addHandleClear(handler) {
    this.container.querySelector(".clear").addEventListener("click", handler.bind(this));
  }

  addSubmitEvent(handler) {
    this.container.addEventListener("submit", (ev) => {
      handler(ev);
      this.toggleButtons();
    });
  }

  toggleButtons() {
    this.container.querySelector(".clear").classList.toggle("hide");
    this.container.querySelector(".search-btn").classList.toggle("hide");
  }

  get query() {
    return this.inputQuery.value;
  }
  clearForm() {
    this.inputQuery.value = "";
  }
}

export default new SearchView();
