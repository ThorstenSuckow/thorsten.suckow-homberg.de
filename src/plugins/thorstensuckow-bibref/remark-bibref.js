import {visit} from 'unist-util-visit';
import {parse} from 'acorn';

const plugin = (options) => {

    const transformer = async (tree, file) => {

        const bibRefs = new Set();

        visit(tree, (node) => {
            if (node.name === 'LocRef' || node.name === "BibRef") {
                const nameAttr = node.attributes.find(attr => attr.name === 'name');
                if (nameAttr?.value) {
                    bibRefs.add(nameAttr.value);
                }
            }
        });

        if (bibRefs.size > 0) {

            // attribut names like {"..."} (curly braces) might be problematic,
            // if required, add parser for those
            const code = `export const bibRefs = ${JSON.stringify([...bibRefs], null, 2)}`;

            tree.children.unshift({
                type: 'mdxjsEsm',
                value: code,
                data: {
                    estree: parse(code, {ecmaVersion: 2020, sourceType: 'module'}),
                },
            });
        }
    };

    return transformer;

};

export default plugin;