# Shale Protocol

[Shale Protocol](https://shaleprotocol.com) 为开源大型语言模型提供生产就绪的推理 API。它是一个即插即用的 API，因为它托管在高度可扩展的 GPU 云基础设施上。

我们的免费套餐每密钥支持每天高达 1K 的请求，因为我们希望消除任何人使用大型语言模型构建 genAI 应用的障碍。

通过 Shale Protocol，开发人员/研究人员可以免费创建应用程序并探索开源大型语言模型的强大功能。

本页面介绍如何将 Shale-Serve API 与 LangChain 集成。

截至 2023 年 6 月，该 API 默认支持 Vicuna-13B。我们将在未来的版本中支持更多的大型语言模型，例如 Falcon-40B。

## 如何操作

### 1. 在 https://shaleprotocol.com 上找到我们 Discord 的链接。通过我们 Discord 上的“Shale Bot”生成 API 密钥。无需信用卡，也无需免费试用。这是一个永久免费套餐，每个 API 密钥每天限制 1K 请求。

### 2. 将 https://shale.live/v1 用作 OpenAI API 的直接替代品

例如
```python
from langchain_openai import OpenAI
from langchain_core.prompts import PromptTemplate
from langchain_core.output_parsers import StrOutputParser

import os
os.environ['OPENAI_API_BASE'] = "https://shale.live/v1"
os.environ['OPENAI_API_KEY'] = "ENTER YOUR API KEY"

llm = OpenAI()

template = """Question: {question}

# Answer: Let's think step by step."""

prompt = PromptTemplate.from_template(template)


llm_chain = prompt | llm | StrOutputParser()

question = "What NFL team won the Super Bowl in the year Justin Beiber was born?"

llm_chain.invoke(question)

```