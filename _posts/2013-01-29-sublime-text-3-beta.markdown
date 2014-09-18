---
author: Florenz
comments: true
date: 2013-01-29 11:06:04+00:00
layout: post
slug: sublime-text-3-beta
title: Sublime Text 3 Beta
wordpress_id: 2411
categories:
- Blog
- Frontend
tags:
- Beta
- Editor
- Software
- Sublime Text
- Sublime Text 3
---

Mein favorisierter Text Editor Sublime Text geht in die Version 3. In [Sublime Text Blog](http://www.sublimetext.com/blog/articles/sublime-text-3-beta) hat Programmierer Jon Skinner die erste Beta Version, zusammen mit weiteren Informationen, veröffentlicht. Der Download ist allerdings nur für registrierte Benutzer - also für Inhaber eines Sublime Text 2 Lizenz. Deswegen habe ich mal die Beta Version installiert und ausprobiert.





### Features





#### Symbol Indexing





Sublime Text kann jetzt einen Symbol Index aufbauen, was das direkte Springen zu Symbolen und Definitionen vereinfacht. Dies war vorher nur begrenzt möglich, z.B. wenn man bei Goto Anything (Strg + P) in der Suche ein @ Zeichen vorsetzt.
Einen ähnlichen Weg geht das [Goto-Symbol Plugin](https://github.com/gooli/Goto-Symbol) für die Version 2.





[![Goto Symbol in einer CSS Datei in Sublime Text 3]({{ site.baseurl }}/images/2013/01/Bildschirmfoto-2013-01-29-um-11.14.14-580x377.png)]({{ site.baseurl }}/images/2013/01/Bildschirmfoto-2013-01-29-um-11.14.14.png)





#### Pane Management





Das Arbeiten mit mehreren Tabs (oder Panes) bietet jetzt mehr Möglichkeiten. Das Öffnen und Schließen eines neuen Tab- oder Gruppenansicht ist jetzt vereinfacht worden.





>

>
> Working with multiple panes is now more efficient, with commands to create and destroy panes, and quickly move files between panes. You can see the new options under View/Groups, View/Focus Group and View/Move file to Group.
>
>






#### Speed





Sublime Text 2 war schon schnell, aber Version 3 soll noch schneller sein. Das kann ich auch bestätigen - öffne ich ST2 unter OSX, dauert es ca. 3-5 Sekunden. ST3 scheint unmittelbar nach dem Klick offen zu sein.
_Ich muss dazu sagen, dass ich beide Applikationen vorher offen hatte, also wohl noch im Systemspeicher waren, trotzdem bin ich beindruckt._
Plugins sollen angeblich auch das Startverhalten nicht mehr beeinflussen. Hierzu kann ich nichts sagen - Package Control wird _noch_ nicht unterstützt und jetzt alle meine Plugins zu installieren kommt nicht in Frage - hierfür bin ich zu sehr von Package Control verwöhnt.





#### API





Die API basiert jetzt auf Python 3.3. Plugins mit nativen Python Code, sollen nicht mehr den Hauptprozess stören und die ganze Anwendung ist stabiler. Kenne mich mit der Materie zu wenig aus - für Pluginentwickler also die Originalmeldung:





>

>
> Sublime Text now uses Python 3.3 for plugins, and runs them out of process, so any plugins that load native code no longer risk crashing the main Sublime Text process. The API is also fully thread-safe, and provides several callbacks that run asynchronously (e.g., on_modified_async). There are also new API functions, including full access to the project data. Sublime Text 2 plugins will require porting to work with Sublime Text 3, however in most cases the changes will be small.
>
>






#### Ansonsten:





Der komplette Changelog findet [sich hier](http://www.sublimetext.com/3).





### Preis





Vorweg - Sublime Text 3 wird teurer. Kostete die derzeitige Version noch 59$ (_umgerechnet 43€_), werden in Zukunft 70$ (_52€_) verlangt. Laut Skinner die erste Preiserhöhung seit 5 Jahren. Preislich zwar günstiger als die (Mac) Konkurrenz Coda 2 (99 Euro) und Espresso (75 Euro), wird dieser neue Preis trotzdem einige Leute abschrecken.





Auch Sublime Text 2 wird ab jetzt zu [dem neuen Preis erhältlich sein.](https://www.sublimetext.com/buy) Jeder Kauf zum neuen Preis beinhaltet aber automatisch die Lizenz für Version 3. Sublime Text 2 Käufer können den Nachfolger in der Beta Version bis zur Veröffentlichung kostenlos testen. Danach gibt es den Updatepreis von 15 - 30 Dollar, abhängig vom Kaufdatum.





Eine öffentliche Testversion soll es bald geben - ob diese wie der Vorgänger zeitlich unbegrenzt getestet werden kann, bleibt abzuwarten. Persönlich hoffe ich, dass dem so ist - denn auch wenn ich die Testversion unbegrenzt testen konnte, war mir klar, dass ST2 sein Geld wert ist und der Kauf für mich schon moralisch verpflichtend war. Aus Gesprächen mit anderen Nutzern habe ich erfahren, dass ich damit nicht alleine stehe.





### Und?





Die Neuerungen sind bisher lesen sich ganz interessant, hauen mich persönlich aber nicht vom Hocker. Die Startzeit ist beindruckend, soviel ist sicher, aber für ein Upgrade fehlen mir persönlich noch einige Killer Features. Da es aber erst der Beginn der Beta ist, ist sicherlich noch mit einigen hübschen Dingen zu rechnen. Die letzte Beta hat in meiner Erinnerung 1,5 Jahre gedauert. Ich bleib gespannt.





### Links







  * [Sublime Text 3 Ankündigung](http://www.sublimetext.com/blog/articles/sublime-text-3-beta)


  * [Sublime Text 3 Beta Download und Changelog](https://www.sublimetext.com/3)



