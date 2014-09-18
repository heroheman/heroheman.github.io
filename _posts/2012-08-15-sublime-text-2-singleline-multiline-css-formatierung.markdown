---
author: Florenz
comments: true
date: 2012-08-15 10:33:18+00:00
layout: post
slug: sublime-text-2-singleline-multiline-css-formatierung
title: 'Sublime Text 2: Singleline / Multiline CSS Formatierung (Update)'
wordpress_id: 2059
categories:
- Blog
- Frontend
- Tools
tags:
- CSS
- Formatting
- Github
- plugin
- Sublime Text 2
---

**Yet another Sublime Text 2 Post.**





Vor einigen Monaten war ich in der Situation, dass die Projektvorgaben die [Singleline](http://css-tricks.com/single-line-vrs-multi-line-css/) Formatierung vorgaben. Nun kann man sich darüber streiten, ob dieses nun besser oder schlechter lesbarer ist - Meine Meinung: Für schnelles Scannen der Selektoren ist es sehr übersichtlich und platzsparend, beim Bearbeiten der Eigenschaften hingegen ist es nur anstrengend (eine solche allgemeine Vorschrift in einer Coding Guideline halte ich auch im Allgemeinen für falsch).





Da ich nun hier massenhaft auf dieses Problem gestoßen bin, hielt sich meine Begeisterung in Grenzen. Abhilfe schaffte es ein [Thread im Sublime Text Forum](http://www.sublimetext.com/forum/viewtopic.php?f=6&t=2237), wo jemand nach einer Möglichkeit gesucht hat, schnell zwischen Singleline und Multiline Formatierung (und zurück) zu wechseln, mit Tipps wie man dieses am Besten in einen Plugin verwursten könnte. Das habe ich dann auch getan und <strike> zu meiner Überraschung</strike> hat es auf Anhieb funktioniert. Und genau dieses Plugin ist auch noch heute meine meist genutzte Funktion. Zu finden [hier auf Github](https://github.com/heroheman/Singleline)*.





### Installation







  1. Klont das Git Paket entweder direkt in euren Package Ordner (erstellt dort am besten einen Ordner mit dem Namen "Singleline") oder ladet euch die .zip von Github und installiert es an die selbige Stelle


  2. <strike>Unter `Preferences -> Keybindings User` folgende Zeile hinzufügen: `{"keys":["ctrl+shift+j"],"command":"toggle\_single\_line_css"}`</strike>





Nicht mehr nötig, da das Plugin jetzt eine Default Key-Definition hat.






### Benutzung





Im Stylesheet (egal ob CSS, Less oder SCSS) den entsprechenden Bereich markieren, <strike>STRG+SHIFT+J</strike> STRG+ALT+J drücken. Fertig. Dürfte dann ungefähr so aussehen:





![Wechsel: Singleline / Multiline]({{ site.baseurl }}/images/2012/08/st-singleline.gif)





**Edit** Desweiteren wurde die jetzt auch von Speilberg0 eine "Expand Selection" Möglichkeit eingebunden. Wenn sich der Cursor in einem CSS Selektor befindet, kann mit `STRG+SHIFT+R` dieser automatisch markiert werden. Dies erspart das Markieren mit der Maus.





## Update





_I <3 teh Internetz!!!_ Zeitleich hab ich das Plugin gestern auch im [Subreddit von Sublime Text veröffentlicht](http://www.reddit.com/r/SublimeText/comments/y74xk/a_simple_plugin_for_fastswitching_between/), mit der Anmerkung dass weitere Ideen gerne willkommen sind. Und so kam es dass ich heute morgen auf Github ein Pull Request hatte. Der User [Speilberg0](https://github.com/speilberg0) hat das Plugin komplett überarbeitet und auch zeitgleich für die Arbeit mit CSS Preprozessoren optmiert. Ausserdem ermöglicht "Expand Selection" jetzt das eigenhändige Markieren mit der Maus. Für mehr Infos einfach mal auf [Github](https://github.com/heroheman/Singleline) gucken. Danke dir, [Speilberg0](https://github.com/speilberg0)!





## Update 2





Ich hab dem Entwickler vorgeschlagen seine verbesserte Version in Package Control zu integrieren, da er in Supportfragen sicherlich besser darauf reagieren kann. Inzwischen ist dieses passiert und über Package Control zu finden. Einfach dort "Toggle CSS" suchen. Ansonsten hat sich nichts geändert (ausser, dass vorhandene Packages vorher evtl. gelöscht werden sollten).



<!-- more -->



### Links:







  * ["Singleline"](https://github.com/heroheman/Singleline) auf Github



