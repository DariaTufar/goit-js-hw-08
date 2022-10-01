import throttle   from "../../node_modules/lodash.throttle";

const ref = {
    form: document.querySelector(`.feedback-form`),
    email: document.querySelector(`.feedback-form input`),
    message : document.querySelector(`.feedback-form textarea`),
};

ref.form.addEventListener(`input`, throttle(onFormData, 500));
ref.form.addEventListener(`submit`, onSubmitForm);

const formData = {}

function onFormData(evt) {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}
function onSubmitForm(evt) {
    console.log(JSON.parse(localStorage.getItem("feedback-form-state")));
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem("feedback-form-state");
    
}
function dataFromLocalStorage() {
    const data = JSON.parse(localStorage.getItem("feedback-form-state"));
    if (data) {
        ref.email.value = data.email;
        ref.message.value = data.message;
    }
};
dataFromLocalStorage()