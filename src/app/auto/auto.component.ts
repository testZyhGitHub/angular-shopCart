import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';



@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.css']
})


export class AutoComponent  {
  myControl = new FormControl();
  options: string[] = ['羊肉泡馍', '酸辣凉皮', '螺丝粉']; 
}
