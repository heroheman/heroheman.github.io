---
author: Florenz
comments: true
date: 2013-05-11 16:42:23+00:00
layout: post
slug: tiny-tiny-rss
title: Tiny Tiny RSS
wordpress_id: 2585
categories:
- Blog
- Tools
- Tutorial
tags:
- Android
- App
- Client
- Feed
- Hosting
- RSS
- TT-RSS
- Uberspace
---

Dass mich das Ableben des Google Reader etwas getroffen hat, konnte man vielleicht an diesem Beitrag vielleicht bereits erkenne. In der Zwischenzeit habe ich viel ausprobiert und getestet und bin, wie am Titel dieses Beitrages zu erkennen, bei [Tiny Tiny RSS](http://tt-rss.org/redmine/projects/tt-rss/wiki) (TT-RSS) gelandet.





### Hosting und Installation





Zunächst sollte erwähnt werden, dass TT-RSS ein gehosteter Service ist. Es sollte also ein Server mit PHP 5.3 und einer MySQL Datenbank vorhanden sein. Zwar ist PHP 5.3 noch nicht überall installiert, sollte bei den meisten Anbietern nach kurzer Anfrage verfügbar sein (Bei [All-Inkl.com](http://all-inkl.com) hat dieses ca. 3 Stunden gedauert). 
Eine andere Möglichkeit - für die ich mich auch entschieden habe: [uberspace.de](http://www.uberspace.de).





Uberspace bietet einen exzellenten Hosting Service mit fast unbegrenzen Möglichkeiten. Einen schnellen Server, SSH Zugang und dass zu einem sehr fairen Preis: _Zahl was du willst._ (+ einen Testmonat).





Dieser Service gefällt mir inzwischen so gut, dass ich in den nächsten Wochen wohl komplett umziehen werde.





Für die Installation steht im Uberspace Wiki eine [Anleitung bereit](https://uberspace.de/dokuwiki/cool:ttrss). Darum werde ich hier auch nicht wirklich drauf eingehen.





**Die Kurzfassung (direkt aus dem Wiki, Installation im Beispielordner `/feeds`:**




    
    <code>//Neueste TT-RSS Version ziehen
    curl --silent --location https://github.com/gothfox/Tiny-Tiny-RSS/archive/1.7.8.tar.gz | tar -xzf -
    // In den Ordner Feeds verschieben
    mv Tiny-Tiny-RSS-1.7.8 feeds
    // In selbigen Ordner wechsen...
    cd feeds
    // ... und SQL Schema automatisch in deine Uberspace Datenbank importieren.
    mysql `id -nu` < schema/ttrss_schema_mysql.sql
    
    // Anschließend die Konfiguration kopieren und umbenennen...
    cp config.php-dist config.php
    // ... und bearbeiten:
    nano -w config.php
    </code>





Hier die Datenbankeinstellungen unter DB_TYPE (mySQL), DB_HOST(localhost), DB_USER (Username), DB_NAME (Datenbankname), DB_PASS (Passwort) anpassen. 
Genaueres findet ihr im [Uberspace WIKI](https://uberspace.de/dokuwiki/cool:ttrss). Ausserdem auch automatische Feed Aktualisierung, Plugins und Import.





**Der Zeitaufwand beträgt etwa: 15 Minuten.**





### Themes & Plugins





TT-RSS bringt bereits ein Theme mit, welche sehr an den klassischen Google Reader erinnert. Ansonsten gibt es im TT-RSS Forum eine sehr unübersichtliche [Sammlung](http://tt-rss.org/forum/viewforum.php?f=22) an Themes, z.B. [GReaderish](http://tt-rss.org/forum/viewtopic.php?f=22&t=1990&sid=49139b4b9e803a25413b183aa32675e2), [Google Reader (modern)](http://tt-rss.org/forum/viewtopic.php?f=22&t=1287&sid=49139b4b9e803a25413b183aa32675e2), [Simple Grey](http://tt-rss.org/forum/viewtopic.php?f=22&t=1623&sid=49139b4b9e803a25413b183aa32675e2), [Mountain Lion](http://tt-rss.org/forum/viewtopic.php?f=22&t=1826&sid=49139b4b9e803a25413b183aa32675e2), [3 Col Gallery](http://tt-rss.org/forum/viewtopic.php?f=22&t=1799&sid=49139b4b9e803a25413b183aa32675e2), [Another Google Reader Theme](http://tt-rss.org/forum/viewtopic.php?f=22&t=1574). 
Bei mir läuft übrigens "Mountain Lion", aus dem einfachen Grund weil ich große Typo mag. Ansonsten einfach das Theme.css (+ Ordner) in den `/theme/` Ordner ziehen und in den Einstellungen auswählen.





Mit Plugins verläuft es ähnlich, einige sind bereits vorinstalliert und müssen nur noch per Checkbox aktiviert werden (bzw. bei einigen in der config.php hinzugefügt werden). Ansonsten mal [hier](http://tt-rss.org/redmine/projects/tt-rss/wiki/Plugins) oder [hier](http://tt-rss.org/forum/viewforum.php?f=22) gucken und in euren `/plugins/` Ordner ziehen.





### Apps





Eigentlich dass wichtigste Thema - mobile Applikationen. Der auch für mich bevorzugte Weg des Lesens. Es gibt







  * eine [TT-RSS App](https://www.google.de/url?sa=t&rct=j&q=&esrc=s&source=web&cd=4&cad=rja&ved=0CFgQFjAD&url=https://play.google.com/store/apps/details?id=org.fox.ttrss&hl=de&ei=VHGOUaOLIIfWtAaxwIHADA&usg=AFQjCNFoPP2cpRrqn-qXiXYAi_gd8ERopA&sig2=bvRxjYDvRugkkjiwlXXMhQ&bvm=bv.46340616,d.Yms) für Android


  * YATTRSSC für [Android](https://play.google.com/store/apps/details?id=org.andreafortuna.yattrssc&hl=de) und iOS (sieht mir aber sehr nach jQuery Mobile aus)


  * [GReader Pro](http://greader.co/beta) - Eine Betaversion, noch nicht im Play Store erhältich





Desweiteren bringt TT-RSS auch gleich ein mobiles Layout. Dieses unter Plugins aktivieren. Ich denke in nächster Zeit werden noch viele weitere Applikationen auf den Markt kommen. Bislang fahre ich aber mit GReader Pro sehr gut - ärgere mich sogar, dass ich schon nicht viel früher auf diese App umgestiegen bin.





### Warum





Ich habe den Google Reader hauptsächlich als Sync Dienst genutzt, mit dem Vorteil dass gleich eine performante App mitgeliefert wird, aber man nicht an dieser gebunden ist. Zwar hab ich mich auch an Feedly versucht, die sicherlich mit Geschwindigkeit überzeugen, aber ich mich mit der Android App einfach nicht anfreunden konnte. 
Zu bunt, zu wenig anpassbar und eingeschränkt und zu unübersichtlich. 
TT-RSS aber bietet mir genau dass was ich wollte: Anpassbarkeit, Offenheit und bessere Kontrolle. Und im Zusammenspiel mit den Dienst von Uberspace (ehrlich, guckt die euch an - die Jungs verdienen jeglichen Support) macht es echt Spass.



