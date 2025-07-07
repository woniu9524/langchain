# langchain-xai

此包包含通过其 [API](https://console.x.ai) 与 [xAI](https://x.ai/) 的 LangChain 集成。

## 安装和设置

- 安装 LangChain 合作伙伴包

```bash
pip install -U langchain-xai
```

- 从 [xAI Dashboard](https://console.x.ai) 获取您的 xAI API 密钥，并将其设置为环境变量 (`XAI_API_KEY`)

## 聊天补全

此包包含 `ChatXAI` 类，这是与 xAI 聊天模型交互的推荐方式。