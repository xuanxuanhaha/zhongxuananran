import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  zhengtushow= false;
  zhutushow = false;
  yitushow = false;
  shitushow = false;
  kaishishow = false;

  constructor() { }

  @HostListener('window:scroll', [])
  onScroll(): void {
    // if ((window.innerHeight + window.scrollY) <= document.body.offsetHeight) {
    //   // you're at the bottom of the page
    //
    //   document.getElementById('smallphotobackground').style.background = 'pink';
    // }
    console.log(window.scrollY);
    if(window.scrollY > 30){
      document.getElementById('navbarbackground').style.backgroundColor = 'black';
    }else{
      document.getElementById('navbarbackground').style.backgroundColor = 'transparent';
    }
  }

  ngOnInit() {
    const a = window.innerHeight;
    document.getElementById('bottomcontact').style.marginTop = String(a - 40 + 'px');
    // document.getElementById('smallphotobackground2').style.background = 'orangered';

    this.zhengtushow = false;
    this.yitushow = false;
    this.shitushow = false;
    this.zhutushow = false;
    this.kaishishow = true;

  }
  zheng(){
    document.body.style.background = 'orangered';
    document.getElementById('smallphotobackground1').style.background = 'orangered';
    document.getElementById('smallphotobackground2').style.background = 'orangered';
    document.getElementById('smallphotobackground3').style.background = 'orangered';
    document.getElementById('smallphotobackground4').style.background = 'orangered';
    this.zhengtushow = true;
    this.yitushow = false;
    this.shitushow = false;
    this.zhutushow = false;
    this.kaishishow = false;
  }
  zhu(){
    document.body.style.background = 'cadetblue';
    document.getElementById('smallphotobackground1').style.background = 'cadetblue';
    document.getElementById('smallphotobackground2').style.background = 'cadetblue';
    document.getElementById('smallphotobackground3').style.background = 'cadetblue';
    document.getElementById('smallphotobackground4').style.background = 'cadetblue';
    this.zhengtushow = false;
    this.yitushow = false;
    this.shitushow = false;
    this.zhutushow = true;
    this.kaishishow = false;
  }
  yi(){
    document.body.style.background = 'pink';
    document.getElementById('smallphotobackground1').style.background = 'pink';
    document.getElementById('smallphotobackground2').style.background = 'pink';
    document.getElementById('smallphotobackground3').style.background = 'pink';
    document.getElementById('smallphotobackground4').style.background = 'pink';
    this.zhengtushow = false;
    this.yitushow = true;
    this.shitushow = false;
    this.zhutushow = false;
    this.kaishishow = false;
  }
  shi(){
    document.body.style.background = 'mediumpurple';
    document.getElementById('smallphotobackground1').style.background = 'mediumpurple';
    document.getElementById('smallphotobackground2').style.background = 'mediumpurple';
    document.getElementById('smallphotobackground3').style.background = 'mediumpurple';
    document.getElementById('smallphotobackground4').style.background = 'mediumpurple';
    this.zhengtushow = false;
    this.yitushow = false;
    this.shitushow = true;
    this.zhutushow = false;
    this.kaishishow = false;
  }

}
