import React from 'react';

export default class Signup extends Component {
    render() {
        return (
            <form onSubmit={handleSubmit} className={`${className} sign-in-form`}>
                <Field className='sign-in-form__name'
                type='text'
                title='Name'
                placeholder='Name'
                name='name'
                component={FormInput}/>
                
                <Field className='sign-in-form__email'
                type='email'
                title='Email'
                placeholder='Email'
                name='email'
                component={FormInput}/>
                
                <Field className='sign-in-form__password'
                title='Password'
                type="password"
                name="password"
                placeholder="Password"
                component={FormInput}/>
                
                <Field className='sign-in-form__login'
                onClick={() => console.log('tryna submit')}
                type='submit'
                title='Login'
                name='login'
                component={FormButton}/>
            </form>
        )
    }
}