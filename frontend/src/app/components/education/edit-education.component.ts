import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-edit-education',
  templateUrl: './edit-education.component.html',
  styleUrls: ['./edit-education.component.css']
})
export class EditEducationComponent implements OnInit {
  edu: Educacion = null;
  id = this.actRoute.snapshot.params['id'];
  constructor(private eduService: EducacionService, private router: Router, private actRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.eduService.getDetallesEducacion(this.id).subscribe(
      data => { this.edu = data},err => {
        console.error("Error");
        this.router.navigate(['']);
      }
    )
  }

  onClose(): void{
    this.router.navigate([''])
  }

  onEdit():void {
    this.eduService.editEducacion(this.id,this.edu).subscribe(
      data=> {
        this.router.navigate(['']);
        console.log("works")
      }, err => {
        this.router.navigate(['']);
        console.error("error")
      }
    )
  }

  onDelete(): void{
    this.eduService.deleteEducacion(this.id).subscribe(
      data => { this.router.navigate([''])}, err =>
      { this.router.navigate([''])}
    )
  }
}