---
author: Florenz
comments: true
date: 2013-03-05 14:11:31+00:00
layout: post
slug: zurb-foundation-4
title: Zurb Foundation 4
wordpress_id: 2529
categories:
- Blog
- Frontend
- Tools
tags:
- CSS
- Foundation
- Framework
- HTML
---

Zurb [Foundation](http://foundation.zurb.com/whats-new.php) ist in Version 4 erschienen. Es wurde viel verändert und die Migration von Foundation 3 auf Foundation 4 ist sicherlich etwas schwierig. Die wichtigsten Änderungen finden beim Grid, in der Semantik und im Javascript statt.





##### Mobile First Grid





Das umfangreiche Prototyping Framework hat jetzt eine "Mobile First" Ausrichtung - was aufgrund der stark anwachsenen Mobilnutzung ein richtiger Schritt ist. Allerdings funktioniert das Gridsystem jetzt signifikant anders.





###### small und large





Die grid-bildenden Klassen heissen jetzt `small-x` und `large-x`. Es wird bis zu einer Breite von 768px die `small` Klasse benutzt, alles darüber hört auf `large`. Ein Beispiel wäre also.




    
    <code><div class="row">
      <div class="small-2 large-4 columns">...</div>
      <div class="small-4 large-4 columns">...</div>
      <div class="small-6 large-4 columns">...</div>
    </div>
    </code>





Das exklusive nutzen von `small` oder `large` ist auch möglich. Wobei ich mir hier eine Nutzung der alten Syntax auch noch gewünscht hätte.





###### Verschachtelung (Nesting)





Natürlich ist Verschachtelung auch noch möglich. Dafür wieder ein `row` mit anschließender Breitendefinition einfügen.




    
    <code><div class="row">
      <div class="small-8 columns">8 Nested
        <div class="row">
          <div class="small-8 columns">8 Nested Again</div>
          <div class="small-4 columns">4</div>
        </div>
      </div>
      <div class="small-4 columns">4</div>
    </div>
    </code>





###### Offset, Centered, Push





Offset - also der Abstand zwischen Grids - ist jetzt unter `large-offset-x` und `small-offset-x` verfügbar.




    
    <code><div class="large-10 large-offset-1 columns">10, offset 1</div>
    </code>





Das Zentrieren eines Gridelements funktioniert jetzt mit `large-centered` und `small-centered`. Wie gehabt wird `small` durch `large` überschrieben - sofern eins vorhanden ist.




    
    <code><div class="small-6 small-centered columns">6 centered</div>
    </code>





Dies ist nur ein kurzer Ausriss - das neue Grid bringt auch noch neue Optionen mit. So lassen sich über die SCSS Konfiguration viele Möglichkeiten ein und ausstellen.





[Grid Dokumentation](http://foundation.zurb.com/docs/components/grid.html)





* * *





#### Semantik





In der neuen Version wurde die Semantik verstärkt und der ausgegebene Quellcode ist dadurch übersichtlicher. Beschreibene Klassen wurden entfernt und durch eine Reihe von SASS Mixins und Erweiterungen ergänzt.





Beispiel: [Panel](http://foundation.zurb.com/docs/components/panels.html) Möchte man einen Panel Bereich definieren kann man entweder die vordefinierte `panel` Klasse nutzen oder einen semantischen Bereich mit einen SCSS Mixin verwenden.





Zuerst importieren: `@import "foundation/foundation-global", "foundation/panels";` Dann erweitern: `.your-class-name { @include panel; }`





Jedes Mixin hat dazu noch Variablen, welche überschrieben werden können.




    
    <code>.your-class-name { @include panel($bg, $padding); }
    
    $bg: $secondary-color
    $padding: $panel-padding
    </code>





Diesen Ansatz mag ich - allerdings fände ich persönlich Platzhalter besser - habe ich [hier bereits einmal beschrieben](http://www.florenz.co.uk/platzhalter-in-sass-3-2-nutzen/). Warum? Weil hier der Import grundsätzlich wegfallen könnte.





* * *





#### Zepto statt jQuery





Die größte und kontroverseste Neuerung ist - dass die mitgelieferten Plugins nicht mehr auf jQuery sondern auf [Zepto.js](http://www.florenz.co.uk/platzhalter-in-sass-3-2-nutzen/) basieren.





Die Vorteile sind (fast 1:1 von der Zepto Webseite übernommen)... - die sehr geringe Dateigröße gegenüber jQuery - veraltete Browser werden nicht mehr unterstützt - deswegen die geringere Dateigröße - die gute Integration in nativen Webapps





Mehr kann ich zu Zepto allerdings nicht sagen, da es mir bis dato sehr unbekannt war. Die Syntax sieht der von jQuery recht ähnlich.





Für mich allerdings ein Stolperstein, da ich - und viele andere - noch nicht wirklich mit Zepto in Kontakt gekommen sind, stellt es eine Barriere dar. Schnelles Anpassen dauert jetzt etwas länger und der geneigte Entwickler wird wahrscheinlich lieber seine eigene jQuery Lösung einbauen anstatt Zepto zu nutzen. Kommt schließlich sehr oft vor dass der Prototyp in der späteren Entwicklung direkt in das Produkt einfließt.



