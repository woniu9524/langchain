# __app_name__

## 安装

如果尚未安装 LangChain CLI，请进行安装

```bash
pip install -U langchain-cli
```

## 添加包

```bash
# 从以下位置添加包
# https://github.com/langchain-ai/langchain/tree/master/templates
langchain app add $PROJECT_NAME

# 添加自定义 GitHub 仓库包
langchain app add --repo $OWNER/$REPO
# 或者使用完整的 git 字符串（支持其他 git 提供商）：
# langchain app add git+https://github.com/hwchase17/chain-of-verification

# 使用自定义 API 挂载点（默认为 `/{package_name}`）
langchain app add $PROJECT_NAME --api_path=/my/custom/path/rag
```

注意：您可以通过其 API 路径移除包

```bash
langchain app remove my/custom/path/rag
```

## 设置 LangSmith (可选)
LangSmith 将帮助我们跟踪、监控和调试 LangChain 应用程序。
您可以在 [此处](https://smith.langchain.com/) 注册 LangSmith。
如果您没有访问权限，可以跳过此部分

```shell
export LANGSMITH_TRACING=true
export LANGSMITH_API_KEY=<your-api-key>
export LANGSMITH_PROJECT=<your-project>  # 如果未指定，则默认为 "default"
```

## 启动 LangServe

```bash
langchain serve
```

## 在 Docker 中运行

此项目文件夹包含一个 Dockerfile，允许您轻松构建和托管您的 LangServe 应用程序。

### 构建镜像

要构建镜像，只需执行以下操作：

```shell
docker build . -t my-langserve-app
```

如果您使用的镜像标签不是 `my-langserve-app`，
请记下它以便在下一步中使用。

### 在本地运行镜像

要运行镜像，您需要包含应用程序所需的任何环境变量。

在下面的示例中，我们使用本地环境中设置的值 (`$OPENAI_API_KEY`)
注入 `OPENAI_API_KEY` 环境变量。

我们还使用 `-p 8080:8080` 选项公开了 8080 端口。

```shell
docker run -e OPENAI_API_KEY=$OPENAI_API_KEY -p 8080:8080 my-langserve-app