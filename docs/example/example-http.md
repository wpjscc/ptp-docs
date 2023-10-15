# 示例-通过自定义域名访问内网的 Web 服务

## 要求

* 服务端IP
* 服务端暴露32123端口



## 1 配置

服务端配置
`ptps-web.ini`
```ini
[common]
tunnel_80_port = 32123
```

客户端配置
`ptpc-web.ini`

```ini
[common]
tunnel_host = x.x.x.x
tunnel_80_port = 32123
[web]
local_host = 127.0.0.1
local_port = 8080
local_replace_host = true
domain = local-web.test,www.domain.com
```

`x.x.x.x` 服务端ip


## 2 启动


服务端
```sh
./ptp -s --ini-path=./ptps-web.ini -vvv
```


客户端

```sh
./ptp -c --ini-path=./ptpc-web.ini -vvv
```

## 3 验证

本地添加host

```
x.x.x.x local-web.test
```

或者域名解析 www.domain.com A 记录指向服务端 ip x.x.x.x


访问 

http://local-web.test:32123

http://www.domain.com:32123



## 4 原理



