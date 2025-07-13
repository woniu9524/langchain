# Pebblo

[Pebblo](https://www.daxa.ai/pebblo) 使开发者能够安全地加载和检索数据，以便其 Gen AI 应用能够顺利部署，而无需担心组织的合规性和安全要求。Pebblo SafeLoader 用于识别加载数据中的语义主题和实体，而 Pebblo SafeRetriever 则对检索到的上下文强制执行身份和语义控制。结果会显示在 UI 上或生成 PDF 报告。

## Pebblo 概述：

`Pebblo` 为 Gen AI 应用提供了一种安全加载和检索数据的方式。
它包括：
1. **身份感知安全加载器 (Identity-aware Safe Loader)**，用于加载数据并识别语义主题和实体。
2. **安全检索 (SafeRetrieval)**，用于对检索到的上下文强制执行身份和语义控制。
3. **用户数据报告 (User Data Report)**，用于总结已加载和检索的数据。

## 示例 Notebooks

有关使用 Pebblo 的更详细示例，请参阅以下 Notebooks：
* [PebbloSafeLoader](/docs/integrations/document_loaders/pebblo) 展示了如何使用 Pebblo 加载器安全地加载数据。
* [PebbloRetrievalQA](/docs/integrations/providers/pebblo/pebblo_retrieval_qa) 展示了如何使用 Pebblo 检索 QA 链安全地检索数据。