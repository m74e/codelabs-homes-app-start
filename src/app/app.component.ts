import { Component } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { HousingLocationComponent } from "./housing-location/housing-location.component";
@Component({
  standalone: true,
  selector: "app-root",
  template: `<main>
    <header class="header">
      <img class="brand-logo" src="/assets/logo.svg" alt="brand-logo" />
    </header>
    <section class="content">
      <app-home></app-home>
      </section>
      <section class="results">   
      <app-housing-location></app-housing-location>
    </section>
  </main>`,
  styleUrls: ["./app.component.css"],
  imports: [HomeComponent,HousingLocationComponent],
})
export class AppComponent {
  title = "homes";
}
