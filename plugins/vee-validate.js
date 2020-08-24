import {
    extend,
    localize
} from "vee-validate";
import en from "vee-validate/dist/locale/en.json";
import * as rules from "vee-validate/dist/rules";

// install rules and localization for vee validate
Object.keys(rules).forEach(rule => {
    extend(rule, rules[rule]);
});
localize("en", en);