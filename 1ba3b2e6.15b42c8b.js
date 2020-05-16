(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{118:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return p}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),d=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=d(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=d(n),m=a,p=b["".concat(r,".").concat(m)]||b[m]||u[m]||o;return n?i.a.createElement(p,c({ref:t},s,{components:n})):i.a.createElement(p,c({ref:t},s))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var s=2;s<o;s++)r[s]=n[s];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},98:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var a=n(2),i=n(7),o=(n(0),n(118)),r={id:"edit-tutorial",title:"Editing a Tutorial",sidebar_label:"Editing a Tutorial"},c={id:"edit-tutorial",title:"Editing a Tutorial",description:"Once you've created a tutorial, you'll need a way to version and update new releases.",source:"@site/docs/edit-tutorial.md",permalink:"/docs/edit-tutorial",editUrl:"https://github.com/coderoad/coderoad-vscode/edit/master/docs/docs/edit-tutorial.md",sidebar_label:"Editing a Tutorial",sidebar:"someSidebar",previous:{title:"Test Examples",permalink:"/docs/test-examples"}},l=[{value:"1. Editing Markdown",id:"1-editing-markdown",children:[]},{value:"2. Editing Git Commits",id:"2-editing-git-commits",children:[]},{value:"Editing A Commit",id:"editing-a-commit",children:[]},{value:"Adding Additional Commits",id:"adding-additional-commits",children:[]},{value:"Rewording a Commit",id:"rewording-a-commit",children:[]},{value:"Oops! Something Went Wrong",id:"oops-something-went-wrong",children:[]}],s={rightToc:l};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Once you've created a tutorial, you'll need a way to version and update new releases."),Object(o.b)("p",null,"Tutorials are made of two parts: Markdown & Git commits."),Object(o.b)("h3",{id:"1-editing-markdown"},"1. Editing Markdown"),Object(o.b)("p",null,"When editing markdown, simply edit the markdown and re-run the builder."),Object(o.b)("h3",{id:"2-editing-git-commits"},"2. Editing Git Commits"),Object(o.b)("p",null,'Editing Git commits is a bit harder, and involves a part of Git called an "interactive rebase".'),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},'Create a new branch and give it a versioned named, like "v0.2". It\'s important to create a new branch as we will be changing the git commit history.')),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"git checkout -b v0.2\n")),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"Start an interactive rebase.")),Object(o.b)("p",null,"When editing code, you'll need to rebase. You can use VSCode as your default editor for Git: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://blog.soltysiak.it/en/2017/01/set-visual-studio-code-as-default-git-editor-and-diff-tool/."}),"https://blog.soltysiak.it/en/2017/01/set-visual-studio-code-as-default-git-editor-and-diff-tool/.")),Object(o.b)("p",null,"Run rebase starting at a commit target, or just from the start with ",Object(o.b)("inlineCode",{parentName:"p"},"--root"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"git rebase -i --root\n")),Object(o.b)("h3",{id:"editing-a-commit"},"Editing A Commit"),Object(o.b)("p",null,"Choose the commit you want to edit"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),"pick b73feaf commit 2.1 setup\npick 0a3aa83 commit 2.1 solution\npick 0d67935 commit 3.1 setup\n")),Object(o.b)("p",null,'Let\'s say we want to edit step 2.1 Change the word pick to "edit" or "e".'),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),"e b73feaf commit 2.1 setup\n")),Object(o.b)("p",null,'Save the modified rebase summary file and your rebase will start. Git will run through the commits until the first flagged "edit", then stop at the commit.'),Object(o.b)("p",null,'Make the file changes you planned, then "add" your changes to git.'),Object(o.b)("p",null,"To complete rebasing:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"git rebase --continue\n")),Object(o.b)("p",null,"If you encounter any merge conflicts along the way, resolve them, add the changes and continue as above."),Object(o.b)("h3",{id:"adding-additional-commits"},"Adding Additional Commits"),Object(o.b)("p",null,"Let's say we wanted to add an additional commit after the 2.1 solution."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),"pick b73feaf commit 2.1 setup\npick 0a3aa83 commit 2.1 solution\npick 0d67935 commit 3.1 setup\n")),Object(o.b)("p",null,'To cause the rebase to pause after a commit, use the word "break" or "b".'),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),"pick b73feaf commit 2.1 setup\npick 0a3aa83 commit 2.1 solution\nbreak\npick 0d67935 commit 3.1 setup\n")),Object(o.b)("p",null,'Save the rebase summary file to start the process. The process should stop at the "break".'),Object(o.b)("p",null,"Add the commits you want, and when you finish continue:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"git rebase --continue\n")),Object(o.b)("p",null,'If you encounter any merge conflicts along the way, resolve them, add the changes and continue as documented in the "editing a commit" section.'),Object(o.b)("h3",{id:"rewording-a-commit"},"Rewording a Commit"),Object(o.b)("p",null,'Let\'s say we wanted to change the title of commit "3.1" to "2.2".'),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),"pick b73feaf commit 2.1 setup\npick 0a3aa83 commit 2.1 solution\npick 0d67935 commit 3.1 setup\n")),Object(o.b)("p",null,'You can use the "reword" or "r" method.'),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),"pick b73feaf commit 2.1 setup\npick 0a3aa83 commit 2.1 solution\nreword 0d67935 commit 3.1 setup\n")),Object(o.b)("p",null,"When you're finished, just save the file and the commits will be updated."),Object(o.b)("h3",{id:"oops-something-went-wrong"},"Oops! Something Went Wrong"),Object(o.b)("p",null,"Rebasing is a difficult skill to master, but you can get good at it with time. That said, time travelling is a complicated process and a lot can go wrong."),Object(o.b)("p",null,"If something goes wrong during your rebase, you can abort by running:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"git rebase --abort\n")),Object(o.b)("p",null,"It's best to only run rebase on new branches so that you'll always be able to get back to your last working version."))}d.isMDXComponent=!0}}]);