import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

const NewKegForm = (props) => {
  const kegFormCardStyle={
    backgroundColor: '#ececeb',
    height: '100%',
    marginBottom: '5px'
  };
  const buttonStyle = {
    marginBottom: '5px',
    width: '100%',
    backgroundColor: '#e25822'
  };
  const titleStyle = {
    marginTop: '5px',
  };
  let _name = null;
  let _type = null;
  let _brewer = null;
  let _alcohol = null;
  let _description = null;
  let _dateTapped = null;
  let _img = null;
  const handleSubmission = (event) => {

    event.preventDefault();
    props.onNewKeg({name: _name.value, type:_type.value, alcohol: _alcohol.value, brewer: _brewer.value, description: _description.value, contents: 1000, dateTapped: _dateTapped.value, img: _img.value, id: v4() });
    props.onTogglingNewKegForm();
    _name = '';
    _description = '';
    _type = '';
    _brewer = '';
    _alcohol = '';
    _dateTapped = '';
    _img = '';    
  };
  return (
    <div className='card' style={kegFormCardStyle}>
      <h4 style={titleStyle} className='center'>Add a New Keg to Inventory</h4>
      <form className='container' onSubmit={handleSubmission}>
        <label>Beer Name:
          <input type='text' id='name' placeholder='name' ref={(input) => {_name=input;}}/>
        </label>
        <label>Brewer:
          <input type='text' id='brewer' placeholder='brewer' ref={(input) => {_brewer=input;}}/>
        </label>
        <label>Type:
          <input type='text' id='type' placeholder='type' ref={(input) => {_type=input;}}/>
        </label>
        <label>Alcohol%
          <input type='number' id='alcohol' placeholder='alcohol' ref={(input) => {_alcohol=input;}}/>
        </label>
        <label>Description:
          <input type='text' id='description' placeholder='description' ref={(input) => {_description=input;}}/>
        </label>
        <label>Date Added:
          <input type='date' id='date' placeholder='date' ref={(input) => {_dateTapped=input;}}/>
        </label>
        <label>Add Image:
          <input type='text' id='img' placeholder='image url' ref={(input) => {_img=input;}}/>
        </label>
        <button style={buttonStyle} className='button btn-large '>Add Keg</button>
      </form>
    </div>

  );
};

NewKegForm.propTypes = {
  onKegCreation: PropTypes.func
};
 
export default NewKegForm;