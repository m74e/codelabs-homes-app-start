import { Component } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { RouterModule } from "@angular/router";
@Component({
  standalone: true,
  selector: "app-root",
  template: `<main>
    <header class="header">
      <img class="brand-logo" src="/assets/logo.svg" alt="brand-logo" />
    </header>
    <section class="content">
<router-outlet></router-outlet>
  </section>
      <section class="results">   
      <!-- <app-housing-location></app-housing-location> -->
    </section>
  </main>`,
  styleUrls: ["./app.component.css"],
  imports: [HomeComponen, RouterModule],
})
export class AppComponent {
  title = "homes";
}
