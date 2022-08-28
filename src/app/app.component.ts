import { Component, OnInit } from '@angular/core';

import { environment } from 'src/environments/environment';

import { AnalyticsService } from './shared/analytics/analytics.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  version = environment.version;

  constructor(private analyticsService: AnalyticsService) {}

  ngOnInit(): void {
    this.analyticsService.send({ kind: 'app-launch' }).subscribe();
  }
}
