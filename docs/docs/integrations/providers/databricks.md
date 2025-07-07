Databricks
==========

> [Databricks](https://www.databricks.com/) Intelligence Platform 是全球首个由生成式 AI 提供支持的数据智能平台。将 AI 注入您业务的各个方面。

Databricks 以多种方式拥抱 LangChain 生态系统：

1. 🚀 **模型服务** - 通过高可用性、低延迟的推理端点，访问最先进的 LLM，例如 DBRX、Llama3、Mixtral，或您在 [Databricks Model Serving](https://www.databricks.com/product/model-serving) 上微调的模型。LangChain 提供了 LLM (`Databricks`)、Chat Model (`ChatDatabricks`) 和 Embeddings (`DatabricksEmbeddings`) 的实现，简化了您托管在 Databricks Model Serving 上的模型与 LangChain 应用程序的集成。
2. 📃 **向量搜索** - [Databricks Vector Search](https://www.databricks.com/product/machine-learning/vector-search) 是一个无服务器向量数据库，无缝集成到 Databricks 平台中。使用 `DatabricksVectorSearch`，您可以将高度可扩展且可靠的相似性搜索引擎集成到您的 LangChain 应用程序中。
3. 📊 **MLflow** - [MLflow](https://mlflow.org/) 是一个开源平台，用于管理完整的 ML 生命周期，包括实验管理、评估、跟踪、部署等。[MLflow 的 LangChain 集成](/docs/integrations/providers/mlflow_tracking) 简化了现代复合 ML 系统的开发和操作过程。
4. 🌐 **SQL 数据库** - [Databricks SQL](https://www.databricks.com/product/databricks-sql) 与 LangChain 中的 `SQLDatabase` 集成，允许您访问自动优化、性能卓越的数据仓库。
5. 💡 **开放模型** - Databricks 开源了诸如 [DBRX](https://www.databricks.com/blog/introducing-dbrx-new-state-art-open-llm) 等模型，这些模型可通过 [Hugging Face Hub](https://huggingface.co/databricks/dbrx-instruct) 获得。这些模型可以直接与 LangChain 一起使用，利用其与 `transformers` 库的集成。

Installation
------------

现已在 `databricks-langchain` 合作伙伴包中提供 Databricks 的第一方集成。

```
pip install databricks-langchain
```

旧的 `langchain-databricks` 合作伙伴包仍然可用，但即将弃用。

Chat Model
----------

`ChatDatabricks` 是一个 Chat Model 类，用于访问托管在 Databricks 上的聊天端点，包括最先进的模型，如 Llama3、Mixtral 和 DBRX，以及您自己的微调模型。

```
from databricks_langchain import ChatDatabricks

chat_model = ChatDatabricks(endpoint="databricks-meta-llama-3-70b-instruct")
```

请参阅 [使用示例](/docs/integrations/chat/databricks) 以获取更多关于如何在 LangChain 应用程序中使用它的指导。

LLM
---

`Databricks` 是一个 LLM 类，用于访问托管在 Databricks 上的完成端点。

:::caution
文本补全模型已被弃用，最新和最受欢迎的模型是 [聊天补全模型](/docs/concepts/chat_models)。请改用 `ChatDatabricks` 聊天模型来使用这些模型以及工具调用等高级功能。
:::

```
from langchain_community.llm.databricks import Databricks

llm = Databricks(endpoint="your-completion-endpoint")
```

请参阅 [使用示例](/docs/integrations/llms/databricks) 以获取更多关于如何在 LangChain 应用程序中使用它的指导。


Embeddings
----------

`DatabricksEmbeddings` 是一个 Embeddings 类，用于访问托管在 Databricks 上的文本嵌入端点，包括最先进的模型，如 BGE，以及您自己的微调模型。

```
from databricks_langchain import DatabricksEmbeddings

embeddings = DatabricksEmbeddings(endpoint="databricks-bge-large-en")
```

请参阅 [使用示例](/docs/integrations/text_embedding/databricks) 以获取更多关于如何在 LangChain 应用程序中使用它的指导。


Vector Search
-------------

Databricks Vector Search 是一个无服务器相似性搜索引擎，允许您将数据的向量表示（包括元数据）存储在向量数据库中。通过 Vector Search，您可以从 [Unity Catalog](https://www.databricks.com/product/unity-catalog) 管理的 [Delta](https://docs.databricks.com/en/introduction/delta-comparison.html) 表创建自动更新的向量搜索索引，并使用简单的 API 查询它们以返回最相似的向量。

```
from databricks_langchain import DatabricksVectorSearch

dvs = DatabricksVectorSearch(
    endpoint="<YOUT_ENDPOINT_NAME>",
    index_name="<YOUR_INDEX_NAME>",
    index,
    text_column="text",
    embedding=embeddings,
    columns=["source"]
)
docs = dvs.similarity_search("What is vector search?)
```

请参阅 [使用示例](/docs/integrations/vectorstores/databricks_vector_search) 以了解如何设置向量索引并将其与 LangChain 集成。


MLflow Integration
------------------

在 LangChain 集成的背景下，MLflow 提供了以下功能：

- **实验跟踪**: 跟踪和存储来自 LangChain 实验的模型、工件和跟踪记录。
- **依赖项管理**: 自动记录依赖库，确保开发、暂存和生产环境之间的一致性。
- **模型评估**: 提供评估 LangChain 应用程序的原生功能。
- **跟踪**: 可视化跟踪数据流通过您的 LangChain 应用程序。

请参阅 [MLflow LangChain 集成](/docs/integrations/providers/mlflow_tracking) 以通过广泛的代码示例和指南了解使用 MLflow 和 LangChain 的全部功能。

SQLDatabase
-----------
要连接到 Databricks SQL 或查询结构化数据，请参阅 [Databricks 结构化检索器工具文档](https://docs.databricks.com/en/generative-ai/agent-framework/structured-retrieval-tools.html#table-query-tool)，并使用上面创建的 SQL UDF 创建代理，请参阅 [Databricks UC 集成](https://docs.unitycatalog.io/ai/integrations/langchain/)。

Open Models
-----------

要直接集成 HuggingFace 上托管的 Databricks 的开放模型，您可以使用 LangChain 的 [HuggingFace 集成](/docs/integrations/providers/huggingface)。

```
from langchain_huggingface import HuggingFaceEndpoint

llm = HuggingFaceEndpoint(
    repo_id="databricks/dbrx-instruct",
    task="text-generation",
    max_new_tokens=512,
    do_sample=False,
    repetition_penalty=1.03,
)
llm.invoke("What is DBRX model?")