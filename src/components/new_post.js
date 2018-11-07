import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class newPost extends Component {
    renderField(field){
        return (
            <div className='form-group'>
            <label>{field.label}</label>
                <input className='form-control' type='text' {...field.input} />
            </div>
        )
    }
    renderTagsField(field){
        return (
            <div className='form-group'>
            <label>Categories</label>
                <input className='form-control' type='text' {...field.input} />
            </div>
        )
    }

    render(){
        return(
            <form>
                <Field name='title' label={'Title'} component={this.renderField} />
                <Field name='tags'  label={'Categories'} component={this.renderField} />
                <Field name='content'  label={'Post Body'} component={this.renderField} />
            </form>
        );
    }
}

export default reduxForm({
    form: 'PostsNewForm'
})(newPost)