// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var math_pb = require('./math_pb.js');
var google_api_annotations_pb = require('./google/api/annotations_pb.js');

function serialize_proto_Request(arg) {
  if (!(arg instanceof math_pb.Request)) {
    throw new Error('Expected argument of type proto.Request');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_Request(buffer_arg) {
  return math_pb.Request.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_Response(arg) {
  if (!(arg instanceof math_pb.Response)) {
    throw new Error('Expected argument of type proto.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_proto_Response(buffer_arg) {
  return math_pb.Response.deserializeBinary(new Uint8Array(buffer_arg));
}


var MathServiceService = exports.MathServiceService = {
  add: {
    path: '/proto.MathService/Add',
    requestStream: false,
    responseStream: false,
    requestType: math_pb.Request,
    responseType: math_pb.Response,
    requestSerialize: serialize_proto_Request,
    requestDeserialize: deserialize_proto_Request,
    responseSerialize: serialize_proto_Response,
    responseDeserialize: deserialize_proto_Response,
  },
};

exports.MathServiceClient = grpc.makeGenericClientConstructor(MathServiceService);
