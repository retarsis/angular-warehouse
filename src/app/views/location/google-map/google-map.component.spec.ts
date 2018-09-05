import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import { GoogleMapComponent } from './google-map.component';
import { MapService } from '@location/shared/map.service';

describe('GoogleMapComponent', () => {
  let component: GoogleMapComponent;
  let fixture: ComponentFixture<GoogleMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
          declarations: [GoogleMapComponent],
          providers: [MapService]
        })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleMapComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});