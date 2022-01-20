import { Component } from '@angular/core';
import { Fact } from 'src/models/fact';
import { DogService } from './dog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UnitTests';
  facts: Fact[] = [];
  dataLoaded = false;

  constructor(private dogService: DogService) {
    this.dogService.getFacts().subscribe(f => {
      this.facts = f
      this.dataLoaded = true;
    });
  }

  ngOnInit() {
    let t = this.dogService.getFacts();

    console.log("aaaaaaaaaaaaaaaa")

    t.subscribe(data => {
      console.log("bbbbbbbbbbbbb");
    })

    console.log("zzzzzzzzzzzzzzzz")
  }
}
