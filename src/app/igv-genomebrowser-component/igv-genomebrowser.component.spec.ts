import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IgvGenomebrowserComponentComponent } from './igv-genomebrowser-component.component';

describe('IgvGenomebrowserComponentComponent', () => {
  let component: IgvGenomebrowserComponentComponent;
  let fixture: ComponentFixture<IgvGenomebrowserComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IgvGenomebrowserComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IgvGenomebrowserComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
