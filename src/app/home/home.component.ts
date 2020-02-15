import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
    document.getElementById('smallphotobackground').style.background = 'white';
    document.getElementById('bottomcontact').style.marginTop = String(a - 40 + 'px');
  }
  zheng(){
    document.body.style.background = 'pink';
    document.getElementById('smallphotobackground').style.background = 'pink';
  }
  zhu(){
    document.body.style.background = 'cadetblue';
    document.getElementById('smallphotobackground').style.background = 'cadetblue';
  }
  yi(){
    document.body.style.background = 'orange';
    document.getElementById('smallphotobackground').style.background = 'orange';
  }
  shi(){
    document.body.style.background = 'mediumpurple';
    document.getElementById('smallphotobackground').style.background = 'mediumpurple';
  }

}
