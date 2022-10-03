import throttle   from "../../node_modules/lodash.throttle";

const ref = {
    form: document.querySelector(`.feedback-form`),
    email: document.querySelector(`.feedback-form input`),
    message : document.querySelector(`.feedback-form textarea`),
};

ref.form.addEventListener(`input`, throttle(onFormData, 500));
ref.form.addEventListener(`submit`, onSubmitForm);

const formData = {}
const LOCAL_STORAGE_FORM_STATE = 'feedback-form-state';

function onFormData(evt) {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(LOCAL_STORAGE_FORM_STATE, JSON.stringify(formData));
}
function onSubmitForm(evt) {
    console.log(JSON.parse(localStorage.getItem(LOCAL_STORAGE_FORM_STATE)));
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem(LOCAL_STORAGE_FORM_STATE);
    
}
function dataFromLocalStorage() {
    const data = JSON.parse(localStorage.getItem(LOCAL_STORAGE_FORM_STATE));
    if (data) {
        ref.email.value = data.email;
        ref.message.value = data.message;
    }
};
dataFromLocalStorage()