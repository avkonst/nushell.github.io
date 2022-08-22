import{_ as t,o as n,c as o,a as e,t as s,d as r,e as d}from"./app.d95d2c43.js";const c={},i={id:"frontmatter-title",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),l=r(),h={style:{"white-space":"pre-wrap"}},u=d(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; from ods --sheets</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--sheets {list&lt;string&gt;}</code>: Only convert specified sheets</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Convert binary .ods data to a table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> --raw test.ods <span class="token operator">|</span> from ods
</code></pre></div><p>Convert binary .ods data to a table, specifying the tables</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> --raw test.ods <span class="token operator">|</span> from ods -s <span class="token punctuation">[</span>Spreadsheet1<span class="token punctuation">]</span>
</code></pre></div>`,9);function f(a,_){return n(),o("div",null,[e("h1",i,[p,l,e("code",null,s(a.$frontmatter.title),1)]),e("div",h,s(a.$frontmatter.usage),1),u])}var g=t(c,[["render",f],["__file","from_ods.html.vue"]]);export{g as default};