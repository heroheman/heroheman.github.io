---
author: Florenz
comments: true
date: 2012-10-29 09:41:55+00:00
layout: post
slug: platzhalter-in-sass-3-2-nutzen
title: Platzhalter in SASS 3.2 nutzen
wordpress_id: 2143
categories:
- Blog
- Frontend
- Tutorial
tags:
- Best Practices
- Placeholder
- Platzhalter
- Sass
---

![]({{ site.baseurl }}/images/2012/10/sass.jpg) Das letzte Update von SASS hat ein interessantes Feature mitgebracht. [Platzhalter](http://chriseppstein.github.com/blog/2012/08/23/sass-3-2-is-released/). Diese ermöglichen den einfachen Einsatz von CSS Objekten, mit dem Vorteil, dass diese nur dann angezeigt werden, wenn sie auch wirklich benutzt werden. Wie die Platzhalter funktionieren erkläre ich jetzt. Ganz Kurz. Versprochen.



<!-- more -->



SASS ermöglicht bereits die Erweiterbarkeit von CSS Blöcken mithilfe von @extend. Hierbei lassen sich beliebige CSS Blöcke mit einen bereits definierten Block erweitern. Ein Beispiel:





    <code>// Diese Blöcke sollen später evtl. genutzt werden:
    .float-left{
        float: left;
    }
    .float-right{
        float: right;
    }


    // Die Blöcke die erweitert werden.
    .teaser{
        @extend .float-left;
        background: white;
        color: black;
        width: 300px;
    }

    .zweiter-teaser{
        @extend .float-left;
        background: green;
        color: yellow;
    }
    </code>





Das sieht im kompilierten CSS so aus:





    <code>.float-left,
    .teaser,
    .zweiter-teaser{
        float: left;
    }

    .float-right{
        float: right;
    }

    .teaser{
        background: white;
        color: black;
        width: 300px;
    }

    .zweiter-teaser{
        background: green;
        color: yellow;
    }
    </code>





Zum einen haben wir schon mal nicht alles dupliziert, wie es mit einem normalen @include passiert wäre, allerdings wird die _float-right_ Klasse trotzdem sichtbar und bei größeren Projekten, insbesondere mit [OOCSS](http://oocss.org) in der Anwendung, werden alle Klassen in das CSS geschrieben - ob benutzt oder nicht. Und hier kommen Platzhalter ins Spiel.





    <code>// Hier stehen wieder die zu erweiterbaren Klassen.
    // Der Unterschied ist, dass hier ein % statt eines Punktes (oder Raute) benutzt wird
    %float-left{ float: left; }
    %float-right{ float: right; }

    // Es wird mit % erweitert
    .teaser{
        @extend %float-left;
        background: white;
        color: black;
        width: 300px;
    }

    .zweiter-teaser{
        @extend %float-left;
        background: green;
        color: yellow;
    }
    </code>





wird zu:





    <code>.teaser,
    .zweiter-teaser{
        float: left;
    }

    .teaser{
        background: white;
        color: black;
        width: 300px;
    }

    .zweiter-teaser{
        background: green;
        color: yellow;
    }
    </code>





Aus der Platzhalter Klasse wird hier keine Klasse in das CSS geschrieben und nicht benutzte Platzhalter werden gar nicht erst angezeigt. Nutzt man Platzhalter nun mit OOCSS Klassen hilft es aufgeblasene CSS Dateien zu verhindern und nur das nötigste an CSS zu produzieren. Für ein noch ausführlicheres Beispiel (mit Ninjas!) empfehle ich diese [Präsentation auf Speakers Deck](https://speakerdeck.com/anotheruiguy/sass-32-silent-classes)





Fragen und Anmerkungen gerne in die Kommentare.



