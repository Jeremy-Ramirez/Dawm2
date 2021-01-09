import { Component, OnInit } from '@angular/core';
import { TortasService } from '../../services/tortas.service';
import listatortas from 'src/app/data/tortas2.json';


@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styles: ['src/app/components/catalogo/catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  tortas:any[]=listatortas;

  constructor() { 
    console.log(listatortas);
  }

  ngOnInit(): void {
  }




}
