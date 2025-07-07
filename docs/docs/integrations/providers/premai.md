# PremAI

[PremAI](https://premai.io/) 是一个一站式平台，可简化由生成式 AI 驱动的健壮、生产就绪型应用程序的创建。通过简化开发流程，PremAI 让您可以专注于提升用户体验和推动应用程序的整体增长。您可以快速开始使用我们的平台[此处](https://docs.premai.io/quick-start)。


## ChatPremAI

本示例将介绍如何使用 LangChain 与 `ChatPremAI` 交互不同的聊天模型。

### 安装和设置

我们首先安装 `langchain` 和 `premai-sdk`。您可以键入以下命令进行安装：

```bash
pip install premai langchain
```

在继续之前，请确保您已在 PremAI 上创建账户并已创建项目。如果尚未创建，请参阅[快速入门](https://docs.premai.io/introduction)指南以开始使用 PremAI 平台。创建您的第一个项目并获取 API 密钥。

```python
from langchain_core.messages import HumanMessage, SystemMessage
from langchain_community.chat_models import ChatPremAI
```

### 在 LangChain 中设置 PremAI 客户端

导入所需模块后，我们来设置客户端。目前，我们假设 `project_id` 为 `8`。但请务必使用您自己的项目 ID，否则将引发错误。

要使用 langchain 与 prem 配合使用，您无需传递任何模型名称或设置任何参数即可使用我们的聊天客户端。默认情况下，它将使用[LaunchPad](https://docs.premai.io/get-started/launchpad) 中使用的模型名称和参数。

> 注意：如果您在设置客户端时更改 `model` 或任何其他参数（如 `temperature` 或 `max_tokens`），它将覆盖 LaunchPad 中使用的现有默认配置。


```python
import os
import getpass

if "PREMAI_API_KEY" not in os.environ:
    os.environ["PREMAI_API_KEY"] = getpass.getpass("PremAI API Key:")

chat = ChatPremAI(project_id=1234, model_name="gpt-4o")
```

### 聊天补全

`ChatPremAI` 支持两种方法：`invoke`（与 `generate` 相同）和 `stream`。

第一种方法将为我们提供静态结果。而第二种方法将逐个流式传输 token。以下是如何生成类似聊天的补全：

```python
human_message = HumanMessage(content="Who are you?")

response = chat.invoke([human_message])
print(response.content)
```

您可以在此处提供系统提示，如下所示：

```python
system_message = SystemMessage(content="You are a friendly assistant.")
human_message = HumanMessage(content="Who are you?")

chat.invoke([system_message, human_message])
```

您也可以在调用模型时更改生成参数。以下是如何执行此操作：

```python
chat.invoke(
    [system_message, human_message],
    temperature = 0.7, max_tokens = 20, top_p = 0.95
)
```

> 如果您在此处放置系统提示，它将覆盖您在平台上部署应用程序时设置的系统提示。

> 您可以在[此处](https://docs.premai.io/get-started/sdk#optional-parameters)找到所有可选参数。除[这些支持的参数](https://docs.premai.io/get-started/sdk#optional-parameters)之外的任何参数都将在调用模型之前被自动删除。


### 原生 RAG 支持（通过 Prem Repositories）

Prem Repositories 允许用户上传文档（.txt、.pdf 等）并将这些存储库连接到 LLM。您可以将 Prem Repositories 视为原生 RAG，其中每个存储库都可以被视为一个向量数据库。您可以连接多个存储库。您可以在[此处](https://docs.premai.io/get-started/repositories)了解有关存储库的更多信息。

Langchain PremAI 也支持存储库。以下是如何实现：

```python 

query = "Which models are used for dense retrieval"
repository_ids = [1985,]
repositories = dict(
    ids=repository_ids,
    similarity_threshold=0.3,
    limit=3
)
```

首先，我们通过定义一些存储库 ID 来开始。请确保 ID 是有效的存储库 ID。您可以在[此处](https://docs.premai.io/get-started/repositories)了解有关如何获取存储库 ID 的更多信息。

> 请注意：与 `model_name` 类似，当您调用 `repositories` 参数时，您可能会覆盖 LaunchPad 中连接的存储库。

现在，我们将存储库与聊天对象连接以调用基于 RAG 的生成。

```python 
import json

response = chat.invoke(query, max_tokens=100, repositories=repositories)

print(response.content)
print(json.dumps(response.response_metadata, indent=4))
```

输出看起来是这样的。

```bash
Dense retrieval models typically include:

1. **BERT-based Models**: Such as DPR (Dense Passage Retrieval) which uses BERT for encoding queries and passages.
2. **ColBERT**: A model that combines BERT with late interaction mechanisms.
3. **ANCE (Approximate Nearest Neighbor Negative Contrastive Estimation)**: Uses BERT and focuses on efficient retrieval.
4. **TCT-ColBERT**: A variant of ColBERT that uses a two-tower
{
    "document_chunks": [
        {
            "repository_id": 1985,
            "document_id": 1306,
            "chunk_id": 173899,
            "document_name": "[D] Difference between sparse and dense information…",
            "similarity_score": 0.3209080100059509,
            "content": "with the difference or anywhere\nwhere I can read about it?\n\n\n      17                  9\n\n\n      u/ScotiabankCanada        •  Promoted\n\n\n                       Accelerate your study permit process\n                       with Scotiabank's Student GIC\n                       Program. We're here to help you tur…\n\n\n                       startright.scotiabank.com         Learn More\n\n\n                            Add a Comment\n\n\nSort by:   Best\n\n\n      DinosParkour      • 1y ago\n\n\n     Dense Retrieval (DR) m"
        }
    ]
}
```

因此，这也意味着在使用 Prem 平台时，您无需自行构建 RAG 管道。Prem 使用其专有的 RAG 技术，为检索增强生成提供一流的性能。

> 理想情况下，您无需在此处连接存储库 ID 即可获得检索增强生成。如果您已在 Prem 平台中连接了存储库，您仍然可以获得相同的结果。


### 流式传输

在本节中，我们将了解如何使用 Langchain 和 PremAI 流式传输 token。以下是如何执行此操作：

```python 
import sys

for chunk in chat.stream("hello how are you"):
    sys.stdout.write(chunk.content)
    sys.stdout.flush()
```

与上面类似，如果您想覆盖系统提示和生成参数，您需要添加以下内容：

```python 
import sys

for chunk in chat.stream(
    "hello how are you",
    system_prompt = "You are an helpful assistant", temperature = 0.7, max_tokens = 20
):
    sys.stdout.write(chunk.content)
    sys.stdout.flush()
```

这将逐个流式传输 token。

> 请注意：目前，RAG 与流式传输尚不支持。但我们仍然通过我们的 API 支持它。您可以在[此处](https://docs.premai.io/get-started/chat-completion-sse)了解更多信息。


## Prem 模板

编写提示模板可能会非常混乱。提示模板冗长、难以管理，并且必须不断调整才能改进并保持在整个应用程序中的一致性。

使用 **Prem**，编写和管理提示可以变得非常简单。Launchpad 中的 **_Templates_** 选项卡可帮助您编写任意数量的提示，并在 SDK 中使用它们，以便使用这些提示运行您的应用程序。您可以在[此处](https://docs.premai.io/get-started/prem-templates)阅读有关提示模板的更多信息。

要原生使用 Prem 模板与 LangChain 配合使用，您需要将 ID 传递给 `HumanMessage`。此 ID 应该是您的提示模板变量的名称。`HumanMessage` 中的 `content` 应该是该变量的值。

例如，假设您的提示模板是这样的：

```text
Say hello to my name and say a feel-good quote
from my age. My name is: {name} and age is {age}
```

那么您的 human_messages 应该如下所示：

```python
human_messages = [
    HumanMessage(content="Shawn", id="name"),
    HumanMessage(content="22", id="age")
]
```

将此 `human_messages` 传递给 ChatPremAI 客户端。请注意：不要忘记传递额外的 `template_id` 来调用 Prem 模板的生成。如果您不熟悉 `template_id`，可以在我们的文档中了解更多信息[此处](https://docs.premai.io/get-started/prem-templates)。这是一个示例：

```python
template_id = "78069ce8-xxxxx-xxxxx-xxxx-xxx"
response = chat.invoke([human_message], template_id=template_id)
```

Prem 模板也支持流式传输。


## Prem Embeddings

本节介绍如何使用 LangChain 的 `PremEmbeddings` 访问不同的嵌入模型。让我们开始导入模块并设置我们的 API 密钥。

```python
import os
import getpass
from langchain_community.embeddings import PremEmbeddings


if os.environ.get("PREMAI_API_KEY") is None:
    os.environ["PREMAI_API_KEY"] = getpass.getpass("PremAI API Key:")

```

我们支持许多最先进的嵌入模型。您可以在[此处](https://docs.premai.io/get-started/supported-models)查看我们支持的 LLM 和嵌入模型列表。现在，让我们以 `text-embedding-3-large` 模型为例。

```python 

model = "text-embedding-3-large"
embedder = PremEmbeddings(project_id=8, model=model)

query = "Hello, this is a test query"
query_result = embedder.embed_query(query)

# 让我们打印查询嵌入向量的前五个元素

print(query_result[:5])
```

:::note
与 chat 不同，为 PremAIEmbeddings 设置 `model_name` 参数是强制性的。
:::

最后，让我们嵌入一些示例文档。

```python
documents = [
    "This is document1",
    "This is document2",
    "This is document3"
]

doc_result = embedder.embed_documents(documents)

# 与前面的结果类似，让我们打印第一个文档向量的前五个元素

print(doc_result[0][:5])
```

```python
print(f"Dimension of embeddings: {len(query_result)}")
```
Dimension of embeddings: 3072

```python
doc_result[:5]
```
>Result:
>
>[-0.02129288576543331,
 0.0008162345038726926,
 -0.004556538071483374,
 0.02918623760342598,
 -0.02547479420900345]

## 工具/函数调用

LangChain PremAI 支持工具/函数调用。工具/函数调用允许模型通过生成匹配用户定义模式的输出来响应给定提示。

- 您可以在[此处](https://docs.premai.io/get-started/function-calling)的文档中详细了解所有工具调用。
- 您可以在[文档的此部分](https://python.langchain.com/v0.1/docs/modules/model_io/chat/function_calling)了解更多关于 langchain 工具调用的信息。

**注意：**

> LangChain ChatPremAI 的当前版本不支持带流式传输支持的函数/工具调用。流式传输支持和函数调用即将推出。

### 传递工具给模型

为了传递工具并让 LLM 选择它需要的工具，我们需要传递一个工具模式。工具模式是函数定义以及关于函数做什么、函数每个参数是什么等的正确文档字符串。以下是一些带有其模式的简单算术函数。

**注意：**
> 定义函数/工具模式时，不要忘记添加有关函数参数的信息，否则会引发错误。

```python
from langchain_core.tools import tool
from pydantic import BaseModel, Field 

# 定义函数参数的模式
class OperationInput(BaseModel):
    a: int = Field(description="First number")
    b: int = Field(description="Second number")


# 现在定义参数模式为 OperationInput 的函数
@tool("add", args_schema=OperationInput, return_direct=True)
def add(a: int, b: int) -> int:
    """Adds a and b.

    Args:
        a: first int
        b: second int
    """
    return a + b


@tool("multiply", args_schema=OperationInput, return_direct=True)
def multiply(a: int, b: int) -> int:
    """Multiplies a and b.

    Args:
        a: first int
        b: second int
    """
    return a * b
```

### 将工具模式与我们的 LLM 绑定

我们现在将使用 `bind_tools` 方法将上述函数转换为“工具”并将其与模型绑定。这意味着我们每次调用模型时都会传递这些工具信息。

```python 
tools = [add, multiply]
llm_with_tools = chat.bind_tools(tools)
```

之后，我们从已绑定工具的模型中获得响应。

```python 

query = "What is 3 * 12? Also, what is 11 + 49?"

messages = [HumanMessage(query)]
ai_msg = llm_with_tools.invoke(messages)
```

正如我们所见，当我们的聊天模型与工具绑定时，它会根据给定的提示按顺序调用正确的工具集。

```python 
ai_msg.tool_calls
```
**Output**

```python
[{'name': 'multiply',
  'args': {'a': 3, 'b': 12},
  'id': 'call_A9FL20u12lz6TpOLaiS6rFa8'},
 {'name': 'add',
  'args': {'a': 11, 'b': 49},
  'id': 'call_MPKYGLHbf39csJIyb5BZ9xIk'}]
```

我们将上面显示的此消息附加到 LLM，它充当上下文，使 LLM 知道它已调用了哪些函数。

```python 
messages.append(ai_msg)
```

由于工具调用分两个阶段进行：

1. 在第一次调用中，我们收集了 LLM 决定使用的所有工具，以便它可以获取结果作为附加上下文，从而提供更准确、无幻觉的结果。

2. 在第二次调用中，我们将解析这些由 LLM 决定的工具集并运行它们（在我们的例子中是定义的函数，以及 LLM 提取的参数），然后将此结果传递给 LLM。

```python 
from langchain_core.messages import ToolMessage

for tool_call in ai_msg.tool_calls:
    selected_tool = {"add": add, "multiply": multiply}[tool_call["name"].lower()]
    tool_output = selected_tool.invoke(tool_call["args"])
    messages.append(ToolMessage(tool_output, tool_call_id=tool_call["id"]))
```

最后，我们使用添加到其上下文中的函数响应来调用 LLM（已与工具绑定）。

```python 
response = llm_with_tools.invoke(messages)
print(response.content)
```
**Output**

```txt
The final answers are:

- 3 * 12 = 36
- 11 + 49 = 60
```

### 定义工具模式：Pydantic 类 `Optional`

上面我们展示了如何使用 `tool` 装饰器定义模式，但是我们也可以使用 Pydantic 等效地定义模式。当您的工具输入更复杂时，Pydantic 非常有用：

```python
from langchain_core.output_parsers.openai_tools import PydanticToolsParser

class add(BaseModel):
    """Add two integers together."""

    a: int = Field(..., description="First integer")
    b: int = Field(..., description="Second integer")


class multiply(BaseModel):
    """Multiply two integers together."""

    a: int = Field(..., description="First integer")
    b: int = Field(..., description="Second integer")


tools = [add, multiply]
```

现在，我们可以将它们绑定到聊天模型并直接获取结果：

```python 
chain = llm_with_tools | PydanticToolsParser(tools=[multiply, add])
chain.invoke(query)
```

**Output**

```txt
[multiply(a=3, b=12), add(a=11, b=49)]
```

现在，如上所示，我们解析它并运行这些函数，然后再次调用 LLM 以获取结果。