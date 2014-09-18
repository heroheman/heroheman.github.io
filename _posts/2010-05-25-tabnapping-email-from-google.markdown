---
author: Florenz
comments: true
date: 2010-05-25 23:21:26+00:00
layout: post
slug: tabnapping-email-from-google
title: 'Tabnapping: "Email from Google"'
wordpress_id: 1567
categories:
- Blog
tags:
- Gmail
- Javascript
- Phishing
- Tab
- Tabnapping
---

Interfacedesigner [Aza Raskin](http://en.wikipedia.org/wiki/Aza_Raskin) hat auf [seinen Blog](http://www.azarask.in/blog/post/a-new-type-of-phishing-attack/) auf eine neue Phishing Methode hingewiesen. [Tabnapping.](http://krebsonsecurity.com/2010/05/devious-new-phishing-tactic-targets-tabs/) Und nachdem ich seinen kurzen Screencast gesehen habe, denke ich dass ich auch mal warnen sollte, diese Methode ist übel und könnte gefährlich werden. Wo man bislang auf kuriose Paypalseiten gelockt wurde, welche meist bereits schon an einer kuriosen URL oder unglaublichen Rechtschreibfehler, meist einfach auch einfach nur einer fehlerhaften Übersetzung spielend leicht erkannt werden, geht Tabnapping professioneller vor.

**Die Vorgehensweise - ** Wir sind auf einer normalen Webseite oder Blog, und wechseln den Tab. Javascript entdeckt, dass der Tab schon länger ausserhalb des Fokus liegt und wechselt sein Favicon und seinen Inhalt unbemerkt auf eine gefälschte Google-Account Login Oberfläche. Wenig später sieht der User diesen Fake-Gmail-Tab, vergisst dass sich hier vorher eine ganz andere Seite befunden hat und meldet sich ohne sich was dabei zu denken nocheinmal mit seinen Daten an. Da hier das Fenster scheinbar ohne Zutun des Users offen ist, er es somit passiv geöffnet hat, fällt der Kontrollblick auf die URL Leiste ganz weg, es ist eine Prozedur welche wir öfters ohne Nachdenken durchführen. Nach dem Anmelden landen wir dann auf unserer Gmailoberfläche (wo wir nie abgemeldet waren) und erfahren erst dass wir unsere Daten rausgegeben haben, wenn es zu spät ist. 


<!-- more -->
Auf der [Artikelseite](http://www.azarask.in/blog/post/a-new-type-of-phishing-attack/) hat Raskin das gleich mal demonstriert. Ruft den [Link](http://www.azarask.in/blog/post/a-new-type-of-phishing-attack/) auf, wechselt den Tab und wartet ein paar Sekunden. Ihr seht dass sich der Tab ändert. 

Nun könnte man denken, wenn sich eine Seite öffnet wo ich garnicht angemeldet bin, werde ich den Braten wohl riechen. Kombiniert man das ganze mit [CSS History Mining](http://www.azarask.in/blog/post/socialhistoryjs/) (Eine schöne Seite welche es ganz gut verdeutlicht ist [startpanic.com](http://startpanic.com/), _klickwert_), kann ein Script schnell rausfinden ob ihr in letzter Zeit Facebook, Twitter oder eine andere Seite aufgerufen habt und eine dementsprechende Seite auf einen nicht-fokussierten Tab öffnen. 

Raskin empfiehlt für den Firefox den [Account Manager](http://hacks.mozilla.org/2010/04/account-manager-coming-to-firefox/) _(und verweist auch auf seine Wichtigkeit, sowie dass die üblichen Username/Passwort Sicherungsmethoden wohl nicht mehr wirklich wirksam sind)_. Ansonsten könnte man das NoScript Addon installieren (für FF und Chrome). Chrome und Safari zeigen im übrigen keine geänderten Favicons an, werden aber auch umgeleitet. 


![](http://farm3.static.flickr.com/2128/1859812082_b66bb1e637.jpg) 
(Fotoquelle: [wit on Flickr](http://www.flickr.com/photos/-wit-/1859812082/))

