import { FunctionModel } from './../../models/function';
import { first } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FunctionService } from './../../services/function.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DeleteFunctionComponent } from '../delete-function/delete-function.component';

@Component({
  selector: 'app-list-function',
  templateUrl: './list-function.component.html',
  styleUrls: ['./list-function.component.css']
})
export class ListFunctionComponent implements OnInit {

  functions: FunctionModel[] = [];
  searchText = '';
  booleanValue = false;
  p = 0;

  constructor(
    private functionservice: FunctionService,
    protected modalService: NgbModal,
    private router: Router
  ) { }

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.functionservice.getFunctions()
      .pipe(first())
      .subscribe(functions => {
        this.functions = functions;
      });
  }

  addFunction() {
    this.router.navigate(['/function-add']);
  }

  deleteFunction(functionModel: FunctionModel) {
    const modelRef = this.modalService.open(DeleteFunctionComponent);
    modelRef.componentInstance.functionModel = functionModel;
  }

  desactivate(id: number) {
    this.functionservice.desactivate(id).pipe(first()).subscribe();
    location.reload();
  }

  activate(id: number) {
    this.functionservice.Activate(id).pipe(first()).subscribe();
    location.reload();
  }

  sortFunction(colName, valBoolean) {
    if (valBoolean === true) {
      this.functions.sort((a, b) => a[colName].toLowerCase() < b[colName].toLowerCase()
        ? 1 : a[colName].toLowerCase() > b[colName].toLowerCase() ? -1 : 0);
      this.booleanValue = !this.booleanValue;
    } else {
      this.functions.sort((a, b) => a[colName].toLowerCase() > b[colName].toLowerCase()
        ? 1 : a[colName].toLowerCase() < b[colName].toLowerCase() ? -1 : 0);
      this.booleanValue = !this.booleanValue;
    }
  }

}
