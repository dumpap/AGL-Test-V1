import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetsComponent } from './pets.component';

import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

import { NgPipesModule } from 'ngx-pipes';
import { FilterPipeModule } from 'ngx-filter-pipe'; // <-- Import

describe('PetsComponent', () => {
  let component: PetsComponent;
  let fixture: ComponentFixture<PetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetsComponent ],  imports: [NgPipesModule, FilterPipeModule, HttpClientModule, RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h3 tag', () => {
    fixture = TestBed.createComponent(PetsComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain('Person gender with Pets');
  });

});
