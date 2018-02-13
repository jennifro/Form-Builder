import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { 
  FormGroup, 
  FormControl, 
  InputGroup, 
  ButtonToolbar, 
  Button, 
  DropdownButton, 
  MenuItem } 
  from 'react-bootstrap';

const questionOptions = ['Yes / No', 'Text', 'Number']

class DropdownOptions extends Component {
  render() {
    return (
      <DropdownButton id="dropdown-btn" pullRight
        componentClass={InputGroup.Button}
        ref={(input) => { this.questionType = input; }} 
        title=" " name=""
        value=""
      >
        { this.props.questionTypes.map((option, i) => {  
          return (
            <MenuItem eventKey={i} >
              {option}
            </MenuItem>
          )
        })}
      </DropdownButton>
    );
  } 
}

DropdownOptions.propTypes = {
  questionTypes: PropTypes.array
}


class FormButtonToolbar extends Component {
  render() {
    return (
      <ButtonToolbar>
        <Button type="submit"
          onClick={()=> {this.props.onClick()}}
        >
          Add Sub-Input
        </Button>
        <Button>Delete</Button>
      </ButtonToolbar>
    );
  }
}




class FormButtonToolbar extends Component {
  render() {
    return (
      <ButtonToolbar>
        <Button type="submit"
          onClick={(e)=> {this.props.onClick(e)}}
        >
          Add Sub-Input
        </Button>
        <Button>Delete</Button>
      </ButtonToolbar>
    );
  }
}

// 
class CustomInput extends Component {
  render() {
    return (
        <form onSubmit={(e) => {e.preventDefault(); }} >
          <FormGroup controlId='' className="custom-input-box" >
            <InputGroup>
              <FormControl ref={(input) => { this.questionInput = input; }}
                type="text" name="customInputField"  
              />
              <DropdownOptions questionTypes={questionOptions} />
            </InputGroup>
            <FormButtonToolbar onClick={() => { 
              store.dispatch({
                type: 'ADD_FORM_QUESTION',
                text: this.questionInput.value,
                id: questionID++
              });
              this.questionInput.value = ' ' 
            }} />
          </FormGroup>
        </form>
    );
  }
}


// make the onClick so it shows a blank customInput
function CreateFormButton() {
  return (
    <Button onClick={ (e) => { alert('things and stuff')} }> Add Input </Button>
  )
}


export default function CreateForm() {
  return (
    <div>
      <CustomInput />
      <CreateFormButton />
    </div>
  )
}
