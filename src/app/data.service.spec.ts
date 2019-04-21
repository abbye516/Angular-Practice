//Services in Angular 7 allow you to define code that's accessible and reusable throughout multiple components. A common use case for services is when you need to communicate with a backend of some sort to send and receive data.
//defininf properties and methods in a central location to be able to access them from differnt components 

import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';

describe('DataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service).toBeTruthy();
  });
});
