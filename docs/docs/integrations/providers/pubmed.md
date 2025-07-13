# PubMed

# PubMed

>[PubMed®](https://pubmed.ncbi.nlm.nih.gov/) 由 `The National Center for Biotechnology Information, National Library of Medicine` 提供，
> 包含来自 `MEDLINE`、生命科学期刊和在线书籍的超过 3500 万条生物医学文献引用。
> 引用可能包含指向 `PubMed Central` 和出版商网站全文内容的链接。

## 设置
您需要安装一个 Python 包。

```bash
pip install xmltodict
```

### Retriever

请参阅[使用示例](/docs/integrations/retrievers/pubmed)。

```python
from langchain.retrievers import PubMedRetriever
```

### Document Loader

请参阅[使用示例](/docs/integrations/document_loaders/pubmed)。

```python
from langchain_community.document_loaders import PubMedLoader
```