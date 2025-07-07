# 🦜🔗 LangChain

⚡ 通过组合能力构建 LLM 应用 ⚡

[![Release Notes](https://img.shields.io/github/release/langchain-ai/langchain)](https://github.com/langchain-ai/langchain/releases)
[![lint](https://img.shields.io/github/actions/workflow/status/langchain-ai/langchain/lint.yml?branch=master&label=lint)](https://github.com/langchain-ai/langchain/actions/workflows/lint.yml)
[![test](https://img.shields.io/github/actions/workflow/status/langchain-ai/langchain/test.yml?branch=master&label=test)](https://github.com/langchain-ai/langchain/actions/workflows/test.yml)
[![Downloads](https://static.pepy.tech/badge/langchain/month)](https://pepy.tech/project/langchain)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Twitter](https://img.shields.io/twitter/url/https/twitter.com/langchainai.svg?style=social&label=Follow%20%40LangChainAI)](https://twitter.com/langchainai)
[![Open in Dev Containers](https://img.shields.io/static/v1?label=Dev%20Containers&message=Open&color=blue&logo=visualstudiocode)](https://vscode.dev/redirect?url=vscode://ms-vscode-remote.remote-containers/cloneInVolume?url=https://github.com/langchain-ai/langchain)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/langchain-ai/langchain)
[![GitHub star chart](https://img.shields.io/github/stars/langchain-ai/langchain?style=social)](https://star-history.com/#langchain-ai/langchain)
[![Dependency Status](https://img.shields.io/librariesio/github/langchain-ai/langchain)](https://libraries.io/github/langchain-ai/langchain)
[![Open Issues](https://img.shields.io/github/issues-raw/langchain-ai/langchain)](https://github.com/langchain-ai/langchain/issues)


正在寻找 JS/TS 版本？请查看 [LangChain.js](https://github.com/langchain-ai/langchainjs)。

为了帮助您更快地将 LangChain 应用投入生产，请查看 [LangSmith](https://smith.langchain.com)。
[LangSmith](https://smith.langchain.com) 是一个用于构建、测试和监控 LLM 应用的统一开发者平台。
填写 [此表单](https://www.langchain.com/contact-sales) 与我们的销售团队沟通。

## 快速安装

`pip install langchain`
或
`pip install langsmith && conda install langchain -c conda-forge`

## 🤔 这是什么？

大型语言模型 (LLM) 正成为一项变革性技术，使开发人员能够构建以前无法实现的应用程序。然而，单独使用这些 LLM 通常不足以创建真正强大的应用程序——当您能够将它们与其他计算或知识源结合使用时，真正的力量才会显现。

本库旨在协助开发此类应用程序。这些应用程序的常见示例包括：

**❓ 基于 RAG 的问答**

- [文档](https://python.langchain.com/docs/use_cases/question_answering/)
- 端到端示例：[Chat LangChain](https://chat.langchain.com) 和 [仓库](https://github.com/langchain-ai/chat-langchain)

**🧱 提取结构化输出**

- [文档](https://python.langchain.com/docs/use_cases/extraction/)
- 端到端示例：[SQL Llama2 模板](https://github.com/langchain-ai/langchain-extract/)

**🤖 聊天机器人**

- [文档](https://python.langchain.com/docs/use_cases/chatbots)
- 端到端示例：[Web LangChain (网络研究聊天机器人)](https://weblangchain.vercel.app) 和 [仓库](https://github.com/langchain-ai/weblangchain)

## 📖 文档

请在此处 [此处](https://python.langchain.com) 查看完整文档，内容包括：

- 入门（安装、环境设置、简单示例）
- 操作方法示例（演示、集成、辅助函数）
- 参考（完整 API 文档）
- 资源（核心概念的高级解释）

## 🚀 有什么帮助？

LangChain 主要有五个设计来提供帮助的领域。
按复杂程度递增的顺序排列：

**📃 模型和提示：**

这包括提示管理、提示优化、所有 LLM 的通用接口以及处理聊天模型和 LLM 的常用实用程序。

**🔗 链：**

链超越了单个 LLM 调用，涉及一系列调用（无论是对 LLM 还是其他实用程序）。LangChain 为链提供了标准接口、与其它工具的大量集成以及常见应用程序的端到端链。

**📚 检索增强生成：**

检索增强生成涉及特定的链类型，这些链首先与外部数据源交互以获取数据，供生成步骤使用。示例包括长文本摘要和特定数据源的问答。

**🤖 代理：**

代理涉及 LLM 决定采取哪些行动、采取该行动、看到观察结果，并重复此过程直到完成。LangChain 为代理提供了标准接口、一系列可供选择的代理以及端到端代理的示例。

**🧐 评估：**

[BETA] 生成模型通常很难用传统指标进行评估。一种新的评估方法是使用语言模型本身进行评估。LangChain 提供了一些用于辅助此过程的提示/链。

有关这些概念的更多信息，请参阅我们的 [完整文档](https://python.langchain.com)。

## 💁 贡献

作为一个在快速发展领域中的开源项目，我们非常欢迎各种形式的贡献，无论是新功能、改进的基础设施还是更好的文档。

有关如何贡献的详细信息，请参阅 [贡献指南](https://python.langchain.com/docs/contributing/)。