import { MsToMinutesPipe } from './ms-to-minutes.pipe';

describe('MsToMinutesPipe', () => {
  it('create an instance', () => {
    const pipe = new MsToMinutesPipe();
    expect(pipe).toBeTruthy();
  });
});
