(self.webpackChunkdashy=self.webpackChunkdashy||[]).push([[120],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=o,h=m["".concat(s,".").concat(u)]||m[u]||c[u]||i;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9502:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var a=n(2122),o=n(9756),i=(n(7294),n(3905)),r=["components"],l={},s="Theming",p={unversionedId:"theming",id:"theming",isDocsHomePage:!1,title:"Theming",description:"By default Dashy comes with 20 built in themes, which can be applied from the dropwodwn menu in the UI",source:"@site/docs/theming.md",sourceDirName:".",slug:"/theming",permalink:"/docs/theming",editUrl:"https://github.com/Lissy93/dashy/edit/gh-pages/docs/docs/theming.md",version:"current",frontMatter:{},sidebar:"dashySidebar",previous:{title:"Icons",permalink:"/docs/icons"},next:{title:"Status Indicators",permalink:"/docs/status-indicators"}},d=[{value:"How Theme-Switching Works",id:"how-theme-switching-works",children:[]},{value:"Modifying Theme Colors",id:"modifying-theme-colors",children:[]},{value:"Adding your own Theme",id:"adding-your-own-theme",children:[]},{value:"Setting Custom CSS in the UI",id:"setting-custom-css-in-the-ui",children:[]},{value:"Loading External Stylesheets",id:"loading-external-stylesheets",children:[]},{value:"Hard-Coding Section or Item Colors",id:"hard-coding-section-or-item-colors",children:[]},{value:"Typography",id:"typography",children:[]},{value:"CSS Variables",id:"css-variables",children:[]}],c={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"theming"},"Theming"),(0,i.kt)("p",null,"By default Dashy comes with 20 built in themes, which can be applied from the dropwodwn menu in the UI"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.ibb.co/GV3wRss/Dashy-Themes.png",alt:"Built-in Themes"})),(0,i.kt)("p",null,"You can also add your own themes, apply custom styles, and modify colors."),(0,i.kt)("p",null,"You can customize Dashy by writing your own CSS, which can be loaded either as an external stylesheet, set directly through the UI, or specified in the config file. Most styling options can be set through CSS variables, which are outlined below."),(0,i.kt)("p",null,"The following content requires that you have a basic understanding of CSS. If you're just beginning, you may find ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps"},"this article")," helpful."),(0,i.kt)("h3",{id:"how-theme-switching-works"},"How Theme-Switching Works"),(0,i.kt)("p",null,"The theme switching is done by simply changing the ",(0,i.kt)("inlineCode",{parentName:"p"},"data-theme")," attribute on the root DOM element, which can then be targeted by CSS. First off, in order for the theme to show up in the theme switcher, it needs to be added to the config file, under ",(0,i.kt)("inlineCode",{parentName:"p"},"appConfig.cssThemes"),", either as a string, or an array of strings for multiple themes. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"appConfig:\n  cssThemes: ['tiger', 'another-theme']\n")),(0,i.kt)("p",null,"You can now create a block to target you're theme with ",(0,i.kt)("inlineCode",{parentName:"p"},"html[data-theme='my-theme']{}")," and set some styles. The easiest method is by setting CSS variables, but you can also directly override elements by their selector. As an example, see the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Lissy93/dashy/blob/master/src/styles/color-themes.scss"},"built-in CSS themes"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},"html[data-theme='tiger'] {\n  --primary: #f58233;\n  --background: #0b1021;\n}\n")),(0,i.kt)("p",null,"Finally, from the UI use the theme dropdown menu to select your new theme, and your styles will be applied."),(0,i.kt)("p",null,"You can also set ",(0,i.kt)("inlineCode",{parentName:"p"},"appConfig.theme")," to pre-select a default theme, which will be applied immediately after deployment."),(0,i.kt)("h3",{id:"modifying-theme-colors"},"Modifying Theme Colors"),(0,i.kt)("p",null,"Themes can be modified either through the UI, using the color picker menu (to the right of the theme dropdown), or directly in the config file, under ",(0,i.kt)("inlineCode",{parentName:"p"},"appConfig.customColors"),". Here you can specify the value for any of the ",(0,i.kt)("a",{parentName:"p",href:"#css-variables"},"available CSS variables"),"."),(0,i.kt)("p",{align:"center"},(0,i.kt)("a",{href:"https://i.ibb.co/cLDXj1R/dashy-theme-configurator.gif"},(0,i.kt)("img",{alt:"Example Themes",src:"https://raw.githubusercontent.com/Lissy93/dashy/master/docs/assets/theme-config-demo.gif",width:"400"}))),(0,i.kt)("p",null,"By default, any color modifications made to the current theme through the UI will only be applied locally. If you need these settings to be set globally, then click the 'Export' button, to get the color codes and variable names, which can then be backed up, or saved in your config file."),(0,i.kt)("p",null,"Custom colors are saved relative the the base theme selected. So if you switch themes after setting custom colors, then you're settings will no longer be applied. You're changes are not lost though, and switching back to the original theme will see your styles reapplied."),(0,i.kt)("p",null,"If these values are specified in your ",(0,i.kt)("inlineCode",{parentName:"p"},"conf.yml")," file, then it will look something like the below example. Note that in YAML, values or keys which contain special characters, must be wrapped in quotes."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"appConfig:\n  customColors:\n    oblivion:\n      primary: '#75efff'\n      background: '#2a3647'\n    dracula:\n      primary: '#8be9fd'\n")),(0,i.kt)("h3",{id:"adding-your-own-theme"},"Adding your own Theme"),(0,i.kt)("p",null,"User-defined styles and custom themes should be defined in ",(0,i.kt)("inlineCode",{parentName:"p"},"./src/styles/user-defined-themes.scss"),". If you're using Docker, you can pass your own stylesheet in using the ",(0,i.kt)("inlineCode",{parentName:"p"},"--volume")," flag. E.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"v ./my-themes.scss:/app/src/styles/user-defined-themes.scss"),". Don't forget to pass your theme name into ",(0,i.kt)("inlineCode",{parentName:"p"},"appConfig.cssThemes")," so that it shows up on the theme-switcher dropdown."),(0,i.kt)("h3",{id:"setting-custom-css-in-the-ui"},"Setting Custom CSS in the UI"),(0,i.kt)("p",null,"Custom CSS can be developed, tested and applied directly through the UI. Although you will need to make note of your changes to apply them across instances."),(0,i.kt)("p",null,"This can be done from the Config menu (spanner icon in the top-right), under the Custom Styles tab. This is then associated with ",(0,i.kt)("inlineCode",{parentName:"p"},"appConfig.customCss")," in local storage. Styles can also be directly applied to this attribute in the config file, but this may get messy very quickly if you have a lot of CSS."),(0,i.kt)("h3",{id:"loading-external-stylesheets"},"Loading External Stylesheets"),(0,i.kt)("p",null,"The URI of a stylesheet, either local or hosted on a remote CDN can be passed into the config file. The attribute ",(0,i.kt)("inlineCode",{parentName:"p"},"appConfig.externalStyleSheet")," accepts either a string, or an array of strings. You can also pass custom font stylesheets here, they must be in a CSS format (for example, ",(0,i.kt)("inlineCode",{parentName:"p"},"https://fonts.googleapis.com/css2?family=Cutive+Mono"),").\nThis is handled in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Lissy93/dashy/blob/master/src/utils/ThemeHelper.js"},(0,i.kt)("inlineCode",{parentName:"a"},"ThemeHelper.js")),"."),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"appConfig:\n  externalStyleSheet: 'https://example.com/my-stylesheet.css'\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"appConfig:\n  externalStyleSheet: ['/themes/my-theme-1.css', '/themes/my-theme-2.css']\n")),(0,i.kt)("h3",{id:"hard-coding-section-or-item-colors"},"Hard-Coding Section or Item Colors"),(0,i.kt)("p",null,"Some UI components have a color option, that can be set in the config file, to force the color of a given item or section no matter what theme is selected. These colors should be expressed as hex codes (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"#fff"),") or HTML colors (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"red"),"). The following attributes are supported:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"section.color")," - Custom color for a given section"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"item.color")," - Font and icon color for a given item"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"item.backgroundColor")," - Background color for a given icon")),(0,i.kt)("h3",{id:"typography"},"Typography"),(0,i.kt)("p",null,"Essential fonts bundled within the app are located within ",(0,i.kt)("inlineCode",{parentName:"p"},"./src/assets/fonts/"),". All optional fonts that are used by themes are stored in ",(0,i.kt)("inlineCode",{parentName:"p"},"./public/fonts/"),", if you want to add your own font, this is where you should put it. As with assets, if you're using Docker then using a volume to link a directory on your host system with this path within the container will make management much easier."),(0,i.kt)("p",null,"Fonts which are not being used by the current theme are ",(0,i.kt)("strong",{parentName:"p"},"not")," fetched on page load. They are instead only loaded into the application if and when they are required. So having multiple themes with various typefaces shouldn't have any negative impact on performance."),(0,i.kt)("p",null,"Full credit to the typographers behind each of the included fonts. Specifically: Matt McInerney, Christian Robertson, Haley Fiege, Peter Hull, Cyreal and the legendary Vernon Adams"),(0,i.kt)("h3",{id:"css-variables"},"CSS Variables"),(0,i.kt)("p",null,"All colors as well as other variable values (such as borders, border-radius, shadows) are specified as CSS variables. This makes theming the application easy, as you only need to change a given color or value in one place. You can find all variables in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Lissy93/dashy/blob/master/src/styles/color-palette.scss"},(0,i.kt)("inlineCode",{parentName:"a"},"color-palette.scss"))," and the themes which make use of these color variables are specified in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Lissy93/dashy/blob/master/src/styles/color-themes.scss"},(0,i.kt)("inlineCode",{parentName:"a"},"color-themes.scss"))),(0,i.kt)("p",null,"CSS variables are simple to use. You define them like: ",(0,i.kt)("inlineCode",{parentName:"p"},"--background: #fff;")," and use them like: ",(0,i.kt)("inlineCode",{parentName:"p"},"body { background-color: var(--background); }"),". For more information, see this guide on using ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties"},"CSS Variables"),"."),(0,i.kt)("p",null,"You can determine the variable used by any given element, and visualize changes using the browser developer tools (Usually opened with ",(0,i.kt)("inlineCode",{parentName:"p"},"F12"),", or Options --\x3e More --\x3e Developer Tools). Under the elements tab, click the Element Selector icon (usually top-left corner), you will then be able to select any DOM element on the page by hovering and clicking it. In the CSS panel you will see all styles assigned to that given element, including CSS variables. Click a variable to see it's parent value, and for color attributes, click the color square to modify the color. For more information, see this ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_are_browser_developer_tools"},"getting started guide"),", and these articles on ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Tools/Page_Inspector/How_to/Select_an_element"},"selecting elements")," and ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Tools/Page_Inspector/How_to/Inspect_and_select_colors"},"inspecting and modifying colors"),"."),(0,i.kt)("h4",{id:"top-level-variables"},"Top-Level Variables"),(0,i.kt)("p",null,"These are all that are required to create a theme. All other variables inherit their values from these variables, and can optionally be overridden."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--primary")," - Application primary color. Used for title, text, accents, and other features"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--background")," - Application background color"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--background-darker")," - Secondary background color (usually darker), used for navigation bar, section fill, footer etc"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--curve-factor")," - The border radius used globally throughout the application. Specified in ",(0,i.kt)("inlineCode",{parentName:"li"},"px"),", defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"5px")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--dimming-factor")," - Inactive elements have slight transparency. This can be between ",(0,i.kt)("inlineCode",{parentName:"li"},"0")," (invisible) and ",(0,i.kt)("inlineCode",{parentName:"li"},"1")," (normal), defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"0.7"))),(0,i.kt)("h4",{id:"targeted-color-variables"},"Targeted Color Variables"),(0,i.kt)("p",null,"You can target specific elements on the UI with these variables. All are optional, since by default, they inherit their values from above"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--heading-text-color")," - Text color for web page heading and sub-heading. Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"--primary")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--nav-link-text-color")," - The text color for links displayed in the navigation bar. Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"--primary")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--nav-link-background-color")," - The background color for links displayed in the navigation bar"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--nav-link-text-color-hover")," - The text color when a navigation bar link is hovered over. Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"--primary")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--nav-link-background-color-hover")," - The background color for nav bar links when hovered over "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--nav-link-border-color")," - The border color for nav bar links. Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"transparent")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--nav-link-border-color-hover")," - The border color for nav bar links when hovered over. Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"--primary")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--search-container-background")," - Background for the container containing the search bar. Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"--background-darker")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--search-field-background")," - Fill color for the search bar. Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"--background")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--settings-background")," - The background for the quick settings. Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"--background")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--settings-text-color")," - The text and icon color for quick settings. Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"--primary")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--footer-text-color")," - Color for text within the footer. Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"--medium-grey")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--footer-text-color-link")," - Color for any hyperlinks within the footer. Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"--primary")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--item-text-color")," - The text and icon color for items. Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"--primary")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--item-group-outer-background")," - The background color for the outer part of a section (including section head). Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"--primary")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--item-group-background")," - The background color for the inner part of item groups. Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"#0b1021cc")," (semi-transparent black)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--item-group-heading-text-color")," - The text color for section headings. Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"--item-group-background"),";"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--item-group-heading-text-color-hover")," - The text color for section headings, when hovered. Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"--background")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--config-code-background")," - Background color for the JSON editor in the config menu. Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"#fff")," (white)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--config-code-color")," - Text color for the non-highlighted code within the JSON editor. Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"--background")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--config-settings-color")," - The background for the config/ settings pop-up modal. Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"--primary")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--config-settings-background")," - The text color for text within the settings container. Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"--background-darker")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--scroll-bar-color")," - Color of the scroll bar thumb. Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"--primary")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--scroll-bar-background")," Color of the scroll bar blank space. Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"--background-darker")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--highlight-background")," Fill color for text highlighting. Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"--primary")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--highlight-color")," Text color for selected/ highlighted text. Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"--background")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--toast-background")," - Background color for the toast info popup. Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"--primary")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--toast-color")," - Text, icon and border color in the toast info popup. Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"--background")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--welcome-popup-background")," - Background for the info pop-up shown on first load. Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"--background-darker")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--welcome-popup-text-color")," - Text color for the welcome pop-up. Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"--primary")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--side-bar-background")," - Background color of the sidebar used in the workspace view. Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"--background-darker")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--side-bar-color")," - Color of icons and text within the sidebar. Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"--primary")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--status-check-tooltip-background")," - Background color for status check tooltips. Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"--background-darker")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--status-check-tooltip-color")," - Text color for the status check tooltips. Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"--primary")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--code-editor-color")," - Text color used within raw code editors. Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"--black")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--code-editor-background")," - Background color for raw code editors. Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"--white")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--context-menu-color")," - Text color for right-click context menu over items. Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"--primary")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--context-menu-background")," - Background color of right-click context menu. Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"--background")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--context-menu-secondary-color")," - Border and outline color for context menu. Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"--background-darker"))),(0,i.kt)("h4",{id:"non-color-variables"},"Non-Color Variables"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--outline-color")," - Used to outline focused or selected elements"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--curve-factor-navbar")," - The border radius of the navbar. Usually this is greater than ",(0,i.kt)("inlineCode",{parentName:"li"},"--curve-factor")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--scroll-bar-width")," - Width of horizontal and vertical scroll bars. E.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"8px")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--item-group-padding")," - Inner padding of sections, determines the width of outline. E.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"5px")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--item-shadow")," - Shadow for items. E.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"1px 1px 2px #130f23")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--item-hover-shadow")," - Shadow for items when hovered over. E.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"1px 2px 4px #373737")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--item-icon-transform")," - A ",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/transform"},"transform")," property, to modify item icons. E.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"drop-shadow(2px 4px 6px var(--transparent-50)) saturate(0.65)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--item-icon-transform-hover")," - Same as above, but applied when an item is hovered over. E.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"drop-shadow(4px 8px 3px var(--transparent-50)) saturate(2)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--item-group-shadow")," - The shadow for an item group/ section. Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"--item-shadow")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--settings-container-shadow")," - A shadow property for the settings container. E.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"none"))),(0,i.kt)("h4",{id:"action-colors"},"Action Colors"),(0,i.kt)("p",null,"These colors represent intent, and so are not often changed, but you can do so if you wish"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--info")," - Information color, usually blue / ",(0,i.kt)("inlineCode",{parentName:"li"},"#04e4f4")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--success")," - Success color, usually green / ",(0,i.kt)("inlineCode",{parentName:"li"},"#20e253")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--warning")," - Warning color, usually yellow / ",(0,i.kt)("inlineCode",{parentName:"li"},"#f6f000")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--danger")," - Error/ danger color, usually red / ",(0,i.kt)("inlineCode",{parentName:"li"},"#f80363")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--neutral")," - Neutral color, usually grey / ",(0,i.kt)("inlineCode",{parentName:"li"},"#272f4d")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--white")," - Just white / ",(0,i.kt)("inlineCode",{parentName:"li"},"#fff")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--black")," - Just black / ",(0,i.kt)("inlineCode",{parentName:"li"},"#000"))))}m.isMDXComponent=!0}}]);