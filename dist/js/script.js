$(function() {
    var t = $(".wrap").width();
    400 < $(window).width() && (t = 400);
    var n = $(".can")[0],
        d = n.getContext("2d");
    n.width = t, n.height = t, d.translate(t / 2, t / 2);
    var e = null;
    $.ajax({ url: "/page", dataType: "json", async: !1, success: function(t) { e = t } });
    var c = Math.PI / 180,
        s = -90,
        h = t / 2 - 50;
    e.map(function(t, n) {
        var e, a, o = s + t.jiaodu,
            l = (s + t.jiaodu / 2) * c,
            i = Math.cos(l) * h,
            r = Math.sin(l) * h;
        d.beginPath(), d.moveTo(0, 0), d.arc(0, 0, h, s * c, o * c), d.fillStyle = t.color, d.fill(), s = o, d.closePath(), d.strokeStyle = t.color, n < 5 && function(t, n) {
            d.beginPath(), d.moveTo(t, n), 0 < t && n < 0 ? (d.lineTo(t + 10, n - 10), d.lineTo(t + 70, n - 10)) : 0 < t && 0 < n ? (d.lineTo(t + 10, n + 10), d.lineTo(t + 70, n + 10)) : t < 0 && 0 < n ? (d.lineTo(t - 10, n + 10), d.lineTo(t - 70, n + 10)) : t < 0 && n < 0 && (d.lineTo(t - 10, n - 10), d.lineTo(t - 70, n - 10));
            d.stroke()
        }(i, r), a = "<tr align='center'><td><span style='background:" + (e = t).color + ";'></span>" + e.name + "</td><td>" + e.bili + "</td><td>" + e.num + "</td><td>" + e.num + "</td></tr>", $(".table>tbody").append(a)
    }), d.beginPath(), d.arc(0, 0, t / 2 - 110, 0, 360 * c), d.fillStyle = "#fff", d.strokeStyle = "rgba(255,255,255,.5)", d.lineWidth = 20, d.stroke(), d.fill()
});