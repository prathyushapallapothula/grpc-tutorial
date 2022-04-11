<!-- start node-client -->
```
cd client/node-client
npm i
node index.js
```

<!-- start go-client -->
```
cd client/go-client
go run main.go
```

<!-- start go-server -->
```
cd server
go run main.go
```

<!-- Can use rest end point also-->
```
curl --location --request GET 'http://localhost:4050/v1/todo/109'
```