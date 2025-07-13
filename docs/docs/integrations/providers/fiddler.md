# Fiddler

>[Fiddler](https://www.fiddler.ai/) 提供了一个统一的平台，用于在企业规模上监控、解释、分析和改进 ML 部署。

## 安装与设置

使用 [Fiddler](https://demo.fiddler.ai) 设置您的模型：

* 您用于连接到 Fiddler 的 URL
* 您的组织 ID
* 您的授权令牌

安装 Python 包：

```bash
pip install fiddler-client
```

## Callbacks


```python
from langchain_community.callbacks.fiddler_callback import FiddlerCallbackHandler
```

请参阅 [示例](/docs/integrations/callbacks/fiddler)。