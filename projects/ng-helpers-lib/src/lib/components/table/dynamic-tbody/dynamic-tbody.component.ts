import { Component, OnInit, Input, ViewChild, TemplateRef, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'nh-dynamic-tbody',
  templateUrl: './dynamic-tbody.component.html',
  styleUrls: ['./dynamic-tbody.component.css']
})
export class DynamicTbodyComponent implements OnInit {

  @Input() data: {key: any}[];
  @ViewChild('template') template: TemplateRef<any>;

  constructor(private container: ViewContainerRef) { }

  ngOnInit() {
    this.container.createEmbeddedView(this.template);
  }

  objProperties(obj: {key: any}): string[] {
    return Object.keys(obj)
      .filter(this.isntFunction);
  }

  private isntFunction(obj: any): boolean {
    return !(obj instanceof Function || typeof obj === 'function');
  }
}
