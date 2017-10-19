import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isChecked=true;

  mycolor:string ='2';
  colors = [
    {id: '1', name: "green"},
    {id: '2', name: "blue"},
    {id: '3', name: "red"}
  ];

  onChange($event){
    console.log($event);
  }

  onColorsChange($event: any){
    console.log($event);
  }
}
