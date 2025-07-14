/* eslint-disable global-require,import/no-extraneous-dependencies */

// @ts-check
// 注意: 类型注释允许类型检查和 IDE 自动补全

// eslint-disable-next-line import/no-extraneous-dependencies
const { ProvidePlugin } = require("webpack");
require("dotenv").config(); // 加载环境变量

const prism = require("prism-react-renderer"); // 代码高亮库

// 定义代码块的主题
const baseLightCodeBlockTheme = prism.themes.vsLight; // 浅色主题
const baseDarkCodeBlockTheme = prism.themes.vsDark; // 深色主题

const baseUrl = "/langchain/"; // 站点基础URL - 修改为 GitHub Pages 部署路径

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "🦜️🔗 LangChain", // 站点标题
  tagline: "LangChain Python 文档", // 站点标语
  favicon: "img/brand/favicon.png", // 站点图标

  // 设置站点的生产环境URL - 修改为 GitHub Pages URL
  url: "https://woniu9524.github.io",
  // 设置站点在 /<baseUrl>/ 路径下提供服务
  // 对于 GitHub Pages 部署，通常是 '/<projectName>/'
  baseUrl: baseUrl,
  trailingSlash: true, // URL是否以斜杠结尾
  onBrokenLinks: "warn", // 遇到断开链接时的行为 - 改为警告而不是抛出错误
  onBrokenMarkdownLinks: "warn", // 遇到断开Markdown链接时的行为 - 改为警告而不是抛出错误
  onBrokenAnchors: "warn", // 遇到断开锚点时的行为 - 改为警告而不是抛出错误

  // 主题配置
  themes: ["@docusaurus/theme-mermaid"], // 启用 Mermaid 图表支持
  markdown: {
    mermaid: true, // 在 Markdown 中启用 Mermaid
  },

  plugins: [
    // 自定义 Webpack 配置插件
    () => ({
      name: "custom-webpack-config",
      configureWebpack: () => ({
        plugins: [
          // 提供全局的 process 变量，兼容浏览器环境
          new ProvidePlugin({
            process: require.resolve("process/browser"),
          }),
        ],
        resolve: {
          // 模块解析的备用方案
          fallback: {
            path: false, // 不模拟 Node.js 的 path 模块
            url: false, // 不模拟 Node.js 的 url 模块
          },
        },
        module: {
          rules: [
            {
              test: /\.m?js/,
              resolve: {
                fullySpecified: false, // 允许不完全指定文件扩展名
              },
            },
            {
              test: /\.py$/, // 处理 .py 文件
              loader: "raw-loader", // 使用 raw-loader 直接导入文件内容
              resolve: {
                fullySpecified: false,
              },
            },
            {
              test: /\.ya?ml$/, // 处理 .yaml 或 .yml 文件
              use: 'yaml-loader' // 使用 yaml-loader 导入
            },
            {
              test: /\.ipynb$/, // 处理 Jupyter Notebook 文件
              loader: "raw-loader", // 使用 raw-loader 直接导入文件内容
              resolve: {
                fullySpecified: false,
              },
            },
          ],
        },
      }),
    }),
  ],

  presets: [
    [
      "classic", // 经典预设
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // 文档编辑URL，已更改为您指定的仓库
          editUrl: "https://github.com/woniu9524/langchain/edit/master/docs/",
          sidebarPath: require.resolve("./sidebars.js"), // 侧边栏配置文件路径
          remarkPlugins: [
            // Remark 插件，将 npm 命令转换为 yarn 命令
            [require("@docusaurus/remark-plugin-npm2yarn"), { sync: true }],
          ],
          // 侧边栏项目生成器
          async sidebarItemsGenerator({
            defaultSidebarItemsGenerator,
            ...args
          }) {
            const sidebarItems = await defaultSidebarItemsGenerator(args);
            sidebarItems.forEach((subItem) => {
              // 通过在每个斜杠后插入零宽度空格，实现将长侧边栏标签分成多行显示。
              if (
                "label" in subItem &&
                subItem.label &&
                subItem.label.includes("/")
              ) {
                // eslint-disable-next-line no-param-reassign
                subItem.label = subItem.label.replace(/\//g, "/\u200B");
              }
              if (args.item.className) {
                subItem.className = args.item.className;
              }
            });
            return sidebarItems;
          },
        },
        pages: {
          remarkPlugins: [require("@docusaurus/remark-plugin-npm2yarn")], // 页面Remark插件
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"), // 自定义CSS
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true, // 侧边栏可隐藏
          autoCollapseCategories: true, // 侧边栏分类自动折叠
        },
      },
      colorMode: {
        disableSwitch: false, // 启用颜色模式切换
        respectPrefersColorScheme: true, // 遵循用户系统颜色偏好
      },
      announcementBar: {
        content:
          '<strong>我们的 <a href="https://academy.langchain.com/courses/ambient-agents/?utm_medium=internal&utm_source=docs&utm_campaign=q2-2025_ambient-agents_co" target="_blank">使用 LangGraph 构建环境智能体</a> 课程现已在 LangChain Academy 上线！</strong>',
        backgroundColor: '#d0c9fe'
      },
      prism: {
        // Prism 代码高亮主题配置
        theme: {
          ...baseLightCodeBlockTheme,
          plain: {
            ...baseLightCodeBlockTheme.plain,
            backgroundColor: "#F5F5F5", // 浅色主题代码块背景色
          },
        },
        darkTheme: {
          ...baseDarkCodeBlockTheme,
          plain: {
            ...baseDarkCodeBlockTheme.plain,
            backgroundColor: "#222222", // 深色主题代码块背景色
          },
        },
      },
      image: "img/brand/theme-image.png", // 社交分享图片
      navbar: {
        logo: { src: "img/brand/wordmark.png", srcDark: "img/brand/wordmark-dark.png" }, // 导航栏Logo
        items: [
          {
            type: "docSidebar",
            position: "left",
            sidebarId: "integrations",
            label: "集成", // 导航栏项：集成
          },
          {
            label: "API 参考", // 导航栏项：API 参考
            to: "https://python.langchain.com/api_reference/",
          },
          {
            type: "dropdown",
            label: "更多", // 导航栏项：更多下拉菜单
            position: "left",
            items: [
              {
                type: "doc",
                docId: "contributing/index",
                label: "贡献",
              },
              {
                type: "doc",
                docId: "people",
                label: "人员",
              },
              {
                type: "doc",
                docId: "troubleshooting/errors/index",
                label: "错误参考",
              },
              {
                type: 'html',
                value: '<hr class="dropdown-separator" style="margin-top: 0.5rem; margin-bottom: 0.5rem">',
              },
              {
                href: "https://docs.smith.langchain.com",
                label: "LangSmith",
              },
              {
                href: "https://langchain-ai.github.io/langgraph/",
                label: "LangGraph",
              },
              {
                href: "https://smith.langchain.com/hub",
                label: "LangChain Hub",
              },
              {
                href: "https://js.langchain.com",
                label: "LangChain JS/TS",
              },
            ]
          },
          {
            type: "dropdown",
            label: "v0.3", // 版本选择下拉菜单
            position: "right",
            items: [
              {
                label: "v0.3",
                href: "/docs/introduction"
              },
              {
                label: "v0.2",
                href: "https://python.langchain.com/v0.2/docs/introduction"
              },
              {
                label: "v0.1",
                href: "https://python.langchain.com/v0.1/docs/get_started/introduction"
              }
            ]
          },
          {
            to: "https://chat.langchain.com",
            label: "💬", // 导航栏项：聊天（使用表情符号）
            position: "right",
          },
          // 为了保持一致性，请将 GitHub 链接放在右侧。
          {
            href: "https://github.com/langchain-ai/langchain", // 导航栏项：GitHub 仓库链接
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub 仓库",
          },
        ],
      },
      footer: {
        style: "light", // 页脚样式
        links: [
          {
            title: "社区", // 页脚链接标题：社区
            items: [
              {
                label: "LangChain 论坛",
                href: "https://forum.langchain.com/",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/LangChainAI",
              },
            ],
          },
          {
            title: "GitHub", // 页脚链接标题：GitHub
            items: [
              {
                label: "组织",
                href: "https://github.com/langchain-ai",
              },
              {
                label: "Python",
                href: "https://github.com/langchain-ai/langchain",
              },
              {
                label: "JS/TS",
                href: "https://github.com/langchain-ai/langchainjs",
              },
            ],
          },
          {
            title: "更多", // 页脚链接标题：更多
            items: [
              {
                label: "主页",
                href: "https://langchain.com",
              },
              {
                label: "博客",
                href: "https://blog.langchain.dev",
              },
              {
                label: "YouTube",
                href: "https://www.youtube.com/@LangChain",
              },
            ],
          },
        ],
        copyright: `版权所有 © ${new Date().getFullYear()} LangChain, Inc.`, // 页脚版权信息
      },
      algolia: {
        // Algolia 提供的应用程序 ID
        appId: "VAU016LAWS",

        // 公共 API 密钥：可以安全提交
        // 当前链接到 erick@langchain.dev
        apiKey: "6c01842d6a88772ed2236b9c85806441",

        indexName: "python-langchain-latest",

        contextualSearch: false, // 禁用上下文搜索
      },
    }),

  scripts: [
    baseUrl + "js/google_analytics.js", // Google Analytics 脚本
    {
      src: "https://www.googletagmanager.com/gtag/js?id=G-9B66JQQH2F",
      async: true,
    },
  ],

  customFields: {
    supabasePublicKey: process.env.NEXT_PUBLIC_SUPABASE_PUBLIC_KEY, // Supabase 公钥
    supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL, // Supabase URL
  },
};

module.exports = config;