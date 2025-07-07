# 测试 replace_imports 迁移

此操作将运行 v0.2 迁移，并应用一组指定的规则。

```grit
language python

langchain_all_migrations()
```

## 单个导入

之前：

```python
from langchain.chat_models import ChatOpenAI
```

之后：

```python
from langchain_community.chat_models import ChatOpenAI
```

## 从 community 到 partner

```python
from langchain_community.chat_models import ChatOpenAI
```

```python
from langchain_openai import ChatOpenAI
```

## 无操作

此文件不应匹配。

```python
from foo import ChatOpenAI
```

## 混合导入

```python
from langchain_community.chat_models import ChatOpenAI, ChatAnthropic, foo
```

```python
from langchain_community.chat_models import foo

from langchain_openai import ChatOpenAI

from langchain_anthropic import ChatAnthropic