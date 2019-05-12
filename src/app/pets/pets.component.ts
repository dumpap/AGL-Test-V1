import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-pets.component',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {

  private Person: any = [];
  userFilter: any = { type: 'Cat' };
  order = 'name';

  constructor(
    private readonly restApi: RestApiService,
    private readonly router: Router
  ) { }

  ngOnInit() {
    this.loadPersonWithPets();
  }

  loadPersonWithPets() {
    return this.restApi.getPersonWithPets().subscribe((data) => {
      this.Person = data;
    });
  }

}
