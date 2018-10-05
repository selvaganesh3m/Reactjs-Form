import React, {Component} from 'react';
import EmailInput from './form/email';
import PasswordInput from './form/password';
import PasswordConfirmationInput from './form/passwordConf'

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            emailErr: "",
            password: "",
            passwordErr: "",
            passwordConfirmation:"",
            passwordConfirmationErr:"",
        }
        this.emailInputHandler = this.emailInputHandler.bind(this);
        this.passwordInputHandler = this.passwordInputHandler.bind(this);
        this.passwordConfirmationInputHandler = this.passwordConfirmationInputHandler.bind(this);
        this.handleForm = this.handleForm.bind(this);
    }
    emailInputHandler(e){
         this.setState({
             email: e.target.value,
             emailErr:""
         })
    }
    passwordInputHandler(e){
        this.setState({
            password: e.target.value,
            passwordErr:""
        })
    }
    passwordConfirmationInputHandler(e){
        this.setState({
            passwordConfirmation: e.target.value,
            passwordConfirmationErr: ""
        })
    }
    handleForm(e){
        e.preventDefault(); 
           if(!this.validateEmail(this.state.email)){
               this.setState({
                   emailErr:"Email is Incorrect."
               })
           }
           if(this.state.password.length <= 5){
               this.setState({
                   passwordErr:"Password must have atleast 6 characters."
               })
           }
           if(this.state.password && this.state.password !== this.state.passwordConfirmation){
            this.setState({
                passwordConfirmationErr: "Password do not Match"
            })
        }

        setTimeout(()=>{
            if(!this.state.emailErr &&
                !this.state.passwordErr &&
                !this.state.passwordConfirmationErr){
                    alert("Form will be submitted");
                }
            
        }, 500)
           
    }
    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    render(){
        return(
            <form onSubmit ={this.handleForm}>
                <EmailInput 
                    email ={this.state.email}
                    emailErr={this.state.emailErr}
                    emailInputHandler={this.emailInputHandler}/>
                <PasswordInput 
                    password = {this.state.password}
                    passwordErr = {this.state.passwordErr}
                    passwordInputHandler={this.passwordInputHandler}/>
                <PasswordConfirmationInput 
                    passwordConfirmation = {this.state.passwordConfirmation}
                    passwordConfirmationErr = {this.state.passwordConfirmationErr}
                    passwordConfirmationInputHandler = {this.passwordConfirmationInputHandler}/>
                <button className="btn" type="submit">Sign Up</button>
            </form>
            )

    }
}
export default Form;