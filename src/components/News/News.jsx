import React, {useState} from 'react'
import c from './News.module.css'
import {Formik, Form, Field, ErrorMessage, FieldArray, FastField} from "formik";
import * as Yup from 'yup'
import TextError from "./TextError";

const initialValues = {
    name: 'Eugene',
    email: '',
    channel: '',
    comment: '',
    address: '',
    social: {
        facebook: '',
        twitter: '',
    },
    phoneNumbers: ['', ''],
    phNumbers: [''],

}

const savedValues = {
    name: 'Eugene',
    email: 'bukadp@ukr.net',
    channel: 'dimpro',
    comment: 'Yo yo yo',
    address: 'Ukraine',
    social: {
        facebook: '',
        twitter: '',
    },
    phoneNumbers: ['', ''],
    phNumbers: [''],

}

const onSubmit = (values, onSubmitProps) => {
    console.log('Form data', values)
    console.log('submit props', onSubmitProps)
    onSubmitProps.setSubmitting(false)
}

const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email format').required('Required'),
    channel: Yup.string().required('Required'),
})

const validateComment = value => {
    let error
    if (!value) {
        error = 'Required'
    }
    return error
}

function NewsForm(props) {
    const [formValues, setFormValues] = useState(null)
    return (
        <Formik
            initialValues={formValues || initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            enableReinitialize
            //validateOnMount
            //validateOnChange={false}
            //validateOnBlur={false}
        >
            {formik => {
                console.log('Formik props', formik)
                return (
                    <Form>
                        <div className={c.form_control}>
                            <label htmlFor='name'>Name</label>
                            <Field type='text'
                                   id='name'
                                   name='name'
                            />
                            <ErrorMessage name='name' component={TextError}/>
                        </div>
                        <div className={c.form_control}>
                            <label htmlFor='email'>E-mail</label>
                            <Field type='email'
                                   id='email'
                                   name='email'
                            />
                            <ErrorMessage name='email'>
                                {
                                    (errorMsg) => <div className={c.error}>{errorMsg}</div>
                                }
                            </ErrorMessage>

                        </div>
                        <div className={c.form_control}>
                            <label htmlFor='channel'>Channel</label>
                            <Field type='text'
                                   id='channel'
                                   name='channel'
                                   placeholder={'Youtube channel name'}
                            />
                            <ErrorMessage name='channel'/>
                        </div>
                        <div className={c.form_control}>
                            <label htmlFor={'comment'}>Comment</label>
                            <Field as='textarea'
                                   id='comment'
                                   name='comment'
                                   validate={validateComment}
                            />
                            <ErrorMessage name='comment' component={TextError}/>
                        </div>
                        <div className={c.form_control}>
                            <label htmlFor='address'>Address</label>
                            <FastField name='address'>
                                {({field, form, meta}) => {
                                    // console.log('Field render')
                                    return (
                                        <div>
                                            <input type='text' {...field} />
                                            {meta.touched && meta.error ? (
                                                <div>{meta.error}</div>
                                            ) : null}
                                        </div>
                                    )
                                }}
                            </FastField>
                        </div>
                        <div className={c.form_control}>
                            <label htmlFor='facebook'>Facebook profile</label>
                            <Field type='text' id='facebook' name='social.facebook'/>
                        </div>
                        <div className={c.form_control}>
                            <label htmlFor='twitter'>Twitter profile</label>
                            <Field type='text' id='twitter' name='social.twitter'/>
                        </div>

                        <div className='form-control'>
                            <label htmlFor='primaryPh'>Primary phone number</label>
                            <Field type='text' id='primaryPh' name='phoneNumbers[0]'/>
                        </div>

                        <div className='form-control'>
                            <label htmlFor='secondaryPh'>Secondary phone number</label>
                            <Field type='text' id='secondaryPh' name='phoneNumbers[1]'/>
                        </div>

                        <div className='form-control'>
                            <label>List of numbers</label>
                            <FieldArray name='phNumbers'>
                                {fieldArrayProps => {
                                    //console.log('FieldArrayProps:', FieldArrayProps)

                                    const {push, remove, form} = fieldArrayProps
                                    const {values} = form
                                    const {phNumbers} = values
                                    //console.log('Form errors', form.errors)
                                    return (
                                        <div>
                                            {phNumbers.map((phNumber, index) => (
                                                <div key={index}>
                                                    <Field name={`phNumbers[${index}]`}/>
                                                    {index > 0 &&
                                                        <button type='button'
                                                                onClick={() => remove(index)}>-</button>}

                                                    <button type='button' onClick={() => push('')}>+</button>
                                                </div>
                                            ))
                                            }
                                        </div>
                                    )
                                }}
                            </FieldArray>
                        </div>
                        {/* <button type='button' onClick={() => formik.validateField('comment')}>Validate comments
                        </button>
                        <button type='button' onClick={() => formik.validateForm()}>Validate all</button>

                        <button type='button' onClick={() => formik.setFieldTouched('comment')}>Visit comments
                        </button>
                        <button type='button' onClick={() => formik.setTouched({
                            name: true,
                            email: true,
                            channel: true,
                            comment: true,
                        })}>Visit field</button>*/}

                        <button type='button' onClick={() => setFormValues(savedValues)}>Load save data</button>
                        <button type="submit" disabled={!formik.isValid || formik.isSubmitting}>Submit</button>
                    </Form>
                )
            }
            }

        </Formik>
    )
}


function News(props) {
    return (
        <div>
            <h1>News</h1>
            <NewsForm/>
        </div>
    )
}

export default News
