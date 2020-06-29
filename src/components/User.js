import React from 'react'
import RegisterForm from './RegisterForm'
import LoginForm from './LoginForm'
import withToggle from "../hoc/withToggle";

class  User extends React.Component {

    render(){
      const {isOn:isRegister, handleChange} = this.props
    
      return (
        <div className="pt-3">
            <div className="form-check">
               <input checked={isRegister} onChange={handleChange}
                type="checkbox"  name="isRegister" id="isRegister"  className="form-check-input" 
                />
                <label className="form-check-label" htmlFor="isRegister">Switch to {isRegister ? 'Login': 'Register'}</label>
            </div>
            <hr />

           <h2>{isRegister ? 'Register': 'Login'}</h2>
          
           {isRegister ? <RegisterForm /> : <LoginForm />}
        </div>
    )
    }
}
export default withToggle(User);