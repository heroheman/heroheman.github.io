---
author: Florenz
comments: true
date: 2013-05-27 21:40:32+00:00
layout: post
slug: ie10-metro-and-media-queries
title: IE10, Metro, and Media Queries
wordpress_id: 2592
categories:
- Links
tags:
- CSS
- Fotografie
- IE
- Internet Explorer
- Kachelmodus
- Media Queries
- Mediaqueries
- Metro
- Microsoft
- Modern UI
- Windows 8
---

[Adrian Roselli:](http://blog.adrianroselli.com/2013/05/ie10-metro-and-media-queries.html)





> 
  
> 
> The lesson I learned here is that if I want to properly test Internet Explorer 10, I can't rely on a desktop installation on Windows 7 or Windows 8, I need to also test in the Metro interface and, ideally, on the appropriate hardware as well.
> 
> 






Ich war kurz davor zu glauben, dass mit dem Internet Explorer 10 endlich ein brauchbarer, sich an Standards haltender Browser veröffentlicht wurde. Bis ich diesen Artikel gelesen habe. Kurzes Zusammenfassung: Microsoft erkennt Media Queries wie andere Browser es auch machen, bis zu dem Moment in dem eine Seite im <strike>Metro</strike> <strike>Modern</strike> Kachel Modus des Internet Explorers aufgerufen wird. Hier tritt scheinbar eine Eigenschaft der mobilen Geräte in Kraft, in der Media Queries vom Browser ausser Kraft gesetzt wird und eine implementierte Skalierung eingesetzt wird.





Rosellis Lösung: `@-ms-viewport { width: device-width; }` in das CSS einfügen. Trotzdem bleibt mir schleierhaft, wieso so etwas überhaupt implementiert wird.





_Achtung: Ich konnte dieses Verhalten aufgrund momentan fehlender W8 Peripherie nicht testen._



