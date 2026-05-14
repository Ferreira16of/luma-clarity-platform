<div align="center">

# ✦ LUMA

### *Inteligência que ilumina.*

**Uma masterbrand de tecnologia guiada por clareza.**

---

*Clareza é o novo padrão.*

</div>

---

## Sobre o Projeto

A **LUMA** é uma plataforma digital que representa uma masterbrand de tecnologia com duas frentes distintas e complementares:

- **LUMA** — Experiência do usuário, agilidade e produtos finais. O lado humano da inteligência.
- **LUMA Systems** — Infraestrutura, inteligência de dados e arquitetura para sistemas complexos.

Guiada por uma filosofia de três pilares — **Conexão**, **Simplicidade** e **Futuro** — a LUMA existe para simplificar o amanhã através de conexões inteligentes, onde tecnologia, design e propósito se encontram em uma única luz.

---

## Stack Tecnológica

| Camada | Tecnologia |
|---|---|
| Framework | React 19 |
| Linguagem | TypeScript 5.8 |
| Build Tool | Vite 7 |
| Estilização | Tailwind CSS 4 |
| Componentes | shadcn/ui + Radix UI |
| Roteamento | React Router DOM 7 |
| Gerenciamento de Estado | TanStack Query 5 |
| Formulários | React Hook Form + Zod |
| Gráficos | Recharts |
| Animações | tw-animate-css |
| Package Manager | Bun |
| Deploy | Netlify |
| Linting | ESLint + Prettier |

---

## Arquitetura & Componentes

```
src/
├── assets/              # Imagens e recursos visuais da marca
│   ├── luma-logo.png
│   ├── luma-full.png
│   ├── luma-soft.jpg
│   ├── luma-systems.jpg
│   └── grid-1/2/3.jpg
│
├── components/
│   ├── Hero.tsx         # Seção hero com efeito aurora interativo
│   ├── Reveal.tsx       # Componente de animação reveal on scroll
│   └── ui/              # Biblioteca completa de componentes shadcn/ui
│
├── pages/
│   └── Index.tsx        # Página principal com todas as seções
│
├── hooks/
│   └── use-mobile.tsx   # Hook de detecção de viewport mobile
│
├── lib/
│   └── utils.ts         # Utilitários (cn, clsx, tailwind-merge)
│
└── styles.css           # Design tokens e estilos globais
```

---

## Design System

O design da LUMA é construído sobre tokens semânticos com `oklch` para máxima fidelidade de cor:

### Paleta de Cores

| Token | Descrição |
|---|---|
| `--background` | Branco puro — base da interface |
| `--foreground` | Azul profundo — texto principal |
| `--deep` | `oklch(0.18 0.05 254)` — seções escuras |
| `--spark` | `oklch(0.88 0.18 200)` — cor de destaque luminosa |
| `--muted-foreground` | Tom suave para textos secundários |

### Gradientes & Efeitos

- **Aurora** — gradiente radial dinâmico que combina `--spark` e `--deep`, animado via movimento do mouse
- **Deep** — gradiente linear escuro para seções de destaque
- **Glow Hover** — `drop-shadow` luminoso aplicado ao logo no hover
- **Reveal** — animação de entrada via `IntersectionObserver` com suporte a `delay` customizável

### Tipografia

- Família: **Inter** com `system-ui` como fallback
- Suavização de fonte: `-webkit-font-smoothing: antialiased`
- Kerning customizado: `font-feature-settings: "ss01", "cv11"`
- Displays com `letter-spacing: 0.01em` e `font-weight: 700`

---

## Seções da Landing Page

### 1. Hero
Tela cheia com efeito **aurora interativo** que reage ao movimento do mouse em tempo real. Apresenta o logo da LUMA, o tagline principal e um scroll cue animado.

### 2. Manifesto
Seção centrada com a declaração de posicionamento da marca — minimalista e impactante.

### 3. O Ecossistema — Uma marca. Duas frentes.
Grid 2 colunas apresentando **LUMA** e **LUMA Systems** com cards com efeito hover de zoom suave.

### 4. Filosofia — A linguagem da luz.
Grid 3 colunas com imagens representando os pilares da marca: **Conexão**, **Simplicidade** e **Futuro** — com gradiente sobreposto e legenda em uppercase tracking.

### 5. Footer
Minimalista, com copyright dinâmico via `new Date().getFullYear()`.

---

## Como Rodar Localmente

**Pré-requisito:** [Bun](https://bun.sh) instalado.

```bash
# Clone o repositório
git clone https://github.com/Ferreira16of/luma-clarity-platform.git
cd luma-clarity-platform

# Instale as dependências
bun install

# Inicie o servidor de desenvolvimento
bun run dev
```

O projeto estará disponível em `http://localhost:8080`.

---

## Scripts Disponíveis

```bash
bun run dev        # Servidor de desenvolvimento
bun run build      # Build de produção
bun run build:dev  # Build em modo development
bun run preview    # Preview do build local
bun run lint       # Verificação de lint com ESLint
bun run format     # Formatação automática com Prettier
```

---

## Deploy

O projeto é configurado para deploy contínuo na **Netlify**:

- **Build command:** `bun run build`
- **Publish directory:** `dist`
- **SPA redirect:** todas as rotas apontam para `index.html` com status `200`

---

<div align="center">

*© 2025 LUMA — Tecnologia, design e propósito em uma única luz.*

</div>
