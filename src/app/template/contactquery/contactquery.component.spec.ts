import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactqueryComponent } from './contactquery.component';

describe('ContactqueryComponent', () => {
  let component: ContactqueryComponent;
  let fixture: ComponentFixture<ContactqueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactqueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactqueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
