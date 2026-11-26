(function(){
var K='mr-demo-ok',H='2d3e22f6c1d44316d902f13d18d0bbca1872679dccdd60783bc1d87e790413f6',ok=false;
try{ok=localStorage.getItem(K)===H;}catch(e){}
if(ok)return;
var st=document.createElement('style');st.id='gate-style';st.textContent='body{display:none!important}';document.documentElement.appendChild(st);
function hex(b){return Array.prototype.map.call(new Uint8Array(b),function(x){return('0'+x.toString(16)).slice(-2);}).join('');}
function show(){
var d=document.createElement('div');
d.setAttribute('style','position:fixed;inset:0;background:#fff;display:flex;align-items:center;justify-content:center;font-family:Times New Roman,Times,serif;z-index:99999');
d.innerHTML='<form style="display:grid;gap:12px;width:min(320px,86vw)"><label for="gate-pw" style="font-size:20px;color:#111">Password</label><input id="gate-pw" type="password" autocomplete="off" style="font:inherit;font-size:20px;padding:10px 12px;border:1px solid #111;border-radius:0"><button style="font:inherit;font-size:18px;font-weight:700;padding:10px 12px;background:#111;color:#fff;border:0;cursor:pointer">Open</button><p id="gate-msg" role="alert" style="margin:0;min-height:1.4em;font-size:17px;color:#8a1f11"></p></form>';
document.documentElement.appendChild(d);
var f=d.querySelector('form'),i=d.querySelector('input'),m=d.querySelector('#gate-msg');i.focus();
f.addEventListener('submit',function(e){e.preventDefault();
crypto.subtle.digest('SHA-256',new TextEncoder().encode(i.value)).then(function(b){
if(hex(b)===H){try{localStorage.setItem(K,H);}catch(e){}d.remove();st.remove();}
else{m.textContent='Wrong password.';i.select();}});});
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',show);else show();
})();
