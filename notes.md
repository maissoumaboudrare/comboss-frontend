## [ TODO ]
- ! suppressHydrationWarning on Layout.tsx
- **refactor** 👇
(MOL) CombosList.tsx TO Combos.tsx > (ATOM) CREATE ComboCard.tsx
(MOL) CHANGE AddCombo.tsx TO AddComboForm.tsx
RENAME 📁 froms TO 📁 AddComboFormItems
RENAME ComboArea.tsx TO InputButtonArea.tsx
RENAME PositionsCheck.tsx TO PositionsCheckbox.tsx
RENAME CharactersSelect.tsx TO CharactersSelectbox.tsx
📁 dashboard (**!** Blocking access to dashboard page without Authentication)
      |- 📁 _components
      |    |- AccountManagerForm.tsx
      |- page.tsx

- feature flag avec une variable .env
- **!** Responsiv design single page character
- Characters Galery ajouter (isLoading) loader spinner au fetch de la data
- Characters Galery vérifier pourquoi ne se charge pas à l'affichage de la page
- **!** AddCombo fetch data ComboList dès l'envoie du combo au clique (submit) MAJ