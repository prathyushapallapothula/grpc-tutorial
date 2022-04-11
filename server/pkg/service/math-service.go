package service

import (
	"context"

	v1 "example.com/abc/server/pkg/api/v1"
)

type MathServer struct {
	v1.UnimplementedMathServiceServer
}

func (s *MathServer) Add(ctx context.Context, req *v1.Request) (*v1.Response, error) {
	a, b := req.GetA(), req.GetB()
	result := a + b

	return &v1.Response{Result: result}, nil
}
