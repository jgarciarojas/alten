export class ErrorModel {
  code: string;
  title: string;
  message: string;
  parameters: any;
}

export class NotFoundErrorModel extends ErrorModel {
  constructor() {
    super();
    this.code = '404';
    this.title = 'Not Found';
  }
}
