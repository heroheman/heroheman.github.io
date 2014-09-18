---
author: Florenz
comments: true
date: 2010-06-01 00:44:45+00:00
layout: post
slug: like-button-zu-tumblr-hinzufuegen
title: Like Button zu Tumblr hinzufügen
wordpress_id: 1585
categories:
- Tutorial
tags:
- Facebook
- Integration
- Like
- Likebutton
- Tumblr
---

**Vorab:** _Facebook ist zur Zeit ein viel diskutiertes Thema, vorallem die Privacy Einstellungen des Unternehmens sind vielen ein Dorn in Auge. Aber ehrlich: Es ist mir egal, ich habe meine Daten dort gut eingebunkert, niemand ausserhalb meines Freundeskreises kann irgendwas von mir sehen. Und das war auch schon vor Webseiten wie [ReclaimPrivacy](http://www.reclaimprivacy.org/) so. Wer das nicht hinbekommt, soll austreten. Danke. _

Der Likebutton ist überall. Ich habe schon vor ein paar Wochen versucht, aber leider fehlte mir dazu die nötige Tumblr Variable, welche den Permalink ausspuckt. Die ist nun da, und ich hab es in Rekordzeit gebastelt_ (was ber auch nicht wirklich schwierig war)_. Ich hab das ganze mal schnell zusammengeschrieben, da ich sicherlich nicht der letzte bin, welcher sich damit beschäftigen wird. 

Beispiel: [BarsandPies](http://barsandpies.tumblr.com)

Zuerst braucht man den Likebutton Code, welcher sich auf der [Facebook Developer](http://developers.facebook.com/docs/reference/plugins/like) Webseite kopieren lässt. Vorher noch die Anpassungen nach Wunsch anklicken und das war es. Ich persönlich habe mich für die Mini Variante entschieden, ohne Gesichter und mit einer Weite von 100px. Heisst bei mir übrigens nicht "Like" sondern "Recommend", denn für mich ist ein "Like" in freier Wildbahn nur eine Empfehlung auf Facebook. Nicht mehr. 
Wichtig: Im Formularfeld, welches die URL verlangt, bitte **{URLEncodedPermalink}** eintragen. Das ist ein [relativ neues Markup](http://staff.tumblr.com/post/553885501/urlencoded-theme-variable-transformation) von Tumblr, welches direkt den Permalink einer Tumblrseite ausspuckt. 

Der iFrame Code welchen wir bekommen sieht so aus:

    
    <iframe allowtransparency="true" src="http://www.facebook.com/plugins/like.php?href=%257BURLEncodedPermalink%257D&layout=button_count&show_faces=false&width=100&action=recommend&font&colorscheme=light&height=21" style="border:none; overflow:hidden; width:100px; height:21px;" scrolling="no" frameborder="0"></iframe>



Diesen Code müssen wir nun über die "Custom HTML" unter "Customize" im Tumblr Backend einfügen. Ich habe in meinen kleinen [Infografik Tumblr](http://barsandpies.tumblr.com) den Likebutton jeweils am Ende eines Posts eingefügt, aber das ist jeweils eure Entscheidung. Sucht nach: 
`{block:Posts}
...
{/block:Posts} `

...und einfach an die gewünschte Stelle einfügen. _Done. _
