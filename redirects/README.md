# Redirects: flore.nz → blog.flore.nz

Ziel: `flore.nz/` zeigt die Profilseite, **alles andere** wird dauerhaft (301)
und path-erhaltend auf `blog.flore.nz/*` weitergeleitet.

Beispiele:

| Anfrage | Antwort |
|---|---|
| `flore.nz/` | 200 — Profilseite (`index.html`) |
| `flore.nz/me-finger-lego.jpeg` | 200 — Profil-Asset |
| `flore.nz/blog/pines-blake-crouch` | 301 → `blog.flore.nz/pines-blake-crouch` |
| `flore.nz/blog/en/foo` | 301 → `blog.flore.nz/en/foo` |
| `flore.nz/irgendwas?x=1` | 301 → `blog.flore.nz/irgendwas?x=1` |

## Apache / LiteSpeed (Standard bei Shared-Webspace)

Aktiv über [`../.htaccess`](../.htaccess) im Web-Root. Nichts weiter nötig,
sofern `mod_rewrite` und `AllowOverride` aktiv sind (bei Shared-Hosting i.d.R. der Fall).

## Nginx (falls du die Server-Config selbst steuerst)

```nginx
server {
    server_name www.flore.nz;
    return 301 https://flore.nz$request_uri;
}

server {
    server_name flore.nz;
    root /pfad/zum/webroot;

    location = /blog {
        return 301 https://blog.flore.nz/;
    }
    location ^~ /blog/ {
        rewrite ^/blog/(.*)$ https://blog.flore.nz/$1 permanent;
    }

    # Root und vorhandene Profil-Assets normal ausliefern,
    # alles andere dauerhaft auf blog.flore.nz.
    location / {
        try_files $uri $uri/ @blog;
    }
    location @blog {
        return 301 https://blog.flore.nz$request_uri;
    }
}
```

## Warum kein 200-Stub / kein 404.html mehr?

Frühere Zwischenstände (per-Slug-Stubs, `404.html`-JS-Wildcard) waren nur nötig,
weil GitHub Pages keine echten Redirects kann. Auf eigenem Webspace macht der
Server einen **echten 301** — sauber für SEO, eine Regel, keine generierten Dateien,
keine Pflege bei neuen Beiträgen.

## Hinweis

Die Datei `../CNAME` ist GitHub-Pages-spezifisch und kann entfernt werden,
sobald flore.nz nicht mehr über GitHub Pages läuft.
