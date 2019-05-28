export const rs = {
    locale: 'rs',
    messages: {
        'app.title': 'React Backoffice',

        'menu.sidebar.dashboard': 'Komandna Tabla',
        'menu.sidebar.entity': 'Entitet',
        'menu.sidebar.exceptions': 'Izuzeci',
        'menu.sidebar.exceptions-403': '403 - Zabranjeno',
        'menu.sidebar.exceptions-404': '404 - Nije pronadjeno',
        'menu.sidebar.exceptions-500': '500 - Greska na serveru',

        'menu.header.user.settings': 'Podesavanja naloga',
        'menu.header.user.logout': 'Odjava',
        'menu.header.lang.english': 'English',
        'menu.header.lang.serbian': 'Srpski',

        'table.column.entity.name': 'Ime',
        'table.column.entity.surname': 'Prezime',
        'table.column.entity.email': 'Email Adresa',
        'table.column.entity.city': 'Grad',
        'table.column.entity.postcode': 'Postanski broj',
        'table.column.entity.street': 'Ulica',
        'table.column.entity.title': 'Naslov',
        'table.column.actions': 'Akcije',

        'popconfirm.button.ok': 'Da',
        'popconfirm.button.cancel': 'Prekini',

        'popconfirm.entity.delete': 'Da li ste sigurni da zelite da obrisete ovaj entitet?',
        'popconfirm.entity.restore': 'Da li ste sigurni da zelite da povratite ovaj entitet?',

        'page-title.entity.title': 'Entitet',
        'page-title.entity.subtitle': 'Upravljanje entitetima',

        'header-actions.entity.create-new.tooltip': 'Napravi novi entitet',

        'title.sign-in': 'Prijavite se!',
        'title.forgot-password': 'Zaboravljena sifra?',
        'title.reset-password': 'Obnovite Vasu sifru!',

        'subtitle.sign-in': 'Upisite kredencijale!',
        'subtitle.forgot-password': 'Zatrazite novu!',
        'subtitle.reset-password': 'Sami izaberite novu sifru!',

        'validation.required': 'Ovo polje je obavezno!',
        'validation.email': 'Uneta email adresa mora biti validna!',
        'validation.password': 'Vasa sifra mora biti najmanje 8 karaktera!',

        'form.input.placeholder.email': 'Email Adresa',
        'form.input.placeholder.password': 'Sifra',
        'form.input.placeholder.new-password': 'Izaberite novu sifru',
        'form.input.placeholder.search-table': 'Pretrazi tabelu...',

        'button.sign-in': 'Prijava',
        'button.forgot-password': 'Zatrazi novu sifru',
        'button.cancel': 'Prekini',

        'label.divide-sign-in': 'Neuspesno prijavljivanje?',
        'label.divide-forgot-password': 'Pogresili ste?',
        'label.forgot-password-sign-in': 'Zaboravili ste sifru? Zatrazite novu!',
        'label.create-sign-in': `I dalje nemate nalog? Napravite ga ovde!`,
        'label.back-to-sign-in': 'Nazad na prijavu!',
        'label.form-required': 'Polja oznacena * su obavezna!',

        'message.auth-error': `Morate biti prijaveljeni!`,
        'message.sign-in-success': `Prijava uspesna!`,
        'message.sign-in-error': `Pogresni kredencijali!`,
        'message.forgot-password-success': `Nova sifra je uspesno zatrazena. Proverite uneti email za dalje instrukcije!`,
        'message.forgot-password-error': `Greska! Proverite validnost vaseg emaila!`,
        'message.reset-password-form-error': `Email & Token par nisu dobro uneti!`,
        'message.reset-password-success': `Uspesno ste promenili sifru!`,
        'message.reset-password-error': `Email & Token par nisu validni!`,
        'message.already-signed-in': `Vec ste prijavljeni!`,
        'message.language-changed': `Jezik uspesno promenjen!`,

        'exception.404.description': 'Ups! Nema podataka!',
        'exception.404.button': 'Nazad na poznato',
        'exception.403.description': 'Stoj! Nemate pravo pristupa ovde!',
        'exception.403.button': 'Nazad u dozvoljenu zonu',
        'exception.500.description': 'Nesto je poslo po zlu.',
        'exception.500.button': 'Nazad u sigurnu zonu',
    },
    pluralRuleFunction(e, t) {
        return t && e === 1 ? "one" : "other";
    }
}