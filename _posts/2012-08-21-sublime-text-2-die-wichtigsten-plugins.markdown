---
author: Florenz
comments: true
date: 2012-08-21 11:06:00+00:00
layout: post
slug: sublime-text-2-die-wichtigsten-plugins
title: 'Sublime Text 2: Die wichtigsten Plugins'
wordpress_id: 1959
categories:
- Blog
- Frontend
- Tools
- Tutorial
tags:
- Liste
- Plugins
- Sublime Text 2
---

Sublime Text 2, mein aktueller Lieblings Editor ist ein mächtiges Gerät und als größter Vorteil auch noch erweiterbar. Ich kann mir allerdings vorstellen, dass gerade ein erstmaliger Benutzer sich vielleicht nicht direkt in den Editor einarbeiten kann. Nachfolgend also mal eine Liste mit Dingen, die Anfängern, und vielleicht auch erfahrenen Nutzern helfen kann.





**Update 05.03.2013:** Zen Coding durch Emmet ersetzt, Live Reload hinzugefügt, Visuell überarbeitet



<!-- more -->



## Die wichtigsten Plugins





Essentielle Plugins, ohne die niemand anfangen sollte. Sofern nicht anders angegeben, sind alle Plugins via Package Control verfügbar.





* * *





### Allgemein





* * *





#### [Package Control](http://wbond.net/sublime_packages/package_control)





Das wahrscheinlich wichtigste Plugin ganz am Anfang - das Plugin was andere Plugins lädt und aktualisiert. Package Control lässt sich direkt über die Sublime Text 2 Konsole [installieren](http://wbond.net/sublime_packages/package_control/installation). Dort folgende Zeile einfügen und Enter drücken.





    <code>import urllib2,os; pf='Package Control.sublime-package'; ipp=sublime.installed_packages_path(); os.makedirs(ipp) if not os.path.exists(ipp) else None; urllib2.install_opener(urllib2.build_opener(urllib2.ProxyHandler())); open(os.path.join(ipp,pf),'wb').write(urllib2.urlopen('http://sublime.wbond.net/'+pf.replace(' ','%20')).read()); print 'Please restart Sublime Text to finish installation'
    </code>





Dann STRG+SHIFT+P / CMD+SHIFT+P drücken, "install" eingeben und ihr könnt die [Liste mit verfügbaren Plugins](http://wbond.net/sublime_packages/community) durchsuchen. Alternativ auch über "Preferences -> Package Control". Weitere Optionen stehen [hier](http://wbond.net/sublime_packages/package_control/usage) beschrieben.





[Visit Site](http://wbond.net/sublime_packages/package_control)





* * *





#### [Inc-Dec-Value](https://github.com/rmaksim/Sublime-Text-2-Inc-Dec-Value)





Kleines Plugin - großer Nutzen. Schnell Zahlen erhöhen, wie man es aus Firebug kennt. Klappt auch hervorragend mit Multiselection





[![]({{ site.baseurl }}/images/2012/07/inc_dec_number.gif)]({{ site.baseurl }}/images/2012/07/inc_dec_number.gif)





[Github](https://github.com/rmaksim/Sublime-Text-2-Inc-Dec-Value)





* * *





#### [Singleline](http://www.florenz.co.uk/sublime-text-2-singleline-multiline-css-formatierung/)





Ursprünglich ein Plugin, was ich mir selbst rudimentär gebaut habe, wurde dank Github inzwischen weiter ausgebaut und überarbeitet, weshalb man es auch auf die Allgemeinheit loslassen kann.





[Plugin](http://www.florenz.co.uk/sublime-text-2-singleline-multiline-css-formatierung/)





* * *





#### [Gist](https://github.com/condemil/Gist)





Die Code Snippet Verwaltung Gist von Github ist an sich bereits nicht schlecht, aber dieses Plugin macht es erst richtig gut. Warum habe ich ja bereits [an dieser Stelle](http://www.florenz.co.uk/snippetverwaltung-mit-gist-und-sublime-text/) beschrieben.





[Github](https://github.com/condemil/Gist)





* * *





#### [Bracket Highlighter](https://github.com/facelessuser/BracketHighlighter/)





Braucht man nicht viel zu sagen. Bessere Hervorhebung von Klammern. Das Bild zeigt eigentlich auch schon alles.





[![]({{ site.baseurl }}/images/2012/08/example.png)](https://github.com/facelessuser/BracketHighlighter/)





[Github](https://github.com/facelessuser/BracketHighlighter/)





* * *





### Webentwicklung





* * *





#### Emmet (ehemals Zen Coding)





Mit Emmet lässt sich bequem mit einem Einzeiler komplexe HTML Elemente erstellen. So wird aus





    <code>div.content>h2{Headline}+ul.list>li.item.item-$*7>a{lorem ipsum dolor}
    </code>





mit einem Tastendruck (Tab oder Alt+Enter) folgendes:





    <code><div class="content">
        <h2>Headline</h2>
        <ul class="list">
            <li class="item item-1"><a href="">lorem ipsum dolor</a></li>
            <li class="item item-2"><a href="">lorem ipsum dolor</a></li>
            <li class="item item-3"><a href="">lorem ipsum dolor</a></li>
            <li class="item item-4"><a href="">lorem ipsum dolor</a></li>
            <li class="item item-5"><a href="">lorem ipsum dolor</a></li>
            <li class="item item-6"><a href="">lorem ipsum dolor</a></li>
            <li class="item item-7"><a href="">lorem ipsum dolor</a></li>
        </ul>
    </div>
    </code>





Nachtrag: Die Funktionalitäten wurden mit Emmet stark erweitert. Es wurden viele Trigger hinzugefügt, einfach mal in die [Emmet Dokumentation](http://docs.emmet.io/) schauen.





[Plugin](http://emmet.io/)





* * *





#### Prefixr





Wer keinen Bock mehr auf Vendor-Prefixes hat, dem ist Prefixr zu empfehlen. Prinzip: CSS3 Eigenschaft (ohne -moz, -webkit, etc) eingeben, Plugin starten und die dazugehörigen -webkit's, -moz's und -o's werden hinterhergeworfen. Easygoing.





Das Plugin zapft die Prefixr API von Nettuts an und bietet auch deren Voreinstellungen an. Benutzen und hoffen, dass die ganze Prefix Affäre sich sehr schnell erledigt.





[Plugin](http://wbond.net/sublime_packages/prefixr)





* * *





#### Live Reload





Dieses Plugin aktualisiert mithilfe eines dazugehörigen Browserplugins (siehe Github) die Seite nach jeder Änderung. Ermöglicht schnelles aktualisieren von Projekten.





[Github](https://github.com/dz0ny/LiveReload-sublimetext2)





* * *





#### Browser Refresh





Im Gegensatz zu Live Reload wird hier die Änderung nicht automatisch getriggert, sondern über einen Shortcut. [Plugin](http://gcollazo.github.com/BrowserRefresh-Sublime/)





* * *





### Snippet Pakete





* * *





#### jQuery





Essentielle Snippet Sammlung für die jQuery Programmierung. Enthält neben einer Vielzahl von Snippets auch die jQuery Documentation und Syntax Highlighting.





[Github](https://github.com/SublimeText/jQuery)





* * *





#### jQuery Mobile Snippets





jQuery Mobile Snippets für das mobile [Framework][22]. Von mir bislang kaum getestet, da scheint aber brauchbar zu sein.





[Github](https://github.com/devtellect/sublime-jquery-mobile-snippets)





* * *





#### HTML5 Snippets





Snippets, Snippets und noch mehr Snippets... Kommt, genau wie jQuery Snippets, von [mrmartineeau](https://github.com/mrmartineau). Alle Snippets für HTML5 - im wesentlichen ein Must-Have. So.





[Github](https://github.com/mrmartineau/HTML5)





* * *





#### Wordpress





Wer öfters mit Wordpress arbeitet z.B. Theme Entwicklung wird dieses Package sicherlich zu schätzen wissen.





[Github](https://github.com/purplefish32/sublime-text-2-wordpress)





* * *





### Sonstiges





* * *





#### SFTP





Das einzige kostenpflichtige Plugin was ich soweit benutze und auch empfehlen kann. Direkt mit FTP verbinden, Synchronisieren, Ordner mit Remote mappen, File Monitoring... hat man sich erstmal dran gewöhnt, öffnet man ein FTP Programm nur noch wenn es um die Strukturierung von Ordnern geht, das bietet die minimale Oberfläche leider noch nicht wirklich. Ansonsten ein sehr praktisches Premium Plugin. Da es von den Package Control Entwickler kommt, ist es natürlich auch darüber erhältlich.





[Plugin](http://wbond.net/sublime_packages/sftp)





* * *





#### CodeIntel





CodeIntel ist mächtig. Wer einen Ersatz für eine IDE braucht, sollte sich CodeIntel definitiv angucken, da es um einige IDE Features erweitert wird.





>

>
>

>   * Jump to Symbol Definition - Jump to the file and line of the definition of a symbol.
>

>   * Imports autocomplete - Shows autocomplete with the available modules/symbols in real time.
>

>   * Function Call tooltips - Displays information in the status bar about the working function.
>









  * Unterstützt: PHP, Python, RHTML, JavaScript, Smarty, Mason, Node.js, XBL, Tcl, HTML, HTML5, TemplateToolkit, XUL, Django, Perl, Ruby, Python3.





[Github](http://github.com/Kronuz/SublimeCodeIntel)





* * *





#### Sublime Linter





Ein Linter für alles. Wer Sublime Text ernsthaft als IDE nutzen will, kommt um Sublime Linter nicht herum. Der Linter nutzt zum Teil mitgelieferte Linting Plugins wie jshint oder csslint, in manchen Fällen muss aber auch auf die Sprachen-spezifischen Module verlinken. Für PHP also in den Plugin Einstellungen auf PHP verlinken - es wird `php -l genutzt`. Für die Konfiguration wird man nicht um die Anleitung auf GitHub herum kommen, aber wenn es läuft will man es nicht mehr wissen. Zur vollständigen IDE fehlt dann eigentlich nur noch ein Debugger.





[Github](http://github.com/SublimeLinter/SublimeLinter)





* * *





#### Nettuts Fetch





Mit Fetch lassen sich schnell Bibliotheken wie z.B. jQuery importieren.





[Nettuts Fetch - Artikel](http://net.tutsplus.com/articles/news/introducing-nettuts-fetch/)





* * *





_...Wird fortgesetzt._





* * *





### Links







  * [Essential ST2 Plugins](http://net.tutsplus.com/tutorials/tools-and-tips/essential-sublime-text-2-plugins-and-extensions/), Nettuts


  * [Package Control](http://wbond.net/sublime_packages/community), Wbond.net


  * [Sublime Text Setup](https://github.com/mrmartineau/SublimeTextSetup), Github



