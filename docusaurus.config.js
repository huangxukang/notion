const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "黄旭康",
    tagline: "我永远爱楠楠",
    favicon: "hero.jpg",
    url: "https://huangxukang.github.io/",
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
            navbar: {
                title: "黄旭康",
                logo: {
                    alt: "hero",
                    src: "hero.jpg",
                },
                items: [
                    {
                        href: "https://reactjs.org/",
                        label: "React",
                        position: "right",
                    },
                    {
                        href: "https://beta.reactjs.org/",
                        label: "React Beta",
                        position: "right",
                    },
                    {
                        href: "https://docusaurus.io/",
                        label: "Docusaurus",
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
                        title: "Websites 🎨",
                        items: [
                            {
                                label: "GitHub",
                                href: "https://github.com/",
                            },
                        ],
                    },
                    {
                        title: "Tools 🔨",
                        items: [
                            {
                                label: "有道翻译",
                                href: "https://fanyi.youdao.com/",
                            },
                            {
                                label: "quicktype",
                                href: "https://app.quicktype.io/",
                            },
                            {
                                label: "excalidraw",
                                href: "https://excalidraw.com/",
                            },
                        ],
                    },
                    {
                        title: "Frameworks 🌈",
                        items: [
                            {
                                href: "https://reactrouter.com/",
                                label: "React Router",
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
                            {
                                href: "https://webpack.js.org/",
                                label: "Webpack",
                            },
                            {
                                href: "https://webpack.docschina.org/",
                                label: "Webpack 中文",
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
                ],
                copyright: `Copyright © 2019 - ${new Date().getFullYear()} 黄旭康, Inc. Built with Docusaurus.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
