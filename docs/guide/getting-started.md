[[toc]]

# 快速开始

## 要求

* 服务端IP
* 服务端暴露32123

## 下载

### Linux
```

```

### Mac
```

```


## 配置


这个示例将本地的8080端口暴露出去


1 服务端配置 `ptps.ini`

```ini
[common]
tunnel_80_port = 32123
```

* `tunnel_80_port` 客户端连接的端口
* `http_port` 暴露的公网http端口,供用户访问

2 客户端配置 `ptpc.ini`

```ini
[common]
tunnel_host = x.x.x.x 或 www.domain.com
tunnel_80_port = 32123

[web]
local_host = 192.168.1.9
local_port = 8080
local_reaplce_host = true
domain = x.x.x.x:32123 或 www.domain.com:32123
```


* `tunnel_host` 为公网服务器的ip或者指向公网服务器的域名
* `tunnel_80_port` 上方的服务端监听的端口
* `local_host` 暴露的内网的ip
* `local_port` 暴露的内网的端口
* `local_reaplce_host` 替换host（http协议需要）
* `domain` 用户访问的域名或ip

3 运行

服务端
```bash
./ptp -s
```

客户端
```bash
./ptp -c
```

4 验证

能正常访问 x.x.x.x:32123 说明部署没问题







This section will help you build a basic VuePress documentation site from ground up. If you already have an existing project and would like to keep documentation inside the project, start from Step 3.

- **Step 1**: Create and change into a new directory

```bash
mkdir vuepress-starter
cd vuepress-starter
```

- **Step 2**: Initialize your project

<CodeGroup>
  <CodeGroupItem title="PNPM" active>

```bash
git init
pnpm init
```

  </CodeGroupItem>

  <CodeGroupItem title="YARN">

```bash
git init
yarn init
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM">

```bash
git init
npm init
```

  </CodeGroupItem>
</CodeGroup>

- **Step 3**: Install VuePress locally

<CodeGroup>
  <CodeGroupItem title="PNPM" active>

```bash
pnpm add -D vuepress@next @vuepress/client@next vue
```

  </CodeGroupItem>

  <CodeGroupItem title="YARN">

```bash
yarn add -D vuepress@next
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM">

```bash
npm install -D vuepress@next
```

  </CodeGroupItem>
</CodeGroup>

- **Step 4**: Add some [scripts](https://classic.yarnpkg.com/en/docs/package-json#toc-scripts) to `package.json`

```json
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

- **Step 5**: Add the default temp and cache directory to `.gitignore` file

```bash
echo 'node_modules' >> .gitignore
echo '.temp' >> .gitignore
echo '.cache' >> .gitignore
```

- **Step 6**: Create your first document

```bash
mkdir docs
echo '# Hello VuePress' > docs/README.md
```

- **Step 7**: Serve the documentation site in the local server

<CodeGroup>
  <CodeGroupItem title="PNPM" active>

```bash
pnpm docs:dev
```

  </CodeGroupItem>

  <CodeGroupItem title="YARN">

```bash
yarn docs:dev
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM">

```bash
npm run docs:dev
```

  </CodeGroupItem>
</CodeGroup>

VuePress will start a hot-reloading development server at [http://localhost:8080](http://localhost:8080). When you modify your markdown files, the content in the browser will be auto updated.

By now, you should have a basic but functional VuePress documentation site. Next, learn about the basics of [configuration](./configuration.md) in VuePress.