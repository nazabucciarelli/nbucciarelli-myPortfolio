import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/model/login-usuario.model';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css']
})
export class ModalLoginComponent implements OnInit {
  isLogged = false;
  isLogginFail = false;
  loginUsuario : LoginUsuario;
  nombreUsuario : string = "";
  password : string = "";
  roles: string[] = [];
  errMsg: string = "Ocurrió un error";

  constructor(private dialog:MatDialog, private tokenService: TokenService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin(): void{
    this.loginUsuario = new LoginUsuario(this.nombreUsuario,this.password);
    this.authService.login(this.loginUsuario).subscribe(data => {
      this.isLogged = true;
      this.isLogginFail = false;
      this.tokenService.setToken(data.token);
      this.tokenService.setUsername(data.nombreUsuario);
      this.tokenService.setAuthorities(data.authorities);
      this.roles = data.authorities;
      this.dialog.closeAll();
      window.location.reload();
    }, err =>{
      this.isLogged = false;
      this.isLogginFail = true;
      console.log(this.errMsg);
      alert("Ocurrió un error");
    } 
    );
  }

  closeModal(){
    this.dialog.closeAll()
  }

}
