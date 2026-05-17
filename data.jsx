// =============================================
// Data: speakers, sessions, tickets, FAQ
// =============================================

const SPEAKERS = [
  { initial: "WZ", name: "Wojciech Zając", role: "Radca prawny, partner w kancelarii SDZLEGAL SCHINDHELM", v: 1, ln: true, photo: "uploads/Wojciech_Zajac.png" },
  { initial: "AK", name: "Anna Kostecka", role: "Prawniczka, Redaktorka prowadząca PortalKadrowy.pl", v: 2, ln: true, photo: "uploads/Anna_Kostecka.png" },
  { initial: "JC", name: "Joanna Cur", role: "Radczyni prawna, specjalistka prawa pracy i HR", v: 3, ln: true, photo: "uploads/Joanna_Cur.png" },
  { initial: "KW2", name: "Prof. UW dr hab. Krzysztof Walczak", role: "Profesor UW, partner w Kancelarii C&C Chakowski & Ciszek", v: 4, ln: true, photo: "uploads/Krzysztof_Walczak.png" },
  { initial: "KW", name: "Karol Wolski", role: "Partner Zarządzający, Współzałożyciel Mocni w HR", v: 1, ln: true, photo: "uploads/Karol_Wolski.jpg" },
  { initial: "AR", name: "Andrzej Radzisław", role: "Radca prawny, ekspert w zakresie prawa ubezpieczeń społecznych", v: 2, ln: true, photo: "uploads/Andrzej_Radzislaw.png" },
  { initial: "PZ", name: "Paweł Ziółkowski", role: "Prawnik, publicysta, trener, wykładowca prawa pracy i ubezpieczeń", v: 3, ln: false, photo: "uploads/Pawel_Ziolkowski.png" },
  { initial: "AT", name: "Anna Telec", role: "Radca prawny, założycielka Kancelarii Prawa Pracy", v: 2, ln: true, photo: "uploads/Anna_Telec.png" },
  { initial: "SS", name: "Szymon Sokolik", role: "Prawnik, specjalista prawa pracy, ekspert PortalKadrowy.pl", v: 4, ln: true, photo: "uploads/Szymon_Sokolik.png" },
  { initial: "PJ", name: "Paweł Jaworski", role: "Ekspert w dziedzinie prawa migracyjnego i legalizacji pobytu cudzoziemców", v: 1, ln: true, photo: "uploads/Pawel_Jaworski.png" },
  { initial: "MK", name: "Magdalena Król", role: "HR Managerka z sercem, Mentorka, Trenerka, Coach", v: 3, ln: true, photo: "uploads/Magdalena_Krol.png" },
  { initial: "MS", name: "Marcin Stanecki", role: "Główny Inspektor Pracy", v: 4, ln: false, photo: "uploads/Marcin_Stanecki.jpg" },
  { initial: "ML", name: "Margaryta Łyczba", role: "Konsultantka Business Central w SMART business", v: 1, ln: true, photo: "uploads/Margaryta_Lyczba.jpg" },
  { initial: "AG", name: "Agata Skowrońska-Grabowska", role: "Specjalistka HRIS i analityczka biznesowa w SMART business", v: 2, ln: true, photo: "uploads/Agata_Skowronska_Grabowska.jpg" },
  { initial: "IL", name: "Izabela Leśniewska", role: "Doradca Podatkowy, Kancelaria Doradztwa Podatkowego Alo-2", v: 3, ln: false, photo: "uploads/Izabela_Lesniewska.png" },
  { initial: "PW", name: "Piotr Wyszumirski", role: "Radca prawny w kancelarii SDZLEGAL SCHINDHELM", v: 4, ln: true, photo: "uploads/Piotr_Wyszumirski.png" },
];

const PILLARS = [
  {
    num: "01",
    slug: "jawnosc",
    chip: "Dyrektywa 2023/970",
    title: "Jawność wynagrodzeń i luka płacowa",
    sub: "5 pytań, które zadaje każda firma.",
    bullets: [
      "Jak przygotować dział kadr do zmian wynikających z dyrektywy i ograniczyć ryzyko błędów interpretacyjnych.",
      "Jak prowadzić rekrutację po zmianach — z informacją o wynagrodzeniu lub przedziale, bez pytań o wcześniejsze zarobki.",
      "Jak uporządkować struktury wynagradzania, by były oparte na obiektywnych, neutralnych kryteriach.",
      "Jak przygotować dane, procesy i dokumentację pod obowiązki informacyjne oraz raportowe.",
      "Jak rozmawiać o luce płacowej i transparentności w sposób bezpieczny prawnie.",
    ],
  },
  {
    num: "02",
    slug: "pip",
    chip: "Nowelizacja PIP",
    title: "Nowelizacja ustawy o PIP",
    sub: "Jak zarządzać UoP i zatrudnieniem na B2B.",
    bullets: [
      "Jak nowe uprawnienia PIP wpłyną na współpracę z osobami na B2B i ryzyko zakwestionowania modelu zatrudnienia.",
      "Które rozwiązania kadrowe i zapisy umowne najbardziej narażają firmę na przekwalifikowanie na stosunek pracy.",
      "Jak uporządkować umowy, procedury i zasady współpracy, by lepiej zabezpieczyć organizację przed kontrolą.",
      "Jak przygotować kadry, HR i menedżerów do zmian wpływających na politykę zatrudnienia.",
      "Jak ograniczyć ryzyko korekt i konsekwencji prawno-finansowych przy współpracy z samozatrudnionymi.",
    ],
  },
  {
    num: "03",
    slug: "mobbing",
    chip: "Mobbing 2026",
    title: "Procedury antymobbingowe",
    sub: "Jak chronić pracowników i uniknąć postępowania karnego.",
    bullets: [
      "Jak przygotować spójny system przeciwdziałania mobbingowi, dyskryminacji i naruszeniom równego traktowania.",
      "Jak ocenić ryzyko wokół trzech form zachowań: fizycznych, werbalnych i pozawerbalnych.",
      "Jak ograniczać ryzyko roszczeń — projekt przewiduje zadośćuczynienie min. 6-krotności wynagrodzenia minimalnego.",
      "Dlaczego dla firm zatrudniających od 9 osób procedury stają się elementem bezpieczeństwa organizacyjnego.",
      "Jak jednocześnie chronić pracowników i pracodawcę, oddzielając mobbing od uzasadnionej krytyki.",
    ],
  },
];

const AUDIENCE = [
  { num: "01", title: "Kierownik / manager działu kadr i płac", sub: "Zarządzaj zmianą prawną w skali zespołu." },
  { num: "02", title: "Dyrektor HR, Head of People", sub: "Strategia kadrowa na rok przełomu." },
  { num: "03", title: "Specjalista ds. kadr i płac", sub: "Konkretne procedury i wzory do wdrożenia." },
  { num: "04", title: "Compensation & Benefits, analityk HR", sub: "Luka płacowa, raportowanie, wartościowanie." },
  { num: "05", title: "Członek zarządu, dyrektor finansowy", sub: "Odpowiedzialność i ryzyko po stronie organizacji." },
  { num: "06", title: "Właściciel firmy, MŚP", sub: "Co naprawdę zmienia 2026 dla pracodawcy." },
];

const SESSIONS = [
  { time: "09:00", end: "09:30", title: "Rozpoczęcie konferencji", kind: "intro" },
  {
    time: "09:30", end: "10:00",
    title: "Nowelizacja ustawy o PIP — nowe uprawnienia Państwowej Inspekcji Pracy",
    sub: "Co zmieni się dla firm, zleceniobiorców i osób na B2B?",
    topics: [
      "Zamarkowane miejsce na zagadnienia wykładu",
      "Zamarkowane miejsce na zagadnienia wykładu",
      "Zamarkowane miejsce na zagadnienia wykładu",
      "Zamarkowane miejsce na zagadnienia wykładu",
    ],
    expert: { name: "Marcin Wujczyk", role: "prof. UJ, radca prawny, Wardyński i Wspólnicy", initial: "MW", v: 1, photo: null },
  },
  {
    time: "10:00", end: "10:30",
    title: "Platformy opinii o pracodawcach — szansa czy organizacyjna zmora?",
    topics: [
      "Zamarkowane miejsce na zagadnienia wykładu",
      "Zamarkowane miejsce na zagadnienia wykładu",
      "Zamarkowane miejsce na zagadnienia wykładu",
      "Zamarkowane miejsce na zagadnienia wykładu",
    ],
    expert: { name: "Magda Król", role: "HR Managerka, Mentorka, Coach", initial: "MK", v: 3, photo: "uploads/Magdalena_Krol.png" },
  },
  {
    time: "10:30", end: "11:00",
    title: "Rozliczenia ZFŚS — o czym musisz wiedzieć na koniec roku",
    topics: [
      "Zamarkowane miejsce na zagadnienia wykładu",
      "Zamarkowane miejsce na zagadnienia wykładu",
      "Zamarkowane miejsce na zagadnienia wykładu",
      "Zamarkowane miejsce na zagadnienia wykładu",
    ],
    expert: { name: "Beata Tomaszewska", role: "Specjalistka ds. wynagrodzeń, wykładowca SKwP", initial: "BT", v: 2, photo: null },
  },
  { time: "11:00", end: "11:15", title: "Przerwa kawowa", kind: "break" },
  {
    time: "11:15", end: "11:45",
    title: "Rozkłady czasu pracy — wykorzystanie narzędzi AI",
    sub: "Rysunki, promptowanie, praktyczne przykłady.",
    topics: [
      "Zamarkowane miejsce na zagadnienia wykładu",
      "Zamarkowane miejsce na zagadnienia wykładu",
      "Zamarkowane miejsce na zagadnienia wykładu",
      "Zamarkowane miejsce na zagadnienia wykładu",
    ],
    expert: { name: "Szymon Sokolik", role: "Prawnik, specjalista prawa pracy, ekspert PortalKadrowy.pl", initial: "SS", v: 4, photo: "uploads/Szymon_Sokolik.png" },
  },
  {
    time: "11:45", end: "12:15",
    title: "Luka płacowa — raportowanie, analityka, wartościowanie stanowisk",
    topics: [
      "Zamarkowane miejsce na zagadnienia wykładu",
      "Zamarkowane miejsce na zagadnienia wykładu",
      "Zamarkowane miejsce na zagadnienia wykładu",
      "Zamarkowane miejsce na zagadnienia wykładu",
    ],
    expert: { name: "Karol Wolski", role: "Partner Zarządzający, Mocni w HR", initial: "KW", v: 1, photo: "uploads/Karol_Wolski.jpg" },
  },
  {
    time: "12:15", end: "12:35",
    title: "Wystąpienie partnera",
    badge: "PARTNER 1",
    badgeKind: "partner",
    topics: [
      "Zamarkowane miejsce na zagadnienia wykładu",
      "Zamarkowane miejsce na zagadnienia wykładu",
      "Zamarkowane miejsce na zagadnienia wykładu",
      "Zamarkowane miejsce na zagadnienia wykładu",
    ],
    expert: { name: "Ekspert partnera", role: "Tytuł zostanie ogłoszony wkrótce", initial: "P1", v: 2 },
  },
  {
    time: "12:35", end: "12:55",
    title: "Wystąpienie partnera",
    badge: "PARTNER 2",
    badgeKind: "partner",
    topics: [
      "Zamarkowane miejsce na zagadnienia wykładu",
      "Zamarkowane miejsce na zagadnienia wykładu",
      "Zamarkowane miejsce na zagadnienia wykładu",
      "Zamarkowane miejsce na zagadnienia wykładu",
    ],
    expert: { name: "Ekspert partnera", role: "Tytuł zostanie ogłoszony wkrótce", initial: "P2", v: 2 },
  },
  { time: "12:55", end: "13:40", title: "Lunch i networking", kind: "break" },
  {
    time: "13:40", end: "14:10",
    title: "Jawność wynagrodzeń — obowiązki, terminy raportowania luki, widełki",
    topics: [
      "Zamarkowane miejsce na zagadnienia wykładu",
      "Zamarkowane miejsce na zagadnienia wykładu",
      "Zamarkowane miejsce na zagadnienia wykładu",
      "Zamarkowane miejsce na zagadnienia wykładu",
    ],
    expert: { name: "Anna Telec", role: "Radca prawny, Kancelaria Prawa Pracy", initial: "AT", v: 2, photo: "uploads/Anna_Telec.png" },
  },
  {
    time: "14:10", end: "14:50",
    title: "Największe wyzwania pracodawców na 2027",
    badge: "PANEL DYSKUSYJNY",
    badgeKind: "panel",
    anchor: "panel-2027",
    sub: "Eksperci: Anna Telec, Magda Król, prof. Wujczyk, reprezentacja pracodawców i związków zawodowych.",
    topics: [
      "Zamarkowane miejsce na zagadnienia wykładu",
      "Zamarkowane miejsce na zagadnienia wykładu",
      "Zamarkowane miejsce na zagadnienia wykładu",
      "Zamarkowane miejsce na zagadnienia wykładu",
    ],
    panel: [
      { initial: "P1" },
      { initial: "P2" },
      { initial: "P3" },
      { initial: "P4" },
    ],
  },
  {
    time: "14:50", end: "15:10",
    title: "Wystąpienie partnera",
    badge: "PARTNER 3",
    badgeKind: "partner",
    topics: [
      "Zamarkowane miejsce na zagadnienia wykładu",
      "Zamarkowane miejsce na zagadnienia wykładu",
      "Zamarkowane miejsce na zagadnienia wykładu",
      "Zamarkowane miejsce na zagadnienia wykładu",
    ],
    expert: { name: "Ekspert partnera", role: "Tytuł zostanie ogłoszony wkrótce", initial: "P3", v: 2 },
  },
  { time: "15:10", end: "15:30", title: "Przerwa kawowa", kind: "break" },
  {
    time: "15:30", end: "16:00",
    title: "Mobbing — nowe przepisy w 2026",
    topics: [
      "Zamarkowane miejsce na zagadnienia wykładu",
      "Zamarkowane miejsce na zagadnienia wykładu",
      "Zamarkowane miejsce na zagadnienia wykładu",
      "Zamarkowane miejsce na zagadnienia wykładu",
    ],
    expert: { name: "Kasia Matyjewicz", role: "Aktywistka antymobbingowa, ekspertka", initial: "KM", v: 3, photo: null },
  },
  {
    time: "16:00", end: "16:30",
    title: "Rekrutacja — narzędzia, które wynoszą procesy na wyższy poziom",
    topics: [
      "Zamarkowane miejsce na zagadnienia wykładu",
      "Zamarkowane miejsce na zagadnienia wykładu",
      "Zamarkowane miejsce na zagadnienia wykładu",
      "Zamarkowane miejsce na zagadnienia wykładu",
    ],
    expert: { name: "Weronika Szatan", role: "Trenerka rekrutacji, Recruitment Devil", initial: "WS", v: 4, photo: null },
  },
  { time: "16:30", end: "17:00", title: "Zakończenie konferencji", kind: "intro" },
];

const TABLES_TOPICS = [
  { n: "I", title: "Wdrażanie dyrektywy o jawności wynagrodzeń — krok po kroku", expert: "Anna Telec", init: "AT", photo: "uploads/Anna_Telec.png" },
  { n: "II", title: "B2B vs. umowa o pracę — jak czytać nowe uprawnienia PIP", expert: "Marcin Wujczyk", init: "MW", photo: null },
  { n: "III", title: "Procedury antymobbingowe — gotowy wzór dokumentu", expert: "Kasia Matyjewicz", init: "KM", photo: null },
  { n: "IV", title: "Wartościowanie stanowisk — metoda analityczna w MŚP", expert: "Karol Wolski", init: "KW", photo: "uploads/Karol_Wolski.jpg" },
  { n: "V", title: "ZFŚS — rozliczenia i kontrola na koniec 2026", expert: "Beata Tomaszewska", init: "BT", photo: null },
  { n: "VI", title: "AI w dziale kadr — co warto wdrożyć już dziś", expert: "Szymon Sokolik", init: "SS", photo: "uploads/Szymon_Sokolik.png" },
];

const TICKETS = [
  {
    type: "Online",
    name: "Udział online",
    price: 699,
    netInfo: "netto + VAT",
    feat: [
      "Transmisja na żywo wszystkich wykładów",
      "Dostęp do nagrań przez 14 dni po wydarzeniu",
      "Pakiet materiałów pokonferencyjnych",
      "Imienny certyfikat uczestnictwa",
      { text: "Udział stacjonarny i networking", no: true },
    ],
  },
  {
    type: "Stacjonarnie",
    name: "Udział stacjonarny",
    price: 999,
    netInfo: "netto + VAT",
    featured: true,
    feat: [
      "Udział w Warsaw Plaza Hotel, Warszawa",
      "Lunch, przerwy kawowe, networking",
      "Stoliki eksperckie — konsultacje 1:1",
      "Pakiet materiałów i nagrania (14 dni)",
      "Imienny certyfikat uczestnictwa",
    ],
  },
  {
    type: "Warsztaty",
    name: "Warsztaty drugiego dnia",
    price: 599,
    netInfo: "netto + VAT",
    feat: [
      "Pełny dzień warsztatów (6.11.2026)",
      "Do wyboru: czas pracy lub wartościowanie",
      "Wzory, schematy, narzędzia AI",
      "Praca w małych grupach z ekspertem",
      "Certyfikat ukończenia warsztatów",
    ],
  },
];

const HOSTS = [
  {
    initial: "AK",
    name: "Anna Kostecka",
    role: "Redaktor Portalu Kadrowego",
    title: "Prawniczka, redaktor prowadzący",
    bio: "Prawnik z doświadczeniem w urzędzie pracy. Specjalizuje się przede wszystkim w prawie pracy i ubezpieczeniach społecznych. Od ponad 6 lat na co dzień zajmuje się także tematyką związaną z prawem podatkowym i bilansowym. Autorka wielu publikacji z zakresu m.in. zatrudniania osób bezrobotnych, zatrudniania pracowników młodocianych oraz opłacania składek na ubezpieczenia społeczne.",
    tags: ["Prawo pracy", "ZUS", "Prawo podatkowe", "Publikacje"],
    v: 2,
    photo: "uploads/host-akostecka.png",
  },
  {
    initial: "WZ",
    name: "Wojciech Zając",
    role: "Partner w kancelarii SDZLEGAL SCHINDHELM",
    title: "Radca prawny, partner",
    bio: "Kieruje działem prawa pracy i prawa autorskiego. Autor licznych publikacji i prezentacji dotyczących prawa pracy oraz wykładowca Polsko-Brytyjskiej Izby Handlowej w zakresie prawa pracy. Prowadzi ŚNIADANIA HR – nieodpłatne, cykliczne spotkania menedżerów działów zasobów ludzkich dużych pracodawców, zmierzające do wymiany doświadczeń i integracji zawodowej.",
    tags: ["Prawo pracy", "Prawo autorskie", "Wykłady PBIzH", "Śniadania HR"],
    v: 1,
    photo: "uploads/host-wz.png",
  },
];

const FAQ = [
  {
    q: "W jakich godzinach odbędzie się konferencja?",
    a: "Konferencja odbędzie się stacjonarnie w Warszawie, w Warsaw Plaza Hotel, ul. Łączyny 5, w dniu 5.11.2026. Rejestracja otworzy się o 8:30, oficjalne otwarcie o 9:00. Zakończymy punktualnie o 17:10. Wydarzenie dostępne jest również w formule online.",
  },
  {
    q: "Czy konferencja jest dostępna online?",
    a: "Tak, XXIV Ogólnopolskie Kadrowo-Płacowe Forum Ekspertów 2026 jest dostępne również online. Transmisja dla uczestników online rozpocznie się punktualnie o godzinie 9:00.",
  },
  {
    q: "Dla kogo jest ta konferencja?",
    a: "Wydarzenie skierowane jest do pracowników działów kadr i płac, osób zajmujących się prawem pracy i wynagrodzeniami, a także pracowników HR i biur rachunkowych. Największą korzyść znajdą specjaliści ds. kadr i płac, kierownicy działów oraz analitycy HR.",
  },
  {
    q: "Dlaczego warto wziąć udział?",
    a: "To idealne miejsce dla osób ceniących profesjonalizm i wysoką jakość wydarzeń. Uczestnicy zdobędą wiedzę od najlepszych specjalistów, wezmą udział w wykładach i warsztatach oraz porozmawiają z ekspertem o swoim indywidualnym przypadku przy stolikach eksperckich.",
  },
  {
    q: "Czy nagrania z konferencji będą dostępne?",
    a: "Tak, nagrania wystąpień będą dostępne dla uczestników przez 14 dni po wydarzeniu.",
  },
  {
    q: "Czy uczestnicy otrzymają materiały?",
    a: "Tak, każda uczestniczka i uczestnik otrzymuje pakiet materiałów pokonferencyjnych. Skorzystasz z gotowych wzorów, schematów i otrzymasz prezentacje prelegentów po zakończeniu konferencji.",
  },
  {
    q: "Czy na miejscu jest parking?",
    a: "Tak, w obiekcie Warsaw Plaza Hotel dostępny jest parking dla uczestników.",
  },
  {
    q: "Czy za udział otrzymam certyfikat?",
    a: "Tak, każda uczestniczka i uczestnik otrzymuje imienny certyfikat poświadczający udział. Nie jest on dodatkowo płatny — zostanie przesłany drogą mailową dzień po wydarzeniu.",
  },
  {
    q: "Kto organizuje wydarzenie i jak się z nim skontaktować?",
    a: "Wydarzenie organizowane jest przez Portal kadrowy. Aby się z nami skontaktować, napisz na kontakt@portalkadrowy.pl lub zadzwoń pod +48 22 000 00 00.",
  },
  {
    q: "Ile kosztuje udział w konferencji?",
    a: "Udział stacjonarny: 999 zł netto. Udział online: 699 zł netto. Warsztaty drugiego dnia: 599 zł netto. Dostępne są zniżki przy wcześniejszym zakupie — do 30.06.2026 otrzymasz 15% rabatu.",
  },
];

Object.assign(window, { SPEAKERS, PILLARS, AUDIENCE, SESSIONS, TABLES_TOPICS, TICKETS, FAQ, HOSTS });
