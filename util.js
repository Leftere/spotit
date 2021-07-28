"use strict";

export function add(a, b) {
    return a + b;
}

if (!Object.is /*|| true*/) {
    Object.is = function ObjectIs(x,y) {
        var xNegZero = isItNegZero(x);
        var yNegZero = isItNegZero(y);

        if (xNegZero || yNegZero) {
            return xNegZero && yNegZero;
        }
        else if (isItNaN(x) && isItNaN(y)) {
            return true;
        }
        else if (x === y) {
            return true;
        }

        return false;

        // **********

        function isItNegZero(x) {
            return x === 0 && (1 / x) === -Infinity;
        }

        function isItNaN(x) {
            return x !== x;
        }
    };
}

export function findAll(match, array){
    var ret = [];
    for (let v of arr) {
        if (Object.is(match,v)) {
            ret.push(v);
        }
        else if (match == null && v == null) {
            ret.push(v);
        }
        else if (typeof match == "boolean") {
            if (match === v) {
                ret.push(v);
            }
        }
        else if (typeof match == "string" && match.trim() != "" && typeof v == "number" && !Object.is(-0,v)) {
            if (match == v) {
                ret.push(v);
            }
        }
        else if (typeof match == "number" && !Object.is(match,-0) && !Object.is(match,NaN) && !Object.is(match,Infinity) && !Object.is(match,-Infinity) && typeof v == "string" && v.trim() != "") {
            if (match == v) {
                ret.push(v);
            }
        }
    }
    return ret;
}
