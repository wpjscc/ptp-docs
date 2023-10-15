# 示例-为本地 HTTP 服务启用 HTTPS

## 要求

* 服务端域名
* 服务端暴露32123,32124端口
* ssl证书



## 1 配置

服务端配置
`ptps-https.ini`
```ini
[common]
tunnel_host = www.domain.com
tunnel_80_port = 32123
tunnel_443_port = 32124
[cert]
www.domain.com = /cert/www.domain.com.pem
```

::: tip
`www.domain.com.pem` PEM must be contains certificate and private key
:::


客户端配置
`ptpc-https.ini`

```ini
[common]
tunnel_host = www.domain.com
tunnel_80_port = 32123
tunnel_80_port = 32124
[web]
local_host = 127.0.0.1
local_port = 8080
local_replace_host = true
domain = www.domain.com
```

::: tip
将 `www.domain.com` 换成 你自己的服务端域名
:::

## 2 启动


服务端
```sh
./ptp -s --ini-path=./ptps-https.ini -vvv
```


客户端

```sh
./ptp -c --ini-path=./ptpc-https.ini -vvv
```

## 3 验证

域名解析 www.domain.com A 记录指向服务端 ip x.x.x.x


访问 


https://www.domain.com:32124



## 4 原理



