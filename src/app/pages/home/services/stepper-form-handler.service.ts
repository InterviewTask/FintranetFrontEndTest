import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class StepperFormHandlerService {
  private index = 0;
  private activeIndex$:BehaviorSubject<number>= new BehaviorSubject(this.index);
  constructor() { }
  next(){
    this.activeIndex$.next(++this.index);
  }
  pevious(){
    this.activeIndex$.next(--this.index);
  }
  get activeIndex() :number{
    return this.activeIndex$.value;
  }
}
