# Pipeshift

> [Pipeshift](https://pipeshift.com) 是一个用于微调和推理开源大语言模型的平台。

- 您提供数据集。微调多个大语言模型。一键开始推理，并观察它们扩展到数百万。

## 安装和设置

- 安装 Pipeshift 集成包。

  ```
  pip install langchain-pipeshift
  ```

- 通过在 [Pipeshift](https://pipeshift.com) 注册来获取您的 Pipeshift API 密钥。

### 认证

您可以通过以下任一方式使用您的 Pipeshift API 密钥进行认证：

1.  将 API 密钥添加到环境变量 `PIPESHIFT_API_KEY` 中。

    ```python
    os.environ["PIPESHIFT_API_KEY"] = "<your_api_key>"
    ```

2.  将 `api_key` 传递给 pipeshift LLM 模块或 chat 模块

    ```python
    llm = Pipeshift(api_key="<your_api_key>", model="meta-llama/Meta-Llama-3.1-8B-Instruct", max_tokens=512)

                        或者

    chat = ChatPipeshift(api_key="<your_api_key>", model="meta-llama/Meta-Llama-3.1-8B-Instruct", max_tokens=512)
    ```

## Chat models

查看一个 [示例](/docs/integrations/chat/pipeshift)。

```python
from langchain_pipeshift import ChatPipeshift
```

## LLMs

查看一个 [示例](/docs/integrations/llms/pipeshift)。

```python
from langchain_pipeshift import Pipeshift
```