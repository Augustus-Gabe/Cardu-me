import { FerramentasModule } from './ferramentas.module';

describe('FerramentasModule', () => {
  let ferramentasModule: FerramentasModule;

  beforeEach(() => {
    ferramentasModule = new FerramentasModule();
  });

  it('should create an instance', () => {
    expect(ferramentasModule).toBeTruthy();
  });
});
