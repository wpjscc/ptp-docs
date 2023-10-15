# 示例-通过 SSH 访问内网机器

## 要求

* 服务端IP
* 服务端暴露32123,32223端口

## 1 配置

服务端配置 `ptps-ssh.ini`

```ini
[common]
tunnel_80_port = 32123

[tcp]
ip=x.x.x.x
ports=32223
```

客户端配置 `ptpc-ssh.ini`

```ini
[common]
tunnel_host = x.x.x.x
tunnel_80_port = 32123

[ssh1]
tunnel_protocol = tcp
local_host = 192.168.1.9
local_port = 22
domain = x.x.x.x:32223
```

`x.x.x.x` 是服务端ip


## 2 启动


服务端
```sh
./ptp -s --ini-path=./ptps-ssh.ini -vvv
```

客户端

```sh
./ptp -c --ini-path=./ptpc-ssh.ini -vvv
```


## 3 验证

```sh
ssh -p 32223 root@xxxxx
``` 

## 4 原理

