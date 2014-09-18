---
author: Florenz
comments: true
date: 2012-07-19 12:04:15+00:00
layout: post
slug: schriftgroessen-mit-rem-werten
title: Schriftgrößen mit rem-Werten
wordpress_id: 1957
categories:
- Blog
- Frontend
- Tutorial
tags:
- CSS
- css3
- em
- font-sizing
- rem
---

Die Benutzung der relativen Schriftgröße _em_ hat bei mir immer etwas für Bauchschmerzen gesorgt. Zwar ist die Nutzung einer vererbbaren, relativen Größeneinheit sehr flexibel, bringt es aber doch einige Schwierigkeiten mit sich. Das Problem ist für mich, dass hier immer vom Elternelement ausgegangen wird, wo es schwierig wird den Überblick zu behalten. Ändert sich was in der Struktur kommt man nicht drum herum die drunterliegenden verschachtelten Ebenen zu kontrollieren und nachzubessern..





Ausgehend von einem Basiswert von 62,5%, ergibt es sich folgendermaßen.




    
    <code>body{font-size: 62.5%;}       //setz Basis auf 10px
    h1{ font-size: 2em; }         //20px
    p { font-size: 1.5em; }       //15px
    .content{ font-size: 1.5em;}  //15px
    .content p {font-size: 1.5em;} //22.5px
    </code>





Dies ist einer der Gründe warum ich em immer gerne ignoriert habe. Hier ein [Fiddle](http://jsfiddle.net/flrnz/WB47z/), was ich vorbereitet habe. Wildes ausprobieren [natürlich erwünscht.](http://jsfiddle.net/flrnz/WB47z/)





### Der rem-Wert





Nun habe ich aber zum ersten Mal von _[rem](http://www.w3.org/TR/css3-values/#rem-unit)_ - oder _root em_ gehört. Wie der Name schon sagt, ist der em-Wert nun nicht relativ von der Elternklasse, sondern von der Wurzel - dem _root/body_ - der Seite. Es wird also im _body_ (oder _html_) nur einmal die Basisgröße angegeben und der _rem_-Wert errechnet sich aus dieser Größe.





Hier für gibt es eine einfache Formel: **Pixelgröße / Rootgröße = rem-Wert**





Wurde also im Root eine Größe von 14px angegeben und ein Element soll den Wert von 12px bekommen, rechnet man _12/16_ und bekommt den Wert von 0,75rem.




    
    <code>body{font-size: 62.5%;}       //setz Basis auf 10px
    h1{ font-size: 2rem; }         //20px
    p { font-size: 1.5rem; }       //15px
    .content{ font-size: 1.2rem;}  //12px
    .content p {font-size: 1.5rem;} //15px
    </code>





[Hier eine Version](http://jsfiddle.net/flrnz/tMvLm/) des oben verlinkten Beispiels mit rem-Werten. Auch hier ist Ausprobieren erwünscht.



<!-- more -->



### Kompatibilität





Aktuelle Browser unterstützen rem bereits. Nur die älteren Internet Explorer kennen dieses Problem nicht. Wer also den IE bis Version 8 unterstützen will, wird nicht um einen Fallback drum rum kommen. Dieser ist aber relativ simpel.




    
    <code>font-size: 0.75rem; /*gute browser*/
    font-size: 12px; /*böse Browser*/
    </code>





Klingt erstmal unsinnig rem überhaupt zu nutzen, wenn sowieso ein px-Wert angegeben werden muss. Aber in Zeiten von CSS Preprozessoren ist dieses dank Mixins eigentlich kein Problem mehr.




    
    <code>@baseFontSize: 20;
    .font-size(@font-size: @baseFontSize) {
        @rem: (@font-size / @baseFontSize);
        font-size: @font-size * 1px;
        font-size: ~"@{rem}rem"; 
    }
    </code>





[Less Beispiel](http://codepen.io/machal/pen/less-mixin-font-size-rem)





### Fazit





Ich werde jetzt nicht anfangen alle bestehenden Projekte auf rem umzustellen, aber in Zukunft wird es für mich sicherlich eine Option sein. Besonders im Bereich des Responsive Designs sehe ich da große Vorteile.





### Links







  * [Font Sizing with REM - snook.ca](http://snook.ca/archives/html_and_css/font-size-with-rem)


  * ...und als Gegenargument: [Font-sizing with rem could be avoided - CSSWizardry](http://csswizardry.com/2011/05/font-sizing-with-rem-could-be-avoided/)


  * [REM als Einheit für Schriftgröße nutzen - Elmastudios](http://www.elmastudio.de/programmierung/css/css-tipp-rem-als-einheit-fur-schriftgrose-nutzen/)



