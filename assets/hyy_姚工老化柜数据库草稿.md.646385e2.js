import{_ as e,c as t,o,a as p}from"./app.a7fc1445.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"hyy/\u59DA\u5DE5\u8001\u5316\u67DC\u6570\u636E\u5E93\u8349\u7A3F.md"}'),n={name:"hyy/\u59DA\u5DE5\u8001\u5316\u67DC\u6570\u636E\u5E93\u8349\u7A3F.md"},_=p(`<p>beep 0\u5173 1\u5F00</p><pre><code>running: {
    top_level_temp\uFF1Aint
    middle_level_temp\uFF1Aint
    bottom_level_temp: int
    load_temp:
    heat_temp:
    am
    vol
   	current_pow
    total_pow
    factor: 
}
levels: [int,int,int] // 0 \u4E0A\u5C42\uFF0C 1 \u4E2D\u5C42\uFF0C 2 \u4E0B\u5C42
</code></pre><p>\u200B<br> start_time \u5F00\u59CB\u8001\u5316\u65F6\u95F4 end_time \u7ED3\u675F\u8001\u5316\u65F6\u95F4 | null</p><pre><code>//\u6765\u81EAwarn\u8868
warn_type: 0 \u65E0\u8B66\u544A  1 \u6709\u70DF\u96FE 2\u5F00\u95E8\u8B66\u544A 3\u8702\u9E23\u5668 4
  // \u5B57\u6BB59\uFF1A\u70DF\u611F\u65F6\u95F4
warn_time: timestamp
</code></pre><p>\u200B<br> setting model.foreignkey(model=setting) \u8001\u5316\u8BBE\u7F6E\uFF0C { device_name: string temp: number min: number max: number duration: timestamp }</p><p>\u200B<br> current_devices: { total pass }</p><p>\u91CD\u547D\u540D\u63A5\u53E3<br> path<br> /__/rename/:id</p><p>method post</p><p>{ name }</p><p>//\u8001\u5316\u8BBE\u7F6E</p><p>path /__/setting</p><p>method post</p><p>setting \u8001\u5316\u8BBE\u7F6E\uFF0C { device_name: string temp: number min: number max: number duration: timestamp frequency : number //number[] order: [90,220,90] }</p><p>//\u8001\u5316\u8BB0\u5F55 path /__/history</p><p>method get</p><p>list[ setting ]</p><p>//\u8001\u5316\u67DC\u8BE6\u60C5 path /__/detail/&lt;:id&gt;</p><p>//\u9996\u6B21\u54CD\u5E94\u6570\u636E,\u8FC7\u53BB\u4E00\u5C0F\u65F6\u6570\u636E, 1\u5206\u949F\u4E00\u6761\uFF0C 60\u6761 times: [timestamp, ...,current ]\uFF0C charts: [ { top_level_temp\uFF1Aint middle_level_temp\uFF1Aint bottom_level_temp: int load_temp: heat_temp: am vol current_pow total_pow factor: } ... ] status: {</p><p>smoke_box:: bool smoke_prod: bool</p><p>door_1: bool door_2: bool door_3: bool door_4: bool</p><p>contactors_90: bool contactors_220: bool contactors_264: bool</p><p>light_green: bool light_yellow: bool light_red:bool</p><p>relays_heat_solid: bool relays_heat: bool fans_loop: bool fans_prod: bool beep: bool</p><p>am_a: number am_b: number am_c: number</p><p>vol_a: number vol_b: number vol_c: number }</p><p>\u5BA2\u6237\u7AEF\u8DDF\u670D\u52A1\u7AEF\u5EFA\u7ACB\u8054\u7CFB\uFF0C\u670D\u52A1\u76F4\u63A5\u53D1\u6570\u636E\uFF0C\u5B9E\u65F6\u6570\u636E /ws/</p><p>\u524D\u7AEF\u53D1\u9001: { id: }</p><p>//\u5F53\u524D\u5B9E\u65F6\u6570\u636E times: [timestamp]\uFF0C charts: [ { top_level_temp\uFF1Aint middle_level_temp\uFF1Aint bottom_level_temp: int load_temp: heat_temp: am vol current_pow total_pow factor: }<br> ] status: { light_yellow: bool }</p><p>3\u3001\u4FEE\u6539\u8001\u5316\u67DC\u540D\u79F0\u63A5\u53E3\uFF1A\uFF08\u53EF\u5426\xB7\u8DDF\u521B\u5EFA\u8001\u5316\u7684\u63A5\u53E3\u5408\u5E76\uFF09</p><pre><code>\u8BF7\u6C42\u53C2\u6570\uFF1A


\u53C2\u65701\uFF1Aid
\u53C2\u65702\uFF1Aname

\u8FD4\u56DE\uFF1A
1\u3001code
2\u3001msg
3\u3001data
</code></pre>`,30),r=[_];function a(m,l,i,s,d,c){return o(),t("div",null,r)}const h=e(n,[["render",a]]);export{u as __pageData,h as default};
