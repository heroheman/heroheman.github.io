---
author: Florenz
comments: true
date: 2012-08-09 08:01:34+00:00
layout: post
slug: box-sizing
title: Box-Sizing
wordpress_id: 2036
categories:
- Blog
- Frontend
- Tutorial
tags:
- Box-Model
- CSS
- css3
- Layout
---

Jeder Webworker der, meist in den Anfangstagen, mit den Box-Model in den verschiednen Browsern in Kontakt gekommen ist weiss, dass dieses nicht gerade logisch aufgebaut ist. Man hat eine Weite angegeben und sich dann gewundert, dass diese in der Browserrealität nicht wirklich übereinstimmen. Anschließend war festzustellen, dass hier noch etwas Addition nötig ist.





>

>
> Angegebene Weite bzw. Höhe (`width` bzw. `height`) + Innenabstand(`padding`) + Rahmen (`border`) = tatsächliche Weite/Höhe
>
>






Nein, Intuitiv ist was anderes. Diesen Fehler hat man aber sicherlich nur einmal gemacht. Nach kurzem Umdenken, hat man sich schnell dran gewöhnt, doch gerade bei größeren Projekten kann man hier schnell den Überblick verlieren. Chris Coyier hat das Problem bereits [vor knapp zwei Jahren besser beschrieben](http://css-tricks.com/box-sizing/), als ich es je könnte.



<!-- more -->



[![]({{ site.baseurl }}/images/2012/08/funny-brad-pitt-seven-box-scene.jpg)]({{ site.baseurl }}/images/2012/08/funny-brad-pitt-seven-box-scene.jpg)





### Abhilfe durch box-sizing: border-box





Abhilfe schafft hier die border-box. Durch diese Eigenschaft wird die Box nicht _erweitert_, sondern _innendrin_ angewendet, d.h. `padding` und `border` haben keinen Einfluss auf die ausgegebene Dimension. _100px bleiben 100px._





>

>
> Angegebene Weite/Höhe = tätsächliche Weite/Höhe
>
>






Hierfür muss dem Element folgendes angegeben werden: `box-sizing: border-box;`





Möchte man das die _alte Berechnung_ nutzen kann man statt `border-box` auch einfach `content-box` nutzen. Das ist der Default-Wert. So ist das nun mal - was vor Jahren im IE6 noch als Bug galt und mit dem Setzen des richtigen Doctypes schon wieder vergessen war, ist heute ein Feature.





Zum besseren Verständnis hier noch ein [Beispiel](http://jsfiddle.net/flrnz/DXb7n/):







### Kann man es nutzen?





Und da wären wir auch beim Thema Internet Explorer. Es ist schon fast seltsam, dass dieses "neue Feature" schon ab der Version 8 des Explodierers funktioniert. Sollte also IE7 keine Anforderung in vorhandenen Projekten sein, nutzt es. Mit folgenden Schnipseln solltet ihr keine Probleme in den verschiedenen Browsern haben:





    <code>-webkit-box-sizing: border-box; /* Safari 5.1+ / Chrome / WebKit / Old iOS & Android */
    -moz-box-sizing: border-box;    /* Firefox / Gecko */
    box-sizing: border-box;         /* Opera / IE 8+ */
    </code>





Der von mir sehr geschätzte Paul Irish geht sogar soweit, die [Border-Box universell anzuwenden](http://paulirish.com/2012/box-sizing-border-box-ftw/).





### Links







  * [HTML5 Please: border-box](http://html5please.com/#box-sizing)


  * [Schönes neues CSS: Box-Sizing](http://www.peterkroener.de/schoenes-neues-css-box-sizing/), Peter Kröner


  * [Box-Sizing](http://css-tricks.com/box-sizing/), Chris Coyier


  * [* { box-sizing: border-box } FTW](http://paulirish.com/2012/box-sizing-border-box-ftw/), Paul Irish



