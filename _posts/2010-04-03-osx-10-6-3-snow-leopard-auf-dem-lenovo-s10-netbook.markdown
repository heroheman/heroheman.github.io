---
author: Florenz
comments: true
date: 2010-04-03 16:23:48+00:00
layout: post
slug: osx-10-6-3-snow-leopard-auf-dem-lenovo-s10-netbook
title: OSX 10.6.3 "Snow Leopard" auf dem Lenovo S10 Netbook
wordpress_id: 1381
categories:
- Tutorial
tags:
- 10.6.3
- Anleitung
- Apple
- Enabler
- IBM
- Ideapad
- Installation
- Lenovo
- Loop
- Netbook
- OSX
- S10
- Skype
- Tutorial
- Webcam
---

Mein Netbook "Samantha" läuft jetzt nach einen nervigen Start mit Windows XP und einen überraschend angenehmen Übergang mit [Ubuntu Netbook Remix](http://wiki.ubuntuusers.de/Ubuntu_Netbook_Remix) (Karmic Koala) mit OSX Snow Leopard. Und es war überraschend einfach.
<!-- more -->


Erstmal - warum überhaupt OSX auf dem Netbook installieren? Ganz einfach - es ist bei weitem schneller als Windows XP jemals war. Man könnte annehmen ein Intel Atom Prozessor wäre garnicht schnell genug für OSX, aber falsch, in den letzten Tagen war ich von der Performance mehr als begeistert - es übertrifft sogar meine Ubuntu Installation. Sicherlich könnte man auch Windows 7 auf dem Netbook installieren, welches ja auch sehr schnell und stabil laufen soll - aber da ich nun mal ein Mac Nutzer bin (iMac 24'', yay, liebevoll "Emma" genannt) kommt für mich nichts anderes in Frage.

![]({{ site.baseurl }}/images/2010/04/DSC00366-580x435.jpg)


**ACHTUNG:** _Auch wenn ich diese Anleitung mit besten Gewissen geschrieben habe und versuche so ausführlich wie möglich zu sein, übernehme ich keine Verantwortung für auftretende Fehlfunktionen und Konsequenzen leglicher Art. _

Was benötigt wird:




  * Ein [Lenovo S10 Netbook](http://www.amazon.de/gp/product/B002OOWB0M?ie=UTF8&tag=thebullet-21&linkCode=as2&camp=1638&creative=19454&creativeASIN=B002OOWB0M). Wobei es mit dem [S10e](http://www.amazon.de/gp/product/B002B3XY3O?ie=UTF8&tag=thebullet-21&linkCode=as2&camp=1638&creative=19454&creativeASIN=B002B3XY3O) und [S10-2](http://www.amazon.de/gp/product/B003922YZ0?ie=UTF8&tag=thebullet-21&linkCode=as2&camp=1638&creative=19454&creativeASIN=B003922YZ0) (hier allerdings kein Schlafmodus) auch funktionieren soll.


  * USB Stick mit mind. 8GB


  * Mac OSX Snow Leopard Installations DVD oder .iso Datei. Hier gibt es mehrere Möglichkeiten diese zu besorgen, empfehle aber den Kauf, sollte dieses längerfristig genutzt werden. Bei Amazon bekommt man die [Upgrade DVD für 26 Euro](http://www.amazon.de/gp/product/B001AZ3Y66?ie=UTF8&tag=thebullet-21&linkCode=as2&camp=1638&creative=19454&creativeASIN=B001AZ3Y66), welche bei mir auch für die Neuinstallation funktioniert hat.


  * Einen vorhandenen Mac


  * Den Lenovo S10 Enabler


  * [Aktuelles Lenovo Firmware Update](http://www-307.ibm.com/pc/support/site.wss/MIGR-72939.html)


  * 1,5 - 2 Stunden Zeit



**Was nicht funktionieren wird:** Ethernet. Sorry.
(Stört mich weniger, da bislang immer WLAN vorhanden.)

**Schritt 1: USB Stick vorbereiten**
Zuerst muss der USB Stick formatiert werden (dass hier ein Mögliches Backup erstellt werden sollte, ist wohl schon vorauszusetzen).
Den [Lenovo S10 Enabler 1.1.2](http://www.mediafire.com/download.php?jdytjjdgxyy) runterladen. Im Paket ist eine genaue Anleitung wie man eine nun den USB Stick mithilfe des Festplattendienstprogramms und der Installations CD vorbereitet. Für das Schreiben der ISO Datei auf dem USB Stick sollte aber schon mindestens 90 Minuten eingeplant werden. Anschließend noch den Enabler wie in der Anleitung beschrieben installieren und fertig.
**ACHTUNG: Den Enabler NICHT und auf GARKEINEN Fall auf euren aktuellen OSX System installieren. **

**Schritt 2: Installation**
Ist der USB Stick vorbereitet und die Firmware des Lenovo [auf aktuellen Stand](http://www-307.ibm.com/pc/support/site.wss/MIGR-72939.html) kann es losgehen.
Steckt den USB Stick ein und startet neu. Sobald der Lenovobildschirm aufleuchtet die Tastenkombination Fn+F11 drücken (was die F12 taste simuliert) und im erscheinenden Bootmenü den USB Stick auswählen. Dieser sollte mit den Namen USB HDD angezeigt werden.
Nun sollte der Installationsprozess eingeleitet werden. Folgt den Anweisungen und in 30 - 45 Minuten solltet ihr eine brandneue Snow Leopard Installation haben.

Jetzt könnt ihr einfach über das Systemmenü die Softwareaktualisierung starten, den S10 Enabler nocheinmal installieren, USB Stick entfernen und rebooten. Ihr seid auf den aktuellen Stand. Es sei denn....

**Schritt 3: Fehlerbehebung**
_Infinite Loop_
Solltet ihr hierbei allerdings beim Starten in einen Endlos Loop landen, kann man auch eine vorherige Version des Enablers laden. Ich habe es mit der [Version 1.1.11](http://www.mediafire.com/?ug1imk4mueu) probiert, nachdem der Loop aufgetreten ist. Dann muss leider die Installation nocheinmal durchlaufen werden, und sobald fertiggestellt mit den Systemupdate auch der Enabler 1.1.11 installiert werden.

_Webcam_
Auch etwas was nicht zwingend auftritt, aber bei mir leider so war. Unter iChat funktioniert die eingebaute Lenovo EasyCam tadellos, im Photobooth und Skype leider nicht. Allerdings gibt es hierbei deinen Workaround indem die kostenlose Webcam [CamTwist](http://allocinit.com/index.php?title=CamTwist) installiert wird ([ManyCam](http://www.manycam.com/) soll auch funktionieren, aber nicht ausprobiert).
in CamTwist ein Profil einstellen, in welcher die Easycam ausgewählt wird. Speichern und unter den Einstellungen Skype als Programm zuweisen. In Skype in den Kameraeinstellungen die Kamera auswählen - fertig.

**Ansonsten:**
Was gibt es noch zu sagen - eigentlich habe ich keine Probleme, mir ist allerdings aufgefallen das mein Mikrophon stets an ist.
Auch muss man sich an die geänderte Tastatur gewöhnen. Die Apfeltaste ist jetzt die ALT Taste, ALT ist jetzt die Windows / Haus Taste.
Alle OSX Funktionen scheinen ansonsten tadellos zu funktionieren. Schnell noch anmerken dass sich die Trackpad Einstellungen im Systemeinstellungsmenü ganz unten (SCROLLEN) befinden.
Achja: Das System hält sich für ein Macbook Air.

**Links**
[Netbook OSX Kompatiblitäts Chart - Was funktioniert wo?](http://gadgets.boingboing.net/2008/12/17/osx-netbook-compatib.html)
[Lenovo S10 Enabler Thread im LenovoS10 Board. ](http://www.s10lenovo.com/viewtopic.php?f=33&t=3280)
(Im [Forum](http://s10lenovo.com/viewforum.php?f=15) finden sich auch viele Hilfe Threads für Bugs, empfehlenswert)
[ManyCam](http://www.manycam.com) und [CamTwist](http://allocinit.com/index.php?title=CamTwist)

Falls jemand Anmerkungen hat oder diese Anleitung ausprobiert hat, bitte ich kurz um einen Kommentar. Das ermutigt zum weiteren Schreiben. Jeder braucht Bestätigung.
:)


