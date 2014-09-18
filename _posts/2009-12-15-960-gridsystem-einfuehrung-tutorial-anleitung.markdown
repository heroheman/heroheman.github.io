---
author: Florenz
comments: true
date: 2009-12-15 14:17:38+00:00
layout: post
slug: 960-gridsystem-einfuehrung-tutorial-anleitung
title: Eine Einführung in das 960 Gridsystem
wordpress_id: 1199
categories:
- Tutorial
tags:
- '960'
- CSS
- Einführung
- Framework
- Gridsystem
- HTML
- Tutorial
- XHTML
---

"Gridsysteme für CSS? Sowas braucht man doch nicht, das ist doch sowieso einfach..." - habe ich mal von einem österreichischen Mitpraktikanten gehört, gefolgt von einer langen Liste von Argumenten, welche mir fast ein schlechtes Gewissen gemacht haben, dass ich mich überhaupt damit beschäfigt habe. Aber nur "fast", denn Gridsystem sind einfach großartig, einfach und hilfreich in jeder Hinsicht. Das System mit welchem ich mich hauptsächlich beschäftigt habe ist das [960 Gridsystem.](http://www.960.gs) Ein Tutorial gibt es nach dem Klick.
<!-- more -->
960 deshalb, weil hier davon ausgegangen wird dass 960px die bestmögliche Breite für die Wiedergabe auf dem Bildschirm ist. Seitdem ich ein Netbook besitze kann ich das im übrigen bestätigen, Seitliches scrollen ist absolut nervig. Ich werde mich hier nun an einem Tutorial versuchen, um darzustellen wie einfach es ist einen schnellen Webseiten Prototyp mithilfe des 960 Gridsystems zu erstellen.


[![960.gs]({{ site.baseurl }}/images/2009/12/960gs-580x485.png)](http://www.960.gs)





## Ausblick



Zuerst einmal will ich zeigen was [hier versucht wird zu erreichen:](http://blog.florenz.co.uk/examples/960_example/html/preview.html)
[![preview960]({{ site.baseurl }}/images/2009/12/preview960-580x502.png)](http://blog.florenz.co.uk/examples/960_example/html/preview.html)



## Download


[Alle Dateien](http://blog.florenz.co.uk/examples/960_example/960_example.zip) können [hier](http://blog.florenz.co.uk/examples/960_example/960_example.zip) heruntergeladen werden.





## Grundlagen


Fangen wir nun mit den Basiskenntnissen an. Zuerst sollte man wissen dass das Layout in **12, 16** (und jetzt auch 24) Spalten unterteilt wird. In meinen Beispiel wird mit dem 12 Spalten System gearbeitet, welches eigentlich auch für die meisten Projekte ausreichen sollte. Diese 12 Spalten sind sind mit verschiedenen Weitenangaben unterteilt:



> 1.  60px
2. 140px
3. 220px
4. 300px
5. 380px
6. 460px
7. 540px
8. 620px
9. 700px
10. 780px
11. 860px
12. 940px




Auffallen wird hierbei, dass das 12 Spaltensystem nur eine Breite von 940px besitzt. Aber warum rede ich dann die ganze Zeit von 960px? Nun, es wird beim Einfügen in den HTML Code ein Seitenabstand von 10px eingerechnet (_margin: 0 10px_). Werden nun alle Grids in einer Reihe zusammengesetzt entsteht eine Gesamtbreite von 960px

**Beispiel:** _Grid_3 (220px +20px) + Grid_3 (220px +20px) + Grid_6 (460px +20px) = Grid_12 (960px)_

Entsprechende Layoutvorlagen zu allen entsprechenenden Grafikprogrammen sind im übrigens im Downloadpaket enthalten.





## Das HTML


Gut, soviel zum Einstieg, sofern hier noch jemand mitkommt, wenn ihr bis hier hin gelesen habt, ab jetzt wird alles sehr sehr einfach. Ich habe mal folgendes HTML Grundgerüst zusammengeschrieben.



    < !DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"><html>
    	<head>
    		<title>Example Page for the 960 Grid System - by Florenz.co.uk</title>
    	</head>
    	<body>

    	<div id="wrapper">
    		<div id="header"><h1>This is a fancy title.</h1></div>
    		<div id="navigation">
    			<ul>
    				<li><a href="#">Home</a></li>
    				<li><a href="#">About</a></li>
    				<li><a href="#">Products</a></li>
    				<li><a href="#">Info</a></li>
    				<li><a href="#">Imprint</a></li>
    			</ul>
    		</div>
    			<div id="content_feature">
    			          <h2>Headline 1</h2>
    			          <img src="../img/960ss.png" alt="960ss"></img>
    			          <p></p>
    			</div>

    			<div id="content1">
    			          <h2>Headline 2</h2>
    			          <p>Content</p>
    			</div>

    			<div id="content2">
    			          <h2>Headline 3</h2>
    			          <p>Content</p>
    			</div>

    			<div id="content3">
    			          <h2>Headline 4</h2>
    			          <p>Content</p>
    		</div>

    		<div id="footer">Copyright 2009 by myself.</div>
    		<div class="clearing"></div>
    	</div>

    	</body>
    </html>





Das ganze sieht dann [so aus](http://blog.florenz.co.uk/examples/960_example/html/index.html) (mit Blindtext):

[![960step1]({{ site.baseurl }}/images/2009/12/960step1-580x478.png)](http://blog.florenz.co.uk/examples/960_example/html/index.html)





## Einfügen der CSS Dateien


Gut, soweit so gut, fügen wir nun die CSS Dateien aus dem Downloadpaket, sowie unsere eigenen, im Header an:




    ...
    	        <link media="screen" href="../css/style.css" type="text/css" rel="stylesheet"></link>
    		<link media="screen" href="../css/960.css" type="text/css" rel="stylesheet"></link>
    		<link media="screen" href="../css/reset.css" type="text/css" rel="stylesheet"></link>
    		<link media="screen" href="../css/text.css" type="text/css" rel="stylesheet"></link>
    ....



Neben unserer eigenen Style.css, haben wir also noch 3 zusätzliche Dateien.




  * **960.css** - Das Gridsystem


  * **reset.css** - CSS welches alle  Elemente auf 0 setzt


  * **text.css** - Typographie, kann man nutzen, muss man nicht, werd ich hier aber trotzdem



[![960step3]({{ site.baseurl }}/images/2009/12/960step3-580x507.png)](http://blog.florenz.co.uk/examples/960_example/html/index2.html)

Wir [wir sehen](http://blog.florenz.co.uk/examples/960_example/html/index2.html), hat es schon Auswirkungen auf das Aussehen unserer Seite, da die reset.css und die text.css schon direkt eingreifen, aber Layout kann man dieses noch nicht nennen. Kein Wunder, die Klassen aus der 960.css sind noch ins Layout eingearbeitet.



## Anzahl der Spalten definieren


Aber woher soll die Webseite nun wissen, ob ich nun das 12, 16 oder 24 Spalten Layout nutze? Dieses teilen wir durch das Hinzufügen der Klasse container_X im Wrapper Container mit. Wobei X für die Anzahl der Layoutspalten steht. So wird also aus...



    <div id="wrapper"> ... </div>



... dann...



    <div id="wrapper" class="container_12"> ... </div>



....was zu [folgenden Ergebnis](http://blog.florenz.co.uk/examples/960_example/html/index_container12.html) führt:
[![960step4]({{ site.baseurl }}/images/2009/12/960step4-580x330.png)](http://blog.florenz.co.uk/examples/960_example/html/index_container12.html)





## Zuweisen der Gridklassen


Der nächste Schritt ist nun das Zuweisen der Breite durch die Klasse .grid_X.
Beispiel:



    <div id="header" class="grid_12"> ... </div> //Der Header bekommt die volle Gridbreite
    <div id="navigation" class="grid_12"> ... </div> //Ebenso die Navigation
    <div id="content_feature" class="grid_12"> ... </div> //Der Featurebereich bekommt dann einfach auch 12 Spalten
    <div id="contentX" class="grid_4"> ... </div> //Contentbereiche bekommen 4 Spalten.




Rufen wir jetzt die Seite auf sehen wir [folgendes Ergebnis](http://blog.florenz.co.uk/examples/960_example/html/index_960.html).

[![960step5]({{ site.baseurl }}/images/2009/12/960step5-580x317.png)](http://blog.florenz.co.uk/examples/960_example/html/index_960.html)





## Alpha und Omega


Soweit ganz einfach, aber was ist mit dem Bild? Es hängt über den Text und da soll es schon aus ästhetischen Gründen nicht hin. Dieses Problem könnte man jetzt mit floats lösen, dazu müssen nun aber Innenabstände neu positioniert werden, da wie bereits erwähnt, automatisch Seitenabstände hinzugefügt werden, ansonsten würde uns das Layout auseinanderbrechen. Aber auch hier bringt 960 Framework bereits eine Lösung mit: alpha und omega, welche zu den .grid_X Klassen hinzugefügt werden.




    	<div id="content1" class="grid_12">
    			<h2>Headline 1</h2>
    			<img src="../img/960ss.png" class="grid_3 alpha"></img>
    			<p class="grid_9 omega">...Content ... .</p>

    			</div>



Das Bild ist nun das alpha, heisst, dass der Abstand zur rechten Seite auf Null gesetzt wurde. Das gleiche bei omega, bloss auf der linken Seite. Und das ist dann auch schon das [Endergebnis](http://blog.florenz.co.uk/examples/960_example/html/preview.html), eine saubere Seite, ohne viel Aufwand, erstellt in 5 Minuten.

[![preview960]({{ site.baseurl }}/images/2009/12/preview960-580x502.png)](http://blog.florenz.co.uk/examples/960_example/html/preview.html)





## Sonstiges


Das Beste, man muss sich auch nicht mehr um die üblichen IE6 Fehler kümmern, da das Layout dort genauso aussehen sollte (Was ich dank Mac allerdings nicht testen konnte).

Leider gibt es auch einen nicht ganz zu unterschätzenden Nachteil, das 960Gridsystem hat nicht ohne Grund diesen Namen, es kann NUR auf Layouts mit einer festen Breite von 960 Pixeln angepasst werden. Sofern nun andere Breiten realisiert werden, ist dieses System leider nicht einsetzbar, wobei hier aber auf diverse Generatoren für Custom Grids zurückgegriffen werden kann, Ein [HTML Generator](http://headless-studios.com/960.ls/) und ein [CSS Generator](http://www.spry-soft.com/grids/) findet sich hier. Ich habe diese beiden Beispiele nicht getestet, aber ich denke das System wird dasselbe sein.

**Abschliessende Worte:**_ Dieses war mein erstes Tutorial, sollte es hilfreich sein, hinterlasst doch einen Kommentar, quasi als Motivation. Sollte ich wesentliche Fehler gemacht habe oder ihr kennt noch bessere Einsatzmöglichkeiten für dieses System, auch nicht scheuen was zu schreiben! _



