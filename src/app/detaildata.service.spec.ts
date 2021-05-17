import { TestBed } from '@angular/core/testing';

import { DetaildataService } from './detaildata.service';

describe('DetaildataService', () => {
  let service: DetaildataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetaildataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
