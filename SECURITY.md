# 安全策略

LangChain 拥有一个庞大的生态系统，集成了各种外部资源，如本地和远程文件系统、API 和数据库。这些集成使开发人员能够创建多功能应用程序，将 LLM 的强大功能与访问、交互和操作外部资源的能力相结合。

## 最佳实践

在构建此类应用程序时，开发人员应牢记遵循良好的安全实践：

* [**限制权限**](https://en.wikipedia.org/wiki/Principle_of_least_privilege)：将权限范围限定在应用程序的特定需求。授予广泛或过多的权限可能会引入重大的安全漏洞。为避免此类漏洞，请考虑使用只读凭据、禁止访问敏感资源、使用沙盒技术（例如在容器内运行）、指定代理配置以控制外部请求等，具体取决于您的应用程序。
* **预见潜在的滥用**：正如人类会犯错一样，大型语言模型 (LLM) 也会犯错。始终假定任何系统访问或凭据都可能以其被分配的权限允许的任何方式使用。例如，如果一对数据库凭据允许删除数据，那么最安全的方式是假定任何能够使用这些凭据的 LLM 实际上都可能删除数据。
* [**纵深防御**](https://en.wikipedia.org/wiki/Defense_in_depth_(computing))：没有一种安全技术是完美的。微调和良好的链设计可以减少大型语言模型 (LLM) 犯错的可能性，但不能完全消除。最好结合多种分层安全方法，而不是依赖任何单一的防御层来确保安全。例如：同时使用只读权限和沙盒技术，以确保 LLM 只能访问明确供其使用的数据。

不这样做可能带来的风险包括但不限于：
* 数据损坏或丢失。
* 未经授权访问机密信息。
* 关键资源的性能或可用性受到损害。

示例场景及缓解策略：

* 用户可能会要求一个可以访问文件系统的代理删除不应删除的文件，或读取包含敏感信息的文件内容。为缓解此问题，请将代理限制为仅使用特定目录，并仅允许其读取或写入可以安全读写的文件。考虑通过在容器中运行代理来进一步对其进行沙盒化。
* 用户可能会要求一个具有外部 API 写入访问权限的代理向 API 写入恶意数据，或从该 API 中删除数据。为缓解此问题，请为代理提供只读 API 密钥，或将其限制为仅使用已能抵抗此类滥用的端点。
* 用户可能会要求一个具有数据库访问权限的代理删除表或修改模式。为缓解此问题，请将凭据的范围限定为仅代理需要访问的表，并考虑发放只读凭据。

如果您正在构建访问文件系统、API 或数据库等外部资源的应用程序，请考虑与您公司的安全团队沟通，以确定如何最好地设计和保护您的应用程序。

## 报告开源漏洞

LangChain 与 [huntr by Protect AI](https://huntr.com/) 合作，为我们的开源项目提供赏金计划。

请通过访问以下链接报告与 LangChain 开源项目相关的安全漏洞：

[https://huntr.com/bounties/disclose/](https://huntr.com/bounties/disclose/?target=https%3A%2F%2Fgithub.com%2Flangchain-ai%2Flangchain&validSearch=true)

在报告漏洞之前，请查阅：

1) 下面的“范围内目标”和“范围外目标”。
2) [langchain-ai/langchain](https://python.langchain.com/docs/contributing/repo_structure) 单体仓库结构。
3) 上面的 [最佳实践](#best-practices)，以了解我们如何将安全漏洞与开发者责任区分开来。

### 范围内目标

以下软件包和存储库符合漏洞赏金的资格：

- langchain-core
- langchain（请参阅例外）
- langchain-community（请参阅例外）
- langgraph
- langserve

### 范围外目标

huntr 定义的所有范围外目标，以及：

- **langchain-experimental**：此存储库包含实验性代码，不符合漏洞赏金的资格（请参阅 [软件包警告](https://pypi.org/project/langchain-experimental/)），对其的错误报告将被标记为“有趣”或“浪费时间”，并在不附带赏金的情况下发布。
- **tools**：langchain 或 langchain-community 中的工具不符合漏洞赏金的资格。这包括以下目录：
  - libs/langchain/langchain/tools
  - libs/community/langchain_community/tools
  - 请参阅 [最佳实践](#best-practices) 以获取更多详细信息，但通常工具会与真实世界进行交互。开发者应了解其代码的安全含义，并对其工具的安全性负责。
- 带有安全通知的代码。这将根据具体情况决定，但可能不符合赏金资格，因为代码已附带应遵循的指南，以确保开发人员构建的安全应用程序。
- 任何与 LangSmith 相关的存储库或 API（请参阅 [报告 LangSmith 漏洞](#reporting-langsmith-vulnerabilities)）。

## 报告 LangSmith 漏洞

请通过电子邮件 `security@langchain.dev` 报告与 LangSmith 相关的安全漏洞。

- LangSmith 网站：https://smith.langchain.com
- SDK 客户端：https://github.com/langchain-ai/langsmith-sdk

### 其他安全问题

对于任何其他安全问题，请通过 `security@langchain.dev` 与我们联系。