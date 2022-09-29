import{_ as s,c as n,o as a,a as l}from"./app.a7fc1445.js";const i=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"1.\u533F\u540D\u51FD\u6570","slug":"_1-\u533F\u540D\u51FD\u6570","link":"#_1-\u533F\u540D\u51FD\u6570","children":[]},{"level":3,"title":"2.go\u533F\u540D\u51FD\u6570\u53EF\u590D\u5236\u7ED9\u53D8\u91CF\uFF0C\u4F5C\u4E3A\u7ED3\u6784\u4F53\u5B57\u6BB5\uFF0C\u6216\u8005\u5728channel\u91CC\u4F20\u52A8","slug":"_2-go\u533F\u540D\u51FD\u6570\u53EF\u590D\u5236\u7ED9\u53D8\u91CF\uFF0C\u4F5C\u4E3A\u7ED3\u6784\u4F53\u5B57\u6BB5\uFF0C\u6216\u8005\u5728channel\u91CC\u4F20\u52A8","link":"#_2-go\u533F\u540D\u51FD\u6570\u53EF\u590D\u5236\u7ED9\u53D8\u91CF\uFF0C\u4F5C\u4E3A\u7ED3\u6784\u4F53\u5B57\u6BB5\uFF0C\u6216\u8005\u5728channel\u91CC\u4F20\u52A8","children":[]}],"relativePath":"go/23\u533F\u540D\u51FD\u6570.md"}'),p={name:"go/23\u533F\u540D\u51FD\u6570.md"},o=l(`<h3 id="_1-\u533F\u540D\u51FD\u6570" tabindex="-1">1.\u533F\u540D\u51FD\u6570 <a class="header-anchor" href="#_1-\u533F\u540D\u51FD\u6570" aria-hidden="true">#</a></h3><ul><li>\u533F\u540D\u51FD\u6570\u662F\u6307\u4E0D\u9700\u8981\u5B9A\u4E49\u51FD\u6570\u540D\u7684\u4E00\u79CD\u51FD\u6570\u5B9E\u73B0\u65B9\u5F0F</li><li>\u5728Go\u91CC\u9762\uFF0C\u51FD\u6570\u53EF\u4EE5\u50CF\u666E\u901A\u53D8\u91CF\u4E00\u6837\u88AB\u4F20\u9012\u6216\u4F7F\u7528\uFF0CGo\u8BED\u8A00\u652F\u6301\u968F\u65F6\u5728\u4EE3\u7801\u91CC\u5B9A\u4E49\u533F\u540D\u51FD\u6570\u3002</li><li>\u533F\u540D\u51FD\u6570\u7531\u4E00\u4E2A\u4E0D\u5E26\u51FD\u6570\u540D\u7684\u51FD\u6570\u58F0\u660E\u548C\u51FD\u6570\u4F53\u7EC4\u6210\u3002\u533F\u540D\u51FD\u6570\u7684\u4F18\u8D8A\u6027\u5728\u4E8E\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u51FD\u6570\u5185\u7684\u53D8\u91CF\uFF0C\u4E0D\u5FC5\u58F0\u660E</li></ul><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">fmt</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">math</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	getSqrt </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">func(</span><span style="color:#A6ACCD;">a </span><span style="color:#C792EA;">float64</span><span style="color:#89DDFF;">)</span><span style="color:#C792EA;">float64</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Sqrt</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">getSqrt</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">))</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="_2-go\u533F\u540D\u51FD\u6570\u53EF\u590D\u5236\u7ED9\u53D8\u91CF\uFF0C\u4F5C\u4E3A\u7ED3\u6784\u4F53\u5B57\u6BB5\uFF0C\u6216\u8005\u5728channel\u91CC\u4F20\u52A8" tabindex="-1">2.go\u533F\u540D\u51FD\u6570\u53EF\u590D\u5236\u7ED9\u53D8\u91CF\uFF0C\u4F5C\u4E3A\u7ED3\u6784\u4F53\u5B57\u6BB5\uFF0C\u6216\u8005\u5728channel\u91CC\u4F20\u52A8 <a class="header-anchor" href="#_2-go\u533F\u540D\u51FD\u6570\u53EF\u590D\u5236\u7ED9\u53D8\u91CF\uFF0C\u4F5C\u4E3A\u7ED3\u6784\u4F53\u5B57\u6BB5\uFF0C\u6216\u8005\u5728channel\u91CC\u4F20\u52A8" aria-hidden="true">#</a></h3><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">package</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">// 1.\u51FD\u6570\u53D8\u91CF</span></span>
<span class="line"><span style="color:#A6ACCD;">	fn </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">func()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello Word</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#82AAFF;">fn</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">// 2.\u51FD\u6570\u96C6\u5408</span></span>
<span class="line"><span style="color:#A6ACCD;">	fns </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[]func(</span><span style="color:#A6ACCD;">x </span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">func(</span><span style="color:#A6ACCD;">x </span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> x </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">func(</span><span style="color:#A6ACCD;">x </span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> x </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">// \u53D6\u51FA\u7B2C\u4E00\u4E2A\u548C\u7B2C\u4E8C\u4E2A\u51FD\u6570\u8C03\u7528</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">fns</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">](</span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">))</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">fns</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">](</span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">))</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">// 3.\u51FD\u6570\u4F5C\u4E3A\u5B57\u6BB5</span></span>
<span class="line"><span style="color:#A6ACCD;">	d </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">struct</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">			</span><span style="color:#676E95;">// \u7ED3\u6784\u4F53\u7C7B\u578B</span></span>
<span class="line"><span style="color:#A6ACCD;">		fn </span><span style="color:#89DDFF;">func()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}{</span></span>
<span class="line"><span style="color:#A6ACCD;">		fn</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">func()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// \u7ED3\u6784\u4F53\u5B9E\u4F8B\u5316</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello Word</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">// \u8C03\u7528\u7ED3\u6784\u4F53\u7684fn</span></span>
<span class="line"><span style="color:#A6ACCD;">	d</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">fn</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">// 4.\u901A\u9053\u7ED3\u6784\u4F53</span></span>
<span class="line"><span style="color:#A6ACCD;">	fc </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">make</span><span style="color:#89DDFF;">(chan</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">func()</span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">	</span><span style="color:#676E95;">// \u8FD9\u4E2Achan\u662F\u5B58\u653E\u51FD\u6570\u7684</span></span>
<span class="line"><span style="color:#A6ACCD;">	fc </span><span style="color:#89DDFF;">&lt;-</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">func()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">				</span><span style="color:#676E95;">// \u5F80\u901A\u9053\u91CC\u9762\u5B58\u4E00\u4E2A\u51FD\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello Word</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	result </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(&lt;-</span><span style="color:#A6ACCD;">fc</span><span style="color:#89DDFF;">)()</span><span style="color:#A6ACCD;">					</span><span style="color:#676E95;">// \u4ECE\u901A\u9053\u4E2D\u5C06\u51FD\u6570\u53D6\u51FA\u6765\uFF0C\u5E76\u8C03\u7528</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">result</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div>`,5),e=[o];function r(c,t,D,y,F,A){return a(),n("div",null,e)}const b=s(p,[["render",r]]);export{i as __pageData,b as default};
