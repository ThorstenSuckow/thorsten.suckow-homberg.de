(self.webpackChunkthorsten_suckow_homberg_de=self.webpackChunkthorsten_suckow_homberg_de||[]).push([[4767],{3905:(e,t,a)=>{"use strict";a.d(t,{Zo:()=>c,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(a),u=r,d=m["".concat(l,".").concat(u)]||m[u]||h[u]||o;return a?n.createElement(d,s(s({ref:t},c),{},{components:a})):n.createElement(d,s({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2490:(e,t,a)=>{"use strict";a.d(t,{$o:()=>c,_b:()=>h,cx:()=>p,e2:()=>m,in:()=>d,t2:()=>u});var n=a(7294),r=a(5075),o=a(9943),s=a(814),i=a(4098),l=a.n(i);function p(e){let{width:t,children:a,title:o,figure:s,modeAware:i}=e;return n.createElement("div",{style:{width:t,textAlign:"center",margin:20}},n.createElement("div",{className:!1!==i?"umlImg":""},a),n.createElement("div",{style:{textAlign:"center"}},n.createElement("sup",null,n.createElement("b",null,r.Z.isString(s)?s:`Figure ${s??1}`)," ",n.createElement("span",{dangerouslySetInnerHTML:{__html:o}}))))}function c(e){let{id:t,source:a,title:r}=e;return n.createElement(p,{modeAware:!1,title:r,figure:`Source ${a}`},n.createElement(o.Z,{id:t}))}function m(e){let{url:t,figure:a,title:r}=e;return n.createElement(p,{modeAware:!1,figure:a,title:r},n.createElement("img",{alt:"{title}",src:t}))}function h(e){let{children:t,figure:a,title:r}=e;return n.createElement(p,{modeAware:!0,figure:a,title:r,children:t})}function u(e){let{when:t,where:a}=e;const[r,o]=a;return n.createElement("div",null,"This article was originally published in ",t," at ",n.createElement("a",{target:"_blank",href:o},r),". Some formatting might have get lost during the migration to this site: If you think you spotted an issue caused by malformed formatting, please ",n.createElement("a",{href:"mailto:thorsten@suckow-homberg.de"},"let me know"),".")}function d(e){let{url:t}=e;const[a,r]=n.useState("");return l()(t).then((e=>{e.text().then((e=>r(e)))})),n.createElement(s.Z,{language:"php"},a)}},8893:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var n=a(7462),r=(a(7294),a(3905)),o=a(9943),s=a(2490);const i={title:"Using PHP enums as method calls"},l=void 0,p={unversionedId:"articles/using-php-enums-as-method-calls/index",id:"articles/using-php-enums-as-method-calls/index",title:"Using PHP enums as method calls",description:"Dynamically mapping method calls to existing typed values.",source:"@site/docs/articles/using-php-enums-as-method-calls/index.mdx",sourceDirName:"articles/using-php-enums-as-method-calls",slug:"/articles/using-php-enums-as-method-calls/",permalink:"/docs/articles/using-php-enums-as-method-calls/",draft:!1,editUrl:"https://github.com/thorstensuckow/thorsten.suckow-homberg.de/tree/main/docs/articles/using-php-enums-as-method-calls/index.mdx",tags:[],version:"current",lastUpdatedBy:"Thorsten Suckow-Homberg",lastUpdatedAt:1682282648,formattedLastUpdatedAt:"Apr 23, 2023",frontMatter:{title:"Using PHP enums as method calls"},sidebar:"docs",previous:{title:"Ext JS - Beyond ES5",permalink:"/docs/articles/sencha-extjs-beyond-es5/"},next:{title:"Downloadable Assets with GitHub Actions",permalink:"/docs/articles/downloadable-assets-with-github-actions/"}},c={},m=[{value:"Motivation",id:"motivation",level:2},{value:"What are filters, anyway? (Spoiler: Expressions, of course)",id:"what-are-filters-anyway-spoiler-expressions-of-course",level:2},{value:"The OOP modelling approach",id:"the-oop-modelling-approach",level:2},{value:"Silence is golden: Refactoring into a factory",id:"silence-is-golden-refactoring-into-a-factory",level:3},{value:"Using enums for method calls",id:"using-enums-for-method-calls",level:2},{value:"Stargazing __callStatic()",id:"stargazing-__callstatic",level:3},{value:"Dynamically resolving members with constant()",id:"dynamically-resolving-members-with-constant",level:3},{value:"Final implementation",id:"final-implementation",level:2}],h={toc:m},u="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Dynamically mapping method calls to existing typed values.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)(s.t2,{when:"October 2022",where:["medium.com","https://medium.com/@thorstensuckow/using-php-enums-as-method-calls-2d6b95fa8347"],mdxType:"MigrationNotice"})),(0,r.kt)("h2",{id:"motivation"},"Motivation"),(0,r.kt)("p",null,"Large parts of the ",(0,r.kt)("a",{parentName:"p",href:"https://conjoon.org"},"conjoon")," backend are currently being reworked to meet compliance with the ",(0,r.kt)("a",{parentName:"p",href:"https://jsonapi.org/format/"},"**JSON:API"),"**. This is so the webmail\u2019s RESTful API provides consistency between requests and responses across various endpoints and provides a familiar environment for developers already using the JSON:API (or similar ",(0,r.kt)("a",{parentName:"p",href:"https://roy.gbiv.com/untangled/2008/rest-apis-must-be-hypertext-driven"},"HATEOAS "),"driven APIs) with other projects."),(0,r.kt)("p",null,"One challenge in adopting parts of the specification was not only the exclusion of fields (which ultimately culminated in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ThorstenSuckow/relfield"},"RFC for the ",(0,r.kt)("strong",{parentName:"a"},"relfield"),"-extension")," ), but also in finding a way to pass meaningful filter-configurations from the client to the server."),(0,r.kt)("p",null,"Right now, the client can pass filter options in query parameters. Those query parameters need to be validated and get translated into their OOP representation, so that string-representations of the ",(0,r.kt)("strong",{parentName:"p"},"Filter"),"-objects can be passed to connected IMAP servers in a format ",(0,r.kt)("a",{parentName:"p",href:"https://www.rfc-editor.org/rfc/rfc3501#page-49"},"the protocol understands"),"."),(0,r.kt)("h2",{id:"what-are-filters-anyway-spoiler-expressions-of-course"},"What are filters, anyway? (Spoiler: Expressions, of course)"),(0,r.kt)("p",null,"A filter (or ",(0,r.kt)("em",{parentName:"p"},"search query"),") consists of ",(0,r.kt)("strong",{parentName:"p"},"logical"),", ",(0,r.kt)("strong",{parentName:"p"},"functional "),"and ",(0,r.kt)("strong",{parentName:"p"},"relational expressions"),", and an expression in turn has ",(0,r.kt)("strong",{parentName:"p"},"operands")," and ",(0,r.kt)("strong",{parentName:"p"},"operators ("),"hint: ****an operator can also be an expressions)."),(0,r.kt)("p",null,"The following represents a request for all emails that have a date set to the ",(0,r.kt)("em",{parentName:"p"},"9th of October 2022")," or before (missing percent-encoded characters in favor of readability):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'    GET /MessageItems?filter={"<":{"date":1665375431}} HTTP/1.1\n')),(0,r.kt)("p",null,"The above example has a ",(0,r.kt)("em",{parentName:"p"},"relational "),"operator (<, ",(0,r.kt)("em",{parentName:"p"},"less than"),"), and has two ",(0,r.kt)("em",{parentName:"p"},"operands"),": A name representing the name of the field the filter applies to (date), and an integer value representing the timestamp for comparison (1665375431)."),(0,r.kt)("h2",{id:"the-oop-modelling-approach"},"The OOP modelling approach"),(0,r.kt)("p",null,"Mathematical expressions are fairly easy to model. Their symbols can be abstracted into the following ",(0,r.kt)("strong",{parentName:"p"},"UML "),"diagram:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn-images-1.medium.com/max/2000/1*dZJ6ccRLqaoDZC3Up_hPcA.png",alt:"A simplified UML diagram for an expression. Note how an expression is also an operand."})),(0,r.kt)("p",null,"An expression can be a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"a ",(0,r.kt)("strong",{parentName:"p"},"Relational Expression")," providing relational operators: <, >, <=, >=, ==, !=")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"a ",(0,r.kt)("strong",{parentName:"p"},"Logical Expression")," providing logical operators: &&, ||, !")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"a ",(0,r.kt)("strong",{parentName:"p"},"Functional Expression")," providing arbitrary function names, such as IN"))),(0,r.kt)("p",null,"Furthermore, each expression is associated with one or more ",(0,r.kt)("strong",{parentName:"p"},"Operands"),": An expression using a logical operator representing a negation (!) has only one operand, while a logical ",(0,r.kt)("em",{parentName:"p"},"disjunction "),"or ",(0,r.kt)("em",{parentName:"p"},"conjunction "),"must have two or more operands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    ! 5 // logical negation operator has one operand\n\n    // a logical conjunction can have an arbitrary\n    // number of operands:\n    true && false && true\n\n    // logical disjunction with two operands\n    true || false\n")),(0,r.kt)("p",null,"Further implementation details of how ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/conjoon/php-lib-conjoon"},"php-lib-conjoon")," models Expressions would go beyond the scope of this article. We\u2019ll focus on how to use them in the code. Here\u2019s an example for an expression that represents date < 1665375431. Note how the order of parameters for the constructor is in accordance with the ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Polish_notation"},"**Polish Notation"),"**, starting with the operator, then followed by the operands (< date 1665375431):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'    $expression = new RelationalExpression(\n        RelationalExpression::LESS_THAN,\n        new VariableName("date"),\n        new Value(1665375431)\n    );\n    $expression->toString() // produces "date < 1665375431"\n')),(0,r.kt)("h3",{id:"silence-is-golden-refactoring-into-a-factory"},"Silence is golden: Refactoring into a factory"),(0,r.kt)("p",null,"The above example is \u2014 while still readable and maintainable \u2014 too verbose. Code readability is king (see also my article about ",(0,r.kt)("a",{parentName:"p",href:"https://medium.com/@thorstensuckow/a-fluent-interface-for-javascript-promises-372ffc40e051"},"fluent interfaces"),") so let\u2019s pour some syntactical sugar into the code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'    $expression = RelationalExpression::lessThan(\n        VariableName::make("date"),\n        Value::make(1665375431)\n    );\n')),(0,r.kt)("p",null,"This would allow us to omit calls to the constructor of the ",(0,r.kt)("strong",{parentName:"p"},"RelationalExpression"),", while still getting an expression as a return value from the factory method ."),(0,r.kt)("p",null,"However, this would make it also necessary to implement static methods matching available operators used by the Expression-specific we\u2019re currently using. Given six relational operators >, <, >=, <=,=, != , we\u2019d have to add six factory methods to our class (while prototyping, without refactoring and code optimizations):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"    class RelationalExpression extends Expression {\n\n        /**\n         * Constructor.\n         */\n        public function __construct(\n            RelationalOperator $operator,\n            OperandList $operands\n        ) {\n\n           // ...\n        }\n\n\n        /**\n         * Builds a RelationalExpression for the\n         * RelationalOperator::LESS_THAN\n         *\n         * @param Operand $lft\n         * @param Operand $rt\n         *\n         * @return RelationalExpression\n         */\n        public static function lessThan(\n            Operand $lft,\n            Operand $rt\n        ): RelationalExpression\n        {\n           $operands = OperandList::make($lft, $rt);\n           return new self(RelationalOperator::LESS_THAN, $operands);\n        }\n\n\n        // ... additional implementations for the remaining operators\n    }\n")),(0,r.kt)("p",null,"However, adding a new operator would require us to also add another function to the ",(0,r.kt)("strong",{parentName:"p"},"RelationalExpression")," \u2014dependencies pop up where they shouldn\u2019t and the code base grows unnecessarily, containing redundant code."),(0,r.kt)("h2",{id:"using-enums-for-method-calls"},"Using enums for method calls"),(0,r.kt)("p",null,"Since we already have ",(0,r.kt)("strong",{parentName:"p"},"enums")," representing Operators, we\u2019re looking for a way to reuse them \u2014 not only as a closed set for typed values, but also for method calls. Here\u2019s how the ",(0,r.kt)("strong",{parentName:"p"},"enum "),"definition for ",(0,r.kt)("strong",{parentName:"p"},"RelationalOperator "),"looks like (similar implementations are available for ",(0,r.kt)("strong",{parentName:"p"},"LogicalOperator "),"and ",(0,r.kt)("strong",{parentName:"p"},"FunctionalOperator)"),":"),(0,r.kt)(s.cx,{modeAware:!1,figure:"Source 1",mdxType:"Embed"},(0,r.kt)(o.Z,{id:"a52254400a069aeb3dba466af316c1a6",mdxType:"Gist"})),(0,r.kt)("p",null,"\u2026 and here\u2019s what we want to achieve since we already have an existing list of operators given the ",(0,r.kt)("strong",{parentName:"p"},"enum"),"-definition:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'    RelationalExpression::LESS_THAN(\n        VariableName::make("date"),\n        Value::make(1665375431)\n    );\n')),(0,r.kt)("p",null,"Note how we statically call the ",(0,r.kt)("strong",{parentName:"p"},"enum"),"\u2019s name on the ",(0,r.kt)("strong",{parentName:"p"},"Expression"),"(!) class \u2014 not the operator enum itself. It\u2019s the only line of code where the operator is mentioned. We know from the UML diagram above that an expression has an operator \u2014 we should be able to implement some kind of process looking up the association (our expression knows at least what type of operator it is ",(0,r.kt)("em",{parentName:"p"},"associated "),"with). The ",(0,r.kt)("strong",{parentName:"p"},"Expression"),"\u2019s implementation needs to check if the ",(0,r.kt)("strong",{parentName:"p"},"enum "),"exists, and if that is the case, build the expression. Here\u2019s the ",(0,r.kt)("a",{parentName:"p",href:"https://phpunit.de/"},"PHPUnit")," test case for this implementation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'    $lft = VariableName::make("date");\n    $rt  = Value::make(1665375431);\n\n    $expression = RelationalExpression::LESS_THAN($lft, $rt);\n\n    $this->assertInstanceOf(RelationalExpression::class, $expression);\n    $this->assertSame(\n        RelationalOperator::LESS_THAN,\n        $expression->getOperator()\n    );\n    $this->assertSame($lft, $expression->getOperands()[0]);\n    $this->assertSame($rt, $expression->getOperands()[1]);\n')),(0,r.kt)("p",null,"Furthermore, we expect calls to non-existing operators to throw exceptions of the type BadMethodCallException:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"    $this->expectException(BadMethodCallException::class);\n    RelationalExpression::MISSING();\n")),(0,r.kt)("h3",{id:"stargazing-__callstatic"},"Stargazing __callStatic()"),(0,r.kt)("p",null,"PHP provides ",(0,r.kt)("a",{parentName:"p",href:"https://www.php.net/manual/en/language.oop5.magic.php"},"magic methods")," that allow for intercepting calls to methods or members which are not explicitly defined in a target-class or -object, and then invoke specific logic if available and applicable. One example for a magic method would be ",(0,r.kt)("a",{parentName:"p",href:"https://www.php.net/manual/en/language.oop5.overloading.php#object.call"},"__call()")," \u2014 it is often used with DTOs where a large number of properties would require a lot of effort for writing matching ",(0,r.kt)("em",{parentName:"p"},"getters "),"and ",(0,r.kt)("em",{parentName:"p"},"setters"),". It\u2019s lesser known (righteous because: testability of static methods ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sebastianbergmann/phpunit-documentation/issues/77"},"is lacking"),") pendant for calls for static methods is ",(0,r.kt)("a",{parentName:"p",href:"https://www.php.net/manual/en/language.oop5.overloading.php#object.callstatic"},"__callStatic()"),"."),(0,r.kt)("p",null,"Since we want to use a ",(0,r.kt)("a",{parentName:"p",href:"https://medium.com/javarevisited/static-factory-methods-an-alternative-to-public-constructors-73cbe8b9fda"},"static factory method")," in our ",(0,r.kt)("strong",{parentName:"p"},"Expression-specific "),"(e.g. ",(0,r.kt)("strong",{parentName:"p"},"RelationalExpression"),")** ",(0,r.kt)("strong",{parentName:"p"},"target class, let\u2019s see how we can map calls to all of the existing "),"RelationalOperator**s with a single method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'    public static function __callStatic(\n        string $methodName,\n        array $arguments\n    ) {\n\n        $operator = null;\n\n        switch ($methodName) {\n           case "LESS_THAN":\n               $operator = RelationalOperator::LESS_THAN;\n           break;\n\n           case "GREATER_THAN":\n               $operator = RelationalOperator::LESS_THAN;\n           break;\n\n           case "LESS_THAN_OR_EQUAL":\n               $operator = RelationalOperator::LESS_THAN_OR_EQUAL;\n           break;\n\n           case "GREATER_THAN_OR_EQUAL":\n               $operator = RelationalOperator::GREATER_THAN_OR_EQUAL;\n           break;\n\n           case "IS":\n               $operator = RelationalOperator::IS;\n           break;\n\n           case "IS_NOT":\n               $operator = RelationalOperator::IS_NOT;\n           break;\n       }\n\n       if (!$operator) {\n           throw new BadMethodCallException(\n               "{$methodName} not found in RelationalExpression"\n\n           );\n      }\n\n      return new self($operator, OperandList::*make*(...$arguments));\n\n    }\n')),(0,r.kt)("p",null,"The method signature (including the parameter list) for __callStatic() should be self explanatory. We are actively mapping the ",(0,r.kt)("em",{parentName:"p"},"name")," of the method that is statically called on the ",(0,r.kt)("strong",{parentName:"p"},"RelationalExpression")," with the list of existing ",(0,r.kt)("strong",{parentName:"p"},"RelationalOperators")," in the ",(0,r.kt)("em",{parentName:"p"},"switch "),"statement."),(0,r.kt)("p",null,"While we have code in one function here (and therefor reduce code complexity), adding operators to the ",(0,r.kt)("strong",{parentName:"p"},"RelationalOperators"),"-enum would still mean that we\u2019d have to adjust the ",(0,r.kt)("em",{parentName:"p"},"switch "),"statement \u2014 we\u2019re still maintaining two files for one small change. Let\u2019s finalize the implementation with the help of constant()."),(0,r.kt)("h3",{id:"dynamically-resolving-members-with-constant"},"Dynamically resolving members with constant()"),(0,r.kt)("p",null,"Our current implementation already fulfills most of the requirements, yet fails with dynamically resolving the typed value represented by the called method. Let\u2019s remove the problematic code and revert to a basic function template which we will adjust shortly:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"    public static function __callStatic(\n        string $method,\n        array $arguments\n    )\n    {\n        $method = strtoupper($method);\n\n        // ... resolve $method to $operator\n\n        return new static(\n            $operator,\n            OperandList::make(...$arguments)\n        );\n    }\n")),(0,r.kt)("p",null,"The goal is to resolve $method to an existing Operator represented by the available ",(0,r.kt)("strong",{parentName:"p"},"RelationalOperator"),". We already know that $method is (optimistically) one of the values defined within the associated ",(0,r.kt)("strong",{parentName:"p"},"enum"),". However, it\u2019s of the type ",(0,r.kt)("em",{parentName:"p"},"string"),", and we have to look up if this string represents an enum value. Here\u2019s all the information we have:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"RelationalOperator::class \u2014 the class name of ",(0,r.kt)("strong",{parentName:"p"},"RelationalOperator")," as the ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Fully_qualified_name"},"fqn"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"$method \u2014 the name of the static method being called on ",(0,r.kt)("strong",{parentName:"p"},"RelationalExpression"),"; it\u2019s intercepted by __callStatic() and its value has to be mapped to an enum-value in ",(0,r.kt)("strong",{parentName:"p"},"RelationalOperator")))),(0,r.kt)("p",null,"One approach would be to to use ",(0,r.kt)("em",{parentName:"p"},"string concatenation")," and hope for a value that resolves to an existing enum value:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'    $operator = RelationalOperator::class . "::$method";\n\n    gettype($operator); // "string"\n    operator instanceof RelationalOperator; // false\n')),(0,r.kt)("p",null,"While this does not throw an error, $operator is in it\u2019s current form not usable: The value is a string in the form of fqn::enum_value, e.g. Statement\\Expression\\RelationalOperator::LESS_THAN . However, with the help of a specific function, we can produce the result we\u2019re looking for."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"}," ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("em",{parentName:"em"},"constant()")," is useful if you need to retrieve the value of a constant, but do not know its name. I.e. it is stored in a variable or returned by a function. (",(0,r.kt)("a",{parentName:"em",href:"https://www.php.net/manual/en/function.constant.php"},"php.net"),")"))),(0,r.kt)("p",null,"We know that the string available with $operator holds the ",(0,r.kt)("em",{parentName:"p"},"fqn "),"of an existing ",(0,r.kt)("em",{parentName:"p"},"typed value"),"; we just need to make use of PHP\u2019s ",(0,r.kt)("a",{parentName:"p",href:"https://www.php.net/manual/en/function.constant.php"},"constant()")," to be able to access the enum value this string represents."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"}," ",(0,r.kt)("em",{parentName:"p"},"Because cases are represented as constants on the enum itself, they may be used as static values in most constant expressions: property defaults, static variable defaults, parameter defaults, global and class constant values. ",(0,r.kt)("a",{parentName:"em",href:"https://wiki.php.net/rfc/enumerations"},"(enum RFC)")))),(0,r.kt)("p",null,"We just have to pass the value of the right-hand operand as the argument to constant() , then assign its return value to the left-hand operand:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'    $operator = constant(RelationalOperator::class . "::$method");\n\n    gettype($operator); // "object"\n    operator instanceof RelationalOperator; // true\n')),(0,r.kt)("p",null,"Here\u2019s the final, working implementation for the __callStatic()-method. It includes re-throwing any occurring ",(0,r.kt)("strong",{parentName:"p"},"Error "),"as a ",(0,r.kt)("strong",{parentName:"p"},"BadMethodCallException"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'    public static function __callStatic(\n        string $method,\n        array $arguments\n    )\n    {\n        $method = strtoupper($method);\n\n        $operator = self::*getOperatorClass*() . "::$method";\n\n        try {\n            $operator = constant(\n                RelationalOperator::class . "::$method"\n            );\n        } catch (Error $error) {\n            throw new BadMethodCallException(\n                "{$method} does not exist: " . $error->getMessage()\n            );\n        }\n\n        return new self(\n            $operator,\n            OperandList::*make*(...$arguments)\n        );\n    }\n')),(0,r.kt)("h2",{id:"final-implementation"},"Final implementation"),(0,r.kt)("p",null,"Since the functionality is also used with ",(0,r.kt)("strong",{parentName:"p"},"LogicalExpression "),"and ",(0,r.kt)("strong",{parentName:"p"},"FunctionalExpression"),", the method above was refactored into a ",(0,r.kt)("a",{parentName:"p",href:"https://www.php.net/manual/en/language.oop5.traits.php"},"trait"),". Traits also allow for defining abstract methods so there\u2019s a contract added to make sure implementing classes provide information about the ",(0,r.kt)("strong",{parentName:"p"},"Operator"),"\u2019s type."),(0,r.kt)(s.cx,{modeAware:!1,figure:"Source 2",mdxType:"Embed"},(0,r.kt)(o.Z,{id:"65396b1f1912dac56a4c705395401f85",mdxType:"Gist"})),(0,r.kt)("p",null,"Note:"),(0,r.kt)("p",null,"In its current form, the functionality could also be implemented in the ",(0,r.kt)("strong",{parentName:"p"},"Expression"),"-class. I would not treat this kind of functionality as existential for the ",(0,r.kt)("strong",{parentName:"p"},"Expression"),"-type, this is why it\u2019s decoupled into a trait."))}d.isMDXComponent=!0},2480:()=>{}}]);