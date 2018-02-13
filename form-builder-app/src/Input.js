import React, { Component } from 'react';
import { store } from './App';
import PropTypes from 'prop-types'
import { 
  InputGroup, 
  ButtonToolbar, 
  Button, 
  DropdownButton, 
  MenuItem } 
  from 'react-bootstrap';


const questionOptions = ['Yes / No', 'Text', 'Number']

class DropdownMenu extends Component {
  render() {
    return (
      <DropdownButton id="dropdown-btn" pullRight
        componentClass={InputGroup.Button}
        title=" "
        value={this.props.typeValue}
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

DropdownMenu.propTypes = {
  questionTypes: PropTypes.array
}



class FormButtonToolbar extends Component {
  render() {
    return (
      <ButtonToolbar>
        <Button type="submit"
          onClick={this.props.onSubmitOnClick}
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
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    var textInput = this.props.questionText ? this.props.questionText : ''
    var typeInput = this.props.questionType ? this.props.questionType : ''
    this.state = {
      textInput: textInput,
      typeInput: typeInput
    }
  }

  handleChange(event) {
    this.setState({
      textInput: event.target.value,
      typeInput: event.target.value
    })
  } 
  render() {
    return (
      <form onSubmit={(e) => { e.preventDefault(); }} >
        <input type="text"
          ref={(input) => { this.questionInput = input; }}
          name="customInputField" 
          value={ this.state.textInput }
          onChange={this.handleChange}
        />
        <DropdownMenu 
          ref={(input) => { this.questionType = input; }} 
          questionTypes={questionOptions} 
          value={ this.state.typeInput }
        />
        <FormButtonToolbar />
      </form>
    );
  }
}


class CreateFormButton extends Component {
  render() {
    return (
      <Button onClick={ (e) =>{
        store.dispatch({
          type: 'ADD_FORM_QUESTION',
          questionText: 'hi',
          questionType: 'hi again'
      })}}> 
        Add Input 
      </Button>
    )
  }
}


export default function CreateForm() {
  return (
    <div>
      <CustomInput />
      <CreateFormButton  />
    </div>
  )
}
