"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[458],{4070:function(n,e,t){t.r(e),t.d(e,{default:function(){return D}});var a,i,r,o,p,d,s,x,l,c,m,h,u=t(9439),g=t(3855),f=t(2791),b=t(7689),w=t(168),y=t(5867),Z=y.ZP.main(a||(a=(0,w.Z)(["\n  padding: 0 16px 32px 16px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  @media screen and (min-width: 320px) {\n    padding: 0 16px 32px 16px;\n  }\n  @media screen and (min-width: 768px) {\n    padding: 0 42px 64px 42px;\n  }\n"]))),j=y.ZP.h2(i||(i=(0,w.Z)(["\n  align-self: center;\n  text-transform: uppercase;\n\n  @media screen and (min-width: 1280px) {\n    margin-right: 45%;\n  }\n"]))),v=y.ZP.div(r||(r=(0,w.Z)(["\n  margin-bottom: 16px;\n  width: 100%;\n  align-self: flex-start;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  @media screen and (min-width: 768px) {\n    margin-bottom: 36px;\n  }\n"]))),k=y.ZP.div(o||(o=(0,w.Z)(["\n  width: 100%;\n  padding: 18px 16px;\n  display: flex;\n  justify-content: space-between;\n  border-radius: 24px;\n  box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff,\n    10px 12px 12px 0px #cab1b14d;\n\n  @media screen and (min-width: 768px) {\n    padding: 48px 56px 48px 10px;\n    margin-bottom: 20px;\n  }\n  @media screen and (min-width: 768px) {\n    padding: 48px 56px 48px 10px;\n    margin-bottom: 20px;\n    max-width: 60%;\n  }\n"]))),P=y.ZP.form(p||(p=(0,w.Z)(["\n  width: 75%;\n  padding: 18px 16px;\n  border-radius: 32px;\n  box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin: 0 auto;\n\n  @media screen and (min-width: 768px) {\n    padding: 28px 36px;\n  }\n"]))),z=y.ZP.div(d||(d=(0,w.Z)(["\n  min-width: 25%;\n  flex-basis: 60%;\n"]))),_=y.ZP.div(s||(s=(0,w.Z)(["\n  margin-top: 20px;\n  margin-bottom: 24px;\n  gap: 8px;\n  align-self: flex-end;\n  flex-direction: column;\n  display: flex;\n  justify-content: flex-end;\n  align-items: flex-end;\n"]))),C=y.ZP.p(x||(x=(0,w.Z)(["\n  display: none;\n\n  @media screen and (min-width: 1280px) {\n    z-index: 1000;\n    opacity: 0;\n    position: absolute;\n    top: 0;\n    right: 0;\n    transform: translate(100%, 75%);\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    padding: 5px 15px;\n    min-width: 110px;\n    width: fit-content;\n    min-height: 44px;\n    text-align: center;\n    font-size: 14px;\n    line-height: 1.33;\n    color: black;\n    border: 1px solid yellow;\n    border-radius: 10px;\n    box-shadow: 0 0 10em 1em rgba(255, 139, 72, 0.6);\n  }\n"]))),S=y.ZP.div(l||(l=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 16px;\n\n  @media screen and (min-width: 1280px) {\n    gap: 24px;\n  }\n"]))),A=y.ZP.div(c||(c=(0,w.Z)(["\n  position: relative;\n\n  &:hover > p,\n  &:focus > p {\n    opacity: 1;\n  }\n"]))),E=y.ZP.input(m||(m=(0,w.Z)(["\n  padding: 6px;\n  font-size: 14px;\n  border: none;\n  border-bottom: 1px solid black;\n  color: black;\n  outline-color: yellow;\n  background-color: transparent;\n\n  &:hover {\n    border-bottom: 1px solid yellow;\n  }\n\n  &:focus + .lightbox-modal__auth-label {\n    color: yellow;\n  }\n  @media screen and (min-width: 768px) {\n    margin-left: 20px;\n    padding: 6px 12px;\n  }\n"]))),L=y.ZP.label(h||(h=(0,w.Z)(["\n  text-transform: uppercase;\n  font-size: 16px;\n  color: black;\n\n  &:hover,\n  &:focus {\n    color: yellow;\n    font-weight: bold;\n  }\n\n  @media screen and (min-width: 768px) {\n    font-size: 24px;\n  }\n"]))),N=t(5262),q=t(3488),F=t.p+"static/media/man.c1c51a9e0b22288b7a07.gif",$=t(5047),B=t(184),D=function(){var n=(0,b.s0)(),e=(0,g.I0)(),t=(0,f.useState)(""),a=(0,u.Z)(t,2),i=a[0],r=a[1],o=(0,f.useState)(""),p=(0,u.Z)(o,2),d=p[0],s=p[1],x=(0,f.useState)(""),l=(0,u.Z)(x,2),c=l[0],m=l[1],h=function(n){switch(n.target.name){case"name":r(n.target.value);break;case"email":s(n.target.value);break;case"password":m(n.target.value);break;default:return}},w=function(){r(""),s(""),m("")};return(0,B.jsxs)(Z,{children:[(0,B.jsxs)(v,{children:[(0,B.jsx)(q.N,{onClick:function(){return n(-1)},text:"Go back",status:"goBack"}),(0,B.jsx)(j,{children:"Let's register"})]}),(0,B.jsxs)(k,{children:[(0,B.jsx)(z,{children:(0,B.jsx)("img",{alt:"movie camera",width:"100%",srcSet:F})}),(0,B.jsxs)(P,{onSubmit:function(n){n.preventDefault(),e((0,$.a$)({name:i,email:d,password:c})),w()},children:[(0,B.jsxs)(_,{children:[(0,B.jsx)(E,{type:"text",id:"auth-name",name:"name",value:i,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",required:!0,placeholder:"Enter your name",onChange:h}),(0,B.jsx)(L,{htmlFor:"auth-name",children:"Name"}),(0,B.jsx)(E,{type:"email",id:"auth-email",name:"email",value:d,required:!0,pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$",placeholder:"Enter your email",onChange:h}),(0,B.jsx)(L,{htmlFor:"auth-email",children:"Email"}),(0,B.jsx)(E,{type:"password",id:"auth-password",name:"password",value:c,required:!0,minLength:"6",placeholder:"Enter your password",onChange:h}),(0,B.jsx)(L,{htmlFor:"auth-password",children:"Password"})]}),(0,B.jsxs)(S,{children:[(0,B.jsxs)(A,{children:[(0,B.jsx)(q.N,{type:"submit",status:"register",text:"Create account"}),(0,B.jsx)(C,{children:"Newcomer? Create an account!"})]}),(0,B.jsxs)(A,{children:[(0,B.jsx)(N.O,{text:"Log in",status:"login",to:"/login"}),(0,B.jsx)(C,{children:"Already registered? Log in!"})]})]})]})]})]})}}}]);
//# sourceMappingURL=458.73fae066.chunk.js.map