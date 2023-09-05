# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).



# Kursprojekt - Strong n' Epic
Deadline: 15:e september 17:00.

I denna uppgift är grupper valfria men får som mest bestå av 3 deltagare och ska registeras via omnius senaste ikväll (4:e september 17:00). Observera att det däremot är ett krav att man ingår i en grupp av minst 2. 

# Avgräsningar

Det krävs inte att någon form av backend utvecklas för denna uppgift, endast att studerande kan simulera en backend genom exempelvis json filer.

# Beskrivning

Strong n' Epics vill ta fram en prototyp för en webbapplikation som ska fungera som en bokningstjänst för deras nya gymkedja. Ditt jobb är att skapa en MVP bokningsapp med en administrativ vy i react med typescript.

## Innan du börjar koda!

Detta arbete kommer skilja sig från tidigare arbeten genom att gruppen själva tar fram förslag på design. Observera att den enda konkreta design som förväntas produceras är wireframes då det skulle ta för lång tid att finslippa en design i denna kurs.

**Viktigt** Då ni själva skapar projektets kravspecifikation i denna uppgift så är det viktigt att förstå att det är en *plan*, och att om planen inte helt uppfylls som behöver det *inte* betyda att du blir underkänd.

# Krav
- Applikationen ska vara byggd i react med typescript
- Komponenternas syfte bör framgå av deras namn
- Komponenterna ska innehålla props deklarationer
- Parametrar, states och övriga datatypsdeklarationer ska innehålla en tydlig typning. Om typen av en variabel inte kan toklas (en: infer) vid deklaration bör typen sättas med antingen Type alias eller interface.
- Applikationen ska innehålla följande sidor
  - Landningssida
  - Bokningssida
  - Administratörvy
- En kravspecifikation ska skickas in till läraren senast 6:e september. Revidering kan krävas. Se instruktioner för kravspecifikation längre ner.

Vidare ska applikationen även vara stilren. Detta innebär inte en super finslippad design, men det ska finnas ett konsekvent tänk i det visuella.

## Bokningssida beskrivning
I bokningssidan ska det framgå vilka pass som är öppna samt om man redan har bokat ett pass.

## Administratörvy
I administratörvyn ska det framgå vilka som är registerade på sidan samt vilka pass som de är registerade på.

Det ska även gå att lägga in "nya" träningspass.

## Kravspecifikation
Kravspecfikationen ska innehålla följande
1. En indexerad lista av user stories tillhörande applikationen
   1. Tänka på att user stories ska beskriva vem, vad och varför för en vis tjänst.
   2. För user stories som gruppen inte tror att ni kommer bli klara med, markera detta med ett "!" eller "(Önskan)".
2. Wireframes som representerar varje vy i deras olika states (ex. vy med obokat och en vy med bokat pass)

# Backend

En MVP behöver inte innehålla ett färdigt API och det går då bra att "fejka" ett API med json filer. Går även bra att använda ett mock api såsom [MirageJs](https://miragejs.com/)

## Bedömning

Innan deadline ska en individuell videopresentation skickas in via omnius. Videon måste uppfylla följande tekniska krav:
1. Studerande måste vara synlig i minst 15 sekunder under videoinspelningen.
2. Videon får **inte** överstiga 5 minuter (300 sekunder).
3. Ljudkvaliteten ska vara accepterbar och det ska gå att höra den inspelades röst under hela inspelningen.
   
Följande ska presenteras under inspelningen.

### Introduktion (under 1 minut)

- Namn på individ
- Kort redovisning för hur projektet fördelades under arbetet. 
  
### Kodredovisning (2 minuter)

**Med hjälp av den kod du har skrivit** förklara fördelarna och nackdelarna med att använda typescript (mot javascript). Du gör detta förslagsvis genom att visa hur koden hade sett ut utan och med typescript. 

Kodstycket måste innfatta minst en komponent och ett funktionsanrop i denna komponent.

### Granskning (1 minut)

För denna del behöver du fråga en medstuderande om tillgång till deras kod.

Redovisa en granskning av en annan medstuderandes kod (från utomstående gruppmedlem!) där du beskriver minst en positiv och en negativ aspekt av deras kod. 

*Hur detta redovisas*
1. Börja med att förklara vad koden gör.
2. Förklara sedan något som koden gör bra.
3. Visa sedan på en alternativ kod som gör koden "bättre". Om detta är svårt att redovisa, försök då istället att beskriva hur du hade velat ändra koden.

Kom ihåg! Endast läraren har tillgång till dessa redovisningar och ingen medstuderande kommer att få tillgång till eran *konstruktiva* kritik såvida du själv inte väljer att dela med dig av den.


### Sammanfattning (ca 1 minut)
Avsluta med att berätta om något som du hade velat göra annorlunda från början. Bonuspoäng om detta är relaterat till typescript.


## Inlämning
Via omnius skicka in följande
- Videoinspelning
- Länk till github repo med fullständig källkod

## Betygskriterier
För ett högre betyg krävs en mer nyanserad diskussion kring fördelar och nackdelar med typescript.

### Godkänt
För betyget godkänt behöver gruppen fått klartecken på deras kravspecifikation. Vidare behöver även studerande redovisa en förståelse (samt deltagande) för gruppen och en medstuderandes projektarbetet. Studerande ska även redovisa förståelse (samt färdigheter) för skillnaden mellan typescript och javascript.

### Väl godkänt
För betyget väl godkänt så ska samtliga krav för betyget godkänt uppnås. Vidare ska studerande genom diskussion och granskning av kod visa en djupare förståelse (samt färdigheter) för typer och interfaces.

## Återkoppling
Sker via ominus senast 3 veckor efter avslutad kurs i samband med kursbetyget.

--- 
<small>Varför inte börja med en kopp kaffe? </small> :coffee:
