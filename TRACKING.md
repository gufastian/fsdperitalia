# Tracciamento azioni

## Cosa misuriamo

Il contatore pubblico misura i click unici per browser sui pulsanti di azione:

- apertura email tramite `mailto:`
- copia del testo email
- copia del testo PEC
- apertura del sito MIT
- condivisione della pagina

Il dato salvato nel Cloudflare KV è solo aggregato:

```text
action_clicks = 123
```

Non misuriamo email realmente inviate: dopo l'apertura del `mailto:`, il controllo passa al client di posta e il browser non può sapere se l'utente preme "Invia".

## Cosa non salviamo

Il Worker non salva:

- IP
- user agent
- referer
- cookie
- fingerprint
- email
- nome
- città
- testo del messaggio
- identificatori pseudonimi

## Dedupe

Per evitare incrementi multipli dalla stessa persona, il dedupe è nel browser:

```text
localStorage.fsd_counter_action_counted_v1 = 1
```

Questa informazione non viene inviata al Worker. Se l'utente cancella i dati del browser o usa un altro dispositivo, può essere contato di nuovo.

## Perché non deduplichiamo lato Worker

Un dedupe lato Worker richiederebbe almeno una di queste tecniche:

- IP address
- cookie
- fingerprint
- token persistente salvato server-side
- hash di un identificatore

Sono tutte meno privacy-friendly perché creano o usano un identificatore individuale. Per questo il Worker mantiene solo il conteggio aggregato.

## GDPR

Il progetto non conserva dati personali applicativi. Cloudflare può trattare dati tecnici nei propri log infrastrutturali per fornire il servizio Worker/KV; va citato nella privacy come provider tecnico.
