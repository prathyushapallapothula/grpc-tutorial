# Generate pb files in golang from proto files
protoc --proto_path=api/v1/proto --proto_path=third_party --go_out=server/pkg/api/ --go-grpc_out=server/pkg/api/ api/v1/proto/*.proto

# REST, on server side
protoc --proto_path=api/v1/proto --proto_path=third_party --grpc-gateway_out=logtostderr=true:server/pkg/api/ api/v1/proto/*.proto


# Generate pb files in node from protos files
# npm i grpc-tools
./client/node-client/node_modules/.bin/grpc_tools_node_protoc --proto_path=api/v1/proto --js_out=import_style=commonjs,binary:client/node-client/_generated --grpc_out=grpc_js:client/node-client/_generated api/v1/proto/*.proto