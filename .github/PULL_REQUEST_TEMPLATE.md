感谢您为 LangChain 做出贡献！

- [ ] **PR 标题**: "package: 描述"
  - 其中 "package" 是指正在修改的 langchain、core 等。对于纯粹的文档更改，请使用 "docs: ..."；对于 CI 更改，请使用 "infra: ..."。
  - 示例: "core: add foobar LLM"


- [ ] **PR 信息**: ***删除整个清单*** 并替换为
    - **描述:** 对更改的描述
    - **问题:** 如果适用，它修复的问题 #
    - **依赖项:** 此更改所需的任何依赖项
    - **Twitter handle:** 如果您的 PR 被宣布，并且您希望被提及，我们将很乐意为您宣传！


- [ ] **添加测试和文档**: 如果您正在添加新的集成，请包括
  1. 集成的测试，最好是无需网络访问的单元测试，
  2. 一个展示其用法的示例笔记本。它位于 `docs/docs/integrations` 目录中。


- [ ] **Lint 和测试**: 从您修改的包的根目录运行 `make format`、`make lint` 和 `make test`。有关更多信息，请参阅贡献指南：https://python.langchain.com/docs/contributing/

附加指南：
- 确保可选依赖项在函数内部导入。
- 请不要向 pyproject.toml 文件添加依赖项（即使是可选的），除非它们是单元测试所必需的。
- 大多数 PR 不应修改一个以上的包。
- 更改应向后兼容。

如果您在几天内没有收到 PR 评论，请 @-mention baskaryan、eyurtsev、ccurme、vbarda、hwchase17 中的任何一位。