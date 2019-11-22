import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

const NewKegForm = (props) => {
    let _name = null;
    let _type = null;
    let _brewer = null;
    let _description = null;
    let _dateTapped = null;
    let _img = null;
    const handleSubmission = (event) => {
        event.preventDefault();
        props.onKegCreation({name: _name.value, type:_type.value, brewer: _brewer, _description: _description.value, dateTapped: _dateTapped.value, img: _img.value, id: v4() });
        _name = '';
        _description = '';
        _type = '';
        _dateTapped = '';
        _img = '';
        
    }
    return (
        <div>
            <form onSubmit={handleSubmission}>
                <label for='name'>Beer Name:</label>
                <input type='text' id='name' placeholder='name' ref={(input) => {_name=input;}}/>
                <label for='brewer'>Brewer:</label>
                <input type='text' id='brewer' placeholder='brewer' ref={(input) => {_brewer=input;}}/>
                <label for='type'>Type:</label>
                <input type='text' id='type' placeholder='type' ref={(input) => {_type=input;}}/>
                <label for='description'>Description:</label>
                <input type='text' id='description' placeholder='description' ref={(input) => {_description=input;}}/>
                <label for='description'>Date Added:</label>
                <input type='date' id='date' placeholder='date' ref={(input) => {_dateTapped=input;}}/>
                <label for='img'>Add Image:</label>
                <input type='text' id='img' placeholder='image url' ref={(input) => {_img=input;}}/>
            </form>
        </div>

      );
}

NewKegForm.propTypes = {
    onKegCreation: PropTypes.func
}
 
export default NewKegForm;