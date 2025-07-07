# langchain-chroma

此包包含 LangChain 与 Chroma 的集成。

## 安装

```bash
pip install -U langchain-chroma
```

## 用法

`Chroma` 类公开了与 Chroma 向量存储的连接。

```python
from langchain_chroma import Chroma

embeddings = ... # 使用 LangChain Embeddings 类

vectorstore = Chroma(embeddings=embeddings)