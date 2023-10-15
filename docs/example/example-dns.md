# 示例-转发 DNS 查询请求

## 要求

* 服务端IP
* 服务端暴露32123,32130端口



## 1 配置

服务端配置
`ptps-dns.ini`
```ini
[common]
tunnel_80_port = 32123
[udp]
ip = x.x.x.x
ports = 32130
```

客户端配置
`ptpc-dns.ini`

```ini
[common]
tunnel_host = x.x.x.x
tunnel_80_port = 32123
[dns]
local_protocol = udp
local_host = 8.8.8.8
local_port = 53
domain = udp://x.x.x.x:32130
```

`x.x.x.x` 服务端ip


## 2 启动


服务端
```sh
./ptp -s --ini-path=./ptps-dns.ini -vvv
```


客户端

```sh
./ptp -c --ini-path=./ptpc-dns.ini -vvv
```

## 3 验证

```sh
dig @x.x.x.x -p 32130 www.baidu.com
```



## 4 原理



