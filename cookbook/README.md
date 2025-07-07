# LangChain 食谱

用于构建 LangChain 应用程序的示例代码，重点是比 [主文档](https://python.langchain.com) 中包含的更贴近实际应用和端到端的示例。

笔记本 | 描述
:- | :-
[agent_fireworks_ai_langchain_mongodb.ipynb](https://github.com/langchain-ai/langchain/tree/master/cookbook/agent_fireworks_ai_langchain_mongodb.ipynb) | 使用 MongoDB、LangChain 和 FireWorksAI 构建一个具有记忆的 AI 代理。
[mongodb-langchain-cache-memory.ipynb](https://github.com/langchain-ai/langchain/tree/master/cookbook/mongodb-langchain-cache-memory.ipynb) | 使用 MongoDB 和 LangChain 构建一个带有语义缓存的 RAG 应用程序。
[LLaMA2_sql_chat.ipynb](https://github.com/langchain-ai/langchain/tree/master/cookbook/LLaMA2_sql_chat.ipynb) | 构建一个与 SQL 数据库交互的聊天应用程序，使用开源 LLM (llama2)，特别是在包含花名册的 SQLite 数据库上进行演示。
[Semi_Structured_RAG.ipynb](https://github.com/langchain-ai/langchain/tree/master/cookbook/Semi_Structured_RAG.ipynb) | 对包含文本和表格的半结构化数据文档执行检索增强生成 (RAG)，使用 unstructured 进行解析，使用多向量检索器进行存储，并使用 lcel 实现链。
[Semi_structured_and_multi_moda...](https://github.com/langchain-ai/langchain/tree/master/cookbook/Semi_structured_and_multi_modal_RAG.ipynb) | 对包含半结构化数据和图像的文档执行检索增强生成 (RAG)，使用 unstructured 进行解析，使用多向量检索器进行存储和检索，并使用 lcel 实现链。
[Semi_structured_multi_modal_RA...](https://github.com/langchain-ai/langchain/tree/master/cookbook/Semi_structured_multi_modal_RAG_LLaMA2.ipynb) | 对包含半结构化数据和图像的文档执行检索增强生成 (RAG)，使用 unstructured 进行解析，多向量检索器进行存储和检索，lcel 实现链，以及 llama2、llava 和 gpt4all 等开源语言模型。
[amazon_personalize_how_to.ipynb](https://github.com/langchain-ai/langchain/blob/master/cookbook/amazon_personalize_how_to.ipynb) | 从 Amazon Personalize 检索个性化推荐，并使用自定义代理构建生成式 AI 应用。
[analyze_document.ipynb](https://github.com/langchain-ai/langchain/tree/master/cookbook/analyze_document.ipynb) | 分析单个长文档。
[autogpt/autogpt.ipynb](https://github.com/langchain-ai/langchain/tree/master/cookbook/autogpt/autogpt.ipynb) | 使用 LangChain 的原始组件（如 LLM、PromptTemplate、VectorStore、Embeddings 和 Tools）实现 AutoGPT。
[autogpt/marathon_times.ipynb](https://github.com/langchain-ai/langchain/tree/master/cookbook/autogpt/marathon_times.ipynb) | 实现 AutoGPT 以查找马拉松获胜时间。
[baby_agi.ipynb](https://github.com/langchain-ai/langchain/tree/master/cookbook/baby_agi.ipynb) | 实现 BabyAGI，一个可以根据给定目标生成和执行任务的 AI 代理，并可以灵活地替换特定的向量存储/模型提供商。
[baby_agi_with_agent.ipynb](https://github.com/langchain-ai/langchain/tree/master/cookbook/baby_agi_with_agent.ipynb) | 将 BabyAGI 笔记本中的执行链替换为具有工具访问权限的代理，以获取更可靠的信息。
[camel_role_playing.ipynb](https://github.com/langchain-ai/langchain/tree/master/cookbook/camel_role_playing.ipynb) | 实现 CAMEL 框架，用于在大型语言模型中创建自主协作代理，通过角色扮演和入驻提示来指导聊天代理完成任务。
[causal_program_aided_language_...](https://github.com/langchain-ai/langchain/tree/master/cookbook/causal_program_aided_language_model.ipynb) | 实现因果程序辅助语言 (CPAL) 链，该链通过引入因果结构来改进程序辅助语言 (PAL)，以防止语言模型出现幻觉，尤其是在处理具有嵌套依赖关系的复杂叙事和数学问题时。
[code-analysis-deeplake.ipynb](https://github.com/langchain-ai/langchain/tree/master/cookbook/code-analysis-deeplake.ipynb) | 在 GPT 和 Activeloop 的 Deep Lake 的帮助下分析其自身的代码库。
[custom_agent_with_plugin_retri...](https://github.com/langchain-ai/langchain/tree/master/cookbook/custom_agent_with_plugin_retrieval.ipynb) | 构建一个可以与 AI 插件交互的自定义代理，通过检索工具并在 OpenAPI 端点周围创建自然语言包装器。
[custom_agent_with_plugin_retri...](https://github.com/langchain-ai/langchain/tree/master/cookbook/custom_agent_with_plugin_retrieval_using_plugnplai.ipynb) | 构建一个具有插件检索功能的自定义代理，利用 `plugnplai` 目录中的 AI 插件。
[deeplake_semantic_search_over_...](https://github.com/langchain-ai/langchain/tree/master/cookbook/deeplake_semantic_search_over_chat.ipynb) | 使用 Activeloop 的 Deep Lake 和 GPT4 对群聊进行语义搜索和问答。
[elasticsearch_db_qa.ipynb](https://github.com/langchain-ai/langchain/tree/master/cookbook/elasticsearch_db_qa.ipynb) | 使用自然语言与 Elasticsearch 分析数据库进行交互，并通过 Elasticsearch DSL API 构建搜索查询。
[extraction_openai_tools.ipynb](https://github.com/langchain-ai/langchain/tree/master/cookbook/extraction_openai_tools.ipynb) | 使用 OpenAI 工具进行结构化数据提取。
[forward_looking_retrieval_augm...](https://github.com/langchain-ai/langchain/tree/master/cookbook/forward_looking_retrieval_augmented_generation.ipynb) | 实现前瞻性主动检索增强生成 (FLARE) 方法，该方法可以生成问题的答案，识别不确定的标记，基于这些标记生成假设性问题，并检索相关文档以继续生成答案。
[generative_agents_interactive_...](https://github.com/langchain-ai/langchain/tree/master/cookbook/generative_agents_interactive_simulacra_of_human_behavior.ipynb) | 实现一个生成式代理，该代理基于一篇研究论文，使用由 LangChain 检索器支持的时间加权记忆对象来模拟人类行为。
[gymnasium_agent_simulation.ipynb](https://github.com/langchain-ai/langchain/tree/master/cookbook/gymnasium_agent_simulation.ipynb) | 在模拟环境（如 Gymnasium 的文本游戏）中创建简单的代理-环境交互循环。
[hugginggpt.ipynb](https://github.com/langchain-ai/langchain/tree/master/cookbook/hugginggpt.ipynb) | 实现 HuggingGPT，一个将 ChatGPT 等语言模型与 Hugging Face 连接起来的系统。
[hypothetical_document_embeddin...](https://github.com/langchain-ai/langchain/tree/master/cookbook/hypothetical_document_embeddings.ipynb) | 使用假设文档嵌入 (HyDE) 技术改进文档索引，该技术会生成并嵌入查询的假设性答案。
[learned_prompt_optimization.ipynb](https://github.com/langchain-ai/langchain/tree/master/cookbook/learned_prompt_optimization.ipynb) | 通过注入特定术语来自动增强语言模型提示，可以使用强化学习来实现，从而根据用户偏好个性化响应。
[llm_bash.ipynb](https://github.com/langchain-ai/langchain/tree/master/cookbook/llm_bash.ipynb) | 使用语言模型 (LLM) 和 bash 进程执行简单的文件系统命令。
[llm_checker.ipynb](https://github.com/langchain-ai/langchain/tree/master/cookbook/llm_checker.ipynb) | 使用 llmcheckerchain 函数创建自检链。
[llm_math.ipynb](https://github.com/langchain-ai/langchain/tree/master/cookbook/llm_math.ipynb) | 使用语言模型和 Python REPL 解决复杂的文字数学问题。
[llm_summarization_checker.ipynb](https://github.com/langchain-ai/langchain/tree/master/cookbook/llm_summarization_checker.ipynb) | 检查文本摘要的准确性，并可以选择多次运行检查器以获得更好的结果。
[llm_symbolic_math.ipynb](https://github.com/langchain-ai/langchain/tree/master/cookbook/llm_symbolic_math.ipynb) | 在 LLM（语言模型）和 sympy（一个用于符号数学的 Python 库）的帮助下解决代数方程。
[meta_prompt.ipynb](https://github.com/langchain-ai/langchain/tree/master/cookbook/meta_prompt.ipynb) | 实现元提示概念，这是一种构建能够反思自身性能并相应修改其指令的自改进代理的方法。
[multi_modal_output_agent.ipynb](https://github.com/langchain-ai/langchain/tree/master/cookbook/multi_modal_output_agent.ipynb) | 生成多模态输出，特别是图像和文本。
[multi_modal_RAG_vdms.ipynb](https://github.com/langchain-ai/langchain/tree/master/cookbook/multi_modal_RAG_vdms.ipynb) | 对包含文本和图像的文档执行检索增强生成 (RAG)，使用 unstructured 进行解析，Intel 的 Visual Data Management System (VDMS) 作为向量存储，并使用链。
[multi_player_dnd.ipynb](https://github.com/langchain-ai/langchain/tree/master/cookbook/multi_player_dnd.ipynb) | 模拟多人地下城与龙游戏，并使用自定义函数确定代理的发言时间表。
[multiagent_authoritarian.ipynb](https://github.com/langchain-ai/langchain/tree/master/cookbook/multiagent_authoritarian.ipynb) | 在模拟新闻网络的背景下，实现一个特权代理控制对话（包括决定谁发言和何时结束对话）的多代理模拟。
[multiagent_bidding.ipynb](https://github.com/langchain-ai/langchain/tree/master/cookbook/multiagent_bidding.ipynb) | 实现一个多代理模拟，其中代理竞标发言权，出价最高者下一个发言，通过虚构的总统辩论示例进行演示。
[myscale_vector_sql.ipynb](https://github.com/langchain-ai/langchain/tree/master/cookbook/myscale_vector_sql.ipynb) | 访问和交互 myscale 集成向量数据库，该数据库可以提高语言模型 (LLM) 应用程序的性能。
[openai_functions_retrieval_qa....](https://github.com/langchain-ai/langchain/tree/master/cookbook/openai_functions_retrieval_qa.ipynb) | 通过将 OpenAI 函数集成到检索管道中，来构建问答系统的响应输出结构。
[openai_v1_cookbook.ipynb](https://github.com/langchain-ai/langchain/tree/master/cookbook/openai_v1_cookbook.ipynb) | 探索与 OpenAI Python 库 V1 版本一起发布的新功能。
[petting_zoo.ipynb](https://github.com/langchain-ai/langchain/tree/master/cookbook/petting_zoo.ipynb) | 使用 petting zoo 库创建具有模拟环境的多代理模拟。
[plan_and_execute_agent.ipynb](https://github.com/langchain-ai/langchain/tree/master/cookbook/plan_and_execute_agent.ipynb) | 创建计划和执行代理，通过使用语言模型 (LLM) 进行任务规划和使用单独的代理执行任务来完成目标。
[press_releases.ipynb](https://github.com/langchain-ai/langchain/tree/master/cookbook/press_releases.ipynb) | 检索和查询由 [Kay.ai](https://kay.ai) 提供支持的公司新闻稿数据。
[program_aided_language_model.i...](https://github.com/langchain-ai/langchain/tree/master/cookbook/program_aided_language_model.ipynb) | 实现程序辅助语言模型，如提供的研究论文所述。
[qa_citations.ipynb](https://github.com/langchain-ai/langchain/tree/master/cookbook/qa_citations.ipynb) | 让模型引用其来源的不同方法。
[rag_upstage_document_parse_groundedness_check.ipynb](https://github.com/langchain-ai/langchain/tree/master/cookbook/rag_upstage_document_parse_groundedness_check.ipynb) | 使用 Upstage Document Parse 和 Groundedness Check 的端到端 RAG 示例。
[retrieval_in_sql.ipynb](https://github.com/langchain-ai/langchain/tree/master/cookbook/retrieval_in_sql.ipynb) | 使用 pgvector 在 PostgreSQL 数据库上执行检索增强生成 (RAG)。
[sales_agent_with_context.ipynb](https://github.com/langchain-ai/langchain/tree/master/cookbook/sales_agent_with_context.ipynb) | 实现一个上下文感知 AI 销售代理 SalesGPT，它可以进行自然的销售对话，与系统交互，并使用产品知识库来讨论公司的产品。
[self_query_hotel_search.ipynb](https://github.com/langchain-ai/langchain/tree/master/cookbook/self_query_hotel_search.ipynb) | 使用特定酒店推荐数据集构建具有自查询检索功能的酒店房间搜索功能。
[smart_llm.ipynb](https://github.com/langchain-ai/langchain/tree/master/cookbook/smart_llm.ipynb) | 实现 SmartLLMChain，一个自批判链，它生成多个输出提案，对其进行批判以找到最佳提案，然后对其进行改进以产生最终输出。
[tree_of_thought.ipynb](https://github.com/langchain-ai/langchain/tree/master/cookbook/tree_of_thought.ipynb) | 使用思维树技术查询大型语言模型。
[twitter-the-algorithm-analysis...](https://github.com/langchain-ai/langchain/tree/master/cookbook/twitter-the-algorithm-analysis-deeplake.ipynb) | 在 GPT4 和 Activeloop 的 Deep Lake 的帮助下分析 Twitter 算法的源代码。
[two_agent_debate_tools.ipynb](https://github.com/langchain-ai/langchain/tree/master/cookbook/two_agent_debate_tools.ipynb) | 模拟多代理对话，代理可以利用各种工具。
[two_player_dnd.ipynb](https://github.com/langchain-ai/langchain/tree/master/cookbook/two_player_dnd.ipynb) | 模拟一个双人地下城与龙游戏，其中使用对话模拟器类来协调主角和地下城主之间的对话。
[wikibase_agent.ipynb](https://github.com/langchain-ai/langchain/tree/master/cookbook/wikibase_agent.ipynb) | 创建一个利用 SPARQL 生成的简单 Wikibase 代理，并在 http://wikidata.org 上进行测试。
[oracleai_demo.ipynb](https://github.com/langchain-ai/langchain/tree/master/cookbook/oracleai_demo.ipynb) | 本指南概述了如何将 Oracle AI Vector Search 与 Langchain 结合用于端到端 RAG 管道，并提供了分步示例。该过程包括使用 OracleDocLoader 从各种源加载文档，在数据库内或数据库外使用 OracleSummary 对其进行摘要，以及通过 OracleEmbeddings 类似地生成嵌入。它还涵盖了使用 OracleTextSplitter 的高级 Oracle 功能根据特定要求对文档进行分块，最后，将这些文档存储和索引到向量存储中，以便使用 OracleVS 进行查询。
[rag-locally-on-intel-cpu.ipynb](https://github.com/langchain-ai/langchain/tree/master/cookbook/rag-locally-on-intel-cpu.ipynb) | 在本地下载的开源模型上执行检索增强生成 (RAG)，使用 Langchain 和开源工具，并在 Intel Xeon CPU 上执行。我们展示了一个示例，说明如何将 RAG 应用于 Llama 2 模型，并使其能够回答与 Intel 2024 年第一季度财报发布相关的问题。
[visual_RAG_vdms.ipynb](https://github.com/langchain-ai/langchain/tree/master/cookbook/visual_RAG_vdms.ipynb) | 使用视频和开源模型生成的场景描述执行视觉检索增强生成 (RAG)。
[contextual_rag.ipynb](https://github.com/langchain-ai/langchain/tree/master/cookbook/contextual_rag.ipynb) | 在嵌入之前，将特定于块的解释性上下文添加到每个块的前面，以执行上下文检索增强生成 (RAG)。
[rag-agents-locally-on-intel-cpu.ipynb](https://github.com/langchain-ai/langchain/tree/master/cookbook/local_rag_agents_intel_cpu.ipynb) | 在本地使用开源模型构建一个 RAG 代理，该代理通过两个路径之一来路由问题以查找答案。代理根据从向量数据库检索到的文档或从网络搜索检索到的文档生成答案。如果向量数据库缺乏相关信息，代理将选择网络搜索。在 Intel Xeon CPU 上本地使用开源模型进行 LLM 和嵌入，以执行此管道。