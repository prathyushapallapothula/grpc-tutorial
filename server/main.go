package main

import (
	"context"
	"log"
	"net"
	"net/http"

	v1 "example.com/abc/server/pkg/api/v1"
	service "example.com/abc/server/pkg/service"
	"github.com/grpc-ecosystem/grpc-gateway/runtime"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
)

func main() {
	lis, err := net.Listen("tcp", ":4040")
	if err != nil {
		log.Fatalln("Failed to listen:", err)
	}

	// Create a gRPC server object
	srv := grpc.NewServer()

	v1.RegisterMathServiceServer(srv, &service.MathServer{})
	v1.RegisterToDoServiceServer(srv, &service.ToDoServer{})
	go func() {
		log.Fatalln(srv.Serve(lis))
	}()

	// Create a client connection to the gRPC server we just started
	// This is where the gRPC-Gateway proxies the requests
	conn, err := grpc.DialContext(
		context.Background(),
		"0.0.0.0:4040",
		grpc.WithBlock(),
		grpc.WithTransportCredentials(insecure.NewCredentials()),
	)
	if err != nil {
		log.Fatalln("Failed to dial server:", err)
	}

	gwmux := runtime.NewServeMux()
	err = v1.RegisterMathServiceHandler(context.Background(), gwmux, conn)
	if err != nil {
		log.Fatalln("Failed to register gateway:", err)
	}
	err = v1.RegisterToDoServiceHandler(context.Background(), gwmux, conn)
	if err != nil {
		log.Fatalln("Failed to register gateway:", err)
	}

	gwServer := &http.Server{
		Addr:    ":4050",
		Handler: gwmux,
	}

	log.Println("Serving gRPC-Gateway on http://0.0.0.0:4050")
	log.Fatalln(gwServer.ListenAndServe())
}

// func main() {
// 	listner, err := net.Listen("tcp", ":4040")

// 	if err != nil {
// 		panic(err)
// 	}

// 	srv := grpc.NewServer()
// 	v1.RegisterMathServiceServer(srv, &service.MathServer{})
// 	v1.RegisterToDoServiceServer(srv, &service.ToDoServer{})
// 	reflection.Register(srv)

// 	if e := srv.Serve(listner); e != nil {
// 		panic(e)
// 	}

// }
