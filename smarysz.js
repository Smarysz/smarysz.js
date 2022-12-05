/*
    smarysz.js v1.0.0 (c) 2022
    Author: Smarysz
    WWW: https://smarysz.net/
    Contact: tymek@smarysz.net
*/

class Smarysz {

    static rand(min = 1, max = 100) {
        return max >= min ? Math.floor(Math.random() * (parseInt(max) - parseInt(min) + 1) + parseInt(min)) : NaN;
    }

    static randColor(format = "hex") {
        if (format === "hex") {
            const chars = "673c0a4251f8dbe9";
            let c = "#";
            for (let i = 0; i < 6; i++)
                c += chars[this.rand(0, chars.length - 1)];
            return c;
        }
        else if (format === "rgb") {
            return "rgb(" + this.rand(0, 255) + "," + this.rand(0, 255) + "," + this.rand(0, 255) + ")";
        }
        else if (format === "rgba") {
            return "rgba(" + this.rand(0, 255) + "," + this.rand(0, 255) + "," + this.rand(0, 255) + "," + this.rand(0, 100) + "%)";
        }
        else if (format === "hsl") {
            return "hsl(" + this.rand(0, 359) + "," + this.rand(0, 100) + "%," + this.rand(0, 100) + "%)";
        }
        else return "";
    }

    static range(min = 1, max = 100) {
        const t = [];
        if (typeof min === "number" && typeof max === "number" && isFinite(min) && isFinite(max)) {
            min = parseInt(min);
            max = parseInt(max);
            if (max >= min) {
                for (let i = min; i <= max; i++) t.push(i);
                return t;
            }
            else return [];
        }
        else if (typeof min === "string" && typeof max === "string") {
            if (min.length == 1 && max.length == 1) {
                const l = "abcdefghijklmnopqrstuvwxyz";
                const u = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                if (l.indexOf(min) > -1 && l.indexOf(max) > -1) {
                    if (l.indexOf(min) <= l.indexOf(max)) {
                        for (let i = l.indexOf(min); i <= l.indexOf(max); i++) t.push(l[i]);
                        return t;
                    }
                    else return [];
                }
                else if (u.indexOf(min) > -1 && u.indexOf(max) > -1) {
                    if (u.indexOf(min) <= u.indexOf(max)) {
                        for (let i = u.indexOf(min); i <= u.indexOf(max); i++) t.push(u[i]);
                        return t;
                    }
                    else return [];
                }
                else return [];
            }
            else return [];
        }
        else return [];
    }

    static validEmail(email) {
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (typeof email === "string") {
            return regex.test(email);
        }
        else return false;
    }

    static validURL(url) {
        try {
            url = new URL(url);
            const proto = url.protocol;
            return ["http:", "https:"].includes(proto);
        } catch (e) {
            return false;
        }
    }

    static dayName() {
        let day = (new Date).getDay();
        switch (day) {
            case 0: return "Sunday";
            case 1: return "Monday";
            case 2: return "Tuesday";
            case 3: return "Wednesday";
            case 4: return "Thursday";
            case 5: return "Friday";
            case 6: return "Saturday";
            default: return "";
        }
    }

    static monthName() {
        let month = (new Date).getMonth();
        switch (month) {
            case 0: return "January";
            case 1: return "February";
            case 2: return "March";
            case 3: return "April";
            case 4: return "May";
            case 5: return "June";
            case 6: return "July";
            case 7: return "August";
            case 8: return "September";
            case 9: return "October";
            case 10: return "November";
            case 11: return "December";
            default: return "";
        }
    }

    static date(format = "Y-m-d") {
        if (typeof format === "string") {
            let t = "";
            const date = new Date();
            const Y = date.getFullYear();
            let m = date.getMonth() + 1;
            m = m < 10 ? "0" + m : m;
            let d = date.getDate();
            d = d < 10 ? "0" + d : d;
            let y = String(date.getFullYear());
            y = y[y.length - 2] + y[y.length - 1];
            let H = date.getHours();
            H = H < 10 ? "0" + H : H;
            let h = H >= 12 ? "0" + (H - 12) : H;
            let a = Number(H) < 12 ? "am" : "pm";
            let A = a.toUpperCase();
            let i = date.getMinutes();
            i = i < 10 ? "0" + i : i;
            let s = date.getSeconds();
            s = s < 10 ? "0" + s : s;
            let S = Number(d);
            if (S == 1 || S == 21 || S == 31) S = "st";
            else if (S == 2 || S == 22) S = "nd";
            else if (S == 3 || S == 23) S = "rd";
            else S = "th";
            let D = this.dayName().slice(0, 3);
            let M = this.monthName().slice(0, 3);
            let F = this.monthName();
            let l = this.dayName();
            let r = D + ", " + d + " " + M + " " + Y + " " + H + ":" + i + ":" + s + " " + "+" + date.toString().split(" ")[5].split("+")[1];

            for (let c of format.split("")) {
                switch (c) {
                    case "Y": t += Y; break;
                    case "o": t += Y; break;
                    case "m": t += m; break;
                    case "d": t += d; break;
                    case "j": t += d; break;
                    case "y": t += y; break;
                    case "h": t += h; break;
                    case "H": t += H; break;
                    case "a": t += a; break;
                    case "A": t += A; break;
                    case "i": t += i; break;
                    case "s": t += s; break;
                    case "S": t += S; break;
                    case "D": t += D; break;
                    case "M": t += M; break;
                    case "F": t += F; break;
                    case "l": t += l; break;
                    case "r": t += r; break;
                    default: t += c;
                }
            }

            return t;
        }
        else return "";
    }

    static lorem(words = 20) {
        let html = "Lorem ipsum ";
        let bl = false;
        let wc = words;
        let w = "reprehenderit,illum,quae,dignissimos,similique,elit,commodi,veniamveniam,assumenda,tempora,quod,qui,molestias,praesentium,repudiandae,error,beatae,voluptatibus,vitae,asperiores,consequuntur,reiciendis,perferendis,neque,quia,asperioresasperiores,dolore,dolores,maxime,numquam,natus,nemo,quibusdam,nobis,aperiam,suntsunt,nihil,voluptates,enim,quam,animi,saepe,veritatis,minima,accusantium,omnis,temporibus,quis,eaque,sequi,aliquid,fuga,deleniti,vel,voluptate,atque,incidunt,libero,cupiditate,maiores,quaerat,estest,et,inventoreinventore,iste,esse,repellendus,ut,labore,rerum,adipisicing,itaque,sit,molestiae,laborum,provident,mollitia,exercitationem,odit,excepturi,quo,illo,in,quos,magni,nostrum,laboriosam,non,eligendi,corrupti,id,modimodi,aliquam,nesciunt,quisquam,distinctio,consectetur,hic,architecto,fugitfugit,iusto,eos,ullam,laudantium,ipsam,etet,dignissimosdignissimos,laborumlaborum,illumillum,quasi,officiis,repellat,ea,eveniet,culpa,pariatur,facilis,quoquo,quamquam,tempore,doloribus,dolorum,explicabo,totam,aut,consequatur,amet,odio,doloremque,quas,natusnatus,cum,ex,at,illoillo,voluptas,beataebeatae,est,officia,harum,blanditiisblanditiis,suscipit,nulla,deseruntdeserunt,accusamus,placeat,eoseos,optio,deserunt,optiooptio,autemautem,eum,magnam,nam,eius,vero,delectus,ab,dolorem,totamtotam,dolor,sint,voluptatum,corporis,numquamnumquam,nostrumnostrum,ullamullam,minimaminima,aperiamaperiam,veniam,porro,sequisequi,atat,adad,fugiat,ipsa,nisi,dicta,earum,facere,perspiciatis,assumendaassumenda,fugafuga,recusandae,reprehenderitreprehenderit,quibusdamquibusdam,quiaquia,alias,sunt,impedit,voluptatemvoluptatem,ametamet,possimus,autem,sitsit,fugit,adipisci,tenetur,inin,unde,iustoiusto,animianimi,necessitatibusnecessitatibus,ratione,architectoarchitecto,atqueatque,pariaturpariatur,temporibustemporibus,eaea,esseesse,aspernatur,blanditiis,rationeratione,quosquos,facilisfacilis,ducimus,doloremdolorem,quasiquasi,nemonemo,iure,adipisciadipisci,velit,doloresdolores,modi,debitis,maximemaxime,perspiciatisperspiciatis,sed,saepesaepe,quidem,aliquidaliquid,a,eumeum,laudantiumlaudantium,voluptatem,similiquesimilique,perferendisperferendis,necessitatibus,ad,cumque,delectusdelectus,quiqui,ipsaipsa,sapientesapiente,expedita,delenitideleniti,temporetempore,excepturiexcepturi,nullanulla,sapiente,solutasoluta,rem,minus,nequeneque,laboriosamlaboriosam,inventore,repudiandaerepudiandae,debitisdebitis,aliasalias,expeditaexpedita,velitvelit,namnam,soluta,nihilnihil,nisinisi,molestiaemolestiae,doloremquedoloremque,iureiure,voluptatibusvoluptatibus,eaqueeaque,ipsamipsam,accusantiumaccusantium,remrem,eligendieligendi,quisquis,accusamusaccusamus,evenieteveniet,quisquamquisquam,elitelit,cumcum,dictadicta,aa,molestiasmolestias,corporiscorporis,impeditimpedit,officiaofficia,quasquas,doloribusdoloribus,voluptatevoluptate,utut,mollitiamollitia,facerefacere,voluptatumvoluptatum,rerumrerum,itaqueitaque,eiuseius,quaeratquaerat,velvel,adipisicingadipisicing,consequunturconsequuntur,exex,quidemquidem,ducimusducimus,repellatrepellat,culpaculpa,nesciuntnesciunt,liberolibero,abab,cumquecumque".split(",");
        if (typeof wc !== "number" || wc < 2) return "";

        wc -= 2;

        if (!wc) return "Lorem ipsum.";

        for (let i = 0; i < wc; i++) {
            const rw = w[this.rand(0, w.length - 1)];

            if (bl) {
                html += rw[0].toUpperCase() + rw.slice(1);
                bl = false;
            }
            else html += rw;

            if (i < wc - 1) {
                const n = this.rand(1, 26);

                if (n == 2) {
                    html += "! ";
                    bl = true;
                }
                else if (n == 6) {
                    html += "? ";
                    bl = true;
                }
                else if (n == 12) html += ", ";
                else if (n == 18) {
                    html += ". ";
                    bl = true;
                }
                else html += " ";
            }

            if (i == wc - 1) {
                html = html.trim();
                html += ".";
            }
        }
        html = html.trim();
        return html;
    }

    static passwordStrength(password) {
        if (typeof password !== "string" || !password) return false;
        let s = 0, obj = { chars: [] };
        if (password.length > 7) s++;
        if (password.length > 15) s++;
        if (password.length > 23) s++;
        if (/[a-z]/.test(password)) {
            s++;
            obj.chars.push("a");
        }
        if (/[A-Z]/.test(password)) {
            s++;
            obj.chars.push("A");
        }
        if (/[0-9]/.test(password)) {
            s++;
            obj.chars.push("0");
        }
        if (/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password)) {
            s++;
            obj.chars.push("!");
        }
        obj.strength = s;
        obj.length = password.length;
        return obj;
    }

    static rgbToHex(r, g, b) {
        r = parseInt(r), g = parseInt(g), b = parseInt(b);
        if (r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255) {
            r = r.toString(16);
            r = r.length === 1 ? '0' + r : r;
            g = g.toString(16);
            g = g.length === 1 ? '0' + g : g;
            b = b.toString(16);
            b = b.length === 1 ? '0' + b : b;
            return '#' + r + g + b;
        }
        return '';
    }

    static hexToRGB(color) {
        if (typeof color !== 'string') return '';
        let c = color.toLowerCase();
        if ((c.length === 4 || c.length === 7) && (c.match(/^#[0-9abcdef]{6}$/) || c.match(/^#[0-9abcdef]{3}$/))) {
            let r, g, b;
            if (c.length === 4) {
                r = c[1] + c[1];
                g = c[2] + c[2];
                b = c[3] + c[3];
            } else {
                r = c[1] + c[2];
                g = c[3] + c[4];
                b = c[5] + c[6];
            }

            r = Number('0x' + r);
            g = Number('0x' + g);
            b = Number('0x' + b);

            return `rgb(${r},${g},${b})`;

        } else return '';
    }

}

Array.prototype.rand = function () {
    return this[Smarysz.rand(0, this.length - 1)];
};

Array.prototype.shuffle = function () {
    let tmp = [...this], ordered = [];
    while (tmp.length) {
        const i = Smarysz.rand(0, tmp.length - 1);
        ordered.push(tmp.splice(i, 1)[0]);
    }
    return ordered;
};

Array.prototype.desc = function () {
    return [...this.sort((a, b) => a - b).reverse()];
};

Array.prototype.delete = function (index = 0) {
    let t = [];
    if (index === "last") index = this.length - 1;
    if (typeof index !== "number" || !Number.isInteger(index)) return [];
    for (let i = 0; i < this.length; i++) {
        if (i !== index) t.push(this[i]);
    }
    return t;
}

Array.prototype.last = function () {
    return this[this.length - 1];
}

Array.prototype.to = function (type = "num") {
    if (["str", "num", "bool", "int"].includes(type)) {
        let t = [];
        switch (type[0].toLowerCase()) {
            case "s":
                for (let e of this) t.push(String(e));
                break;
            case "n":
                for (let e of this) t.push(Number(e));
                break;
            case "b":
                for (let e of this) t.push(!!e);
                break;
            case "i":
                for (let e of this) t.push(parseInt(e));
                break;

        }
        return t;
    }
    else return [];
}

Array.prototype.unique = function () {
    let t = [];
    for (let e of this) {
        if (t.indexOf(e) < 0) t.push(e);
    }
    return t;
};

Array.prototype.toObject = function () {
    let o = {}, i = 0;
    for (let e of this) {
        o[i] = e;
        i++;
    }
    return o;
};

Math.fact = function (n) {
    let i = 1;
    if (typeof n !== "number" || n < 0) return NaN;
    while (n > 1) {
        i *= n;
        n--;
    }
    return i;
};

Math.trapeze = function (a, b, h) {
    if (a > 0 && b > 0 && h > 0) {
        a = Number(a);
        b = Number(b);
        h = Number(h);
        return ((a + b) * h) / 2;
    }
    else return NaN;
};

Math.fib = (function () {
    let c = { '0': 0, '1': 1, '2': 1 };

    function fib(n) {
        if (n < 0 || !Number.isInteger(n) || typeof n !== 'number') return NaN;
        if (c[n]) return c[n];
        if (n > 1) {
            c[n] = fib(n - 1) + fib(n - 2);
            return c[n];
        }
        else return n;
    }

    return fib;

})();

Math.isPrime = (function () {
    let c = {};
    /**
     * Check if number is prime number
     * @param {number} n Number greater than zero
     * @returns {boolean}
     */
    function isPrime(n) {
        let d = 0;
        n = Number(n);

        if (n in c) return c[n];

        if (n > 0 && isFinite(n) && Number.isInteger(n)) {
            for (let i = 1; i <= n; i++) {
                if (n % i == 0) d++;
            }
            if (n > 10000000) c[n] = d == 2;
            return d == 2;
        }
        else return false;
    }
    return isPrime;
})();

Math.gcd = function (a, b) {
    a = parseFloat(a), b = parseFloat(b);
    if (isNaN(a) || isNaN(b)) return NaN;
    while (b > 0) {
        let c = a % b;
        a = b;
        b = c;
    }
    return a;
}

Math.lcm = function (a, b) {
    a = parseFloat(a), b = parseFloat(b);
    return (Math.abs(a * b)) / Math.gcd(a, b);
}

String.prototype.reverse = function () {
    return this.split("").reverse().join("");
};

String.prototype.capitalize = function () {
    let text = "";
    const words = this.split(" ");
    for (let word of words) {
        if (word.length) {
            let letter = word[0].toUpperCase();
            const other = word.substring(1);
            text += letter + other + " ";
        }
        else text += " ";
    }
    return text.substring(0, text.length - 1);
};

String.prototype.chars = function () {
    return this.split("");
};

String.prototype.toggleCase = function () {
    let text = "";
    for (let char of this.split("")) {
        const u = char.toUpperCase();
        const l = char.toLowerCase();
        if (u === l) text += u;
        else if (char === u) text += l;
        else text += u;
    }
    return text;
};

String.prototype.wordCount = function (search) {

    const txt = this.trim() + " ";
    const words = [];
    let i = 0, l = 0, word = "";

    for (let c of txt.split("")) {
        if (l == 1) i++;

        if (" \n\t".includes(c)) {
            l = 0;
            words.push(word);
            word = "";
        }
        else {
            l++;
            word += c;
        }
    }

    if (typeof search === "number") {
        if (search < 1) return i;
        else {
            i = 0;
            for (let word of words)
                if (word.length === search) i++;
            return i;
        }
    }
    else if (typeof search === "string") {
        i = 0;
        for (let e of words) {
            if (e && e.toLowerCase() === search.trim().toLowerCase()) i++;
        }
        return i;
    }
    else return i;
};

String.prototype.shuffle = function () {
    return this.split("").shuffle().join("");
};

String.prototype.removeDigits = function () {
    let s = "";
    for (let c of this) {
        if (!"0123456789".includes(c)) s += c;
    }
    return s;
};

String.prototype.reduce = function () {
    let s = "";
    let words = this.trim().split(" ");
    for (let word of words) {
        if (word) s += " " + word;
    }
    return s.trim();
};

String.prototype.replaceLast = function (old, New) {
    if (arguments.length == 2) {
        let i = this.lastIndexOf(old);
        let a = this.slice(0, i);
        let b = this.slice(i).replace(old, New);
        return a + b;
    }
    else return String(this);
};

String.prototype.lower = function () {
    return this.toLowerCase();
};

String.prototype.upper = function () {
    return this.toUpperCase();
};

HTMLElement.prototype.attr = function (attr, value) {

    const a = arguments.length;

    if (a == 1 && typeof attr === "string") {
        return this.getAttribute(attr);
    }
    else if (typeof attr === "string" && typeof value === "string") {
        this.setAttribute(attr, value);
        return this;
    }
    else if (a == 1 && typeof attr === "object") {
        if (attr.constructor.name === "Object") {
            for (let key in attr) {
                this.setAttribute(key, attr[key]);
            }
            return this;
        }
        else return this;
    }
    else if (!a) {
        let t = this.attributes, a = {};
        for (let i = 0; i < t.length; i++) {
            a[t[i].name] = t[i].value;
        }
        return a;
    }
    else return this;
}

HTMLElement.prototype.removeAttr = function (...attributes) {
    if (attributes[0] instanceof Array) {
        attributes = attributes[0];
    }

    for (let a of attributes) {
        this.removeAttribute(String(a));
    }

    return this;

};

HTMLElement.prototype.data = function (prop, value) {

    const a = arguments.length;

    if (a == 1 && typeof prop === "string") {
        return typeof this.dataset[prop] === "undefined" ? null : this.dataset[prop];
    }
    else if (typeof prop === "string" && typeof value === "string") {
        this.dataset[prop] = value;
    }
    else if (a == 1 && typeof prop === "object") {
        if (prop.constructor.name === "Object") {
            for (let key in prop) {
                this.dataset[key] = prop[key];
            }
        }
    }
    return this;
}

HTMLElement.prototype.css = function (prop, value) {

    let a = arguments.length;
    let css = getComputedStyle(this);

    if (a == 1 && typeof prop === "string") {
        return typeof css[prop] === "undefined" ? null : css[prop];
    }
    else if (typeof prop === "string" && typeof value === "string") {
        this.style[prop] = value;
    }
    else if (a == 1 && typeof prop === "object") {
        if (prop.constructor.name === "Object") {
            for (let key in prop) {
                this.style[key] = prop[key];
            }
        }
    }
    return this;
}

HTMLElement.prototype.class = function (...Classes) {
    let a = arguments.length;
    if (!a) {
        return [...this.classList];
    }
    else if (a == 1 && !(Classes instanceof Array)) {
        this.classList.add(Classes);
        return this;
    }
    else if (Classes instanceof Array) {
        if (Classes[0] instanceof Array) {
            for (let d of Classes[0]) {
                this.classList.add(d);
            }
        }
        else {
            for (let c of Classes) {
                this.classList.add(c);
            }
        }
        return this;
    }
};

HTMLElement.prototype.removeClass = function (...Classes) {
    if (Classes[0] instanceof Array) {
        Classes = Classes[0];
    }

    for (let a of Classes) {
        this.classList.remove(String(a));
    }

    return this;
};

HTMLElement.prototype.toggleClass = function (...Classes) {
    if (Classes[0] instanceof Array) Classes = Classes[0];

    for (let c of Classes) {
        c = String(c);
        if (this.classList.contains(c)) {
            this.classList.remove(c);
        }
        else {
            this.classList.add(c);
        }
    }
};

HTMLElement.prototype.html = function (html) {
    if (!arguments.length) {
        return this.innerHTML;
    }
    else {
        this.innerHTML = html;
        return this;
    }
};

HTMLElement.prototype.text = function (text) {
    if (!arguments.length) {
        return this.textContent;
    }
    else {
        this.textContent = text;
        return this;
    }
};