import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DosumentDetailComponent } from './dosument-detail.component';

describe('DosumentDetailComponent', () => {
  let component: DosumentDetailComponent;
  let fixture: ComponentFixture<DosumentDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DosumentDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DosumentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
