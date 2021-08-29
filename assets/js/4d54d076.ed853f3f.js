(self.webpackChunkdashy=self.webpackChunkdashy||[]).push([[80],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return u},kt:function(){return c}});var o=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function n(e,t){if(null==e)return{};var a,o,s=function(e,t){if(null==e)return{};var a,o,s={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=o.createContext({}),h=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=h(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,u=n(e,["components","mdxType","originalType","parentName"]),d=h(a),c=s,m=d["".concat(l,".").concat(c)]||d[c]||p[c]||r;return a?o.createElement(m,i(i({ref:t},u),{},{components:a})):o.createElement(m,i({ref:t},u))}));function c(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,i=new Array(r);i[0]=d;var n={};for(var l in t)hasOwnProperty.call(t,l)&&(n[l]=t[l]);n.originalType=e,n.mdxType="string"==typeof e?e:s,i[1]=n;for(var h=2;h<r;h++)i[h]=a[h];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3250:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return n},contentTitle:function(){return l},metadata:function(){return h},toc:function(){return u},default:function(){return d}});var o=a(2122),s=a(9756),r=(a(7294),a(3905)),i=["components"],n={},l="Contributing",h={unversionedId:"contributing",id:"contributing",isDocsHomePage:!1,title:"Contributing",description:"First off, thank you for considering contributing towards Dashy! \ud83d\ude4c",source:"@site/docs/contributing.md",sourceDirName:".",slug:"/contributing",permalink:"/docs/contributing",editUrl:"https://github.com/Lissy93/dashy/edit/gh-pages/docs/docs/contributing.md",version:"current",frontMatter:{},sidebar:"dashySidebar",previous:{title:"User Showcase",permalink:"/docs/showcase"},next:{title:"Developing",permalink:"/docs/developing"}},u=[{value:"Submit a PR",id:"submit-a-pr",children:[]},{value:"Add Translations",id:"add-translations",children:[]},{value:"Take a 2-minute survey",id:"take-a-2-minute-survey",children:[]},{value:"Share your dashboard",id:"share-your-dashboard",children:[]},{value:"Improve the Docs",id:"improve-the-docs",children:[]},{value:"Raise a bug",id:"raise-a-bug",children:[]},{value:"Join the discussion",id:"join-the-discussion",children:[]},{value:"Spread the word",id:"spread-the-word",children:[]},{value:"Star, Upvote or Leave a Review",id:"star-upvote-or-leave-a-review",children:[]},{value:"Make a small donation",id:"make-a-small-donation",children:[]},{value:"Request a feature via BountySource",id:"request-a-feature-via-bountysource",children:[]},{value:"Enable Anonymous Bug Reports",id:"enable-anonymous-bug-reports",children:[]},{value:"Follow for More",id:"follow-for-more",children:[{value:"Contributors",id:"contributors",children:[]},{value:"Star-Gazers Over Time",id:"star-gazers-over-time",children:[]}]}],p={toc:u};function d(e){var t=e.components,a=(0,s.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"contributing"},"Contributing"),(0,r.kt)("p",null,"First off, thank you for considering contributing towards Dashy! \ud83d\ude4c\nThere are several ways that you can help out (but don't feel you have to).\nAny contributions, however small will always be very much appreciated, and you will be appropriately credited in the readme - huge thank you to ",(0,r.kt)("a",{parentName:"p",href:"/docs/credits"},"everyone who has helped")," so far \ud83d\udc9e"),(0,r.kt)("h2",{id:"submit-a-pr"},"Submit a PR"),(0,r.kt)("p",null,"Contributing to the code or documentation is super helpful. You can fix a bug, add a new feature or improve an existing one. I've written ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Lissy93/dashy/blob/master/docs/development-guides"},"several guides")," to help you get started. For setting up the development environment, outline of the standards, and understanding the PR flow, see the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Lissy93/dashy/blob/master/docs/development"},"Development Docs"),". I've tried to keep the code neat and documentation thorough, so understanding what everything does should be fairly straight forward, but feel free to ask if you have any questions."),(0,r.kt)("h2",{id:"add-translations"},"Add Translations"),(0,r.kt)("p",null,"If you speak another language, then adding translations would be really helpful, and you will be credited in the readme for your work. Multi-language support makes Dashy accessible for non-English speakers, which I feel is important. This is a very quick and easy task, as all application text is located in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Lissy93/dashy/blob/master/src/assets/locales/en.json"},(0,r.kt)("inlineCode",{parentName:"a"},"locales/en.json")),", so adding a new language is as simple as copying this file and translating the values. You don't have to translate it all, as any missing attributes will just fallback to English. For a full tutorial, see the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Lissy93/dashy/blob/master/docs/multi-language-support"},"Multi-Language Support Docs"),"."),(0,r.kt)("h2",{id:"take-a-2-minute-survey"},"Take a 2-minute survey"),(0,r.kt)("p",null,"Help improve Dashy by taking a very short, 6-question survey. This will give me a better understanding of what is important to you, so that I can make Dashy better in the future :)"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://n9fy6xak9yd.typeform.com/to/gl0L68ou"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Take_the-Survey-%231a86fd?style=for-the-badge&logo=buddy",alt:"Take the Survey"}))),(0,r.kt)("h2",{id:"share-your-dashboard"},"Share your dashboard"),(0,r.kt)("p",null,"Dashy now has a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Lissy93/dashy/blob/master/docs/showcase#dashy-showcase-"},"Showcase")," where you can show off a screenshot of your dashboard, and get inspiration from other users. I also really enjoy seeing how people are using Dashy. To ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Lissy93/dashy/blob/master/docs/showcase#submitting-your-dashboard"},"submit your dashboard"),", please either open a PR or raise an issue."),(0,r.kt)("h2",{id:"improve-the-docs"},"Improve the Docs"),(0,r.kt)("p",null,"Found a typo, or something that isn't as clear as it could be? Maybe I've missed something off altogether, or you hit a roadblock that took you a while to figure out. Submitting a pull request to add to or improve the documentation will help future users get Dashy up and running more easily.\nAll content is located either in the README or ",(0,r.kt)("a",{parentName:"p",href:"/docs"},(0,r.kt)("inlineCode",{parentName:"a"},"/docs/"))," directory, and synced to the Wiki and website using a GH action (workflows/wiki-sync.yml)."),(0,r.kt)("h2",{id:"raise-a-bug"},"Raise a bug"),(0,r.kt)("p",null,"If you've found a bug, then please do raise it as an issue. This will help me know if there's something that needs fixing. Try and include as much detail as possible, such as your environment, steps to reproduce, any console output and maybe an example screenshot or recording if necessary."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Lissy93/dashy/issues/new?assignees=lissy93&labels=%F0%9F%90%9B+Bug&template=bug.yml&title=%5BBUG%5D+%3Ctitle%3E"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Raise_a-Bug-%23dc2d76?style=for-the-badge&logo=dependabot",alt:"Raise a Bug"}))),(0,r.kt)("h2",{id:"join-the-discussion"},"Join the discussion"),(0,r.kt)("p",null,"I've enabled the discussion feature on GitHub, here you can share tips and tricks, useful information, or your dashboard. You can also ask questions, and offer basic support to other users."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Lissy93/dashy/discussions"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Join_the-Discussion-%23ffd000?style=for-the-badge&logo=livechat",alt:"Join the Discussion on GitHub"}))),(0,r.kt)("h2",{id:"spread-the-word"},"Spread the word"),(0,r.kt)("p",null,"Dashy is still a relatively young project, and as such not many people know of it. It would be great to see more users, and so it would be awesome if you could consider sharing on social platforms."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://mastodon.social/?text=Check%20out%20Dashy%2C%20the%20privacy-friendly%2C%20self-hosted%20startpage%20for%20organizing%20your%20life%3A%20https%3A%2F%2Fgithub.com%2FLissy93%2Fdashy%20-%20By%20%40lissy93%40mastodon.social"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Share-Mastodon-%232b90d9?style=for-the-badge&logo=mastodon",alt:"Share Dashy on Mastodon"})),"\n",(0,r.kt)("a",{parentName:"p",href:"http://www.reddit.com/submit?url=https://github.com/Lissy93/dashy&title=Dashy%20-%20The%20self-hosted%20dashboard%20for%20your%20homelab%20%F0%9F%9A%80"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Share-Reddit-%23FF5700?style=for-the-badge&logo=reddit",alt:"Share Dashy on Reddit"})),"\n",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/intent/tweet?url=https://github.com/lissy93/dashy&text=Check%20out%20Dashy%20by%20@Lissy_Sykes,%20the%20self-hosted%20dashboard%20for%20your%20homelab%20%F0%9F%9A%80"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Share-Twitter-%231DA1F2?style=for-the-badge&logo=twitter",alt:"Share Dashy on Twitter"})),"\n",(0,r.kt)("a",{parentName:"p",href:"https://www.facebook.com/sharer/sharer.php?u=https://github.com/lissy93/dashy"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Share-Facebook-%234267B2?style=for-the-badge&logo=facebook",alt:"Share Dashy on Facebook"})),"\n",(0,r.kt)("a",{parentName:"p",href:"https://www.linkedin.com/shareArticle?mini=true&url=https://github.com/lissy93/dashy"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Share-LinkedIn-%230077b5?style=for-the-badge&logo=linkedin",alt:"Share Dashy on LinkedIn"})),"\n",(0,r.kt)("a",{parentName:"p",href:"https://pinterest.com/pin/create/button/?url=https://github.com/lissy93/dashy&media=https://raw.githubusercontent.com/Lissy93/dashy/master/docs/showcase/1-home-lab-material.png&description=Check%20out%20Dashy,%20the%20self-hosted%20dashboard%20for%20your%20homelab%20%F0%9F%9A%80"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Share-Pinterest-%23E60023?style=for-the-badge&logo=pinterest",alt:"Share Dashy on Pinterest"})),"\n",(0,r.kt)("a",{parentName:"p",href:"https://vk.com/share.php?url=https%3A%2F%2Fgithub.com%2Flissy93%2Fdashy%2F&title=Check%20out%20Dashy%20-%20The%20Self-Hosted%20Dashboard%20for%20your%20Homelab%20%F0%9F%9A%80"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Share-VK-%234C75A3?style=for-the-badge&logo=vk",alt:"Share Dashy on VK"})),"\n",(0,r.kt)("a",{parentName:"p",href:"viber://forward?text=https%3A%2F%2Fgithub.com%2Flissy93%2Fdashy%0ACheck%20out%20Dashy%2C%20the%20self-hosted%20dashboard%20for%20your%20homelab%20%F0%9F%9A%80"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Share-Viber-%238176d6?style=for-the-badge&logo=viber",alt:"Share Dashy via Viber"})),"\n",(0,r.kt)("a",{parentName:"p",href:"https://t.me/share/url?url=https%3A%2F%2Fgithub.com%2Flissy93%2Fdashy&text=Check%20out%20Dashy%2C%20the%20self-hosted%20dashboard%20for%20your%20homelab%20%F0%9F%9A%80"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Share-Telegram-%230088cc?style=for-the-badge&logo=telegram",alt:"Share Dashy via Telegram"})),"\n",(0,r.kt)("a",{parentName:"p",href:"mailto:info@example.com?&subject=Check%20out%20Dashy%20-%20The%20self-hosted%20dashboard%20for%20your%20homelab%20%F0%9F%9A%80&cc=&bcc=&body=https://github.com/lissy93/dashy"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Share-Email-%238A90C7?style=for-the-badge&logo=protonmail",alt:"Share Dashy via Email"}))),(0,r.kt)("h2",{id:"star-upvote-or-leave-a-review"},"Star, Upvote or Leave a Review"),(0,r.kt)("p",null,"Dashy is on the following platforms, and if you could spare a few seconds to give it an upvote or review, this will also help new users find it."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.producthunt.com/posts/dashy"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Review-ProductHunt-%23b74424?style=for-the-badge&logo=producthunt",alt:"ProductHunt"})),"\n",(0,r.kt)("a",{parentName:"p",href:"https://alternativeto.net/software/dashy/about/"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Review-AlternativeTo-%235581a6?style=for-the-badge&logo=abletonlive",alt:"AlternativeTo"})),"\n",(0,r.kt)("a",{parentName:"p",href:"https://www.slant.co/improve/topics/27783/viewpoints/1/~self-hosted-homelab-startpage~dashy"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Review-Slant-%2346a1df?style=for-the-badge&logo=capacitor",alt:"Slant"})),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Lissy93/dashy/stargazers"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/github/stars/Lissy93/Dashy?color=ba96d6&label=Star%20-%20GitHub&logo=github&style=for-the-badge",alt:"Star on GitHub"})),"\n",(0,r.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/lissy93/dashy"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/docker/stars/lissy93/dashy?color=4cb6e0&label=Star%20-%20Docker&logo=docker&style=for-the-badge",alt:"Star on DockerHub"}))),(0,r.kt)("h2",{id:"make-a-small-donation"},"Make a small donation"),(0,r.kt)("p",null,"Please only do this is you can definitely afford to. Don't feel any pressure to donate anything, as Dashy and my other projects will always be 100% free, for everyone, for ever."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/sponsors/Lissy93"},(0,r.kt)("img",{parentName:"a",src:"https://raw.githubusercontent.com/Lissy93/dashy/master/docs/assets/sponsor-button.svg",alt:"Sponsor Lissy93 on GitHub"}))),(0,r.kt)("p",null,"Sponsoring will give you several perks, from $1 / \xa30.70 per month, as well as a sponsor badge on your profile, you can also be credited on the readme, with a link to your website/ profile/ socials, get priority support,  have your feature ideas implemented, plus lots more. For more info, see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sponsors/Lissy93"},"@Lissy93's Sponsor Page"),"."),(0,r.kt)("h2",{id:"request-a-feature-via-bountysource"},"Request a feature via BountySource"),(0,r.kt)("p",null,"BountySource is a platform for sponsoring the development of certain features on open source projects. If there is a feature you'd like implemented into Dashy, but either isn't high enough priority or is deemed to be more work than it's worth, then you can instead contribute a bounty towards it's development. You won't pay a penny until your proposal is fully built, and you are satisfied with the result. This helps support the developers, and makes Dashy better for everyone."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.bountysource.com/teams/dashy"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/BountySource-Dashy-%23F67909?style=for-the-badge&logo=openbugbounty",alt:"Request a Feature on BountySource"}))),(0,r.kt)("h2",{id:"enable-anonymous-bug-reports"},"Enable Anonymous Bug Reports"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/getsentry/sentry"},"Sentry")," is an open source error tracking and performance monitoring tool, which enables the identification any errors which occur in the production app (only if you enable it). It helps me to discover bugs I was unaware of, and then fix them, in order to make Dashy more reliable long term. This is a simple, yet really helpful step you can take to help improve Dashy."),(0,r.kt)("p",null,"To enable error reporting:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"appConfig:\n  enableErrorReporting: true\n")),(0,r.kt)("p",null,"All reporting is ",(0,r.kt)("strong",{parentName:"p"},"disabled")," by default, and no data will ever be sent to any external endpoint without your explicit consent. In fact, the error tracking package will not even be imported unless you have actively enabled it. All statistics are anonomized and stored securely. For more about privacy and security, see the ",(0,r.kt)("a",{parentName:"p",href:"https://sentry.io/security/"},"Sentry Docs"),"."),(0,r.kt)("h2",{id:"follow-for-more"},"Follow for More"),(0,r.kt)("p",null,"If you've enjoyed Dashy, you can follow the me to get updates about other projects that I am working on."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/Lissy_Sykes"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/twitter/follow/Lissy_Sykes?style=social&logo=twitter",alt:"Alicia Sykes on Twitter"})),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Lissy93"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/github/followers/lissy93?label=Lissy93&style=social",alt:"Alicia Sykes on GitHub"})),"\n",(0,r.kt)("a",{parentName:"p",href:"https://mastodon.social/web/accounts/1032965"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/mastodon/follow/1032965?domain=https%3A%2F%2Fmastodon.social",alt:"Alicia Sykes on Mastodon"})),"\n",(0,r.kt)("a",{parentName:"p",href:"https://keybase.io/aliciasykes"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/aliciasykes--lightgrey?style=social&logo=Keybase",alt:"Alicia Sykes on Keybase"})),"\n",(0,r.kt)("a",{parentName:"p",href:"https://keybase.io/aliciasykes/pgp_keys.asc"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/PGP--lightgrey?style=social&logo=Let%E2%80%99s%20Encrypt",alt:"Alicia Sykes's PGP"})),"\n",(0,r.kt)("a",{parentName:"p",href:"https://aliciasykes.com"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/aliciasykes.com--lightgrey?style=social&logo=Tencent%20QQ",alt:"Alicia Sykes's Website"})),"\n",(0,r.kt)("a",{parentName:"p",href:"https://notes.aliciasykes.com/"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Blog--lightgrey?style=social&logo=micro.blog",alt:"Alicia Sykes's Blog"}))),(0,r.kt)("p",null,"If you like, you could also consider ",(0,r.kt)("a",{parentName:"p",href:"https://notes.aliciasykes.com/subscribe"},"subscribing to my mailing list")," for very occasional blog post updates, or even ",(0,r.kt)("a",{parentName:"p",href:"https://stars.github.com/nominate/"},"nominating me (",(0,r.kt)("inlineCode",{parentName:"a"},"@lissy93"),")")," on the GitHub Star Programme."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"contributors"},"Contributors"),(0,r.kt)("p",null,"For a full list of Dashy's contributors, see the ",(0,r.kt)("a",{parentName:"p",href:"/docs/credits"},"Credits Page")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/Lissy93/dashy/master/docs/assets/CONTRIBUTORS.svg",alt:"Auto-generated contributors"})),(0,r.kt)("h3",{id:"star-gazers-over-time"},"Star-Gazers Over Time"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://starchart.cc/Lissy93/dashy.svg",alt:"Stargazers"})))}d.isMDXComponent=!0}}]);