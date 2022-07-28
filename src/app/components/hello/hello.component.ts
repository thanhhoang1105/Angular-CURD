import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  @Input() name!: string;
  inputText = "text";
  user = {
    name: "Tiep Phan",
    age: 30,
  };

  constructor() { }

  ngOnInit(): void {
  }

}
