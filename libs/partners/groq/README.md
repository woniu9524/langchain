# langchain-groq

## 欢迎来到 Groq！🚀

在 Groq，我们开发了世界上第一个语言处理单元™，即 LPU。Groq LPU 采用确定性的单核流式架构，通过对任何给定工作负载可预测且可重复的性能，为 GenAI 推理速度树立了标杆。

除了架构之外，我们的软件旨在通过您所需的工具赋能像您一样的开发者，以创建创新、强大的 AI 应用程序。借助 Groq 作为您的引擎，您可以：

* 为实时 AI 和 HPC 推理实现无损的低延迟和高性能 🔥
* 了解任何给定工作负载的确切性能和计算时间 🔮
* 利用我们的尖端技术保持竞争优势 💪

想要了解更多 Groq？请访问我们的 [网站](https://groq.com) 获取更多资源，并加入我们的 [Discord 社区](https://discord.gg/JvNsBDKeCG) 与我们的开发者交流！


## 安装和设置
安装集成包：

```bash
pip install langchain-groq
```

申请一个 [API 密钥](https://console.groq.com/login?utm_source=langchain&utm_content=package_readme) 并将其设置为环境变量

```bash
export GROQ_API_KEY=gsk_...
```

## Chat Model
请参阅 [用法示例](https://python.langchain.com/docs/integrations/chat/groq)。

## 开发

要开发 `langchain-groq` 包，您需要遵循以下说明：

### 安装开发依赖项

```bash
uv sync --group lint --group test
```

### 构建包

```bash
uv build
```

### 运行单元测试

单元测试位于 `tests/unit_tests`，不应需要互联网连接或有效的 API KEY。使用以下命令运行单元测试：

```bash
make tests
```

### 运行集成测试

集成测试位于 `tests/integration_tests`，需要连接到 Groq API 和有效的 API KEY。

```bash
make integration_tests
```

### Lint & Format

运行额外的测试和 linters 以确保您的代码符合标准。

```bash
make lint spell_check check_imports