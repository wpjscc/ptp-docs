# 示例-点对点内网穿透-ssh-dns

## 要求

* 服务端IP
* 服务端暴露32123端口

## 1 配置


服务端配置
`ptps-p2p.ini`
```ini
[common]
tunnel_80_port = 32123
```

客户端1配置 
`ptpc-p2p-dns.ini` 提供dns服务，供客户端2查询

```ini
[common]
tunnel_host = 192.168.1.9
tunnel_80_port = 32123
[tcp]
ip=127.0.0.1
ports=3001
[udp]
ip=127.0.0.1
ports=3001
[p2p-ssh1]
tunnel_protocol = p2p
local_protocol = udp
local_host = 8.8.8.8
local_port = 53
domain = 127.0.0.1:4000
token = 123456
is_need_local = true
try_tcp = 1
```

客户端2配置
`ptpc-p2p-ssh.ini` 提供ssh服务供客户端1连接

```ini
[common]
tunnel_host = x.x.x.x
tunnel_80_port = 32123
[tcp]
ip=127.0.0.1
ports=4000
[udp]
ip=127.0.0.1
ports=4000
[p2p-ssh2]
tunnel_protocol = p2p
local_host = 127.0.0.1
local_port = 22
token = 123456
is_need_local = true
domain = 127.0.0.1:3001
try_tcp = 1
```


`x.x.x.x` 是服务端ip

::: tip

* token 一样才能连接上
* is_need_local 是否推送内网ip
  * 两个客户端在同一局域网下最好开启
* try_tcp 在udp 打通后会试着打通tcp，需要两端都开启
:::


## 2 启动


服务端
```sh
./ptp -s --ini-path=./ptps-p2p.ini -vvv
```


客户端1

```sh
./ptp -c --ini-path=./ptpc-p2p-dns.ini -vvv
```

客户端2

```sh
./ptp -c --ini-path=./ptpc-p2p-ssh.ini -vvv
```


## 3 验证

在客户端1上 ssh 登录到客户端2

```sh
ssh -p 3001 root@127.0.0.1
``` 

在客户端2 上 查寻 DNS(客户端1提供的dns服务)
```sh
dig @127.0.0.1 -p 4000 www.baidu.com
```

## 4 原理



