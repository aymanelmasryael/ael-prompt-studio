# Prompt Engineering

## Core Frameworks

### Chain-of-Thought (CoT)
Ask the model to reason step by step before answering.

### ReAct (Reason + Act)
Alternate between reasoning and acting on tools.

### Tree-of-Thoughts (ToT)
Explore multiple reasoning paths in parallel.

## Prompt Patterns

### 1. Role-Play
You are a [specific expert] who [specific behavior].

### 2. Few-Shot
Example 1: [input] to [output]
Example 2: [input] to [output]
Now: [new input] to ?

### 3. Structured Output
Return only JSON matching a schema.

### 4. Constraints
Rules:
- MUST: [requirement]
- MUST NOT: [prohibition]
- IF [condition], THEN [action]

## Best Practices

- Be specific: "Write 200 words" instead of "write a lot"
- Give context: role, audience, purpose
- Show, don't tell: examples are better than descriptions
- Constrain output: format, length, tone
- Ask for reasoning: "Think step by step"
- Iterate: first draft then refine
- Use contracts: type-safe field definitions

## Anti-Patterns

- Vague instructions
- Overloaded prompts (10 tasks in one)
- Contradictory requirements
- Assumed knowledge
- No output format specified

## Type-Safe Contracts

AEL Prompt Studio uses a DSL to define field requirements.
Every field is validated before the prompt is built.
