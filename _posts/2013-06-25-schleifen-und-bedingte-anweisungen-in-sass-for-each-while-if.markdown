---
author: Florenz
comments: true
date: 2013-06-25 20:31:31+00:00
layout: post
slug: schleifen-und-bedingte-anweisungen-in-sass-for-each-while-if
title: 'SASS Directives: Schleifen und bedingte Anweisungen'
wordpress_id: 2571
categories:
- Blog
- Frontend
- Tutorial
tags:
- CSS
- Directives
- each
- for
- preprozessor
- Sass
- SCSS
- snippet
- while
---

Weil ich es teilweise selber immer wieder nachsuchen muss - nachfolgend die vier Kontrolldirektiven von SASS. Die Grundzüge sollten den meisten bekannt sein, hier geht es eher um die allgemeine Syntax und Eigenheiten in der Syntax.





## @if





Eine einfache `if/else` Anweisung. Eigentlich selbsterklärend, trotzdem; Wenn $is-rem true ist wird der erste Block ausgeführt, wenn nicht dann Block Zwei.




    
    <code>@if $is-rem {
        font-size: ($sizeValue * 10) + px;
        font-size: $sizeValue + rem;
    }@else{
        font-size: $sizeValue + em;
    }
    </code>





## @for





Die For-Schleife in SASS. Etwas anders als die Bekannte `for(i = 0, i&lt;3, i++)` Schreibweise. In diesem Fall wird die Schleife **3** mal ausgeführt und beginnt bei **1**. Die `$i` Variable wird jedesmal um eine Stelle erhöht.




    
    <code>@for $i from 1 through 3 {
        .span-#{$i} { width: 2em * $i; }
    }
    </code>





**Output:**




    
    <code>.span-1{ width: 2em; }
    .span-2{ width: 4em; }
    .span-3{ width: 6em; }  
    </code>





## @each





Das @each-Direktiv arbeitet eine definierte Liste ab, in diesem Fall diverse GUI Elemente. Hierbei steht $ui für die Variable, die auch als dateiname verwendet wird.




    
    <code>@each $ui in edit, save, check, logout {
        .#{$ui}-icon {
            background-image: url('/images/icon-#{$ui}.png');
        }
    }
    </code>





**Output:**




    
    <code>.edit-icon{ background-image: url('/images/icon-edit.png'); }
    .edit-save{ background-image: url('/images/icon-save.png'); }
    .edit-check{ background-image: url('/images/icon-check.png'); }
    .edit-logout{ background-image: url('/images/icon-logout.png'); }
    </code>





## @while





Mit While wird ein Element solange wiederholt, bis eine Bedingung wahr ist. Hier wird ein Grid mit 12 Spalten erstellt.




    
    <code>$grid: 12;
    @while $grid > 0 {
        .col-#{$grid} { width: 2em * $grid; }
        $grid: $grid - 1;
    }
    </code>





**Output:**




    
    <code>.col-12{ width: 24em; }
    .col-11{ width: 22em; }
    .col-10{ width: 20em; }
    ....
    .col-1{ width: 2em; }
    </code>





Auch wenn dieser Beitrag etwas knapp war, ich hoffe der eine oder andere kann hier etwas mitnehmen. Unklarheiten, Anmerkungen und Feedback gerne in die Kommentare.



