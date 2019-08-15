const fs = require('fs');

const jsonFile = './parse.json';
const errorFile = './parse-error.json';

function saveJson(jsonData) {
  fs.writeFileSync(jsonFile, JSON.stringify(jsonData, null, 2));
}

function writeError(error) {
  fs.writeFileSync(errorFile, JSON.stringify(error, null, 2));
}

// Replace '	' by ' '
// Replace '  ' by ' '
// Replace ' ' by ' '
const spells = JSON.parse(
  JSON.stringify([
    "Brouillard Niveau : 10-20 	Action : Active	Type : Effet Effet : Forme du brouillard dans une zone délimité. La densité est au choix du sorcier. Le brouillard reste fixé à l'endroit où le sort a été lancé. Degré  Initial Intermédiaire Avancé Arcane Zéon 60 120 180 240 Int. Req. 6 9 11 13 Initial : 100 m de rayon Intermédiaire : 250 m de rayon Avancé : 500 m de rayon Arcane : 1 km de rayon Maintien : 10 / 20 / 20 / 25 Quotidien Voie(s) Fermée(s) : Feu"
  ])
);

const clearAndTrimText = function(text) {
  let trimedText = text
    .trim()
    .replace(/\t/g, ' ')
    .replace(/	/g, ' ')
    .replace(/ /g, ' ');
  while (/  /.test(trimedText)) {
    trimedText = trimedText.replace(/  /g, ' ');
  }
  return trimedText;
};

saveJson(
  spells
    .filter(rawText => rawText)
    .map(rawText => {
      let text = clearAndTrimText(rawText);

      const spell = {};
      try {
        spell.name = /^(.+) Niveau.?:/.exec(text)[1];

        const level = /Niveau.?: ((\d+-)?\d+) Action.?:/.exec(text)[1];
        if (level.includes('-')) {
          spell.level = parseInt(level.split('-')[1]);
        } else {
          spell.level = parseInt(level);
        }

        spell.action = /Action.?: (.+) Type.?:/.exec(text)[1];
        spell.types = /Type.?: (.+) Effet.?:/
          .exec(text)[1]
          .replace(',', '')
          .split(' ');
        spell.effect = /Effet.?: (.+) +?Degré Initial/.exec(text)[1];

        const zeonPerCastingLevel = /Arcane Zéon (.+) Int. Req./
          .exec(text)[1]
          .split(' ')
          .map(n => parseInt(n, 10));
        const intelligencePerCastingLevel = /Int. Req. (.+) Initial :/
          .exec(text)[1]
          .split(' ')
          .map(n => parseInt(n, 10));

        const hasNoMainteance = /Maintien.?: Non/.test(text);
        let maintenancePerCastingLevel;
        if (hasNoMainteance) {
          maintenancePerCastingLevel = [0, 0, 0, 0];
        } else {
          maintenancePerCastingLevel = /Maintien.?: (.+)( ?Quotidien)?/
            .exec(text)[1]
            .split(' / ')
            .map(n => parseInt(n, 10));
        }

        spell.castingLevels = [
          {
            level: 'Initial',
            zeon: zeonPerCastingLevel[0],
            requiredIntelligence: intelligencePerCastingLevel[0],
            effect: /Initial.?: (.+) +Intermédiaire.?:/
              .exec(text)[1]
              .replace(/\.$/, ''),
            maintenance: maintenancePerCastingLevel[0]
          },
          {
            level: 'Intermédiaire',
            zeon: zeonPerCastingLevel[1],
            requiredIntelligence: intelligencePerCastingLevel[1],
            effect: /Intermédiaire.?: (.+) +Avancé.?:/
              .exec(text)[1]
              .replace(/\.$/, ''),
            maintenance: maintenancePerCastingLevel[1]
          },
          {
            level: 'Avancé',
            zeon: zeonPerCastingLevel[2],
            requiredIntelligence: intelligencePerCastingLevel[2],
            effect: /Avancé.?: (.+) +Arcane.?:/
              .exec(text)[1]
              .replace(/\.$/, ''),
            maintenance: maintenancePerCastingLevel[2]
          },
          {
            level: 'Arcane',
            zeon: zeonPerCastingLevel[3],
            requiredIntelligence: intelligencePerCastingLevel[3],
            effect: /Arcane.?: (.+) +Maintien.?:/
              .exec(text)[1]
              .replace(/\.$/, ''),
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
    })
    .sort((s1, s2) => {
      if (s1.level === s2.level) {
        return s1.name.localeCompare(s2.name);
      }
      return s1.level - s2.level;
    })
);
