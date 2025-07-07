# langchain-prompty

此包包含 LangChain 与 Microsoft Prompty 的集成。

## 安装

```bash
pip install -U langchain-prompty
```

## 用法

使用 `create_chat_prompt` 函数将 `prompty` 文件加载为提示。

```python
from langchain_prompty import create_chat_prompt

prompt = create_chat_prompt('<您的 .prompty 文件路径>')
```
然后您可以在后续步骤中使用此提示。

这是一个 .prompty 文件的示例：
```prompty
---
name: Basic Prompt
description: A basic prompt that uses the GPT-3 chat API to answer questions
authors:
  - author_1
  - author_2
model:
  api: chat
  configuration:
    azure_deployment: gpt-35-turbo
sample:
  firstName: Jane
  lastName: Doe
  question: What is the meaning of life?
  chat_history: []
---
system:
You are an AI assistant who helps people find information.
As the assistant, you answer questions briefly, succinctly, 
and in a personable manner using markdown and even add some personal flair with appropriate emojis.

{% for item in chat_history %}
{{item.role}}:
{{item.content}}
{% endfor %}


user:
{{input}}