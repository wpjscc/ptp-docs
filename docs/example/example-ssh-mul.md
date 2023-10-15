# 示例-多个 SSH 服务复用同一端口

## 要求

* 服务端IP
* 服务端暴露32123端口

## 1 配置

服务端配置
`ptps-ssh-mul.ini`
```ini
[common]
tunnel_80_port = 32123
```

客户端1配置
`ptpc-ssh-mul1.ini`

```ini
[common]
tunnel_host = x.x.x.x
tunnel_80_port = 32123
[ssh1]
local_host = 127.0.0.1
local_port = 22
domain = machine-a.example.com
```

客户端2配置
`ptpc-ssh-mul2.ini`

```ini
[common]
tunnel_host = x.x.x.x
tunnel_80_port = 32123
[ssh2]
local_host = 127.0.0.1
local_port = 22
domain = machine-b.example.com
```


`x.x.x.x` 是服务端ip


## 2 启动


服务端
```sh
./ptp -s --ini-path=./ptps-ssh-mul.ini -vvv
```


客户端1

```sh
./ptp -c --ini-path=./ptpc-ssh-mul1.ini -vvv
```

客户端2

```sh
./ptp -c --ini-path=./ptpc-ssh-mul2.ini -vvv
```


## 3 验证

在客户端1上访问客户端2

```sh
ssh -o 'proxycommand socat - PROXY:x.x.x.x:machine-a.example.com:22,proxyport=32123' test@machine-a
``` 

在客户端2 上访问客户端1
```sh
ssh -o 'proxycommand socat - PROXY:x.x.x.x:machine-b.example.com:22,proxyport=32123' test@machine-b

```

## 4 原理



