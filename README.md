
# Utilisation de l'intelligence artificielle : 

L'utilisation de l'intelligence artificielle était limitée uniquement dans la vérification et de compréhension des notions de cours & td, par exemple : 

- Sur la compréhension générale des notions de programmation : 

Exemple de prompt : "Qu'est-ce qu'une fonction pure ?"

Exemple d'output : "Une fonction pure en programmation est une fonction qui donne toujours le même résultat pour les mêmes entrées et qui ne modifie rien en dehors d'elle-même."
(Exemple de code (source : `https://dev.to/mdytrl/les-fondamentaux-de-javascript-la-fonction-pure-4da9`))

En dehors de l'utilisation de l'intelligence artificielle, l'utilisation de library ainsi que des documents extérieurs étaient plus favorisés : 

- L'utilisation de StackOverFlow, DEV Community et MDN Web Docs pour débogages ainsi que des exemples de code sur l'utilisation de certaines fonctions/principes de programmation.

- L'utilisation de bun.com, react.dev, zod.dev et typescriptlang.org pour la documentation.

(Sur l'indentation & format de code : Utilisation de l'extension `Prettier` sur vsc)

# Questions d'observation de l'exercice 2 :

1. On décrit la propriété du résultat attendu. (En CM, nous avions fait la distinction : code impératif -> on écrit une boucle étape par étape, au contraire du code déclaratif -> où l'on veut juste les éléments disponibles.)
2. `isAvailable` joue le rôle de fonction callback, elle se contente de dire `true` ou `false` pour un membre donnée. La méthode `filter()` fait le travail de tri.
3. Elles produisent toutes une nouvelle valeur avec `hasSkill` produisant un nouveau booléen (etc... ). Et elles ne modifient pas leurs arguments.

# Questions d'observation de l'exercice 3 :

1. Toutes les fonctions de l'exercice calculent et retournent une valeur. (Calculer une valeur = entrée donnée + fabrication nouveau résultat)
2. La fonction `console.table()` ou `console.log()` calculent et interagit avec l'extérieur en affichant sur le terminal le résultat du calcul.
3. Oui puisqu'elles ne dépendent pas d'une donnée particulière extérieure.

# Question d'observation de l'exercice 4 : 

1. `!==` l'opérateur compare les objets par rapport à leur adresse mémoire. Ils sont différents car la fonction `addPartner` a créé un nouvel objet avec l'opérateur spread, on n'a pas modifié l'objet d'origine.
2. Les équipes conservent leur référence d'origine, seule l'équipe victime de la fonction `addPartner` obtient une nouvelle référence. (réponse -> 4.1)
3. Car l'état change, comme on ne "mute" pas, c'est-à-dire qu'on ne modifie pas l'objet directement, l'opérateur `!==` suffit pour connaître s'il y a eu un changement. (Facilitation plus tard pour React, car comparer toutes les propriétés pourrait s'avérer gourmand, source : doc react.)
4. On pourrait avoir une asymétrie des données (s'il un programme A,B et A modifient sans que B soit renseigner par avant cela pourrait produire des erreurs.)

# Question d'observation de l'exercice 5 : 

5.2 -> "ReferencError : Cannot access 'successState' before initialization."

1. La fonction décrit le résultat à produire selon l'état.
2. On restreint le type par une condition ainsi que leur output empêchant des états non définis donc limitant de multiples des états incohérents.
3. Il est impossible pour les états `loading` et `error` d'avoir les `data`.

# Question d'observation de l'exercice 6 :

1. `T` est une variable de type générique, c'est-à-dire que `T` pourrait être remplacé par le type d'objet voulu au moment de l'appel de la fonction.
2. On s'assure que n'importe quel type d'objet passé possède une propriété `id : number`.
3. Si aucun élément ne correspond à la recherche,la méthode `find()` renvoie `undefined`.

# Question d'observation de l'exercice Tests : 

1. Pour garantir son isolation, sa rapidité et son déterminisme (on exécute en local, pour débugger rapidement, on ne dépend pas d'un réseau extérieur).
2. Une fonction pure est simple à tester, celle-ci ne dépendant que de ses arguments en entrée pour produire une sortie.
3. On vérifier l'absence de modification garantissant qu'on respecte le principe d'immutabilité.

# Question de recul : 

1. `unknown` est plus strict dans son fonctionnement, permettant donc d'effectuer des vérifications dessus.
2. Non, l'assertion n'effectue aucune validation pendant l'exécution, due à `as` n'existe que pour le compilateur TypeScript et disparaît aussitôt que le code est transformé en JavaScript.
3. Les deux utilisent l'union discriminée, `MissionState` utilise `status` pour savoir si on peut accéder à la `data` ou `message`, `safeParse` retourne un objet avec `success` qui vaudra `true` ou `false`
