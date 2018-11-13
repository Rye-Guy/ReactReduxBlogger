import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class newPost extends Component {
    renderField(field){
        return (
            <div className='form-group'>
            <label>{field.label}</label>
                <input className='form-control' type='text' {...field.input} />
                {field.meta.touched ? field.meta.error : ''}
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

    onSubmit(values){
        console.log(values)
    }

    render(){
        const { handleSubmit } = this.props;
        return(
            <form onSubmit={this.onSubmit.bind(this)}>
                <Field name='title' label={'Title'} component={this.renderField} />
                <Field name='categories'  label={'Categories'} component={this.renderField} />
                <Field name='content'  label={'Post Body'} component={this.renderField} />
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
        );
    }
}

function validate(values){
    const errors = {};

    //validate inputs from values
    if(!values.title){
        errors.title = "Enter a title!";
    }

    if(!values.categories){
        errors.categories = "Please select a category";
    }

    if(!values.content){
        errors.content = 'Enter some damn info for your post... Fool!'
    }
    //we are checking to see if errors has any properties to it and if it does REDUX will not send the form 
    return errors; 
}

export default reduxForm({
    form: 'PostsNewForm',
    validate: validate
})(newPost)