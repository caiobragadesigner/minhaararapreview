# Minha Arara — Plataforma de Gestão de Moda

> **A sua arara digital de gestão.**
> Plataforma para organização de guarda-roupa, brechós, curadoria, revenda e consignação de peças de moda.

[![Deploy](https://img.shields.io/badge/deploy-vercel-black)](https://minhaararapreview.vercel.app)

🔗 **Preview ao vivo:** https://minhaararapreview.vercel.app
📦 **Repositório:** https://github.com/caiobragadesigner/minhaararapreview

---

## ⚠️ Status atual: PROTÓTIPO / PREVIEW NAVEGÁVEL

Este repositório contém um **protótipo de alta fidelidade totalmente navegável**, porém **sem backend**. Todos os dados são **mockados (fixos no código)**. O objetivo desta entrega é validar o design, a experiência e os fluxos antes de implementar o produto de verdade.

**O que JÁ existe e funciona:**
- ✅ Landing page completa e responsiva
- ✅ App completo com 7 telas e múltiplos drawers/modais
- ✅ Design system implementado (cores, tipografia, espaçamento, sombras, componentes)
- ✅ Fluxo de login e cadastro (3 etapas, com checkbox LGPD)
- ✅ Navegação entre todas as telas, busca, notificações, menu de usuário
- ✅ 100% responsivo (desktop + mobile com bottom nav)

**O que NÃO existe ainda (precisa ser orçado/desenvolvido):**
- ❌ Backend / API / banco de dados
- ❌ Autenticação real (hoje o login é `admin` / `admin` hardcoded)
- ❌ Persistência de dados (cadastros não salvam)
- ❌ Upload real de imagens
- ❌ Integrações (pagamento, e-mail, importação de planilha real)
- ❌ Multiusuário, permissões, contas

---

## 🎯 Sobre o produto

A **Minha Arara** é uma plataforma digital de gestão para guarda-roupa, brechós, curadoria de peças, revenda, consignação e organização de moda. Ajuda pessoas e pequenos negócios de moda a:

- Organizar peças e controlar estoque
- Acompanhar vendas e ticket médio
- Cadastrar e montar looks
- Gerenciar consignação com parceiras
- Visualizar relatórios e oportunidades

A experiência foi desenhada para **não parecer um ERP frio**: transmite proximidade, leveza e acolhimento — uma "assistente digital cuidadosa" em vez de um "sistema pesado".

---

## 🧱 Stack técnica atual (protótipo)

| Camada | Tecnologia | Observação |
|---|---|---|
| UI | **React 18.3.1** (via CDN, UMD) | Sem build step |
| JSX/Transpile | **Babel Standalone 7.29** (no navegador) | Adequado só para protótipo |
| Estilo | **CSS-in-JS** (objetos inline) + **CSS custom properties** | Design tokens em `design-system/colors_and_type.css` |
| Tipografia | **Manrope** + **Playfair Display** (fontes locais `.ttf`) | 7 + 12 pesos |
| Servidor (dev) | `npx serve` (estático) | Configurado em `.claude/launch.json` |
| Hospedagem | **Vercel** (estático) | `vercel.json` faz os rewrites |
| Dados | **Mock** (arrays JS no próprio HTML) | Sem persistência |

> ⚠️ **Importante para orçamento:** a stack atual (React via CDN + Babel no navegador + um único arquivo HTML de ~2.100 linhas) é ideal para **protótipo**, mas **não é a stack de produção**. Para o produto real recomenda-se reescrever o front-end em projeto com build (ver "Recomendações de produção" abaixo).

---

## 📁 Estrutura do projeto

```
Minha Arara Final/
├── app/                          # Aplicação (protótipo)
│   ├── index.html                # ⭐ App inteiro (~2.100 linhas, React+Babel)
│   ├── components.jsx            # Referência (não carregado — tudo está no index.html)
│   ├── icons.jsx                 # Referência
│   ├── layout.jsx                # Referência
│   ├── screens.jsx              # Referência
│   ├── logo.png
│   ├── priscila-villela.png      # Avatar mock
│   └── auth-1..4.jpg             # Imagens do slideshow de login
│
├── landing/
│   └── index.html                # ⭐ Landing page (~920 linhas)
│
├── design-system/
│   ├── colors_and_type.css       # ⭐ Tokens: cores, tipografia, espaçamento, sombras, motion
│   ├── fonts/                    # Manrope (7) + Playfair Display (12) — .ttf
│   └── assets/                   # Logos (logo, tagline, logotipo)
│
├── 00-material-base/             # Material de origem (NÃO versionado / .gitignore)
│   ├── Files/                    # Brief de design completo
│   ├── Mockups/ visual design/   # PNGs de referência
│   └── logo/ Assets/
│
├── vercel.json                   # Rewrites de rota
└── .gitignore
```

---

## 🖥️ Telas implementadas (escopo funcional)

### Landing page (`/`)
Hero, features, prova social, planos/CTA, navegação fixa com blur, responsiva.

### App (`/app`)

| Tela | Rota interna | Conteúdo |
|---|---|---|
| **Painel** | `dashboard` | Hero de boas-vindas, 4 métricas (peças, vendas, ticket médio, paradas), "Última semana", "Sua atenção", gráfico de receita por canal, distribuição por categoria |
| **Minha arara** | `arara` | Grade de peças, filtros por status, importar planilha, cadastrar peça |
| **Looks** | `looks` | Cards de looks salvos, criar novo look |
| **Vendas** | `vendas` | Histórico de vendas, registrar venda |
| **Relatórios** | `relatorios` | Faturamento mensal, categorias, top peças |
| **Consignação** | `consignacao` | Parceiras, nova parceria |
| **Agenda** | `agenda` | Compromissos, novo compromisso |

### Componentes/fluxos transversais
- **Auth:** Login + Cadastro em 3 etapas (dados → senha → perfil + **checkbox LGPD**)
- **Drawers:** Cadastrar peça, Criar look, Registrar venda, Nova parceria, Novo compromisso, Detalhe da peça, Notificações
- **Modais:** Checklist
- **Global:** Busca com resultados, menu de usuário (logout → landing), toasts, bottom nav mobile

**Biblioteca de componentes (mock, ~40):** Button, Input, Badge, Card, Avatar, Chip, Dropdown, PieceCard, SectionHeader, Divider, MetricCard, AlertItem, RevenueChart, CategoryBar, Timeline, Toast, etc.

---

## 🎨 Design System

### Paleta de cores
Quente, natural, sofisticada. Verde oliva como eixo; neutros para base editorial; apoios pontuais.

**Principais:** `olive-900 #2F3E22` · `olive-800 #3F512E` · `olive-700 #4F623B` (cor da marca) · `olive-600 #5D6B4A` · `sage-500 #7A8A64` · `sage-300 #C9D0B8` · `sand-200 #E9E3D5` · `warm-100 #F6F4EE` (fundo) · `brown-900 #3E2F23` (títulos) · `taupe-500 #8A8F90`

**Apoio:** `gold-500 #C8A46A` · `clay-500 #B8744E` · `bluegray-500 #6B8A8E` · `error-500 #B85C4A`

### Tipografia
- **Manrope** — toda a UI (body, headings, dashboards, números)
- **Playfair Display** — display, editorial, frases de marca, citações

Escala, pesos, tracking e leading definidos em tokens.

### Outros tokens
Raios (`6px`–`999px`), sombras (`xs`–`lg` + focus), espaçamento (escala 4–96px), motion (easings + durations), layout (containers, gutters).

> 📄 Tudo está em [`design-system/colors_and_type.css`](design-system/colors_and_type.css) como CSS custom properties prontas para reuso. O brief completo de marca está em `00-material-base/Files/`.

---

## 🚀 Como rodar localmente

Não há build. Basta servir os arquivos estáticos a partir da **raiz do projeto**:

```bash
# opção 1 — npx serve (recomendado, respeita o vercel.json menos os rewrites)
npx serve .
# abre em http://localhost:3000 → landing
# app em http://localhost:3000/app/index.html

# opção 2 — qualquer servidor estático
python3 -m http.server 8000
```

**Login do protótipo:** usuário `admin` / senha `admin`.
**Acesso direto ao cadastro:** adicione `?signup=1` à URL do app.

> ⚠️ Abrir o arquivo direto (`file://`) **não funciona** por causa do carregamento de fontes/JSX — use um servidor estático.

---

## ☁️ Deploy

Hospedado na **Vercel** (projeto `minhaararapreview`). O `vercel.json` define:
- `/` → `landing/index.html`
- `/app` → `app/index.html`

Push na branch `main` dispara redeploy automático.

```bash
vercel --prod   # deploy manual (scope: caio-bragas-projects-...)
```

---

## 📐 Recomendações para o produto de produção (a orçar)

Para transformar este protótipo num produto real, considerar:

**Front-end**
- Migrar para **Next.js** ou **Vite + React** (TypeScript, build real, code splitting)
- Componentizar de fato (hoje tudo vive num único HTML)
- Portar o design system para **Tailwind** (com os tokens atuais) ou CSS Modules / styled-components

**Back-end & dados**
- API (Node/NestJS, ou serverless) + banco (Postgres)
- Autenticação real (e-mail/senha, OAuth) + recuperação de senha
- Modelos: usuários/contas, peças, looks, vendas, consignação/parceiras, agenda
- Persistência dos cadastros e filtros server-side

**Integrações**
- Upload e processamento de imagens (storage + CDN)
- Importação real de planilha (CSV/XLSX)
- Pagamentos (se aplicável a planos)
- E-mail transacional (cadastro, notificações)
- LGPD: termos, consentimento registrado, exportação/exclusão de dados

**Infra & qualidade**
- Ambientes (dev/staging/prod), CI/CD
- Testes (unit + e2e)
- Observabilidade (logs, erros, analytics)
- Acessibilidade (WCAG) e SEO da landing

**Mobile**
- Hoje é web responsiva. Avaliar PWA ou app nativo (há telas mobile de referência no material base).

---

## 📋 Resumo para orçamento

| Item | Situação |
|---|---|
| Design / UI / UX | ✅ Pronto (alta fidelidade, navegável) |
| Design system / tokens | ✅ Pronto e documentado |
| Front-end protótipo | ✅ Pronto (mock, sem build) |
| Front-end produção | ⏳ A desenvolver (reescrita recomendada) |
| Backend / API / DB | ⏳ A desenvolver (do zero) |
| Autenticação real | ⏳ A desenvolver |
| Integrações (img, planilha, e-mail, pagamento) | ⏳ A desenvolver |
| LGPD / conformidade | 🟡 UI pronta (checkbox); lógica a desenvolver |
| Deploy estático | ✅ Pronto (Vercel) |
| Infra de produção / CI/CD / testes | ⏳ A desenvolver |

---

*Material de marca, mockups e brief completo em `00-material-base/`.*
