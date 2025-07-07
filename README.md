<picture>
  <source media="(prefers-color-scheme: light)" srcset="docs/static/img/logo-dark.svg">
  <source media="(prefers-color-scheme: dark)" srcset="docs/static/img/logo-light.svg">
  <img alt="LangChain Logo" src="docs/static/img/logo-dark.svg" width="80%">
</picture>

<div>
<br>
</div>

[![Release Notes](https://img.shields.io/github/release/langchain-ai/langchain?style=flat-square)](https://github.com/langchain-ai/langchain/releases)
[![CI](https://github.com/langchain-ai/langchain/actions/workflows/check_diffs.yml/badge.svg)](https://github.com/langchain-ai/langchain/actions/workflows/check_diffs.yml)
[![PyPI - License](https://img.shields.io/pypi/l/langchain-core?style=flat-square)](https://opensource.org/licenses/MIT)
[![PyPI - Downloads](https://img.shields.io/pypi/dm/langchain-core?style=flat-square)](https://pypistats.org/packages/langchain-core)
[![GitHub star chart](https://img.shields.io/github/stars/langchain-ai/langchain?style=flat-square)](https://star-history.com/#langchain-ai/langchain)
[![Open Issues](https://img.shields.io/github/issues-raw/langchain-ai/langchain?style=flat-square)](https://github.com/langchain-ai/langchain/issues)
[![Open in Dev Containers](https://img.shields.io/static/v1?label=Dev%20Containers&message=Open&color=blue&logo=visualstudiocode&style=flat-square)](https://vscode.dev/redirect?url=vscode://ms-vscode-remote.remote-containers/cloneInVolume?url=https://github.com/langchain-ai/langchain)
[<img src="https://github.com/codespaces/badge.svg" title="Open in Github Codespace" width="150" height="20">](https://codespaces.new/langchain-ai/langchain)
[![Twitter](https://img.shields.io/twitter/url/https/twitter.com/langchainai.svg?style=social&label=Follow%20%40LangChainAI)](https://twitter.com/langchainai)
[![CodSpeed Badge](https://img.shields.io/endpoint?url=https://codspeed.io/badge.json)](https://codspeed.io/langchain-ai/langchain)

> [!NOTE]
> 正在寻找 JS/TS 库？请查看 [LangChain.js](https://github.com/langchain-ai/langchainjs)。

LangChain 是一个用于构建 LLM 驱动的应用程序的框架。它帮助您将可互操作的组件和第三方集成链接起来，以简化 AI 应用程序的开发——同时随着底层技术的发展，为未来的决策做好准备。

```bash
pip install -U langchain
```

要了解更多关于 LangChain 的信息，请查看
[文档](https://python.langchain.com/docs/introduction/)。如果您正在寻找更高级的定制或代理编排，请查看
[LangGraph](https://langchain-ai.github.io/langgraph/)，这是我们用于构建可控代理工作流的框架。

## 为什么使用 LangChain？

LangChain 通过模型、嵌入、向量存储等的标准接口，帮助开发人员构建由 LLM 驱动的应用程序。

使用 LangChain 进行：
- **实时数据增强**。轻松将 LLM 连接到多样化的数据源和外部/内部系统，利用 LangChain 丰富的集成库，包括模型提供商、工具、向量存储、检索器等。
- **模型互操作性**。在工程团队尝试寻找最适合您应用程序需求的模型时，可以轻松地进行替换。随着行业前沿的发展，快速适应——LangChain 的抽象使您能够保持前进，而不会失去动力。

## LangChain 的生态系统
虽然 LangChain 框架可以独立使用，但它也可以与任何 LangChain 产品无缝集成，为开发 LLM 应用程序的开发人员提供一套完整的工具。

为了改进您的 LLM 应用程序开发，请将 LangChain 与以下产品搭配使用：

- [LangSmith](http://www.langchain.com/langsmith) - 有助于代理评估和可观察性。调试性能不佳的 LLM 应用运行，评估代理轨迹，获得生产环境的可视性，并随着时间的推移提高性能。
- [LangGraph](https://langchain-ai.github.io/langgraph/) - 使用 LangGraph（我们的低级代理编排框架）构建能够可靠处理复杂任务的代理。LangGraph 提供可定制的架构、长期记忆和人工干预工作流——并且受到 LinkedIn、Uber、Klarna 和 GitLab 等公司的生产环境信任。
- [LangGraph Platform](https://langchain-ai.github.io/langgraph/concepts/langgraph_platform/) - 使用专为长期、有状态工作流构建的部署平台，轻松部署和扩展代理。跨团队发现、重用、配置和共享代理——并通过 [LangGraph Studio](https://langchain-ai.github.io/langgraph/concepts/langgraph_studio/) 进行可视化原型设计，快速迭代。

## 附加资源
- [教程](https://python.langchain.com/docs/tutorials/)：简单的演练，提供关于开始使用 LangChain 的指导性示例。
- [操作指南](https://python.langchain.com/docs/how_to/)：针对工具调用、RAG 用例等主题的快速、可操作的代码片段。
- [概念指南](https://python.langchain.com/docs/concepts/)：解释 LangChain 框架背后的关键概念。
- [API 参考](https://python.langchain.com/api_reference/)：关于导航 LangChain 的基础包和集成的详细参考。