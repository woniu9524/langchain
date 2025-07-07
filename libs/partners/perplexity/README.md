# langchain-perplexity

此包包含 LangChain 与 Perplexity 的集成。

## 安装

```bash
pip install -U langchain-perplexity
```

您应该[配置您的 Perplexity 凭证](https://docs.perplexity.ai/guides/getting-started)，然后设置 `PPLX_API_KEY` 环境变量。

## 用法

此包包含 `ChatPerplexity` 类，这是与 Perplexity 聊天模型交互的推荐方式。

```python
import getpass
import os

if not os.environ.get("PPLX_API_KEY"):
  os.environ["PPLX_API_KEY"] = getpass.getpass("Enter API key for Perplexity: ")

from langchain.chat_models import init_chat_model

llm = init_chat_model("llama-3.1-sonar-small-128k-online", model_provider="perplexity")
llm.invoke("Hello, world!")