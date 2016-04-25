import C from '../constants';

// Resets the currently visible error message.
export function resetErrorMessage() {
  return {
    type: C.RESET_ERROR_MESSAGE
  }
}