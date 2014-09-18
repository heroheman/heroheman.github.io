---
author: Florenz
comments: true
date: 2013-09-30 22:18:42+00:00
layout: post
slug: flexbox-fuer-fortgeschrittene-teil-2
title: Flexbox (Teil 2)
wordpress_id: 2648
categories:
- Blog
- Frontend
- Tutorial
tags:
- Artikel
- Ausrichtung
- css3
- Flexbox
---

Dies ist die Fortsetzung zu [meinen Flexbox Blogartikel](http://www.florenz.co.uk/flexbox-eine-einfuehrung/) vom Dezember 2012. Und die gute Nachricht ist: Es hat sich nichts geändert und es zeichnet sich ab dass Flexbox bleibt wie es ist ¹. Grund genug einen Folgeartikel zu schreiben. Im letzten Artikel habe ich kurz die Grundlagen, `order` und das Seitenverhältnis angerissen. Jetzt kommen dann die spannenden Sachen.





#### Flex-Direction, Flex-Wrap und Flex-Flow





**Flex-Direction**
Die Ausrichtung der Elemente in einer Flexbox kann man waagerecht und senkrecht positionieren. Zusätzlich kann man auch die Reihenfolge anpassen.




    
    <code>flex-direction: row | row-reverse | column | column-reverse
    </code>





Hier ein [Demo](http://codepen.io/heroheman/pen/tbIha) - mit den einzelnen Attributen zum ausprobieren.





**Flex-Wrap**
Mithilfe von `flex-wrap` kann ein Umbruch erzwungen und die Reihenfolge umgedreht werden. Es ergeben sich die Möglichkeiten: 
- `nowrap` - Es gibt keinen Umbruch. Dies ist der Standardwert
- `wrap` - Es erfolgt ein automatischer Umbruch, die Reihenfolge wird aber beibehalten
- `wrap-reverse` - Ähnlich wie `wrap`, allerdings in umgekehrter Reihenfolge





`flex-wrap: nowrap | wrap | wrap-reverse`





Hier ein [Demo](http://codepen.io/heroheman/pen/gbdCz) zum Ausprobieren.





**Flex-Flow**
Dies ist die Kurzschreibweise für `flex-direction` und `flex-flow` und erlaubt alle an der Stelle möglichen Werte. Standardmäßig ist dieses Element `flex-flow: row nowrap`.





Auch wenn diese Elemente im Wesentlichen nur rudimentär zwischen "normal" und "umgekehrt" unterschieden werden können, sind diese insbesondere verschachtelt und im Zusammenhang mit Media-Queries alleine schon sehr mächtig.





#### Justify-Content, Align-Items und Align-Content





Sollte es vorkommen, dass eine Flexbox nicht die ganze Seite ausfüllt - sei es durch feste Werte oder ausgereizte Maximalangaben - können die Elemente mit `justify-content` ausgerichtet werden. Hierbei gibt es 5 Werte, wobei vorallem die ersten drei dem herkömmlichen `text-align` ähnlich sind







  * `flex-start` - Die Elemente werden zur Seite des ersten Elements ausgerichtet. Also auch abhängig von der `flex-direction` (Standardwert)


  * `flex-end` - Analog dazu werden diese Elemente am Ende ausgerichtet


  * `center` - selbsterklärend


  * `space-between` - Es wird gleichmäßig Abstand zwischen den Elementen vergeben, jedoch nicht am Rand. 


  * `space-around` - Ähnlich dem vorherigen, allerdings mit Abstand zum Rand. 





Hier ein [Demo](http://codepen.io/heroheman/pen/oiCrc) mit allen Werten zum Ausprobieren..





**align-items**
Da Flexbox nicht nur horizontal, sondern auch vertikal sehr präsent ist, gibt es analog zu `justify-content` auch noch die Möglichkeit Elemente vertikal zu orientieren. Darum gibt es auch sehr ähnliche Werte.







  * `flex-start` - Die Elemente werden zur Seite des ersten Elements ausgerichtet. Also auch abhängig von der `flex-direction` (Standardwert)


  * `flex-end` - Analog dazu werden diese Elemente am Ende ausgerichtet


  * `center` - selbsterklärend


  * `space-between` - Es wird gleichmäßig Abstand zwischen den Elementen vergeben, jedoch nicht am Rand. 


  * `space-around` - Ähnlich dem vorherigen, allerdings mit Abstand zum Rand. 





Obligatorisches [Demo](http://codepen.io/heroheman/pen/xdetp).





**align-content**
Dieses Element richtet den kompletten Block aus. Es kann als vertikale Version von `justify-content` gesehen werden. Auch hier ist die Benennung und Funktion ähnlich den vorherigen Elementen. `align-content` kann mit folgenden Werten aufgerufen werden







  * `flex-start` - Nach oben ausgerichtete Elemente


  * `flex-end` - nach unten ausgerichtet


  * `center` - mittig ausgerichtet


  * `space-between` - Gleichmäßiger Abstand zwischen Elementen


  * `space-around` - Gleichmäßiger Zeilenabstand, auch oben und am unteren Rand


  * `stretch` - Elemente werden auf die Höhe gezogen.





Und die [Demo](http://codepen.io/heroheman/pen/Byufh) zum rumspielen.





**Das war immer noch nicht alles, es gibt noch flex-shrink und flex-grow und vieles mehr. Und noch diverse Techniken, wie man mit Responsiven Layouts umgehen kann. 
Wie immer: Vorschläge, Kritik, Feedback gerne in die Kommentare, Mail oder Twitter!**





_______________-
¹ Ich hoffe ich lese diesen Artikel nicht in einigen Jahren und lache verzweifelt



