const gracz = [];
let ile_graczy = gracz.length;

const pytania_p = {
    // 1-75 (akceptowane - bez zmian)
    1: "Jaki kolor lubisz najbardziej?",
    2: "Jaki film obejrzałbyś sto razy?",
    3: "Jaki serial mógłbyś oglądać w kółko?",
    4: "Jaka piosenka zawsze poprawia Ci humor?",
    5: "Jaki zespół lub artysta Cię kręci?",
    6: "Który aktor jest dla Ciebie idealny?",
    7: "Która aktorka jest Twoim typem?",
    8: "Jaka książka zmieniła Ci życie?",
    9: "Jaki gatunek muzyki działa na Ciebie jak magia?",
    10: "Jaki sport sprawia Ci największą frajdę?",
    11: "Jaka drużyna sportowa to Twój numer jeden?",
    12: "Który zawodnik Cię inspiruje?",
    13: "Jakie zwierzę chciałbyś mieć jako pupila?",
    14: "Jakie danie zjadłbyś codziennie przez rok?",
    15: "Jaki deser byłby Twoim ostatnim posiłkiem?",
    16: "Jaki napój pijesz, kiedy masz ochotę na coś wyjątkowego?",
    17: "Jaki typ kuchni odkryłbyś jako pierwszy?",
    18: "Jaki owoc mógłbyś jeść bez końca?",
    19: "Jakie warzywo jest dla Ciebie zaskakująco dobre?",
    20: "Jaki kwiat chciałbyś dostać bez okazji?",
    21: "Jaka pora roku jest Twoją miłością?",
    22: "Jakie miasto chciałbyś mieć jako drugie?",
    23: "Jaki kraj jest Twoim marzeniem podróżniczym?",
    24: "Jaka plaża to Twój raj na ziemi?",
    25: "Jakie góry chciałbyś zdobyć?",
    26: "Jaki rodzaj muzyki sprawia Ci radość na co dzień?",
    27: "Jaki film sprawia Ci radość, gdy go oglądasz?",
    28: "Jaki serial sprawia Ci radość wieczorem?",
    29: "Jaka gra komputerowa sprawia Ci radość?",
    30: "Jaka gra planszowa sprawia Ci radość w towarzystwie?",
    31: "Jaki mem lub żart sprawia Ci radość?",
    32: "Jaki youtuber lub streamer sprawia Ci radość?",
    33: "Jaki gadżet sprawia Ci radość na co dzień?",
    34: "Jaki styl ubierania się sprawia Ci radość?",
    35: "Jaki zapach sprawia Ci radość?",
    36: "Jaki smak sprawia Ci radość?",
    37: "Jaki dźwięk sprawia Ci radość?",
    38: "Jaka pizza sprawia Ci radość?",
    39: "Jaki burger sprawia Ci radość?",
    40: "Jakie sushi sprawia Ci radość?",
    41: "Jaki rodzaj kawy lub herbaty sprawia Ci radość?",
    42: "Jaki koktajl bezalkoholowy sprawia Ci radość?",
    43: "Jaki napój gazowany sprawia Ci radość?",
    44: "Jaki sok sprawia Ci radość?",
    45: "Jaka czekolada sprawia Ci radość?",
    46: "Jakie lody sprawiają Ci radość?",
    47: "Jakie ciasto sprawia Ci radość?",
    48: "Jaka sałatka sprawia Ci radość?",
    49: "Jaka kanapka sprawia Ci radość?",
    50: "Jakie śniadanie sprawia Ci radość?",
    51: "Ile trwałby Twój wymarzony urlop?",
    52: "Ile czasu wytrzymałbyś bez telefonu?",
    53: "Ile godzin dziennie chciałbyś poświęcić na hobby?",
    54: "Ile książek przeczytałbyś w ciągu roku?",
    55: "Ile czasu lubisz spać?",
    56: "Ile godzin wytrzymałbyś bez internetu?",
    57: "Ile czasu chciałbyś codziennie spędzać na sporcie?",
    58: "Ile dni w roku chciałbyś mieć wolne?",
    59: "Ile czasu wytrzymałbyś bez swojej ulubionej muzyki?",
    60: "Ile godzin dziennie chciałbyś spędzać na grach?",
    61: "Ile czasu zajmuje Ci idealny relaks?",
    62: "Ile dni chciałbyś spędzić w całkowitej ciszy?",
    63: "Ile czasu poświęcasz na gotowanie w tygodniu?",
    64: "Ile godzin wytrzymałbyś bez kawy lub herbaty?",
    65: "Ile czasu chciałbyś codziennie spędzać na czytaniu?",
    66: "Ile dni trwałaby Twoja wymarzona podróż?",
    67: "Ile czasu wytrzymałbyś bez rozmów z ludźmi?",
    68: "Ile godzin snu potrzebujesz, żeby czuć się świetnie?",
    69: "Ile czasu chciałbyś spędzać na oglądaniu filmów/seriali?",
    70: "Ile dni w miesiącu chciałbyś mieć tylko dla siebie?",
    71: "Ile czasu wytrzymałbyś bez słodyczy?",
    72: "Ile godzin dziennie chciałbyś spędzać na świeżym powietrzu?",
    73: "Ile czasu zajmuje Ci przygotowanie idealnego dnia?",
    74: "Ile dni chciałbyś spędzić na totalnym lenistwie?",
    75: "Ile czasu wytrzymałbyś bez swojego ulubionego dania?",

    // 76-100 → nowy styl z kontekstem czasu (dzieciństwo/szkoła vs teraz)
    76: "Jaka była twoja ulubiona bajka za dzieciaka?",
    77: "Ulubiona książka?",
    78: "Kim jesteś z zawodu?",
    79: "Najlepszy prezent, jaki dostałeś?",
    80: "Ulubiony przedmiot w szkole?",
    81: "Najbardziej szalona decyzja?",
    82: "Ulubione danie z domu rodzinnego?",
    83: "Najlepsza podróż, jaką odbyłeś?",
    84: "Czego najbardziej się boisz?",
    85: "Co daje ci dziś najwięcej energii?",
    86: "Ulubiona gra z dzieciństwa?",
    87: "Najbardziej wstydliwa sytuacja?",
    88: "Ulubiony smak lodów?",
    89: "Najlepszy dzień, który pamiętasz?",
    90: "Kto jest dla ciebie największym autorytetem?",
    91: "Piosenka, której teraz słuchasz najczęściej?",
    92: "Najważniejsza relacja w twoim życiu?",
    93: "Co sprawiało ci największą radość jako dziecko?",
    94: "Jak wyobrażałeś sobie dorosłość?",
    95: "Najbardziej wymagający obowiązek?",
    96: "Ulubione miejsce do odpoczynku?",
    97: "Najlepsza szkolna wycieczka?",
    98: "O czym najczęściej marzysz?",
    99: "Jak wspominasz swoje dzieciństwo?",
    100: "Co najbardziej cię zmieniło w ostatnich latach?",
    101: "Jakie było Twoje ulubione wspomnienie z dzieciństwa?"
}
const pytania_k = {
    // 1-75 (bez zmian)
    1: "Jaki kolor nienawidzisz?",
    2: "Jaki film nigdy byś nie obejrzał?",
    3: "Jaki serial znudziłby Cię po odcinku?",
    4: "Jaka piosenka Cię wkurza?",
    5: "Jaki zespół lub artysta Cię męczy?",
    6: "Który aktor Cię irytuje?",
    7: "Która aktorka Cię nudzi?",
    8: "Jaka książka Cię rozczarowała?",
    9: "Jaki gatunek muzyki wyłączasz od razu?",
    10: "Jaki sport Cię totalnie nie jara?",
    11: "Jaka drużyna sportowa jest dla Ciebie najgorsza?",
    12: "Który zawodnik Cię wkurza?",
    13: "Jakie egzotyczne zwierzę nie chciałbyś mieć?",
    14: "Jakie danie nigdy byś nie zjadł?",
    15: "Jaki deser jest dla Ciebie najgorszy?",
    16: "Jaki napój wywołuje u Ciebie obrzydzenie?",
    17: "Jaki typ kuchni omijasz szerokim łukiem?",
    18: "Jaki owoc nie wchodzi Ci w ogóle?",
    19: "Jakie warzywo jest dla Ciebie najgorsze?",
    20: "Jaki kwiat Cię drażni?",
    21: "Jaka pora roku jest dla Ciebie koszmarem?",
    22: "Jakie miasto nie chciałbyś odwiedzić?",
    23: "Jaki kraj omijałbyś z daleka?",
    24: "Jaka plaża jest dla Ciebie najgorsza?",
    25: "Jakie góry Cię przerażają?",
    26: "Jaki gatunek muzyki inni uwielbiają, a Ty go nie cierpisz?",
    27: "Jaki film wszyscy chwalą, a Tobie się nie podoba?",
    28: "Jaki serial wszyscy oglądają, a Ty go nie znosisz?",
    29: "Jaka gra komputerowa wszystkich bawi, a Ciebie nudzi?",
    30: "Jaka gra planszowa wszystkich bawi, a Tobie nie pasuje?",
    31: "Jaki mem lub żart wszystkich rozśmiesza, a Ciebie nie?",
    32: "Jaki youtuber wszystkich bawi, a Ciebie irytuje?",
    33: "Jaki gadżet wszyscy kochają, a Ty go nie potrzebujesz?",
    34: "Jaki styl ubierania się jest modny, a Tobie się nie podoba?",
    35: "Jaki zapach wszyscy lubią, a Tobie przeszkadza?",
    36: "Jaki smak wszyscy uwielbiają, a Ty go nie lubisz?",
    37: "Jaki dźwięk wszystkich relaksuje, a Ciebie denerwuje?",
    38: "Jaka pizza jest hitem, a Ty jej nie lubisz?",
    39: "Jaki burger wszyscy polecają, a Ty go omijasz?",
    40: "Jakie sushi jest trendy, a Tobie nie smakuje?",
    41: "Jaki rodzaj kawy lub herbaty wszyscy piją, a Ty nie?",
    42: "Jaki koktajl bezalkoholowy jest popularny, a Ty go nie lubisz?",
    43: "Jaki napój gazowany wszyscy piją, a Tobie nie smakuje?",
    44: "Jaki sok jest ulubiony przez wszystkich, a Ty go nie cierpisz?",
    45: "Jaka czekolada jest hitem, a Ty wolisz inną?",
    46: "Jakie lody wszyscy kochają, a Tobie nie pasują?",
    47: "Jakie ciasto jest na każdej imprezie, a Ty go nie lubisz?",
    48: "Jaka sałatka jest zdrowym hitem, a Ty jej unikasz?",
    49: "Jaka kanapka jest klasykiem, a Tobie nie smakuje?",
    50: "Jakie śniadanie wszyscy jedzą, a Ty nie?",
    51: "Ile mógłbyś pracować bez dłuższego wypoczynku?",
    52: "Ile czasu lubisz spać?",
    53: "Ile czasu wytrzymałbyś bez swojego ulubionego hobby?",
    54: "Ile czasu poświęcasz na czytanie tygodniowo?",
    55: "Ile godzin możesz funkcjonować bez snu?",
    56: "Ile czasu wytrzymałbyś z powrotem do pracy po urlopie?",
    57: "Ile czasu wytrzymałbyś bez ruchu i sportu?",
    58: "Ile dni w roku mógłbyś pracować bez przerwy?",
    59: "Ile czasu wytrzymałbyś bez słuchania muzyki?",
    60: "Ile godzin dziennie mógłbyś grać bez przerwy?",
    61: "Ile czasu potrzebujesz, żeby się całkowicie zrelaksować?",
    62: "Ile dni wytrzymałbyś w całkowitej samotności?",
    63: "Ile czasu w tygodniu mógłbyś spędzić w kuchni?",
    64: "Ile dni wytrzymałbyś bez kawy/herbaty?",
    65: "Ile czasu wytrzymałbyś bez czytania?",
    66: "Ile dni mógłbyś wytrzymać w jednym miejscu bez podróży?",
    67: "Ile czasu wytrzymałbyś bez kontaktu z ludźmi?",
    68: "Ile godzin snu to dla Ciebie za dużo?",
    69: "Ile czasu mógłbyś oglądać filmy bez przerwy?",
    70: "Ile dni w miesiącu mógłbyś wytrzymać bez chwili dla siebie?",
    71: "Ile czasu wytrzymałbyś bez słodyczy?",
    72: "Ile godzin dziennie mógłbyś wytrzymać bez wychodzenia na zewnątrz?",
    73: "Ile czasu zajmuje Ci powrót do formy po lenistwie?",
    74: "Ile dni mógłbyś wytrzymać bez żadnego planu?",
    75: "Ile czasu wytrzymałbyś bez swojego ulubionego zajęcia?",

    // 76-100 → kontekst czasu (dzieciństwo/szkoła vs teraz)
    76: "Jaki jest twój ulubiony film animowany?",
    77: "Która książka z dzieciństwa najbardziej zapadła ci w pamięć?",
    78: "Kim chciałeś zostać jako dziecko?",
    79: "Najlepszy prezent, jaki komuś dałeś?",
    80: "Przedmiot, który był dla ciebie największym wyzwaniem?",
    81: "Największa psota z młodych lat?",
    82: "Twoje popisowe danie?",
    83: "Najlepsze wakacje z dzieciństwa?",
    84: "Czego najbardziej bałeś się jako dziecko?",
    85: "Twoja pierwsza pasja?",
    86: "W jaką grę grasz najczęściej teraz?",
    87: "Najbardziej niezręczna sytuacja w pracy?",
    88: "Ulubiony smak lodów z dzieciństwa?",
    89: "Przełomowy moment w twoim życiu?",
    90: "Kto był twoim autorytetem w młodości?",
    91: "Piosenka, która kojarzy ci się z nastoletnimi latami?",
    92: "Najbliższy przyjaciel z dzieciństwa?",
    93: "Co daje ci dziś największe poczucie szczęścia?",
    94: "Jak wygląda twoja dorosłość teraz?",
    95: "Jakiego obowiązku najbardziej nie znosiłeś jako dziecko?",
    96: "Ulubione miejsce z dzieciństwa?",
    97: "Podróż, która najbardziej cię zmieniła?",
    98: "O czym marzyłeś jako dziecko?",
    99: "Jak odczuwasz tempo swojego życia obecnie?",
    100: "Co najbardziej ukształtowało cię w dzieciństwie?",
    101: "Jakie jest Twoje ulubione wspomnienie z tego roku?"
}
let pytania_dlugosc = Object.keys(pytania_p).length;


const gracze = document.querySelector("#gracze");
const main = document.querySelector("#main");

function gra() {

    for (let i = 1; i <= Number(gracze.value); i++) {
        gracz.push({
            nazwa: `gracz_${i}`,
            pytanie: '',
            odpowiedz: ''
        });
    }
    graj_n()
}

function graj_n() {
    main.innerHTML = "";
    let randomowe = Math.floor(Math.random() * pytania_dlugosc) + 1;

    ile_graczy = gracz.length;
    let randomowy_gracz = 0;

    if (ile_graczy < 6) {
        randomowy_gracz = Math.floor(Math.random() * ile_graczy);
        for (let i = 0; i < ile_graczy; i++) {
            if (i == randomowy_gracz) {
                gracz[i].pytanie = pytania_k[randomowe];
            }
            else {
                gracz[i].pytanie = pytania_p[randomowe];
            }
            const div = document.createElement("section");
            div.textContent = `${gracz[i].nazwa} `;
            const button = document.createElement("input");
            button.type = "button";
            button.classList.add("btn-pokaz-pytanie");
            button.value = "Pokaż pytanie";
            button.id = `przycisk_${i}`
            button.onclick = function () { pokaz_pytanie(i); };
            div.appendChild(button);
            main.appendChild(div);
        }
        const pokaz = document.createElement("input");
        pokaz.type = "button";
        pokaz.value = "Pokaż odpowiedzi";
        pokaz.onclick = function () { pokaz_odpowiedzi(randomowe); };
        main.appendChild(pokaz);
    }
    else if (ile_graczy > 6 && ile_graczy < 10) {
        randomowy_gracz = Math.floor(Math.random() * ile_graczy);
    }
    else {
        randomowy_gracz = Math.floor(Math.random() * ile_graczy);
    }
}

function pokaz_pytanie(x) {
    gracz[x].odpowiedz = prompt(gracz[x].pytanie);
    document.querySelector(`#przycisk_${x}`).disabled = true;
}

function pokaz_odpowiedzi(x) {
    main.innerHTML = "";
    const h = document.createElement("h3");
    h.innerHTML = pytania_p[x];
    main.appendChild(h)
    for (let i = 0; i < ile_graczy; i++) {
        const o = document.createElement("p");
        o.innerHTML = gracz[i].odpowiedz;
        main.appendChild(o);
    }
    const graj_p = document.createElement("input");
    graj_p.type = "button";
    graj_p.value = "Graj ponownie";
    graj_p.onclick = function () { graj_n(); };
    main.appendChild(graj_p);
}