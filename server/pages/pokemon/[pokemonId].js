(() => {
var exports = {};
exports.id = 643;
exports.ids = [643];
exports.modules = {

/***/ 9260:
/***/ ((module) => {

// Exports
module.exports = {
	"pokemon_container": "Pokemon_pokemon_container__p3VmR",
	"title": "Pokemon_title__Qg0uU",
	"types_container": "Pokemon_types_container__XtujK",
	"type": "Pokemon_type__KJ6Y6",
	"type_normal": "Pokemon_type_normal__oUU2k",
	"type_fire": "Pokemon_type_fire__syJAf",
	"type_water": "Pokemon_type_water__Rm2nJ",
	"type_eletric": "Pokemon_type_eletric__4xTVY",
	"type_grass": "Pokemon_type_grass__K8sGq",
	"type_ice": "Pokemon_type_ice__lIjsv",
	"type_fighting": "Pokemon_type_fighting__QObL_",
	"type_poison": "Pokemon_type_poison__lPLIg",
	"type_ground": "Pokemon_type_ground__9IGCK",
	"type_flying": "Pokemon_type_flying__NTl3S",
	"type_psychic": "Pokemon_type_psychic__Qwk3M",
	"type_bug": "Pokemon_type_bug__Yy6FH",
	"type_rock": "Pokemon_type_rock__5jZj9",
	"type_ghost": "Pokemon_type_ghost___tmNV",
	"type_dragon": "Pokemon_type_dragon__6qAQl",
	"type_dark": "Pokemon_type_dark__HG5EO",
	"type_steel": "Pokemon_type_steel__coHzg",
	"type_fairy": "Pokemon_type_fairy__yLLa2",
	"data_container": "Pokemon_data_container___038t",
	"data_height": "Pokemon_data_height__s3edT"
};


/***/ }),

/***/ 9116:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Pokemon_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9260);
/* harmony import */ var _styles_Pokemon_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Pokemon_module_css__WEBPACK_IMPORTED_MODULE_2__);



const getStaticPaths = async ()=>{
    const maxPokemons = 251;
    const api = "https://pokeapi.co/api/v2/pokemon/";
    const res = await fetch(`${api}/?limit=${maxPokemons}`);
    const data = await res.json();
    const paths = data.results.map((_item, index)=>{
        return {
            params: {
                pokemonId: (index + 1).toString()
            }
        };
    });
    return {
        paths,
        fallback: false
    };
};
const getStaticProps = async (context)=>{
    const id = context.params.pokemonId;
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();
    return {
        props: {
            pokemon: data
        }
    };
};
const PokemonId = ({ pokemon  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_Pokemon_module_css__WEBPACK_IMPORTED_MODULE_2___default().pokemon_container),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: (_styles_Pokemon_module_css__WEBPACK_IMPORTED_MODULE_2___default().title),
                children: pokemon.name
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                src: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`,
                width: "200",
                height: "200",
                alt: pokemon.name
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        children: "N\xfamero:"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        children: [
                            "#",
                            pokemon.id
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        children: "Tipo:"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_Pokemon_module_css__WEBPACK_IMPORTED_MODULE_2___default().types_container),
                        children: pokemon.types.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: `${(_styles_Pokemon_module_css__WEBPACK_IMPORTED_MODULE_2___default().type)} ${(_styles_Pokemon_module_css__WEBPACK_IMPORTED_MODULE_2___default())["type_" + item.type.name]}`,
                                children: item.type.name
                            }, index))
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_Pokemon_module_css__WEBPACK_IMPORTED_MODULE_2___default().data_container),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Pokemon_module_css__WEBPACK_IMPORTED_MODULE_2___default().data_height),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                children: "Altura:"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                children: [
                                    pokemon.height * 10,
                                    " cm"
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Pokemon_module_css__WEBPACK_IMPORTED_MODULE_2___default().data_weight),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                children: "Peso:"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                children: [
                                    pokemon.weight / 10,
                                    " kg"
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PokemonId);


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

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [636,675], () => (__webpack_exec__(9116)));
module.exports = __webpack_exports__;

})();