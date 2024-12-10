"use client";

import { Field, Form, Formik, FormikProps } from "formik";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().required().min(5),
});

interface IRegisterForm {
    email: string;
    password: string;
}

export default function Page() {
    const initialValues: IRegisterForm = {
        email: "",
        password: "",
    };

    return (
        <div>
            <h1>Register Example</h1>
            <Formik
                initialValues={initialValues}
                onSubmit={(values) => {
                    console.log(values);
                }}
                validationSchema={LoginSchema}
            >
                {(props: FormikProps<IRegisterForm>) => {
                    const { values, errors, touched, handleChange } = props;
                    return (
                        <Form>
                            <div>
                                <label htmlFor="email">Email: </label>
                                <Field
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    value={values.email}
                                >
                                    {touched.email && errors.email ? (
                                        <div className="text-red-500">
                                            {errors.email}
                                        </div>
                                    ) : null}
                                </Field>
                            </div>
                            <div>
                                <label htmlFor="password">Password: </label>
                                <Field
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    value={values.password}
                                >
                                    {touched.password && errors.password ? (
                                        <div className="text-red-500">
                                            {errors.password}
                                        </div>
                                    ) : null}
                                </Field>
                            </div>
                            <div>
                                <button type="submit">Submit</button>
                            </div>
                        </Form>
                    );
                }}
            </Formik>
        </div>
    );
}
