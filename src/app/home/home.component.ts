import { Component, OnInit } from '@angular/core';

interface IHomeItem {
  title: string;
  link: string;
  backgroundImageUrl: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  items: IHomeItem[];

  constructor() {}

  // tslint:disable: max-line-length
  ngOnInit() {
    this.items = [
      {
        title: 'Avantages',
        link: '/advantages',
        backgroundImageUrl:
          'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/415e335e-b1cb-4849-9250-5b886f627634/d5060zh-011bb54a-9f23-4ba2-bc25-d0c05f35511f.jpg/v1/fill/w_760,h_1052,q_70,strp/anima__anna_never_by_wen_m_d5060zh-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTMyOSIsInBhdGgiOiJcL2ZcLzQxNWUzMzVlLWIxY2ItNDg0OS05MjUwLTViODg2ZjYyNzYzNFwvZDUwNjB6aC0wMTFiYjU0YS05ZjIzLTRiYTItYmMyNS1kMGMwNWYzNTUxMWYuanBnIiwid2lkdGgiOiI8PTk2MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.zhDXdpEuRA2i7idYK6vxWt7Ns-TlEYwwjinyPr5xHL0'
      }
    ];
  }

  getStyle(item: IHomeItem) {
    return { 'background-image': `url("${item.backgroundImageUrl}")` };
  }
}
