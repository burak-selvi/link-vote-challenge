import { ActionType } from './actions';

const initialState = {
  message: null
};

export default function layout(state = initialState, action) {
  switch (action.type) {
    case ActionType.SHOW_MESSAGE:
      return {
        ...state, message: action.payload
      };

    default:
      return { ...state }
  }
}