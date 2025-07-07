# langchain-tests

这是 LangChain 集成的测试库。它包含了一套标准测试的基础类。

## 安装

我们鼓励您将版本固定到特定版本，以避免在我们发布新测试时破坏您的 CI。我们建议定期升级到最新版本，以确保您拥有最新的测试。

不固定版本将确保您始终拥有最新的测试，但如果我们引入了您的集成无法通过的测试，也可能会破坏您的 CI。

Pip:

```bash
pip install -U langchain-tests
```

Poetry:

```bash
poetry add langchain-tests
```

## 用法

要为集成包（例如 ChatModel）添加标准测试，您需要创建：

1. 一个继承自 `ChatModelUnitTests` 的单元测试类
2. 一个继承自 `ChatModelIntegrationTests` 的集成测试类

`tests/unit_tests/test_standard.py`:

```python
"""Standard LangChain interface tests"""

from typing import Type

import pytest
from langchain_core.language_models import BaseChatModel
from langchain_tests.unit_tests import ChatModelUnitTests

from langchain_parrot_chain import ChatParrotChain


class TestParrotChainStandard(ChatModelUnitTests):
    @pytest.fixture
    def chat_model_class(self) -> Type[BaseChatModel]:
        return ChatParrotChain
```

`tests/integration_tests/test_standard.py`:

```python
"""Standard LangChain interface tests"""

from typing import Type

import pytest
from langchain_core.language_models import BaseChatModel
from langchain_tests.integration_tests import ChatModelIntegrationTests

from langchain_parrot_chain import ChatParrotChain


class TestParrotChainStandard(ChatModelIntegrationTests):
    @pytest.fixture
    def chat_model_class(self) -> Type[BaseChatModel]:
        return ChatParrotChain
```

## 参考

以下 fixture 可在测试类中进行配置。未标记为必需的都是可选的。

- `chat_model_class` (必需): 要测试的聊天模型的类
- `chat_model_params`: 传递给聊天模型构造函数的关键字参数
- `chat_model_has_tool_calling`: 聊天模型是否可以调用工具。默认情况下，此设置为 `hasattr(chat_model_class, 'bind_tools)`
- `chat_model_has_structured_output`: 聊天模型是否支持结构化输出。默认情况下，此设置为 `hasattr(chat_model_class, 'with_structured_output')`