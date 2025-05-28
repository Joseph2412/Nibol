# Nibol

# 🛡️ Nibol Auth Demo (Next.js + Tailwind + localStorage)

Un progetto demo per la gestione dell'autenticazione utente (login e registrazione) realizzato con **Next.js**, **Tailwind CSS** e **React Context API**. Il progetto simula un flusso di autenticazione client-side salvando email e stato di login su `localStorage`.

## 🚀 Funzionalità implementate

- ✅ **Registrazione utente** (salvataggio email + login automatico)
- ✅ **Login utente** con validazione lato client
- ✅ **Protezione della Dashboard** (redirect se non autenticato)
- ✅ **Logout** con reset dello stato e redirect automatico
- ✅ **Controllo automatico del login** su tutte le rotte
- ✅ **Feedback utente** con `react-toastify`
- ✅ **Gestione stato utente** via `AuthContext`
- ✅ **Stilizzazione** con Tailwind CSS

## Stack Tecnologico

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Toastify](https://fkhadra.github.io/react-toastify/)
- [React Context API](https://reactjs.org/docs/context.html)

## Struttura delle cartelle principali


src/
├── context/
│   └── AuthContext.js     # Gestione del contesto utente
├── pages/
│   ├── _app.js            # Setup globale e wrapper context
│   ├── index.js           # Redirect o homepage
│   ├── login.js           # Pagina di login
│   ├── signup.js          # Pagina di registrazione
│   ├── dashboard.js       # Pagina protetta (visibile solo se loggato)
│   └── hello.js           # Placeholder o esempio
├── styles/
│   └── globals.css        # Stili globali (Tailwind incluso)

## Come Eseguire la demo

Clonare la repo
git clone https://github.com/tuo-utente/nibol-auth-demo.git
cd nibol-auth-demo

Installa le dipendenze
npm install

Avvia il progetto
npm run dev


## Note Importanti 

❌ Non è presente un backend: i dati non sono salvati in un database, ma solo nel localStorage

🔒 Autenticazione mock: email e password non sono realmente verificate