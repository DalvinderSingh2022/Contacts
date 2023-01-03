class ContactContainerView {
  container = document.querySelector(".list-container");

  render(data) {
    this.data = data;
    const html = this.generateHTMLString();
    this.container.innerHTML = html;
    this.applyDeleteEvent();
  }

  applyDeleteEvent() {
    const deleteBtns = document.querySelectorAll(".delete");
    deleteBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        this.onDelete(btn.id);
      });
    });
  }

  addDeleteListner(handler) {
    this.onDelete = handler;
  }

  pushContactIntoContainer(contact) {
    const html = this.generatCardContactHTML(contact);
    this.container.insertAdjacentHTML("afterbegin", html);
    this.applyDeleteEvent();
  }

  generateHTMLString() {
    const data = this.data;
    let html = "";
    if (Array.isArray(data)) {
      data.forEach((contact) => {
        html += this.generatCardContactHTML(contact);
      });
      return html;
    }
  }

  generatCardContactHTML(contact) {
    return ` <div class="card flex between">
            <div class="info flex column start">
              <span>${contact.name}</span>
              <span>${contact.phone}</span>
              <span>${contact.email}</span>
            </div>
            <button class="delete" id="${contact.id}"><i class="fa-solid fa-user-minus"></i></button>
        </div>`;
  }
}

export default new ContactContainerView();