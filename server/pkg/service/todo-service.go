package service

import (
	"context"

	v1 "example.com/abc/server/pkg/api/v1"
)

type ToDoServer struct {
	v1.UnimplementedToDoServiceServer
}

func (s *ToDoServer) Read(ctx context.Context, req *v1.ReadRequest) (*v1.ReadResponse, error) {

	taskId := req.GetId()

	task := v1.ToDo{
		Id:          taskId,
		Title:       "study go",
		Description: "",
	}

	return &v1.ReadResponse{ToDo: &task}, nil
}
