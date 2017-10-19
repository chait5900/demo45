import { ExampleDataSource } from './ExampleDataSource';
import { Component, OnInit } from '@angular/core';
import {TopicService} from '././topic.service';


@Component({
  selector: 'app-my-table-component',
  templateUrl: './my-table-component.component.html',
  styleUrls: ['./my-table-component.component.css']
})
export class MyTableComponentComponent implements OnInit {

  constructor(private topicSerivce: TopicService){
    //super()
  }
  
  displayedColumns = ['id', 'name', 'description'];
  dataSource = new ExampleDataSource( this.topicSerivce);

  ngOnInit() {
  }

}
