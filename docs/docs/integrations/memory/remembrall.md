# Remembrall

此页面介绍如何在 LangChain 中使用 Remembrall ([https://remembrall.dev](https://remembrall.dev)) 生态系统。

## 什么是 Remembrall？

Remembrall 只需几行代码即可为您的语言模型提供长期记忆、检索增强生成以及完整的可观察性。

![Remembrall 仪表板截图，显示请求统计信息和模型交互。](/img/RemembrallDashboard.png "Remembrall 仪表板界面")

它作为 OpenAI 调用之上的轻量级代理运行，并在运行时通过收集到的相关事实简单地增强聊天调用的上下文。

## 设置

要开始，请在 Remembrall 平台 [使用 Github 登录](https://remembrall.dev/login)，并从设置页面 [复制您的 API 密钥](https://remembrall.dev/dashboard/settings)。

您通过修改后的 `openai_api_base`（如下所示）和 Remembrall API 密钥发送的任何请求都将在 Remembrall 仪表板中自动跟踪。您 **永远** 不需要与我们的平台共享您的 OpenAI 密钥，并且 Remembrall 系统 **绝不** 存储这些信息。

为实现此目的，我们需要安装以下依赖项：

```bash
pip install -U langchain-openai
```

### 启用长期记忆

除了通过 `x-gp-api-key` 设置 `openai_api_base` 和 Remembrall API 密钥外，您还应指定一个 UID 以维护记忆。这通常是一个唯一的用户标识符（例如电子邮件）。

```python
from langchain_openai import ChatOpenAI
chat_model = ChatOpenAI(openai_api_base="https://remembrall.dev/api/openai/v1",
                        model_kwargs={
                            "headers":{
                                "x-gp-api-key": "remembrall-api-key-here",
                                "x-gp-remember": "user@email.com",
                            }
                        })

chat_model.predict("My favorite color is blue.")
import time; time.sleep(5)  # wait for system to save fact via auto save
print(chat_model.predict("What is my favorite color?"))
```

### 启用检索增强生成

首先，在 [Remembrall 仪表板](https://remembrall.dev/dashboard/spells) 中创建一个文档上下文。粘贴文档文本或上传 PDF 文档以供处理。保存文档上下文 ID 并按如下方式插入。

```python
from langchain_openai import ChatOpenAI
chat_model = ChatOpenAI(openai_api_base="https://remembrall.dev/api/openai/v1",
                        model_kwargs={
                            "headers":{
                                "x-gp-api-key": "remembrall-api-key-here",
                                "x-gp-context": "document-context-id-goes-here",
                            }
                        })

print(chat_model.predict("This is a question that can be answered with my document."))
```