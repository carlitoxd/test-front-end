"use strict";var serverURL="http://localhost:1337/";angular.module("app",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch","ui.router","app.home"]).config(["$routeProvider","$urlRouterProvider",function(a,b){b.otherwise("/home")}]).controller("AppCtrl",["$scope","$location",function(a,b){a.Menu=[]}]),angular.module("app.home",["ui.router"]).config(["$stateProvider",function(a){a.state("home",{url:"/home",views:{main:{controller:"HomeCtrl",templateUrl:"scripts/modules/home/home.tpl.html"}},data:{pageTitle:"Home"}})}]).controller("HomeCtrl",["$scope",function(a){a.Menu=[],a.Menu=[{name:"Dashboard",route:"dashboard",id:"1",active:!0,icon:"fa fa-pie-chart"},{name:"Reportes",route:"report",id:"1",active:!0,icon:"fa fa-bars"},{name:"Configuracion",route:"config",id:"1",active:!0,icon:"fa fa-gear",SubMenu:[{name:"Ajustes Basicos",route:"config",id:"1",active:!0,icon:"fa fa-gears",SubMenu:[{name:"Managers",route:"config",id:"1",active:!0,icon:"fa fa-gears"},{name:"Conexiones",route:"config",id:"1",active:!0,icon:"fa fa-gears"},{name:"Schemas",route:"config",id:"1",active:!0,icon:"fa fa-gears"},{name:"Columns",route:"config",id:"1",active:!0,icon:"fa fa-gears"},{name:"Query",route:"config",id:"1",active:!0,icon:"fa fa-gears"}]},{name:"Seguridad",route:"config",id:"1",active:!0,icon:"fa fa-gears",Menu:[{name:"Usuarios",route:"config",id:"1",active:!0,icon:"fa fa-gears"},{name:"Roles",route:"config",id:"1",active:!0,icon:"fa fa-gears"},{name:"Reportes vs Roles",route:"config",id:"1",active:!0,icon:"fa fa-gears"}]}]}]}]);