# 安全


```
local----------client----------server-------user

client <----->client
```


## client->server

可用tls和wss加密传输

client
```ini
[common]
tunnel_protocol = tls
```

server
```ini
[common]
tunnel_host = www.domain.com
tunnel_protocol = tls
[cert]
www.domain.com = /path/to/cert.pem
```

::: tip

当使用tls时如果没有/etc/ssl/cacert.pem 文件，可使用下面命令创建。客户端和服务端都需要

```sh

mkdir -p /etc/ssl/

wget https://curl.se/ca/cacert.pem  -O /etc/ssl/cacert.pem
```

:::


##  client<-->client

p2p打通后，udp是明文传输的，可使用 `AES-256-CBC`加密
```ini
[p2p]
is_encrypt = true
encrypt_key = xxxxxxxx
```
::: warning
仅对传输过程中的流量进行加密，不会对应用的自身的header加密
:::

## secret_key


服务端可配置secret_key 对客户端进行注册过滤

client
```ini
[common]
secret_key = xxxxxxxx
```

server
```ini
[common]
secret_key = xxxxxxxx
```

## token And is_private

客户端可配置 `token` 和 `is_private` 限制仅有相同token的客户端才能访问


```
token = xxxx
is_private = true
```

::: warning
这两个key都要配置，仅配置`token`是无效的，`token`仅是`domain`的所有者, `is_private` 会验证token是否一致。
:::

## http_user And http_pwd

客户端可配置 `http_user` 和 `http_pwd` 在 http/https 协议上加一层验证

```
[web]
http_user = xxx
http_pwd = xxxx
```