(this.webpackJsonpreact_color_plotter_v3=this.webpackJsonpreact_color_plotter_v3||[]).push([[0],{17:function(r,e,t){},20:function(r,e,t){"use strict";t.r(e);var o=t(0),n=t.n(o),c=t(6),l=t.n(c),s=t(7),a=t(1);var i=function(r){var e={backgroundColor:"rgb("+r.red+","+r.green+","+r.blue+")",height:"1px",width:"1px"};return Object(a.jsx)("div",{role:"div",style:e})};var _,d=function(r){return n.a.useMemo((function(){for(var e=[],t=0,o=r.color_end;o>=r.color_start;o-=r.color_step)for(var n=r.color_end;n>=r.color_start;n-=r.color_step)for(var c=r.color_start;c<=r.color_end;c+=r.color_step)t++,e.push(Object(a.jsx)(i,{red:o,green:n,blue:c},"value=".concat(t)));return e}),[r.color_start,r.color_end,r.color_step])},u=(t(17),{COLOR_START:8,COLOR_END:256,STEPS:8,PLOTTER_HEIGHT:128,PLOTTER_WIDTH:256}),p=t(8).a.div(_||(_=Object(s.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column-reverse;\n  top: 50%;\n  left: 50%;\n  margin: auto;\n  height: ","px;\n  width: ","px;\n"])),(function(r){return r.height}),(function(r){return r.width}));var h=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("h1",{children:"Color Plotted Image"}),Object(a.jsx)(p,{height:u.PLOTTER_HEIGHT,width:u.PLOTTER_WIDTH,children:Object(a.jsx)(d,{color_start:u.COLOR_START,color_end:u.COLOR_END,color_step:u.STEPS})})]})},O=document.getElementById("root");l.a.render(Object(a.jsx)(o.StrictMode,{children:Object(a.jsx)(h,{})}),O)}},[[20,1,2]]]);
//# sourceMappingURL=main.fddecdf0.chunk.js.map