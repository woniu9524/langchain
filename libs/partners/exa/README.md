# langchain-exa

此包包含 LangChain 与 Exa Cloud 生成式模型的集成。

## 安装

```bash
pip install -U langchain-exa
```

## Exa Search Retriever

您可以按如下方式检索搜索结果

```python
from langchain_exa import ExaSearchRetriever

exa_api_key = "YOUR API KEY"

# 创建 ExaSearchRetriever 的新实例
exa = ExaSearchRetriever(exa_api_key=exa_api_key)

# 搜索查询并保存结果
results  = exa.invoke("What is the capital of France?")

# 打印结果
print(results)
```

### 高级功能

您可以使用文本限制、摘要和实时抓取等高级功能：

```python
from langchain_exa import ExaSearchRetriever, TextContentsOptions

# 使用高级选项创建新实例
exa = ExaSearchRetriever(
    exa_api_key="YOUR API KEY",
    k=20,  # 结果数量 (1-100)
    type="auto",  # 可以是 "neural", "keyword", 或 "auto"
    livecrawl="always",  # 可以是 "always", "fallback", 或 "never"
    summary=True,  # 获取每个结果的 AI 生成摘要
    text_contents_options={"max_characters": 3000}  # 限制文本长度
)

# 使用自定义摘要提示搜索查询
exa_with_custom_summary = ExaSearchRetriever(
    exa_api_key="YOUR API KEY",
    summary={"query": "generate one line summary in simple words."}  # 自定义摘要提示
)
```

## Exa Search Results

您可以按如下方式运行 ExaSearchResults 模块

```python
from langchain_exa import ExaSearchResults

# 初始化 ExaSearchResults 工具
search_tool = ExaSearchResults(exa_api_key="YOUR API KEY")

# 执行搜索查询
search_results = search_tool._run(
    query="When was the last time the New York Knicks won the NBA Championship?",
    num_results=5,
    text_contents_options=True,
    highlights=True
)

print("Search Results:", search_results)
```

### 高级功能

您可以使用文本限制、摘要和实时抓取等高级功能：

```python
from langchain_exa import ExaSearchResults

# 初始化 ExaSearchResults 工具
search_tool = ExaSearchResults(exa_api_key="YOUR API KEY")

# 使用高级选项执行搜索查询
search_results = search_tool._run(
    query="Latest AI research papers",
    num_results=10,  # 结果数量 (1-100)
    type="auto",  # 可以是 "neural", "keyword", 或 "auto"
    livecrawl="always",  # 可以是 "always", "fallback", 或 "never"
    summary=True,  # 获取每个结果的 AI 生成摘要
    text_contents_options={"max_characters": 2000}  # 限制文本长度
)

# 使用自定义摘要提示
search_results_with_custom_summary = search_tool._run(
    query="Latest AI research papers",
    summary={"query": "generate one liner"}  # 自定义摘要提示
)
```

## Exa Find Similar Results

您可以按如下方式运行 ExaFindSimilarResults 模块

```python
from langchain_exa import ExaFindSimilarResults

# 初始化 ExaFindSimilarResults 工具
find_similar_tool = ExaFindSimilarResults(exa_api_key="YOUR API KEY")

# 基于 URL 查找相似结果
similar_results = find_similar_tool._run(
    url="http://espn.com",
    num_results=5,
    text_contents_options=True,
    highlights=True
)

print("Similar Results:", similar_results)
```

### 高级功能

```python
from langchain_exa import ExaFindSimilarResults

# 初始化 ExaFindSimilarResults 工具
find_similar_tool = ExaFindSimilarResults(exa_api_key="YOUR API KEY")

# 使用高级选项查找相似结果
similar_results = find_similar_tool._run(
    url="http://espn.com",
    num_results=10,  # 结果数量 (1-100)
    livecrawl="fallback",  # 可以是 "always", "fallback", 或 "never"
    summary=True,  # 获取每个结果的 AI 生成摘要
    text_contents_options={"max_characters": 1500}  # 限制文本长度
)