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
  constructor() { }
  @HostListener('window:scroll', [])
  onScroll(): void {
    // if ((window.innerHeight + window.scrollY) <= document.body.offsetHeight) {
    //   // you're at the bottom of the page
    //
    //   document.getElementById('smallphotobackground').style.background = 'pink';
    // }
    console.log( document.getElementById('zheng').clientHeight + document.getElementById('navbarid').clientHeight);
    console.log(window.innerHeight);
    console.log(window.scrollY + (1 / 2 * window.innerHeight));
    if(window.scrollY > 100){
      document.getElementById('navbarbackground').style.display = 'none';
    }else{
      document.getElementById('navbarbackground').style.display = 'inline';
    }

    if(window.scrollY + (1 / 2 * window.innerHeight) > document.getElementById('zheng').clientHeight + document.getElementById('navbarid').clientHeight){
      console.log('more than 400');
      this.yidivephotochange = true;
    } else if (window.scrollY + (window.innerHeight) > document.getElementById('zheng').clientHeight + document.getElementById('navbarid').clientHeight){
      console.log('more than 400');
      this.yidiv = true;
    } else{
      this.yidiv = false;
      this.yidivephotochange = false;
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
  }

}
