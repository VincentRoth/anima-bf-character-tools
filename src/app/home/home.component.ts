import { Component, OnInit } from '@angular/core';

interface IHomeItem {
  title: string;
  link: string;
  hasBackground: boolean;
  imageUrl: string;
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
        title: 'Lancer de dés',
        link: '/dice-roll',
        hasBackground: false,
        imageUrl:
          'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c7b8ca04-766d-42fc-b77f-e9c0c84dd24d/d3hjxbe-f8268f5c-28d5-421f-a7da-7361c999fd53.jpg/v1/fill/w_1038,h_770,q_70,strp/roleplaying_dice_by_svenart_d3hjxbe-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTUwIiwicGF0aCI6IlwvZlwvYzdiOGNhMDQtNzY2ZC00MmZjLWI3N2YtZTljMGM4NGRkMjRkXC9kM2hqeGJlLWY4MjY4ZjVjLTI4ZDUtNDIxZi1hN2RhLTczNjFjOTk5ZmQ1My5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.nxC7agoqQBIO4W8wvQAHvLqYRMLEw2ihJvcxC_QaFl0'
      },
      {
        title: 'Aide à la création',
        link: '/creation-help',
        hasBackground: true,
        imageUrl:
          'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/415e335e-b1cb-4849-9250-5b886f627634/d5pvbah-32fa8a76-9f3f-48f9-bc0d-156a88ad1939.jpg/v1/fill/w_774,h_1032,q_70,strp/anima__the_battle_continues_by_wen_m_d5pvbah-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTcwNyIsInBhdGgiOiJcL2ZcLzQxNWUzMzVlLWIxY2ItNDg0OS05MjUwLTViODg2ZjYyNzYzNFwvZDVwdmJhaC0zMmZhOGE3Ni05ZjNmLTQ4ZjktYmMwZC0xNTZhODhhZDE5MzkuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.eCdSoUugCBBCb07n40RCOoDMo3lUJHPgUYUal2-EXEs'
      },
      {
        title: 'Avantages',
        link: '/advantages',
        hasBackground: true,
        imageUrl:
          'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/415e335e-b1cb-4849-9250-5b886f627634/d5060zh-011bb54a-9f23-4ba2-bc25-d0c05f35511f.jpg/v1/fill/w_760,h_1052,q_70,strp/anima__anna_never_by_wen_m_d5060zh-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTMyOSIsInBhdGgiOiJcL2ZcLzQxNWUzMzVlLWIxY2ItNDg0OS05MjUwLTViODg2ZjYyNzYzNFwvZDUwNjB6aC0wMTFiYjU0YS05ZjIzLTRiYTItYmMyNS1kMGMwNWYzNTUxMWYuanBnIiwid2lkdGgiOiI8PTk2MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.zhDXdpEuRA2i7idYK6vxWt7Ns-TlEYwwjinyPr5xHL0'
      }
    ];
  }

  getStyle(item: IHomeItem) {
    return {
      'background-image': item.hasBackground ? `url("${item.imageUrl}")` : ''
    };
  }
}
