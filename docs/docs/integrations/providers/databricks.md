Databricks
==========

> [Databricks](https://www.databricks.com/) Intelligence Platform 是业界首个由生成式 AI 驱动的数据智能平台。将 AI 融入您业务的每一个环节。

Databricks 以多种方式拥抱 LangChain 生态系统：

1. 🚀 **模型服务 (Model Serving)** - 通过高可用、低延迟的推理端点，访问顶尖的大语言模型（LLMs），如 DBRX、Llama3、Mixtral，或您微调过的模型。LangChain 提供了 LLM (`Databricks`)、Chat Model (`ChatDatabricks`) 和 Embeddings (`DatabricksEmbeddings`) 的实现，简化了您托管在 Databricks Model Serving 上的模型与 LangChain 应用的集成。
2. 📃 **向量搜索 (Vector Search)** - [Databricks Vector Search](https://www.databricks.com/product/machine-learning/vector-search) 是一个无服务器的向量数据库，无缝集成到 Databricks 平台中。使用 `DatabricksVectorSearch`，您可以将高度可扩展且可靠的相似性搜索引擎集成到您的 LangChain 应用中。
3. 📊 **MLflow** - [MLflow](https://mlflow.org/) 是一个管理完整 ML 生命周期的开源平台，包括实验管理、评估、追踪、部署等。[MLflow 的 LangChain 集成](/docs/integrations/providers/mlflow_tracking) 简化了开发和运行现代复合 ML 系统的流程。
4. 🌐 **SQL 数据库 (SQL Database)** - [Databricks SQL](https://www.databricks.com/product/databricks-sql) 与 LangChain 中的 `SQLDatabase` 集成，使您能够访问自动优化、性能卓越的数据仓库。
5. 💡 **开放模型 (Open Models)** - Databricks 开源了诸如 [DBRX](https://www.databricks.com/blog/introducing-dbrx-new-state-art-open-llm) 等模型，这些模型可通过 [Hugging Face Hub](https://huggingface.co/databricks/dbrx-instruct) 获取。您可以直接在 LangChain 中使用这些模型，利用其与 `transformers` 库的集成。

安装
------------

第一方 Databricks 集成现已在 `databricks-langchain` 合作伙伴包中提供。

```
pip install databricks-langchain
```

旧的 `langchain-databricks` 合作伙伴包仍然可用，但即将弃用。

Chat Model
----------

`ChatDatabricks` 是一个 Chat Model 类，用于访问托管在 Databricks 上的聊天端点，包括顶尖模型如 Llama3、Mixtral 和 DBRX，以及您自己的微调模型。

```
from databricks_langchain import ChatDatabricks

chat_model = ChatDatabricks(endpoint="databricks-meta-llama-3-70b-instruct")
```

请参阅 [使用示例](/docs/integrations/chat/databricks) 以获取更多关于如何在您的 LangChain 应用中使用它的指导。

LLM
---

`Databricks` 是一个 LLM 类，用于访问托管在 Databricks 上的完成（completion）端点。

:::caution
文本补全模型已被弃用，最新和最热门的模型是 [聊天补全模型](/docs/concepts/chat_models)。请改用 `ChatDatabricks` 聊天模型来使用这些模型和工具调用等高级功能。
:::

```
from langchain_community.llm.databricks import Databricks

llm = Databricks(endpoint="your-completion-endpoint")
```

请参阅 [使用示例](/docs/integrations/llms/databricks) 以获取更多关于如何在您的 LangChain 应用中使用它的指导。

Embeddings
----------

`DatabricksEmbeddings` 是一个 Embeddings 类，用于访问托管在 Databricks 上的文本嵌入（text-embedding）端点，包括顶尖模型如 BGE，以及您自己的微调模型。

```
from databricks_langchain import DatabricksEmbeddings

embeddings = DatabricksEmbeddings(endpoint="databricks-bge-large-en")
```

请参阅 [使用示例](/docs/integrations/text_embedding/databricks) 以获取更多关于如何在您的 LangChain 应用中使用它的指导。

Vector Search
-------------

Databricks Vector Search 是一个无服务器的相似性搜索引擎，允许您将数据的向量表示（包括元数据）存储在向量数据库中。通过 Vector Search，您可以从由 [Unity Catalog](https://www.databricks.com/product/unity-catalog) 管理的 [Delta](https://docs.databricks.com/en/introduction/delta-comparison.html) 表创建自动更新的向量搜索索引，并使用简单的 API 查询它们以返回最相似的向量。

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

请参阅 [使用示例](/docs/integrations/vectorstores/databricks_vector_search) 以了解如何设置向量索引并将其集成到 LangChain 中。

MLflow 集成
------------------

在 LangChain 集成方面，MLflow 提供以下功能：

- **实验追踪 (Experiment Tracking)**：追踪并存储您 LangChain 实验的模型、构件和追踪记录。
- **依赖管理 (Dependency Management)**：自动记录依赖库，确保开发、分期和生产环境之间的一致性。
- **模型评估 (Model Evaluation)**：提供评估 LangChain 应用程序的原生能力。
- **追踪 (Tracing)**：可视化追踪数据流通过您的 LangChain 应用程序的过程。

请参阅 [MLflow LangChain 集成](/docs/integrations/providers/mlflow_tracking) 以通过详尽的代码示例和指南了解使用 MLflow 与 LangChain 的全部功能。

SQLDatabase
-----------
要连接到 Databricks SQL 或查询结构化数据，请参阅 [Databricks 结构化检索器工具文档](https://docs.databricks.com/en/generative-ai/agent-framework/structured-retrieval-tools.html#table-query-tool)，并通过 [Databricks UC 集成](https://docs.unitycatalog.io/ai/integrations/langchain/) 来创建使用上述 SQL UDF 的代理。

Open Models
-----------

要直接集成托管在 HuggingFace 上的 Databricks 的开放模型，您可以使用 LangChain 的 [HuggingFace 集成](/docs/integrations/providers/huggingface)。

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
```