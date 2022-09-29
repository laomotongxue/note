import{_ as n,c as s,o as a,a as l}from"./app.a7fc1445.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"1.init\u51FD\u6570","slug":"_1-init\u51FD\u6570","link":"#_1-init\u51FD\u6570","children":[]},{"level":3,"title":"2.main\u51FD\u6570","slug":"_2-main\u51FD\u6570","link":"#_2-main\u51FD\u6570","children":[]},{"level":3,"title":"3.\u4E24\u4E2A\u51FD\u6570\u7684\u6267\u884C\u987A\u5E8F","slug":"_3-\u4E24\u4E2A\u51FD\u6570\u7684\u6267\u884C\u987A\u5E8F","link":"#_3-\u4E24\u4E2A\u51FD\u6570\u7684\u6267\u884C\u987A\u5E8F","children":[]}],"relativePath":"go/3init\u548Cmain\u51FD\u6570.md"}'),e={name:"go/3init\u548Cmain\u51FD\u6570.md"},p=l(`<h3 id="_1-init\u51FD\u6570" tabindex="-1">1.init\u51FD\u6570 <a class="header-anchor" href="#_1-init\u51FD\u6570" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">1 init\u51FD\u6570\u662F\u7528\u4E8E\u7A0B\u5E8F\u6267\u884C\u524D\u505A\u5305\u7684\u521D\u59CB\u5316\u7684\u51FD\u6570\uFF0C\u6BD4\u5982\u521D\u59CB\u5316\u5305\u91CC\u7684\u53D8\u91CF\u7B49</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">2 \u6BCF\u4E2A\u5305\u53EF\u4EE5\u62E5\u6709\u591A\u4E2Ainit\u51FD\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">3 \u5305\u7684\u6BCF\u4E2A\u6E90\u6587\u4EF6\u4E5F\u53EF\u4EE5\u62E5\u6709\u591A\u4E2Ainit\u51FD\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">4 \u540C\u4E00\u4E2A\u5305\u4E2D\u591A\u4E2Ainit\u51FD\u6570\u7684\u6267\u884C\u987A\u5E8Fgo\u8BED\u8A00\u6CA1\u6709\u660E\u786E\u7684\u5B9A\u4E49(\u8BF4\u660E)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">5 \u4E0D\u540C\u5305\u7684init\u51FD\u6570\u6309\u7167\u5305\u5BFC\u5165\u7684\u4F9D\u8D56\u5173\u7CFB\u51B3\u5B9A\u8BE5\u521D\u59CB\u5316\u51FD\u6570\u7684\u6267\u884C\u987A\u5E8F</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">6 init\u51FD\u6570\u4E0D\u80FD\u88AB\u5176\u4ED6\u51FD\u6570\u8C03\u7528\uFF0C\u800C\u662F\u5728main\u51FD\u6570\u6267\u884C\u4E4B\u524D\uFF0C\u81EA\u52A8\u88AB\u8C03\u7528</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="_2-main\u51FD\u6570" tabindex="-1">2.main\u51FD\u6570 <a class="header-anchor" href="#_2-main\u51FD\u6570" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">Go\u8BED\u8A00\u7A0B\u5E8F\u7684\u9ED8\u8BA4\u5165\u53E3\u51FD\u6570(\u4E3B\u51FD\u6570)\uFF1Afunc main()</span></span>
<span class="line"><span style="color:#A6ACCD;">\u51FD\u6570\u4F53\u7528\uFF5B\uFF5D\u4E00\u5BF9\u62EC\u53F7\u5305\u88F9\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">func main(){</span></span>
<span class="line"><span style="color:#A6ACCD;">    //\u51FD\u6570\u4F53</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="_3-\u4E24\u4E2A\u51FD\u6570\u7684\u6267\u884C\u987A\u5E8F" tabindex="-1">3.\u4E24\u4E2A\u51FD\u6570\u7684\u6267\u884C\u987A\u5E8F <a class="header-anchor" href="#_3-\u4E24\u4E2A\u51FD\u6570\u7684\u6267\u884C\u987A\u5E8F" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u5BF9\u540C\u4E00\u4E2Ago\u6587\u4EF6\u7684init()\u8C03\u7528\u987A\u5E8F\u662F\u4ECE\u4E0A\u5230\u4E0B\u7684\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u5BF9\u540C\u4E00\u4E2Apackage\u4E2D\u4E0D\u540C\u6587\u4EF6\u662F\u6309\u6587\u4EF6\u540D\u5B57\u7B26\u4E32\u6BD4\u8F83\u201C\u4ECE\u5C0F\u5230\u5927\u201D\u987A\u5E8F\u8C03\u7528\u5404\u6587\u4EF6\u4E2D\u7684init()\u51FD\u6570\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u5BF9\u4E8E\u4E0D\u540C\u7684package\uFF0C\u5982\u679C\u4E0D\u76F8\u4E92\u4F9D\u8D56\u7684\u8BDD\uFF0C\u6309\u7167main\u5305\u4E2D&quot;\u5148import\u7684\u540E\u8C03\u7528&quot;\u7684\u987A\u5E8F\u8C03\u7528\u5176\u5305\u4E2D\u7684init()\uFF0C\u5982\u679Cpackage\u5B58\u5728\u4F9D\u8D56\uFF0C\u5219\u5148\u8C03\u7528\u6700\u65E9\u88AB\u4F9D\u8D56\u7684package\u4E2D\u7684init()\uFF0C\u6700\u540E\u8C03\u7528main\u51FD\u6570\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">\u5982\u679Cinit\u51FD\u6570\u4E2D\u4F7F\u7528\u4E86println()\u6216\u8005print()\u4F60\u4F1A\u53D1\u73B0\u5728\u6267\u884C\u8FC7\u7A0B\u4E2D\u8FD9\u4E24\u4E2A\u4E0D\u4F1A\u6309\u7167\u4F60\u60F3\u8C61\u4E2D\u7684\u987A\u5E8F\u6267\u884C\u3002\u8FD9\u4E24\u4E2A\u51FD\u6570\u5B98\u65B9\u53EA\u63A8\u8350\u5728\u6D4B\u8BD5\u73AF\u5883\u4E2D\u4F7F\u7528\uFF0C\u5BF9\u4E8E\u6B63\u5F0F\u73AF\u5883\u4E0D\u8981\u4F7F\u7528\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,6),i=[p];function c(r,t,o,b,A,m){return a(),s("div",null,i)}const d=n(e,[["render",c]]);export{u as __pageData,d as default};
