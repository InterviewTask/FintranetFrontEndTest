import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { IUser } from '../../models';
import { UsersService } from '../../services';

@Component({
  selector: 'app-step-table',
  templateUrl: './step-table.component.html',
  styleUrls: ['./step-table.component.scss']
})
export class StepTableComponent implements OnInit, OnDestroy {
  @Input() form?: FormGroup
  subscription: Subscription[]=[];
  selectedUser!: IUser;
  users: IUser[] = [];
  constructor(
    private usersService: UsersService
  ) {}
  ngOnDestroy(): void {
    this.subscription.forEach(sub => sub.unsubscribe())
  }

  ngOnInit(): void {
    this.SetSelectedProduct();
    this.subscription.push(this.getUsers());
  }
  getUsers() {
    return this.usersService.getUsers().subscribe(
      (data: IUser[]) => {
        this.users = data;
      }
    )
  }

  SetSelectedProduct() {
    if (this.form?.get('user')?.value) {
      this.selectedUser = this.form?.get('user')?.value;
    }
  }
  onRowSelect(event: any) {
    this.form?.get('user')?.setValue(event.data);

  }
  onRowUnselect(event: any) {
    this.form?.get('user')?.setValue(null);
  }


}
