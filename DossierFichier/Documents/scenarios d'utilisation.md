## Partie livreur 

### Scénario 1 : Consultation et exécution d’une tournée 

-  **Contexte** : Un livreur commence sa journée en vérifiant ses livraisons. 

-  **Actions**: 

1. Accès à l’application pour consulter la liste des livraisons de la journée. 

2. Suivi de l’itinéraire proposé avec navigation intégrée. 

3. Notifications automatiques envoyées aux clients lors de l’arrivée. 

**Résultat attendu** : Le livreur termine sa tournée en respectant les plages horaires prioritaires. 

 
 

**Scénario 2 : Gestion des imprévus** 

• **Contexte** : Un livreur rencontre un problème, comme l’absence d’un client. 

• **Actions** : 

1. Signalement de l’imprévu dans l’application (motif et photo si nécessaire). 

2. Proposition d’options pour replanifier la livraison (plus tard dans la journée ou un autre jour). 

3. Validation de la replanification par le planificateur. 

• **Résultat attendu** : Le colis est reprogrammé pour une livraison ultérieure sans générer d'erreur administrative. 

 

 

**Cas 2: Un accident empêche un livreur de poursuivre sa tournée** 

**Contexte :** 

Pendant une tournée, un livreur est impliqué dans un accident de voiture mineur. La camionnette est inutilisable et la tournée ne peut pas être terminée. 

**Déroulé :** 

Le livreur utilise l’option "Signalement d’urgence" sur l’application pour informer le planificateur de l’accident et de l’état du véhicule. 

Le logiciel identifie automatiquement l’équipe la plus proche et propose une réattribution des colis restants. 

Le planificateur valide et notifie l’équipe proche de venir récupérer les colis. 

Les colis sont divisé en 2 ou 3 zones vers différents livreurs selon leurs positions/zone (un algo kicks in to optimise the déplacements) 

Le livreur accidenté reste sur place pour attendre l’assistance tandis que ses colis sont transférés à l’équipe en renfort. 

**Résultat attendu :** 

Incident signalé au planificateur, retard pour les livraisons dans la zone donner 

Le livreur impacter (Bob)  

Les livraisons critiques sont effectuées sans interruption majeure, et le livreur accidenté reçoit l’aide nécessaire. 

 

Cas 3: Le client refuse le colis pour une erreur de contenu 

**Contexte :** 

Un livreur arrive chez un client, mais celui-ci refuse le colis, affirmant qu’il ne correspond pas à sa commande. 

**Déroulé :** 

Le livreur ouvre l’application et sélectionne "Signaler un problème". 

Il choisit l’option "Refus de livraison" et décrit brièvement la raison donnée par le client. Il prend également une photo du colis pour preuve. 

Le logiciel envoie l’information au planificateur et enregistre l’incident. 

Le colis est marqué comme "à retourner au dépôt" et retiré de la tournée active. 

 

**Résultat attendu :** 

Le problème est documenté, le client est informé qu’un suivi sera effectué, et la tournée se poursuit sans délai supplémentaire. 

 

 

**Livreur Interrogation, Eventuels Imprévus/Risque:** 
 

a- Une tablette pour chaque livreur d'une même équipe 

b- Pour valider une livraison effectuée, code de validation connu par le client seul ou QRD?, mail de notification? 

--------------------------------------------------------------------------------------------------------------------- 

 

 

## Partie planificateur 

**Scénario 1 : Organisation des équipes de livreurs** 

• **Contexte** : Un planificateur accède au logiciel le matin pour préparer les tournées. 

• **Actions** : 

Voire la liste des livreurs disponibles et création de N équipes de livreurs en fonction de leurs disponibilités de la journée concernée.  

Visualisation de la liste des colis pour la journée.  

Utilisation d’une carte pour visualiser les zones de livraison et optimiser les trajets  

Repartire les colis en zones (tournées) de livraisons en tenant compte des contraintes de plages horaires des clients et optimiser ces tournées/trajets.  

 Affectater à chaque tournée une équipe chacune.  

• **Résultat attendu** : Les équipes reçoivent leurs affectations, et les trajets sont optimisés pour minimiser les coûts. 

 

 

**Scénario 2 : Suivi en temps réel des tournées** 

• **Contexte** : Pendant la journée, le planificateur surveille les livreurs en cours de tournée. 

• **Actions**: 

1. Consultation d’une carte avec la position GPS des livreurs. 

2. Identification des colis livrés et des éventuels retards. 

3. Réaffectation des colis en cas d’imprévu (par exemple, un livreur bloqué dans un embouteillage) et modification urgent des trajets. 

• **Résultat attendu** : Les retards sont minimisés, et les clients reçoivent leurs colis dans les délais. 

 

 

**Exemple:** 

Marie est la planificatrice d'un entrepôts Mobilis à Crolles. 
Elle a 10 livreurs en disposition. 
 
Elle doit organiser les équipes afin de minimiser le temps des trajets et la charge de travail des livraisons. 
 
Après l'identification de Marie sur le logiciel ,elle peut consulter la liste des livreurs et le nombre de colis disponible en stock. 
 
A l'aide de logiciel , elle peut faire une répartition automatique aléatoire ou selon les affinités entre les livreurs , en des équipes(2 livreurs/camion) mais non finalisées. 
Elle doit vérifier la cohérence de la répartition des équipes si elle est convenable ou pas, et voir si y'a des changements à faire avant de finaliser la répartition.   
 
Une fois les équipes constituées, le logiciel l'aide à trouver une répartition des tournées de façon aléatoire ou optimale.  
 
Grace  au logiciel , elle peut faire une affectation des trajets aux équipes de manière automatique ou optimisé en fonction des zones et de l'efficacité des livreurs. 
 
// Contrainte en BONUS : au niveau de nombres de colis par client , un même client peut avoir 0 , 1 ou plusieurs colis 
Gestion des imprévus // 

 

**Planificateur Interrogation, Eventuels Imprévus/Risque**: 

 

 Problème 1: 

Après la répartition automatique des équipes , Marie constate que le nombre de livreurs présents est diffèrent du nombre affiché sur le logiciel et qu'un livreur est absent. 
Marie est face à 4 choix : 
1/Soit le livreur rentre chez lui et son trajet sera répartie sur les autres équipes , d'où une augmentation en charge de travail et de temps de livraison. 
2/Soit le livreur doit bosser seule et faire la livraison sans aide, d'où un retard est "probable" ( a voir) 
3/Soit elle intègre le livreur dans une des équipes et divise aussi le trajet sur les équipes. 
4/Soit elle annule complètement la livraison de l'équipe concernée et sera reportée au jour suivant. 
 
Problème 2 : 
Apres la répartition des équipes , Marie constate que 2 livreurs de 2 équipés différentes sont absents. 
Marie est face à 2 choix : 
1/ Soit elle annule les 2 livraisons complètement , et envoi un mail aux clients en s'excusant de la gêne occasionnée. 
2/Soit elle force les 2 livreurs à faire la livraison sans aide, même s'il y aura des retards. 
 
 

 
 
 


Questions 

Planificateur: 

 

Planification pour le lendemain : 24H avant  (le client recevra la notif de sa commande à livrer 24h avant au moins)? 48h?  

Conclure à 8h max ?     12h max (le client recevra la notif de sa commande à livrer pas avant 12h00) ? 

Planification pour une date choisie du futur (après demain, après après demain) ?: exemple il est à vendre 23 decembre et je veux planifier pour mardi 27 decembre. 

Mot de pass oublié 

J'ai des livreurs disponibles pour le jour à planifier 

Je n'ai quun seul livreur pour le jour à planifier 

Je nai pas de livreur disponible pour le jour à planifier 

J’ai 8+1 livreurs disponibles pour le jour à planifier 

  

J’ai une seule livraison à faire (le jour n'est pas encore choisi, cest au plannif de le choisir) 

J’ai plusieurs livraisons à faire 

 

 

Livreur: 

Le livreur ou le planificateur ont il le droit de se créer eux mème leur compte? Si oui un livreur ou planificateur peut en  avoir plusieurs? Comment garantir un unique compte pour chaque. 

 
