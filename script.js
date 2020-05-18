var d = document, qs = s => d.querySelector(s), ce = n => d.createElement(n), 
ca = (s, n) => (new Array(s)).fill("").map(()=>ce(n)),
b = qs("body"), l = ca(3, "div"), c = ca(9, "button"), t = 0, gv = () => t % 2 ? 'x' : 'o',
wp = ["123", "456", "789", "159", "357", "147", "258", "369"],
sa = (e, a, v) => (e.dataset[a] = v),
cm = () => {
    var li = 0;
    c.forEach((el, ci) => {
        sa(el, 'cNo', ci + 1);
        el.addEventListener('click', e => {
            if (!e.target.dataset.value) (sa(e.target, 'value', gv())) &&
            wp.some(p => ((p.indexOf(e.target.dataset.cNo) >= 0) && cp(p, e.target))) ?
            alert(gv().toUpperCase() + " won !") || window.location.reload() : t++;
        });
        l[li].appendChild(el);
        if (ci > 0 && (((ci + 1) % 3) == 0)) b.appendChild(l[li]) && li++;
    });
},
cp = (p, la) => p.split("").every(o => (o == la.dataset.cNo) || (qs('button[data-c-no="' + o + '"]').dataset.value == la.dataset.value));
cm();

