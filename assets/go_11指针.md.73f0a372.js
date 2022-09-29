import{_ as s,c as n,o as a,a as l}from"./app.a7fc1445.js";const C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"1.\u53EA\u9700\u8BB0\u4F4F\u4E24\u4E2A\u7B26\u53F7","slug":"_1-\u53EA\u9700\u8BB0\u4F4F\u4E24\u4E2A\u7B26\u53F7","link":"#_1-\u53EA\u9700\u8BB0\u4F4F\u4E24\u4E2A\u7B26\u53F7","children":[]},{"level":3,"title":"2.\u53D6\u53D8\u91CF\u6307\u9488\u7684\u8BED\u6CD5\u5982\u4E0B","slug":"_2-\u53D6\u53D8\u91CF\u6307\u9488\u7684\u8BED\u6CD5\u5982\u4E0B","link":"#_2-\u53D6\u53D8\u91CF\u6307\u9488\u7684\u8BED\u6CD5\u5982\u4E0B","children":[]},{"level":3,"title":"3.\u51FD\u6570\u53C2\u6570\u4F20\u6307\u9488","slug":"_3-\u51FD\u6570\u53C2\u6570\u4F20\u6307\u9488","link":"#_3-\u51FD\u6570\u53C2\u6570\u4F20\u6307\u9488","children":[]},{"level":3,"title":"4.\u7A7A\u6307\u9488","slug":"_4-\u7A7A\u6307\u9488","link":"#_4-\u7A7A\u6307\u9488","children":[]},{"level":3,"title":"5.map\u548Cnew","slug":"_5-map\u548Cnew","link":"#_5-map\u548Cnew","children":[]},{"level":3,"title":"6.new","slug":"_6-new","link":"#_6-new","children":[]},{"level":3,"title":"7.make","slug":"_7-make","link":"#_7-make","children":[]},{"level":3,"title":"8.new\u4E0Emake\u7684\u533A\u522B","slug":"_8-new\u4E0Emake\u7684\u533A\u522B","link":"#_8-new\u4E0Emake\u7684\u533A\u522B","children":[]}],"relativePath":"go/11\u6307\u9488.md"}'),p={name:"go/11\u6307\u9488.md"},e=l(`<h3 id="_1-\u53EA\u9700\u8BB0\u4F4F\u4E24\u4E2A\u7B26\u53F7" tabindex="-1">1.\u53EA\u9700\u8BB0\u4F4F\u4E24\u4E2A\u7B26\u53F7 <a class="header-anchor" href="#_1-\u53EA\u9700\u8BB0\u4F4F\u4E24\u4E2A\u7B26\u53F7" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&amp; \u53D6\u5730\u5740</span></span>
<span class="line"><span style="color:#A6ACCD;">* \u6839\u636E\u5730\u5740\u53D6\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="_2-\u53D6\u53D8\u91CF\u6307\u9488\u7684\u8BED\u6CD5\u5982\u4E0B" tabindex="-1">2.\u53D6\u53D8\u91CF\u6307\u9488\u7684\u8BED\u6CD5\u5982\u4E0B <a class="header-anchor" href="#_2-\u53D6\u53D8\u91CF\u6307\u9488\u7684\u8BED\u6CD5\u5982\u4E0B" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">ptr := &amp;v    // v\u7684\u7C7B\u578B\u4E3AT</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    a </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span></span>
<span class="line"><span style="color:#A6ACCD;">    b </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;">a   </span><span style="color:#676E95;">// \u53D6a\u53D8\u91CF\u7684\u5730\u5740</span></span>
<span class="line"><span style="color:#A6ACCD;">    fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Printf</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">a:%d ptr:%p</span><span style="color:#A6ACCD;">\\n</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// a:10 ptr:0xc00001a078</span></span>
<span class="line"><span style="color:#A6ACCD;">    fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Printf</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">b:%p type:%T</span><span style="color:#A6ACCD;">\\n</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> b</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> b</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// b:0xc00001a078 type:*int</span></span>
<span class="line"><span style="color:#A6ACCD;">    fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(&amp;</span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">                    </span><span style="color:#676E95;">// 0xc00000e018</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="_3-\u51FD\u6570\u53C2\u6570\u4F20\u6307\u9488" tabindex="-1">3.\u51FD\u6570\u53C2\u6570\u4F20\u6307\u9488 <a class="header-anchor" href="#_3-\u51FD\u6570\u53C2\u6570\u4F20\u6307\u9488" aria-hidden="true">#</a></h3><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">fmt</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u4EE3\u8868\u8981\u4F20\u4E00\u4E2Aint\u7C7B\u578B\u7684\u6307\u9488</span></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">dobule</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">x </span><span style="color:#89DDFF;">*</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">x </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#A6ACCD;">	x </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">12</span></span>
<span class="line"><span style="color:#A6ACCD;">	result </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">dobule</span><span style="color:#89DDFF;">(&amp;</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">result</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="_4-\u7A7A\u6307\u9488" tabindex="-1">4.\u7A7A\u6307\u9488 <a class="header-anchor" href="#_4-\u7A7A\u6307\u9488" aria-hidden="true">#</a></h3><ul><li>\u5F53\u4E00\u4E2A\u6307\u9488\u88AB\u5B9A\u4E49\u540E\u6CA1\u6709\u5206\u914D\u5230\u4EFB\u4F55\u53D8\u91CF\uFF0C\u5B83\u7684\u503C\u4F4Dnil</li></ul><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#676E95;">// \u7A7A\u6307\u9488\u7684\u5224\u65AD</span></span>
<span class="line"><span style="color:#89DDFF;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">fmt</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> p </span><span style="color:#89DDFF;">*</span><span style="color:#C792EA;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">    fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">p</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Printf</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">p\u7684\u503C\u662F%v</span><span style="color:#A6ACCD;">\\n</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> p</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> p </span><span style="color:#89DDFF;">!=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u975E\u7A7A</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u7A7A\u503C</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="_5-map\u548Cnew" tabindex="-1">5.map\u548Cnew <a class="header-anchor" href="#_5-map\u548Cnew" aria-hidden="true">#</a></h3><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">fmt</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">	\u4EE5\u4E0B\u4E24\u6BB5\u4EE3\u7801\u90FD\u4F1A\u62A5\u9519</span></span>
<span class="line"><span style="color:#676E95;">		\u5728Go\u8BED\u8A00\u4E2D\u5BF9\u4E8E\u5F15\u7528\u7C7B\u578B\u7684\u53D8\u91CF\uFF0C\u6211\u4EEC\u5728\u4F7F\u7528\u7684\u65F6\u5019\u4E0D\u4EC5\u8981\u58F0\u660E\u5B83\uFF0C\u8FD8\u8981\u4E3A\u5B83\u5206\u914D\u5185\u5B58\u7A7A\u95F4\uFF0C\u5426\u5219\u6211\u4EEC\u7684\u503C\u5C31\u6CA1\u529E\u6CD5\u5B58\u50A8\u3002</span></span>
<span class="line"><span style="color:#676E95;">		\u800C\u5BF9\u4E8E\u503C\u7C7B\u578B\u7684\u58F0\u660E\u4E0D\u9700\u8981\u5206\u914D\u5185\u5B58\u7A7A\u95F4\uFF0C\u662F\u56E0\u4E3A\u5B83\u4EEC\u5728\u58F0\u660E\u7684\u65F6\u5019\u5DF2\u7ECF\u9ED8\u8BA4\u5206\u914D\u597D\u4E86\u5185\u5B58\u7A7A\u95F4\u3002\u8981\u5206\u914D\u5185\u5B58\uFF0C\u5C31\u5F15\u51FA\u6765\u4ECA</span></span>
<span class="line"><span style="color:#676E95;">		\u5929\u7684new\u548Cmake\u3002 Go\u8BED\u8A00\u4E2Dnew\u548Cmake\u662F\u5185\u5EFA\u7684\u4E24\u4E2A\u51FD\u6570\uFF0C\u4E3B\u8981\u7528\u6765\u5206\u914D\u5185\u5B58</span></span>
<span class="line"><span style="color:#676E95;">	 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">// panic\uFF0C\u8FD9\u4E2A\u6307\u9488\u6CA1\u6709\u5206\u914D\u5185\u5B58\u7A7A\u95F4</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">*</span><span style="color:#C792EA;">int</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span></span>
<span class="line"><span style="color:#A6ACCD;">	fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(*</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">// panic\uFF0C \u8FD9\u4E2Amap\u6CA1\u6709\u5206\u914D\u5185\u5B58\u7A7A\u95F4</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> b </span><span style="color:#89DDFF;">map[</span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">]</span><span style="color:#C792EA;">int</span></span>
<span class="line"><span style="color:#A6ACCD;">	b</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u6D4B\u8BD5</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span></span>
<span class="line"><span style="color:#A6ACCD;">	fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h3 id="_6-new" tabindex="-1">6.new <a class="header-anchor" href="#_6-new" aria-hidden="true">#</a></h3><ul><li>new\u662F\u4E00\u4E2A\u5185\u7F6E\u7684\u51FD\u6570\uFF0C\u5B83\u7684\u7B7E\u540D\u5982\u4E0B</li></ul><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// \u4F20\u9012\u4E00\u4E2AType, \u8FD4\u56DE\u4E00\u4E2AType\u7C7B\u578B\u7684\u6307\u9488</span></span>
<span class="line"><span style="color:#A6ACCD;">func new(Type) * Type</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>new\u51FD\u6570\u4E0D\u592A\u5E38\u7528\uFF0C\u4F7F\u7528new\u51FD\u6570\u7684\u5E26\u7684\u662F\u4E00\u4E2A\u7C7B\u578B\u7684\u6307\u9488\uFF0C</li></ul><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">fmt</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#A6ACCD;">	a </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">new</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	b </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">new</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">bool</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(*</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">//0</span></span>
<span class="line"><span style="color:#A6ACCD;">	fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(*</span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">// false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="_7-make" tabindex="-1">7.make <a class="header-anchor" href="#_7-make" aria-hidden="true">#</a></h3><ul><li>make\u4E5F\u662F\u7528\u4E8E\u5185\u5B58\u5206\u914D\u7684\uFF0C\u533A\u522B\u4E0Enew,\u5B83\u53EA\u7528\u4E8Eslice, map\u4EE5\u53CAchan\u7684\u5185\u5B58\u521B\u5EFA</li><li>\u800C\u4E14\u5B83\u8FD4\u56DE\u7684\u7C7B\u578B\u5C31\u662F\u8005\u4E09\u4E2A\u7C7B\u578B\u672C\u8EAB\uFF0C\u800C\u4E0D\u662F\u4ED6\u4EEC\u5462\u7684\u6307\u9488\u7C7B\u578B</li><li>\u56E0\u4E3A\u8FD9\u4E09\u79CD\u7C7B\u578B\u5C31\u662F\u5F15\u7528\u7C7B\u578B\uFF0C\u6240\u4EE5\u5C31\u6CA1\u6709\u5FC5\u8981\u8FD4\u56DE\u4ED6\u4EEC\u7684\u6307\u9488\u4E86</li></ul><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">make\u51FD\u6570\u7684\u7B7E\u540D\u5982\u4E0B</span></span>
<span class="line"><span style="color:#A6ACCD;">func make(t Type, size ...IntegerType) Type</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">fmt</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> b </span><span style="color:#89DDFF;">map[</span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">// \u9700\u8981\u5BF9b\uFF0Cmake\u521D\u59CB\u5316\u540E\uFF0C\u624D\u80FD\u8FDB\u884C\u952E\u503C\u5BF9\u8D4B\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">	b </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">make</span><span style="color:#89DDFF;">(map[</span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	b</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u6D4B\u8BD5</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span></span>
<span class="line"><span style="color:#A6ACCD;">	fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="_8-new\u4E0Emake\u7684\u533A\u522B" tabindex="-1">8.new\u4E0Emake\u7684\u533A\u522B <a class="header-anchor" href="#_8-new\u4E0Emake\u7684\u533A\u522B" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">1.\u4E8C\u8005\u90FD\u662F\u7528\u6765\u505A\u5185\u5B58\u5206\u914D\u7684\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">2.make\u53EA\u7528\u4E8Eslice\u3001map\u4EE5\u53CAchannel\u7684\u521D\u59CB\u5316\uFF0C\u8FD4\u56DE\u7684\u8FD8\u662F\u8FD9\u4E09\u4E2A\u5F15\u7528\u7C7B\u578B\u672C\u8EAB\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">3.\u800Cnew\u7528\u4E8E\u7C7B\u578B\u7684\u5185\u5B58\u5206\u914D\uFF0C\u5E76\u4E14\u5185\u5B58\u5BF9\u5E94\u7684\u503C\u4E3A\u7C7B\u578B\u96F6\u503C\uFF0C\u8FD4\u56DE\u7684\u662F\u6307\u5411\u7C7B\u578B\u7684\u6307\u9488\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,23),o=[e];function r(c,t,D,i,F,y){return a(),n("div",null,o)}const b=s(p,[["render",r]]);export{C as __pageData,b as default};
