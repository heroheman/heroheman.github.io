---
author: Florenz
comments: true
date: 2013-05-17 08:53:05+00:00
layout: post
slug: zwei-sass-mixins-die-mir-schon-sehr-viel-zeit-timesaver
title: 'Zwei SASS Mixins: Vendorize und Font-Size'
wordpress_id: 2590
categories:
- Blog
- Frontend
tags:
- Mixin
- Mixins
- Sass
- SCSS
---

Hier schnell zwei SASS Mixins, die mir in der Vergangenheit unendlich viel Zeit erspart haben. Das eine erstellt schnell alle möglichen Browser Prefixe, dass andere setzt Fontsize wahlweise in REM und EM.




    
    <code>@mixin vendorize($property, $value) {
        -webkit-#{$property}: $value;
        -moz-#{$property}: $value;
        -ms-#{$property}: $value;
        -o-#{$property}: $value;
        #{$property}: $value;
    }
    </code>





Das Prinzip ist simpel: Will man neuere CSS3 Funktionen nutzen, einfach den Include aufrufen. 
Beispiel Transition: `@include vendorize(transition, background .5s ease-in-out);`
Ja, es gibt einen Nachteil: Nicht immer werden alle Browserprefixe benötigt - manchmal gibt es auch keine MS Varianten. Aber dass kann mir in diesem Moment noch egal sein. Man könnte dieses evtl. mit einer Variable `@supportIE` lösen oder oder oder...





Das zweite Mixin ist font-size:




    
    <code>@mixin font-size($sizeValue: 1.6){
        @if $is-rem {
            font-size: ($sizeValue * 10) + px;
            font-size: $sizeValue + rem;
        }@else{
            font-size: $sizeValue + em;
        }
    }
    </code>





Hier wird vorab per Variable definiert ob [REM Schriftgrößen](http://www.florenz.co.uk/schriftgroessen-mit-rem-werten/) genutzt werden soll. Wenn ja, dann wird der übergebene Wert als rem inkludiert und bekommt einen px-Wert als Fallback. 
Ansonsten kann man auch einfach em-Werte nutzen.





Beispiel: `@include font-size(1.6)` wird mit aktivierter `@is-rem` Variable zu:




    
    <code>font-size: 1.6em;
    font-size: 16px;
    </code>





ansonsten zu:




    
    <code>font-size: 1.6em;
    </code>





Vielleicht kann einer von euch ja genau sowas gebrauchen, mir jedenfalls hat es eine Menge Zeit gespart. 
**Hast du Anmerkungen? Was sind eure Lieblings Mixins? Schreibt sie doch in die (immer noch kaputten) Kommentare.**



