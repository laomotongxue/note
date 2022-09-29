import{_ as s,c as n,o as a,a as p}from"./app.a7fc1445.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"user(\u7528\u6237\u8868)","slug":"user-\u7528\u6237\u8868","link":"#user-\u7528\u6237\u8868","children":[]},{"level":3,"title":"box(\u8001\u5316\u67DC)","slug":"box-\u8001\u5316\u67DC","link":"#box-\u8001\u5316\u67DC","children":[]},{"level":3,"title":"task (\u4EFB\u52A1\u8868)","slug":"task-\u4EFB\u52A1\u8868","link":"#task-\u4EFB\u52A1\u8868","children":[]},{"level":3,"title":"task_stat_log\uFF08\u4EFB\u52A1\u7EDF\u8BA1\u8868\uFF09","slug":"task-stat-log\uFF08\u4EFB\u52A1\u7EDF\u8BA1\u8868\uFF09","link":"#task-stat-log\uFF08\u4EFB\u52A1\u7EDF\u8BA1\u8868\uFF09","children":[]},{"level":3,"title":"task_event_log\uFF08\u4EFB\u52A1\u4E8B\u4EF6\u8868\uFF09","slug":"task-event-log\uFF08\u4EFB\u52A1\u4E8B\u4EF6\u8868\uFF09","link":"#task-event-log\uFF08\u4EFB\u52A1\u4E8B\u4EF6\u8868\uFF09","children":[]}],"relativePath":"hyy/\u8001\u5316\u67DC\u8868\u8BBE\u8BA1.md"}'),l={name:"hyy/\u8001\u5316\u67DC\u8868\u8BBE\u8BA1.md"},e=p(`<h3 id="user-\u7528\u6237\u8868" tabindex="-1">user(\u7528\u6237\u8868) <a class="header-anchor" href="#user-\u7528\u6237\u8868" aria-hidden="true">#</a></h3><p>id</p><p>user_name</p><p>password</p><p>create_time</p><p>status</p><h3 id="box-\u8001\u5316\u67DC" tabindex="-1">box(\u8001\u5316\u67DC) <a class="header-anchor" href="#box-\u8001\u5316\u67DC" aria-hidden="true">#</a></h3><p>id</p><p>box_id\uFF08\u8001\u5316\u67DC\u7F16\u53F7\uFF09</p><p>name \uFF08\u6700\u957F10\u4E2A\u5B57\uFF0C\u9ED8\u8BA4\uFF1A\u65B0\u589E\u8001\u5316\u67DC\uFF09</p><p>create_time</p><p>last_time</p><p><strong>status\uFF080 \u79BB\u7EBF,1 \u5728\u7EBF\uFF09</strong></p><p><strong>temperature_upper(\u4E0A\u5C42\u6E29\u5EA6)</strong></p><p><strong>temperature_middle(\u4E2D\u5C42\u6E29\u5EA6)</strong></p><p><strong>temperature_down(\u4E0B\u5C42\u6E29\u5EA6)</strong></p><h3 id="task-\u4EFB\u52A1\u8868" tabindex="-1">task (\u4EFB\u52A1\u8868) <a class="header-anchor" href="#task-\u4EFB\u52A1\u8868" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">id</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">box_id</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">products_name</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">start_time\uFF08\u5F00\u59CB\u65F6\u95F4\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">end_time\uFF08\u7ED3\u675F\u65F6\u95F4\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">status (0\u672A\u5F00\u59CB\uFF0C1\u5F00\u59CB \uFF0C2\u6682\u505C, 3\u6210\u529F \uFF0C4\u7ED3\u675F )</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">old_temperature(\u8001\u5316\u6E29\u5EA6)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">old_time(\u8001\u5316\u65F6\u95F4)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">v_rate\uFF08\u7535\u538B\u5207\u6362\u9891\u7387\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">v_switch_order\uFF08\u7535\u538B\u5207\u6362\u987A\u5E8F\uFF09 [22,56,89]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">electric_box_smoke_status\uFF08\u7535\u7BB1\u70DF\u611F\uFF09 </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">products_smoke_status \uFF08\u4EA7\u54C1\u533A\u70DF\u611F\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">open_door_1_status \uFF08\u5F00\u95E8\u4FE1\u53F71\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">open_door_2_status \uFF08\u5F00\u95E8\u4FE1\u53F72\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">open_door_3_status \uFF08\u5F00\u95E8\u4FE1\u53F73\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">open_door_4_status \uFF08\u5F00\u95E8\u4FE1\u53F74 \uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">temperature_min(\u6700\u5C0F\u6E29\u5EA6\u53C2\u6570)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">temperature_max(\u6700\u5927\u6E29\u5EA6\u53C2\u6570)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">powwer_contactors_90\uFF0890V\u4F9B\u7535\u63A5\u89E6\u5668\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">powwer_contactors_220\uFF08220V\u4F9B\u7535\u63A5\u89E6\u5668\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">powwer_contactors_264\uFF08264V\u4F9B\u7535\u63A5\u89E6\u5668\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">green_light\uFF080 \u5173,1 \u5F00\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">red_light\uFF080 \u5173,1 \u5F00\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">yellow_light\uFF080 \u5173,1 \u5F00\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">heat_temp\uFF08\u52A0\u70ED\u56FA\u6001\u7EE7\u7535\u5668\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">load_temp\uFF08\u52A0\u70ED\u7EE7\u7535\u5668\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">loop_fans( \u5FAA\u73AF\u98CE\u673A )</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">products_fans( \u4EA7\u54C1\u98CE\u673A )</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">buzzer\uFF080 \u5173,1 \u5F00\uFF09( \u8702\u9E23\u5668 )</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br></div></div><h3 id="task-stat-log\uFF08\u4EFB\u52A1\u7EDF\u8BA1\u8868\uFF09" tabindex="-1">task_stat_log\uFF08\u4EFB\u52A1\u7EDF\u8BA1\u8868\uFF09 <a class="header-anchor" href="#task-stat-log\uFF08\u4EFB\u52A1\u7EDF\u8BA1\u8868\uFF09" aria-hidden="true">#</a></h3><p>task_id</p><p>box_id</p><p>task_type\uFF08\u4EFB\u52A1\u7C7B\u578B\uFF09</p><p>value</p><p>create_time\uFF08\u65F6\u95F4\uFF09</p><h3 id="task-event-log\uFF08\u4EFB\u52A1\u4E8B\u4EF6\u8868\uFF09" tabindex="-1">task_event_log\uFF08\u4EFB\u52A1\u4E8B\u4EF6\u8868\uFF09 <a class="header-anchor" href="#task-event-log\uFF08\u4EFB\u52A1\u4E8B\u4EF6\u8868\uFF09" aria-hidden="true">#</a></h3><p>id</p><p>box_id</p><p>task_id</p><p>event_type(\u4E8B\u4EF6\u7C7B\u578B)</p><p>value</p><p>create_time\uFF08\u65F6\u95F4\uFF09</p>`,31),r=[e];function c(t,o,i,b,A,C){return a(),n("div",null,r)}const m=s(l,[["render",c]]);export{_ as __pageData,m as default};
