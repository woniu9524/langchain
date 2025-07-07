# LangChain-Fireworks

这是用于连接 Fireworks.ai 和 LangChain 的配套包。Fireworks 致力于为 LangChain 用例提供良好的支持，因此如果您遇到任何问题，请告知我们。您可以在 [我们的 Discord 频道](https://discord.com/channels/1137072072808472616/) 与我们联系。


## 安装

要使用 `langchain-fireworks` 包，请遵循以下安装步骤：

```bash
pip install langchain-fireworks
```



## 基本用法

### 设置

1. 登录 [Fireworks AI](http://fireworks.ai/) 获取 API 密钥以访问模型，并确保将其设置为 `FIREWORKS_API_KEY` 环境变量。

    登录并获取 API 密钥后，请按照以下步骤设置 `FIREWORKS_API_KEY` 环境变量：
    - **Linux/macOS:** 打开终端并执行以下命令：
    ```bash
    export FIREWORKS_API_KEY='your_api_key'
    ```
    **注意：** 要使此环境变量在终端会话之间持久存在，请将上述行添加到您的 `~/.bashrc`、`~/.bash_profile` 或 `~/.zshrc` 文件中。

    - **Windows:** 对于命令提示符，请使用：
    ```cmd
    set FIREWORKS_API_KEY=your_api_key
    ```

2. 使用模型 ID 设置您的模型。如果未设置模型，则默认模型为 `fireworks-llama-v2-7b-chat`。请参阅 [fireworks.ai](https://fireworks.ai/models) 上的完整、最新的模型列表。

```python
import getpass
import os

# 初始化一个 Fireworks 模型
llm = Fireworks(
    model="accounts/fireworks/models/llama-v3p1-8b-instruct",
    base_url="https://api.fireworks.ai/inference/v1/completions",
)
```


### 直接调用模型

您可以使用字符串提示直接调用模型以获取补全。

```python
# 单个提示
output = llm.invoke("Who's the best quarterback in the NFL?")
print(output)
```

```python
# 调用多个提示
output = llm.generate(
    [
        "Who's the best cricket player in 2016?",
        "Who's the best basketball player in the league?",
    ]
)
print(output.generations)
```





## 高级用法
### 工具使用：LangChain Agent + Fireworks 函数调用模型
请在此处查看如何教 Fireworks 函数调用模型使用计算器：[here](https://github.com/fw-ai/cookbook/blob/main/learn/function-calling/notebooks_langchain/fireworks_langchain_tool_usage.ipynb)。

Fireworks 专注于为快速模型推理和工具使用提供最佳体验。您可以查看 [我们的博客](https://fireworks.ai/blog/firefunction-v1-gpt-4-level-function-calling) 以了解有关其与 GPT-4 相比的更多详细信息，关键在于它在函数调用用例方面与 GPT-4 不相上下，但速度更快且成本更低。

### RAG：LangChain Agent + Fireworks 函数调用模型 + MongoDB + Nomic AI 嵌入
请在此处查看端到端流程的 [cookbook](https://github.com/fw-ai/cookbook/blob/main/integrations/MongoDB/project_rag_with_mongodb/mongodb_agent.ipynb)。