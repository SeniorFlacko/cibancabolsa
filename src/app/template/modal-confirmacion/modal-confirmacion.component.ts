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

  onConfirmacion = ():boolean =>{ 
    console.log('Confirmado...'); 
    return false;
  }

  show(){
    $(this.hid).modal('show');
  }

  hide(){
    $(this.hid).modal('hide');
  }


  confirmar(validate: () => boolean = this.onConfirmacion){
    this.hide();
    // validate();
    // $('#envio-exitoso').modal('show');
    this.showModalResponse(validate());
  }

  functionValidate = (token?: string) => { return false };

  validateToken(validate: (token?:string) => boolean = this.functionValidate ){
    this.showModalResponse(validate(this.tokenValue));
  }

  showModalResponse( response: boolean ){
    if (response) {
      // $('#contrasenia-dinamica').modal('hide');
      $('#envio-exitoso').modal('show');
    }else{
      console.error("Error");
      $('#envioErroneo').modal('show');
      //TO-DO: Mostrar modal de envio erroneo
    }
  }

}
