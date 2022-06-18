import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-step-table',
  templateUrl: './step-table.component.html',
  styleUrls: ['./step-table.component.scss']
})
export class StepTableComponent implements OnInit {
  @Input() form?: FormGroup
  selectedProduct1: any;
  products = [
    {  "code": "f230fh0g3", "name": "Bamboo Watch",     "email": "BambooWatch@gmail.com",    "address": "Address - address"},
    {  "code": "nvklal433", "name": "Black Watch",      "email": "BlackWatch@gmail.com",     "address": "Address - address"},
    {  "code": "zz21cz3c1", "name": "Blue Band",        "email": "Blue_Band@gmail.com",      "address": "Address - address"},
    {  "code": "244wgerg2", "name": "Blue T-Shirt",     "email": "BlueT@gmail.com",          "address": "Address - address"},
    {  "code": "h456wer53", "name": "Bracelet",         "email": "Bracelet@gmail.com",       "address": "Address - address"},
    {  "code": "av2231fwg", "name": "Brown Purse",      "email": "Brown.Purse@gmail.com",    "address": "Address - address"},
    {  "code": "bib36pfvm", "name": "Chakra Bracelet",  "email": "ChakraBracelet@gmail.com", "address": "Address - address"},
    {  "code": "mbvjkgip5", "name": "Galaxy Earrings",  "email": "GalaxyEarrings@gmail.com", "address": "Address - address"},
    {  "code": "vbb124btr", "name": "Game Controller",  "email": "GameController@gmail.com", "address": "Address - address"},
    {  "code": "cm230f032", "name": "Gaming Set",       "email": "GamingSet@gmail.com",      "address": "Address - address"}]
  constructor() { }

  ngOnInit(): void {
    this.SetSelectedProduct()
  }
  SetSelectedProduct() {
    console.log(this.form);

    if (this.form?.get('user')?.value) {
      this.selectedProduct1 = this.form?.get('user')?.value;
    }
  }
  onRowSelect(event:any) {
    this.form?.get('user')?.setValue(event.data);

  }
  onRowUnselect(event:any) {
    this.form?.get('user')?.setValue(null);
  }


}
