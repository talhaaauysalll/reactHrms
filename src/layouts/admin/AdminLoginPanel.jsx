import React from 'react'
import * as Yup from "yup";
import { Formik, Form,} from "formik";
import { Button} from "semantic-ui-react";
import HrmsTextInput from '../../utilities/customFormControls/HrmsTextInput';
export default function AdminLoginPanel() {
    const initialValues={adminName:"",password:""};
    const schema=Yup.object({
        adminName:Yup.string().required("Admin İsmi Zorunludur"),
        password:Yup.string().required("Parola Zorunludur")
    });
    return (
        <div>
           <Formik initialValues={initialValues} validationSchema={schema} onSubmit={(values)=>{}}>
                <Form className="ui form">
                    <HrmsTextInput name="adminName" placeholder="Admin İsmi"/>
                    <HrmsTextInput name="password" placeholder="Parola"/>
                    <Button inverted color="green" type="submit">Login</Button>
                </Form>
            </Formik> 
        </div>
    )
}
