"use strict";(self.webpackChunkangular_client=self.webpackChunkangular_client||[]).push([[514],{6514:(b,c,i)=>{i.r(c),i.d(c,{LoginPageModule:()=>P});var u=i(6895),a=i(1240),t=i(8256),s=i(433),l=i(3403),m=i(2491),f=i(5309);let d=(()=>{class n extends f.s{constructor(){super(),this.inputs=[],this._inputs=[{key:"login",label:"Login",type:"string",minLength:3,required:!0},{key:"password",label:"Password",type:"password",required:!0,minLength:2}],this.inputs=this._inputs}getFields(){return this.inputs}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var L=i(229),h=i(7892);function y(n,e){if(1&n&&t._UZ(0,"app-base-input",5),2&n){const o=e.$implicit,r=t.oxw();t.Q6J("inputProperties",o)("form",r.form)}}let g=(()=>{class n{constructor(o,r,p){this.service=o,this.fb=r,this.auth=p,this.inputs=o.getFields(),this.form=r.nonNullable.group(this.service.prepareInputs(this.inputs))}get _inputs(){return this.inputs}ngOnInit(){}onSubmit(){this.auth.login()}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(d),t.Y36(s.qu),t.Y36(L.e))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-login"]],standalone:!0,features:[t.jDz],decls:7,vars:2,consts:[[1,"componentDescription"],[1,"button"],[3,"formGroup","ngSubmit"],[3,"inputProperties","form",4,"ngFor","ngForOf"],[3,"click"],[3,"inputProperties","form"]],template:function(o,r){1&o&&(t.TgZ(0,"p",0),t._uU(1,"login-component works!"),t.qZA(),t.TgZ(2,"div",1)(3,"form",2),t.NdJ("ngSubmit",function(){return r.onSubmit()}),t.YNc(4,y,1,2,"app-base-input",3),t.qZA(),t.TgZ(5,"button",4),t.NdJ("click",function(){return r.onSubmit()}),t._uU(6,"Just Click"),t.qZA()()),2&o&&(t.xp6(3),t.Q6J("formGroup",r.form),t.xp6(1),t.Q6J("ngForOf",r._inputs))},dependencies:[u.ez,u.sg,m.f,l.t,h.H,s.UX,s._Y,s.JL,s.sg],styles:[".button[_ngcontent-%COMP%]{display:block;width:300px;margin:auto;justify-content:center}button[_ngcontent-%COMP%]{margin:20px;border-radius:10px;color:#f0f8ff;border-color:red;background-color:red}"]}),n})();const v=[{path:"",component:(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-login-page"]],decls:3,vars:0,consts:[[1,"componentDescription"]],template:function(o,r){1&o&&(t.TgZ(0,"p",0),t._uU(1,"login-page works!"),t.qZA(),t._UZ(2,"app-login"))},dependencies:[g],styles:["p[_ngcontent-%COMP%]{display:flex;justify-content:center}"]}),n})()}];let C=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[a.Bz.forChild(v),a.Bz]}),n})(),P=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[u.ez,C,g]}),n})()}}]);