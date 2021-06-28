import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-well',
  templateUrl: './well.component.html',
  styleUrls: ['./well.component.scss']
})
export class WellComponent implements OnInit, OnChanges {
  wellForm: FormGroup;
  type: any = ['Type1', 'Type2'];
  @Input() wellSourceKey: any = '';
  @Output() sendWellDetails = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    this.wellForm = new FormGroup({
      name: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
      sourceKey: new FormControl('', Validators.required),
    });
  }


  fnSubmitForm(): any {
    if (this.wellForm.valid) {
      this.sendWellDetails.emit(this.wellForm.value);
      this.wellForm.reset();
    }
  }

  ngOnChanges(): any {
    if (this.wellSourceKey) {
      this.wellForm.controls.sourceKey.setValue(this.wellSourceKey);
    }
  }
}
