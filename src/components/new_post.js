import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions/index';

class newPost extends Component {
    renderField(field){
        const { meta: { touched, error } } = field;

        const className = `form-group ${touched && error ? 'has-danger': ''}` 

        return (
            <div className={className}>
            <label>{field.label}</label>
                <input className='form-control' type='text' {...field.input} />
                <div className="text-help">
                {touched ? error : ''}
                </div>
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

    onFormSubmit(ev){
        ev.preventDefault()
    }

    onSubmit(values){
        values.preventDefault()
        this.props.createPost(values)
    }

    render(){
        const { handleSubmit } = this.props;
        return(
            <form onSubmit={this.onSubmit.bind(this)}>
                <Field name='title' label={'Title'} component={this.renderField} />
                <Field name='categories'  label={'Categories'} component={this.renderField} />
                <Field name='content'  label={'Post Body'} component={this.renderField} />
                <button className="btn btn-primary" type="submit">Submit</button>
                <Link to="/"><button className="btn btn-secondary">Cancel</button></Link>
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
})(
    connect(null, {createPost})(newPost)
  )