import{_ as n,o as t,c as r,a,t as s,d as o,e as c}from"./app.0aa3c79a.js";const p={},d={id:"frontmatter-title",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),l=o(),h={style:{"white-space":"pre-wrap"}},u=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; and (and)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>and</code>: AND expression</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Creates an AND expression</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">(</span>field a<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">1</span> <span class="token operator">|</span> and <span class="token punctuation">((</span>field a<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">|</span> into nu
</code></pre></div>`,7);function _(e,m){return t(),r("div",null,[a("h1",d,[i,l,a("code",null,s(e.$frontmatter.title),1)]),a("div",h,s(e.$frontmatter.usage),1),u])}const k=n(p,[["render",_],["__file","and.html.vue"]]);export{k as default};