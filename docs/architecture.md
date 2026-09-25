# Architecture

## Layered Overview

The project uses a modular layered architecture with clear separation between presentation, business logic, and infrastructure.

### Layers

| Layer | Path | Responsibility |
|-------|------|----------------|
| UI | src/ui/ | HTML rendering, event handling, state |
| Domain | src/domain/ | Templates, contracts, business services |
| Application | src/application/ | Use-cases orchestrating domain + infra |
| Infrastructure | src/infrastructure/ | Provider adapters, storage |
| Collaboration | src/collaboration/ | BroadcastChannel, presence |
| Shared | src/shared/ | Utilities |

## Module Responsibilities

### UI Layer
- main.js: Bootstrap, event wiring, coordination
- state.js: Application state factory
- rendering.js: Pure DOM rendering functions
- logging.js: Log stream management
- styles.css: Design system

### Domain Layer
- models/Provider.js: Provider metadata and pricing
- models/Category.js: 8 template categories
- services/CostService.js: Cost ledger tracking
- services/RouterService.js: Smart router logic
- contracts/parser.js: DSL to AST conversion
- contracts/compiler.js: AST to TypeScript generation
- contracts/validator.js: Runtime validation
- contracts/diagnostics.js: Diagnostic rendering

### Infrastructure Layer
- providers/BaseAdapter.js: Abstract adapter
- providers/MockAdapter.js: Simulation mode
- providers/OpenAIAdapter.js: OpenAI API
- providers/AnthropicAdapter.js: Anthropic API
- providers/GoogleAdapter.js: Google Gemini API
- providers/GroqAdapter.js: Groq API
- storage/SecureKeyStore.js: sessionStorage wrapper

### Application Layer
- use-cases/GeneratePrompt.js: Prompt builder
- use-cases/TestAcrossProviders.js: Parallel testing

### Collaboration Layer
- channel.js: BroadcastChannel wrapper
- presence.js: Peer map and heartbeat

## Dependency Rule

UI depends on Application
Application depends on Domain + Infrastructure
Domain depends on nothing
Infrastructure depends on Domain only
Collaboration depends on UI/logging only

## Data Flow

1. User selects template from library
2. Fills field form values
3. Prompt is built by GeneratePrompt
4. User clicks Test on All Providers
5. TestAcrossProviders runs parallel adapter.send() calls
6. Each adapter streams results via onChunk callback
7. CostService records costs
8. UI re-renders provider grid with results

## Collaboration Protocol

Channel: BroadcastChannel('ael-prompt-studio')

Message types:
- hello: initial announcement
- presence: heartbeat every 1.6s
- bye: on tab unload
- state: hyperparameter or contract changes
- log: shared log messages

Peer timeout: 5.2 seconds
