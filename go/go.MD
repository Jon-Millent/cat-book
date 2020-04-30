使用国内七牛云的 go module 镜像。
```
go env -w GO111MODULE=on
go env -w GOPROXY=https://goproxy.cn,direct
```

阿里云 Go Module 国内镜像仓库服务
```
go env -w GO111MODULE=on
go env -w GOPROXY=https://mirrors.aliyun.com/goproxy/,direct
```
