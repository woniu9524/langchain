# Breebs (开放知识)

>[Breebs](https://www.breebs.com/) 是一个开放的协作知识平台。
>任何人都可以创建一个 `Breeb`，这是一个基于存储在 Google Drive 文件夹中的 PDF 的知识胶囊。
>任何 LLM/聊天机器人都可以使用 `Breeb` 来提高其专业知识，减少幻觉，并提供对来源的访问。
>在后台，`Breebs` 实现了多个 `检索增强生成 (RAG)` 模型，
>以在每次迭代中无缝地提供有用的上下文。

## Retriever

```python
from langchain.retrievers import BreebsRetriever
```

[查看使用示例 (检索和对话检索链)](/docs/integrations/retrievers/breebs)