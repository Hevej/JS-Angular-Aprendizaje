import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mi Tienda';
  name = 'Luis';
  btnDisabled = true;
  person = {
    name : 'Felipe',
    edad : 27
  }

  toggleButton(){
    this.btnDisabled = !this.btnDisabled;
  }

  ageIncrement(){
    this.person.edad += 1;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }
}
