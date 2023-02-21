import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'handle-excel-file',
  templateUrl: './handle-excel-file.component.html',
  styleUrls: ['./handle-excel-file.component.css']
})
export class HandleExcelFileComponent implements OnInit {

  constructor() { }

  file: File | undefined

  ngOnInit(): void {
  }

  onSaveData() {
    axios.post('https://localhost:7092/api/UserFile', this.file)
  }

  onChangeFile(e: any) {
    const target: DataTransfer = <DataTransfer>(e.target);
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');
    this.file=e.target;
  }
}
