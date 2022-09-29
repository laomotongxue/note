import{_ as s,c as n,o as a,a as l}from"./app.a7fc1445.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"hyy/\u59DA\u5DE5\u6570\u636E\u5E93\u8349\u7A3F2.md"}'),p={name:"hyy/\u59DA\u5DE5\u6570\u636E\u5E93\u8349\u7A3F2.md"},e=l(`<p>model</p><div class="language-ts line-numbers-mode"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#A6ACCD;">#Cabinets\uFF08\u8001\u5316\u67DC\uFF09</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">id \uFF08\u7F16\u7801\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">name \uFF08\u8001\u5316\u67DC\u540D\u79F0\uFF0C\u6700\u957F10\u4E2A\u5B57\uFF0C\u9ED8\u8BA4\uFF1A\u65B0\u589E\u8001\u5316\u67DC\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">state \uFF08</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> \u79BB\u7EBF</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> \u5728\u7EBF\uFF09</span><span style="color:#89DDFF;">---</span><span style="color:#A6ACCD;">\u5728\u7EBF\u663E\u793A\u79BB\u7EBF\u9690\u85CF</span></span>
<span class="line"><span style="color:#A6ACCD;">start_time \uFF08\u5F00\u59CB\u8001\u5316\u65F6\u95F4\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">end_time  \uFF08\u7ED3\u675F\u8001\u5316\u65F6\u95F4\uFF09 </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">Setting  </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> model</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">foreignkey</span><span style="color:#A6ACCD;">(model</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">Setting)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">\u8BBE\u5907\u8FD0\u884C</span></span>
<span class="line"><span style="color:#A6ACCD;">status 0\u672A\u77E5 1\u5F00\u59CB\u8001\u5316 2\u8001\u5316\u6210\u529F</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> 3\u544A\u8B66</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> 4\u8001\u5316\u5931\u8D25</span></span>
<span class="line"><span style="color:#A6ACCD;">beep 0\u5173 1\u5F00</span></span>
<span class="line"><span style="color:#FFCB6B;">running</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">top_level_temp</span><span style="color:#F07178;">\uFF1A</span><span style="color:#A6ACCD;">int</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">middle_level_temp</span><span style="color:#F07178;">\uFF1A</span><span style="color:#A6ACCD;">int</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">bottom_level_temp</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">int</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">load_temp</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">heat_temp</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">am</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">vol</span></span>
<span class="line"><span style="color:#F07178;">   	</span><span style="color:#A6ACCD;">current_pow</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">total_pow</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">factor</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">  </span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;"> Setting \u8001\u5316\u67DC\u8FD0\u884C\u7684\u8BBE\u7F6E\u53C2\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;"> cabinets = model.foreignkey(model=Cabinets)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">device_name: string</span></span>
<span class="line"><span style="color:#A6ACCD;">    temp: number</span></span>
<span class="line"><span style="color:#A6ACCD;">    min: number</span></span>
<span class="line"><span style="color:#A6ACCD;">    max: number</span></span>
<span class="line"><span style="color:#A6ACCD;">    duration: timestamp</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><div class="language-ts line-numbers-mode"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#A6ACCD;">Record </span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><pre><code>current_devices: {
    total
	pass
}

//\u6765\u81EAwarn\u8868
warn_type: 0 \u65E0\u8B66\u544A  1 \u6709\u70DF\u96FE 2\u5F00\u95E8\u8B66\u544A 3\u8702\u9E23\u5668 4
  // \u5B57\u6BB59\uFF1A\u70DF\u611F\u65F6\u95F4
warn_time: timestamp
</code></pre>`,5),o=[e];function r(c,t,i,b,C,y){return a(),n("div",null,o)}const D=s(p,[["render",r]]);export{m as __pageData,D as default};
