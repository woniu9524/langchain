# Portkey

[Portkey](https://portkey.ai) 是 AI 应用的控制面板。凭借其流行的 AI Gateway 和 Observability Suite，数百个团队交付了**可靠**、**经济高效**且**快速**的应用。

## Langchain 的 LLMOps

Portkey 为 Langchain 带来了生产就绪能力。通过 Portkey，您可以
- [x] 通过统一的 API 连接到 150 多个模型，
- [x] 查看所有请求的 42 多个**指标和日志**，
- [x] 启用**语义缓存**以降低延迟和成本，
- [x] 为失败的请求实现自动**重试和回退**，
- [x] 向请求添加**自定义标签**以进行更好的跟踪和分析，以及[更多](https://portkey.ai/docs)。


## 快速入门 - Portkey & Langchain
由于 Portkey 完全兼容 OpenAI 的签名，您可以通过 `ChatOpenAI` 接口连接到 Portkey AI Gateway。

- 将 `base_url` 设置为 `PORTKEY_GATEWAY_URL`
- 添加 `default_headers` 以使用 `createHeaders` 辅助方法调用 Portkey 所需的标头。

首先，通过[在此处注册](https://app.portkey.ai/signup)获取您的 Portkey API 密钥。（点击左下角的个人资料图标，然后点击“复制 API 密钥”）或在[您自己的环境中](https://github.com/Portkey-AI/gateway/blob/main/docs/installation-deployments.md)部署开源 AI 网关。

接下来，安装 Portkey SDK
```python
pip install -U portkey_ai
```

我们现在可以通过更新 Langchain 中的 `ChatOpenAI` 模型来连接到 Portkey AI Gateway
```python
from langchain_openai import ChatOpenAI
from portkey_ai import createHeaders, PORTKEY_GATEWAY_URL

PORTKEY_API_KEY = "..." # 托管自己的网关时不需要
PROVIDER_API_KEY = "..." # 添加正在使用的 AI 供应商的 API 密钥

portkey_headers = createHeaders(api_key=PORTKEY_API_KEY,provider="openai")

llm = ChatOpenAI(api_key=PROVIDER_API_KEY, base_url=PORTKEY_GATEWAY_URL, default_headers=portkey_headers)

llm.invoke("What is the meaning of life, universe and everything?")
```

请求通过您的 Portkey AI Gateway 路由到指定的 `provider`。Portkey 还将开始在您的帐户中记录所有请求，从而使调试极其简单。

![在 Portkey 中查看 Langchain 的日志](https://assets.portkey.ai/docs/langchain-logs.gif)

## 通过 AI 网关使用 150 多个模型
当您能够使用上面的代码片段连接到 AI 网关支持的 20 多个提供商的 150 多个模型时，AI 网关的强大功能就显现出来了。

让我们修改上面的代码，调用 Anthropic 的 `claude-3-opus-20240229` 模型。

Portkey 支持**[虚拟密钥](https://docs.portkey.ai/docs/product/ai-gateway-streamline-llm-integrations/virtual-keys)**，这是一种安全存储和管理 API 密钥的便捷方法。让我们尝试使用虚拟密钥进行 LLM 调用。您可以导航到 Portkey 中的“虚拟密钥”选项卡，并为 Anthropic 创建一个新密钥。

`virtual_key` 参数设置了正在使用的 AI 提供商的身份验证和提供商。在我们的例子中，我们使用的是 Anthropic 虚拟密钥。

> 请注意，`api_key` 可以留空，因为该身份验证将不会被使用。

```python
from langchain_openai import ChatOpenAI
from portkey_ai import createHeaders, PORTKEY_GATEWAY_URL

PORTKEY_API_KEY = "..."
VIRTUAL_KEY = "..." # 我们上面复制的 Anthropic 的虚拟密钥

portkey_headers = createHeaders(api_key=PORTKEY_API_KEY,virtual_key=VIRTUAL_KEY)

llm = ChatOpenAI(api_key="X", base_url=PORTKEY_GATEWAY_URL, default_headers=portkey_headers, model="claude-3-opus-20240229")

llm.invoke("What is the meaning of life, universe and everything?")
```

Portkey AI 网关将向 Anthropic 验证 API 请求，并以 OpenAI 格式将响应返回给您使用。

AI 网关扩展了 Langchain 的 `ChatOpenAI` 类，使其成为调用任何提供商和任何模型的单一接口。

## 高级路由 - 负载均衡、回退、重试
Portkey AI 网关通过一种配置优先的方法，为 Langchain 带来了负载均衡、回退、实验和金丝雀测试等功能。

让我们看一个**示例**，我们可能希望将流量在 `gpt-4` 和 `claude-opus` 之间平均分配（50:50），以测试这两个大型模型。此配置的网关配置将如下所示：

```python
config = {
    "strategy": {
         "mode": "loadbalance"
    },
    "targets": [{
        "virtual_key": "openai-25654", # OpenAI 的虚拟密钥
        "override_params": {"model": "gpt4"},
        "weight": 0.5
    }, {
        "virtual_key": "anthropic-25654", # Anthropic 的虚拟密钥
        "override_params": {"model": "claude-3-opus-20240229"},
        "weight": 0.5
    }]
}
```

然后，我们可以在从 langchain 发出的请求中使用此配置。

```python
portkey_headers = createHeaders(
    api_key=PORTKEY_API_KEY,
    config=config
)

llm = ChatOpenAI(api_key="X", base_url=PORTKEY_GATEWAY_URL, default_headers=portkey_headers)

llm.invoke("What is the meaning of life, universe and everything?")
```

当调用 LLM 时，Portkey 将按照定义的权重比例将请求分发到 `gpt-4` 和 `claude-3-opus-20240229`。

您可以在此处找到更多配置示例[此处](https://docs.portkey.ai/docs/api-reference/config-object#examples)。

## **跟踪链和代理**

Portkey 的 Langchain 集成让您可以完全了解代理的运行情况。让我们以一个[流行的代理工作流](https://python.langchain.com/docs/use_cases/tool_use/quickstart/#agents)为例。

我们只需要像上面一样修改 `ChatOpenAI` 类来使用 AI 网关。

```python
from langchain import hub  
from langchain.agents import AgentExecutor, create_openai_tools_agent  
from langchain_openai import ChatOpenAI
from langchain_core.tools import tool
from portkey_ai import PORTKEY_GATEWAY_URL, createHeaders
 
prompt = hub.pull("hwchase17/openai-tools-agent")

portkey_headers = createHeaders(
    api_key=PORTKEY_API_KEY,
    virtual_key=OPENAI_VIRTUAL_KEY,
    trace_id="uuid-uuid-uuid-uuid"
)

@tool
def multiply(first_int: int, second_int: int) -> int:
    """Multiply two integers together."""
    return first_int * second_int
  
  
@tool  
def exponentiate(base: int, exponent: int) -> int:  
    "Exponentiate the base to the exponent power."  
    return base**exponent  
  
  
tools = [multiply, exponentiate]

model = ChatOpenAI(api_key="X", base_url=PORTKEY_GATEWAY_URL, default_headers=portkey_headers, temperature=0)
  
# Construct the OpenAI Tools agent  
agent = create_openai_tools_agent(model, tools, prompt)

# Create an agent executor by passing in the agent and tools
agent_executor = AgentExecutor(agent=agent, tools=tools, verbose=True)

agent_executor.invoke({
    "input": "Take 3 to the fifth power and multiply that by thirty six, then square the result"
})
```

**您可以在 Portkey 仪表板上查看请求日志以及跟踪 ID：**
![Portkey 上的 Langchain 代理日志](https://assets.portkey.ai/docs/agent_tracing.gif)

其他文档可以在此处找到：
- 可观测性 - https://portkey.ai/docs/product/observability-modern-monitoring-for-llms
- AI 网关 - https://portkey.ai/docs/product/ai-gateway-streamline-llm-integrations
- 提示库 - https://portkey.ai/docs/product/prompt-library

您可以在此处查看我们流行的开源 AI 网关 - https://github.com/portkey-ai/gateway

有关每个功能及其使用方法的详细信息，[请参阅 Portkey 文档](https://portkey.ai/docs)。如果您有任何问题或需要进一步的帮助，请通过 [Twitter 联系我们](https://twitter.com/portkeyai)。或我们的 [支持邮箱](mailto:hello@portkey.ai)。