import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  itemForm: FormGroup;
  items: {name: string, checked: boolean}[];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.items = [];
    this.itemForm = this.formBuilder.group({
      name: ['', Validators.required],
    });
  }

  addItem(item: {name: string, checked: boolean}) {
    item.checked = false;
    this.items.push(item);
    this.itemForm.reset();
  }
}
