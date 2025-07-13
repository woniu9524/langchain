# Baseten

>[Baseten](https://baseten.co) 是一个提供您所需的所有基础设施的提供商，以高性能、可扩展且经济高效的方式部署和提供 ML 模型。

>作为模型推理平台，`Baseten` 是 LangChain 生态系统中的一个 `Provider`。
`Baseten` 集成目前实现了一个 `Component`，即 LLMs，但有计划推出更多！

>`Baseten` 让您可以运行像 Llama 2 或 Mistral 这样的开源模型，以及在专用 GPU 上运行专有或微调的模型。如果您习惯使用像 OpenAI 这样的提供商，使用 Baseten 有一些不同之处：

>* 您不是按 token 付费，而是按使用的 GPU 分钟数付费。
>* Baseten 上的每个模型都使用我们的开源模型打包框架 [Truss](https://truss.baseten.co/welcome)，以实现最大的可定制性。
>* 虽然我们有一些 [与 OpenAI ChatCompletions 兼容的模型](https://docs.baseten.co/api-reference/openai)，但您可以使用 `Truss` 定义自己的 I/O 规范。

>[了解更多](https://docs.baseten.co/deploy/lifecycle) 关于模型 ID 和部署的信息。

>在 [Baseten 文档](https://docs.baseten.co/) 中了解更多关于 Baseten 的信息。

## Installation and Setup

您需要两样东西才能将 Baseten 模型与 LangChain 结合使用：

- 一个 [Baseten 账户](https://baseten.co)
- 一个 [API 密钥](https://docs.baseten.co/observability/api-keys)

将您的 API 密钥导出为名为 `BASETEN_API_KEY` 的环境变量。

```sh
export BASETEN_API_KEY="paste_your_api_key_here"
```

## LLMs

查看 [用法示例](/docs/integrations/llms/baseten)。

```python
from langchain_community.llms import Baseten
```