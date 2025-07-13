# Airtable

> [Airtable](https://en.wikipedia.org/wiki/Airtable) 是一款云协作服务。
`Airtable` 是一个电子表格-数据库混合体，具有数据库的功能，但应用于电子表格。
> Airtable 表中的字段类似于电子表格中的单元格，但具有“复选框”、“电话号码”和“下拉列表”等类型，并且可以引用文件附件（如图像）。

> 用户可以创建数据库、设置列类型、添加记录、链接表、协作、排序记录以及将视图发布到外部网站。

## 安装与设置

```bash
pip install pyairtable
```

* 获取您的 [API 密钥](https://support.airtable.com/docs/creating-and-using-api-keys-and-access-tokens)。
* 获取 [base ID](https://airtable.com/developers/web/api/introduction)。
* 从表格 URL 获取 [table ID](https://www.highviewapps.com/kb/where-can-i-find-the-airtable-base-id-and-table-id/#:~:text=Both%20the%20Airtable%20Base%20ID,URL%20that%20begins%20with%20tbl)。

## Document Loader


```python
from langchain_community.document_loaders import AirtableLoader
```

请参阅 [示例](/docs/integrations/document_loaders/airtable)。