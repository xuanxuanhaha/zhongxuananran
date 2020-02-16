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
  constructor() { }
  @HostListener('window:scroll', [])
  onScroll(): void {
    // if ((window.innerHeight + window.scrollY) <= document.body.offsetHeight) {
    //   // you're at the bottom of the page
    //
    //   document.getElementById('smallphotobackground').style.background = 'pink';
    // }
    // console.log( document.getElementById('zheng').clientHeight + document.getElementById('navbarid').clientHeight);
    // console.log(window.innerHeight);
    // console.log(window.scrollY + (1 / 2 * window.innerHeight));
    if(window.scrollY > 100){
      document.getElementById('navbarbackground').style.display = 'none';
    }else{
      document.getElementById('navbarbackground').style.display = 'inline';
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

    if(window.scrollY + (1 / 2 * window.innerHeight) > document.getElementById('zheng').clientHeight + document.getElementById('navbarid').clientHeight) {
      console.log('yi');
      this.yiphotoshow = true;
      this.zhengphotoshow = false;
      document.getElementById('bloc2').style.display = 'none';
      document.getElementById('bloc4').style.display = 'inline';
    }else{
      this.yiphotoshow = false;
      this.zhengphotoshow = true;
      document.getElementById('bloc4').style.display = 'none';
      document.getElementById('bloc2').style.display = 'inline';
    }
  }
  ngOnInit() {
    this.fourbuttonshow = false;
    console.log(window.location.href);
    console.log(document.referrer);
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
  }

  yi(){
    // window.location.hash = 'yi';
    const elmnt = document.getElementById('yi');
    elmnt.scrollIntoView();
    this.yiphotoshow = true;
    this.zhengphotoshow = false;
    document.getElementById('bloc2').style.display = 'none';
    document.getElementById('bloc4').style.display = 'inline';
  }

}
