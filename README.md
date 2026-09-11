# foundations

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.4.2. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.


# Questions d'observation de l'exercice 2 :

1. On décrit la propriété du résultat attendu. (En CM, nous avions fais la distinction du code impératif -> on écrit un boucle étape par étape. au contraire du code déclaratif -> où on veut juste les éléments disponibles)
2. `isAvailable` joue le rôle de fonction callback, elle se contente de dire `true`ou `false` pour un membre donnée. La méthode `filter()` fait le travail de tri.
3. Elles produisanet toutes une nouvelle valeur avec `hasSkill` produisant un nouveau booléen (etc... ). Et elles ne modifient pas leurs arguments.

# Questions d'observation de l'exercice 3 :

1. Toutes les fonctions de l'exercice calculent une valeur et retournent une valeur. (calculer une valeur = (entrée donnée -> fabrication nouveau résultat))
2. la fonction `console.table()` ou `console.log()` calculent et intéragit avec l'extérieur en affichant sur le terminal le résultat du calcul.
3. Oui puisqu'elles ne dependent pas d'une données particulière extérieur.

# Question d'observation de l'exercice 4 : 

1. `!==` l'opérateur compare les objets par rapport à leur adresse mémoire, elles sont différents car avec la fonction `addPartner` à crée un nouvel objet avec l'opérateur spread, on a pas modifier l'objet d'origine.
2. Les équipes conservent leur référence d'origine, seule l'équipe victime de la fonction `addPartner` obtiennet une nouvelle référence (réponse -> 4.1)
3. Car l'état change, comme on ne "mute" pas cette-a-dire on modifie pas l'objet directement, l'opérateur `!==` suffit pour connaître s'il y a eu un changement. (facilitation plus tard pour React, car comparer toutes les propriétés pourrait s'averer gourmand, source : docu react.)
4. On pourrait avoir une Asymétrie des données (s'il un programme A,B et A modifient sans que B soit renseigner par avant cela pourrait produire des erreurs.)

# Question d'observation de l'exercice 5 : 

5.2 -> "ReferencError : Cannot acces 'sucessState' before intialisation."

1. la fonction decrit le résultat à produire selon l'état.
2. on restreint le type par une condition ainsi que leur output empechant des états non définis donc limitant de multiple des états incohérentes.
3. il est impossible pour les états loading et error d'avoir les data.

# Question d'observation de l'exercice 6 :

6.1
1. `T` un variable de type géénrique, cette-a-dire `T` pourrait être remplacé par le type d'objet voulu au moment d'appelle de la fonction.
2. On s'assure que n'importe quelle type d'objet passé possède une propriété `id : number`.
3. Si aucun élément correspond à la recherche,la méthode `find()` renvoi `undefined`.
