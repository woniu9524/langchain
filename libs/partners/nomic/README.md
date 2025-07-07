# langchain-nomic

此包包含 LangChain 与 Nomic 的集成

## 安装

```bash
pip install -U langchain-nomic
```

您应该通过设置以下环境变量来配置凭据：

* `NOMIC_API_KEY`: 您的 nomic API 密钥

## 嵌入

`NomicEmbeddings` 类公开了来自 Nomic 的嵌入。

```python
from langchain_nomic import NomicEmbeddings

embeddings = NomicEmbeddings()
embeddings.embed_query("What is the meaning of life?")