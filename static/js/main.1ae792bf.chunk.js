(this["webpackJsonpamcharts-axis-manipulating"]=this["webpackJsonpamcharts-axis-manipulating"]||[]).push([[0],{114:function(e,a,t){e.exports={axisItem:"axis-item_axisItem__30H4p",isAxisItemDraggableNow:"axis-item_isAxisItemDraggableNow__16JzR",axisTitle:"axis-item_axisTitle__14LIv",axisTags:"axis-item_axisTags__2vjPB",isAxisDraggableBordered:"axis-item_isAxisDraggableBordered__3HKc-",isAxisTagsDroppableNow:"axis-item_isAxisTagsDroppableNow__1o5NZ",axisDragIcon:"axis-item_axisDragIcon__xGLn_"}},129:function(e,a,t){"use strict";var n;t.d(a,"a",(function(){return n})),function(e){e.settings="settings"}(n||(n={}))},132:function(e,a,t){e.exports={root:"page_root__2umMH",layout:"page_layout__8xvbr",sider:"page_sider__3h4Nr",header:"page_header__3JIsH",recalculatingResult:"page_recalculatingResult__mG2-C",content:"page_content__3vzB4",contentHidden:"page_contentHidden__12tl9"}},135:function(e,a,t){"use strict";t.d(a,"b",(function(){return p}));var n=t(1),r=t.n(n),i=t(52),o=t(41),s=t(39),c=t(99),l=t(157),d=["\u041d\u0430\u043f\u0440\u044f\u0436\u0435\u043d\u0438\u0435 U","\u0422\u043e\u043a I","\u0410\u043a\u0442\u0438\u0432\u043d\u0430\u044f \u043c\u043e\u0449\u043d\u043e\u0441\u0442\u044c P","\u0420\u0435\u0430\u043a\u0442\u0438\u0432\u043d\u0430\u044f \u043c\u043e\u0449\u043d\u043e\u0441\u0442\u044c Q","\u041f\u043e\u043b\u043d\u0430\u044f \u043c\u043e\u0449\u043d\u043e\u0441\u0442\u044c S","\u0424\u0430\u0437\u043d\u043e\u0435 \u043d\u0430\u043f\u0440\u044f\u0436\u0435\u043d\u0438\u0435 U"],u=["a","b","c"],g=function(){var e=l.random.arrayElement(d),a=l.random.arrayElement(u);return"".concat(e).concat(a)},m=function(){return{colorSet:new c.a,isLoaded:0,modalStates:null,hoveredSeries:null,setHoveredSeries:function(e){this.hoveredSeries=e},tagsCount:5,pointsCount:75,isRandomTagsNames:!0,setSettings:function(e){var a=e.tagsCount,t=e.pointsCount,n=e.isRandomTagsNames;this.tagsCount=a,this.pointsCount=t,this.isRandomTagsNames=n},changeStateModal:function(e){this.modalStates?this.modalStates[e.type]=e:this.modalStates=Object(s.a)({},e.type,e)},isSiderCollapsed:!1,isSiderCollapsingNow:!1,setSiderCollapsed:function(e){var a=this;this.isSiderCollapsingNow=!0,this.isSiderCollapsed=e,setTimeout((function(){a.isSiderCollapsingNow=!1}),1e3)},chartInstance:null,setChartInstance:function(e){this.chartInstance=e},tagsDictionary:{},generateTags:function(e){var a=this,t=Array.from({length:e},(function(e,a){return a+1})).reduce((function(e,t){var n={id:"tag-".concat(t),name:a.isRandomTagsNames?g():"Tag-".concat(t),color:a.colorSet.next().hex};return Object(o.a)(Object(o.a)({},e),{},Object(s.a)({},"tag-".concat(t),n))}),{});console.log("tags",t),this.tagsDictionary=t},isTagDraggingNow:!1,setIsTagDraggingNow:function(e){this.isTagDraggingNow=e},axesDictionary:{},setAxesDictionary:function(e){this.axesDictionary=e},axesOrder:[],setAxesOrder:function(e){this.axesOrder=e},generateAxes:function(e){var a=this,t=Array.from({length:e},(function(e,a){return a+1})).reduce((function(e,t){return Object(o.a)(Object(o.a)({},e),{},Object(s.a)({},"axis-".concat(t),{name:"Axis-".concat(t),id:"axis-".concat(t),tags:[a.tagsDictionary["tag-".concat(t)].id]}))}),{}),n=Object.keys(t);console.log("axes",t),this.axesOrder=n,this.axesDictionary=t},data:[],generateData:function(e){var a=this,t=e.tagsCount,n=void 0===t?10:t,r=e.pointsCount,i=void 0===r?100:r;this.generateTags(n),this.generateAxes(n);var c=Array.from({length:i},(function(e,t){return Object(o.a)({ts:new Date(2020,0,t)},Object.keys(a.tagsDictionary).reduce((function(e,a){return Object(o.a)(Object(o.a)({},e),{},Object(s.a)({},a,Math.round(100*Math.random())+100))}),{}))}));console.log("data",c),this.data=c}}},p=r.a.createContext(null);a.a=function(e){var a=e.children,t=Object(i.b)(m),o=Object(n.useMemo)((function(){return{core:t}}),[t]);return r.a.createElement(p.Provider,{value:o},a)}},148:function(e,a,t){e.exports={legendLayout:"legend-layout_legendLayout__1XgHa",legendTitle:"legend-layout_legendTitle__1Prdt",legendTitleHidden:"legend-layout_legendTitleHidden__2tkku",legendDroppableContainer:"legend-layout_legendDroppableContainer__2zJkG",isContainerDroppableNow:"legend-layout_isContainerDroppableNow__vH6-F"}},160:function(e,a,t){e.exports={tagItem:"tag-item_tagItem__1k1Fb",hoverer:"tag-item_hoverer__1dN5s",tagDragIcon:"tag-item_tagDragIcon__1eNNY",isTagItemDraggableNow:"tag-item_isTagItemDraggableNow__1zNQN"}},1680:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),i=t(43),o=t.n(i),s=(t(259),t(135)),c=t(52),l=t(48),d=t(149),u=t(99);u.d.minPolylineStep=5;var g=function(e){var a=e.xAxes.push(new d.a);return a.startLocation=.5,a.endLocation=.5,a.renderer.minGridDistance=100,a.renderer.line.stroke=u.b("#000000"),a.renderer.labels.template.location=.5,a.renderer.labels.template.verticalCenter="middle",a.renderer.labels.template.horizontalCenter="middle",a},m=function(e,a){var t=e.yAxes.push(new d.c);return t.renderer.gridContainer.background.fill=u.b("#ffffff"),t.renderer.minGridDistance=30,t.renderer.inside=!0,t.renderer.maxLabelPosition=.99,t.renderer.labels.template.verticalCenter="bottom",0!==a&&(t.marginTop=10),t},p=function(e,a,t){var n=t.id,r=t.name,i=t.color,o=e.series.push(new d.b);o.stroke=u.b(i),o.strokeWidth=2,o.dataFields.valueY="".concat(n),o.dataFields.dateX="ts",o.yAxis=a,o.name=r,o.id=n;var s=o.segments.template;return s.interactionsEnabled=!0,s.states.create("hover").properties.strokeWidth=3,s.states.create("dimmed").properties.stroke=u.b("#dadada"),o.tooltipText="{name}\n\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435: {valueY}",o.tooltip.getFillFromObject=!1,o.tooltip.background.fill=u.b(i),o},b=t(196),f=t.n(b),v=Object(c.a)((function(){var e=Object(l.a)((function(e){return{tagsDictionary:e.core.tagsDictionary,axesOrder:e.core.axesOrder,axesDictionary:e.core.axesDictionary,data:e.core.data,chartInstance:e.core.chartInstance,colorSet:e.core.colorSet,hoveredSeries:e.core.hoveredSeries,setChartInstance:e.core.setChartInstance}})),a=e.tagsDictionary,t=e.axesOrder,i=e.axesDictionary,o=e.data,s=e.chartInstance,c=e.colorSet,b=e.hoveredSeries,v=e.setChartInstance;return Object(n.useEffect)((function(){var e=function(e){var a=u.c(e,d.d);a.padding(0,0,0,0),a.leftAxesContainer.layout="vertical";var t=g(a),n=new d.e;return a.cursor=n,a.cursor.xAxis=t,{chart:a}}("chart").chart;return v(e),function(){return e.dispose()}}),[v]),Object(n.useEffect)((function(){(console.log("hoveredSeries",b),b)?function(e){e&&(e.toFront(),e.segments.each((function(e){e.setState("hover")})),null===s||void 0===s||s.series.each((function(a){a!==e&&(a.segments.each((function(e){e.setState("dimmed")})),a.bulletsContainer.setState("dimmed"))})))}(null===s||void 0===s?void 0:s.series.values.find((function(e){return e.id===b.id}))):null===s||void 0===s||s.series.each((function(e){e.segments.each((function(e){e.setState("default")})),e.bulletsContainer.setState("default")}))}),[s,b]),Object(n.useEffect)((function(){s&&o.length&&(s.yAxes.clear(),s.series.clear(),c.reset(),s.data=o,t.forEach((function(e,t){var n=m(s,t);i[e].tags.map((function(e){var t=a[e];return function(e,a,t,n){var r;if(a)r=p(e,a,t);else{var i=m(e,n);r=p(e,i,t)}return r}(s,n,t,0)}))})))}),[c,t,i,a,o,s]),r.a.createElement("div",{className:f.a.layout},r.a.createElement("div",{className:f.a.chartLayout},r.a.createElement("div",{className:f.a.chart,id:"chart"})))})),x=t(41),h=t(39),O=t(249),_=t(98),j=t(21),y=t.n(j),C=t(146);var E=function(){var e=Object(n.useState)(!1),a=Object(C.a)(e,2),t=a[0],r=a[1],i=Object(n.useRef)(null),o=function(){return r(!0)},s=function(){return r(!1)};return Object(n.useEffect)((function(){var e=i.current;if(e)return e.addEventListener("mouseover",o),e.addEventListener("mouseout",s),function(){e.removeEventListener("mouseover",o),e.removeEventListener("mouseout",s)}}),[i.current]),[i,t]},N=t(160),D=t.n(N),S=function(e){var a=e.tag,t=e.index,i=E(),o=Object(C.a)(i,2),s=o[0],c=o[1],d=Object(l.a)((function(e){return{setHoveredSeries:e.core.setHoveredSeries}})).setHoveredSeries;return Object(n.useEffect)((function(){d(c?a:null)}),[a,c,d]),r.a.createElement(_.b,{draggableId:"".concat(a.id),index:t},(function(e,t){var n=e.innerRef,i=e.draggableProps,o=e.dragHandleProps;return r.a.createElement("h4",Object.assign({ref:n,className:y()(D.a.tagItem,Object(h.a)({},D.a.isTagItemDraggableNow,t.isDragging))},i,o),r.a.createElement("div",{ref:s,className:D.a.hoverer},r.a.createElement("span",null,a.name),r.a.createElement("span",{className:D.a.tagDragIcon},"\u22ee")))}))},I=t(114),w=t.n(I),T=Object(c.a)((function(e){var a=e.axis,t=a.tags,n=a.name,i=a.id,o=e.index,s=Object(l.a)((function(e){return{tagsDictionary:e.core.tagsDictionary,isTagDraggingNow:e.core.isTagDraggingNow}})),c=s.tagsDictionary,d=s.isTagDraggingNow;return r.a.createElement(_.b,{draggableId:"".concat(i),index:o},(function(e,a){var o=a.isDragging;return r.a.createElement("div",Object.assign({ref:e.innerRef,className:y()(w.a.axisItem,Object(h.a)({},w.a.isAxisItemDraggableNow,o))},e.draggableProps,e.dragHandleProps),r.a.createElement("h4",{className:y()(w.a.axisTitle,Object(h.a)({},w.a.isAxisDraggableBordered,o))},r.a.createElement("span",null,n),r.a.createElement("span",{className:w.a.axisDragIcon},"\u22ee\u22ee")),r.a.createElement(_.c,{droppableId:i,type:"tags"},(function(e){var a;return r.a.createElement("div",Object.assign({ref:e.innerRef},e.droppableProps,{className:y()(w.a.axisTags,(a={},Object(h.a)(a,w.a.isAxisTagsDroppableNow,d),Object(h.a)(a,w.a.isAxisDraggableBordered,o),a))}),t.map((function(e,a){var t=c[e];return r.a.createElement(S,{key:t.id,index:a,tag:t})})),e.placeholder)})),r.a.createElement("div",null))}))})),A=t(197),k=t.n(A),L=Object(c.a)((function(){var e=Object(l.a)((function(e){return{isTagDraggingNow:e.core.isTagDraggingNow}})).isTagDraggingNow;return r.a.createElement(_.c,{direction:"vertical",droppableId:"new-axis",type:"tags"},(function(a){return r.a.createElement("div",Object.assign({className:y()(k.a.droppableContainer,Object(h.a)({},k.a.isDroppableNow,e))},a.droppableProps,{ref:a.innerRef}),r.a.createElement("div",{className:k.a.dropHintLayout},r.a.createElement("span",null,"Drop tag here "),r.a.createElement("span",null,"to create new axis")),a.placeholder)}))})),R=t(148),H=t.n(R),P=Object(c.a)((function(){var e=Object(l.a)((function(e){return{isSiderCollapsed:e.core.isSiderCollapsed,axesOrder:e.core.axesOrder,axesDictionary:e.core.axesDictionary,setAxesOrder:e.core.setAxesOrder,setAxesDictionary:e.core.setAxesDictionary,setIsTagDraggingNow:e.core.setIsTagDraggingNow}})),a=e.isSiderCollapsed,t=e.axesOrder,n=e.axesDictionary,i=e.setAxesOrder,o=e.setAxesDictionary,s=e.setIsTagDraggingNow;return r.a.createElement("div",{className:H.a.legendLayout},r.a.createElement("h2",{className:y()(H.a.legendTitle,Object(h.a)({},H.a.legendTitleHidden,a))},"LEGEND"),t.length&&r.a.createElement(_.a,{onBeforeDragStart:function(e){return s("tags"===e.type)},onDragEnd:function(e){var a=e.draggableId,r=e.destination,c=e.source,l=e.type;if((s(!1),r)&&!(r.droppableId===c.droppableId&&r.index===c.index)){if("axes"===l){var d=Array.from(t);return d.splice(c.index,1),d.splice(r.index,0,a),void i(d)}var u=n[c.droppableId],g=n[r.droppableId];if("tags"===l&&"new-axis"===r.droppableId){var m=Math.max.apply(Math,Object(O.a)(t.map((function(e){return parseInt(e.replace(/[^\d]/g,""),10)}))))+1,p=Object(h.a)({},"axis-".concat(m),{id:"axis-".concat(m),name:"Axis-".concat(m),tags:[a]}),b=Object(x.a)(Object(x.a)(Object(x.a)({},n),p),{},Object(h.a)({},c.droppableId,Object(x.a)(Object(x.a)({},u),{},{tags:u.tags.filter((function(e){return e!==a}))})));return b[c.droppableId].tags.length||delete b[c.droppableId],i(Object.keys(b)),void o(b)}if(u!==g){var f=Array.from(u.tags);f.splice(c.index,1);var v=Object(h.a)({},c.droppableId,Object(x.a)(Object(x.a)({},u),{},{tags:f})),_=Array.from(g.tags);_.splice(r.index,0,a);var j=Object(h.a)({},r.droppableId,Object(x.a)(Object(x.a)({},g),{},{tags:_})),y=Object(x.a)(Object(x.a)(Object(x.a)({},n),v),j);f.length||(delete y[c.droppableId],i(t.filter((function(e){return e!==c.droppableId})))),o(y)}else{var C=Array.from(u.tags);C.splice(c.index,1),C.splice(r.index,0,a);var E=Object(x.a)(Object(x.a)({},n),{},Object(h.a)({},c.droppableId,Object(x.a)(Object(x.a)({},u),{},{tags:C})));o(E)}}}},r.a.createElement(_.c,{direction:"vertical",droppableId:"axes",type:"axes"},(function(e,a){var i=a.isDraggingOver;return r.a.createElement("div",Object.assign({className:y()(H.a.legendDroppableContainer,Object(h.a)({},H.a.isContainerDroppableNow,i))},e.droppableProps,{ref:e.innerRef}),t.map((function(e,a){var t=n[e];return r.a.createElement(T,{key:e,axis:t,index:a})})),e.placeholder)})),r.a.createElement(L,null)))})),M=(t(212),t(1660),t(248)),B=(t(1662),t(151)),F=t(246),G=t.n(F),z=t(129),J=(t(199),t(109)),Q=t(241),U=t.n(Q),W=t(240),Y=t.n(W),K=Object(c.a)((function(){var e=Object(l.a)((function(e){return{isSiderCollapsed:e.core.isSiderCollapsed,isSiderCollapsingNow:e.core.isSiderCollapsingNow,setSiderCollapsed:e.core.setSiderCollapsed}})),a=e.isSiderCollapsed,t=e.isSiderCollapsingNow,n=e.setSiderCollapsed;return r.a.createElement(J.a,{disabled:t,icon:a?r.a.createElement(Y.a,null):r.a.createElement(U.a,null),onClick:function(){return n(!a)},type:"link"})})),X=t(242),Z=t.n(X),V=Object(c.a)((function(){var e=Object(l.a)((function(e){return{modalStates:e.core.modalStates,changeStateModal:e.core.changeStateModal}})).changeStateModal,a=Object(n.useCallback)((function(){e({type:z.a.settings,props:{visible:!0}})}),[e]);return r.a.createElement(J.a,{icon:r.a.createElement(Z.a,null),onClick:a,type:"link"})})),q=t(243),$=t.n(q),ee=Object(c.a)((function(){return r.a.createElement("div",{className:$.a.headerLayout},r.a.createElement(K,null),r.a.createElement(V,null))})),ae=t(132),te=t.n(ae),ne=B.a.Content,re=B.a.Sider,ie=B.a.Header,oe=Object(n.lazy)((function(){return Promise.resolve().then(t.bind(null,212))})),se=Object(c.a)((function(){var e=Object(l.a)((function(e){return{modals:e.core.modalStates,isSiderCollapsed:e.core.isSiderCollapsed,isSiderCollapsingNow:e.core.isSiderCollapsingNow,tagsCount:e.core.tagsCount,pointsCount:e.core.pointsCount,isRandomTagsNames:e.core.isRandomTagsNames,generateData:e.core.generateData}})),a=e.modals,t=e.isSiderCollapsed,i=e.isSiderCollapsingNow,o=e.tagsCount,s=e.pointsCount,c=e.isRandomTagsNames,d=e.generateData;return Object(n.useEffect)((function(){d({tagsCount:o,pointsCount:s})}),[o,s,c,d]),r.a.createElement(B.a,{className:te.a.layout},r.a.createElement(re,{className:te.a.sider,collapsed:t,collapsedWidth:150,collapsible:!0,theme:"light",trigger:null,width:"20%"},r.a.createElement(P,null)),r.a.createElement(B.a,{className:"site-layout"},r.a.createElement(ie,{className:te.a.header},r.a.createElement(ee,null)),i&&r.a.createElement(M.a,{className:te.a.recalculatingResult,icon:r.a.createElement(G.a,null),title:"Recalculating..."}),r.a.createElement(ne,{className:y()(te.a.content,Object(h.a)({},te.a.contentHidden,i))},r.a.createElement(v,null))),a&&a[z.a.settings]&&r.a.createElement(n.Suspense,{fallback:null},r.a.createElement(oe,null)))}));o.a.render(r.a.createElement(s.a,null,r.a.createElement(se,null)),document.getElementById("root"))},196:function(e,a,t){e.exports={layout:"chart-layout_layout__3AZ1P",chartLayout:"chart-layout_chartLayout__2GBLU",chart:"chart-layout_chart__24cdx"}},197:function(e,a,t){e.exports={droppableContainer:"new-axis-creator_droppableContainer__2skdI",isDroppableNow:"new-axis-creator_isDroppableNow__2ni8Q",dropHintLayout:"new-axis-creator_dropHintLayout__38_OC"}},212:function(e,a,t){"use strict";t.r(a);t(1543);var n=t(247),r=(t(1546),t(250)),i=(t(1548),t(209)),o=(t(1681),t(150)),s=t(146),c=t(52),l=t(1),d=t.n(l),u=t(129),g=t(48),m={labelCol:{span:12},wrapperCol:{span:12}},p=Object(c.a)((function(){var e=Object(g.a)((function(e){var a;return{modalState:null===(a=e.core.modalStates)||void 0===a?void 0:a[u.a.settings],tagsCount:e.core.tagsCount,pointsCount:e.core.pointsCount,isRandomTagsNames:e.core.isRandomTagsNames,changeState:e.core.changeStateModal,setSettings:e.core.setSettings}})),a=e.modalState,t=e.tagsCount,c=e.pointsCount,l=e.isRandomTagsNames,p=e.changeState,b=e.setSettings,f=function(){p({type:u.a.settings,props:{visible:!1}})},v=o.a.useForm(),x=Object(s.a)(v,1)[0];return d.a.createElement(n.a,{destroyOnClose:!0,okButtonProps:{htmlType:"submit"},onCancel:f,onOk:function(){x.submit(),f()},title:"Settings",visible:null===a||void 0===a?void 0:a.props.visible,width:400},d.a.createElement(o.a,Object.assign({},m,{form:x,initialValues:{pointsCount:c,tagsCount:t,isRandomTagsNames:l},onFinish:function(e){console.log("Success:",e),b(e)}}),d.a.createElement(o.a.Item,{label:"Points count",name:"pointsCount"},d.a.createElement(i.a,{max:1e3,min:50,step:50})),d.a.createElement(o.a.Item,{label:"Tags count",name:"tagsCount"},d.a.createElement(i.a,{max:15,min:1})),d.a.createElement(o.a.Item,{label:"Random tags names",name:"isRandomTagsNames",valuePropName:"checked"},d.a.createElement(r.a,null))))}));a.default=p},243:function(e,a,t){e.exports={headerLayout:"header-layout_headerLayout__3SMKc"}},254:function(e,a,t){e.exports=t(1680)},48:function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var n=t(135),r=t(1),i=t.n(r),o=function(e){return function(e,a,t){var n=i.a.useContext(e);if(!n)throw new Error;return t(a(n))}(n.b,(function(e){return e}),e)}}},[[254,1,3]]]);
//# sourceMappingURL=main.1ae792bf.chunk.js.map