import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumd',
  templateUrl: './breadcrumd.component.html',
  styleUrls: ['./breadcrumd.component.scss']
})
export class BreadcrumdComponent implements OnInit {

  @Input() route: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
