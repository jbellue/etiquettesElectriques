# Étiquettes électriques

## Qu'est-ce que c'est, à quoi ça sert

Lors de la création d'un tableau électrique, il est important de bien pouvoir identifier quel disjoncteur correspond à quel circuit.
Ce site permet d'imprimer des étiquettes pour un tableau électrique, avec des icônes pour reconnaître facilementles disjoncteurs.

Il existe un logiciel (Semiolog, par Hager) qui permettrait de réaliser ce type d'étiquettes, mais à ma connaissance il ne fonctionne que sous Windows.

## Comment ça marche

- Tout d'abord, choisir le nombre de lignes et de colonnes correspondant au tableau voulu,
- En cliquant sur un élément, on peut :
  - Changer son icône, en cliquant sur une des images en dessous,
  - Changer le texte, en cliquant simplement dessus.
- On peut glisser/déposer une image sur la zone correspondante pour ajouter ses propres images. Attention, plus les images seront lourdes, plus le site sera lent.
- Si le site est lent, la compression automatique des données est désactivable.
- On peut fusionner deux éléments (par exemple pour un interrupteur différentiel) en cliquant sur "Fusionner avec le précédent".
- Le bouton "Séparer" permet de séparer deux éléments fusionnés.
- Le bouton "Suivant identique" permet de copier l'élément sélectionné vers le suivant. Le curseur se mettra directement dans la zone de texte, il suffit de modifier ! C'est très pratique pour la création d'une rangée de radiateurs par exemple.
- On peut exporter le tableau en pdf pour une impression précise (et on peut choisir si on le veut en A3 ou A4, selon la taille du tableau)
- À chaque modification du tableau, la zone de texte tout en bas change. Elle contient une version compressée du tableau.
  - On peut, par exemple, envoyer son contenu par e-mail à quelqu'un pour qu'il puisse regarder, et accepter l'organisation du tableau, ou pour le faire imprimer, etc.
  - En collant un texte dedans, et en cliquant "charger", le tableau présent est remplacé par celui compressé dans la zone de texte
  - le bouton "vers la barre d'adresse" permet d'envoyer le texte dans la barre d'adresse. Au lieu d'avoir simplement l'adresse du site, celle-ci contient maintenant tout le tableau compressé !
  Par exemple, <https://jbellue.github.io/etiquettesElectriques/?data=W1t7InBpY3RvIjoiYmxhbmsucG5nIiwidGV4dGUiOiJBIiwic3BhbiI6M30s3ivJKjDfKtcqdHVtYmxlLWRyeWVyzzFTw6hjaGUtbGluZ2XJPTHMPXdhc2hpbmctbWFjaGluZc9ATGF23T5saWdodM80Q3Vpc2luZSAtIFNhbG9uXG7YeWxsLXNvY2tl0EFHcmVuaWVy3zfRN0V4dMOpcmlldXIgZXN033fTQE1ldWJsZSDkAXhj3z7Ufm50csOp9wEn%2FQHMNN8q%2FwIg3yrfKs4q9AHP5wDZICsgcHJpc2UgdGFibGVhdfgBIt1tMt8q%2FwCXzCpUw6lsw6lydXB05QHx8QF%2BXSz%2FA6FBQ%2F8Dov8Al98qzSr6AjdDaGVtaW75AjnbOeYDZtY39AExU2FsbGUgZGUgYmFpbnMgLSBXQ%2F8C5tN2SW7%2FA2TfQO8AhXJlei1kZS1jaGF1c3P%2FAQXfT8RPw6l0YWfkAqpjaGFtYnJl%2BACg%2FwEf30vSS3PPTEludGVy5wKbcyBvdfsBK%2F8DL98q%2FwJu8gEwdXJwcmVzc2V1%2BQVedGVyLWhlxAfPPEN1bXVsdXPfONI4U09OT0ZGIGPPP%2F8DdP8DdNgqXV0%3D>
  contient le tableau de base. Pratique, pour enregistrer ça en marque page, ou pour le partager !

## Remerciements

L'idée originale vient de Zaz789, et son site est disponible sur <http://mawel.free.fr/etiquettes/> Avec son accord, j'ai réécrit la plupart du code pour ajouter les fonctionnalités qui me manquaient.
Icônes venues de icons8.com, merci !

## Reste à faire

- [ ] Un style CSS acceptable...
- [x] Permettre de désactiver la compression automatique du tableau pour aller plus vite, et avoir un bouton "exporter" ?
- [x] Réorganiser les icônes dans un ordre plus logique