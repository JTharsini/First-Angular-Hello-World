import { Injectable } from '@angular/core';

// @Injectable is a decorator (annotation) to tell Angular
// any other dependencies like LogService can be
// added to this constructor
@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { }
}
