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
    "L'Ombre du Vide   Niveau : 4	Action : Active	Type : Animique Effet : Amène dans l'existence un fragment de vide, une simple ombre du néant primordial qui pendant quelques instants absorbe en partie la lumière, réduit la quantité d'oxygène de la zone et aspire l'énergie vitale qui l'entoure. Tout ce qui se trouve dans la zone affectée par ce sort doit réussir un test de RMys ou perdre un point de Fatigue pour les êtres vivants et deux intensités pour les énergies, ce qui revient à 10 Points de Vie pour les élémentaires. Degré  Initial Intermédiaire Avancé Arcane Zéon 30 60 90 120 Int. R. 5 8 11 14 Initial: 80 RMys / Zone de 5 m de large. Intermédiaire : 100 RMys / Zone de 10 m de large. Avancé : 120 RMys / Zone de 15 m de large. Arcane : 150 RMys / Zone de 30 m de large. Maintien : Non Type de sort : Animique  Degré  Initial Intermédiaire Avancé Arcane Zéon 30 60 90 120 Int. Req. 5 8 11 14 Initial : 80 RMys / Zone de 5 m de large. Intermédiaire : 100 RMys / Zone de 10 m de large. Avancé : 120 RMys / Zone de 15 m de large. Arcane : 150 RMys / Zone de 30 m de large. Maintien : Non",
    "Vague de Vide  Niveau : 14	Action : Active	Type : Attaque Effet : Ce sort envoie une légère onde de vide capable de déstructurer les fibres surnaturelles de n'importe quelle protection. Ce sort ne provoque pas en soi de dégâts à ses adversaires, mais dirigé contre un bouclier surnaturel, il entraîne sa désagrégation. La Vague de Vide est invisible à l'œil humain, sauf pour ceux capables de voir la magie.  Degré  Initial Intermédiaire Avancé Arcane Zéon 30 60 90 120 Int. Req. 6 9 12 15 Initial : Dégâts 120 contre les boucliers. Intermédiaire : Dégâts 250 contre les boucliers. Avancé : Dégâts 400 contre les boucliers. Arcane : Dégâts 600 contre les boucliers. Maintien : Non",
    "Bouclier de Vide Niveau : 24	Action : Passive	Type : Défense Effet : Crée une barrière de particules de vide qui absorbent et anéantissent les attaques qu'elle subit. Outre le fait qu'il résiste comme un bouclier conventionnel, tout pouvoir surnaturel qu'il arrête sera automatiquement annulé si l'attaquant ne réussit pas un test de Volonté ou de Pouvoir contre la difficulté déterminée par le Degré  du sort. C'est-à-dire que si un adversaire lance un sortilège offensif ou animique contre un mage qui se protège derrière un Bouclier de Vide au Degré  Intermédiaire, et que ce dernier obtient une défense avec succès, l'attaquant devra réussir un test de Volonté ou de Pouvoir contre 16, sinon son attaque sera annulé sans faire le moindre dégât au bouclier. De la même façon, tout objet physique que le bouclier réussi à parer doit réussir une RPhy contre la difficulté déterminée par le bouclier ou être détruit immédiatement.  Degré  Initial Intermédiaire Avancé Arcane Zéon 50 90 120 150 Int. Req. 6 9 12 15 Initial : 200 points de vie / Difficulté 14 / 100 RPhy. Intermédiaire : 300 points de vie / Difficulté 16/ 120 RPhy. Avancé : 400 points de vie / Difficulté 18 / 140 RPhy. Arcane : 500 points de vie / Difficulté 20/ 160 RPhy. Maintien : 15 / 20 / 25 / 30",
    "Vortex de Réalité  Niveau : 34	Action : Active	Type : Automatique Effet : Crée une zone remplie de millions de microscopiques particules de vide. Tout individu se trouvant à l'intérieur pendant plus d'un round doit réussir automatiquement un test de RMys à chaque round, ou subir des dégâts et une perte de points de Ki équivalents à la moitié de la marge d'échec, ainsi qu'une perte de points de Zéon équivalents à la marge d'échec. Ce sort ne permet pas de choisir de cibles, il affecte tout le monde de la même façon y compris le lanceur lui-même.  Degré  Initial Intermédiaire Avancé Arcane Zéon 80 120 180 240 Int. Req. 7 10 13 15 Initial : 100 RMys / 5 m de rayon. Intermédiaire : 120 RMys / 10 m de rayon. Avancé : 140 RMys / 20 m de rayon. Arcane : 160 RMys / 40 m de rayon. Maintien : 5 / 10 / 15 / 20",
    "Lame Noire de Perdition Niveau : 44	Action : Active	Type : Attaque Effet : Invoque le vide à l'état le plus pur, donnant forme à une lame de pouvoir crépitante qui se manifeste entre les mains du sorcier. L'arme est de taille grande (G), a la même initiative que le lancer d'un sort, peut être utilisée par le sorcier pour parer ou attaquer sur le mode Tranchant avec la Projection magique ou la compétence de corps-à-corps du lanceur, ne peut être brisée ni briser d'autre arme en combattant, et elle ignore complètement tout Indice de Protection. Le sorcier peut maintenir la lame active pour faire de nouvelles attaques au cours des rounds suivants, mais à chaque round il doit réussir un test de Volonté contre une difficulté de 12 ou perdre le contrôle de l'épée et du sort. Chaque fois qu'il arrive à réussir le test il augmente d'un point sa difficulté pour le test du round suivant. S'il échoue, l'épée se retourne contre le sorcier, l'attaquant avec sa propre compétence entière +50.  Degré  Initial Intermédiaire Avancé Arcane Zéon 100 150 200 250 Int. Req. 6 9 12 15 Initial : Dégâts 80. Intermédiaire : Dégâts 120. Avancé : Dégâts 160. Arcane : Dégâts 200. Maintien : 5 / 10 / 10 / 15",
    "Aura de Vide Niveau : 54	Action : Active	Type : Effet Effet : Recouvre le sorcier d'une aura de vide qui le protège des effets des attaques surnaturelles, lui accordant une IP contre le Mode Énergie chaque fois qu'elle dévore un sort ou un pouvoir psychique d'une valeur inférieure à celle indiquée, laquelle perdure pendant toute la durée du sort et se cumule aux précédentes selon les règles habituelles pour les sorts procurant un Indice de Protection. Malheureusement, ce sort ne fait pas la différence entre les pouvoirs amis et ennemis, et les dévore tous sans distinction. La couche de vide est invisible, mais tout ce qui entoure le sorcier semble plus ténu et éteint.  Degré  Initial Intermédiaire Avancé Arcane Zéon 120 180 240 350 Int. Req. 6 9 12 15 Initial : IP 4 / Valeur en Zéon de 60 / Talent psychique de 80. Intermédiaire : IP 6 / Valeur en Zéon de 90/ Talent psychique de 120. Avancé : IP 8 / Valeur en Zéon de 120 / Talent psychique de 140. Arcane : IP 10 / Valeur en Zéon de 160 / Talent psychique de 180 Maintien : 15 / 20 / 25 / 35 Quotidien",
    "Points Noirs  Niveau : 64	Action : Active	Type : Automatique Effet : Crée une zone autour du sorcier remplie de vortex existentiels et de trous de vide qui se déplacent d'un côté à l'autre de façon chaotique. Toute personne entrant dans cette zone, à l'exception du sorcier, doit réussir à chaque round un test d'Athlétisme, d'Acrobaties ou de Défense (une parade incapable d'affecter l'énergie est inefficace) contre une difficulté déterminée par le Degré  du sort, sous peine de heurter un des Points Noirs. Dans ce cas, le personnage doit réussir un test de RPhy ou de RMys contre la difficulté déterminée par le sort ou subir des dégâts et une perte de points de Ki équivalents à la moitié de ta marge d'échec, ainsi qu'une perte de Zéon équivalente à la marge d'échec. Il n'est pas possible de désigner de cibles à l'intérieur du sortilège.  Degré  Initial Intermédiaire Avancé Arcane Zéon 150 250 350 500 Int. Req. 8 10 12 15 Initial : Difficulté de 120 / 10 m de rayon / 120 RMys ou RPhy. Intermédiaire : Difficulté de 140 / 20 m de rayon / 140 RMys ou RPhy. Avancé : Difficulté de 180 / 50 m de rayon / 160 RMys ou RPhy. Arcane : Difficulté de 240 / 100 m de rayon / 180 RMys ou RPhy. Maintien : 15 / 25 / 35 / 50",
    "Protection contre le Vide Niveau : 74	Action : Active	Type : Effet Effet : Recouvre le sorcier d'une énergie surnaturelle qui repousse les effets tu vide. Tout sort ou pouvoir en relation avec le néant n'a aucun effet sur lui, ni ne peut lui infliger de dégâts.  Degré  Initial Intermédiaire Avancé Arcane Zéon 140 200 280 400 Int. Req. 10 12 14 16 Initial : Protège contre les sorts de cette voie secondaire à l'exception de la Porte sur Nulle Part. Intermédiaire : Comme pour le Degré  Initial sans son exception, mais personnage est également immunisé contre les effets et les attaques de créatures basées sur le vide, comme les Etrien Gnosos. Avancé : Le personnage est immunisé contre tout effet en relation avec le vide, sauf le néant primordial. Arcane : Comme pour le Degré  Avancé, mais le personnage est capable de survivre même au néant primordial. Maintien : 15 / 20 / 30 / 40",
    "Implosion  Niveau : 84	Action : Active	Type : Attaque Effet : Ce sort terrorisant crée un point de vide à l'intérieur de quelque chose, attirant toute sa masse vers l'intérieur et provoquant une implosion de sa structure et sa disparition complète. Comme il absorbe la chair; les os et les organes, si le résultat de l'attaque devrait infliger des dommages ce sortilège provoque directement les dégâts indiqués, sans Mode qui puisse les réduire par un quelconque Indice de Protection, et provoque en plus un critique automatique avec un bonus déterminé par le Degré  du sort.   Degré  Initial Intermédiaire Avancé Arcane Zéon 250 500 750 1000 Int. Req. 14 16 18 20 Initial : 200 points de dégâts / Niveau de critique +20. Intermédiaire : 400 points de dégâts / Niveau de critique +40. Avancé : 600 points de dégâts / Niveau de critique +60. Arcane : 800 points de dégâts / Niveau de critique +100. Maintien : Non",
    "Porte sur Nulle Part Niveau : 94	Action : Passive	Type : Effet Effet : Ouvre un portail à sens unique vers le vide le plus absolu, le néant primitif qui dévorera un jour l'univers. Tout ce qui passe la porte cesse d'exister automatiquement, sans qu'aucun test de Résistance ne soit possible. Seuls les êtres possédant une Gnose de 35 ou plus, les objets d'une présence équivalente ou les individus protégés par quelque moyen que ce soit contre le Vide peuvent y survivre, mais ils perdent un point par minute à leur caractéristique de Pouvoir, qu'ils récupèrent au rythme d'un par jour. Naturellement, quelque chose qui reste à l'intérieur est virtuellement immunisé contre tout type d'attaque car celles-ci ne peuvent l'atteindre. Les dimensions du portail sont déterminées par le Degré  du sort.  Degré  Initial Intermédiaire Avancé Arcane Zéon 300 500 800 1200 Int. Req. 11 13 15 18 Initial : 2 m de diamètre. Intermédiaire : 5 m de diamètre. Avancé : 15 m de diamètre. Arcane : 50 m de diamètre. Maintien : 30 / 50 / 80 / 120"
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
