Scénario 1 : Planification des livraisons 
 
 
Contexte : 
• Date : 13 décembre 2024. 
• Planificatrice : Alice. 
• Données : 150 commandes en stock pour la journée, capacité maximale du dépôt : 120 commandes. 
• Demandes spéciales : 
• John a payé un supplément pour une livraison avant 10h. 
• Emma a une priorité standard, sans exigences particulières. 
• Le colis de Bob est volumineux, a déjà été retardé deux fois, et a été créé le 10 décembre (il y a 3 jours). 
 
 
Processus : 
1. Filtrage des commandes par le système : 
• Le système génère automatiquement deux listes : 
• Liste 1 : Commandes du jour à livrer 
• Les commandes créées jusqu’au 12 décembre inclus sont sélectionnées. 
• Règles de tri : les commandes créées les moins récentes apparaissent en haut (exemple : une commande du 10 décembre sera prioritaire par rapport à une commande du 11 décembre). 
• Les 120 premières commandes sont retenues. Les 30 restantes sont marquées comme retardées une fois, puis déplacées hors de la liste 1. 
• Liste des commandes en attente : 
• Comprend les commandes non incluses dans la liste 1 et celles marquées comme retardées. 
• Règles de tri : 
• Les commandes créées plus tôt sont prioritaires. 
• Plus le nombre de retards est élevé, plus la commande est prioritaire. 
• Les commandes payantes sont prioritaires par rapport aux commandes standards. 
2. Ajustement des commandes par la planificatrice : 
• Alice accède à l’interface commande. 
• Vue gauche : Liste des commandes du jour. 
• Vue droite : Liste des commandes en attente, où figure la commande de Bob : 
• Date de création : 10 décembre. 
• Nombre de retards : 2. 
• Alice : 
• Sélectionne la commande avec la priorité la plus basse dans la liste du jour et clique sur « Retirer ». 
• Sélectionne la commande de Bob dans la liste en attente et clique sur « Ajouter ». 
• Le système met automatiquement à jour la liste des livraisons du jour. 
3. Validation du plan : 
• Alice vérifie que la liste finale inclut toutes les commandes prioritaires (comme celle de John). 
• Elle clique sur le bouton valider, verrouillant ainsi le plan et envoyant des notifications aux clients. 
 
 
Contraintes : 
• Une fois le plan validé, les clients ne peuvent plus modifier l’heure de réception des commandes. 
 
 
Résultat : 
• Le système filtre et organise les commandes de manière optimale, équilibrant les nouvelles commandes et celles en attente. 
 
 
 
 
Scénario 2 : Planification des itinéraires 
 
 
Contexte : 
• Date : 13 décembre 2024. 
• Planificatrice : Alice. 
• Données : 120 commandes du jour à livrer, y compris celle de John avec une exigence de livraison avant 10h. 
 
 
Processus : 
1. Identification des commandes spéciales : 
• Alice ouvre l’interface de planification des itinéraires. 
• Le système met en évidence les commandes nécessitant une attention particulière. 
• Les détails de la commande de John incluent : 
• Adresse : une rue et un code postal précis. 
• Exigence : livraison avant 10h. 
2. Génération des itinéraires : 
• Alice saisit l’adresse de John et l’heure de livraison souhaitée, puis clique sur « Générer un itinéraire ». 
• Le système : 
• Planifie l’itinéraire prioritaire pour la commande de John. 
• Optimise l’itinéraire pour inclure les autres commandes de la même zone. 
• Une fois la planification terminée, Alice peut consulter : 
• Une carte des itinéraires. 
• Une liste des colis inclus dans chaque itinéraire (numéros de commande, adresses, exigences). 
3. Attribution des tâches : 
• Le système affiche les informations des quatre livreurs (abcd), y compris leurs photos et coordonnées. 
• Alice vérifie la correspondance entre itinéraires et colis, puis clique sur « Assigner les itinéraires ». 
• Le système attribue les itinéraires aux livreurs de manière aléatoire et synchronise les informations sur leurs applications mobiles. 
 
 
Contraintes : 
• La version actuelle du système n’inclut pas encore l’optimisation en fonction de la familiarité des livreurs avec les zones (amélioration prévue dans une version ultérieure). 
 
 
Résultat : 
• Les itinéraires sont planifiés efficacement, les commandes spéciales sont prioritaires, et les livreurs reçoivent des instructions claires. 
 
 
Scénario 3 : Chargement des colis 
 
 
Contexte : 
• Date : 14 décembre 2024. 
• Livreur : Oliver. 
• Situation particulière : 
• Le colis d’Emma est volumineux, avec une priorité standard. 
• Le colis de Bob est également volumineux, mais avec une priorité élevée et 2 retards. 
 
 
Processus : 
1. Vérification de la capacité du véhicule : 
• Oliver commence à charger les colis. 
• Le système signale que la capacité restante du véhicule est insuffisante pour contenir à la fois les colis d’Emma et de Bob. 
• Les détails des colis sont affichés : 
• Emma : priorité standard, colis volumineux. 
• Bob : priorité élevée, 2 retards. 
2. Retardement des colis à faible priorité : 
• Oliver utilise l’application mobile pour signaler un retard. 
• Il scanne le colis d’Emma et sélectionne l’option « Retarder ». 
• Le système : 
• Enregistre une augmentation du compteur de retards pour la commande d’Emma (+1). 
• Met à jour l’état du colis comme « En attente au dépôt ». 
3. Chargement des colis prioritaires : 
• Oliver charge en priorité le colis de Bob dans le véhicule. 
• L’application met à jour automatiquement l’état de la commande de Bob comme « En cours de livraison ». 
 
 
Résultat : 
• Le colis de Bob, avec une priorité plus élevée, est correctement pris en charge. 
• Le colis d’Emma est reporté à la prochaine livraison. 
 
 
 
 
Scénario 4 : Suivi des équipes 
 
 
Contexte : 
• Date : 14 décembre 2024. 
• Planificatrice : Alice. 
• Situation : Suivi des équipes de livraison (abcd, réparties en binômes). 
 
 
Processus : 
1. Consultation des équipes : 
• Alice ouvre l’interface « Suivi des équipes ». 
• Le panneau gauche affiche : 
• Les équipes (binômes) avec les noms et photos des livreurs. 
• Les itinéraires assignés, détaillant les clients et horaires prévus. 
2. Localisation en temps réel : 
• Alice saisit « Équipe 1 » dans le champ de recherche, puis clique sur « Suivre ». 
• Une carte interactive affiche l’emplacement actuel de l’équipe, son itinéraire et son historique récent. 
3. Vérification et intervention : 
• Si une équipe prend du retard ou dévie de son itinéraire, Alice reçoit une alerte. 
• Elle peut communiquer directement avec les livreurs via une fonction de messagerie intégrée pour obtenir des détails ou donner des instructions. 
 
 
Résultat : 
• Alice suit l’avancement des livraisons en temps réel et intervient rapidement en cas de besoin. 
 
 
 
Scénario 5 : Tournée de livraison d’une équipe de livreurs 
 
 
Contexte : 
• Date : 14 décembre 2024. 
• Livreurs : Marc et Julien. 
• Application : Interface mobile synchronisée en temps réel. 
• Situation : Une équipe de deux livreurs effectue une tournée classique. 
 
 
Étapes : 
1. Connexion et préparation : 
• Marc se connecte à l’application mobile en entrant son nom d’utilisateur et son mot de passe. 
• Sur la page principale, il voit les informations suivantes : 
• Le nom et les coordonnées de son coéquipier Julien. 
• La liste des commandes du jour, incluant les adresses, les numéros de téléphone et les spécificités (par exemple : livraison urgente). 
• Les deux livreurs montent dans le véhicule prêt à partir. 
2. Livraison normale : 
• Notification client : À l’approche d’une adresse (5 minutes avant), le livreur non conducteur utilise l’application pour envoyer un SMS automatique au client. 
• Interaction client : Une fois sur place, le livreur non conducteur descend, scanne le colis et contacte le client si nécessaire. 
• Confirmation : Le client réceptionne le colis et signe électroniquement via l’application. 
• Pendant ce temps, le conducteur prépare l’itinéraire pour la prochaine livraison. 
3. Fin de la tournée : 
• Après avoir terminé toutes les livraisons, l’équipe retourne à l’entrepôt. 
• Les livreurs garent leur véhicule, se déconnectent de l’application, et clôturent leur journée. 
 
 
Résultat : 
• Les colis sont livrés efficacement, avec confirmation électronique pour chaque client. 
• L’équipe travaille de manière fluide grâce à une répartition claire des rôles et un outil synchronisé. 
• Toutes les données sont enregistrées automatiquement dans le système pour suivi administratif. 
 
 
 
Scénario 6 : Client absent lors de la livraison 
 
 
Contexte : 
• Date : 14 décembre 2024. 
• Livreur : Julien. 
• Situation : Julien se rend chez un client pour livrer un colis, mais ce dernier est absent. 
 
 
Étapes : 
1. Arrivée sur le lieu de livraison : 
• Julien arrive à l’adresse du client, descend du véhicule, et scanne le colis pour vérifier qu’il correspond bien à la commande. 
2. Constat d’absence : 
• Julien attend quelques minutes devant la porte du client. 
• N’ayant pas de réponse, il utilise l’application mobile et sélectionne l’option « Client absent ». 
3. Signalement et traitement : 
• Julien scanne à nouveau le colis pour associer l’information d’absence au bon paquet. 
• Il confirme en appuyant sur le bouton « Soumettre ». 
• Le système enregistre automatiquement une augmentation du compteur de retards pour la commande. 
• L’état du colis est mis à jour comme « Retour à l’entrepôt ». 
4. Retour à l’entrepôt : 
• À la fin de la tournée, Julien retourne le colis à l’entrepôt  
 
 
Scénario 7 : Gestion des exceptions - Embouteillages 
 
 
Contexte : 
• Date : 14 décembre 2024. 
• Livreur : Benoît. 
• Situation : Embouteillage sur l’itinéraire prévu, retardant la livraison des commandes dans la zone D. 
 
 
Processus : 
1. Signalement d’un embouteillage : 
• Benoît ouvre l’application mobile et clique sur le bouton « Signaler un problème ». 
• Il sélectionne l’option « Embouteillage » et renseigne les informations suivantes : 
• Position actuelle : rue X, zone D. 
• Prochaine destination : adresse du client Y. 
• Zone d’embouteillage connue : carrefour Z. 
2. Recalcul de l’itinéraire : 
• Benoît soumet les informations, et le système : 
• Identifie les zones d’embouteillage. 
• Recalcule un itinéraire alternatif évitant ces zones. 
• Le nouvel itinéraire est affiché dans l’application mobile. 
3. Notification des clients : 
• Le système envoie automatiquement une notification aux clients concernés, les informant du retard estimé. 
• Alice (la planificatrice) reçoit également une alerte via l’interface de gestion des tâches et peut suivre l’évolution de la situation. 
 
 
Résultat : 
• Le livreur suit un itinéraire mis à jour, minimisant le retard. 
• Les clients sont informés à l’avance, améliorant leur expérience. 
 
 
Scénario 8 : Refus des colis par le client 
 
 
Contexte : 
• Date : 14 décembre 2024. 
• Livreur : Céline. 
• Situation : Le client refuse de signer et de réceptionner le colis, déclarant qu’il ne correspond pas à la commande. 
 
 
Processus : 
1. Signalement du problème : 
• Céline ouvre l’application mobile et sélectionne l’option « Signaler un problème ». 
• Elle choisit « Contenu de commande incorrect » et renseigne : 
• Description : le client refuse le colis pour cause de contenu erroné. 
• Preuves : elle télécharge des photos du colis (emballage, contenu visible). 
• Le système enregistre automatiquement l’incident et marque le colis comme « Problème de commande ». 
2. Retour du colis : 
• Le colis est retiré de l’itinéraire actif de Céline. 
• Le rapport d’incident est transmis au service client pour vérification. 
3. Mise à jour de l’état de la commande : 
• Si le problème est confirmé : 
• Le système met la commande en statut « À corriger » et demande une intervention des équipes internes. 
• Si le problème est réfuté : 
• Le statut « Problème de commande » est supprimé, et la commande est reprogrammée pour une nouvelle livraison. 
 
 
Résultat : 
• L’incident est documenté en temps réel, garantissant une traçabilité. 
• Le problème est transmis au bon service pour résolution, et le colis est correctement traité. 
 
 
Scénario 9 : Gestion des exceptions - Route fermée 
 
 
Contexte : 
• Date : 14 décembre 2024. 
• Livreur : Lucas. 
• Situation : Une route est fermée, empêchant Lucas de livrer au client suivant. 
 
 
Processus : 
1. Signalement d’une route fermée : 
• Lucas ouvre l’application et clique sur « Signaler un problème ». 
• Il sélectionne « Route fermée » et remplit les informations nécessaires : 
• Position actuelle : adresse A. 
• Prochaine destination : adresse B. 
• Détails : description de la fermeture (travaux, accident, etc.). 
2. Mise à jour des données par le système : 
• Le système marque la route comme « Indisponible » dans sa base de données. 
• Les informations sont synchronisées avec tous les utilisateurs (planificatrice et autres livreurs). 
3. Recalcul de l’itinéraire : 
• Un itinéraire alternatif est généré, contournant la route fermée. 
• Lucas reçoit la nouvelle route via son application mobile. 
• Alice est notifiée et peut vérifier que la nouvelle route est cohérente. 
 
 
Résultat : 
• La route fermée est évitée grâce à une mise à jour en temps réel. 
• La livraison se poursuit avec un itinéraire adapté. 
 
 
Une contrainte : les livreurs et les planificateurs disposent chacun de leur propre compte, et l’unicité des comptes est garantie par un code employé spécifique à chaque utilisateur. Concernant la récupération de mot de passe, je ne suis pas certain que nous disposions de la technologie nécessaire pour permettre une récupération via e-mail ou SMS. Par conséquent, cette fonctionnalité ne sera pas prise en compte pour l’instant.
