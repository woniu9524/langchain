# Predibase

了解如何将 LangChain 与 Predibase 上的模型结合使用。

## 设置
- 创建一个 [Predibase](https://predibase.com/) 账户和 [API 密钥](https://docs.predibase.com/sdk-guide/intro)。
- 使用 `pip install predibase` 安装 Predibase Python 客户端
- 使用您的 API 密钥进行身份验证

### LLM

Predibase 通过实现 LLM 模块与 LangChain 集成。您可以在下方看到一个简短的示例，或者在 LLM > Integrations > Predibase 下找到完整的笔记本。

```python
import os
os.environ["PREDIBASE_API_TOKEN"] = "{PREDIBASE_API_TOKEN}"

from langchain_community.llms import Predibase

model = Predibase(
    model="mistral-7b",
    predibase_api_key=os.environ.get("PREDIBASE_API_TOKEN"),
    predibase_sdk_version=None,  # 可选参数（如果省略，则默认为最新的 Predibase SDK 版本）
    """
    可选地使用 `model_kwargs` 来设置新的默认 "generate()" 设置。例如：
    {
        "api_token": os.environ.get("HUGGING_FACE_HUB_TOKEN"),
        "max_new_tokens": 5,  # 默认为 256
    }
    """
    **model_kwargs,
)

"""
可选地使用 `kwargs` 来动态覆盖 "generate()" 设置。例如：
{
    "temperature": 0.5,  # 默认为 model_kwargs 中的值或 0.1（初始化默认值）
    "max_new_tokens": 1024,  # 默认为 model_kwargs 中的值或 256（初始化默认值）
}
"""
response = model.invoke("Can you recommend me a nice dry wine?", **kwargs)
print(response)
```

Predibase 还支持在 `model` 参数指定的基模型上进行微调的 Predibase 托管和 HuggingFace 托管的适配器：

```python
import os
os.environ["PREDIBASE_API_TOKEN"] = "{PREDIBASE_API_TOKEN}"

from langchain_community.llms import Predibase

# 微调适配器托管在 Predibase (必须指定 adapter_version)。
model = Predibase(
    model="mistral-7b",
    predibase_api_key=os.environ.get("PREDIBASE_API_TOKEN"),
    predibase_sdk_version=None,  # 可选参数（如果省略，则默认为最新的 Predibase SDK 版本）
    adapter_id="e2e_nlg",
    adapter_version=1,
    """
    可选地使用 `model_kwargs` 来设置新的默认 "generate()" 设置。例如：
    {
        "api_token": os.environ.get("HUGGING_FACE_HUB_TOKEN"),
        "max_new_tokens": 5,  # 默认为 256
    }
    """
    **model_kwargs,
)

"""
可选地使用 `kwargs` 来动态覆盖 "generate()" 设置。例如：
{
    "temperature": 0.5,  # 默认为 model_kwargs 中的值或 0.1（初始化默认值）
    "max_new_tokens": 1024,  # 默认为 model_kwargs 中的值或 256（初始化默认值）
}
"""
response = model.invoke("Can you recommend me a nice dry wine?", **kwargs)
print(response)
```

Predibase 还支持在 `model` 参数指定的基模型上进行微调的适配器：

```python
import os
os.environ["PREDIBASE_API_TOKEN"] = "{PREDIBASE_API_TOKEN}"

from langchain_community.llms import Predibase

# 微调适配器托管在 HuggingFace (不适用 adapter_version，将被忽略)。
model = Predibase(
    model="mistral-7b",
    predibase_api_key=os.environ.get("PREDIBASE_API_TOKEN"),
    predibase_sdk_version=None,  # 可选参数（如果省略，则默认为最新的 Predibase SDK 版本）
    adapter_id="predibase/e2e_nlg",
    """
    可选地使用 `model_kwargs` 来设置新的默认 "generate()" 设置。例如：
    {
        "api_token": os.environ.get("HUGGING_FACE_HUB_TOKEN"),
        "max_new_tokens": 5,  # 默认为 256
    }
    """
    **model_kwargs,
)

"""
可选地使用 `kwargs` 来动态覆盖 "generate()" 设置。例如：
{
    "temperature": 0.5,  # 默认为 model_kwargs 中的值或 0.1（初始化默认值）
    "max_new_tokens": 1024,  # 默认为 model_kwargs 中的值或 256（初始化默认值）
}
"""
response = model.invoke("Can you recommend me a nice dry wine?", **kwargs)
print(response)
```