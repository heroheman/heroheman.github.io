---
author: Florenz
comments: true
date: 2012-12-18 13:43:29+00:00
layout: post
slug: prototyping-mit-foundation
title: Prototyping mit Foundation
wordpress_id: 2029
categories:
- Blog
- Frontend
- Tutorial
tags:
- CSS
- Foundation
- Framework
- Frontend
- HTML
- JS
- Sass
- SCSS
- Tutorial
- Zurb
---

Frameworks zum schnellen Erstellen von Webseiten Prototpyen schießen zur Zeit wie Pilze auf den Boden. Vor einigen Jahren fing es mit Gridsystemen, wie z.b. dem 960.gs, HTML5 Boilerplate oder dem Less Framework, an - ging über abenteuerliche Lösungen wie Semantic.gs bis hin zu Komplett-Paketen wie Twitter Bootstrap. Wer also heute schnell einen Webseiten Prototypen bauen will, braucht sich wahrscheinlich nicht mehr mit repetiven Codeschnipseln auseinandersetzen. Alles ist fertig.





![Foundation]({{ site.baseurl }}/images/2012/12/found-start-580x362.png)





Und nun kommt mit [Foundation](http://foundation.zurb.com) von Zurb ein neuer Player auf dem Markt, der wieder vieles besser machen will. Und in seiner dritten Version scheint er vieles besser zu machen als die "Konkurrenz". In letzter Zeit hatte ich viele Gelegenheiten mich mit diesem Framework auseinander zu setzen und es nicht bereit. Foundation ist für mich der zur Zeit beste Startpunkt für ein neues Projekt und hat mich vom (auch großartigen) Semantic.gs System abgebracht.





### Features





#### Gridsystem





Das Foundation Grid ist in der Handhabung schnell zu verstehen, nutzt es eine semantische Syntax, die ähnlich dem anderer Gridsysteme ist. Dazu gibt es es keine Begrenzung in traditionellen Pixeln. Es ist zeilenweise aufgebaut und eine Zeile row kann die jeweiligen Gridbausteine beinhalten. Ein Beispiel:





    <code><div class="row">
        <div class="eight columns">
            Content
        </div>
        <div class="four columns">
            Sidebar
        </div>
    </div>
    </code>





Standardmäßig ist die Maximalbreite 940px, kann aber schnell angepasst werden - sei es über den Download Builder, im CSS oder durch das Ändern einer SASS Variable (_Was? Sass? Darauf komme ich noch zurück_). Auch schön, es wird direkt die Border-Box verwendet, über die ich hier bereits geschrieben habe.





Dazu lässt sich das Grid ineinander problemlos verschachteln. Dies geschieht durch das einfügen einer neuen Zeile, die wieder die volle Angabe der Zeilen beinhalten kann. Es kann also 12 Spalten in einer Spalte geben, die übergeordnet 8 Spalten hat.





    <code><div class="row">
        <div class="eight columns">
            Content
            <div class="row">
                <div class="six columns">Left Content</div>
                <div class="six columns">right content</div>
            </div>
        </div>
        <div class="four columns">
            Sidebar
        </div>
    </div>
    </code>





Dazu kommen noch viele kleine Verbesserungen, die helfen, das Layout genau anzusprechen, was den eigenen Arbeitsaufwand deutlich verringert. Collapse z.B. entfernt den Abstand zum nächsten Element. Weiterhin werden noch viele Standard Gridfeatures wie push, pull, centered oder last berücksichtigt. Eine detaillierte Dokumentation bietet die (festhalten) Dokumentation.





#### Responsive





Foundations Gridsystem ist nicht nur sehr intuitiv, es ist dazu auch noch Responsive. An sich heutzutage schon Standard, aber Foundation geht da noch etwas weiter. Standardmäßig werden die einzelnen Gridelemente dem Fenster angepasst, und bei Smartphone Dimensionen komplett auf 100% gesetzt. Wer dieses aber nicht möchte, kann sich das mobile Grid anschauen. Dieses bekommt nochmal vier Unterspalten und bietet weitere Einstellungsmöglichkeiten wie das Setzen von Blockelementen. Ein Beispiel HTML Markup: `<div class="nine mobile-three columns">Lorem Ipsum</div>` Dieser Container, der in der Desktop Ansicht also eine Breite von Neun hat, bekommt beim mobilen Aufruf eine Breite von Drei (von Vier). So lässt sich die mobile Ausgabe sehr einfach steuern.





#### Modular Scale Typo





Ein Feature wo sich Foundation von anderen Frameworks abhebt, ist Modular Scale Typo. Dies ist ein System für die Deklarierung von Schriftgrößen. Die Idee hierzu stammt von einem ["A List Apart" Artikel](http://www.alistapart.com/articles/more-meaningful-typography/) und beschreibt im Wesentlichen die Skalierung von Schriftgrößen nach einem vorhanden Muster (wie der ["Goldene Schnitt"](http://de.wikipedia.org/wiki/Goldener_Schnitt)). Dies führt zu einem stimmungsvolleren Schriftbild bei. Für mehr Informationen empfehle ich den "A List Apart" Artikel.





#### Viele Elemente bereits vorhanden





Foundation bringt viele [oft genutzte Module](http://foundation.zurb.com/docs/javascripts.php) bereits mit. Wie einen Responsive Slider ("Orbit"), modale Dialoge ("Reveal") oder eine Website Tour ("Joyride"). Zumindest in der Prototyp Phase sind diese sehr nützlich. Ob man diese später auch in der Produktion nutzen will, bleibt dem Entwickler natürlich selbst überlassen. ![Foundation Templates]({{ site.baseurl }}/images/2012/12/found-templates-580x557.png) Auch eine gute Idee: Fertig gestylte Templates. Häufige Layouts sind also bereits zur Vorauswahl vorhanden. Ggf. kann man sich dadurch auch inspirieren lassen.





#### SASS oder CSS





Foundation nutzt [SASS](http://www.sass-lang.com), dieser Preprozessor ermöglicht ein schnelles Anpassen in der vars.scss. Wer allerdings kein SASS nutzen kann/will, kann auch auf eine bereits kompilierte CSS Datei zugreifen und diese via Konfigurator zuvor auch noch anpassen. Persönlich würde ich trotzdem die SASS Version empfehlen, da später eintreffende Änderungen so schnell noch hinzugefügt werden können, während die CSS Version hier naturgemäß komplizierter ist. Am besten selbst anschauen - der [Konfigurator / Download ist hier](http://foundation.zurb.com/download.php).





### Fazit





Foundation hat mir bereits bei vielen Projekten viel Zeit gespart. Besonders in einer frühen Entwicklungsphase, in der noch viele Designentscheidungen offen sind, ist es äusserst hilfreich schnell UI Elemente einzubauen und zu testen. Auch kann man Foundation später einfach in Projekte integrieren - wobei ich empfehlen würde, hier nicht benötigte Komponenten vorher "auszumisten" - da hier sehr viel mitgebracht wird, was wahrscheinlich nicht gebraucht wird.





### Links







  * A List Apart: [Dive into Responsive Prototyping](http://www.alistapart.com/articles/dive-into-responsive-prototyping-with-foundation/)


  * Designshack: [Bootstrap vs. Foundation](http://designshack.net/articles/css/framework-fight-zurb-foundation-vs-twitter-bootstrap/)


  * Smashing Magazine: [Rapid Prototyping for any device with foundation](http://coding.smashingmagazine.com/2011/10/25/rapid-prototyping-for-any-device-with-foundation/) - Basiert auf einer älteren Foundation Version


  * A List Apart: [Modular Scale Typography](http://www.alistapart.com/articles/more-meaningful-typography/)



