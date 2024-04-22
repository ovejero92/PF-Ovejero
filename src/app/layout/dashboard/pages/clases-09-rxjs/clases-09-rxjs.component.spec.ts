import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Clases09RxjsComponent } from './clases-09-rxjs.component';

describe('Clases09RxjsComponent', () => {
  let component: Clases09RxjsComponent;
  let fixture: ComponentFixture<Clases09RxjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Clases09RxjsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Clases09RxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
