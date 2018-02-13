import { combineReducers } from 'redux';


// actions.js
export const viewQuestions = (tabTitle) => {
  return {
    type: 'VIEW_QUESTIONS',
    tabTitle
  }
}

let questionID = 0;
// may need to add subinputID here as well
export const addFormQuestion = (questionText, questionType, subInput) => {
  return {
    type: 'ADD_FORM_QUESTION',
    questionId: questionID++, 
    questionText,
    questionType,
    subInput
  };
}

export const setTabView = (currentTab) => {
  return {
    type: 'SET_TAB_VIEW',
    currentTab
  }
}
// need to get the store for viewQuestions.
export const getJSON = (formInput) => {
  return {
    type: 'GET_JSON',
    jsonText: formInput
  };
}

// reducers
function viewQuestions(state = [], action) {
  switch (action.type) {
    case 'ADD_FORM_QUESTION':
      return [
        ...state, 
        {
          id: action.id,
          text: action.text,
          subInput: action.subInput
        }
      ];
    default:
      return state;
  }
}



function handleQuestion(state = [], action='ADD_FORM_QUESTION') {
  if (action.subInput) {
    return [
      ...state,
      { 
        id: action.id,
        text: action.text,
        subInput: action.subInput
      }
    ];
  }
}

function viewTab(state = 'CREATE_TAB', action) {
  switch (action.type) {
    case 'SET_TAB_VIEW':
      return action.currentTab
    default:
      return state
  }
}

// figure out how to get access to the store. may make this a container component that just returns the stringified version.
function jsonifyForm(state, action='GET_JSON') {
  return (
    JSON.stringify(viewQuestions.store)
  )
}


export const formBuilder = combineReducers({
  viewQuestions,
  handleQuestion,
  viewTab
})


