# Contribuire

Grazie per voler aiutare a mantenere aggiornato il sito.

## Deployment

Il sito è pubblicato con GitHub Pages dalla branch `main`, cartella root `/`.

Le pull request e le branch diverse da `main` non vengono pubblicate su `fsdperitalia.org`. Il deploy avviene solo dopo il merge in `main`.

## Cosa aggiornare

Il file principale è `index.html`. Sono benvenute pull request per:

- aggiornare fonti e riferimenti pubblici sulla vicenda FSD in Italia/UE;
- correggere indirizzi email istituzionali;
- correggere errori, refusi o link rotti;
- migliorare accessibilità, leggibilità o compatibilità mobile senza cambiare il messaggio del sito.

## Requisiti per le modifiche editoriali

Ogni aggiornamento sostanziale deve includere una fonte pubblica verificabile, preferibilmente istituzionale o primaria.

Quando proponi una modifica:

1. modifica `index.html`;
2. aggiungi o aggiorna il link alla fonte nella sezione fonti, se necessario;
3. spiega nella pull request cosa è cambiato e perché;
4. indica la fonte usata.

Evita affermazioni non verificabili, toni promozionali o contenuti non collegati all'obiettivo civico del sito.

## Sviluppo locale

Richiede Node.js 20+.

```bash
npm install
npm run dev
```

Poi apri `http://localhost:5173/`.

Per modifiche solo testuali puoi anche aprire direttamente `index.html` nel browser, ma il server locale è preferibile per controllare il comportamento reale.

## Privacy e contatore

Non introdurre analytics, pixel, font remoti, CDN o servizi terzi senza discuterlo prima in una issue.

Il contatore pubblico è volutamente minimale e aggregato. Le modifiche a `worker/` devono mantenere questa impostazione privacy-first.

## Checklist pull request

Prima di aprire la PR:

- [ ] ho verificato che `index.html` si apra correttamente;
- [ ] ho controllato i link aggiunti o modificati;
- [ ] ho incluso fonti pubbliche per le nuove affermazioni;
- [ ] non ho introdotto tracking o raccolta dati personali;
- [ ] la modifica riguarda una branch diversa da `main` e verrà pubblicata solo dopo merge.
