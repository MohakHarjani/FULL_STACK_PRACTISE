import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenContainerComponent } from './template-driven-container.component';

describe('TemplateDrivenContainerComponent', () => {
  let component: TemplateDrivenContainerComponent;
  let fixture: ComponentFixture<TemplateDrivenContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateDrivenContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemplateDrivenContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
