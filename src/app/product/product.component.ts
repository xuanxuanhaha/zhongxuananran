import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  fourbuttonshow = false;
  constructor() { }
  @HostListener('window:scroll', [])
  onScroll(): void {
    // if ((window.innerHeight + window.scrollY) <= document.body.offsetHeight) {
    //   // you're at the bottom of the page
    //
    //   document.getElementById('smallphotobackground').style.background = 'pink';
    // }
    console.log(window.scrollY);
    if(window.scrollY > 100){
      document.getElementById('navbarbackground').style.display = 'none';
    }else{
      document.getElementById('navbarbackground').style.display = 'inline';
    }
  }
  ngOnInit() {
    this.fourbuttonshow = false;
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
