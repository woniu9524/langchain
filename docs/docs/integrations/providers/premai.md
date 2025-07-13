# PremAI

[PremAI](https://premai.io/) 是一个一体化平台，可简化由生成式 AI 驱动的健壮、生产就绪型应用的创建。通过简化开发流程，PremAI 让您可以专注于提升用户体验和推动应用的整体增长。您可以 [在此处](https://docs.premai.io/quick-start) 快速开始使用我们的平台。


## ChatPremAI

本示例将介绍如何使用 LangChain 与 `ChatPremAI` 交互不同的聊天模型。

### 安装和设置

我们首先安装 `langchain` and `premai-sdk`。您可以输入以下命令进行安装：

```bash
pip install premai langchain
```

在进一步操作之前，请确保您已在 PremAI 上创建账户并已创建项目。如果尚未创建，请参阅 [快速入门](https://docs.premai.io/introduction) 指南以开始使用 PremAI 平台。创建您的第一个项目并获取您的 API 密钥。

```python
from langchain_core.messages import HumanMessage, SystemMessage
from langchain_community.chat_models import ChatPremAI
```

### 在 LangChain 中设置 PremAI 客户端

导入所需模块后，我们来设置客户端。目前我们假设 `project_id` 为 `8`。但请确保使用您的 `project_id`，否则会出错。

要将 Langchain 与 PremAI 结合使用，您无需传递任何模型名称或使用我们的聊天客户端设置任何参数。默认情况下，它将使用在 [LaunchPad](https://docs.premai.io/get-started/launchpad) 中使用的模型名称和参数。

> 注意：如果您在设置客户端时更改了 `model` 或任何其他参数（如 `temperature` 或 `max_tokens`），它将覆盖 LaunchPad 中使用的现有默认配置。

```python
import os
import getpass

if "PREMAI_API_KEY" not in os.environ:
    os.environ["PREMAI_API_KEY"] = getpass.getpass("您的 PremAI API 密钥：")

chat = ChatPremAI(project_id=1234, model_name="gpt-4o")
```

### 聊天补全

`ChatPremAI` 支持两种方法：`invoke`（与 `generate` 相同）和 `stream`。

第一种方法将提供静态结果。而第二种方法将逐个流式传输 token。以下是如何生成类似聊天的补全。

```python
human_message = HumanMessage(content="你是谁？")

response = chat.invoke([human_message])
print(response.content)
```

您可以像这样在此处提供系统提示：

```python
system_message = SystemMessage(content="你是一个友好的助手。")
human_message = HumanMessage(content="你是谁？")

chat.invoke([system_message, human_message])
```

您也可以在调用模型时更改生成参数。以下是实现此目的的方法：

```python
chat.invoke(
    [system_message, human_message],
    temperature = 0.7, max_tokens = 20, top_p = 0.95
)
```

> 如果您在此处放置系统提示，它将覆盖您在从平台部署应用程序时固定的系统提示。

> 您可以在 [此处](https://docs.premai.io/get-started/sdk#optional-parameters) 找到所有可选参数。除 [这些支持的参数](https://docs.premai.io/get-started/sdk#optional-parameters) 外的任何参数都将在调用模型前被自动删除。


### 使用 Prem Repositories 进行原生 RAG 支持

Prem Repositories 允许用户上传文档（.txt、.pdf 等）并将这些存储库连接到 LLM。您可以将 Prem Repositories 视为原生 RAG，其中每个存储库都可以被视为一个向量数据库。您可以连接多个存储库。您可以在 [此处](https://docs.premai.io/get-started/repositories) 了解更多关于存储库的信息。

Langchain PremAI 也支持 Repositories。以下是实现此目的的方法。

```python

query = "用于密集检索的模型是哪些？"
repository_ids = [1985,]
repositories = dict(
    ids=repository_ids,
    similarity_threshold=0.3,
    limit=3
)
```

首先，我们通过定义一些存储库 ID 来开始。请确保 ID 是有效的存储库 ID。您可以在 [此处](https://docs.premai.io/get-started/repositories) 找到有关如何获取存储库 ID 的更多信息。

> 请注意：与 `model_name` 类似，当您调用 `repositories` 参数时，您可能会覆盖在 LaunchPad 中连接的存储库。

现在，我们将存储库与聊天对象连接起来以调用基于 RAG 的生成。

```python
import json

response = chat.invoke(query, max_tokens=100, repositories=repositories)

print(response.content)
print(json.dumps(response.response_metadata, indent=4))
```

这是输出的外观。

```bash
密集检索模型通常包括：

1. **基于 BERT 的模型**：例如 DPR（密集段检索），它使用 BERT 对查询和段进行编码。
2. **ColBERT**：一种结合了 BERT 和后期交互机制的模型。
3. **ANCE（近似最近邻负对比估计）**：使用 BERT 并专注于高效检索。
4. **TCT-ColBERT**：ColBERT 的一个变体，它使用双塔
{
    "document_chunks": [
        {
            "repository_id": 1985,
            "document_id": 1306,
            "chunk_id": 173899,
            "document_name": "[D] 稀疏检索和密集信息之间的区别...",
            "similarity_score": 0.3209080100059509,
            "content": "与差异或任何地方\n我可以阅读关于它的信息吗？\n\n\n      17                  9\n\n\n      u/ScotiabankCanada        \u2022  推广\n\n\n                       通过斯科舍银行的学生 GIC 计划，加速您的学习许可流程。\n                       我们在这里帮助您转换...\n\n\n                       startright.scotiabank.com         了解更多\n\n\n                            添加评论\n\n\n排序方式：   最佳\n\n\n      DinosParkour      \u2022 1 年前\n\n\n     密集检索 (DR) M"
        }
    ]
}
```

因此，这也意味着您无需自行构建 RAG 管道即可使用 Prem Platform。Prem 使用其专有的 RAG 技术，为检索增强生成提供一流的性能。

> 理想情况下，您无需在此处连接 Repository IDs 即可获得检索增强生成。如果您已在 Prem 平台中连接了存储库，仍可获得相同的结果。

### 流式传输

在本节中，我们将了解如何使用 Langchain 和 PremAI 流式传输 token。以下是实现方法。

```python
import sys

for chunk in chat.stream("你好，你怎么样"):
    sys.stdout.write(chunk.content)
    sys.stdout.flush()
```

与上面类似，如果您想覆盖系统提示和生成参数，则需要添加以下内容：

```python
import sys

for chunk in chat.stream(
    "你好，你怎么样",
    system_prompt = "你是一个乐于助人的助手", temperature = 0.7, max_tokens = 20
):
    sys.stdout.write(chunk.content)
    sys.stdout.flush()
```

这将逐个流式传输 token。

> 请注意：目前，RAG 与流式传输不支持。但是，我们仍然通过我们的 API 支持它。您可以在 [此处](https://docs.premai.io/get-started/chat-completion-sse) 了解更多信息。

## Prem 模板

编写 Prompt 模板可能非常混乱。Prompt 模板很长，难以管理，并且必须不断调整以改进和保持在整个应用程序中的一致性。

使用 **Prem**，编写和管理提示可能非常简单。[Launchpad](https://docs.premai.io/get-started/launchpad) 中的 **_Templates_** 选项卡可帮助您编写所需的任意数量的提示，并在 SDK 中使用它们，以使您的应用程序使用这些提示运行。您可以在 [此处](https://docs.premai.io/get-started/prem-templates) 阅读有关 Prompt 模板的更多信息。

要在 LangChain 中本地使用 Prem 模板，您需要将 ID 传递给 `HumanMessage`。此 ID 应该是您的 Prompt 模板变量的名称。`HumanMessage` 中的 `content` 应该是该变量的值。

例如，假设您的 Prompt 模板是这样的：

```text
向我的名字打个招呼，并根据我的年龄说一句令人振奋的名言。我的名字是：{name}，年龄是 {age}
```

那么现在您的 `human_messages` 应该如下所示：

```python
human_messages = [
    HumanMessage(content="Shawn", id="name"),
    HumanMessage(content="22", id="age")
]
```

将此 `human_messages` 传递给 ChatPremAI 客户端。请注意：不要忘记传递额外的 `template_id` 来调用 Prem 模板生成。如果您不熟悉 `template_id`，可以在 [我们的文档](https://docs.premai.io/get-started/prem-templates) 中了解更多信息。这是一个示例：

```python
template_id = "78069ce8-xxxxx-xxxxx-xxxx-xxx"
response = chat.invoke([human_message], template_id=template_id)
```

Prem 模板也支持流式传输。

## Prem Embeddings

在本节中，我们将介绍如何使用 LangChain 中的 `PremEmbeddings` 来访问不同的嵌入模型。首先导入我们的模块并设置我们的 API 密钥。

```python
import os
import getpass
from langchain_community.embeddings import PremEmbeddings


if os.environ.get("PREMAI_API_KEY") is None:
    os.environ["PREMAI_API_KEY"] = getpass.getpass("您的 PremAI API 密钥：")

```

我们支持许多最先进的嵌入模型。您可以在 [此处](https://docs.premai.io/get-started/supported-models) 查看我们支持的 LLM 和嵌入模型列表。现在，让我们以 `text-embedding-3-large` 模型为例。

```python

model = "text-embedding-3-large"
embedder = PremEmbeddings(project_id=8, model=model)

query = "你好，这是一个测试查询"
query_result = embedder.embed_query(query)

# 让我们打印查询嵌入向量的前五个元素

print(query_result[:5])
```

:::note
与 Chat 一不同，为 PremAIEmbeddings 设置 `model_name` 参数是强制性的。
:::

最后，让我们嵌入一些示例文档

```python
documents = [
    "这是文档1",
    "这是文档2",
    "这是文档3"
]

doc_result = embedder.embed_documents(documents)

# 与先前的结果类似，让我们打印第一个文档向量的前五个元素

print(doc_result[0][:5])
```

```python
print(f"嵌入的维度：{len(query_result)}")
```
嵌入的维度：3072

```python
doc_result[:5]
```
>结果：
>
>[-0.02129288576543331,
 0.0008162345038726926,
 -0.004556538071483374,
 0.02918623760342598,
 -0.02547479420900345]

## 工具/函数调用

LangChain PremAI 支持工具/函数调用。工具/函数调用允许模型通过生成与用户定义的模式匹配的输出来响应给定提示。

- 您可以在 [此处](https://docs.premai.io/get-started/function-calling) 的文档中详细了解所有关于工具调用的信息。
- 您可以在 [文档的这部分](https://python.langchain.com/v0.1/docs/modules/model_io/chat/function_calling) 了解更多关于 langchain 工具调用的信息。

**注意：**

> LangChain ChatPremAI 的当前版本不支持带流式传输支持的函数/工具调用。即将支持带函数调用的流式传输支持。

### 传递工具给模型

为了传递工具并让 LLM 选择它需要的工具，我们需要传递一个工具模式。工具模式是函数定义以及关于函数功能、函数每个参数等信息的正确文档字符串。以下是一些带有其模式的简单算术函数。

**注意：**
> 在定义函数/工具模式时，不要忘记添加有关函数参数的信息，否则会出错。

```python
from langchain_core.tools import tool
from pydantic import BaseModel, Field

# 定义函数参数的模式
class OperationInput(BaseModel):
    a: int = Field(description="第一个数字")
    b: int = Field(description="第二个数字")


# 现在定义参数模式将是 OperationInput 的函数
@tool("add", args_schema=OperationInput, return_direct=True)
def add(a: int, b: int) -> int:
    """将 a 和 b 相加。

    Args:
        a: 第一个整数
        b: 第二个整数
    """
    return a + b


@tool("multiply", args_schema=OperationInput, return_direct=True)
def multiply(a: int, b: int) -> int:
    """将 a 和 b 相乘。

    Args:
        a: 第一个整数
        b: 第二个整数
    """
    return a * b
```

### 将工具模式与我们的 LLM 绑定

我们现在将使用 `bind_tools` 方法将上述函数转换为“工具”并与模型绑定。这意味着我们将在每次调用模型时传递这些工具信息。

```python
tools = [add, multiply]
llm_with_tools = chat.bind_tools(tools)
```

之后，我们从已绑定工具的模型获取响应。

```python
query = "3 * 12 是多少？另外，11 + 49 是多少？"

messages = [HumanMessage(query)]
ai_msg = llm_with_tools.invoke(messages)
```

如我们所见，当我们的聊天模型与工具绑定时，它会根据给定的提示按顺序调用正确的工具集。

```python
ai_msg.tool_calls
```
**输出**

```python
[{'name': 'multiply',
  'args': {'a': 3, 'b': 12},
  'id': 'call_A9FL20u12lz6TpOLaiS6rFa8'},
 {'name': 'add',
  'args': {'a': 11, 'b': 49},
  'id': 'call_MPKYGLHbf39csJIyb5BZ9xIk'}]
```

我们将上面显示的此消息附加到 LLM，充当上下文，并使 LLM 了解它已调用了哪些函数。

```python
messages.append(ai_msg)
```

由于工具调用分为两个阶段，其中：

1. 在我们的第一次调用中，我们收集了 LLM 决定调用的所有工具，以便它可以获取结果作为附加上下文，从而提供更准确且无幻觉的结果。

2. 在我们的第二次调用中，我们将解析这些由 LLM 决定的工具集并运行它们（在我们的例子中将是我们定义的函数及其提取的参数），然后将此结果传递给 LLM。

```python
from langchain_core.messages import ToolMessage

for tool_call in ai_msg.tool_calls:
    selected_tool = {"add": add, "multiply": multiply}[tool_call["name"].lower()]
    tool_output = selected_tool.invoke(tool_call["args"])
    messages.append(ToolMessage(tool_output, tool_call_id=tool_call["id"]))
```

最后，我们使用添加到其上下文中的函数响应来调用 LLM（与工具绑定）。

```python
response = llm_with_tools.invoke(messages)
print(response.content)
```
**输出**

```txt
最终答案是：

- 3 * 12 = 36
- 11 + 49 = 60
```

### 定义工具模式：Pydantic 类 `Optional`

上面我们展示了如何使用 `tool` 装饰器定义模式，但是我们也可以通过 Pydantic 获得相同的结果。当您的工具输入更复杂时，Pydantic 非常有用：

```python
from langchain_core.output_parsers.openai_tools import PydanticToolsParser

class add(BaseModel):
    """将两个整数相加。"""

    a: int = Field(..., description="第一个整数")
    b: int = Field(..., description="第二个整数")


class multiply(BaseModel):
    """将两个整数相乘。"""

    a: int = Field(..., description="第一个整数")
    b: int = Field(..., description="第二个整数")


tools = [add, multiply]
```

现在，我们可以将它们绑定到聊天模型并直接获取结果：

```python
chain = llm_with_tools | PydanticToolsParser(tools=[multiply, add])
chain.invoke(query)
```

**输出**

```txt
[multiply(a=3, b=12), add(a=11, b=49)]
```

现在，就像上面一样，我们解析它并运行这些函数，然后再次调用 LLM 以获取结果。