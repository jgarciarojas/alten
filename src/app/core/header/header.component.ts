import { Component, OnInit} from '@angular/core';
import { ApiFactoryHttpService } from '../../api/api-factory';
import { IKeyPair } from '../../api/dto';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  data: Array<IKeyPair<string, string>>;
  constructor(private api: ApiFactoryHttpService) {
  }
  ngOnInit(): void {
    this.data = new Array<IKeyPair<string, string>>();
    this.api.getFactory()
    .subscribe(
      result => {
        console.log(result.factory);
      },
      error => {
        this.data = null;
      });
  }
}
