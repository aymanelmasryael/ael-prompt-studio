# Contract System

## DSL Grammar

contract <Name> {
    <field_name>: <type> [ [] ] [ ? ] [ = <default> ] [ @<decorator>(<args>) ]
}

## Supported Types

| Type | TypeScript | Description |
|------|------------|-------------|
| string | string | UTF-8 string |
| int | number | Integer |
| float | number | Float |
| bool | boolean | true/false |
| any | unknown | Any JSON value |
| json | unknown | Alias for any |

Arrays: append []
Optional: append ?
Default: = value

## Decorators

| Decorator | Applies To | Validation |
|-----------|-----------|------------|
| @min(n) | string, int, float | value >= n |
| @max(n) | string, int, float | value <= n |
| @range(a,b) | int, float | a <= value <= b |
| @pattern(re) | string | regex test |
| @enum(...) | any | value in list |
| @maxItems(n) | arrays | length <= n |

## Special: enum as Type

enum(a,b,c) is sugar for string @enum(a,b,c).

## Example

contract PromptRequest {
  task: enum(general, code) = general
  prompt: string @min(1) @max(8000)
  max_tokens: int = 512 @range(1,4096)
  temperature: float = 0.7 @range(0.0,2.0)
}

## Pipeline

DSL source to parseContract to fields to compileTs to TypeScript

## Limitations

- No nested objects
- No unions
- No recursive types
- No custom validators
