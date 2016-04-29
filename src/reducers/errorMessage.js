import C from '../constants';

// Updates error message to notify about the failed fetches.
export default function errorMessage(state = null, action) {
  const { type, error } = action;

  if (type === C.RESET_ERROR_MESSAGE) {
    return null;
  } else if (error) {
    if (typeof error === 'boolean') {
        return action.payload.response.error;
    } else if (typeof error === 'string') {
        return action.error;
    }
  }

  return state;
}