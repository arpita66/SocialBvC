export default function validateInfo(values){
    let errors = {}

    //
    if(!values.email){
        errors.email = "Email Required"
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
        errors.email = "Email address is invalid"
    }

    if(!values.password){
        errors.password = "Password is required"
    }else if(values.password.length < 6){
        errors.password = "Password needs to be atleast 6 characters"
    }

    return errors;


}