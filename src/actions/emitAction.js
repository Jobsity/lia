import io from 'socket.io-client';

const rootURL = 'ws:localhost/8080';
let socket = io(rootURL)

const emitAction = (actionCreator) => {
  return (...args) => {
    const result = actionCreator.apply(this, args)
    socket.emit(result.key, {
      ...result.payload,
      type: result.type
    })
    return result
  }
}

export default emitAction;