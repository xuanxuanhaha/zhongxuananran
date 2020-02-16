import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

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

  constructor() { }

  ngOnInit() {
  }


  addUser(){

  }
}
