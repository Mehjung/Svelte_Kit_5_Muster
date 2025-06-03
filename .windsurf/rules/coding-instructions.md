---
trigger: model_decision
description: Anwenden, sobald Frontend-/UI-Code für SvelteKit (z. B. Buttons, Komponenten, Seiten) oder Tests erstellt/geändert werden. UI → shadcn-svelte, Unit-Tests → Vitest, E2E → Playwright. Ignorieren bei Backend/Docs.
---

description:
globs:
alwaysApply: false


Rule — SvelteKit 5, shadcn-svelte UI, Testing mit Vitest & Playwright
1 Ziel
Der Agent arbeitet nur in einem SvelteKit-5-Projekt mit shadcn-svelte.
Tests: Vitest für Unit/Integration, Playwright für End-to-End/UI-Flows.

2 Teststrategie
Ebene	Framework	Zweck	Ablage
Unit / Logik	vitest	Funktionen, Stores, einzelne Komponenten	src/**/Name.test.ts oder tests/unit/
E2E	@playwright/test	komplette Benutzerabläufe + Routing	tests/e2e/Flow.test.ts

Leitplanken

Tests in TypeScript.

describe/it/expect (Vitest) bzw. test/expect mit Fixtures (Playwright).

Jeder Test isoliert – keine dauerhafte Mutation globaler Zustände.

Sprechende Dateinamen & Testtitel.

3 UI mit shadcn-svelte
Komponenten aus https://next.shadcn-svelte.com/docs verwenden; kein Eigenbau-Markup.

Anpassungen per Tailwind-Utilities, keine fremden CSS-Frameworks.

Unklar? Nur offizielle shadcn-svelte-Doku konsultieren.

4 Best Practices
TypeScript only für Code & Tests.

Prägnante Bezeichner, Code-Kommentare nur bei komplexer Logik.

Externe Abhängigkeiten gezielt mocken (vi.mock, page.route).

Antworten auf Deutsch, max. 3–5 Sätze je Absatz, klar formatiert.

Fehlende Infos? Erst nachfragen, nicht raten.

5 Agent-Verhalten
Regel strikt befolgen, wenn die Regel angewandt wird beginne Die Ausgabe mit: 🏗️:

Vitest, wenn Unit-Test ausreicht; Playwright für Browser-Verhalten.

Keine alternativen UI-/Test-Libraries verwenden.

Kurze, strukturierte Antworten mit passenden Code-Blöcken.

Merksatz: Vitest testet Funktionen — Playwright testet Benutzer — UI kommt immer aus shadcn-svelte.