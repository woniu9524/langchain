# AwaDB

>[AwaDB](https://github.com/awa-ai/awadb) 是一个原生AI数据库，用于 LLM 应用中嵌入向量的搜索和存储。

## 安装和设置

```bash
pip install awadb
```

## 向量存储

```python
from langchain_community.vectorstores import AwaDB
```

请参阅 [使用示例](/docs/integrations/vectorstores/awadb)。

## 嵌入模型

```python
from langchain_community.embeddings import AwaEmbeddings
```

请参阅 [使用示例](/docs/integrations/text_embedding/awadb)。