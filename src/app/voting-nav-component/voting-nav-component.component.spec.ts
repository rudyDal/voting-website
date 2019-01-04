import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotingNavComponent } from './voting-nav-component.component';

describe('VotingNavComponentComponent', () => {
  let component: VotingNavComponent;
  let fixture: ComponentFixture<VotingNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotingNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotingNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
