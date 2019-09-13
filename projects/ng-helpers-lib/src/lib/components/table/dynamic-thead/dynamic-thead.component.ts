import { Component, OnInit, Input, ViewChild, TemplateRef, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'nh-dynamic-thead',
  templateUrl: './dynamic-thead.component.html',
  styleUrls: ['./dynamic-thead.component.css']
})
export class DynamicTheadComponent implements OnInit {

  @Input() headers: string[];
  @ViewChild('template') template: TemplateRef<any>;

  constructor(private container: ViewContainerRef) { }

  ngOnInit() {

    this.container.createEmbeddedView(this.template);
  }

}
