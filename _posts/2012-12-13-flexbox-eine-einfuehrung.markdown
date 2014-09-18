---
author: Florenz
comments: true
date: 2012-12-13 13:54:39+00:00
layout: post
slug: flexbox-eine-einfuehrung
title: Flexbox - Eine Einführung
wordpress_id: 2363
categories:
- Blog
- Frontend
- Tutorial
tags:
- css3
- Flexbox
- Frontend
- HTML
- Spec
- webapp
- webdev
---

Die Flexbox ist einer der spannensten Ansätze, die CSS3 zur Zeit zu bieten hat. Es erlaubt den schnellen, unkomplizierten Aufbau einer WebApp - mit einem hohen Maß an Flexibilität.





_Dies ist der erste Teil und beschreibt nur ansatzweise die CSS Flexbox. Inzwischen gibt es einen zweiten erweiterten Artikel von mir [an dieser Stelle](http://www.florenz.co.uk/flexbox-fuer-fortgeschrittene-teil-2/)._





### What the Flex?!





Genauso flexibel scheint auch die [Spezifikation der W3C](http://www.w3.org/TR/css3-flexbox/) zum Thema zu sein. Die jetzige Form - die ich jetzt vorstellen will ist zur Zeit die dritter Iteration und der dritte Ansatz. Sollte dieses Thema also weiter Interessieren, achtet bitte auf Veröffentlichungsdaten der Artikel. Solltet ihr also etwas von `flex()` oder `display: flexbox` lesen, seid ihr falsch. Wirklich.





Hier ein einfaches HTML Gerüst:




    
    <code><div class="wrapper">
        <header role="banner">Seitenkopf</header> 
        <div class="main">
          Lorem Ipsum ....
        </div>
        <aside>Sidebar</aside> 
        <footer>Copyright and stuff</footer>
    </div>
    </code>





Normalerweise würden man jetzt ein paar `float`'s einfügen und die Weiten angeben. Dürfte dann ungefähr aussehen wie in diesem [Beispiel](http://codepen.io/heroheman/pen/CdGDe).





Ändert man den umschließenden Wrapper dementsprechend, dass `display: flex` hinzugefügt wird, bekommt man einen ähnlichen Output - ohne `float` und `clear`. Diese beiden Attribute haben keinerlei Einfluss auf die Flexbox. Das CSS sieht jetzt folgenermaßen aus.




    
    <code>.wrapper{
        display: flex;}
    
    .head{ 
        background-color: #f00; }
    
    .main{ 
        background-color: grey;
        order: 2;}
    
    .sidebar{  
        background-color: green;
        width: 30%;
        order: 1;}
    
    .copy{ 
        background-color: blue;}
    </code>





Ein funktionierendes Beispiel gibt es [hier](http://codepen.io/heroheman/pen/qFrBo).





### Reihenfolge und Seitenverhältnis in der Flexbox





Die Anordnung kann man simpel mit `order` bestimmen. Selbsterklärend dass `order: 1` sich auf das erste Element bezieht und die dargestellte Reihenfolge sich an den steigenden Zahlenwert orientiert. So kann man schnell und einfach weitere Elemente hinzufügen (Hier als [Beispiel](http://codepen.io/heroheman/pen/iazFe).):




    
    <code><div class="secondary-content">
       Noch mehr Content. 
    </div>
    </code>





Mit folgendem CSS `.secondary-content{ order: 3; }`, kein Problem





Auch muss man keine explizite Wertangaben benutzen, das Verhältnis reicht. Statt z.b. `width: 20%`, kann `flex: 1` und `flex: 2` benutzt werden. Das entspricht dem Seitenverhältnis von 2:1. [Hier das bisherige Beispiel](http://codepen.io/heroheman/pen/rxIHn) mit einem Verhältnis von 1:2:1. Natürlich kann hier auch einfache Prozentwerte im Flex Attribut nutzen, wie `flex: 20%;`.





### Gibt es noch mehr?





Ja. Viel mehr, z.B. `flex-flow`. Aber dazu später mehr. Dieser Text ist schon länger als er eigentlich geplant war.





### Kann ich es schon nutzen?





Flexbox funktioniert zur Zeit nur im [Chrome 22+, Opera 12+ und Blackberry Browser 10+](http://caniuse.com/#search=flexbox). Ausserdem ist es bereits die dritte Syntax für den Bereich seit 2010. Die Chancen bestehen sogar, dass sich Flexbox vielleicht noch einmal ändert. Wer es nutzen will, sollte also auch einen Fallback mit Modernizr und `float`'s implementieren. Ein Polyfill ist zur Zeit für die neueste Syntax noch nicht verfügbar. Dennoch - ein spannendes Thema.





Fragen, Kritik und Anregungen - gerne in die Kommentare oder per Mail!





### Links







  * Flexbox auf [ caniuse.com](http://caniuse.com/#search=flexbox)


  * Chris Coyier, ["Old" Flexbox and "New" Flexbox](http://css-tricks.com/old-flexbox-and-new-flexbox/)


  * Ben Frain, [Understanding the CSS3 Flexbox ](http://benfrain.com/understanding-the-css3-flexbox-flexible-box-layout-module/)



