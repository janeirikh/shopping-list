# Shopping-list

## Case-beskrivelse

Du skal lage en enkel applikasjon for å opprette handlelister. Det skal være mulig å legge inn flere handlelister, og hver av disse skal kunne inneholde en liste med oppføringer over ting som skal handles.

### Opprettelse og listing av handlelister
![Screenshot](handleliste.png)

På denne siden skal det være mulig å:
1. Legge til ny handeliste ved å legge til navn og trykke på "Legg til"
2. Trykke på navnet til handleliste for å gå til side som viser innhold.
3. Trykke på slett-knappen for å fjerne handelisten.

### Vise detaljer for en handleliste
![Screenshot](handleliste2.png)
På denne siden skal brukeren kunne:
1. Legge til nye elementer ved å skrive inn produktnavn og trykke på "Legg til"
2. Trykke på teksten for å markere elementet som ferdig (strek gjennom tekst)
3. Tykke på slett for å fjerne element fra listen

## Oppstart

Kjør følgende kommandoer i prosjektmappen:

```
npm i
npm start
```

## Oppgave 1
Konfigurer routeren til å vise innholdet i komponenten ShippingLists på root "/".

Hint: Både App- og ShippingList-komponentene skal vises. Se nærmerere på IndexRoute for å få til dette.

## Oppgave 2
- Legg til midlertidig reducer for å ha testdata
- Vise handelistene i en liste

## Oppgave 3
- Legge til nye handelister
- actions?
- hint bound components

## Oppgave 4
- Slette handelister fra liste

## Oppgave 5
- Legg til route for å vise detaljert informasjon på /shoppinglist/:id
- Legg til Link på navnene til handlelistene, så trykk på disse tar deg til den aktuelle handlelisten.

## Oppgave 6
- Lag funksjonalitet for å legge til elemeter på handelisten

## Oppgave 7
- Gjør det mulig å slette elemeter fra handelisten

## Oppgave 8
- Trykk på element i handelisten skal markere det som ferdig.
