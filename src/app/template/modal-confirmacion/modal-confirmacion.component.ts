import { Component, OnInit, Input } from '@angular/core';
declare var $ : any;
@Component({
  selector: 'modal-confirmacion',
  templateUrl: './modal-confirmacion.component.html',
  styleUrls: ['./modal-confirmacion.component.css']
})
export class ModalConfirmacionComponent implements OnInit {

  private tokenValue: string;

  @Input() identificador: string;
  hid: string;
  constructor() { }

  ngOnInit() {
    this.hid = "#" + this.identificador;
  }

  onConfirmacion = () =>{ console.log('Confirmado...'); }

  show(){
    $(this.hid).modal('show');
  }

  hide(){
    $('#miModal').modal('hide');
  }


  confirmar(validate: () => void = this.onConfirmacion){
    this.hide();
    validate();
    $('#envio-exitoso').modal('show');
  }

  functionValidate = (token?: string) => { return false };

  validateToken(validate: (token?:string) => boolean = this.functionValidate ){
    this.showModalResponse(validate(this.tokenValue));
  }

  showModalResponse( response: boolean ){
    if (response) {
      $('#contrasenia-dinamica').modal('hide');
      $('#envio-exitoso').modal('show');
    }else{
      console.error("Token Erroneo");
    }
  }

}
