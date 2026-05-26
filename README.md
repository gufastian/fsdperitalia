# FSD Italia

> Sito civico per chiedere al Ministero dei Trasporti italiano di pronunciarsi sull'omologazione del Tesla Full Self-Driving Supervised, riconoscendo l'omologazione provvisoria olandese ai sensi dell'art. 39 del Regolamento (UE) 2018/858.

## Cosa fa

Permette a chiunque, in 30 secondi, di:

1. **Inviare un'email pre-scritta** al Gabinetto del MIT con in CC i parlamentari che hanno già preso posizione (Calenda, Pastorella, Raimondo, Casu, Iaria) — apre il client email locale tramite `mailto:`.
2. **Generare un testo PEC formale** da copia-incollare nel proprio gestore PEC (Aruba, Poste, Legalmail, ecc.).
3. **Condividere** la pagina per amplificare la pressione.

## Privacy

**Zero cookie. Zero analytics. Nessuna raccolta di dati personali applicativi.**

- Tutto il codice della pagina gira nel browser dell'utente.
- Non ci sono font remoti, CDN o analytics.
- Il contatore pubblico usa un Cloudflare Worker che salva solo un numero aggregato di click sui pulsanti di azione.
- Il dedupe è client-side con `localStorage`, così il Worker non riceve identificatori persistenti da salvare.
- Nessun form di registrazione, nessun backend applicativo che conserva IP, user agent, email, nomi o contenuti.

Il GDPR resta soddisfatto by design perché il progetto conserva solo un conteggio aggregato. Cloudflare va indicato come fornitore tecnico per l'erogazione del Worker.

## Sviluppo locale con hot reload

Richiede Node.js 20+.

```bash
npm install
npm run dev
```

Apri `http://localhost:5173/`. Ogni modifica a `index.html` ricarica automaticamente la pagina.

## Hosting consigliato: GitHub Pages

1. Fork/clona questo repository
2. Vai su **Settings → Pages**
3. Seleziona `main` branch, root folder
4. Salva → online in 1–2 minuti

Per il dominio custom `fsdperitalia.org`:
1. Il file `CNAME` in root contiene `fsdperitalia.org` ed è letto da GitHub Pages a ogni deploy
2. In **Settings → Pages**, inserisci `fsdperitalia.org` come dominio custom
3. Nel DNS del dominio, configura l'apex verso GitHub Pages:
   - `A 185.199.108.153`
   - `A 185.199.109.153`
   - `A 185.199.110.153`
   - `A 185.199.111.153`
   - opzionale IPv6: `AAAA 2606:50c0:8000::153`, `AAAA 2606:50c0:8001::153`, `AAAA 2606:50c0:8002::153`, `AAAA 2606:50c0:8003::153`
4. Attendi il rilascio del certificato HTTPS e abilita **Enforce HTTPS**

## File

- `index.html` — la pagina statica, singolo file autocontenuto
- `package.json` / `package-lock.json` — server locale Vite con hot reload
- `.gitignore` — esclusione dipendenze e artefatti locali
- `README.md` — questo file
- `TRACKING.md` — nota tecnica sul contatore e sui limiti del tracciamento invii
- `worker/` — Cloudflare Worker del contatore globale
- `CNAME` — dominio custom GitHub Pages
- `.nojekyll` — evita trasformazioni Jekyll su GitHub Pages
- `LICENSE` — CC0

## Limiti tecnici noti

- **Invio reale non tracciabile da GitHub Pages** — il contatore misura click unici per browser sui pulsanti di azione, non email realmente spedite. Il browser non può sapere se l'utente ha poi premuto "Invia" nel client di posta.
- **Lunghezza `mailto:`** — il testo dell'email è ~2.400 caratteri; funziona su Gmail/Outlook desktop, ma alcuni client mobili potrebbero troncarlo. Esiste anche il pulsante "Copia testo" come fallback.
- **PEC del MIT** — accetta SOLO email da altre PEC. L'utente deve avere una PEC personale (chi ha partita IVA ne ha già una; per i privati va richiesta a un gestore).
- **Indirizzi parlamentari in CC** — gli indirizzi inseriti seguono lo schema standard di Camera/Senato ma andrebbero verificati uno per uno sui siti ufficiali prima di un lancio massivo. Patches benvenute.

## Contributi

Pull request benvenute. Vedi [`CONTRIBUTING.md`](CONTRIBUTING.md) per le regole di contribuzione e deployment.

In particolare sono utili:
- Verifica indirizzi parlamentari aggiornati
- Aggiornamento delle fonti e della cronologia della vicenda
- Correzione di link rotti, refusi o imprecisioni
- Miglioramenti di accessibilità e compatibilità mobile

## Licenza

Pubblico dominio (CC0) per il codice. Le citazioni di atti parlamentari e regolamenti UE sono per loro natura pubbliche.

## Disclaimer

Iniziativa civica indipendente. **Nessun legame con Tesla, Inc., con il MIT, con i partiti citati, o con qualsiasi entità commerciale o politica.** Tutte le affermazioni sono accompagnate da link a fonti pubbliche verificabili.

---

*Last updated: maggio 2026*

