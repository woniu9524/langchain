# 🦜🍎️ LangChain Core

[![Downloads](https://static.pepy.tech/badge/langchain_core/month)](https://pepy.tech/project/langchain_core)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 快速安装

```bash
pip install langchain-core
```

## 这是什么？

LangChain Core 包含驱动 LangChain 生态系统其余部分的底层抽象。

这些抽象被设计得尽可能模块化和简洁。这些抽象的例子包括语言模型、文档加载器、嵌入模型、向量存储、检索器等。

拥有这些抽象的好处是，任何提供商都可以实现所需的接口，然后轻松地在 LangChain 生态系统的其余部分中使用。

有关完整文档，请参阅 [API 参考](https://python.langchain.com/api_reference/core/index.html)。

## 1️⃣ 核心接口：Runnables

Runnable 的概念是 LangChain Core 的核心——它是大多数 LangChain Core 组件实现的接口，赋予它们：

- 通用的调用接口（invoke、batch、stream 等）
- 内置的重试、回退、模式和运行时可配置性工具
- 通过 [LangServe](https://github.com/langchain-ai/langserve) 轻松部署

有关更多信息，请查看 [runnable 文档](https://python.langchain.com/docs/expression_language/interface)。实现该接口的组件示例包括：LLM、聊天模型、提示、检索器、工具、输出解析器。

您可以通过两种方式使用 LangChain Core 对象：

1. **命令式**，即直接调用它们，例如 `model.invoke(...)`

2. **声明式**，使用 LangChain Expression Language (LCEL)

3. 或者两者的结合！例如，您的 LCEL 序列中的一个步骤可以是一个自定义函数

| 功能   | 命令式                      | 声明式    |
| ------ | --------------------------- | -------------- |
| 语法    | 全部 Python                   | LCEL           |
| 追踪   | ✅ – 自动                  | ✅ – 自动 |
| 并行   | ✅ – 使用线程或协程 | ✅ – 自动 |
| 流式传输 | ✅ – 通过 yield                | ✅ – 自动 |
| 异步   | ✅ – 通过编写异步函数 | ✅ – 自动 |

## ⚡️ 什么是 LangChain Expression Language？

LangChain Expression Language (LCEL) 是一个用于将 LangChain Core runnables 组合成序列（或 DAG）的_声明式语言_，涵盖了使用 LLM 构建时的最常见模式。

LangChain Core 将 LCEL 序列编译成一个_优化的执行计划_，具有自动并行化、流式传输、追踪和异步支持。

有关更多信息，请查看 [LCEL 文档](https://python.langchain.com/docs/expression_language/)。

![Diagram outlining the hierarchical organization of the LangChain framework, displaying the interconnected parts across multiple layers.](https://raw.githubusercontent.com/langchain-ai/langchain/master/docs/static/svg/langchain_stack_112024.svg "LangChain 框架概述")

对于更高级的用例，还可以查看 [LangGraph](https://github.com/langchain-ai/langgraph)，这是一个用于循环和递归 LLM 工作流的基于图的运行器。

## 📕 版本和版本控制

`langchain-core` 目前的版本是 `0.1.x`。

由于 `langchain-core` 包含了整个 LangChain 生态系统的基础抽象和运行时，我们将提前通知任何破坏性更改并进行版本升级。例外情况是 `langchain_core.beta` 中的任何内容。`langchain_core.beta` 的原因是，考虑到该领域的快速变化，能够快速移动仍然是优先事项，而此模块是我们尝试这样做的方式。

次要版本增加将发生在：

- 对任何不在 `langchain_core.beta` 中的公共接口的破坏性更改

补丁版本增加将发生在：

- 错误修复
- 新功能
- 对私有接口的任何更改
- 对 `langchain_core.beta` 的任何更改

## 💁 贡献

作为一个在快速发展领域中的开源项目，我们非常欢迎贡献，无论是新功能、改进的基础设施还是更好的文档。

有关如何贡献的详细信息，请参阅 [贡献指南](https://python.langchain.com/docs/contributing/)。

## ⛰️ 为什么要在 LangChain Core 之上构建？

整个 LangChain 生态系统都建立在 LangChain Core 之上，因此在它之上构建时，您将与优秀的团队同行。一些好处包括：

- **模块化**：LangChain Core 是围绕相互独立的抽象设计的，并且不与任何特定的模型提供商绑定。
- **稳定性**：我们致力于稳定的版本控制方案，并将提前通知任何破坏性更改并进行版本升级。
- **久经考验**：LangChain Core 组件在 LLM 生态系统中拥有最大的安装量，并且被许多公司用于生产环境。
- **社区**：LangChain Core 是在公开场合开发的，我们欢迎社区的贡献。