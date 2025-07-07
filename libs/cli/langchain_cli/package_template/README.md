# __package_name__

待办：此包的功能说明

## 环境设置

待办：需要设置哪些环境变量（如果有）

## 用法

要使用此包，您首先需要安装 LangChain CLI：

```shell
pip install -U langchain-cli
```

要创建一个新的 LangChain 项目并将此包作为唯一包安装，您可以执行：

```shell
langchain app new my-app --package __package_name__
```

如果您想将其添加到现有项目中，只需运行：

```shell
langchain app add __package_name__
```

并将以下代码添加到您的 `server.py` 文件中：
```python
__app_route_code__
```

（可选）现在让我们配置 LangSmith。
LangSmith 将帮助我们跟踪、监控和调试 LangChain 应用程序。
您可以在 [此处](https://smith.langchain.com/) 注册 LangSmith。
如果您没有访问权限，可以跳过此部分

```shell
export LANGSMITH_TRACING=true
export LANGSMITH_API_KEY=<your-api-key>
export LANGSMITH_PROJECT=<your-project>  # 如果未指定，则默认为 "default"
```

如果您在此目录中，则可以直接启动 LangServe 实例：

```shell
langchain serve
```

这将启动 FastAPI 应用程序，服务器将在本地运行于
[http://localhost:8000](http://localhost:8000)

我们可以在 [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs) 查看所有模板
我们可以在 [http://127.0.0.1:8000/__package_name__/playground](http://127.0.0.1:8000/__package_name__/playground) 访问 playground

我们可以通过以下方式从代码中访问模板：

```python
from langserve.client import RemoteRunnable

runnable = RemoteRunnable("http://localhost:8000/__package_name__")