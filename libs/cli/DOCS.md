# `langchain`

**用法**:

```console
$ langchain [OPTIONS] COMMAND [ARGS]...
```

**选项**:

* `--help`: 显示此消息并退出。
* `-v, --version`: 打印当前 CLI 版本。

**命令**:

* `app`: 管理 LangChain 应用
* `serve`: 启动 LangServe 应用，无论是...
* `template`: 开发可安装的模板。

## `langchain app`

管理 LangChain 应用

**用法**:

```console
$ langchain app [OPTIONS] COMMAND [ARGS]...
```

**选项**:

* `--help`: 显示此消息并退出。

**命令**:

* `add`: 将指定的模板添加到当前的...
* `new`: 创建一个新的 LangServe 应用。
* `remove`: 从...中移除指定的包。
* `serve`: 启动 LangServe 应用。

### `langchain app add`

将指定的模板添加到当前的 LangServe 应用。

例如：
langchain app add extraction-openai-functions
langchain app add git+ssh://git@github.com/efriis/simple-pirate.git

**用法**:

```console
$ langchain app add [OPTIONS] [DEPENDENCIES]...
```

**参数**:

* `[DEPENDENCIES]...`: 要添加的依赖项

**选项**:

* `--api-path TEXT`: 要添加的 API 路径
* `--project-dir PATH`: 项目目录
* `--repo TEXT`: 从指定的 github 仓库安装模板
* `--branch TEXT`: 从指定的仓库分支安装模板
* `--help`: 显示此消息并退出。

### `langchain app new`

创建一个新的 LangServe 应用。

**用法**:

```console
$ langchain app new [OPTIONS] NAME
```

**参数**:

* `NAME`: 要创建的文件夹名称  [必需]

**选项**:

* `--package TEXT`: 用于初始化项目的包
* `--help`: 显示此消息并退出。

### `langchain app remove`

从当前的 LangServe 应用中移除指定的包。

**用法**:

```console
$ langchain app remove [OPTIONS] API_PATHS...
```

**参数**:

* `API_PATHS...`: 要移除的 API 路径  [必需]

**选项**:

* `--help`: 显示此消息并退出。

### `langchain app serve`

启动 LangServe 应用。

**用法**:

```console
$ langchain app serve [OPTIONS]
```

**选项**:

* `--port INTEGER`: 运行服务器的端口
* `--host TEXT`: 运行服务器的主机
* `--app TEXT`: 要运行的应用，例如 `app.server:app`
* `--help`: 显示此消息并退出。

## `langchain serve`

启动 LangServe 应用，无论是模板还是应用。

**用法**:

```console
$ langchain serve [OPTIONS]
```

**选项**:

* `--port INTEGER`: 运行服务器的端口
* `--host TEXT`: 运行服务器的主机
* `--help`: 显示此消息并退出。

## `langchain template`

开发可安装的模板。

**用法**:

```console
$ langchain template [OPTIONS] COMMAND [ARGS]...
```

**选项**:

* `--help`: 显示此消息并退出。

**命令**:

* `new`: 创建一个新的模板包。
* `serve`: 启动此模板的演示应用。

### `langchain template new`

创建一个新的模板包。

**用法**:

```console
$ langchain template new [OPTIONS] NAME
```

**参数**:

* `NAME`: 要创建的文件夹名称  [必需]

**选项**:

* `--with-poetry / --no-poetry`: 不运行 poetry install  [默认为 no-poetry]
* `--help`: 显示此消息并退出。

### `langchain template serve`

启动此模板的演示应用。

**用法**:

```console
$ langchain template serve [OPTIONS]
```

**选项**:

* `--port INTEGER`: 运行服务器的端口
* `--host TEXT`: 运行服务器的主机
* `--help`: 显示此消息并退出。