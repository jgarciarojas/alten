import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ErrorModel, NotFoundErrorModel } from '.';


interface IOptions {
  subject: string;
  body: string;
}


@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.sass']
})
export class ErrorComponent implements OnInit, OnChanges {
  recepient: string;
  options: IOptions;
  url: string;
  notFound: boolean;
  viewError: boolean;
  @Input() error: ErrorModel;
  constructor() {
    this.recepient = 'support@jgarcia.com';
  }
  ngOnInit() {
    this.notFound = false;
    this.viewError = false;
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.error) {
      if (this.error.code) {
        this.notFound = false;
        this.viewError = true;
        let parameters: string;
        Object.getOwnPropertyNames(this.error.parameters).forEach(n => {
          parameters = parameters + `${n.toLowerCase()}:${this.error.parameters[n]}\n`;
        });
        this.options = {
          subject: `${this.error.title.toUpperCase()} , Code: ${this.error.code}`,
          body: `***Message***\n${this.error.message}\n***Parameters***\n${parameters}`
        };
        this.url = this.toUrl(this.recepient, this.options);
      } else {
        this.notFound = true;
        this.viewError = false;
      }
    } else {
      this.notFound = false;
      this.viewError = false;
    }
  }
  toUrl(recepient: string, opts: IOptions) {
    let link = 'mailto:';
    link += encodeURIComponent(recepient);
    const params = [];
    Object.getOwnPropertyNames(opts).forEach(n => {
      params.push(n.toLowerCase() + '=' + encodeURIComponent(opts[n]));
    });
    if (params.length > 0) {
      link += '?' + params.join('&');
    }
    return link;
  }
}
