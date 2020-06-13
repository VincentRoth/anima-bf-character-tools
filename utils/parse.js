const fs = require('fs');

const jsonFile = './parse.json';
const errorFile = './parse-error.json';

function saveJson(jsonData) {
  fs.writeFileSync(jsonFile, JSON.stringify(jsonData, null, 2));
}

function writeError(error) {
  fs.writeFileSync(errorFile, JSON.stringify(error, null, 2));
}

const spells = JSON.parse(
  JSON.stringify([
    "Bouclier Salvateur   Niveau : 4	Action : Passive	Type : Défense Effet : Crée une barrière protectrice qui abrite de tout type d'attaque. Dans le cas d'une utilisation pour protéger plusieurs individus contre une attaque de zone, le sort permet de protéger autant de cibles qu'il est indiqué pour le Degré  du sort sans souffrir pour autant de dégâts supplémentaires ni appliquer de malus à la compétence défensive du lanceur.   Degré  Initial Intermédiaire Avancé Arcane Zéon 50 100 160 240 Int. Req. 6 8 10 14 Initial : Le bouclier a 300 Points de Vie / Il peut protéger jusqu'à deux personnes sans aucun malus. Intermédiaire : Le bouclier a 900 Points de Vie / Il peut protéger jusqu'à cinq personnes sans aucun malus. Avancé : Le bouclier a 1 500 Points de Vie / Il peut protéger jusqu'à huit personnes sans aucun malus. Arcane : Le bouclier a 3 000 Points de Vie / Il peut protéger jusqu'à douze personnes sans aucun malus. Maintien : 5 / 15 / 20 / 25",
    "Équilibre Intérieur Niveau : 14	Action : Passive	Type : Effet Effet : Le sorcier ou la cible désignée par celui-ci atteint un niveau de paix intérieure qui l'immunise contre tout effet qui peut déséquilibrer son état d'esprit.   Degré  Initial Intermédiaire Avancé Arcane Zéon 120 180 240 300 Int. Req. 6 9 12 15 Initial : Le personnage est immunisé contre les états psychologiques négatifs. Intermédiaire : Comme pour le Degré  Initial, mais le personnage obtient en outre un +40 à ses résistances contre les effets déséquilibrants. Avancé : Comme pour le Degré  Intermédiaire, mais le bonus applicable est de +80. Arcane : Le personnage ne peut être affecté par aucun effet qui altère négativement ou de façon déséquilibrante sa conduite. Maintien : 15 / 20 / 25 / 30 Quotidien",
    "Défenseur Niveau : 24	Action : Active	Type : Effet Effet : Accorde un bonus à la compétence de défense d'un individu qui utilise une manœuvre de Défense totale. Affecte autant de personnes que le détermine le lanceur, tant que la somme de leurs présences ne dépasse pas ce qui est indiqué dans le Degré  du sort   Degré  Initial Intermédiaire Avancé Arcane Zéon 60 100 140 200 Int. Req. 6 8 10 12 Initial : +20 à la compétence de défense / Présence maximale affectable de 60. Intermédiaire : +20 à la compétence de défense / Présence maximale affectable de 100. Avancé : +30 à la compétence de défense / Présence maximale affectable de 150. Arcane : +40 à la compétence de défense / Présence maximale affectable de 250. Maintien : 10 / 10 / 15 / 20",
    "Détecter l'Harmonie  Niveau : 34	Action : Active	Type : Détection Effet : Le sorcier détecte les personnes à l'intérieur du rayon du sort qui ont des sentiments pacifiques et ceux qui en ont des violents, si ils ne dépassent pas la RMys déterminée par le Degré  du sortilège.  Degré  Initial Intermédiaire Avancé Arcane Zéon 80 100 120 140 Int. Req. 8 10 12 14 Initial : 10 m de rayon / 100 RMys. Intermédiaire : 25 m de rayon / 120 RMys. Avancé : 50 m de rayon / 140 RMys. Arcane : 100 m de rayon / 160 RMys. Maintien : 10 / 10 / 15 / 15",
    "Havre de Paix  Niveau : 44	Action : Active	Type : Automatique Effet : Ce sort génère une zone capable de faire perdre tout instinct agressif. Quiconque pénètre à l'intérieur doit réussir automatiquement un test de RMys contre la difficulté déterminée par le Degré  du sort sous peine de perdre toute attitude violente. Une personne affectée par ce sort ne peut plus retenter le test, sauf si elle ressent quelque chose qui pourrait lui rendre son comportement agressif. Quelqu'un qui a réussi le test n'est plus affecté par les effets de Havre de Paix tant qu'il ne sort pas de sa zone d'influence. La zone reste statique, là où elle a été lancée.   Degré  Initial Intermédiaire Avancé Arcane Zéon 160 220 280 300 Int. Req. 8 10 12 14 Initial : 10 m de rayon / 100 RMys.  Intermédiaire : 25 m de rayon / 120 RMys. Avancé : 50 m de rayon / 140 RMys. Arcane : 100 m de rayon / 160 RMys. Maintien : 20 / 25 / 30 / 30 Quotidien",
    "Signe de Paix  Niveau : 54	Action : Passive	Type : Automatique Effet : Le sorcier annule une action offensive dirigée contre lui. Pour être affecté il faut être à l'origine d'une attaque dont la cible est le lanceur (y compris s'il y a d'autres individus également visés par l'attaque). Pour éviter ces effets, il faut réussir une RMys contre une difficulté indiquée par le Degré  du sort. Une même attaque ne peut être affectée qu'une fois par un sort de Signe de Paix.   Degré  Initial Intermédiaire Avancé Arcane Zéon 100 180 260 340 Int. Req. 8 10 12 14 Initial : 120 RMys. Intermédiaire : 160 RMys. Avancé : 200 RMys Arcane : 240 RMys. Maintien : Non",
    'Défense Absolue  Niveau : 64	Action : Active	Type : Effet Effet : Quand le sorcier ne fait aucune action offensive pendant un round, il peut ajouter un bonus à sa Projection magique pour se défendre.  Degré  Initial Intermédiaire Avancé Arcane Zéon 50 80 110 140 Int. R. 6 9 12 15  Initial : +20 à la Projection magique en défense. Intermédiaire : +30 à la Projection magique en défense. Avancé : +40 à la Projection magique en défense. Arcane : +50 à la Projection magique en défense. Maintien : 10 / 10 / 15 / 15 Type de sort : Effet  Degré  Initial Intermédiaire Avancé Arcane Zéon 50 80 110 140 Int. Req. 6 9 12 15 Initial : +20 à la Projection magique en défense Intermédiaire : +30 à la Projection magique en défense. Avancé : +40 à la Projection magique en défense. Arcane : +50 à la Projection magique en défense. Maintien : 10 / 10 / 15 / 15',
    "Ailes du Salut  Niveau : 74	Action : Passive	Type : Défense Effet : Crée une barrière protectrice qui protège de tout type d'attaque. Le sort permet de protéger tous les individus à l'intérieur du rayon d'action qui est indiqué pour le Degré  du sort sans souffrir pour autant de dégâts supplémentaires ni appliquer de malus à la compétence défensive du lanceur. Degré  Initial Intermédiaire Avancé Arcane Zéon 150 250 350 450 Int. R. 9 11 13 15 Initial : Le bouclier a 500 Points de Vie / 5 m de rayon. Intermédiaire : Le bouclier a 1 200 Points de Vie / 15 m de rayon. Avancé : Le bouclier a 2 500 Points de Vie / 25 m de rayon. Arcane : Le bouclier a S 000 Points de Vie / 50 m de rayon. Maintien : 15 / 25 / 35 / 45 Type de sort : Défense  Degré  Initial Intermédiaire Avancé Arcane Zéon 150 250 350 450 Int. Req. 9 11 13 15 Initial : Le bouclier a 1 200 Points de Vie / 15 m de rayon. Intermédiaire : Le bouclier a 1 200 Points de Vie / 15 m de rayon. Avancé : Le bouclier a 2 500 Points de Vie / 25 m de rayon. Arcane : Le bouclier a 5 000 Points de Vie / 50 m de rayon. Maintien : 15 / 25 / 35 / 45",
    "Paix Absolue  Niveau : 84	Action : Active	Type : Animique Effet : La cible de ce sort est imprégnée d'une énergie de la paix la plus pure, qui l'empêchera d'amorcer des actes violents de quelque sorte que ce soit. Quiconque échouant à la RMys déterminée par le Degré  du sortilège ne peut plus faire d'actions offensives contre personne de façon consciente. Son essence violente disparaissant complètement, il n'est alors plus nécessaire de maintenir le sort.   Degré  Initial Intermédiaire Avancé Arcane Zéon 120 180 240 300 Int. Req. 9 11 13 15 Initial : 120 RMys.  Intermédiaire : 140 RMys. Avancé : 160 RMys. Arcane : 180 RMys. Maintien : Non",
    "Pax In Terrax  Niveau : 94	Action : Active	Type : Automatique Effet : Lancer ce sort crée une zone de non-violence absolue, dans laquelle il ne peut y avoir aucun conflit ou guerre. Tous les individus qui entrent dans cette zone doivent réussir automatiquement un test de RMys contre la valeur indiquée dans le Degré  du sort ou abandonner toute idée de violence ou de confrontation, et être incapables de faire des actions violentes. Une personne qui échoue au test de Résistance ne peut plus le refaire tant qu'elle est dans la zone d'action du sort, alors que celles qui le réussissent doivent le refaire à chaque fois qu'elles tentent de réaliser une action violente et qu'elles sont toujours dans la zone d'influence du sortilège.  Degré  Initial Intermédiaire Avancé Arcane Zéon 350 600 1000 1600 Int. Req. 8 10 12 14 Initial : 1 km de rayon / 120 RMys. Intermédiaire : 5 km de rayon / 140 RMys. Avancé : 15 km de rayon / 160 RMys. Arcane : 50 km de rayon / 180 RMys. Maintien : 35 / 60 / 100 / 160 Quotidien"
  ])
);

const clearAndTrimText = function (text) {
  let trimedText = text.trim().replace(/\t|	| /g, ' ');
  while (/  /.test(trimedText)) {
    trimedText = trimedText.replace(/  /g, ' ');
  }
  return trimedText;
};

let jsSpells = spells
  .filter((rawText) => rawText)
  .map((rawText) => {
    let text = clearAndTrimText(rawText);

    const spell = {};
    try {
      spell.name = /^(.+) Niveau.?:/.exec(text)[1];
      console.log(spell.name);

      const level = /Niveau.?: ((\d+-)?\d+) Action.?:/.exec(text)[1];
      if (level.includes('-')) {
        spell.level = parseInt(level.split('-')[1]);
      } else {
        spell.level = parseInt(level);
      }

      spell.action = /Action.?: (.+) Type.?:/.exec(text)[1];
      spell.types = /Type.?: (.+) Effet.?:/.exec(text)[1].replace(',', '').split(' ');
      spell.effect = /Effet.?: (.+) +?Degré Initial Inter/.exec(text)[1];

      const zeonPerCastingLevel = /Arcane Zéon (.+) Int. Req./
        .exec(text)[1]
        .split(' ')
        .map((n) => parseInt(n, 10));
      const intelligencePerCastingLevel = /Int. Req. (.+) Initial :/
        .exec(text)[1]
        .split(' ')
        .map((n) => parseInt(n, 10));

      const hasNoMainteance = /Maintien.?: Non/.test(text);
      let maintenancePerCastingLevel;
      if (hasNoMainteance) {
        maintenancePerCastingLevel = [0, 0, 0, 0];
      } else {
        maintenancePerCastingLevel = /Maintien.?: (.+)( ?Quotidien)?/
          .exec(text)[1]
          .split('/')
          .map((n) => parseInt(n.trim(), 10));
      }

      spell.castingLevels = [
        {
          level: 'Initial',
          zeon: zeonPerCastingLevel[0],
          requiredIntelligence: intelligencePerCastingLevel[0],
          effect: /Initial.?: (.+) +Intermédiaire.?:/.exec(text)[1].replace(/\.$/, ''),
          maintenance: maintenancePerCastingLevel[0]
        },
        {
          level: 'Intermédiaire',
          zeon: zeonPerCastingLevel[1],
          requiredIntelligence: intelligencePerCastingLevel[1],
          effect: /Intermédiaire.?: (.+) +Avancé.?:/.exec(text)[1].replace(/\.$/, ''),
          maintenance: maintenancePerCastingLevel[1]
        },
        {
          level: 'Avancé',
          zeon: zeonPerCastingLevel[2],
          requiredIntelligence: intelligencePerCastingLevel[2],
          effect: /Avancé.?: (.+) +Arcane.?:/.exec(text)[1].replace(/\.$/, ''),
          maintenance: maintenancePerCastingLevel[2]
        },
        {
          level: 'Arcane',
          zeon: zeonPerCastingLevel[3],
          requiredIntelligence: intelligencePerCastingLevel[3],
          effect: /Arcane.?: (.+) +Maintien.?:/.exec(text)[1].replace(/\.$/, ''),
          maintenance: maintenancePerCastingLevel[3]
        }
      ];

      const isDailyMaintenance = /Maintien.?: .+ ?Quotidien/.test(text);
      if (isDailyMaintenance) {
        spell.isDailyMaintenance = isDailyMaintenance;
      }

      const forbiddenPaths = /Voie\(s\) Fermée\(s\).?: (.+)$/.exec(text);
      if (forbiddenPaths) {
        spell.forbiddenPaths = forbiddenPaths[1].replace(',', '').split(' ');
        if (spell.forbiddenPaths[0] === 'Aucune') {
          spell.forbiddenPaths = [];
        }
      }
    } catch (error) {
      writeError(text);
      throw error;
    }
    return spell;
  });

jsSpells.sort((s1, s2) => {
  if (s1.level === s2.level) {
    return s1.name.localeCompare(s2.name);
  }
  return s1.level - s2.level;
});

// Add free access spell slots
if (jsSpells.length > 20 && jsSpells.length < 50) {
  jsSpells = jsSpells.reduce((path, spell) => {
    if (path.length) {
      const previousSpellLevel = path[path.length - 1].level;
      if (spell.level - previousSpellLevel > 2) {
        path.push({
          level: previousSpellLevel + 2,
          isFreeAccess: true,
          maxFreeAccessLevel: Math.trunc((previousSpellLevel + 12) / 10) * 10
        });
      }
    }
    return path.concat(spell);
  }, []);
}

saveJson(jsSpells);
