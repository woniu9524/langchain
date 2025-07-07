# langchain-deepseek

此包包含 LangChain 与 DeepSeek API 的集成

## 安装

```bash
pip install -U langchain-deepseek
```

您应该通过设置以下环境变量来配置凭据：

* `DEEPSEEK_API_KEY`

## Chat Models

`ChatDeepSeek` 类公开了来自 DeepSeek 的聊天模型。

```python
from langchain_deepseek import ChatDeepSeek

llm = ChatDeepSeek(model="deepseek-chat")
llm.invoke("Sing a ballad of LangChain.")