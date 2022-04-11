package main

import (
	"fmt"
	"net/http"
	"strconv"

	v1 "example.com/abc/server/pkg/api/v1"
	"github.com/gin-gonic/gin"
	"google.golang.org/grpc"
)

func main() {
	conn, err := grpc.Dial("localhost:4040", grpc.WithInsecure())
	if err != nil {
		panic(err)
	}

	client := v1.NewMathServiceClient(conn)

	TodoClient := v1.NewToDoServiceClient(conn)

	g := gin.Default()

	g.GET("/add/:a/:b", func(ctx *gin.Context) {
		a, _ := strconv.ParseUint(ctx.Param("a"), 10, 64)
		b, _ := strconv.ParseUint(ctx.Param("b"), 10, 64)

		req := &v1.Request{A: int64(a), B: int64(b)}

		if response, err := client.Add(ctx, req); err != nil {
			fmt.Print(err)
		} else {
			ctx.JSON(http.StatusOK, gin.H{
				"result": fmt.Sprint(response.Result),
			})
		}

	})

	g.GET("/getToDo/:a", func(ctx *gin.Context) {
		a, _ := strconv.ParseUint(ctx.Param("a"), 10, 64)

		req := &v1.ReadRequest{Api: "v1", Id: int64(a)}

		if response, err := TodoClient.Read(ctx, req); err != nil {
			fmt.Print(err)
		} else {
			ctx.JSON(http.StatusOK, gin.H{
				"result": fmt.Sprint(response.ToDo),
			})
		}

	})

	if err := g.Run(":8080"); err != nil {
		fmt.Print("Failed to run server")
	}
}
