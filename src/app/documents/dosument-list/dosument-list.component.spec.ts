import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DosumentListComponent } from './dosument-list.component';

describe('DosumentListComponent', () => {
  let component: DosumentListComponent;
  let fixture: ComponentFixture<DosumentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DosumentListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DosumentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
