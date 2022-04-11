const grpc = require('@grpc/grpc-js');
const { ToDoServiceClient } = require('./../_generated/todo-service_grpc_pb');
const { ReadRequest } = require('./../_generated/todo-service_pb');

const todoClient = new ToDoServiceClient(
    "localhost:4040",
    grpc.credentials.createInsecure(),
    { 'grpc.enable_http_proxy': 0 }
);

const getTodo = (id) => {

  const readRequest = new ReadRequest()
  readRequest.setId(id)

  return new Promise((resolve, reject) => {
    todoClient.read(readRequest, new grpc.Metadata(),(err, resp) => {
      if(err) {
        reject(err)
      } else {
        resolve(resp.toObject().todo)
      }
    })
  })
}

module.exports = { getTodo }