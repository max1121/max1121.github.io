google.maps.__gjsload__('stats', function(_) {
    var e_ = function(a, b, c) {
            var d = [];
            _.Nb(a, function(a, c) {
                d.push(c + b + a)
            });
            return d.join(c)
        },
        f_ = function(a, b, c, d) {
            var e = {};
            e.host = window.document.location && window.document.location.host || window.location.host;
            e.v = a;
            e.r = Math.round(1 / b);
            c && (e.client = c);
            d && (e.key = d);
            return e
        },
        g_ = function(a) {
            var b = {};
            _.Nb(a, function(a, d) {
                b[(0, window.encodeURIComponent)(d)] = (0, window.encodeURIComponent)(a).replace(/%7C/g, "|")
            });
            return e_(b, ":", ",")
        },
        i_ = function(a, b, c, d, e) {
            var f = _.O(_.R, 23, 500);
            var g = _.O(_.R, 22, 2);
            this.D = a;
            this.F =
            b;
            this.G = f;
            this.l = g;
            this.C = c;
            this.m = d;
            this.B = e;
            this.f = new _.ek;
            this.b = 0;
            this.j = _.Sa();
            h_(this)
        },
        h_ = function(a) {
            window.setTimeout(function() {
                j_(a);
                h_(a)
            }, Math.min(a.G * Math.pow(a.l, a.b), 2147483647))
        },
        k_ = function(a, b, c) {
            a.f.set(b, c)
        },
        j_ = function(a) {
            var b = f_(a.F, a.C, a.m, a.B);
            b.t = a.b + "-" + (_.Sa() - a.j);
            a.f.forEach(function(a, d) {
                a = a();
                0 < a && (b[d] = Number(a.toFixed(2)) + (_.Cm() ? "-if" : ""))
            });
            a.D.b({
                ev: "api_snap"
            }, b);
            ++a.b
        },
        l_ = function(a, b, c, d, e) {
            this.m = a;
            this.C = b;
            this.l = c;
            this.f = d;
            this.j = e;
            this.b = new _.ek;
            this.B =
            _.Sa()
        },
        m_ = function(a, b, c) {
            this.l = b;
            this.f = a + "/maps/gen_204";
            this.j = c
        },
        n_ = function() {
            this.b = new _.ek
        },
        o_ = function(a) {
            var b = 0,
                c = 0;
            a.b.forEach(function(a) {
                b += a.eo;
                c += a.Fn
            });
            return c ? b / c : 0
        },
        p_ = function(a, b, c, d, e) {
            this.B = a;
            this.C = b;
            this.m = c;
            this.j = d;
            this.l = e;
            this.f = {};
            this.b = []
        },
        q_ = function(a, b, c, d) {
            this.j = a;
            _.A.bind(this.j, "set_at", this, this.l);
            _.A.bind(this.j, "insert_at", this, this.l);
            this.B = b;
            this.C = c;
            this.m = d;
            this.f = 0;
            this.b = {};
            this.l()
        },
        r_ = function() {
            this.j = _.P(_.R, 6);
            this.C = _.yf();
            this.b = new m_(_.rg[35] ?
            _.P(_.zf(_.R), 11) : _.iw, _.jj, window.document);
            new q_(_.Yi, (0, _.p)(this.b.b, this.b), _.Ef, !!this.j);
            var a = _.P(new _.sf(_.R.data[3]), 1);
            this.D = a.split(".")[1] || a;
            this.F = {};
            this.B = {};
            this.m = {};
            this.G = {};
            this.ea = _.O(_.R, 0, 1);
            _.ij && (this.l = new i_(this.b, this.D, this.ea, this.j, this.C))
        };
    l_.prototype.D = function(a, b) {
        b = _.m(b) ? b : 1;
        this.b.isEmpty() && window.setTimeout((0, _.p)(function() {
            var a = f_(this.C, this.l, this.f, this.j);
            a.t = _.Sa() - this.B;
            var b = this.b;
            _.fk(b);
            for (var e = {}, f = 0; f < b.b.length; f++) {
                var g = b.b[f];
                e[g] = b.H[g]
            }
            _.oz(a, e);
            this.b.clear();
            this.m.b({
                ev: "api_maprft"
            }, a)
        }, this), 500);
        b = this.b.get(a, 0) + b;
        this.b.set(a, b)
    };
    m_.prototype.b = function(a, b) {
        b = b || {};
        var c = _.Rk().toString(36);
        b.src = "apiv3";
        b.token = this.l;
        b.ts = c.substr(c.length - 6);
        a.cad = g_(b);
        a = e_(a, "=", "&");
        a = this.f + "?target=api&" + a;
        this.j.createElement("img").src = a;
        (b = _.Vb.__gm_captureCSI) && b(a)
    };
    n_.prototype.f = function(a, b, c) {
        this.b.set(_.Gb(a), {
            eo: b,
            Fn: c
        })
    };
    p_.prototype.D = function(a) {
        this.f[a] || (this.f[a] = !0, this.b.push(a), 2 > this.b.length && _.Bz(this, this.F, 500))
    };
    p_.prototype.F = function() {
        for (var a = f_(this.C, this.m, this.j, this.l), b = 0, c; c = this.b[b]; ++b)
            a[c] = "1";
        a.hybrid = +_.fm();
        this.b.length = 0;
        this.B.b({
            ev: "api_mapft"
        }, a)
    };
    q_.prototype.l = function() {
        for (var a; a = this.j.removeAt(0);) {
            var b = a.jn;
            a = a.timestamp - this.C;
            ++this.f;
            this.b[b] || (this.b[b] = 0);
            ++this.b[b];
            if (20 <= this.f && !(this.f % 5)) {
                var c = {};
                c.s = b;
                c.sr = this.b[b];
                c.tr = this.f;
                c.te = a;
                c.hc = this.m ? "1" : "0";
                this.B({
                    ev: "api_services"
                }, c)
            }
        }
    };
    r_.prototype.T = function(a) {
        a = _.Gb(a);
        this.F[a] || (this.F[a] = new p_(this.b, this.D, this.ea, this.j, this.C));
        return this.F[a]
    };
    r_.prototype.S = function(a) {
        a = _.Gb(a);
        this.B[a] || (this.B[a] = new l_(this.b, this.D, _.O(_.R, 0, 1), this.j, this.C));
        return this.B[a]
    };
    r_.prototype.f = function(a) {
        if (this.l) {
            this.m[a] || (this.m[a] = new _.QA, k_(this.l, a, function() {
                return b.Ta()
            }));
            var b = this.m[a];
            return b
        }
    };
    r_.prototype.O = function(a) {
        if (this.l) {
            this.G[a] || (this.G[a] = new n_, k_(this.l, a, function() {
                return o_(b)
            }));
            var b = this.G[a];
            return b
        }
    };
    var s_ = new r_;
    _.Xc("stats", s_);
});

