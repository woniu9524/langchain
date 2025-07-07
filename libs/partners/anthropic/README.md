# langchain-anthropic

此包包含 LangChain 与 Anthropic 生成模型的集成。

## 安装

`pip install -U langchain-anthropic`

## 聊天模型

Anthropic 建议使用其聊天模型而非文本补全模型。

您可以在 [此处](https://docs.anthropic.com/claude/docs/models-overview#model-recommendations) 查看其推荐的模型。

要使用，您应该配置 Anthropic API 密钥。初始化模型如下：

```
from langchain_anthropic import ChatAnthropic
from langchain_core.messages import AIMessage, HumanMessage

model = ChatAnthropic(model="claude-3-opus-20240229", temperature=0, max_tokens=1024)
```

### 定义输入消息

`message = HumanMessage(content="What is the capital of France?")`

### 使用模型生成响应

`response = model.invoke([message])`

有关更详细的指南，请参阅 [此处](https://python.langchain.com/docs/integrations/chat/anthropic)。

## LLMs (旧版)

您可以使用 Claude 2 模型进行文本补全。

```python
from langchain_anthropic import AnthropicLLM

model = AnthropicLLM(model="claude-2.1", temperature=0, max_tokens=1024)
response = model.invoke("The best restaurant in San Francisco is: ")