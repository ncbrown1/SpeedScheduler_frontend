const RESET_ERROR_MESSAGE = 'ss/err/RESET_ERROR_MESSAGE';

export default function reducer(state = null, action) {
  const { type, error } = action;

  if (type === RESET_ERROR_MESSAGE) {
    return null;
  } else if (error) {
    if (typeof error === 'boolean') {
        return JSON.stringify(action.payload);
    } else if (typeof error === 'string') {
        return action.error;
    }
  }

  return state;
}

export function resetErrorMessage() {
  return {
    type: RESET_ERROR_MESSAGE
  }
}