import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ReferenceTableContainer } from '../models/';
import { ReferenceTableService } from './reference-table.service';

describe('ReferenceTableService', () => {
  let service: ReferenceTableService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ReferenceTableService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should request only once the tables data', () => {
    service.get().subscribe({ next: (data) => expect(data['coreExxet'].length).toEqual(2) });

    service.get().subscribe({ next: (data) => expect(data['coreExxet'].length).toEqual(2) });

    const req = httpMock.expectOne('./assets/data/tables.json');
    expect(req.request.method).toEqual('GET');
    req.flush({
      coreExxet: [
        {
          id: 1,
          title: 'tab1',
          headers: [],
          rows: []
        },
        {
          id: 2,
          title: 'tab1',
          headers: [],
          rows: []
        }
      ],
      kitMj: [],
      dominusExxet: [],
      arcanaExxet: [],
      prometheumExxet: [],
      gaia1: [],
      gaia2: [],
      cqmpn: []
    } as ReferenceTableContainer);

    httpMock.verify();
  });

  it('should return requested reference', () => {
    service.getByReference('coreExxet#1').subscribe({ next: (table) => expect(table.id).toEqual(1) });

    service.getByReference('coreExxet#2').subscribe({ next: (table) => expect(table.id).toEqual(2) });

    const req = httpMock.expectOne('./assets/data/tables.json');
    expect(req.request.method).toEqual('GET');
    req.flush({
      coreExxet: [
        {
          id: 1,
          title: 'tab1',
          headers: [],
          rows: []
        },
        {
          id: 2,
          title: 'tab1',
          headers: [],
          rows: []
        }
      ],
      kitMj: [],
      dominusExxet: [],
      arcanaExxet: [],
      prometheumExxet: [],
      gaia1: [],
      gaia2: [],
      cqmpn: []
    } as ReferenceTableContainer);

    httpMock.verify();
  });

  it('should return difficulty levels', () => {
    service.getDifficultyLevels().subscribe({
      next: (difficultyLevels) => {
        expect(difficultyLevels.length).toEqual(10);
        expect(difficultyLevels[0].name).toEqual('Routinière');
        expect(difficultyLevels[0].value).toEqual(20);
        expect(difficultyLevels[1].name).toEqual('Facile');
        expect(difficultyLevels[1].value).toEqual(40);
        expect(difficultyLevels[2].name).toEqual('Moyenne');
        expect(difficultyLevels[2].value).toEqual(80);
        expect(difficultyLevels[3].name).toEqual('Difficile');
        expect(difficultyLevels[3].value).toEqual(120);
        expect(difficultyLevels[4].name).toEqual('Très Difficile');
        expect(difficultyLevels[4].value).toEqual(140);
        expect(difficultyLevels[5].name).toEqual('Absurde');
        expect(difficultyLevels[5].value).toEqual(180);
        expect(difficultyLevels[6].name).toEqual('Quasiment Impossible');
        expect(difficultyLevels[6].value).toEqual(240);
        expect(difficultyLevels[7].name).toEqual('Impossible');
        expect(difficultyLevels[7].value).toEqual(280);
        expect(difficultyLevels[8].name).toEqual('Surhumaine');
        expect(difficultyLevels[8].value).toEqual(320);
        expect(difficultyLevels[9].name).toEqual('Zen');
        expect(difficultyLevels[9].value).toEqual(440);
      }
    });

    const req = httpMock.expectOne('./assets/data/tables.json');
    expect(req.request.method).toEqual('GET');
    req.flush({
      coreExxet: [
        {
          id: 7,
          title: 'Difficultés',
          headers: ['Difficulté', 'Requis', 'Explication'],
          rows: [
            [
              'Routinière (ROUT)',
              20,
              "Ce sont des actions normales, que nous réalisons tous sans y penser ni avoir à les apprendre, comme descendre en sautant quelques marches, ou entendre une explosion. En général, le Meneur de Jeu ne demandera jamais à un joueur d'effectuer des tests de compétence à cette difficulté, sauf en des circonstances très précises."
            ],
            [
              'Facile (FAC)',
              40,
              "Les actions faciles sont des choses que nous sommes tous habitués à réaliser, comme ouvrir une serrure rouillée sans problème ou se souvenir d'un air de musique. Même si on ne connaît rien au sujet, on y parvient finalement après une ou deux tentatives ratées. Le problème, c'est si on doit réussir du premier coup, et que l'on doit ouvrir cette serrure rouillée avant que quelqu'un n'arrive..."
            ],
            [
              'Moyenne (MOY)',
              80,
              "Il s'agit d'un niveau de difficulté supérieur. La simple chance ne permet pas de réalisé ce genrce de choses. Seule une personne détenant des connaissances en la matière pourra y parvenir sans grande difficulté. Par exemple : forcer un simple verrou ou soigner une petite grippe."
            ],
            [
              'Difficile (DIF)',
              120,
              "Ces actions s'avèrent très problématiques pour une personne normale. Elles nécessitent une grande compétence ou une chance insolente pour être réalisées. Il s'agit d'actions complexes par nature, comme escalader une paroi escarpée sans aide ou réaliser des tours de cirque."
            ],
            [
              'Très Difficile (TDIF)',
              140,
              "Pour réaliser des actions très difficiles, il faut disposer d'une excellente compétence. C'est la difficulté limite que puissent atteindre les personnes normales. Seuls les meilleurs experts peuvent les effectuer sans problème, ébahissant alors tous les spectateurs. Quelques exemples : marcher sur une corde lâche ou réaliser un saut périlleux mortel sur un trapèze."
            ],
            [
              'Absurde (ABS)',
              180,
              "Comme son nom l'indique, ce sont des choses bien au-delà des possibilités d'un être humain normal. Seuls les plus grands champions ou les surdoués peuvent arriver à les réaliser fréquemment, bien qu'avec de réels efforts. Par exemple, effectuer des acrobaties de niveau olympique sur une perche ou des opérations mathématiques complexes sur un boulier."
            ],
            [
              'Quasiment Impossible (QUIMP)',
              240,
              "Même les meilleurs rencontrent de graves difficultés à effectuer des actions quasiment impossibles et échouent la plupart du temps. Seul un grand champion ou un héro de film parvient à les réussir au moment critique, comme traverser un pont qui s'effondre en sautant sur les pierres en train de tomber et finir par un incroyable saut pour arriver enfin en sécurité."
            ],
            [
              'Impossible (IMP)',
              280,
              "Réaliser une action impossible est une chose que personne n'imaginerait pouvoir faire. Ce sont des actes à la limite de ce que nous qualifions de réalité mais qui, pour autant incroyable ou miraculeux qu'ils paraissent, restent physiquement possibles. Un expert connaît alors le moment le plus fabuleux de sa carrière quand il accomplit une action impossible comme le fait de courir le cent mètres en moins de 8 secondes, revêtu d'une cotte de mailles, ou d'esquiver une balle, non par chance mais en la voyant venir et en calculant la trajectoire."
            ],
            [
              'Surhumaine (SURH)',
              320,
              "Il s'agit simplement de quelque chose que nous ne pouvons pas réaliser dans notre monde, dans la réalité. D'une certaine façon, ces actions contredisent la logique, par exemple soulever un camion à la force des bras, sauter jusqu'au troisième étage d'un seul coup ou courir entre des balles à haute vélocité en les évitant. Obtenir un résultat final atteignant cette difficulté ne suffit pas pour réussir ce genre de prouesse. Un personnage doit posséder le pouvoir Surhumanité pour atteindre cette difficulté."
            ],
            [
              'Zen (ZEN)',
              440,
              "Ces actes de par leur nature, brisent totalement les règles de ce que nous appelons réalité, comme le fait de courir plus de mille mètres en moins d'une seconde, ou de sauter en hauteur sur la même distance sans préparation. Comme pour les actions surhumaines, le simple fait d'atteindre ce niveau de difficulté ne suffit pas à accomplir des actions Zen. Pour cela, il faudra que le personnage possède la capacité suranturelle de les accomplir."
            ]
          ]
        }
      ],
      kitMj: [],
      dominusExxet: [],
      arcanaExxet: [],
      prometheumExxet: [],
      gaia1: [],
      gaia2: [],
      cqmpn: []
    } as ReferenceTableContainer);

    httpMock.verify();
  });
});
