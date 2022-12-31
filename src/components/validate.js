export const validate = (data , type) => {

    const error = {};

    if (!data.email){
        error.email = "ایمیل را وارد کنید";
    } else if (! /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(data.email)){
        error.email="ادرس ایمیل نامعتبر است"
    } else {
        delete error.email;
    }

    if (!data.password) {
        error.password = "پسورد را وارد کنید"
    } else if ( data.password.length < 5){
        error.password = "پسورد باید ۵ یا بیشتر باشد"
    } else {
        delete error.password;
    }

    if(type === "signUp"){
        if (!data.name.trim()){
            error.name="نام را وارد کن";
        } else {
            delete error.name;
        }

        if (!data.phone) {
            error.phone = "شماره موبایل را وارد کنید"
        } else if ( data.phone.length < 11){
            error.phone = "شماره موبایل  باید 7 یا بیشتر باشد"
        } else {
            delete error.phone;
        }
    }

    return error;
}