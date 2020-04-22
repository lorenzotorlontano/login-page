# Preparare una pagina di login
Url chiamata ajax : https://reqres.in/api/login
La chiamata avrà questo formato (NB: usare la mail in esempio o vi ritornerà errore):

```json
{
    "email": "eve.holt@reqres.in",
    "password": "<apiacere>"
}
```

## Requisiti
- La login deve essere stilizzata come nello screen riportato sulla mail che vi ho inviato (qui trovate il logo posto sopra il form di login https://npm.github.io/new-docs/public/images/publishing.svg)
- Al success della chiamata ci sarà un token di risposta
- Salvare nel localstorage i dati inseriti nella login e il token
- Al success della login atterrare in una pagina (non è richiesta stilizzazione) con messaggio di benvenuto (ciao + nome (preso dal - localstorage));
- Creare una regola
  - se nel localstorage abbiamo il token rimaniamo in pagina
  altrimenti ci punta alla login
  - Bottone logout che ritorna alla login e pulire il localstorage
  
# Regole
- Nessun framework css
- Nessun framework js
