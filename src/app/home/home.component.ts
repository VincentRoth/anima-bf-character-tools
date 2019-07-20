import { Component, OnInit } from '@angular/core';

interface IHomeItem {
  title: string;
  link: string;
  hasBackground: boolean;
  isBottomFixed?: boolean;
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
        title: 'Lancer de dé',
        link: '/dice-roll',
        hasBackground: false,
        imageUrl:
          'https://upload.wikimedia.org/wikipedia/commons/b/bb/Ten_sided_dice.png'
      },
      {
        title: 'Aide à la création',
        link: '/creation-help',
        hasBackground: true,
        imageUrl:
          'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/415e335e-b1cb-4849-9250-5b886f627634/d5pvbah-32fa8a76-9f3f-48f9-bc0d-156a88ad1939.jpg/v1/fill/w_774,h_1032,q_70,strp/anima__the_battle_continues_by_wen_m_d5pvbah-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTcwNyIsInBhdGgiOiJcL2ZcLzQxNWUzMzVlLWIxY2ItNDg0OS05MjUwLTViODg2ZjYyNzYzNFwvZDVwdmJhaC0zMmZhOGE3Ni05ZjNmLTQ4ZjktYmMwZC0xNTZhODhhZDE5MzkuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.eCdSoUugCBBCb07n40RCOoDMo3lUJHPgUYUal2-EXEs'
      },
      {
        title: 'Races',
        link: '/races',
        hasBackground: true,
        imageUrl:
          'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/415e335e-b1cb-4849-9250-5b886f627634/d1w0z1k-2b9ec48b-5b45-42c6-a704-72c4e4905886.jpg/v1/fill/w_856,h_934,q_70,strp/anima__ferris_by_wen_m_d1w0z1k-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTM0NCIsInBhdGgiOiJcL2ZcLzQxNWUzMzVlLWIxY2ItNDg0OS05MjUwLTViODg2ZjYyNzYzNFwvZDF3MHoxay0yYjllYzQ4Yi01YjQ1LTQyYzYtYTcwNC03MmM0ZTQ5MDU4ODYuanBnIiwid2lkdGgiOiI8PTEyMzIifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.0CA3htSz2kGWAK3FA1FpVTflAOFPRpaN7V7qiyIqPdI'
      },
      {
        title: 'Avantages',
        link: '/advantages',
        hasBackground: true,
        imageUrl:
          'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/415e335e-b1cb-4849-9250-5b886f627634/d5060zh-011bb54a-9f23-4ba2-bc25-d0c05f35511f.jpg/v1/fill/w_760,h_1052,q_70,strp/anima__anna_never_by_wen_m_d5060zh-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTMyOSIsInBhdGgiOiJcL2ZcLzQxNWUzMzVlLWIxY2ItNDg0OS05MjUwLTViODg2ZjYyNzYzNFwvZDUwNjB6aC0wMTFiYjU0YS05ZjIzLTRiYTItYmMyNS1kMGMwNWYzNTUxMWYuanBnIiwid2lkdGgiOiI8PTk2MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.zhDXdpEuRA2i7idYK6vxWt7Ns-TlEYwwjinyPr5xHL0'
      },
      {
        title: 'Carte de Gaïa',
        link: '/map',
        hasBackground: true,
        isBottomFixed: true,
        imageUrl: '/assets/images/menu/map.jpg'
      },
      {
        title: 'Tableaux',
        link: '/tables',
        hasBackground: true,
        imageUrl:
          'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/415e335e-b1cb-4849-9250-5b886f627634/dc0ge24-245d4239-45eb-4969-b71e-6c671924c85b.jpg/v1/fill/w_822,h_972,q_70,strp/anima__magnus_by_wen_m_dc0ge24-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTIxMSIsInBhdGgiOiJcL2ZcLzQxNWUzMzVlLWIxY2ItNDg0OS05MjUwLTViODg2ZjYyNzYzNFwvZGMwZ2UyNC0yNDVkNDIzOS00NWViLTQ5NjktYjcxZS02YzY3MTkyNGM4NWIuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.j6Hb3amqNHvrs3iJNp_sKYzcf9D7TS3Z2MdBH-GTkrA'
      }
    ];
  }

  getStyle(item: IHomeItem) {
    return {
      'background-image': item.hasBackground ? `url("${item.imageUrl}")` : '',
      'background-position': item.isBottomFixed ? 'bottom' : ''
    };
  }
}
