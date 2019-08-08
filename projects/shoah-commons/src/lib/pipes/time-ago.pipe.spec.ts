import { TimeAgoPipe } from './time-ago.pipe';

describe('TimeAgoPipe', () => {
  let pipe: TimeAgoPipe;

  beforeEach(() => {
    pipe = new TimeAgoPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  describe('Pipe Inputs', ()=>{
    it('should return time ago value', () => {
      const actual = pipe.transform('2018-10-08T16:58:47Z');
      expect(actual).toEqual('10 months ago');
    })

    it('should return input value', () => {
      const actual = pipe.transform('');
      expect(actual).toEqual('');
    })
  })

});
