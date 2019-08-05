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
    "Bénédiction Niveau : 56 Action : Active Type : Effet Effet : La bénédiction accorde une énergie incroyable aux personnes affectées. Les cibles d'une bénédiction disposent d'un bonus à toutes leurs actions et leurs Résistances. Le sort est centré sur le sorcier ; à l'extérieur de la zone d’effet, plus aucun bonus n'est applicable. Les bénéfices de ce sort ne se cumulent pas : un personnage n'obtient pas deux fois ces bonus quand il se trouve dans la zone de deux sorts de bénédiction. Degré Initial Intermédiaire Avancé Arcane Zéon 100 180 240 300 Int. Req. 8 10 12 15 Initial : +10 à toutes les actions / +10 aux résistances / 5m de rayon Intermédiaire : +20 à toutes les actions / +20 aux résistances / 25m de rayon Avancé : +20 à toutes les actions / +30 aux résistances / 50m de rayon Arcane : +30 à toutes les actions / +30 aux résistances / 150m de rayon Maintien : 5 / 10 / 15 / 15",
    "Créer des Sentiments Positifs Niveau : 58 Action : Active Type : Animique Effet : Ce sort introduit un type de sentiment positif, comme l'amour, le plaisir ou l'amitié, chez les cibles désignées par le sorcier. Un test de RMys ou de RPsy peut bloquer les effets de ce sortilège. Une cible affectée peut effectuer à nouveau ce test une fois par jour. Degré Initial Intermédiaire Avancé Arcane Zéon 100 180 240 300 Int. Req. 8 10 12 15 Initial : RMys ou RPsy 120 / 20m de rayon Intermédiaire : RMys ou RPsy 160 / 100m de rayon Avancé : RMys ou RPsy 180 / 250m de rayon Arcane : RMys ou RPsy 220 / 500m de rayon Maintien : 10 / 20 / 25 / 30Quotidien",
    "Voir Réellement Niveau : 60 Action : Active Type : Effet Effet : Permet à la personne affectée par ce sort de percevoir les forces surnaturelles invisibles pour l'œil humain : elle peut voir la magie, les matrices psychiques et les êtres invisibles ou Animiques. Bien qu'il ne fonctionne pas contre les sorts d'illusion, qui affectent l'esprit et pas les sens, tous ceux qui se servent de Voir Réellement contre les illusions visuelles peuvent bénéficier d'un bonus à leur RMys, puisqu'ils auront plus de facilité à s'apercevoir de leur fausseté. Degré Initial Intermédiaire Avancé Arcane Zéon 100 120 180 250 Int. Req. 8 12 14 16 Initial : permet de percevoir la magie, les matrices psychiques et les êtres invisibles / RMys +50 contre les illusions Intermédiaire : comme le rang Initial mais permet aussi de voir les êtres spirituels Avancé : comme le rang Intermédiaire à ceci près que le bonus de RMys passe à +75 Arcane : comme le rang avancé à ceci près que le bonus de RMys passe a +100 Maintien : 10 / 15 / 15 / 25 Quotidien",
    "Bouclier Anti-Négatif Niveau : 62 Action : Active	Type: Automatique Effet : Enchante une zone déterminée pour la rendre impénétrable pour les êtres basés naturellement sur les sentiments négatifs ou l'obscurité. Toute créature de ce type pénétrant dans la zone d'effet du sort doit effectuer à chaque round un test de RMys, sous peine de perdre autant de points de vie que sa marge d'échec. De plus, si elle échoue à ce test, la créature subit immédiatement un malus de -40 à toutes ses actions. La zone d'effet à son centre est fixée au lieu où le sort a été lancé. Degré  Initial Intermédiaire Avancé Arcane Zéon 140 180 240 300 Int. Req. 7 9 12 15 Initial : RMys 120 / 20m de rayon Intermédiaire : RMys 140 / 100m de rayon Avancé : RMys 160 / 250m de rayon Arcane : RMys 180 / 500m de rayon Maintien : 15 / 20 / 25 / 30 Quotidien",
    "Trouver Niveau : 66 Action : Active Type : Détection Effet : Grâce au sort Trouver, un sorcier obtient la capacité de localiser une personne, un objet ou un lieu, et de connaître sa localisation exacte à ce moment précis, qu'importe la distance qui les sépare. Il peut chercher une chose précise ou générique, ou simplement une chose qui répond à une condition déterminée. Par exemple, un sorcier peut tenter de localiser une ville, le voleur qui lui a volé sa balance (et qu'il ne connaît pas), ou même la demoiselle de sang royal la plus proche de lui. Les objets, les lieux ou les personnes affectées doivent effectuer un test de RMys pour ne pas être localisés. Les lieux de grande taille subissent un malus de -40 à ce test. Degré Initial Intermédiaire Avancé Arcane Zéon 160 200 260 320 Int. Req. 8 10 13 16 Initial : RMys 140 Intermédiaire : RMys 180 Avancé : RMys 220 Arcane : RMys 260 Maintien : Non ",
    'Rétablir Niveau : 68	Action : Active	Type : Effet Effet : Ce sort annule les malus que subit un individu déterminé. Les malus annulés peuvent avoir pour origine la fatigue, la faim, des dégâts physiques ou même des sorts, mais en aucun cas des carences physiques comme un membre amputé ou équivalent. Le rétablissement permet de récupérer, de façon automatique, tous les points de Fatigue dépensés.  Degré  Initial Intermédiaire Avancé Arcane Zéon 150 200 250 300 Int. Req. 8 10 12 15 Initial : Élimine jusqu’à -40 sur éventuel malus à toutes les actions et restitue 2 points de fatigue Intermédiaire : Élimine jusqu’à -80 sur éventuel malus à toutes les actions et restitue 5 points de fatigue Avancé : Élimine jusqu’a -120 sur éventuel malus à toutes les actions et restitue 10 points de fatigue Arcane : Élimine tous les malus aux actions et restitue l’intégralité des points de fatigue. Maintien : Non',
    "Symbole Hypnotique Niveau : 70	Action : Active	Type : Automatique Effet : Forme un symbole ou un spectacle lumineux dans un lieu déterminé, qui fascine et mystifie tous ceux qui l'observent. Tout individu regardant le Symbole ne peut faire rien d'autre que demeurer absorbé dans sa contemplation. Le sort est visible à un kilomètre de distance. Les observateurs doivent effectuer un test de RMys ou RPsy pour résister à ses effets. Une fois affectée par ce sort, une personne ne peut plus effectuer que des actions passives et ne peut pas se déplacer beaucoup. Chaque fois qu'elle subit une attaque, elle a le droit d'effectuer un nouveau test de RMys ou RPsy. Ce sort affecte ses victimes à l'unique condition qu'elles regardent directement le symbole hypnotique. Degré  Initial Intermédiaire Avancé Arcane Zéon 140 200 280 360 Int. Req. 10 12 14 16 Initial : Visible dans un rayon d’1 km / RMys ou RPsy 120 Intermédiaire : Visible dans un rayon de 5 km / RMys ou RPsy 150 Avancé : Visible dans un rayon de 15 km / RMys ou RPsy 180 Arcane : Visible dans un rayon de 25 km / RMys ou RPsy 220 Maintien : 5 / 10 / 10 / 15",
    "Lumière Catastrophique  Niveau : 72	Action : Active	Type : Attaque Effet : Projette une décharge d'énergie basée sur la lumière. Le mode de dégât est Énergie. Degré  Initial Intermédiaire Avancé Arcane Zéon 140 180 240 350 Int. Req. 10 12 14 16 Initial : Dégâts de base 120 / 25 m de rayon Intermédiaire : Dégâts de base 150 / 100 m de rayon Avancé : Dégâts de base 200 / 150 m de rayon Arcane : Dégâts de base 250 / 250 m de rayon Maintien : Non",
    "Objets Lumineux Matériels  Niveau : 76	Action : Active	Type : Effet Effet : Forme un objet physique d'énergie lumineuse. L'objet créé ne peut pas avoir une Présence supérieure à ce qu’indique le rang du sort, qu'il soit aussi complexe qu'une horloge ou aussi simple qu'une épée. En fonction du rang du sort, il peut être de qualité supérieure. Exceptionnellement, la qualité de l'objet n'influe pas sur sa Présence.  Degré  Initial Intermédiaire Avancé Arcane Zéon 150 200 240 300 Int. Req. 10 12 14 16 Initial : Présence 60 / Qualité +5 Intermédiaire : Présence 100 / Qualité +10 Avancé : Présence 140 / Qualité +10 Arcane : Présence 180 / Qualité +15 Maintien : 15 / 20 / 25 / 30",
    "Transmission par la Lumière  Niveau : 78	Action : Active	Type : Effet, Animique Effet : Transporte instantanément les individus ou les objets désignés par le sorcier, d'une source de lumière à une autre qui se trouve à une distance maximale fixée par le rang du sort. La somme de Présence transportable est également fixée par ce rang. Si une cible souhaite résister, elle doit réussir un test de RMys. Degré  Initial Intermédiaire Avancé Arcane Zéon 250 360 450 600 Int. Req. 10 12 14 16 Initial : 100 km / Présence max 250 / RMys 120 Intermédiaire : 1000 km / Présence max 500 / RMys 140 Avancé : 5000 km / Présence max 1000 / RMys 180 Arcane : 15000 km / Présence max 2000 / RMys 200 Maintien : Non",
    "Seigneur des Rêves Niveau : 80	Action : Active	Type : Effet, Animique Effet : Permet de dominer n'importe quel type de rêve. Le sorcier a la capacité de contrôler le monde onirique d'un dormeur, en le modifiant comme s'il avait 45 en Gnose. Si le rêve s'alimente d'énergie négative, autrement dit qu'il se change en cauchemar, la Gnose du sorcier ne sera que de 30. Si le dormeur souhaite éviter le sort, il doit effectuer un test de RMys. Ce sort a aussi une deuxième fonction, suivant si le sorcier se trouve dans la Veille ou pas. Les sorts lancés par le sorciers autorisés par ce niveau de gnose (comme les sorts de Magie Divine par exemple) ne peuvent avoir d’effets en dehors de la zone d’influence du sortilège et durent jusqu’à ce que le sorcier ne quitte le rêve (ou la veille). Degré  Initial Intermédiaire Avancé Arcane Zéon 300 400 500 750 Int. Req. 12 14 16 18 Initial : RMys 140 Intermédiaire : RMys 150 / Si le sorcier se retrouve dans la Veille, il en contrôle également l’environnement et obtient les pouvoirs d’une créature de Gnose 40, à condition que la zone soit fortement influencée par les énergies positives. S’il se trouve dans une zone neutre, la Gnose équivalente sera de 30. Ce sort n’affecte que ce qui se trouve dans sa zone d’effet et seulement si aucune autre entité de Gnose similaire s’y trouve ou n’y pénètre. Avancé : RMys 160 / comme pour Intermédiaire à ceci près que la Gnose équivalent en zone neutre passe à 35 Arcane : RMys 180 / comme pour Avancé à ceci près que les sortilèges n’ont plus de limites spatiales et peuvent atteindre tout ce qui se trouve dans les zones de la veille influencées par les énergies positives. Maintien : 60 / 65 / 70 / 80 Quotidien",
    "Création de Lumière Niveau : 82	Action : Active	Type : Effet Effet : Crée un être lumineux avec l'apparence de la vie, sous le contrôle absolu du sorcier. Cet être sera conçu comme une créature d'Entre Mondes, en utilisant les pouvoirs et les limitations des élémentaires de Lumière du Chapitre 26. Le niveau de la créature dépendra du rang du sort. Degré  Initial Intermédiaire Avancé Arcane Zéon 250 350 500 700 Int. Req. 10 12 14 16 Initial : Niveau 1 Intermédiaire : Niveau 3 Avancé : Niveau 6 Arcane : Niveau 10 Maintien : 50 / 70 / 100 / 140 Quotidien",
    "Prisme Réfléchissant Niveau : 86	Action : Passive	Type : Défense Effet : Crée un halo de lumière pure qui fonctionne comme un bouclier prismatique, renvoyant vers son envoyeur tout sort, discipline psychique d'attaque ou technique de Ki, effectué à distance. Pour que le pouvoir soit renvoyé, il doit échouer à un test de choc contre l'équivalent d'une décharge de Dégâts variables, dépendant du rang du sort. Il faut aussi avoir réussi sa parade avec le prisme pour renvoyer une telle attaque. S'il s'agit d'une Attaque de zone, elle ne sera pas renvoyée en totalité : elle affectera toutes les cibles de la zone affectée à l'exception du sorcier protégé par le prisme. Ce sort ne renvoie pas les effets Animiques ou Ésotériques. Le sorcier peut utiliser sa Projection magique pour rediriger l'attaque. La résistance du prisme dépend du rang du sort.  Degré  Initial Intermédiaire Avancé Arcane Zéon 160 250 300 400 Int. Req. 10 13 15 17 Initial : 100 contre Choc / 800 Points de Vie Intermédiaire : 120 contre Choc / 1500 Points de Vie Avancé : 140 contre Choc / 3000 Points de Vie Arcane : 180 contre Choc / 6000 Points de Vie Maintien : 20 / 25 / 30 / 40 Quotidien",
    "Omniscience Rayonnante  Niveau : 88	Action : Active	Type : Effet Effet : Permet au sorcier d'être omniscient, vis à vis de tout événement ou pensée située autour de lui. Cela n'affecte que les individus dont la Présence est inférieure à un seuil fixé par le sort et de Gnose inférieure à celle du personnage. Le sorcier sait automatiquement tout ce que se passe à l'intérieur de cette zone et ce que pensent les personnes. Il n'y a pas de test de Résistance possible.  Degré  Initial Intermédiaire Avancé Arcane Zéon 200 250 400 800 Int. Req. 10 12 15 18 Initial : 500 m de rayon / Présence max 60 Intermédiaire : 2 km de rayon / Présence max 80 Avancé : 10 km de rayon / Présence max 100 Arcane : 50 km de rayon / Présence max 120 Maintien : 40 / 50 / 60 / 65",
    "Prédire Niveau : 90	Action : Active 	Type : Animique Effet : Permet de visualiser les événements à venir qui se dérouleront autour d'une personne, d'un objet ou d'un lieu. Prédire montre au sorcier le destin le plus probable qui attend une chose ou un individu, en lui donnant des informations détaillées sur les événements futurs. L'intervalle de temps ne pourra pas s'étendre au-delà d’une période fixée par le rang du sort à partir du moment présent. Le Meneur de Jeu doit détailler avec honnêteté au sorcier quels événements vont se dérouler. Cependant, ceux-ci ne sont pas infaillibles ; ce sort ne prédit que le destin le plus probable, et il existe toujours la possibilité qu'il puisse être modifié, par l'intervention de puissances majeures ou des personnages de Gnose élevée. Degré  Initial Intermédiaire Avancé Arcane Zéon 200 300 450 600 Int. Req. 10 12 14 16 Initial : Un an Intermédiaire : 5 ans Avancé : 50 ans / Dans le cas d’une prédiction d’un évènement situé d’ici moins d’une journée, la description sera parfaitement exacte. Arcane : 1 siècle / Dans le cas d’une prédiction d’un évènement situé d’ici moins d’une année, la description sera parfaitement exacte. Maintien : Non",
    "Prison de Lumière Niveau : 92	Action : Active	Type : Animique Effet : Emprisonne une créature dans un monde de lumière impossible à traverser, un univers dans lequel elle ne pourra pas interagir avec l'extérieur, ni inversement. Tant que la cible du sort se trouve à l'intérieur de la prison, elle n'a pas conscience de ce qui se passe à l'extérieur, ou inversement. Pour briser le sortilège de l'intérieur, on considère que la prison possède une quantité de point de vie fixée par le rang du sort et est considérée comme une créature avec Encaissement et une IP 10. Les dommages infligés depuis l’extérieur sont doublés mais la prison régénère les dégâts subis avec une Régénération de 19. On peut éviter ce sort en réussissant un test de RMys. En cas d'échec, la cible n'a droit à aucun test ultérieur ; si elle désire sortir, elle devra être capable de rompre le sortilège.  Degré  Initial Intermédiaire Avancé Arcane Zéon 200 350 500 800 Int. Req. 14 16 18 20 Initial : RMys 140 / La prison possède 10 000 Points de Vie Intermédiaire : RMys 180 / La prison possède 250 000 Points de Vie Avancé : RMys 220 / La prison possède 500 000 Points de Vie Arcane : RMys 240 / La prison ne peut être brisée de l’intérieur et possède 500 000 PV pour résister aux attaques de l’extérieur. Maintien : 40 / 70 / 100 / 160 ",
    "Essence de Lumière Niveau : 96	Action : Active	Type : Effet Effet : Permet au sorcier d'entrer dans un état de léthargie absolue, tandis que son corps ne fait plus qu'un avec la lumière. Il abandonne le monde et commence son ascension vers le flux des âmes pour se nourrir de son énergie. À l'écart et inconscient de tout ce qui se passe autour de lui, le personnage multiplie par 10 sa régénération Zéonique et soigne ses blessures avec une Régénération de 16. Bien que ce sort n'ait pas de maintien, le sorcier peut rester dans le flux des âmes pour une durée fixée par le rang du sort. Degré  Initial Intermédiaire Avancé Arcane Zéon 200 400 600 800 Int. Req. 12 14 16 18 Initial : Un jour Intermédiaire : Une semaine Avancé : Un mois Arcane : Un an Maintien : Non",
    "Ascension  Niveau : 98	Action : Active	Type: Effet  Effet : Le sort échange l'essence physique d'un individu avec de l'énergie divine, transformant son esprit en pure puissance surnaturelle. L’effet permet au sorcier, ou à sa cible, d’augmenter sa Gnose jusqu’à une valeur maximale fixée par le rang du sort. Degré  Initial Intermédiaire Avancé Arcane Zéon 500 1 000 2 000 5 000 Int. Req. 14 16 18 20 Initial : Gnose maximale 30 Intermédiaire : Gnose maximale 35 Avancé : Gnose maximale 40 Arcane : Gnose maximale 45 Maintien : 30 / 40 / 45 / 50 Quotidien",
    "Holocauste de Lumière Niveau : 100	Action : Active	Type : Att. , Animique Effet : Ce sort déchaîne la puissance de la lumière dans son état le plus pur, rasant tout ce qui se trouve sur son passage, aussi bien dans le monde matériel que dans le monde spirituel. L'énergie libérée arrache et dévore toute chose, unifiant toute existence à celle de la lumière. Même les créatures de lumière sont assimilées par ce sort. L'Holocauste crée une grande coupole lumineuse, à l'intérieur de laquelle tout se dissout instantanément. Les dégâts provoqués sont de type Énergie. Tout être subissant des dégâts, aussi minimes soient-ils, doit réussir un test de RMys contre 160 sous peine d'être unifié à la lumière et, de fait, détruit de corps comme d'esprit. Il n'est pas possible de désigner des cibles précises dans le rayon du sort, qui affecte tout de la même manière, à l'exception du sorcier. Degré  Initial Intermédiaire Avancé Arcane Zéon 600 1 000 2 500 10 000 Int. Req. 14 16 18 20 Initial : Dégâts de base 350 / 100m de rayon Intermédiaire : Dégâts de base 500 / 100 km de rayon Avancé : Dégâts de base 800 / 10 000 km de rayon Arcane : Dégâts de base 1 000 / 1 UA de rayon Maintien : Non"
  ])
);

saveJson(
  spells.map(rawText => {
    let text = rawText
      .replace(/\t/g, ' ')
      .replace(/	/g, ' ')
      .replace(/ /g, ' ')
      .replace(/^ +/, '')
      .replace(/ +$/, '');
    while (/  /.test(text)) {
      text = text.replace(/  /g, ' ');
    }

    const spell = {};
    try {
      spell.name = /^(.+) Niveau.?:/.exec(text)[1];
      spell.level = parseInt(/Niveau.?: (\d+) Action.?:/.exec(text)[1]);
      spell.action = /Action.?: (.+) Type.?:/.exec(text)[1];
      spell.types = /Type.?: (.+) Effet.?:/
        .exec(text)[1]
        .replace(',', '')
        .split(' ');
      spell.effect = /Effet.?: (.+) ?Degré Initial/.exec(text)[1];

      const zeonPerCastingLevel = /Arcane Zéon (.+) Int. Req./
        .exec(text)[1]
        .split(' ')
        .map(n => parseInt(n, 10));
      const intelligencePerCastingLevel = /Int. Req. (.+) Initial :/
        .exec(text)[1]
        .split(' ')
        .map(n => parseInt(n, 10));

      const hasNoMainteance = /Maintien.?: Non$/.test(text);
      let maintenancePerCastingLevel;
      if (hasNoMainteance) {
        maintenancePerCastingLevel = [0, 0, 0, 0];
      } else {
        maintenancePerCastingLevel = /Maintien.?: (.+)( ? Quotidien)?$/
          .exec(text)[1]
          .split(' / ')
          .map(n => parseInt(n, 10));
      }

      spell.castingLevels = [
        {
          level: 'Initial',
          zeon: zeonPerCastingLevel[0],
          requiredIntelligence: intelligencePerCastingLevel[0],
          effect: /Initial.?: (.+) Intermédiaire.?:/.exec(text)[1],
          maintenance: maintenancePerCastingLevel[0]
        },
        {
          level: 'Intermédiaire',
          zeon: zeonPerCastingLevel[1],
          requiredIntelligence: intelligencePerCastingLevel[1],
          effect: /Intermédiaire.?: (.+) Avancé.?:/.exec(text)[1],
          maintenance: maintenancePerCastingLevel[1]
        },
        {
          level: 'Avancé',
          zeon: zeonPerCastingLevel[2],
          requiredIntelligence: intelligencePerCastingLevel[2],
          effect: /Avancé.?: (.+) Arcane.?:/.exec(text)[1],
          maintenance: maintenancePerCastingLevel[2]
        },
        {
          level: 'Arcane',
          zeon: zeonPerCastingLevel[3],
          requiredIntelligence: intelligencePerCastingLevel[3],
          effect: /Arcane.?: (.+) Maintien.?:/.exec(text)[1],
          maintenance: maintenancePerCastingLevel[3]
        }
      ];

      const isDailyMaintenance = /Quotidien$/.test(text);
      if (isDailyMaintenance) {
        spell.isDailyMaintenance = isDailyMaintenance;
      }
    } catch (error) {
      writeError(text);
      throw error;
    }
    return spell;
  })
);
