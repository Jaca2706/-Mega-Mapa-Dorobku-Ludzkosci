#  MEGA MAPA DOROBKU LUDZKOŚCI
##  Struktura projektu

```
src/
 ├── assets/        # pliki graficzne
 ├── baza/          # dane (np. JSON)
 ├── pages/
 │    ├── g1/
 │    │    └── Group1.jsx
 │    ├── g2/
 │    │    └── Group2.jsx
 │    ├── g3/
 │    │    └── Group3.jsx
 │    ├── g4/
 │    │    └── Group4.jsx
 │    ├── App.jsx
 │    ├── MindMap.jsx
 │    └── Home.jsx
 ├── App.jsx        # główny komponent
 ├── main.jsx       # punkt startowy
 └── index.css
```

---

##  Uruchomienie

```bash
npm install
npm run dev
```

---

##  NIE DOTYKAĆ (chyba że wiesz co robisz)

* node_modules/
* package.json
* package-lock.json
* vite.config.js
* eslint.config.js
* main.jsx (odpala całą aplikację)

---

##  OSTROŻNIE ZMIENIAĆ

* src/App.jsx (główny layout aplikacji)
* src/pages/App.jsx (jeśli używany jako router / widok)

---

##  MOŻNA EDYTOWAĆ

* src/pages/g1/Group1.jsx
* src/pages/g2/Group2.jsx
* src/pages/g3/Group3.jsx
* src/pages/g4/Group4.jsx
* src/pages/Home.jsx
* src/assets/
* src/baza/

---

##  Czego NIE robić

* Nie wrzucaj błędów (sprawdzaj czy działa)
* Nie usuwaj plików bez powodu
* Nie zmieniaj struktury folderów





##  Dobre praktyki

* Każda grupa robi swój plik (g1–g4)
* Małe commity (np. "dodano dane do g1")
* Testuj przed commit

---

