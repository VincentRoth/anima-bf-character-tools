import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppMaterialModule } from 'src/app/app-material.module';
import { EContentType } from 'src/app/shared/models';
import { ContentTitleComponent } from 'src/app/shared/panel/content-title/content-title.component';
import { TableComponent } from 'src/app/shared/table/table.component';
import { PanelContentComponent } from './panel-content.component';

describe('PanelContentComponent', () => {
  let component: PanelContentComponent;
  let fixture: ComponentFixture<PanelContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PanelContentComponent,
        ContentTitleComponent,
        TableComponent
      ],
      imports: [HttpClientTestingModule, RouterTestingModule, AppMaterialModule]
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
