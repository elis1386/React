import { Authors } from '../../utils/costans'


export const ADD_MESSAGE = "MESSAGES::ADD_MESSAGE";
export const DELETE_MESSAGE = "MESSAGES::DELETE_MESSAGE";

export const addMessage = (chatId, message) => ({
  type: ADD_MESSAGE,
  payload: { chatId, message },
});

export const deleteMessage = (chatId, idToDelete) => ({
  type: DELETE_MESSAGE,
  payload: {
    chatId,
    idToDelete,
  },
});


let timeout;

export const addMessageWithReply = (chatId, message) => (dispatch) => {
  dispatch(addMessage(chatId, message));

  if (message.author !== Authors.bot) {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      const botMessage = {
        author: Authors.bot,
        id: `mess${Date.now()}`,
        text: "i am a bot",
      };
      dispatch(addMessage(chatId, botMessage));
    }, 1500);
  }
};