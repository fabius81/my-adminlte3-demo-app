import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SspsComponent } from './ssps.component';

describe('SspsComponent', () => {
  let component: SspsComponent;
  let fixture: ComponentFixture<SspsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SspsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SspsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
