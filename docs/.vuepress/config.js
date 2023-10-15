import { defineUserConfig, defaultTheme } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'
import { copyCodePlugin } from "vuepress-plugin-copy-code2";

export default defineUserConfig({
  // base: '/',
  // lang: 'zh-CN',
  // title: '你好， VuePress ！',
  // description: '这是我的第一个 VuePress 站点',
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。

    '/': {
      lang: 'zh-CN',
      title: 'PTP',
      description: '一个简单的内网穿透工具',
    },
    // '/en/': {
    //   lang: 'English',
    //   title: 'VuePress',
    //   description: 'Vue-powered Static Site Generator',
    // },
  },
  plugins: [
    searchPlugin({
      // 配置项
    }),
    copyCodePlugin({
      // your options
    }),
  ],
  theme: defaultTheme({
    editLink: true,
    docsRepo: 'https://github.com/wpjscc/ptp-docs',
    docsBranch: 'master',
    docsDir: 'docs',
    editLinkPattern: ':repo/-/edit/:branch/:path',

    sidebarDepth: 0,

    // repo: 'vuejs/vuepress',
    // 你也可以直接将它设置为一个 URL
    repo: 'https://github.com/wpjscc/ptp-docs',
    locales: {
      '/': {
        selectLanguageName: '简体中文',
        sidebar: {
          // SidebarItem
          '/guide/': [
            {
              text: '指南',
              children: [
                '/guide/README.md',
                '/guide/getting-started.md',
                // '/guide/concepts.md',

              ],
            },
            {
              text: '配置',
              children: [
                '/config/README.md',
              ]
            },
            {
              text: '示例',
              children: [
                '/example/example.md',
                '/example/example-ssh.md',
                '/example/example-ssh-mul.md',
                '/example/example-http.md',
                '/example/example-dns.md',
                '/example/example-unix.md',
                '/example/example-https.md',
                '/example/example-ssh-secret.md',
                '/example/example-p2p-ssh-dns.md',
                '/example/example-p2p-mysql-http.md',
              ]
            },
            {
              text: '安全',
              children: [
                '/safe/README.md',
              ]
            }
          ],
          '/example/': [
            {
              text: '指南',
              children: [
                '/guide/README.md',
                '/guide/getting-started.md',
                // '/guide/concepts.md',

              ],
            },
            {
              text: '配置',
              children: [
                '/config/README.md',
              ]
            },
            {
              text: '示例',
              children: [
                '/example/example.md',
                '/example/example-ssh.md',
                '/example/example-ssh-mul.md',
                '/example/example-http.md',
                '/example/example-dns.md',
                '/example/example-unix.md',
                '/example/example-https.md',
                '/example/example-ssh-secret.md',
                '/example/example-p2p-ssh-dns.md',
                '/example/example-p2p-mysql-http.md',
              ]
            },
            {
              text: '安全',
              children: [
                '/safe/README.md',
              ]
            }

          ],
          '/config/': [
            {
              text: '指南',
              children: [
                '/guide/README.md',
                '/guide/getting-started.md',
                // '/guide/concepts.md',

              ],
            },
            {
              text: '配置',
              children: [
                '/config/README.md',
              ]
            },
            {
              text: '示例',
              children: [
                '/example/example.md',
                '/example/example-ssh.md',
                '/example/example-ssh-mul.md',
                '/example/example-http.md',
                '/example/example-dns.md',
                '/example/example-unix.md',
                '/example/example-https.md',
                '/example/example-ssh-secret.md',
                '/example/example-p2p-ssh-dns.md',
                '/example/example-p2p-mysql-http.md',
              ]
            },
            {
              text: '安全',
              children: [
                '/safe/README.md',
              ]
            }
          ],
          '/safe/': [
            {
              text: '指南',
              children: [
                '/guide/README.md',
                '/guide/getting-started.md',
                // '/guide/concepts.md',

              ],
            },
            {
              text: '配置',
              children: [
                '/config/README.md',
              ]
            },
            {
              text: '示例',
              children: [
                '/example/example.md',
                '/example/example-ssh.md',
                '/example/example-ssh-mul.md',
                '/example/example-http.md',
                '/example/example-dns.md',
                '/example/example-unix.md',
                '/example/example-https.md',
                '/example/example-ssh-secret.md',
                '/example/example-p2p-ssh-dns.md',
                '/example/example-p2p-mysql-http.md',
              ]
            },
            {
              text: '安全',
              children: [
                '/safe/README.md',
              ]
            },
          ]

        },
        navbar: [
          // NavbarItem
          {
            text: '指南',
            link: '/guide/',
          },
        ]
      },
      '/en/': {
        selectLanguageName: 'English',
      },
    },


  }),
})