import './addUser.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import axios from 'axios';
import { useHistory } from 'react-router';
import { useContext } from 'react';
import { UserContext } from '../App';
// import {Lable} from 'react-router-dom';

export default function AddUser(){
    const history = useHistory();
    const user = useContext(UserContext);
    const schema = Yup.object().shape({
        username:Yup.string()
        .min(6,"Too Short!")
        .max(12,"Too Long!")
        .required("Required"),
        email:Yup.string()
        .email("Invalid Email")
        .required("Required"),
        company:Yup.string()
        .required("Required"),
        job:Yup.string()
        .required("Required"),
        firstName:Yup.string()
        .required("Required"),
        lastName:Yup.string()
        .required("Required"),
        address:Yup.string()
        .required("Required"),
        country:Yup.string()
        .required("Required"),
    })

    return (
        <>
        <p>New User</p>
        <div className="outercontainer">
            <div className="innercontainer">
                <h3>Add User</h3>
                <Formik 
                initialValues={
                 {  username:"",
                    email:"",
                    job:"",
                    company:"",
                    firstName:"",
                    lastName:"",
                    address:"",
                    country:""
                  }
                }

                validationSchema={schema}
                onSubmit={async(values) => {
                    console.log(values)
                    try{
                        let response= await axios.post("https://611f26749771bf001785c74e.mockapi.io/users/",{
                            username:values.username,
                    email:values.email,
                    job:values.job,
                    company:values.company,
                    firstName:values.firstName,
                    lastName:values.lastName,
                    address:values.address,
                    country:values.country,
                    avatar:"https://cdn.fakercloud.com/avatars/deviljho__128.jpg"
                   }) 
                   console.log(response)
                   window.alert("New User Added");
                   user.getUser();
                   history.push("/users")
                    }
                    catch(error)
                    {
                        console.lo(error)
                    }
                }}>
                    {()=>{
                        return(
                            <>
                             <Form>
                                <div>
                                    <lable>Username </lable>
                                   <div> <Field name="username" type="text"/></div>
                                    <ErrorMessage  name="username">{msg => <div className="error"> {msg}</div>}</ErrorMessage>
                                    
                                </div><br/>
                                <div>
                                    <lable>Email </lable>
                                   <div> <Field name="email" type="email"/></div>
                                    <ErrorMessage name="email" >{msg => <div className="error"> {msg}</div>}</ErrorMessage>
                                </div><br/>
                                <div>
                                    <lable>Job Title </lable>
                                    <div> <Field name="job" type="text"/></div>
                                    <ErrorMessage name="job">{msg => <div className="error"> {msg}</div>}</ErrorMessage>
                                </div><br/>
                                <div>
                                    <lable>Company </lable>
                                    <div> <Field name="company" type="text"/></div>
                                    <ErrorMessage name="company">{msg => <div className="error"> {msg}</div>}</ErrorMessage>
                                </div><br/>
                                <div>
                                    <lable>FirstName </lable>
                                    <div> <Field name="firstName" type="text"/></div>
                                    <ErrorMessage name="firstName">{msg => <div className="error"> {msg}</div>}</ErrorMessage>
                                </div><br/>
                                <div>
                                    <lable>LastName </lable>
                                    <div> <Field name="lastName" type="text"/></div>
                                    <ErrorMessage name="lastName">{msg => <div className="error"> {msg}</div>}</ErrorMessage>
                                </div><br/>
                                <div>
                                    <lable>Address </lable>
                                    <div> <Field name="address" type="text"/></div>
                                    <ErrorMessage name="address">{msg => <div className="error"> {msg}</div>}</ErrorMessage>
                                </div><br/>
                                <div>
                                    <lable>Country </lable>
                                    <div><Field name="country" type="text"/></div>
                                    <ErrorMessage name="country">{msg => <div className="error"> {msg}</div>}</ErrorMessage>
                                </div><br/>
                                <button type="submit" className="imageButton">Submit</button>
                            </Form>
                            </>
                        )
                    }}
                </Formik>


            </div>
        </div>
        </>
    )

}