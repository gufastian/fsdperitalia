# Tracciamento invii

## Vincolo

Il sito è pubblicato come GitHub Pages statico. Non c'è backend, non ci sono cookie, non ci sono analytics e non ci sono chiamate a servizi terzi.

## Cosa si può tracciare

- Apertura del `mailto:` nel browser.
- Copia del testo email o PEC.
- Solo localmente, tramite `localStorage` dell'utente.

Questi eventi indicano intenzione di invio, non invio reale.

## Cosa non si può tracciare

Non è possibile sapere se l'utente ha premuto "Invia" nel proprio client email o nel gestore PEC. Dopo l'apertura del `mailto:`, il controllo passa fuori dal browser.

## Perché non usiamo alternative

- Backend o serverless: richiede infrastruttura fuori da GitHub Pages.
- Analytics esterni: introduce terze parti e tracciamento remoto.
- BCC a una casella del progetto: raccoglie indirizzo email del mittente e contenuto del messaggio.
- Pixel di tracciamento: non funziona in testo semplice, è bloccato da molti client ed è invasivo.

## Scelta progettuale

Il progetto resta privacy-first: misura solo l'attività locale e dichiara esplicitamente il limite. La metrica reale è il volume di posta ricevuta dal MIT, non un contatore pubblico gestito dal sito.
