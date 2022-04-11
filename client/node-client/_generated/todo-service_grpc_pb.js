// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var todo$service_pb = require('./todo-service_pb.js');
var google_api_annotations_pb = require('./google/api/annotations_pb.js');

function serialize_proto_CreateRequest(arg) {
  if (!(arg instanceof todo$service_pb.CreateRequest)) {
    throw new Error('Expected argument of type proto.CreateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_CreateRequest(buffer_arg) {
  return todo$service_pb.CreateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_CreateResponse(arg) {
  if (!(arg instanceof todo$service_pb.CreateResponse)) {
    throw new Error('Expected argument of type proto.CreateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_CreateResponse(buffer_arg) {
  return todo$service_pb.CreateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_ReadRequest(arg) {
  if (!(arg instanceof todo$service_pb.ReadRequest)) {
    throw new Error('Expected argument of type proto.ReadRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_ReadRequest(buffer_arg) {
  return todo$service_pb.ReadRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_ReadResponse(arg) {
  if (!(arg instanceof todo$service_pb.ReadResponse)) {
    throw new Error('Expected argument of type proto.ReadResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_ReadResponse(buffer_arg) {
  return todo$service_pb.ReadResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ToDoServiceService = exports.ToDoServiceService = {
  create: {
    path: '/proto.ToDoService/Create',
    requestStream: false,
    responseStream: false,
    requestType: todo$service_pb.CreateRequest,
    responseType: todo$service_pb.CreateResponse,
    requestSerialize: serialize_proto_CreateRequest,
    requestDeserialize: deserialize_proto_CreateRequest,
    responseSerialize: serialize_proto_CreateResponse,
    responseDeserialize: deserialize_proto_CreateResponse,
  },
  read: {
    path: '/proto.ToDoService/Read',
    requestStream: false,
    responseStream: false,
    requestType: todo$service_pb.ReadRequest,
    responseType: todo$service_pb.ReadResponse,
    requestSerialize: serialize_proto_ReadRequest,
    requestDeserialize: deserialize_proto_ReadRequest,
    responseSerialize: serialize_proto_ReadResponse,
    responseDeserialize: deserialize_proto_ReadResponse,
  },
};

exports.ToDoServiceClient = grpc.makeGenericClientConstructor(ToDoServiceService);
