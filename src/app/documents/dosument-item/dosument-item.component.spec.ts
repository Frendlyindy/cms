import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DosumentItemComponent } from './dosument-item.component';

describe('DosumentItemComponent', () => {
  let component: DosumentItemComponent;
  let fixture: ComponentFixture<DosumentItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DosumentItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DosumentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
