# LLMonitor

>[LLMonitor](https://llmonitor.com?utm_source=langchain&utm_medium=py&utm_campaign=docs) 是一个开源的可观测性平台，提供成本和使用情况分析、用户跟踪、追踪和评估工具。

<video controls width='100%' >
  <source src='https://llmonitor.com/videos/demo-annotated.mp4'/>
</video>

## 设置

在 [llmonitor.com](https://llmonitor.com?utm_source=langchain&utm_medium=py&utm_campaign=docs) 上创建一个账户，然后复制您新应用的 `tracking id`。

获取后，通过运行以下命令将其设置为环境变量：

```bash
export LLMONITOR_APP_ID="..."
```

如果您不想设置环境变量，可以在初始化回调处理器时直接传入密钥：

```python
from langchain_community.callbacks.llmonitor_callback import LLMonitorCallbackHandler

handler = LLMonitorCallbackHandler(app_id="...")
```

## 与 LLM/Chat 模型一起使用

```python
from langchain_openai import OpenAI
from langchain_openai import ChatOpenAI

handler = LLMonitorCallbackHandler()

llm = OpenAI(
    callbacks=[handler],
)

chat = ChatOpenAI(callbacks=[handler])

llm("给我讲个笑话")

```

## 与链和代理一起使用

确保将回调处理器传递给 `run` 方法，以便正确跟踪所有相关的链和 LLM 调用。

还建议在元数据中传递 `agent_name`，以便在仪表板中区分不同的代理。

示例：

```python
from langchain_openai import ChatOpenAI
from langchain_community.callbacks.llmonitor_callback import LLMonitorCallbackHandler
from langchain_core.messages import SystemMessage, HumanMessage
from langchain.agents import OpenAIFunctionsAgent, AgentExecutor, tool

llm = ChatOpenAI(temperature=0)

handler = LLMonitorCallbackHandler()

@tool
def get_word_length(word: str) -> int:
    """返回一个单词的长度。"""
    return len(word)

tools = [get_word_length]

prompt = OpenAIFunctionsAgent.create_prompt(
    system_message=SystemMessage(
        content="你是一个非常强大的助手，但计算单词长度的能力很差。"
    )
)

agent = OpenAIFunctionsAgent(llm=llm, tools=tools, prompt=prompt, verbose=True)
agent_executor = AgentExecutor(
    agent=agent, tools=tools, verbose=True, metadata={"agent_name": "WordCount"}  # <- 推荐，指定一个自定义名称
)
agent_executor.run("educa 这个词有多少个字母？", callbacks=[handler])
```

另一个示例：

```python
import os

from langchain_community.agent_toolkits.load_tools import load_tools
from langchain_community.callbacks.llmonitor_callback import LLMonitorCallbackHandler
from langchain_openai import ChatOpenAI
from langgraph.prebuilt import create_react_agent

os.environ["LLMONITOR_APP_ID"] = ""
os.environ["OPENAI_API_KEY"] = ""
os.environ["SERPAPI_API_KEY"] = ""

handler = LLMonitorCallbackHandler()
llm = ChatOpenAI(temperature=0, callbacks=[handler])
tools = load_tools(["serpapi", "llm-math"], llm=llm)
agent = create_react_agent("openai:gpt-4.1-mini", tools)

input_message = {
    "role": "user",
    "content": "旧金山的天气怎么样？",
}

agent.invoke({"messages": [input_message]})
```

## 用户跟踪
用户跟踪允许您识别用户、跟踪他们的成本、对话等。

```python
from langchain_community.callbacks.llmonitor_callback import LLMonitorCallbackHandler, identify

with identify("user-123"):
    llm.invoke("给我讲个笑话")

with identify("user-456", user_props={"email": "user456@test.com"}):
    agent.invoke(...)
```
## 支持

如果您在集成过程中有任何疑问或问题，可以通过 [Discord](http://discord.com/invite/8PafSG58kK) 或 [电子邮件](mailto:vince@llmonitor.com) 联系 LLMonitor 团队。