import * as React from 'react';

import "./Home.sass"
import friendlyLink from './friendlyLink'

interface IPropsHome {

}

export default function Home(props: IPropsHome) {
  return (
    <div className="Home">
      {/*<HomeBackground/>*/}
      {/*<HomeAvatar/>*/}
      <header>
        <h1>昌维的网站 ChangWei's website</h1>
      </header>

      <hr/>

      <p>
        <h2>Introduction (简介)</h2>
        <p>
          姓名：昌维，生日（公历）：1997 / 10 / 6。
          全栈开发者，泛语言开发者。
          职业方向为 WEB 前端开发，业余爱好为嵌入式开发。
          希望能够为计算机科学与技术相关知识的科普做出微小的贡献。
        </p>
        <p>
          My name is Chang Wei, born on October 6, 1997.
          Full stack developer, pan-language developer.
          working for Web front-end development, hobby for embedded development.
          I hope to make a contribution to the popularization of computer science and electronic.
        </p>
      </p>

      <p>
        <h2>Major Research Direction (主要研究方向)</h2>

        <p>
          <h3>ECE (ElectroniC Engineering)</h3>
          <ul>
            <li>嵌入式单片机开发，包括 STM32，MSC-51，ESP8266(NodeMCU) 等平台。</li>
            <li>Embedded development, including STM32，MSC-51，ESP8266(NodeMCU) and more platform.</li>
            <li>FPGA 开发，包括部分外设控制器的驱动模块开发，RISC-V 和 X86 等指令集的 CPU 软核开发</li>
            <li>FPGA development, including peripheral control unit and RISC-V or X86 soft-core CPU.</li>
          </ul>
        </p>

        <p>
          <h3>CS (Computer Science)</h3>
          <ul>
            <li>WEB 全栈开发，泛语言开发者，目前正在进行中的项目请参考本人 GitHub，Username 为 cw1997。</li>
            <li>WEB Full-stack developer, you can see my project on my GitHub what the username is 'cw1997'</li>
          </ul>
        </p>

        <p>
          <h3>UED (User Experience Design)</h3>
          <ul>
            <li>设计产品原型，优化用户体验，主要使用 Axure RP 和 墨刀，可用 React.js 或者 Vue.js 开发高保真产品原型。</li>
            <li>Design PRD(Product Requirement Document) by Axure RP and modao.cc. I can design High-Fidelity product prototype by React.js or Vue.js.</li>
          </ul>
        </p>
      </p>

      <p>
        <h2>Contact (联系方式)</h2>
        <ul>
          <li>Github: <a href="https://github.com/cw1997">https://github.com/cw1997</a></li>
          <li>ZhiHu: <a href="https://www.zhihu.com/people/changwei1006/posts">https://www.zhihu.com/people/changwei1006/posts</a></li>
          <li>Weibo: <a href="https://weibo.com/changweicw">https://weibo.com/changweicw</a></li>
          <li>SegmentFault: <a href="https://segmentfault.com/u/changwei">https://segmentfault.com/u/changwei</a></li>

          <li>QQ: 867597730</li>
          <li>WeChat: changwei1006</li>

          <li>Email: <a href="mailto:867597730@qq.com">867597730@qq.com</a></li>
          <li>Email: <a href="mailto:changwei1006@gmail.com">changwei1006@gmail.com</a></li>
        </ul>
      </p>

      <p>
        <h2>Experience (个人经历)</h2>
        <table border="1" cellspacing="0">
          {/*<caption>Experience (个人经历)</caption>*/}
          <thead>
            <tr>
              <th>Date (时间)</th><th>Organization (组织机构)</th><th>Position (职位方向)</th><th>Nature (性质)</th>
            </tr>
            <tr>
              <td>2020.10 ~ 2021.3</td><td><a href="https://pingcap.com">PingCAP</a> (北京平凯星辰科技发展有限公司)</td><td>WEB Front-End (WEB前端开发)</td><td>intern (实习)</td>
            </tr>
            <tr>
              <td>2018.9 ~ 至今</td><td><a href="https://www.ntust.edu.tw/">NTUST</a> (台湾科技大学)</td><td>Electronic Engineering (电子工程)</td><td>full-time undergraduate (全日制本科)</td>
            </tr>
            <tr>
              <td>2015.9 ~ 2018.9</td><td><a href="http://www.wspc.edu.cn/">WSPC</a> (武汉船舶职业技术学院)</td><td>Software Technology (软件技术)</td><td>full-time college (全日制专科)</td>
            </tr>
          </thead>
        </table>
      </p>

      <p>
        <h2>Friendly Link (友情链接)</h2>
        <p>
          申请友情链接，<a href="mailto:867597730@qq.com">请发送 Email 给我</a>，或将该项目 fork 到你自己的 GitHub 帐号后，修改
          &nbsp;<a href="https://github.com/cw1997/changwei.me/blob/master/src/pages/Home/friendlyLink.ts">src/pages/Home/friendlyLink.ts</a>&nbsp;
          并且提 pull request。
        </p>
        <p>
          To apply for a Friendly Link, <a href="mailto:changwei1006@gmail.com">please send Email to me</a>, or fork this repo, then edit this file:
          &nbsp;<a href="https://github.com/cw1997/changwei.me/blob/master/src/pages/Home/friendlyLink.ts">src/pages/Home/friendlyLink.ts</a>&nbsp;
          and create a pull request.
        </p>
        <div className="friendly-link">
          {friendlyLink.map(item => <a href={item.url} target="_blank">{item.name}</a>)}
        </div>
      </p>

      <hr/>

      <footer>
        <p>
          Circle CI build status: <a href="https://circleci.com/gh/cw1997/changwei.me"><img src="https://circleci.com/gh/cw1997/changwei.me.svg?style=shield" /></a>
        </p>
        <p>
          Source Code: <a href="https://github.com/cw1997/changwei.me">https://github.com/cw1997/changwei.me</a>
        </p>
        <p>
          Docker image: <a href="https://hub.docker.com/r/changwei1997/changwei.me">https://hub.docker.com/r/changwei1997/changwei.me</a>
        </p>
        <p>
          Powered by React.js & TypeScript & sass & Webpack, SSR (Server Side Rendering) by React-DOM-Server & koa2, running at CentOS with nginx in Docker, build on CircleCI.
        </p>
        <p>
          Copyright 2020 - 2021 cw1997. Last Update DateTime: Sat Apr 10 2021 16:45:09 GMT+0800 (中国标准时间)
        </p>
      </footer>
    </div>
  )
}

//function HomeBackground() {
//  return (
//    <div className="HomeBackground"/>
//  )
//}
//
//function HomeAvatar() {
//  return (
//    <div className="HomeAvatar">
//      img
//    </div>
//  )
//}
