import { GraficosModule } from './graficos.module';

describe('GraficosModule', () => {
  let graficosModule: GraficosModule;

  beforeEach(() => {
    graficosModule = new GraficosModule();
  });

  it('should create an instance', () => {
    expect(graficosModule).toBeTruthy();
  });
});
