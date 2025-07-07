# langchain-ollama

此包包含 LangChain 与 Ollama 的集成

## 安装

```bash
pip install -U langchain-ollama
```

要使该包正常工作，您需要本地安装并运行 Ollama 服务器（[下载](https://ollama.com/download)）。

要运行集成测试（`make integration_tests`），您需要在 Ollama 服务器中安装以下模型：

- `llama3.1`
- `deepseek-r1:1.5b`

通过运行以下命令安装这些模型：

```bash
ollama pull <name-of-model>
```

## [聊天模型](https://python.langchain.com/api_reference/ollama/chat_models/langchain_ollama.chat_models.ChatOllama.html#chatollama)

`ChatOllama` 类公开了 Ollama 的聊天模型。

```python
from langchain_ollama import ChatOllama

llm = ChatOllama(model="llama3.1")
llm.invoke("Sing a ballad of LangChain.")
```

## [嵌入](https://python.langchain.com/api_reference/ollama/embeddings/langchain_ollama.embeddings.OllamaEmbeddings.html#ollamaembeddings)

`OllamaEmbeddings` 类公开了 Ollama 的嵌入。

```python
from langchain_ollama import OllamaEmbeddings

embeddings = OllamaEmbeddings(model="llama3.1")
embeddings.embed_query("What is the meaning of life?")
```

## [LLM](https://python.langchain.com/api_reference/ollama/llms/langchain_ollama.llms.OllamaLLM.html#ollamallm)

`OllamaLLM` 类公开了 Ollama 的传统 LLM。

```python
from langchain_ollama import OllamaLLM

llm = OllamaLLM(model="llama3.1")
llm.invoke("The meaning of life is")