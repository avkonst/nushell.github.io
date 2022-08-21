import{_ as n,o,c as a,a as e,b as c,w as l,d as t,r as d}from"./app.d1fed4d6.js";const i={},r=e("h1",{id:"escaping-to-the-system",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#escaping-to-the-system","aria-hidden":"true"},"#"),t(" Escaping to the system")],-1),h=t('Nu provides a set of commands that you can use across different OSes ("internal" commands), and having this consistency is helpful. Sometimes, though, you want to run an external command that has the same name as an internal Nu command. To run the external '),_=e("code",null,"ls",-1),m=t(" or "),u=e("code",null,"date",-1),p=t(" command, for example, you use the caret (^) command. Escaping with the caret prefix calls the command that's in the user's PATH (e.g. "),x=e("code",null,"/bin/ls",-1),g=t(" instead of Nu's internal "),f=e("code",null,"ls",-1),v=t(" command)."),y=e("p",null,"Nu internal command:",-1),N=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`> ls
`)])],-1),k=e("p",null,"Escape to external command:",-1),b=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`> ^ls
`)])],-1);function w(E,B){const s=d("RouterLink");return o(),a("div",null,[r,e("p",null,[h,_,m,u,p,x,g,c(s,{to:"/book/commands/ls.html"},{default:l(()=>[f]),_:1}),v]),y,N,k,b])}var V=n(i,[["render",w],["__file","escaping.html.vue"]]);export{V as default};