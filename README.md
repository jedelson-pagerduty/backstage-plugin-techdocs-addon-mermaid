# backstage-plugin-techdocs-addon-mermaid

The `backstage-plugin-techdocs-addon-mermaid` allows rendering of [Mermaid](https://mermaid-js.github.io/) diagrams
within [Backstage TechDocs](https://backstage.io/docs/features/techdocs/techdocs-overview)

This plugin is a [Backstage TechDocs Addon](https://backstage.io/docs/features/techdocs/addons), which requires
Backstage v1.2+

## Getting started

1. Follow [the official documentation for TechDocs Addons](https://backstage.io/docs/features/techdocs/addons#installing-and-using-addons) to enable addons for techdocs.
2. Install this plugin in your backstage app. Run the following command from the root of your backstage installation:
   ```
   yarn add --cwd packages/app backstage-plugin-techdocs-addon-mermaid
   ```
3. Enable the addon in your application
   ```typescript jsx
   // packages/app/src/App.tsx
   import { Mermaid } from 'backstage-plugin-techdocs-addon-mermaid';
 
   // ...
   {techDocsPage}
   <TechDocsAddons>
     {/*...*/}
     <Mermaid config={{ theme: 'forest', themeVariables: { lineColor: '#000000' } }} />
   </TechDocsAddons>
    ```

## Use Mermaid in your TechDocs

~~~markdown
# Mermaid section

Here is a mermaid graph!

```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```
~~~
