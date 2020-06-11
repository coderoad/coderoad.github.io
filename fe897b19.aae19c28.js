(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{120:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(2),o=n(6),i=(n(0),n(123)),c={id:"init-commit",title:"Initial Commit",sidebar_label:"Init Commit"},a={id:"init-commit",title:"Initial Commit",description:"Include basic setup for your project.",source:"@site/docs/init-commit.md",permalink:"/docs/init-commit",editUrl:"https://github.com/coderoad/coderoad-vscode/edit/master/docs/docs/init-commit.md",sidebar_label:"Init Commit",sidebar:"someSidebar",previous:{title:"Git Timeline",permalink:"/docs/git-timeline"},next:{title:"Test Runner",permalink:"/docs/test-runner"}},l=[],u={rightToc:l};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Include basic setup for your project."),Object(i.b)("p",null,"The first commit requires some necessary setup. See an example: ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ShMcK/coderoad-fcc-basic-node-and-express/commit/c722f9e9ec8f94d7fba04cfa3375e0896346ced0"}),"init \xb7 ShMcK/coderoad-fcc-basic-node-and-express@c722f9e \xb7 GitHub"),". A JS project should include:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},".gitignore - ignore ",Object(i.b)("inlineCode",{parentName:"li"},"package-lock.json")," or it will cause merge conflicts"),Object(i.b)("li",{parentName:"ul"},".vscode/extensions - would recommend \u201cdbaeumer.vscode-eslint\u201d"),Object(i.b)("li",{parentName:"ul"},".vscode/launch.json - file for running the debugger"),Object(i.b)("li",{parentName:"ul"},".vscode/settings.json - ensure that ",Object(i.b)("inlineCode",{parentName:"li"},"formatOnSave")," and linting are enabled"),Object(i.b)("li",{parentName:"ul"},"README.md"),Object(i.b)("li",{parentName:"ul"},"package.json - include test commands - include repo - include test runner dependencies")),Object(i.b)("p",null,"If starting a project with React, bear in mind that create-react-app runs some pretty hacky processes behind the scenes. You can use the following boilerplate in your project: ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ShMcK/coderoad-tutorial-tweeter/commit/059e0041691f39e3bf078022512d01a93214b6bb"}),"init with coderoad react tutorial starter \xb7 ShMcK/coderoad-tutorial-tweeter@059e004 \xb7 GitHub")))}s.isMDXComponent=!0},123:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a({},t,{},e)),n},p=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,b=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return n?o.a.createElement(b,a({ref:t},u,{components:n})):o.a.createElement(b,a({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var u=2;u<i;u++)c[u]=n[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);