import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTableComponentComponent } from './my-table-component.component';

describe('MyTableComponentComponent', () => {
  let component: MyTableComponentComponent;
  let fixture: ComponentFixture<MyTableComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTableComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTableComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
