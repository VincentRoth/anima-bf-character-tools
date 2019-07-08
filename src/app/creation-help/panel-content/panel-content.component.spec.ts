import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelContentComponent } from './panel-content.component';
import { ContentTitleComponent } from '../content-title/content-title.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EContentType } from '../content.model';

describe('PanelContentComponent', () => {
  let component: PanelContentComponent;
  let fixture: ComponentFixture<PanelContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PanelContentComponent, ContentTitleComponent],
      imports: [HttpClientTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelContentComponent);
    component = fixture.componentInstance;
    component.content = {
      type: EContentType.PARAGRAPH
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
