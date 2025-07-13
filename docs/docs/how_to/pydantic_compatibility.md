# 如何使用 LangChain 与不同的 Pydantic 版本

自 `0.3` 版本起，LangChain 内部使用了 Pydantic 2。

用户应安装 Pydantic 2，并建议在 LangChain API 中**避免**使用 Pydantic 2 的 `pydantic.v1` 命名空间。

如果您正在使用 LangChain 的早期版本，请参阅以下关于 [Pydantic 兼容性](https://python.langchain.com/v0.2/docs/how_to/pydantic_compatibility) 的指南。