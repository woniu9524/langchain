# langchain-openai

此包包含通过其 `openai` SDK 实现的 LangChain 与 OpenAI 的集成。

## 安装和设置

- 安装 LangChain 合作伙伴包
```bash
pip install langchain-openai
```
- 获取 OpenAI API 密钥并将其设置为环境变量 (`OPENAI_API_KEY`)

## 聊天模型

请参阅 [使用示例](http://python.langchain.com/docs/integrations/chat/openai)。

```python
from langchain_openai import ChatOpenAI
```

如果您使用的是托管在 `Azure` 上的模型，则应为此使用不同的包装器：
```python
from langchain_openai import AzureChatOpenAI
```
有关 `Azure` 包装器的更详细演练，请参阅 [此处](http://python.langchain.com/docs/integrations/chat/azure_chat_openai)。


## 文本嵌入模型

请参阅 [使用示例](http://python.langchain.com/docs/integrations/text_embedding/openai)。

```python
from langchain_openai import OpenAIEmbeddings
```

如果您使用的是托管在 `Azure` 上的模型，则应为此使用不同的包装器：
```python
from langchain_openai import AzureOpenAIEmbeddings
```
有关 `Azure` 包装器的更详细演练，请参阅 [此处](https://python.langchain.com/docs/integrations/text_embedding/azureopenai)。


## LLM (旧版)

LLM 指的是在聊天模型之前出现的旧版文本补全模型。请参阅 [使用示例](http://python.langchain.com/docs/integrations/llms/openai)。

```python
from langchain_openai import OpenAI
```

如果您使用的是托管在 `Azure` 上的模型，则应为此使用不同的包装器：
```python
from langchain_openai import AzureOpenAI
```
有关 `Azure` 包装器的更详细演练，请参阅 [此处](http://python.langchain.com/docs/integrations/llms/azure_openai)。