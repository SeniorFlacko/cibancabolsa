import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  title: string;
  message: string;
  continuar: string;

  buttons: Array<AlertButton>;

  @Output()
  onShow = new EventEmitter();

  @Output()
  onHide = new EventEmitter();

  constructor() { }

  ngOnInit() {
    $("#alertModal").on('show.bs.modal', () => {
      this.onShow.emit();
    });

    $("#alertModal").on('hide.bs.modal', () => {
        this.onHide.emit();
    });
  }

  show(title: string, message: string, options?: Array<AlertButton>,continuar?:string) {
    this.title = title;
    this.message = message;
    this.continuar = continuar || '';
    let hasDefault = false;

    if (options != null && options.length > 0) {
      options.forEach(item => {
        if (item.default) {
          hasDefault = true;
        }
      });
      if (!hasDefault) {
        options[0].default = true;
      }
      this.buttons = options;
    } else {
      this.buttons = new Array();
      this.buttons.push(new AlertButton('Aceptar', null, true));
    }
    $("#alertModal").modal('show');


  }

  hide() {
    $("#alertModal").modal('hide');
  }

  doClick(button: AlertButton) {
      if(button.click != null)
      {
          button.click.emit()
      }
  }

}

export class AlertButton {
  label: string;

  default: boolean;

  @Output()
  click = new EventEmitter();

  constructor(label: string, click: EventEmitter<{}>, isDefault: boolean) {
      this.label = label;
      this.click = click;
      this.default = isDefault;
  }
}

