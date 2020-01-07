var Beer;
(function (Beer) {
    Beer[Beer["KF_STRONG"] = 0] = "KF_STRONG";
    Beer[Beer["KF_LIGHT"] = 1] = "KF_LIGHT";
    Beer[Beer["KF_ULTRA"] = 2] = "KF_ULTRA";
    Beer[Beer["H5000"] = 3] = "H5000";
})(Beer || (Beer = {}));
;
console.log(Beer.H5000);
var favBeer = Beer.KF_LIGHT;
console.log(favBeer);
