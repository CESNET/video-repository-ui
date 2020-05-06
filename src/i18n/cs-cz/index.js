export default {
  collection: {
    title: 'DEMO Repozitář',
    description: 'Kolekce ukázkových záznamů odpovídajících DCObject metadatovému schematu'
  },
  labels: {
    // Inputs
    searchInput: 'Hledám',
    searchInputMaximized: 'Hledat podle názvu',
    fileInput: 'Vyberte soubor',
    // Buttons
    loginBtn: 'Přihlásit se',
    logoutBtn: 'Odhlásit se',
    searchBtn: 'Hledat',
    resetBtn: 'Vrátit změny',
    submitBtn: 'Uložit',
    createFormBtn: 'Zpět na formulář',
    createRecordBtn: 'Přidat záznam',
    importJSONBtn: 'Importovat JSON',
    // Sections
    createNew: 'Vytvořit záznam',
    // Other components
    localeSwitcher: 'Language',
    facets: {
      header: 'Filtry'
    },
    record: {
      title: 'Název záznamu',
      creator: 'Autor',
      contributors: 'Spoluautoři',
      abstract: 'Abstrakt',
      description: 'Krátký popis',
      identifier: 'ID záznamu',
      created: 'Datum vytvoření',
      updated: 'Datum poslední úpravy',
      revision: 'Verze',
      links: 'Odkazy'
    },
    recordList: {
      header: 'Nalezeno {num} záznamů'
    },
    facetList: {
      filters: {
        creator: 'Filtrovat autory'
      },
      facets: {
        creator: 'Autor',
        title: {
          lang: 'Jazyk'
        }
      },
      values: {
        title: {
          lang: {
            cs: 'Česky',
            fr: 'Francouzsky',
            en: 'Anglicky',
            es: 'Španělsky',
            de: 'Německy'
          }
        }
      }
    },
    activeFilters: {
      title: {
        lang: 'Jazyk'
      },
      creator: 'Autor',
      header: 'Aktivní filtry',
      q: 'Hledaný výraz'
    }
  },
  values: {
    lang: {
      csCZ: 'Česky',
      enUS: 'Anglicky'
    }
  },
  tooltips: {
    close: 'Zavřít',
    importJSON: 'Importovat záznamy z JSON souboru odpovídajícího DCObject schematu',
    anonymous: 'Nepřihlášený uživatel',
    notifications: 'Notifikace'
  },
  messages: {
    validation: {
      fieldRequired: 'Toto pole je vyžadováno'
    },
    allowPopups: 'Pro funkci přihlášení prosím povolte vyskakovací okna',
    failed: 'Operace se nezdařila',
    success: 'Akce byla úspěšná'
  }
}
