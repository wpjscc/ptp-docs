# 示例-安全地暴露内网服务

## 要求

* 服务端IP
* 服务端暴露32123端口

## 1 配置



服务端配置
`ptps-ssh-secret.ini`
```ini
[common]
tunnel_80_port = 32123
```

客户端1配置
`ptpc-ssh-secret1.ini`

```ini
[common]
tunnel_host = x.x.x.x
tunnel_80_port = 32123
[tcp]
ip=127.0.0.1
ports=3000
[ssh1]
local_host = 127.0.0.1
local_port = 22
token = 123456
is_private = true
domain = 127.0.0.1:4000
visit_domain = 127.0.0.1:3000
```

客户端2配置
`ptpc-ssh-secret2.ini`

```ini
[common]
tunnel_host = x.x.x.x
tunnel_80_port = 32123
[tcp]
ip=127.0.0.1
ports=4000
[ssh2]
local_host = 127.0.0.1
local_port = 22
token = 123456
is_private = true
domain = 127.0.0.1:3000
visit_domain = 127.0.0.1:4000
```


`x.x.x.x` 是服务端ip

## 2 启动


服务端
```sh
./ptp -s --ini-path=./ptps-ssh.ini -vvv
```


客户端1

```sh
./ptp -c --ini-path=./ptpc-ssh-secret1.ini -vvv
```

客户端2

```sh
./ptp -c --ini-path=./ptpc-ssh-secret2.ini -vvv
```


## 3 验证

在客户端1上访问客户端2

```sh
ssh -p 3000 root@127.0.0.1
``` 

在客户端2 上访问客户端1
```sh
ssh -p 4000 root@127.0.0.1
```

## 4 原理



