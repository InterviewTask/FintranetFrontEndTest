import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class StepperFormHandlerService {
  private index = 0;
  private TabLimit = 3;
  private activeIndex$:BehaviorSubject<number>= new BehaviorSubject(this.index);
  constructor() { }
  next(){
    if(this.index < this.TabLimit)
    this.activeIndex$.next(++this.index);
  }
  pevious(){
    if(this.index>0)
    this.activeIndex$.next(--this.index);
  }
  get activeIndex() {
    return this.activeIndex$;
  }
}
