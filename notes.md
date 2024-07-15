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
- Avatar validation manuelle blocage aprobation
- [X] AddCombo éviter la redirection brutale
- [X] Trash icon right
- [X] ComboList ajouter (isLoading) loader spinner au fetch de la data
- filtre utiliser l'url pour les onglets et non les states
- Gérer le cas s'il n'y a rien dans le filtre Saved et Added etc.