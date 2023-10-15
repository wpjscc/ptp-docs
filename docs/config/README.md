# 配置说明


1 客户端 配置

ptpc.ini

```ini
[common]
tunnel_host = 
tunnel_80_port = 
[xxx]
local_protocol = 
local_host = 
local_port = 
domain = 
```
| key | value | desc |
| :---: | :---: | :---: |
| tunnel_host | x.x.x.x or www.domain.com | 服务端ip或域名|
| tunnel_80_port | 32123 | 客户端和服务端未加密端口|
| [xxx] |  | 名称，用于区分不同的配置 |
| local_protocol | <Badge type="tip" text="udp" vertical="middle" /><Badge type="tip" text="tcp" vertical="middle" /><Badge type="tip" text="tls" vertical="middle" /><Badge type="tip" text="https" vertical="middle" /><Badge type="tip" text="http" vertical="middle" /> | 默认是 `tcp` |
| local_host | x.x.x.x or www.domain.com | 本地ip或域名 |
| local_port |  | 本地端口 |
| domain | ip:port 或 host | 用户最终访问的连接，逗号分割的字符串 |


::: details 高级配置
```ini
[common]
tunnel_host = 
tunnel_80_port = 

tunnel_protocol = 
dynamic_tunnel_protocol = 
tunnel_443_port = 
single_tunnel = 
secret_key = 

[xxxx]
local_protocol = 
local_host = 
local_port = 
domain = 

token = 
is_private = 
visit_domain = 
http_user = 
http_pwd = 
local_http_proxy = 
local_socks_proxy =
is_encrypt = 
encrypt_key =

[tcp]
ip = x.x.x.x
ports = 22,80,443
[udp]
ip = x.x.x.x
ports = 22,80,443
```
| key | value | desc |
| :---: | :---: | :---: |
| tunnel_protocol | <Badge type="tip" text="udp" vertical="middle" /><Badge type="tip" text="tcp" vertical="middle" /><Badge type="tip" text="tls" vertical="middle" /><Badge type="tip" text="wss" vertical="middle" /><Badge type="tip" text="ws" vertical="middle" /><Badge type="tip" text="p2p" vertical="middle" /> | 默认 tcp |
| dynamic_tunnel_protocol | 同tunnel_protocol |   |
| tunnel_443_port | 32124 |客户端服务端加密端口 |
| single_tunnel | `true` / `false` | 开启后`dynamic_tunnel_protocol` 失效，只通过一个连接同服务端通信 |
| secret_key |  | 服务端验证的key，一致才能用服务 |
| token |  |  1标识 domain 的所有者,2 is_private一起用有验证的作用 |
| is_private | `true` / `false` | 是否是私有服务，启用后，会验证token的一致性 |
| visit_domain | ip:port 或 host | 逗号分割的字符串，常使用在点对点通信中 [参考](/example/example-ssh-secret.md) |
| http_user |  | http 协议加一层 验证 |
| http_pwd |  |  |
| local_http_proxy |  | 本地http代理 (代理openai 的接口很有用) [见](https://github.com/clue/reactphp-http-proxy)|
| local_socks_proxy |  | 本地socks代理  [见](https://github.com/clue/reactphp-socks)|
| is_encrypt | `true` / `false` | 是否加密(仅对于p2p协议生效) |
| encrypt_key |  | 加密key |
| [tcp] |  | tcp监听的端口 |
| [udp] |  | udp监听的端口 |
:::


2 server 配置

ptps.ini

```ini
[common]
tunnel_80_port = 32123
```

| key | value | desc |
| :---: | :---: | :---: |
| tunnel_80_port | 32123 | 客户端通信端口|

::: details 高级配置
```ini
[common]
tunnel_80_port = 32123

tunnel_host = 
tunnel_protocol = 
tunnel_443_port = 32124
http_port_over_tunnel_port = 
http_port = 8080
secret_key = 
[tcp]
ip = x.x.x.x
ports = 22,80,443
[udp]
ip = x.x.x.x
ports = 22,80,443
[cert]
www.domain.com = /path/to/cert.pem
```

| key | value | desc |
| :---: | :---: | :---: |
| tunnel_host | x.x.x.x or www.domain.com | 服务端ip或域名。当提供tls或ws协议时需设置域名|
| tunnel_protocol | <Badge type="tip" text="udp" vertical="middle" /><Badge type="tip" text="tcp" vertical="middle" /><Badge type="tip" text="tls" vertical="middle" /> | 默认 tcp,逗号分割的字符串 |
| tunnel_443_port | 32124 |客户端服务端加密端口 |
| http_port_over_tunnel_port | `true` / `false` | 默认true ，复用端口（下方的http_port可以不用设置） |
| http_port | 8080 | http协议端口 user访问端口 |
| secret_key |  | 服务端验证的key，一致才能用服务 |
| [tcp] |  | tcp监听的端口 |
| [udp] |  | udp监听的端口 |
| cert | key/value | 证书配置 |
:::

