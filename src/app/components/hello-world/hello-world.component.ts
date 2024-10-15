import { Component } from '@angular/core';


@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent {
  isLoading: boolean = true;

  caricamento(): void {
    setTimeout(() => {
      this.isLoading = false;  
    }, 7000);  
  }
ngOnInit(): void{
  this.caricamento();
}
}