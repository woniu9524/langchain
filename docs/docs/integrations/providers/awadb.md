# AwaDB

>[AwaDB](https://github.com/awa-ai/awadb) 是一个原生人工智能数据库，用于存储和搜索 LLM 应用使用的嵌入向量。

## 安装与设置

```bash
pip install awadb
```

## Vector store

```python
from langchain_community.vectorstores import AwaDB
```

查看 [使用示例](/docs/integrations/vectorstores/awadb)。

## Embedding models

```python
from langchain_community.embeddings import AwaEmbeddings
```

查看 [使用示例](/docs/integrations/text_embedding/awadb)。