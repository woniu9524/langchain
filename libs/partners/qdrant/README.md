# langchain-qdrant

此包包含 LangChain 与 [Qdrant](https://qdrant.tech/) 的集成。

## 安装

```bash
pip install -U langchain-qdrant
```

## 用法

`Qdrant` 类公开了与 Qdrant 向量存储的连接。

```python
from langchain_qdrant import Qdrant

embeddings = ... # 使用 LangChain Embeddings 类

vectorstore = Qdrant.from_existing_collection(
    embeddings=embeddings,
    collection_name="<COLLECTION_NAME>",
    url="http://localhost:6333",
)