(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5f9ad1f2"],{"377d":function(t,e,a){"use strict";var n=a("3afe"),o=a.n(n);o.a},"3afe":function(t,e,a){},e965:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pageHeader"},[a("div",{staticClass:"asidePart"},[t.leftIcon?a("van-icon",{attrs:{name:"arrow-left"},on:{click:t.back}}):t._e()],1),t._v(" "),a("div",{staticClass:"center van-hairline--top-bottom"},[t._v(t._s(t.title))])])},o=[],i={name:"PageHeader",props:{title:{type:String,default:"这是标题"},leftIcon:{type:Boolean,default:!0},rightIcon:{type:Boolean,default:!0}},data:function(){return{userInfo:{},triangleShow:!1,selectedShop:0,option1:[{text:"全部商品",value:0},{text:"新款商品",value:1},{text:"活动商品",value:2}]}},created:function(){},methods:{back:function(){var t=this;t.$emit("back")},goRightCross:function(){},menuChange:function(){console.log(this.selectedShop)}}},c=i,s=(a("377d"),a("2877")),l=Object(s["a"])(c,n,o,!1,null,"6ad8e97a",null);e["default"]=l.exports}}]);