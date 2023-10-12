const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "黄旭康",
  tagline: "我永远爱楠楠",
  favicon: "hero.jpg",
  url: "https://huangxukang.vercel.app/",
  baseUrl: "/",
  organizationName: "黄旭康",
  projectName: "黄旭康",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: "huangxukang",
        content: "❤️ 种一棵树最好的时间是十年前，其次是现在",
        textColor: "#ffffff",
        isCloseable: true,
      },
      navbar: {
        title: "黄旭康",
        logo: {
          alt: "hero",
          src: "hero.jpg",
        },
        items: [
          {
            href: "https://react.dev/",
            label: "React",
            position: "right",
          },
          {
            href: "https://nextjs.org/",
            label: "Next.js",
            position: "right",
          },
          {
            href: "https://reactrouter.com/",
            label: "React Router",
            position: "right",
          },
          {
            href: "https://webpack.js.org/",
            label: "Webpack",
            position: "right",
          },
          {
            href: "https://github.com/",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Study 🎯",
            items: [
              {
                label: "Go Now ❤️",
                to: "/docs/introduction",
              },
            ],
          },
          {
            title: "Books 📚",
            items: [
              {
                label: "现代 JavaScript 教程",
                href: "https://zh.javascript.info/",
              },
              {
                label: "网道 - 互联网开发文档",
                href: "https://www.wangdoc.com/",
              },
            ],
          },
          {
            title: "Tools 🔨",
            items: [
              {
                label: "前端工具箱",
                href: "https://www.runjs.cool/",
              },
              {
                label: "Excalidraw",
                href: "https://excalidraw.com/",
              },
              {
                label: "DummyJSON",
                href: "https://dummyjson.com/",
              },
            ],
          },
          {
            title: "Frameworks 🌈",
            items: [
              {
                href: "https://react.docschina.org/",
                label: "React 中文",
              },
              {
                href: "https://redux.js.org/",
                label: "Redux",
              },
              {
                href: "https://cn.redux.js.org/",
                label: "Redux 中文",
              },
              {
                href: "https://react-redux.js.org/",
                label: "React Redux",
              },
              {
                href: "https://cn.react-redux.js.org/",
                label: "React Redux 中文",
              },
            ],
          },
          {
            title: "UI ✨",
            items: [
              {
                label: "Ant Design",
                href: "https://ant.design/index-cn",
              },
              {
                label: "MUI",
                href: "https://mui.com/",
              },
            ],
          },
          {
            title: "Email 📫",
            items: [
              {
                label: "QQ邮箱",
                href: "https://mail.qq.com/",
              },
              {
                label: "139邮箱",
                href: "https://mail.10086.cn/",
              },
            ],
          },
        ],
        copyright: `Copyright © 2019 - ${new Date().getFullYear()} 黄旭康, Inc. Built with <a href="https://docusaurus.io/" target="_blank">Docusaurus</a>.<br>Powered by <a href="https://vercel.com/" target="_blank">Vercel</a>.`,
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
