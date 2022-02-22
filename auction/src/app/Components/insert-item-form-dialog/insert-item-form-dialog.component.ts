import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ItemService } from 'src/app/item.service';

@Component({
  selector: 'app-insert-item-form-dialog',
  templateUrl: './insert-item-form-dialog.component.html',
  styleUrls: ['./insert-item-form-dialog.component.css']
})
export class InsertItemFormDialogComponent implements OnInit {
  
  imageName1:string='';
  form = new FormGroup({
    //<form></form>
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    startprice: new FormControl('', [Validators.required]),
    userid: new FormControl('', [Validators.required]),
    end_date: new FormControl('', [Validators.required]),
    imgpath:new FormControl('', [Validators.required]),
    catId: new FormControl('', [Validators.required]),
    // imageName:new FormControl('',[Validators.required])

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
    // this.imageName1=uploadfile.name;
    console.log(uploadfile.name);
  }

}
