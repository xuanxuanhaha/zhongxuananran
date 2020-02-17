import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  fourbuttonshow = false;
  yidiv = false;
  yidivephotochange = false;
  zhengphotoshow = false;
  yiphotoshow = false;
  shiphotoshow = false;
  zhuphotoshow = false;

  bgNo = 4;
  constructor() { }
  @HostListener('window:scroll', [])
  onScroll(): void {
    // if ((window.innerHeight + window.scrollY) <= document.body.offsetHeight) {
    //   // you're at the bottom of the page
    //
    //   document.getElementById('smallphotobackground').style.background = 'pink';
    // }
    console.log( document.getElementById('zheng').clientHeight + document.getElementById('navbarid').clientHeight + document.getElementById('yi').clientHeight );
    console.log(window.innerHeight);
    console.log(window.scrollY + (1 / 2 * window.innerHeight));
    if(window.scrollY > 30){
      document.getElementById('navbarbackground1').style.display = 'inline';
      document.getElementById('navbarbackground1').style.backgroundColor = 'black';
      document.getElementById('navbarbackground').style.display = 'none';
    }else{
      document.getElementById('navbarbackground').style.display = 'inline';
      document.getElementById('navbarbackground1').style.display = 'none';
    }

    // if(window.scrollY + (1 / 2 * window.innerHeight) > document.getElementById('zheng').clientHeight + document.getElementById('navbarid').clientHeight){
    //   console.log('more than 400');
    //   this.yidivephotochange = true;
    // } else if (window.scrollY + (window.innerHeight) > document.getElementById('zheng').clientHeight + document.getElementById('navbarid').clientHeight){
    //   console.log('more than 400');
    //   this.yidiv = true;
    // } else{
    //   this.yidiv = false;
    //   this.yidivephotochange = false;
    // }

    if(window.scrollY + (1 / 2 * window.innerHeight) >document.getElementById('zhu').clientHeight + document.getElementById('yi').clientHeight + document.getElementById('zheng').clientHeight + document.getElementById('navbarid').clientHeight) {
      console.log('zhu');
      this.yiphotoshow = false;
      this.shiphotoshow = true;
      this.zhengphotoshow = false;
      this.zhuphotoshow = false;
      document.getElementById('bloc2').style.display = 'none';
      document.getElementById('bloc4').style.display = 'none';
      document.getElementById('bloc6').style.display = 'none';
      document.getElementById('bloc8').style.display = 'inline';
      document.getElementById('allproduct').style.color = 'black';
      this.bgNo = 1;
    } else if (window.scrollY + (1 / 2 * window.innerHeight) > document.getElementById('yi').clientHeight + document.getElementById('zheng').clientHeight + document.getElementById('navbarid').clientHeight) {
      console.log('shi');
      this.yiphotoshow = false;
      this.shiphotoshow = true;
      this.zhengphotoshow = false;
      this.zhuphotoshow = false;
      document.getElementById('bloc2').style.display = 'none';
      document.getElementById('bloc4').style.display = 'none';
      document.getElementById('bloc6').style.display = 'inline';
      document.getElementById('bloc8').style.display = 'none';

      document.getElementById('allproduct').style.color = 'white';
      this.bgNo = 2;
    }else if(window.scrollY + (1 / 2 * window.innerHeight) > document.getElementById('zheng').clientHeight + document.getElementById('navbarid').clientHeight) {
      console.log('yi');
      this.yiphotoshow = true;
      this.shiphotoshow = false;
      this.zhengphotoshow = false;
      this.zhuphotoshow = false;
      document.getElementById('bloc2').style.display = 'none';
      document.getElementById('bloc4').style.display = 'inline';
      document.getElementById('bloc6').style.display = 'none';
      document.getElementById('bloc8').style.display = 'none';
      document.getElementById('allproduct').style.color = 'black';
      this.bgNo = 3;
    }
    else{
      this.yiphotoshow = false;
      this.shiphotoshow = false;
      this.zhengphotoshow = true;
      this.zhuphotoshow = false;
      document.getElementById('bloc4').style.display = 'none';
      document.getElementById('bloc2').style.display = 'inline';
      document.getElementById('bloc6').style.display = 'none';
      document.getElementById('bloc8').style.display = 'none';
      document.getElementById('allproduct').style.color = 'white';
      this.bgNo = 4;
    }
  }
  ngOnInit() {
    this.fourbuttonshow = false;
    console.log(window.location.href);
    console.log(document.referrer);
    document.getElementById('bloc6').style.display = 'none';
    document.getElementById('bloc4').style.display = 'none';
    document.getElementById('bloc8').style.display = 'none';
    document.getElementById('bloc2').style.display = 'none';
    document.getElementById('navbarbackground1').style.display = 'none';
  }

  chooseallproducts(){
    if(this.fourbuttonshow === false){
    console.log(this.fourbuttonshow);
    this.fourbuttonshow = true;
    }else{
      this.fourbuttonshow = false;
    }

    // this.yidiv = true;
    // this.yidivephotochange = true;
  }

  zheng(){
    const elmnt = document.getElementById('zheng');
    elmnt.scrollIntoView();
    // this.yidiv = true;
    // this.yidivephotochange = true;
    document.getElementById('bloc4').style.display = 'none';
    document.getElementById('bloc2').style.display = 'inline';
    document.getElementById('bloc6').style.display = 'none';
    document.getElementById('bloc8').style.display = 'none';
    this.bgNo = 1;
  }

  yi(){
    // window.location.hash = 'yi';
    const elmnt = document.getElementById('yi');
    elmnt.scrollIntoView();
    this.yiphotoshow = true;
    this.shiphotoshow = false;
    this.zhengphotoshow = false;
    document.getElementById('bloc2').style.display = 'none';
    document.getElementById('bloc4').style.display = 'inline';
    document.getElementById('bloc6').style.display = 'none';
    document.getElementById('bloc8').style.display = 'none';
    this.bgNo = 2;
  }
  shi(){
    // window.location.hash = 'yi';
    const elmnt = document.getElementById('shi');
    elmnt.scrollIntoView();
    this.yiphotoshow = false;
    this.shiphotoshow = true;
    this.zhengphotoshow = false;
    document.getElementById('bloc2').style.display = 'none';
    document.getElementById('bloc4').style.display = 'none';
    document.getElementById('bloc6').style.display = 'inline';
    document.getElementById('bloc8').style.display = 'none';
    this.bgNo = 3;
  }
  zhu(){
    // window.location.hash = 'yi';
    const elmnt = document.getElementById('zhu');
    elmnt.scrollIntoView();
    this.yiphotoshow = false;
    this.shiphotoshow = true;
    this.zhengphotoshow = false;

    document.getElementById('bloc2').style.display = 'none';
    document.getElementById('bloc4').style.display = 'none';
    document.getElementById('bloc6').style.display = 'none';
    document.getElementById('bloc8').style.display = 'inline';
    this.bgNo = 4;
  }
}
