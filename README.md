Wie baue ich ein Photoshop-Panel
================================
- - -
Folgende Tools werden benötigt:

* [CC Extensions Signing Toolkit](http://labs.adobe.com/downloads/extensionbuilder3.html) - Unten auf der Seite sind Links zur 32 oder 64 Bit-Version
* [Adobe Exchange Packager](http://www.adobeexchange.com/resources) - Im Moment auf der rechten Seite zu finden. (Natürlich mit der AdobeID anmelden)
- - -

Guckst Du hier: Ordner **com.novagraphix.photoshoptools**. Hier die `index.html` umbauen, bzw. anpassen. Ist Standard-HTML und CSS, soll wohl kein Problem sein. Die Buttons werden in der `js/main.js` verknüpft. Dort werden dann die Funktionen in der `host/Photoshop.jsx` angesprochen. Wie wir die Funktionen aus Photoshop-Actions erstellen, erkläre ich im nächsten Absatz.

###Photoshop###
Unter Actions eine Gruppe erstellen, dort dann Actions aufnehmen. Direkt schön benennen, denn das werden auch die Funktionsnamen im Javascript. Die ganze Gruppe abspeichern als `whatever.atn`. Jetzt über Datei->Skripten->Durchsuchen.. die Datei `ActionFileToJavascript.jsx` starten, welche im Archiv dabei ist. Ist selbsterklärend, denn dieses Skript konvertiert die `whatever.atn` in `whatever.jsx`. Das sind unsere Funktionen, die wir dann in die `home/Photoshop.jsx` kopieren können. EASY!

###Certificate###
Falls Du kein Certificate hast, dann bastel Dir eins mit dem Exchange Packager. Java muss hierfür installiert sein, da Du den Pfad brauchst. Danach einfach erstellen und eine `whatever.p12` kann gespeichert werden.

###Sign the package###
Jetzt geht es rund. Folgende Zeile (mit den eigenen Daten ;) in die Console eingeben:

`ccextensionswin64.exe -sign com.novagraphix.**PFADZUMTOOL** com.novagraphix.**TOOLNAME**.zxp yourcertificate.p12 yourCertificatePassword -tsa https://timestamp.geotrust.com/tsa`

Danach wurde die .zxp erstellt und Du kannst Sie mit dem Adobe Exchange Manager CC installieren.

Easy as cake.......
