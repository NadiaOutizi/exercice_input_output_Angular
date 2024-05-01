import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {

 @Input() test = ''

 textInput : string = "test test test"

 ngOnInit() {
   console.log(this.test);
   
 }

 testFunction() {
   console.log(this.textInput);
   
   
 }
}
