# 开发容器

本项目包含一个 [开发容器](https://containers.dev/)，它允许您使用容器作为功能齐全的开发环境。

您可以使用此文件夹中的开发容器配置来构建和运行应用程序，而无需在本地安装任何工具！您可以在 [GitHub Codespaces](https://github.com/features/codespaces) 或 [VS Code Dev Containers 扩展](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) 中使用它。

## GitHub Codespaces
[![在 GitHub Codespaces 中打开](https://github.com/codespaces/badge.svg)](https://codespaces.new/langchain-ai/langchain)

您可以使用上面的按钮，或按照以下步骤在 Codespace 中打开此仓库：
1. 点击 https://github.com/langchain-ai/langchain 顶部的 **Code** 下拉菜单。
1. 点击 **Codespaces** 选项卡。
1. 点击 **在 master 上创建 codespace**。

有关更多信息，请查看 [GitHub 文档](https://docs.github.com/en/free-pro-team@latest/github/developing-online-with-codespaces/creating-a-codespace#creating-a-codespace)。
  
## VS Code 开发容器
[![在开发容器中打开](https://img.shields.io/static/v1?label=Dev%20Containers&message=Open&color=blue&logo=visualstudiocode)](https://vscode.dev/redirect?url=vscode://ms-vscode-remote.remote-containers/cloneInVolume?url=https://github.com/langchain-ai/langchain)

注意：如果您点击上面的链接，您将打开主仓库 (langchain-ai/langchain)，而不是您本地克隆的仓库。如果您只想运行和测试库，这没关系，但如果您想贡献，可以使用下面的链接并替换为您自己的用户名和克隆的仓库名称：
```
https://vscode.dev/redirect?url=vscode://ms-vscode-remote.remote-containers/cloneInVolume?url=https://github.com/<yourusername>/<yourclonedreponame>

```
然后您将拥有一个本地克隆的仓库，您可以在其中贡献并创建拉取请求。

如果您已经安装了 VS Code 和 Docker，您可以使用上面的按钮开始。这将导致 VS Code 在需要时自动安装 Dev Containers 扩展，将源代码克隆到容器卷中，并启动一个开发容器供您使用。

或者，您也可以按照以下步骤使用 VS Code Dev Containers 扩展在容器中打开此仓库：

1. 如果您是第一次使用开发容器，请确保您的系统满足先决条件（即已安装 Docker），请参阅 [入门步骤](https://aka.ms/vscode-remote/containers/getting-started)。

2. 打开代码的本地克隆副本：

   - Fork 并将此仓库克隆到您的本地文件系统。
   - 按 <kbd>F1</kbd> 并选择 **Dev Containers: Open Folder in Container...** 命令。
   - 选择此文件夹的克隆副本，等待容器启动，然后尝试使用！

您可以在 [Dev Containers 文档](https://code.visualstudio.com/docs/devcontainers/containers) 中了解更多信息。

## 技巧和窍门

* 如果您在容器和 Windows 中使用同一个仓库文件夹，您会希望有统一的行尾符（否则您可能会在 SCM 视图中看到数百个更改）。此仓库根目录中的 `.gitattributes` 文件将禁用行尾符转换，并应能防止这种情况。有关更多信息，请参阅 [技巧和窍门](https://code.visualstudio.com/docs/devcontainers/tips-and-tricks#_resolving-git-line-ending-issues-in-containers-resulting-in-many-modified-files)。
* 如果您想查看此开发容器中使用的镜像的内容，可以在 [devcontainers/images](https://github.com/devcontainers/images/tree/main/src/python) 仓库中查看。