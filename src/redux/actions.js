export const showMessage = (message) => {
  return {
    type: ActionType.SHOW_MESSAGE,
    payload: message
  }
}

export const ActionType = {
  SHOW_MESSAGE: "SHOW_MESSAGE",
}