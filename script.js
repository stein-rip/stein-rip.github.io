
var colour="#cc99ff"; //  colours of drops
var border="#6600ff"; // colour of border
var speed=40; // speed of animation, lower is faster
var size=8; // size of blocks
var drops=55; // number of raindrops
var swide, shigh;
var blox=new Array();
var blok=new Array();
var boddie;

window.onload=function() { if (document.getElementById) {
  var i, d, s;
  boddie=document.createElement("div");
  s=boddie.style;
  s.position="absolute";
  s.top="10px";
  s.left="0px";
  s.width="0px";
  s.height="0px";
  s.overflow="visible";
  s.backgroundColor="transparent";
  document.body.appendChild(boddie);
  set_width();
  for (i=0; i<drops; i++) {
    d=document.createElement("div");
    s=d.style;
    s.width=size+"px";
    s.height=size+"px";
    s.overflow="hidden";
    s.position="absolute";
    s.visibility="hidden";
    s.backgroundColor=colour;
	s.border="1px solid "+border;
	blox[i]=-1;
    blok[i]=d;
	boddie.appendChild(blok[i]);
  }
  size+=4;
  mainblock(0);
}}

function mainblock(r) {
  var t, l;
  t=4+size*Math.floor(Math.random()*(shigh-size)/size);
  l=4+size*Math.floor(Math.random()*(swide-size)/size);
  blok[r].style.left=l+"px";
  blok[r].style.top=t+"px";
  blox[r]=12;
  blok[r].style.visibility="visible";
  subblock(r);
  setTimeout("mainblock("+(++r%drops)+")", speed);
}

function subblock(r) {
  if (--blox[r]>-1) {
    if (navigator.appName=="Microsoft Internet Explorer") blok[r].style.filter="alpha(opacity="+blox[r]*10+")";
	else blok[r].style.opacity=blox[r]/10;
    setTimeout("subblock("+r+")", speed*drops/12);
  }
  else blok[r].style.visibility="hidden";
}

window.onresize=set_width;
function set_width() {
  var sw_min=999999;
  var sh_min=999999;
  if (document.documentElement && document.documentElement.clientWidth) {
    if (document.documentElement.clientWidth>0) sw_min=document.documentElement.clientWidth;
    if (document.documentElement.clientHeight>0) sh_min=document.documentElement.clientHeight;
  }
  if (typeof(self.innerWidth)!="undefinded" && self.innerWidth) {
    if (self.innerWidth>0 && self.innerWidth<sw_min) sw_min=self.innerWidth;
    if (self.innerHeight>0 && self.innerHeight<sh_min) sh_min=self.innerHeight;
  }
  if (document.body.clientWidth) {
    if (document.body.clientWidth>0 && document.body.clientWidth<sw_min) sw_min=document.body.clientWidth;
    if (document.body.clientHeight>0 && document.body.clientHeight<sh_min) sh_min=document.body.clientHeight;
  }
  if (sw_min==999999 || sh_min==999999) {
    sw_min=1200;
    sh_min=1200;
  }
  swide=sw_min;
  shigh=sh_min;
}

let userName = prompt("Woah you came! What's your name?");
console.log("Name: " + userName);
let feedpets = alert ("Hi, " + userName + "! Don't even be rude. Meet D.A.R.E and Pinch before you ENTER  🥚 💙 🐹"); 

