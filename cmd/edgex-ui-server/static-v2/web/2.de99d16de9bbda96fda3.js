(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"7PPe":function(e,t,i){"use strict";i.d(t,"a",function(){return r});var n=i("tk/3"),c=i("JIr8"),d=i("fXoL"),o=i("9vc0");let r=(()=>{class e{constructor(e,t){this.http=e,this.errorSvc=t,this.endpoint="/command",this.version="/api/v2",this.urlPrefix=`${this.endpoint}${this.version}`,this.endpointHealthUrl="/ping",this.versionUrl="/version",this.configUrl="/config",this.deviceCoreCommandListUrl=this.urlPrefix+"/device/all",this.commandsByDeviceIdUrl=this.urlPrefix+"/device/",this.commandsByDeviceNameUrl=this.urlPrefix+"/device/name/",this.issueCmdByDeviceNameAndCmdNameUrl=this.urlPrefix+"/device/name/",this.httpPostOrPutJSONOptions={headers:new n.c({"Content-type":"application/json",Authorization:""})}}getConfig(){return this.http.get(`${this.urlPrefix}${this.configUrl}`).pipe(Object(c.a)(e=>this.errorSvc.handleError(e)))}findCommnadsByDeviceId(e){return this.http.get(`${this.commandsByDeviceIdUrl}${e}`).pipe(Object(c.a)(e=>this.errorSvc.handleError(e)))}allDeviceCoreCommandsPagination(e,t){return this.http.get(`${this.deviceCoreCommandListUrl}?offset=${e}&limit=${t}`).pipe(Object(c.a)(e=>this.errorSvc.handleError(e)))}findDeviceAssociatedCommnadsByDeviceName(e){return this.http.get(`${this.commandsByDeviceNameUrl}${e}`).pipe(Object(c.a)(e=>this.errorSvc.handleError(e)))}findAllDeviceCommnads(){return this.http.get(this.urlPrefix+"/device").pipe(Object(c.a)(e=>this.errorSvc.handleError(e)))}issueGetBinaryCmd(e,t){return this.http.request("GET",`${this.commandsByDeviceIdUrl}${e}/command/${t}`,{responseType:"arraybuffer"}).pipe(Object(c.a)(e=>this.errorSvc.handleError(e)))}issueGetCmd(e,t){return this.http.get(`${this.issueCmdByDeviceNameAndCmdNameUrl}${e}/${t}`).pipe(Object(c.a)(e=>this.errorSvc.handleError(e)))}issueSetCmd(e,t,i){return this.http.put(`${this.issueCmdByDeviceNameAndCmdNameUrl}${e}/${t}`,JSON.stringify(i),this.httpPostOrPutJSONOptions).pipe(Object(c.a)(e=>this.errorSvc.handleError(e)))}}return e.\u0275fac=function(t){return new(t||e)(d.Qb(n.a),d.Qb(o.a))},e.\u0275prov=d.Eb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},HpGU:function(e,t,i){"use strict";i.d(t,"a",function(){return f});var n=i("fXoL"),c=i("3Pt+"),d=i("ofXK"),o=i("7PPe");function r(e,t){if(1&e){const e=n.Mb();n.Lb(0,"tr"),n.Lb(1,"td"),n.Lb(2,"div",24),n.Lb(3,"input",25),n.Tb("click",function(i){n.gc(e);const c=t.$implicit;return n.Vb().selectOne(i,c)}),n.Kb(),n.Kb(),n.Kb(),n.Lb(4,"td",26),n.mc(5),n.Kb(),n.Lb(6,"td",26),n.mc(7),n.Kb(),n.Lb(8,"td"),n.Lb(9,"span",27),n.Tb("click",function(){n.gc(e);const i=t.$implicit;return n.Vb().checkOne(i)}),n.mc(10,"coreCommands"),n.Kb(),n.Kb(),n.Kb()}if(2&e){const e=t.$implicit,i=n.Vb();n.Ab("table-active",i.isChecked(e)),n.xb(3),n.Yb("checked",i.isChecked(e)),n.xb(2),n.nc(e.deviceName),n.xb(2),n.nc(e.profileName)}}let a=(()=>{class e{constructor(e){this.cmdSvc=e,this.deviceCoreCmdList=[],this.deviceCoreCmdSelectedEvent=new n.n,this.delegationEvent=new n.n,this.pagination=1,this.pageLimit=5,this.pageOffset=(this.pagination-1)*this.pageLimit}ngOnInit(){this.findAllDeviceCoreCmdsPagination()}findAllDeviceCoreCmdsPagination(){this.cmdSvc.allDeviceCoreCommandsPagination(this.pageOffset,this.pageLimit).subscribe(e=>{this.deviceCoreCmdList=e.deviceCoreCommands})}delegation(){this.delegationEvent.emit(!0)}isChecked(e){var t;return(null===(t=this.deviceCoreCmdSelected)||void 0===t?void 0:t.deviceName)===e.deviceName}selectOne(e,t){this.deviceCoreCmdSelected=e.target.checked?t:void 0,this.delegation(),this.deviceCoreCmdSelectedEvent.emit(this.deviceCoreCmdSelected)}checkOne(e){this.deviceCoreCmdSelected=e,this.deviceCoreCmdSelectedEvent.emit(this.deviceCoreCmdSelected)}onPageSelected(){this.delegation(),this.resetPagination(),this.setPagination(),this.findAllDeviceCoreCmdsPagination()}prePage(){this.delegation(),this.setPagination(-1),this.findAllDeviceCoreCmdsPagination()}nextPage(){this.delegation(),this.setPagination(1),this.findAllDeviceCoreCmdsPagination()}setPagination(e){1===e?this.pagination+=1:-1===e&&(this.pagination-=1),this.pageOffset=(this.pagination-1)*this.pageLimit}resetPagination(){this.pagination=1}}return e.\u0275fac=function(t){return new(t||e)(n.Ib(o.a))},e.\u0275cmp=n.Cb({type:e,selectors:[["app-device-core-command-list"]],inputs:{deviceCoreCmdSelected:"deviceCoreCmdSelected"},outputs:{deviceCoreCmdSelectedEvent:"deviceCoreCmdSelectedEvent",delegationEvent:"delegationEvent"},decls:41,vars:4,consts:[[1,"card"],[1,"card-header"],[1,"fa","fa-list","text-danger"],[1,"card-body","p-0"],[1,"table-responsive"],[1,"table","table-hover","text-truncate"],[1,"thead-light"],["scope","col"],[3,"table-active",4,"ngFor","ngForOf"],[1,"card-footer","text-muted","p-1"],["aria-label","navigation"],[1,"pagination","justify-content-end","m-0"],[1,"page-item","mr-2","mt-1"],[1,"align-middle"],[1,"page-item","mr-2"],["name","pageLimit","id","pageLimit",1,"form-control",3,"ngModel","ngModelChange","mousedown"],["value","5"],["value","10"],["value","20"],[1,"page-item","mr-1"],[1,"page-link","btn",3,"disabled","click"],[1,"fa","fa-angle-double-left"],[1,"page-item"],[1,"fa","fa-angle-double-right"],[1,"form-group","form-check"],["type","checkbox","role","button",1,"form-check-input",3,"checked","click"],[1,"user-select-all"],["role","button",1,"badge","badge-primary",3,"click"]],template:function(e,t){1&e&&(n.Lb(0,"div",0),n.Lb(1,"div",1),n.Jb(2,"i",2),n.mc(3," Device Core Command List "),n.Kb(),n.Lb(4,"div",3),n.Lb(5,"div",4),n.Lb(6,"table",5),n.Lb(7,"thead",6),n.Lb(8,"tr"),n.Lb(9,"th",7),n.mc(10,"#"),n.Kb(),n.Lb(11,"th",7),n.mc(12,"Device"),n.Kb(),n.Lb(13,"th",7),n.mc(14,"DeviceProfile"),n.Kb(),n.Lb(15,"th",7),n.mc(16,"AssociatedCommands"),n.Kb(),n.Kb(),n.Kb(),n.Lb(17,"tbody"),n.kc(18,r,11,5,"tr",8),n.Kb(),n.Kb(),n.Kb(),n.Kb(),n.Lb(19,"div",9),n.Lb(20,"nav",10),n.Lb(21,"ul",11),n.Lb(22,"li",12),n.Lb(23,"span",13),n.mc(24,"items per page"),n.Kb(),n.Kb(),n.Lb(25,"li",14),n.Lb(26,"select",15),n.Tb("ngModelChange",function(e){return t.pageLimit=e})("mousedown",function(){return t.delegation()})("ngModelChange",function(){return t.onPageSelected()}),n.Lb(27,"option",16),n.mc(28,"5"),n.Kb(),n.Lb(29,"option",17),n.mc(30,"10"),n.Kb(),n.Lb(31,"option",18),n.mc(32,"20"),n.Kb(),n.Kb(),n.Kb(),n.Lb(33,"li",19),n.Lb(34,"button",20),n.Tb("click",function(){return t.prePage()}),n.Jb(35,"i",21),n.mc(36," Previous"),n.Kb(),n.Kb(),n.Lb(37,"li",22),n.Lb(38,"button",20),n.Tb("click",function(){return t.nextPage()}),n.mc(39,"Next "),n.Jb(40,"i",23),n.Kb(),n.Kb(),n.Kb(),n.Kb(),n.Kb(),n.Kb()),2&e&&(n.xb(18),n.Yb("ngForOf",t.deviceCoreCmdList),n.xb(8),n.Yb("ngModel",t.pageLimit),n.xb(8),n.Yb("disabled",1===t.pagination),n.xb(4),n.Yb("disabled",t.pageLimit>t.deviceCoreCmdList.length))},directives:[d.j,c.l,c.d,c.g,c.h,c.m],styles:[".btn[disabled][_ngcontent-%COMP%]:hover{cursor:not-allowed}"]}),e})();function s(e,t){if(1&e){const e=n.Mb();n.Lb(0,"input",17),n.Tb("ngModelChange",function(t){return n.gc(e),n.Vb(3).httpMethod=t})("click",function(t){return n.gc(e),n.Vb(3).methodChecked(t,"GET")}),n.Kb()}if(2&e){const e=n.Vb(2),t=e.$implicit,i=e.index,c=n.Vb();n.bc("id","get-",t,"-",i,""),n.Yb("ngModel",c.httpMethod)}}function b(e,t){if(1&e&&(n.Lb(0,"div",13),n.Lb(1,"span",14),n.kc(2,s,1,3,"input",15),n.Lb(3,"label",16),n.mc(4,"get"),n.Kb(),n.Kb(),n.Kb()),2&e){const e=n.Vb(),t=e.$implicit,i=e.index,c=n.Vb();n.xb(2),n.Yb("ngIf",c.isChecked(t.name)),n.xb(1),n.bc("for","get-",t,"-",i,"")}}function m(e,t){if(1&e){const e=n.Mb();n.Lb(0,"input",19),n.Tb("ngModelChange",function(t){return n.gc(e),n.Vb(3).httpMethod=t})("click",function(t){return n.gc(e),n.Vb(3).methodChecked(t,"PUT")}),n.Kb()}if(2&e){const e=n.Vb(2),t=e.$implicit,i=e.index,c=n.Vb();n.bc("id","set-",t,"-",i,""),n.Yb("ngModel",c.httpMethod)}}function l(e,t){if(1&e&&(n.Lb(0,"div",13),n.Lb(1,"span",14),n.kc(2,m,1,3,"input",18),n.Lb(3,"label",16),n.mc(4,"set"),n.Kb(),n.Kb(),n.Kb()),2&e){const e=n.Vb(),t=e.$implicit,i=e.index,c=n.Vb();n.xb(2),n.Yb("ngIf",c.isChecked(t.name)),n.xb(1),n.bc("for","set-",t,"-",i,"")}}function h(e,t){if(1&e){const e=n.Mb();n.Lb(0,"tr"),n.Lb(1,"td"),n.Lb(2,"input",10),n.Tb("click",function(i){n.gc(e);const c=t.$implicit;return n.Vb().selectOne(i,c)}),n.Kb(),n.Kb(),n.Lb(3,"td",11),n.mc(4),n.Kb(),n.Lb(5,"td"),n.Lb(6,"div"),n.kc(7,b,5,3,"div",12),n.kc(8,l,5,3,"div",12),n.Kb(),n.Kb(),n.Lb(9,"td"),n.mc(10),n.Kb(),n.Lb(11,"td"),n.mc(12),n.Kb(),n.Kb()}if(2&e){const e=t.$implicit,i=n.Vb();n.Ab("table-active",i.isChecked(e.name)),n.xb(2),n.Yb("checked",i.isChecked(e.name)),n.xb(2),n.nc(e.name),n.xb(3),n.Yb("ngIf",e.get),n.xb(1),n.Yb("ngIf",e.set),n.xb(2),n.nc(e.url),n.xb(2),n.nc(e.path)}}let v=(()=>{class e{constructor(e){this.cmdSvc=e,this.singleCoreCmdSelectedEvent=new n.n,this.deviceAssociatedCoreCommandsList=[],this.coreCmdMethodEvent=new n.n,this.delegationEvent=new n.n}ngOnInit(){this.cmdSvc.findDeviceAssociatedCommnadsByDeviceName(this.deviceName).subscribe(e=>{this.deviceAssociatedCoreCommandsList=e.deviceCoreCommand.coreCommands})}methodChecked(e,t){this.httpMethod=e.target.checked?t:"",this.coreCmdMethodEvent.emit(this.httpMethod),this.delegationEvent.emit(!0)}isChecked(e){var t;return(null===(t=this.coreCmdSelected)||void 0===t?void 0:t.name)===e}radioUnchecked(e){return e||!1}selectOne(e,t){this.coreCmdSelected=e.target.checked?t:{},this.delegationEvent.emit(!0),this.singleCoreCmdSelectedEvent.emit(this.coreCmdSelected),this.coreCmdMethodEvent.emit(void 0)}}return e.\u0275fac=function(t){return new(t||e)(n.Ib(o.a))},e.\u0275cmp=n.Cb({type:e,selectors:[["app-device-associated-core-command-list"]],inputs:{deviceName:"deviceName",coreCmdSelected:"coreCmdSelected",httpMethod:"httpMethod"},outputs:{singleCoreCmdSelectedEvent:"singleCoreCmdSelectedEvent",coreCmdMethodEvent:"coreCmdMethodEvent",delegationEvent:"delegationEvent"},decls:24,vars:2,consts:[[1,"card","border-0"],[1,"card-header"],[1,"fa","fa-list","text-danger","mr-2"],[1,"text-info"],[1,"card-body","p-0"],[1,"table-responsive"],[1,"table","table-hover","text-truncate"],[1,"thead-light"],["scope","col"],[3,"table-active",4,"ngFor","ngForOf"],["type","checkbox","role","button",3,"checked","click"],[1,"user-select-all"],["class","form-check form-check-inline",4,"ngIf"],[1,"form-check","form-check-inline"],[1,"badge"],["class","form-check-input align-middle","type","radio","name","cmdMethod","value","GET",3,"id","ngModel","ngModelChange","click",4,"ngIf"],[1,"form-check-label","align-middle",3,"for"],["type","radio","name","cmdMethod","value","GET",1,"form-check-input","align-middle",3,"id","ngModel","ngModelChange","click"],["class","form-check-input align-middle","type","radio","name","cmdMethod","value","PUT",3,"id","ngModel","ngModelChange","click",4,"ngIf"],["type","radio","name","cmdMethod","value","PUT",1,"form-check-input","align-middle",3,"id","ngModel","ngModelChange","click"]],template:function(e,t){1&e&&(n.Lb(0,"div",0),n.Lb(1,"div",1),n.Jb(2,"i",2),n.Lb(3,"span"),n.Lb(4,"span",3),n.mc(5),n.Kb(),n.mc(6," Associated Commands List"),n.Kb(),n.Kb(),n.Lb(7,"div",4),n.Lb(8,"div",5),n.Lb(9,"table",6),n.Lb(10,"thead",7),n.Lb(11,"tr"),n.Lb(12,"th",8),n.mc(13,"#"),n.Kb(),n.Lb(14,"th",8),n.mc(15,"Name"),n.Kb(),n.Lb(16,"th",8),n.mc(17,"Method"),n.Kb(),n.Lb(18,"th",8),n.mc(19,"URL"),n.Kb(),n.Lb(20,"th",8),n.mc(21,"Path"),n.Kb(),n.Kb(),n.Kb(),n.Lb(22,"tbody"),n.kc(23,h,13,8,"tr",9),n.Kb(),n.Kb(),n.Kb(),n.Kb(),n.Kb()),2&e&&(n.xb(5),n.nc(t.deviceName),n.xb(18),n.Yb("ngForOf",t.deviceAssociatedCoreCommandsList))},directives:[d.j,d.k,c.j,c.a,c.d,c.g],styles:[""]}),e})();function g(e,t){if(1&e){const e=n.Mb();n.Lb(0,"div",13),n.Lb(1,"nav",14),n.Lb(2,"ol",15),n.Lb(3,"li",16),n.Lb(4,"a",17),n.Tb("click",function(){return n.gc(e),n.Vb(2).backtoDeviceCoreCommandList()}),n.mc(5,"DeviceCoreCommandList"),n.Kb(),n.Kb(),n.Lb(6,"li",18),n.mc(7),n.Kb(),n.Kb(),n.Kb(),n.Kb()}if(2&e){const e=n.Vb(2);n.xb(7),n.nc(e.deviceName)}}function u(e,t){if(1&e){const e=n.Mb();n.Lb(0,"div"),n.Lb(1,"app-device-core-command-list",19),n.Tb("delegationEvent",function(t){return n.gc(e),n.Vb(2).ondelegation(t)})("deviceCoreCmdSelectedEvent",function(t){return n.gc(e),n.Vb(2).onDeviceCoreCmdSelected(t)}),n.Kb(),n.Kb()}if(2&e){const e=n.Vb(2);n.xb(1),n.Yb("deviceCoreCmdSelected",e.deviceCoreCmdSelected)}}function p(e,t){if(1&e){const e=n.Mb();n.Lb(0,"div"),n.Lb(1,"app-device-associated-core-command-list",20),n.Tb("coreCmdMethodEvent",function(t){return n.gc(e),n.Vb(2).onCmdMethodSelected(t)})("delegationEvent",function(t){return n.gc(e),n.Vb(2).ondelegation(t)})("singleCoreCmdSelectedEvent",function(t){return n.gc(e),n.Vb(2).onCoreCmdSelected(t)}),n.Kb(),n.Kb()}if(2&e){const e=n.Vb(2);n.xb(1),n.Yb("coreCmdSelected",e.coreCmdSelected)("deviceName",e.deviceName)("httpMethod",e.httpMethod)}}function C(e,t){if(1&e&&(n.Lb(0,"div",8),n.Lb(1,"div",9),n.kc(2,g,8,1,"div",10),n.Lb(3,"div",11),n.kc(4,u,2,1,"div",12),n.kc(5,p,2,3,"div",12),n.Kb(),n.Kb(),n.Kb()),2&e){const e=n.Vb();n.xb(2),n.Yb("ngIf",!e.deviceCoreCmdListVisible),n.xb(2),n.Yb("ngIf",e.deviceCoreCmdListVisible),n.xb(1),n.Yb("ngIf",!e.deviceCoreCmdListVisible)}}let f=(()=>{class e{constructor(){this.visible=!1,this.validate=!1,this.deviceName="",this.commandSelectedEvent=new n.n,this.cmdMethodEvent=new n.n,this.deviceCoreCmdListVisible=!0,this.delegation=!1,this.coreCmdSelected={}}ngOnInit(){}ondelegation(e){document.getElementById("cmd-combo").focus(),this.delegation=e}onDeviceCoreCmdSelected(e){e?(this.deviceCoreCmdSelected=e,this.deviceName=this.deviceCoreCmdSelected.deviceName,this.deviceCoreCmdListVisible=!1):this.deviceCoreCmdSelected=e}onCmdMethodSelected(e){this.httpMethod=e,this.cmdMethodEvent.emit(this.httpMethod)}onCoreCmdSelected(e){this.coreCmdSelected=e,this.commandSelectedEvent.emit(this.coreCmdSelected)}backtoDeviceCoreCommandList(){this.deviceCoreCmdListVisible=!0}toggle(e){e.stopImmediatePropagation(),this.visible=!this.visible}close(e){setTimeout(()=>{this.delegation?this.delegation=!1:this.visible=!1},130)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.Cb({type:e,selectors:[["app-device-core-command-combo-list"]],inputs:{validate:"validate",deviceName:"deviceName",coreCmdSelected:"coreCmdSelected"},outputs:{commandSelectedEvent:"commandSelectedEvent",cmdMethodEvent:"cmdMethodEvent"},decls:10,vars:6,consts:[["tabindex","-1","id","cmd-combo",1,"cmd-combo",3,"blur"],[1,"input-group","has-validation",3,"mousedown"],["type","text","name","coreCmdSelected","disabled","","maxlength","0","required","",1,"form-control",3,"ngModel","ngModelChange"],[1,"input-group-append"],["role","button",1,"input-group-text"],[1,"fa","fa-chevron-down"],["id","validationCoreCmdPathFeedback",1,"invalid-feedback"],["class","cmd-combo-body shadow rounded",4,"ngIf"],[1,"cmd-combo-body","shadow","rounded"],[1,"card"],["class","card-header",4,"ngIf"],[1,"card-body","p-0"],[4,"ngIf"],[1,"card-header"],["aria-label","breadcrumb",1,"m-0","p-0"],[1,"breadcrumb","p-0","m-0","bg-light"],[1,"breadcrumb-item","text-primary"],["role","button",3,"click"],["aria-current","page",1,"breadcrumb-item","active"],[3,"deviceCoreCmdSelected","delegationEvent","deviceCoreCmdSelectedEvent"],[3,"coreCmdSelected","deviceName","httpMethod","coreCmdMethodEvent","delegationEvent","singleCoreCmdSelectedEvent"]],template:function(e,t){1&e&&(n.Lb(0,"div",0),n.Tb("blur",function(e){return t.close(e)}),n.Lb(1,"div",1),n.Tb("mousedown",function(e){return t.toggle(e)}),n.Lb(2,"input",2),n.Tb("ngModelChange",function(e){return t.coreCmdSelected.path=e}),n.Kb(),n.Lb(3,"div",3),n.Lb(4,"span",4),n.Jb(5,"i",5),n.Kb(),n.Kb(),n.Lb(6,"div",6),n.Lb(7,"small"),n.mc(8,"the command name and method can't be empty!"),n.Kb(),n.Kb(),n.Kb(),n.kc(9,C,6,3,"div",7),n.Kb()),2&e&&(n.xb(2),n.Ab("is-invalid",(!t.coreCmdSelected.path||!t.httpMethod)&&t.validate)("is-valid",t.coreCmdSelected.path&&t.httpMethod&&t.validate),n.Yb("ngModel",t.coreCmdSelected.path),n.xb(7),n.Yb("ngIf",t.visible))},directives:[c.a,c.c,c.k,c.d,c.g,d.k,a,v],styles:[".cmd-combo[_ngcontent-%COMP%]{position:relative;right:auto}.cmd-combo-shielder[_ngcontent-%COMP%]{position:fixed;top:0;bottom:0;right:0;left:0;z-index:101}.cmd-combo-body[_ngcontent-%COMP%]{position:absolute;top:33px;bottom:auto;left:0;right:0;z-index:105;visibility:visible;display:inline-block}"]}),e})()},ixIh:function(e,t,i){"use strict";i.d(t,"a",function(){return s});var n=i("ofXK"),c=i("3Pt+"),d=i("tyNb"),o=i("fXoL");const r=[];let a=(()=>{class e{}return e.\u0275mod=o.Gb({type:e}),e.\u0275inj=o.Fb({factory:function(t){return new(t||e)},imports:[[d.i.forChild(r)],d.i]}),e})(),s=(()=>{class e{}return e.\u0275mod=o.Gb({type:e}),e.\u0275inj=o.Fb({factory:function(t){return new(t||e)},imports:[[n.b,c.b,a]]}),e})()}}]);