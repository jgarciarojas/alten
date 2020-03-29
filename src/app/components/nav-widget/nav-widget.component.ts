
import { Component, OnInit, Input, OnChanges, TemplateRef, Type, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { IKeyPair } from '../../api/dto';
import { ApiFactoryHttpService } from '../../api/api-factory';


@Component({
  selector: 'app-nav',
  templateUrl: './nav-widget.component.html',
  styleUrls: ['./nav-widget.component.css']
})
export class NavComponent implements OnInit, OnChanges {
  data: Array<IKeyPair<any, string>>;
  public input: FormControl;
  required: boolean;
  form: FormGroup;
  value: any;

  @ViewChild('select') select: ElementRef;

  constructor(private api: ApiFactoryHttpService) { }

  ngOnInit() {
    this.formInit();
  }

  ngOnChanges(changes: any): void {
    if (!this.select.nativeElement.disabled) {
      this.formInit();
    }
  }

  validated() {
    return this.input.valid || this.input.untouched;
  }

  reset() {
    this.input.reset();
  }

  //#region "Creacion y validacion del formulario"

  private getValidators() {
    const validators = new Array<ValidatorFn>();
    if (this.required) {
      validators.push(Validators.required);
    }
    return validators;
  }

  private formInit() {
    this.data = new Array<IKeyPair<string, string>>();
    this.api.getFactory()
      .subscribe(
        result => {
          const features = result.factory[0].features;
          console.log(result.factory[0].features);
          features.forEach(feature => {
            if (!feature.active) {
              this.data.push({ id: feature._id, name: feature.name });
            }
          });
        },
        error => {
          this.data = null;
        });
  }

  handleValueChange(value) {
    if (value !== undefined && value != null) {
      this.input.setValue(value, { onlySelf: true, emitEvent: false });
    } else {
      this.input.setValue(null, { onlySelf: true, emitEvent: false });
    }
  }

  //#endregion

}
