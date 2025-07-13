# Marqo

本页面将介绍如何在 Ray Ecosystem 中使用 Marqo。

### **什么是 Marqo？**

Marqo 是一个张量搜索引擎，它使用存储在内存中的 HNSW 索引来实现最先进的搜索速度。Marqo 可以通过水平索引分片扩展到数千万文档的索引，并支持异步和非阻塞的数据上传和搜索。Marqo 使用 PyTorch、Huggingface、OpenAI 等的最新机器学习模型。您可以从预配置模型开始，也可以自带模型。内置的 ONNX 支持和转换允许在 CPU 和 GPU 上实现更快的推理和更高的吞吐量。

由于 Marqo 自带了推理能力，您的文档可以混合文本和图像，您可以将来自其他系统数据的 Marqo 索引引入 LangChain 生态系统，而无需担心嵌入是否兼容。

Marqo 的部署非常灵活，您可以使用我们的 Docker 镜像自行启动，或者[联系我们了解我们的托管云服务！](https://www.marqo.ai/pricing)

要使用我们的 Docker 镜像本地运行 Marqo，请[参阅我们的入门指南。](https://docs.marqo.ai/latest/)

## 安装与设置
- 使用 `pip install marqo` 安装 Python SDK

## 包装器

### VectorStore

存在针对 Marqo 索引的包装器，允许您在向量存储框架中使用它们。Marqo 允许您从一系列模型中选择用于生成嵌入的模型，并公开了一些预处理配置。

Marqo VectorStore 还可以处理现有的多模态索引，其中您的文档混合了图像和文本，有关更多信息，请参阅[我们的文档](https://docs.marqo.ai/latest/#multi-modal-and-cross-modal-search)。请注意，使用现有多模态索引实例化 Marqo VectorStore 将禁用通过 LangChain VectorStore 的 `add_texts` 方法向其添加任何新文档的功能。

导入此 VectorStore：
```python
from langchain_community.vectorstores import Marqo
```

有关 Marqo 包装器及其一些独特功能的更详细的演练，请参阅[此笔记本](/docs/integrations/vectorstores/marqo)