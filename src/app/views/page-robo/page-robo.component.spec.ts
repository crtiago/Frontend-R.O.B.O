import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRoboComponent } from './page-robo.component';

describe('PageRoboComponent', () => {
  let component: PageRoboComponent;
  let fixture: ComponentFixture<PageRoboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageRoboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageRoboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
