# Fireworks AI

>[Fireworks AI](https://fireworks.ai) 是一个生成式 AI 推理平台，可提供行业领先的速度和生产就绪性来运行和定制模型。



## 安装和设置

- 安装 Fireworks 集成包。

  ```
  pip install langchain-fireworks
  ```

- 通过在 [fireworks.ai](https://fireworks.ai) 注册来获取 Fireworks API 密钥。
- 通过设置 FIREWORKS_API_KEY 环境变量进行身份验证。

### 身份验证

您可以通过以下两种方式使用您的 Fireworks API 密钥进行身份验证：

1. 设置 `FIREWORKS_API_KEY` 环境变量。

    ```python
    os.environ["FIREWORKS_API_KEY"] = "<KEY>"
    ```

2. 在 Fireworks LLM 模块中设置 `api_key` 字段。

    ```python
    llm = Fireworks(api_key="<KEY>")
    ```
## Chat models

请参阅 [使用示例](/docs/integrations/chat/fireworks)。

```python
from langchain_fireworks import ChatFireworks
```

## LLMs

请参阅 [使用示例](/docs/integrations/llms/fireworks)。

```python
from langchain_fireworks import Fireworks
```

## Embedding models

请参阅 [使用示例](/docs/integrations/text_embedding/fireworks)。

```python
from langchain_fireworks import FireworksEmbeddings
```