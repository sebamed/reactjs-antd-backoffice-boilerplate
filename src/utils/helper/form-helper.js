export const checkForm = (e, form, callback) => {
    e.preventDefault();
    form.validateFields((error, values) => {
        if(!error) {
            callback(values);
        }
    });
}