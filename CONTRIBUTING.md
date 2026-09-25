# Contributing to AEL Prompt Studio

Thank you for considering contributing!

## Quick Start

1. Fork the repository on GitHub
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/ael-prompt-studio.git`
3. Create a feature branch: `git checkout -b feat/your-awesome-feature`
4. Test locally: `python3 -m http.server 8080` then open http://localhost:8080
5. Commit using Conventional Commits: `git commit -m "feat(scope): describe your change"`
6. Push and open a Pull Request

## Commit Convention

We follow Conventional Commits:

| Prefix | When to use |
|--------|-------------|
| feat: | A new feature |
| fix: | A bug fix |
| docs: | Documentation only |
| style: | Formatting, no code change |
| refactor: | Code restructure |
| perf: | Performance improvement |
| test: | Adding tests |
| chore: | Build process, dependencies |

## Architecture Rules

Critical: Respect the dependency direction.

    ui/            -> application/ -> domain/ (no deps)
                                   -> infrastructure/
    collaboration/ -> ui/logging.js (only)

- UI can import from Application + Domain
- Application can import from Domain + Infrastructure
- Domain MUST NOT import from UI or Infrastructure
- Infrastructure MUST NOT import from UI

## What We Welcome

- New templates with type-safe contracts
- New provider adapters
- Bug fixes
- Documentation improvements
- Accessibility improvements

## What We Don't Accept

- Adding npm dependencies (zero-dependency by design)
- Adding a build step (no webpack, no vite)
- Breaking the layered architecture
