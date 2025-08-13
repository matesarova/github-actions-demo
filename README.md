# Github Actions Demo

Implement CI/CD with Github Actions.

## Struktura projektu

- `public/` – statické soubory (HTML, obrázky, bundle.js)
- `src/` – zdrojové soubory aplikace a testy
- `.github/workflows/` – CI/CD workflow soubory pro Github Actions

## Jak spustit aplikaci

1. Nainstalujte závislosti:
    ```sh
    pnpm install
    ```
2. Spusťte aplikaci:
    ```sh
    pnpm start
    ```
3. Otevřete `public/index.html` v prohlížeči.

## Testování

Testy spustíte příkazem:
```sh
pnpm test
```

## CI/CD

Projekt využívá Github Actions pro automatizaci buildů, testů a nasazení. Konfigurace najdete v `.github/workflows`.

## Licence

Tento projekt je určen pro demonstrační účely a je poskytován "jak je", bez záruky jakýchkoliv funkcí či dostupnosti.