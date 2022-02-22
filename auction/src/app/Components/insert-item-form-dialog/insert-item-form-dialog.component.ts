import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ItemService } from 'src/app/item.service';

@Component({
  selector: 'app-insert-item-form-dialog',
  templateUrl: './insert-item-form-dialog.component.html',
  styleUrls: ['./insert-item-form-dialog.component.css']
})
export class InsertItemFormDialogComponent implements OnInit {


  form = new FormGroup({
    //<form></form>
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    startPrice: new FormControl('', [Validators.required]),
    userId: new FormControl('', [Validators.required]),
    endDate: new FormControl('', [Validators.required]),
    imageinput: new FormControl('', [Validators.required]),
    catId: new FormControl('', [Validators.required]),
  });
  constructor(public item:ItemService) { }

  ngOnInit(): void {
  }

  getvalue() {
    console.log(this.form.value);
    this.item.inseritem(this.form.value);
  }
  upload(file:any){
    let uploadfile= <File>file[0];
    let formdata= new FormData();
    console.log(file);
    formdata.append("file",uploadfile,uploadfile.name);
    this.item.uploadImage(formdata);
  }

}
