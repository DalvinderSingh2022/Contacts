class AddContactView {
  modal = document.querySelector(".add-contact");
  formContainer = document.querySelector(".add-contact form");
  inputName = this.formContainer.querySelector(".name-input");
  inputPhone = this.formContainer.querySelector(".phone-input");
  inputEmail = this.formContainer.querySelector(".email-input");
  addContactBtn = document.querySelector(".add-btn");

  constructor() {
    this.addContactBtn.addEventListener("click", this.toggleModal.bind(this));
    this.formContainer.querySelector(".close").addEventListener("click", this.toggleModal.bind(this));
  }

  toggleModal(event) {
    event.preventDefault();
    this.modal.classList.toggle("hide");
  }

  addContactSubmitListner(handler) {
    if (typeof handler !== "function")
      throw new TypeError("handler must be a function");
    this.formContainer.addEventListener("submit", handler.bind(this));
  }

  clearForm() {
    this.inputName.value = "";
    this.inputEmail.value = "";
    this.inputPhone.value = "";
  }

  get Name() {
    return this.inputName.value;
  }

  get Phone() {
    return this.inputPhone.value;
  }

  get Email() {
    return this.inputEmail.value;
  }
}

export default new AddContactView();