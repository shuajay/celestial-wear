import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/components/header/header.component";
import { Button } from "primeng/button";

@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    Button
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {

}
