import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotifyPosterComponent } from './spotify-poster.component';

describe('SpotifyPosterComponent', () => {
  let component: SpotifyPosterComponent;
  let fixture: ComponentFixture<SpotifyPosterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotifyPosterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotifyPosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
