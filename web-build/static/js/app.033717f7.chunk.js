(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{132:function(e,t,n){e.exports=n.p+"static/media/check.5b91a1ff.png"},189:function(e,t,n){e.exports=n.p+"static/media/theming.c95257c4.jpg"},199:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(14),l=n.n(o),c=n(200),i=n(30),s=n(70),m=n(163),u=n(4),d=n(3),g=n(201),h=u.a.create({container:{flex:1,backgroundColor:"white",justifyContent:"center",alignItems:"center"},topModal:{height:60,flexDirection:"row",width:"100%",backgroundColor:"transparent",backgroundColor:"white",position:"absolute",zIndex:1,alignItems:"center",justifyContent:"space-between",top:0}}),y=function(e){var t=e.navigation,n=Object(r.useState)(!1),o=l()(n,2),u=o[0],y=o[1];return a.a.createElement(m.a,{style:h.container},a.a.createElement(c.a,{style:"dark",hidden:!0}),u?a.a.createElement(d.a,{style:h.topModal},a.a.createElement(g.a,{name:"settings",size:52,onPress:function(){return t.navigate("Settings")}})):null,a.a.createElement(s.a,{onPress:function(){return y(!u)}},a.a.createElement(i.a,{style:{alignSelf:"center"}},"Tap the screen")))},f=n(50),b=n(121),p=n(29),E=n(53),w=n(189),S=n.n(w),C=n(132),x=n.n(C),O=n(273),k=n(2),j=n.n(k),v=n(64),T=n(106);function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){j()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var D=R(R({},v.a),{},{colors:R({},v.a.colors)}),I=(R(R({},T.a),{},{colors:R({},T.a.colors)}),R(R({},v.a),{},{dark:!0,colors:R(R({},v.a.colors),{},{primary:"red"}),borderRadius:20})),W=R(R({},v.a),{},{dark:!0,colors:R(R({},v.a.colors),{},{primary:"blue"}),borderRadius:20}),z=R(R({},v.a),{},{dark:!0,colors:R(R({},v.a.colors),{},{primary:"green"}),borderRadius:20}),B=R(R({},v.a),{},{dark:!0,colors:R(R({},v.a.colors),{},{primary:"orange"}),borderRadius:20}),L=R(R({},v.a),{},{dark:!1,colors:R(R({},v.a.colors),{},{primary:"yellow"}),borderRadius:20}),N=Object(r.createContext)(null),A=function(e){var t=e.children,n=Object(r.useState)(D),o=l()(n,2),c=o[0],i=o[1];return a.a.createElement(N.Provider,{value:{theme:c,changeTheme:i}},a.a.createElement(O.a,{theme:c},t))},F=function(e){return u.a.create({container:{flex:1,flexDirection:"row",flexWrap:"wrap",justifyContent:"space-evenly"},item:{height:200,width:150,borderRadius:10,borderWidth:2,borderColor:e.colors.primary,alignSelf:"center",marginTop:30,marginBottom:10},image:{height:196,width:146,borderColor:"blue",alignItems:"flex-end",justifyContent:"flex-end"},label:{fontSize:20,color:"black",fontWeight:"bold",alignSelf:"center"}})},J=function(){var e=Object(p.useNavigation)(),t=Object(r.useContext)(N),n=t.theme;t.changeTheme;return a.a.createElement(f.a,null,a.a.createElement(d.a,{style:F(n).container},a.a.createElement(d.a,{style:F(n).item},a.a.createElement(E.a,{onPress:function(){return e.navigate("Theming")}},a.a.createElement(b.a,{source:S.a,style:F(n).image,imageStyle:{alignSelf:"center",opacity:.8}},a.a.createElement(i.a,{style:F.label},"Theming")))),a.a.createElement(d.a,{style:F(n).item},a.a.createElement(E.a,{onPress:function(){return e.navigate("Check")}},a.a.createElement(b.a,{source:x.a,style:F(n).image,imageStyle:{alignSelf:"center",opacity:.8}},a.a.createElement(i.a,{style:F(n).label},"Check")))),a.a.createElement(d.a,{style:F(n).item},a.a.createElement(E.a,{onPress:function(){return e.navigate("Download")}},a.a.createElement(b.a,{source:x.a,style:F(n).image,imageStyle:{alignSelf:"center",opacity:.8}},a.a.createElement(i.a,{style:F(n).label},"Button"))))))},M=n(272),V=function(e){return u.a.create({buttonStyle:{backgroundColor:e.colors.primary,borderRadius:e.borderRadius}})},q=function(){var e=Object(r.useContext)(N),t=e.theme;e.changeTheme;return console.log(t),a.a.createElement(d.a,{style:{margin:10}},a.a.createElement(M.a,{style:V(t).buttonStyle,color:t.colors.text},"Check"),a.a.createElement(i.a,{style:{color:t.colors.primary}},"This is checkingo"))},G=function(){var e=Object(r.useContext)(N),t=(e.theme,e.changeTheme);return a.a.createElement(d.a,{style:{flex:1,flexDirection:"row",flexWrap:"wrap"}},a.a.createElement(E.a,{onPress:function(){return t(I)}},a.a.createElement(d.a,{style:{borderRadius:100,backgroundColor:"red",height:100,width:100,margin:10}})),a.a.createElement(E.a,{onPress:function(){return t(W)}},a.a.createElement(d.a,{style:{borderRadius:100,backgroundColor:"blue",height:100,width:100,margin:10}})),a.a.createElement(E.a,{onPress:function(){return t(z)}},a.a.createElement(d.a,{style:{borderRadius:100,backgroundColor:"green",height:100,width:100,margin:10}})),a.a.createElement(E.a,{onPress:function(){return t(B)}},a.a.createElement(d.a,{style:{borderRadius:100,backgroundColor:"orange",height:100,width:100,margin:10}})),a.a.createElement(E.a,{onPress:function(){return t(L)}},a.a.createElement(d.a,{style:{borderRadius:100,backgroundColor:"yellow",height:100,margin:10,width:100}})))},H=n(162),K=n(271),Q=n(270),U=n(274),X=function(e){return StyleSheet.create({downloadButtonStyle:{flexDirection:"row",borderWidth:2,borderColor:"#304ffe",width:320,justifyContent:"space-between",borderRadius:10,backgroundColor:"#304ffe",margin:20},downloadIconStyle:{justifyContent:"center",alignItems:"center",paddingLeft:15,paddingRight:15},downloadTextViewStyle:{flexDirection:"column",alignItems:"center",justifyContent:"center"},downloadTextStyle:{fontSize:15,fontWeight:"bold",color:"white"}})},Y=function(){var e=Object(r.useContext)(N),t=e.theme;e.changeTheme;return a.a.createElement(s.a,{style:X(t).downloadButtonStyle},a.a.createElement(d.a,{style:X(t).downloadIconStyle},a.a.createElement(Q.a,{name:"android1",size:40,color:t.colors.textColor})),a.a.createElement(d.a,{style:X(t).downloadTextViewStyle},a.a.createElement(i.a,{style:X(t).downloadTextStyle},"FREE DOWNLOAD"),a.a.createElement(i.a,{style:X(t).downloadTextStyle},"ANDROID"),a.a.createElement(i.a,{style:X(t).downloadTextStyle},"LOCAL POSTER")),a.a.createElement(d.a,{style:X(t).downloadIconStyle},a.a.createElement(U.a,{name:"download",size:40,color:t.colors.textColor})))},Z=Object(K.a)(),$=function(){var e=Object(r.useContext)(N),t=e.theme;e.changeTheme;return console.log(t),a.a.createElement(H.a,null,a.a.createElement(Z.Navigator,{screenOptions:{headerStyle:{backgroundColor:t.colors.primary},headerTintColor:t.colors.text}},a.a.createElement(Z.Screen,{name:"Display",component:y,options:{headerShown:!1}}),a.a.createElement(Z.Screen,{name:"Settings",component:J}),a.a.createElement(Z.Screen,{name:"Theming",component:G,options:{title:"Theming"}}),a.a.createElement(Z.Screen,{name:"Check",component:q,options:{title:"Check"}}),a.a.createElement(Z.Screen,{name:"Download",component:Y,options:{title:"Download Button"}})))};t.a=function(){return a.a.createElement(A,null,a.a.createElement($,null))}},211:function(e,t,n){n(212),e.exports=n(263)},212:function(e,t){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/expo-service-worker.js",{scope:"/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}))}},[[211,1,2]]]);
//# sourceMappingURL=app.033717f7.chunk.js.map