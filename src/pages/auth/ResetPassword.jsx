// import React, { useEffect, useState, useContext } from 'react'
// import { Form, Button, Container, Alert } from 'react-bootstrap'
// import CustomSelectField from '../../components/elements/fields/CustomSelectField';
// import ApiService from '../../helpers/ApiServices';
// import { useForm } from 'react-hook-form'
// import TextField from '../../components/elements/fields/TextField';
// import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
// import { getModelRoute, showMessage } from '../../helpers/Utils';
// import { UserContext } from '../../states/contexts/UserContext';

// export default function ResetPassword() {
//     const [isValidToken, setIsValidToken] = useState(false)

//     const { user } = useContext(UserContext)

//     const { register, control, reset, handleSubmit, getValues, setValue, watch, formState: { errors } } = useForm();
//     const navigate = useNavigate();
//     const { token } = useParams()
//     const [searchParams] = useSearchParams();

//     const onSubmit = (formData) => {
//         return resetPasswordHander(formData);
//     }

//     const resetPasswordHander = (data) => {
//         console.log(data)
//         console.log(getModelRoute(user))
//         // console.log(model)

//         if (data.passwordConfirm == data.password) {
//             ApiService.patch(`shop/user/resetPassword/${token}?model=${searchParams.get('model')}`, data).then(response => {
//                 console.log(response);

//                 if (response.data.isSuccess) {
//                     navigate('/login')
//                     showMessage("Password reset successfull.", "success")
//                 } else {
//                     // console.log(response?.data.message)
//                     // showMessage(response?.data.message, "error")
//                 }

//             }).catch(err => {
//                 showMessage(err.response.data.message, "error")
//             })
//         } else {
//             showMessage("Passwords are not the same!", "warning")
//         }
//     }

//     const checkResetTokenValidity = () => {
//         ApiService.patch(`shop/user/checkResetPassword/${token}?model=${searchParams.get('model')}`).then(response => {
//             console.log(response);

//             if (response.data.isSuccess) {
//                 setIsValidToken(true)

//             } else {
//                 // console.log(response?.data.message)
//                 // showMessage(response?.data.message, "error")
//                 setIsValidToken(false)
//             }

//         }).catch(err => {
//             setIsValidToken(false)
//             // showMessage(err.response.data.message, "error")
//         })
//     }

//     useEffect(() => {
//         checkResetTokenValidity()
//     }, []);

//     return (
//         <Container>
//             {isValidToken ?
//                 <Alert show={true} variant="info" >
//                     <p><strong>NEW PASSWORD</strong> </p>

//                     Create a new password that you don’t currently use.Please make sure to meet all the security standards when creating your password:

//                     <ul >
//                         <li style={{ listStyleType: "circle" }}>
//                             Password should consist of a minimum of 8 characters
//                         </li>
//                         <li style={{ listStyleType: "circle" }}>
//                             It should include capital and lowercase letters, as well as at least one special characte
//                         </li>
//                     </ul>

//                     <Form onSubmit={handleSubmit(onSubmit)}>
//                         <TextField
//                             register={register}
//                             errors={errors}
//                             field={{
//                                 description: "Please provide us your registered email address.",
//                                 label: "CREATE NEW PASSWORD",
//                                 fieldId: "password",
//                                 placeholder: "",
//                                 type: "password",
//                                 required: true,
//                                 validationMessage: "Please enter the email of the registered user!"
//                             }}
//                             changeHandler={null}
//                             blurHandler={null}
//                         />

//                         <TextField
//                             register={register}
//                             errors={errors}
//                             field={{
//                                 description: "Please provide us your registered email address.",
//                                 label: "CONFIRM YOUR PASSWORD",
//                                 fieldId: "passwordConfirm",
//                                 placeholder: "",
//                                 type: "password",
//                                 required: true,
//                                 validationMessage: "Please enter the email of the registered user!"
//                             }}
//                             changeHandler={null}
//                             blurHandler={null}
//                         />
//                         <Button type="submit">Submit</Button>
//                     </Form>
//                 </Alert>
//                 :

//                 <div style={{ color: 'rgb(128, 128, 128)', fontSize: '3rem', fontWeight: 100, display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center", height: '70vh' }}>The page you're attempting to access is invalid due to an expired reset token.</div>
//             }

//         </Container >

//     )
// }

import React from "react";

const ResetPassword = () => {
  return <div>ResetPassword</div>;
};

export default ResetPassword;
