[[toc]]

# 介绍

ptp 是一个简单的内网穿透工具


该工具的目标有两个

* 第一个目标：让右侧的 User 能访问到 Client 的本地服务

* 第二个目标：让 ClientA 和 Client B 可以相互通信


```
                                   or single tunnel 
                                       |             
                            Server     |           |------------------|
                            |-------tunnel->-------|                  |                        
                            |                      | local.test       |                        +---------+
                            |  +--dynamic tunnel-<-|                  |---------<--------------|   User  |
                            |  |                   | 192.168.1.1:3000 |                        |---------+
                            |  |                   | www.domain.com   |       
                            |  |                   |------------------|
                            |  |
    +--------------->-------+------<------------------------+  
    |                       |                               |    
    |                    register                           |           
    |                       |                               |                                          
    |                       |                               |  
 +--------------------------+--------------------------------------------------+                          +--------------+
 |Client A local.test  |  Client B 192.168.1.1:3000 |  Client C www.domain.com |----------------->--------| local service|
 +-----------------------------------------------------------------------------+                          +--------------+
```

为了实现上方的目标，需要一台具有公网ip的服务器，作为沟通的桥梁。沟通的协议可以是：


* Client->Server 的 Tunnel 协议可以是 <Badge type="tip" text="udp" vertical="middle" /><Badge type="tip" text="tcp" vertical="middle" /><Badge type="tip" text="tls" vertical="middle" /><Badge type="tip" text="wss" vertical="middle" /><Badge type="tip" text="ws" vertical="middle" /><Badge type="tip" text="p2p" vertical="middle" />


* User->Server 的协议可以是 <Badge type="tip" text="udp" vertical="middle" /><Badge type="tip" text="tcp" vertical="middle" /><Badge type="tip" text="tls" vertical="middle" /><Badge type="tip" text="wss" vertical="middle" /><Badge type="tip" text="ws" vertical="middle" /><Badge type="tip" text="https" vertical="middle" /><Badge type="tip" text="http" vertical="middle" />

* User->Server->Client 的 `Dynamic Tunnel` 的协议可以是 <Badge type="tip" text="udp" vertical="middle" /><Badge type="tip" text="tcp" vertical="middle" /><Badge type="tip" text="tls" vertical="middle" /><Badge type="tip" text="wss" vertical="middle" /><Badge type="tip" text="ws" vertical="middle" />

* ClientA 有 两种方式可以到达ClientB

    * 方式1: ClientA->Server->ClientB  可通过<Badge type="tip" text="tls" vertical="middle" />加密传输

    * 方式2: ClientA 和 ClientB 通过Server 打孔成功后。ClientA<->ClientB 可以通过<Badge type="tip" text="udp" vertical="middle" />或<Badge type="tip" text="tcp" vertical="middle" />协议互通。（取决于是否打孔成功） 

    ::: warning
    方式2 仅对传输过程中的流量进行加密，不会对应用的自身的header加密
    :::


