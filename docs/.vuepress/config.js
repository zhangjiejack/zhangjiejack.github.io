const nav = require('./config/nav')
// const sidebar = require('./config/sidebar')
module.exports = {
  title: 'zj-book',
  base: '/zj-book/',
  theme: 'vdoing', // npm主题依赖包
  // theme: require.resolve('../../vdoing'), // 使用本地主题包
  themeConfig: {
    nav: nav,
    sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
    logo: '/imgs/vue/logo.png', // 导航栏logo
    docsDir: 'docs', // 编辑的文件夹
    editLinks: true, // 启用编辑
    editLinkText: '编辑',
    sidebar: 'structuring',
    // 文章默认的作者信息，(可在md文件中单独配置此信息) string | {name: string, link?: string}
    author: {
      name: 'zhangjie', // 必需
      // link: 'https://github.com/zhangjiejack', // 可选的
    },
  },
  head: [
    ['script', { src: 'https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js' }],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js' }],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js' }],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js' }],
  ],
  plugins: [
    'demo-block'
  ],
}