import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  private displaySpinnerEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

constructor() { }

getEventEmitter(): EventEmitter<boolean> {
  return this.displaySpinnerEvent;
}

emitEvent(state: boolean) {
  this.displaySpinnerEvent.emit(state);
}

}
