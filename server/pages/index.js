(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 3159:
/***/ ((module) => {

// Exports
module.exports = {
	"card": "Card_card__yiMvd",
	"id": "Card_id__emQkH",
	"title": "Card_title__EMTxB",
	"btn": "Card_btn__AZ1G0"
};


/***/ }),

/***/ 8710:
/***/ ((module) => {

// Exports
module.exports = {
	"title_container": "Home_title_container__bqMAs",
	"title": "Home_title__FX7xZ",
	"pokemons_container": "Home_pokemons_container__1AyDo"
};


/***/ }),

/***/ 6369:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/styles/Home.module.css
var Home_module = __webpack_require__(8710);
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/styles/Card.module.css
var Card_module = __webpack_require__(3159);
var Card_module_default = /*#__PURE__*/__webpack_require__.n(Card_module);
;// CONCATENATED MODULE: ./src/components/Card.jsx




const Card = ({ pokemon  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Card_module_default()).card,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`,
                width: "120",
                height: "120",
                alt: pokemon.name
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                className: (Card_module_default()).id,
                children: [
                    "#",
                    pokemon.id
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: (Card_module_default()).title,
                children: pokemon.name
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                className: (Card_module_default()).btn,
                href: `/pokemon/${pokemon.id}`,
                children: "Detalhes"
            })
        ]
    });
};
/* harmony default export */ const components_Card = (Card);

;// CONCATENATED MODULE: ./src/pages/index.jsx




const getStaticProps = async ()=>{
    const maxPokemons = 251;
    const api = "https://pokeapi.co/api/v2/pokemon/";
    const res = await fetch(`${api}/?limit=${maxPokemons}`);
    const data = await res.json();
    data.results.forEach((item, index)=>{
        item.id = index + 1;
    });
    return {
        props: {
            pokemons: data.results
        }
    };
};
function Home({ pokemons  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Home_module_default()).title_container,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: (Home_module_default()).title,
                        children: "Pokedex"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: "/images/pokeball.png",
                        width: "50",
                        height: "50",
                        alt: "pokeball"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Home_module_default()).pokemons_container,
                children: pokemons.map((pokemon)=>/*#__PURE__*/ jsx_runtime_.jsx(components_Card, {
                        pokemon: pokemon
                    }, pokemon.id))
            })
        ]
    });
}


/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [636,675,664], () => (__webpack_exec__(6369)));
module.exports = __webpack_exports__;

})();