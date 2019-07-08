import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationHelpComponent } from './creation-help.component';
import { AppMaterialModule } from '../app-material.module';
import { PanelContentComponent } from './panel-content/panel-content.component';
import { ContentTitleComponent } from './content-title/content-title.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CreationHelpComponent', () => {
  let component: CreationHelpComponent;
  let fixture: ComponentFixture<CreationHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CreationHelpComponent,
        ContentTitleComponent,
        PanelContentComponent
      ],
      imports: [AppMaterialModule, HttpClientTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
