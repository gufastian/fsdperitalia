# Counter Cloudflare Worker

Contatore globale per i click sui pulsanti di azione.

## Cosa salva

Solo un numero aggregato in KV:

```text
action_clicks = 123
```

Non salva IP, user agent, referer, cookie, fingerprint, email, nome o testo del messaggio.

## Dedupe

Il dedupe è client-side, con `localStorage`:

```text
fsd_counter_action_counted_v1 = 1
```

Questo evita di contare più volte lo stesso browser senza inviare al Worker identificatori persistenti. Farlo lato Worker richiederebbe IP, fingerprint, cookie o token pseudonimo salvato server-side: soluzione meno GDPR-friendly.

## Deploy

```bash
cd worker
npx wrangler login
npx wrangler kv namespace create COUNTER_KV
```

Copia l'`id` ottenuto dentro `wrangler.toml`, poi:

```bash
npx wrangler deploy
```

## Routing consigliato

Se `fsdperitalia.it` è gestito da Cloudflare, abilita una route Worker:

```toml
routes = [
  { pattern = "fsdperitalia.it/api/counter", zone_name = "fsdperitalia.it" }
]
```

Così `index.html` può chiamare `/api/counter` senza esporre un dominio Worker separato.

Se invece usi il dominio `*.workers.dev`, cambia in `index.html`:

```js
const COUNTER_ENDPOINT = 'https://fsdperitalia-counter.vekexasia.workers.dev/api/counter';
```

## GDPR

Il progetto non tratta dati personali applicativi: il Worker riceve richieste HTTP, ma il codice non legge e non conserva identificatori. Cloudflare può trattare dati tecnici nei propri log infrastrutturali come fornitore del servizio; va citato nella privacy come provider tecnico.
