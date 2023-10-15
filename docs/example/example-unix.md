# 示例-转发 Unix 域套接字

## 要求

* 服务端IP
* 服务端暴露32123端口



## 1 配置

服务端配置
`ptps-unix.ini`
```ini
[common]
tunnel_80_port = 32123
```

客户端配置
`ptpc-unix.ini`

```ini
[common]
tunnel_host = x.x.x.x
tunnel_80_port = 32123
[unix]
local_protocol = unix
local_host = /var/run/docker.sock
domain = local-unix.test,www.domain.com
```

`x.x.x.x` 服务端ip


## 2 启动


服务端
```sh
./ptp -s --ini-path=./ptps-unix.ini -vvv
```


客户端

```sh
./ptp -c --ini-path=./ptpc-unix.ini -vvv
```

## 3 验证

本地添加host

```
x.x.x.x local-unix.test
```

或者域名解析 www.domain.com A 记录指向服务端 ip x.x.x.x


访问 

curl http://local-unix.test:32123/version

curl http://www.domain.com:32123



## 4 原理



