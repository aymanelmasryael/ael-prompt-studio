# AEL Prompt Studio

**The Type-Safe Prompt Engineering Workbench**

Build, test, and compare AI prompts across OpenAI, Claude, Gemini, and Groq — with type-safe contracts, cost analytics, and real-time collaboration.

## Overview

AEL Prompt Studio is a zero-dependency, browser-based workbench for engineering prompts like a software engineer. It combines modern prompt engineering with the rigor of type systems.

## Features

- **Template Library**: 1000+ curated prompts across 40+ categories
- **Type-Safe Contracts**: Custom DSL with decorators (@min, @max, @range, @pattern, @enum, @maxItems)
- **Multi-Provider Testing**: OpenAI, Anthropic, Google, Groq (side-by-side comparison)
- **Cost Dashboard**: Real-time spend tracking per provider
- **Smart Router**: 4 optimization modes (Balanced, Quality, Speed, Cost)
- **Real-Time Collaboration**: BroadcastChannel API
- **Mock Mode**: Works without any API keys
- **Zero Dependencies**: No npm, no bundler, no build step

## Quick Start

```bash
git clone https://github.com/aymanelmasryael/ael-prompt-studio.git
cd ael-prompt-studio
python3 -m http.server 8080
```