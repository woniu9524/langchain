# SWI-Prolog

SWI-Prolog 提供了一个全面的免费 Prolog 环境。

## 安装与设置

安装 SWI-Prolog 后，使用 pip 安装 lanchain-prolog：
```bash
pip install langchain-prolog
```

## 工具

`PrologTool` 类允许生成使用 Prolog 规则来生成答案的 langchain 工具。

```python
from langchain_prolog import PrologConfig, PrologTool
```

请参阅 [用法示例](/docs/integrations/tools/prolog_tool)。

请参阅相同的指南，了解 `PrologRunnable` 的用法示例，该示例允许生成使用 Prolog 规则来生成答案的 LangChain runnables。