# __package_name__

本软件包包含 LangChain 与 __ModuleName__ 的集成

## 安装

```bash
pip install -U __package_name__
```

您应该通过设置以下环境变量来配置凭据：

* TODO：填写此项

## Chat Models

`Chat__ModuleName__` 类公开了来自 __ModuleName__ 的聊天模型。

```python
from __module_name__ import Chat__ModuleName__

llm = Chat__ModuleName__()
llm.invoke("Sing a ballad of LangChain.")
```

## Embeddings

`__ModuleName__Embeddings` 类公开了来自 __ModuleName__ 的嵌入。

```python
from __module_name__ import __ModuleName__Embeddings

embeddings = __ModuleName__Embeddings()
embeddings.embed_query("What is the meaning of life?")
```

## LLMs
`__ModuleName__LLM` 类公开了来自 __ModuleName__ 的 LLM。

```python
from __module_name__ import __ModuleName__LLM

llm = __ModuleName__LLM()
llm.invoke("The meaning of life is")