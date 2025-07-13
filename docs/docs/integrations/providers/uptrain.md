# UpTrain

>[UpTrain](https://uptrain.ai/) 是一个开源的统一平台，用于评估和改进生成式 AI 应用。它为 20 多项预配置的评估（涵盖语言、代码、嵌入式用例）提供评分，对失败案例进行根本原因分析，并给出解决它们的见解。

## 安装和设置

```bash
pip install uptrain
```

## Callbacks

```python
from langchain_community.callbacks.uptrain_callback import UpTrainCallbackHandler
```

请参阅 [示例](/docs/integrations/callbacks/uptrain)。