import { useState, useEffect } from "react";
import { Logo, FormRow, Alert } from '../components';
import Wrapper from "../assets/wrappers/RegisterPage";

const initialState = {
    name: '',
    email: '',
    password: '',
    isMember: true,
    showAlert: false,
};

const Register = () => {

    const [values, setValues] = useState(initialState);

    //Global state and useNavigate

    //Setting isMember functionality for Toggling
const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember })
}

    //input event handler
    const handleChange = (e) => {
        console.log(e.target)
    }

    //form event handler for summition
    const onSubmit = (e) => {
        e.preventDefault()
        console.log(e.target)
    }

    return ( 
        <Wrapper className="full-page">
            <form className="form" onSubmit={onSubmit}>
                <Logo />
                <h3>{values.isMember ? 'Login': 'Register'}</h3>
                {values.showAlert && <Alert />}
                {/* Name input will display if isMember is false */}
                {!values.isMember && (
                    <FormRow
                    type='text'
                    name='name'
                    value={values.name}
                    handleChange={handleChange}
                 />
                )}
                {/* Email input */}
                <FormRow
                    type='email'
                    name='email'
                    value={values.email}
                    handleChange={handleChange}
                 />
                {/* Password input */}
                <FormRow
                    type='password'
                    name='password'
                    value={values.password}
                    handleChange={handleChange}
                 />
                <button type="submit" className="btn btn-block">
                    Submit
                </button>
                <p>
                    {values.isMember ? 'Not a member yet?': 'Already a member?'}
                    <button type="button" onClick={toggleMember} className='member-btn'>
                        {values.isMember ? 'Register': 'Login'}
                    </button>
                </p>
            </form>
        </Wrapper>
     );
}
 
export default Register;