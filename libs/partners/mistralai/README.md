# langchain-mistralai

此包包含通过其 [mistralai](https://pypi.org/project/mistralai/) SDK 与 [MistralAI](https://docs.mistral.ai) 的 LangChain 集成。

## 安装

```bash
pip install -U langchain-mistralai
```

## Chat Models

此包包含 `ChatMistralAI` 类，这是与 MistralAI 模型交互的推荐方式。

要使用，请安装需求并配置您的环境。

```bash
export MISTRAL_API_KEY=your-api-key
```

然后初始化

```python
from langchain_core.messages import HumanMessage
from langchain_mistralai.chat_models import ChatMistralAI

chat = ChatMistralAI(model="mistral-small")
messages = [HumanMessage(content="say a brief hello")]
chat.invoke(messages)
```

`ChatMistralAI` 还支持异步和流式传输功能：

```python
# For async...
await chat.ainvoke(messages)

# For streaming...
for chunk in chat.stream(messages):
    print(chunk.content, end="", flush=True)
```

## Embeddings

使用 `MistralAIEmbeddings`，您可以直接使用默认模型 'mistral-embed'，或者在可用时设置其他模型。

### 选择模型

`embedding.model = 'mistral-embed'`

### 简单查询

`res_query = embedding.embed_query("The test information")`

### 文档

`res_document = embedding.embed_documents(["test1", "another test"])`