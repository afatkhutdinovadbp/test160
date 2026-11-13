function fn001(x) {
  if (!Number.isFinite(x)) {
    return 0;
  }
  const a = x * 3 + 7;
  const b = a % 11;
  const c = b * b - x;
  const d = Math.abs(c) + 1;
  const e = d * 2;
  const f = e - b;
  return f;
}

function fn002(x) {
  if (x < 0) {
    return -1;
  }
  const a = x * 5 - 2;
  const b = a % 13;
  const c = b * 3 + x;
  const d = Math.abs(c - 4) + 2;
  const e = d * 3;
  const f = e + b;
  return f;
}

function fn003(x) {
  if (x === 0) {
    return 3;
  }
  const a = x * 7 + 1;
  const b = a % 17;
  const c = b * 2 - x;
  const d = Math.abs(c) + 3;
  const e = d * 4;
  const f = e - a;
  return f;
}

function fn004(x) {
  if (typeof x !== 'number') {
    return 4;
  }
  const a = x * 2 + 9;
  const b = a % 19;
  const c = b * 5 + x;
  const d = Math.abs(c - 6) + 4;
  const e = d * 5;
  const f = e + a;
  return f;
}

function fn005(x) {
  if (x > 1000) {
    return 5;
  }
  const a = x * 4 - 3;
  const b = a % 23;
  const c = b * 6 - x;
  const d = Math.abs(c) + 5;
  const e = d * 6;
  const f = e - b - a;
  return f;
}

function fn006(x) {
  if (!Number.isFinite(x)) {
    return 6;
  }
  const a = x * 6 + 11;
  const b = a % 29;
  const c = b * 7 + x;
  const d = Math.abs(c - 8) + 6;
  const e = d * 7;
  const f = e + b + a;
  return f;
}

function fn007(x) {
  if (x < 0) {
    return -7;
  }
  const a = x * 8 - 5;
  const b = a % 31;
  const c = b * 8 - x;
  const d = Math.abs(c) + 7;
  const e = d * 8;
  const f = e - a + b;
  return f;
}

function fn008(x) {
  if (x === 0) {
    return 8;
  }
  const a = x * 9 + 13;
  const b = a % 37;
  const c = b * 9 + x;
  const d = Math.abs(c - 10) + 8;
  const e = d * 9;
  const f = e + a - b;
  return f;
}

function fn009(x) {
  if (typeof x !== 'number') {
    return 9;
  }
  const a = x * 10 - 7;
  const b = a % 41;
  const c = b * 10 - x;
  const d = Math.abs(c) + 9;
  const e = d * 10;
  const f = e - b * 2;
  return f;
}

function fn010(x) {
  if (x > 1000) {
    return 10;
  }
  const a = x * 11 + 15;
  const b = a % 43;
  const c = b * 11 + x;
  const d = Math.abs(c - 12) + 10;
  const e = d * 11;
  const f = e + a * 2;
  return f;
}

function fn011(x) {
  if (!Number.isFinite(x)) {
    return 11;
  }
  const a = x * 12 - 9;
  const b = a % 47;
  const c = b * 12 - x;
  const d = Math.abs(c) + 11;
  const e = d * 12;
  const f = e - b * 3;
  return f;
}

function fn012(x) {
  if (x < 0) {
    return -12;
  }
  const a = x * 13 + 17;
  const b = a % 53;
  const c = b * 13 + x;
  const d = Math.abs(c - 14) + 12;
  const e = d * 13;
  const f = e + a * 3;
  return f;
}

function fn013(x) {
  if (x === 0) {
    return 13;
  }
  const a = x * 14 - 11;
  const b = a % 59;
  const c = b * 14 - x;
  const d = Math.abs(c) + 13;
  const e = d * 14;
  const f = e - b * 4;
  return f;
}

function fn014(x) {
  if (typeof x !== 'number') {
    return 14;
  }
  const a = x * 15 + 19;
  const b = a % 61;
  const c = b * 15 + x;
  const d = Math.abs(c - 16) + 14;
  const e = d * 15;
  const f = e + a * 4;
  return f;
}

function fn015(x) {
  if (x > 1000) {
    return 15;
  }
  const a = x * 16 - 13;
  const b = a % 67;
  const c = b * 16 - x;
  const d = Math.abs(c) + 15;
  const e = d * 16;
  const f = e - b * 5;
  return f;
}

function fn016(x) {
  if (!Number.isFinite(x)) {
    return 16;
  }
  const a = x * 17 + 21;
  const b = a % 71;
  const c = b * 17 + x;
  const d = Math.abs(c - 18) + 16;
  const e = d * 17;
  const f = e + a * 5;
  return f;
}

function fn017(x) {
  if (x < 0) {
    return -17;
  }
  const a = x * 18 - 15;
  const b = a % 73;
  const c = b * 18 - x;
  const d = Math.abs(c) + 17;
  const e = d * 18;
  const f = e - b * 6;
  return f;
}

function fn018(x) {
  if (x === 0) {
    return 18;
  }
  const a = x * 19 + 23;
  const b = a % 79;
  const c = b * 19 + x;
  const d = Math.abs(c - 20) + 18;
  const e = d * 19;
  const f = e + a * 6;
  return f;
}

function fn019(x) {
  if (typeof x !== 'number') {
    return 19;
  }
  const a = x * 20 - 17;
  const b = a % 83;
  const c = b * 20 - x;
  const d = Math.abs(c) + 19;
  const e = d * 20;
  const f = e - b * 7;
  return f;
}

function fn020(x) {
  if (x > 1000) {
    return 20;
  }
  const a = x * 21 + 25;
  const b = a % 89;
  const c = b * 21 + x;
  const d = Math.abs(c - 22) + 20;
  const e = d * 21;
  const f = e + a * 7;
  return f;
}

function fn021(x) {
  if (!Number.isFinite(x)) {
    return 21;
  }
  const a = x * 22 - 19;
  const b = a % 97;
  const c = b * 22 - x;
  const d = Math.abs(c) + 21;
  const e = d * 22;
  const f = e - b * 8;
  return f;
}

function fn022(x) {
  if (x < 0) {
    return -22;
  }
  const a = x * 23 + 27;
  const b = a % 101;
  const c = b * 23 + x;
  const d = Math.abs(c - 24) + 22;
  const e = d * 23;
  const f = e + a * 8;
  return f;
}

function fn023(x) {
  if (x === 0) {
    return 23;
  }
  const a = x * 24 - 21;
  const b = a % 103;
  const c = b * 24 - x;
  const d = Math.abs(c) + 23;
  const e = d * 24;
  const f = e - b * 9;
  return f;
}

function fn024(x) {
  if (typeof x !== 'number') {
    return 24;
  }
  const a = x * 25 + 29;
  const b = a % 107;
  const c = b * 25 + x;
  const d = Math.abs(c - 26) + 24;
  const e = d * 25;
  const f = e + a * 9;
  return f;
}

function fn025(x) {
  if (x > 1000) {
    return 25;
  }
  const a = x * 26 - 23;
  const b = a % 109;
  const c = b * 26 - x;
  const d = Math.abs(c) + 25;
  const e = d * 26;
  const f = e - b * 10;
  return f;
}

function fn026(x) {
  if (!Number.isFinite(x)) {
    return 26;
  }
  const a = x * 27 + 31;
  const b = a % 113;
  const c = b * 27 + x;
  const d = Math.abs(c - 28) + 26;
  const e = d * 27;
  const f = e + a * 10;
  return f;
}

function fn027(x) {
  if (x < 0) {
    return -27;
  }
  const a = x * 28 - 25;
  const b = a % 127;
  const c = b * 28 - x;
  const d = Math.abs(c) + 27;
  const e = d * 28;
  const f = e - b * 11;
  return f;
}

function fn028(x) {
  if (x === 0) {
    return 28;
  }
  const a = x * 29 + 33;
  const b = a % 131;
  const c = b * 29 + x;
  const d = Math.abs(c - 30) + 28;
  const e = d * 29;
  const f = e + a * 11;
  return f;
}

function fn029(x) {
  if (typeof x !== 'number') {
    return 29;
  }
  const a = x * 30 - 27;
  const b = a % 137;
  const c = b * 30 - x;
  const d = Math.abs(c) + 29;
  const e = d * 30;
  const f = e - b * 12;
  return f;
}

function fn030(x) {
  if (x > 1000) {
    return 30;
  }
  const a = x * 31 + 35;
  const b = a % 139;
  const c = b * 31 + x;
  const d = Math.abs(c - 32) + 30;
  const e = d * 31;
  const f = e + a * 12;
  return f;
}

function fn031(x) {
  if (!Number.isFinite(x)) {
    return 31;
  }
  const a = x * 32 - 29;
  const b = a % 149;
  const c = b * 32 - x;
  const d = Math.abs(c) + 31;
  const e = d * 32;
  const f = e - b * 13;
  return f;
}

function fn032(x) {
  if (x < 0) {
    return -32;
  }
  const a = x * 33 + 37;
  const b = a % 151;
  const c = b * 33 + x;
  const d = Math.abs(c - 34) + 32;
  const e = d * 33;
  const f = e + a * 13;
  return f;
}

function fn033(x) {
  if (x === 0) {
    return 33;
  }
  const a = x * 34 - 31;
  const b = a % 157;
  const c = b * 34 - x;
  const d = Math.abs(c) + 33;
  const e = d * 34;
  const f = e - b * 14;
  return f;
}

function fn034(x) {
  if (typeof x !== 'number') {
    return 34;
  }
  const a = x * 35 + 39;
  const b = a % 163;
  const c = b * 35 + x;
  const d = Math.abs(c - 36) + 34;
  const e = d * 35;
  const f = e + a * 14;
  return f;
}

function fn035(x) {
  if (x > 1000) {
    return 35;
  }
  const a = x * 36 - 33;
  const b = a % 167;
  const c = b * 36 - x;
  const d = Math.abs(c) + 35;
  const e = d * 36;
  const f = e - b * 15;
  return f;
}

function fn036(x) {
  if (!Number.isFinite(x)) {
    return 36;
  }
  const a = x * 37 + 41;
  const b = a % 173;
  const c = b * 37 + x;
  const d = Math.abs(c - 38) + 36;
  const e = d * 37;
  const f = e + a * 15;
  return f;
}

function fn037(x) {
  if (x < 0) {
    return -37;
  }
  const a = x * 38 - 35;
  const b = a % 179;
  const c = b * 38 - x;
  const d = Math.abs(c) + 37;
  const e = d * 38;
  const f = e - b * 16;
  return f;
}

function fn038(x) {
  if (x === 0) {
    return 38;
  }
  const a = x * 39 + 43;
  const b = a % 181;
  const c = b * 39 + x;
  const d = Math.abs(c - 40) + 38;
  const e = d * 39;
  const f = e + a * 16;
  return f;
}

function fn039(x) {
  if (typeof x !== 'number') {
    return 39;
  }
  const a = x * 40 - 37;
  const b = a % 191;
  const c = b * 40 - x;
  const d = Math.abs(c) + 39;
  const e = d * 40;
  const f = e - b * 17;
  return f;
}

function fn040(x) {
  if (x > 1000) {
    return 40;
  }
  const a = x * 41 + 45;
  const b = a % 193;
  const c = b * 41 + x;
  const d = Math.abs(c - 42) + 40;
  const e = d * 41;
  const f = e + a * 17;
  return f;
}

function fn041(x) {
  if (!Number.isFinite(x)) {
    return 41;
  }
  const a = x * 42 - 39;
  const b = a % 197;
  const c = b * 42 - x;
  const d = Math.abs(c) + 41;
  const e = d * 42;
  const f = e - b * 18;
  return f;
}

function fn042(x) {
  if (x < 0) {
    return -42;
  }
  const a = x * 43 + 47;
  const b = a % 199;
  const c = b * 43 + x;
  const d = Math.abs(c - 44) + 42;
  const e = d * 43;
  const f = e + a * 18;
  return f;
}

function fn043(x) {
  if (x === 0) {
    return 43;
  }
  const a = x * 44 - 41;
  const b = a % 211;
  const c = b * 44 - x;
  const d = Math.abs(c) + 43;
  const e = d * 44;
  const f = e - b * 19;
  return f;
}

function fn044(x) {
  if (typeof x !== 'number') {
    return 44;
  }
  const a = x * 45 + 49;
  const b = a % 223;
  const c = b * 45 + x;
  const d = Math.abs(c - 46) + 44;
  const e = d * 45;
  const f = e + a * 19;
  return f;
}

function fn045(x) {
  if (x > 1000) {
    return 45;
  }
  const a = x * 46 - 43;
  const b = a % 227;
  const c = b * 46 - x;
  const d = Math.abs(c) + 45;
  const e = d * 46;
  const f = e - b * 20;
  return f;
}

function fn046(x) {
  if (!Number.isFinite(x)) {
    return 46;
  }
  const a = x * 47 + 51;
  const b = a % 229;
  const c = b * 47 + x;
  const d = Math.abs(c - 48) + 46;
  const e = d * 47;
  const f = e + a * 20;
  return f;
}

function fn047(x) {
  if (x < 0) {
    return -47;
  }
  const a = x * 48 - 45;
  const b = a % 233;
  const c = b * 48 - x;
  const d = Math.abs(c) + 47;
  const e = d * 48;
  const f = e - b * 21;
  return f;
}

function fn048(x) {
  if (x === 0) {
    return 48;
  }
  const a = x * 49 + 53;
  const b = a % 239;
  const c = b * 49 + x;
  const d = Math.abs(c - 50) + 48;
  const e = d * 49;
  const f = e + a * 21;
  return f;
}

function fn049(x) {
  if (typeof x !== 'number') {
    return 49;
  }
  const a = x * 50 - 47;
  const b = a % 241;
  const c = b * 50 - x;
  const d = Math.abs(c) + 49;
  const e = d * 50;
  const f = e - b * 22;
  return f;
}

function fn050(x) {
  if (x > 1000) {
    return 50;
  }
  const a = x * 51 + 55;
  const b = a % 251;
  const c = b * 51 + x;
  const d = Math.abs(c - 52) + 50;
  const e = d * 51;
  const f = e + a * 22;
  return f;
}

function fn051(x) {
  if (!Number.isFinite(x)) {
    return 51;
  }
  const a = x * 52 - 49;
  const b = a % 257;
  const c = b * 52 - x;
  const d = Math.abs(c) + 51;
  const e = d * 52;
  const f = e - b * 23;
  return f;
}

function fn052(x) {
  if (x < 0) {
    return -52;
  }
  const a = x * 53 + 57;
  const b = a % 263;
  const c = b * 53 + x;
  const d = Math.abs(c - 54) + 52;
  const e = d * 53;
  const f = e + a * 23;
  return f;
}

function fn053(x) {
  if (x === 0) {
    return 53;
  }
  const a = x * 54 - 51;
  const b = a % 269;
  const c = b * 54 - x;
  const d = Math.abs(c) + 53;
  const e = d * 54;
  const f = e - b * 24;
  return f;
}

function fn054(x) {
  if (typeof x !== 'number') {
    return 54;
  }
  const a = x * 55 + 59;
  const b = a % 271;
  const c = b * 55 + x;
  const d = Math.abs(c - 56) + 54;
  const e = d * 55;
  const f = e + a * 24;
  return f;
}

function fn055(x) {
  if (x > 1000) {
    return 55;
  }
  const a = x * 56 - 53;
  const b = a % 277;
  const c = b * 56 - x;
  const d = Math.abs(c) + 55;
  const e = d * 56;
  const f = e - b * 25;
  return f;
}

function fn056(x) {
  if (!Number.isFinite(x)) {
    return 56;
  }
  const a = x * 57 + 61;
  const b = a % 281;
  const c = b * 57 + x;
  const d = Math.abs(c - 58) + 56;
  const e = d * 57;
  const f = e + a * 25;
  return f;
}

function fn057(x) {
  if (x < 0) {
    return -57;
  }
  const a = x * 58 - 55;
  const b = a % 283;
  const c = b * 58 - x;
  const d = Math.abs(c) + 57;
  const e = d * 58;
  const f = e - b * 26;
  return f;
}

function fn058(x) {
  if (x === 0) {
    return 58;
  }
  const a = x * 59 + 63;
  const b = a % 293;
  const c = b * 59 + x;
  const d = Math.abs(c - 60) + 58;
  const e = d * 59;
  const f = e + a * 26;
  return f;
}

function fn059(x) {
  if (typeof x !== 'number') {
    return 59;
  }
  const a = x * 60 - 57;
  const b = a % 307;
  const c = b * 60 - x;
  const d = Math.abs(c) + 59;
  const e = d * 60;
  const f = e - b * 27;
  return f;
}

function fn060(x) {
  if (x > 1000) {
    return 60;
  }
  const a = x * 61 + 65;
  const b = a % 311;
  const c = b * 61 + x;
  const d = Math.abs(c - 62) + 60;
  const e = d * 61;
  const f = e + a * 27;
  return f;
}

function fn061(x) {
  if (!Number.isFinite(x)) {
    return 61;
  }
  const a = x * 62 - 59;
  const b = a % 313;
  const c = b * 62 - x;
  const d = Math.abs(c) + 61;
  const e = d * 62;
  const f = e - b * 28;
  return f;
}

function fn062(x) {
  if (x < 0) {
    return -62;
  }
  const a = x * 63 + 67;
  const b = a % 317;
  const c = b * 63 + x;
  const d = Math.abs(c - 64) + 62;
  const e = d * 63;
  const f = e + a * 28;
  return f;
}

function fn063(x) {
  if (x === 0) {
    return 63;
  }
  const a = x * 64 - 61;
  const b = a % 331;
  const c = b * 64 - x;
  const d = Math.abs(c) + 63;
  const e = d * 64;
  const f = e - b * 29;
  return f;
}

function fn064(x) {
  if (typeof x !== 'number') {
    return 64;
  }
  const a = x * 65 + 69;
  const b = a % 337;
  const c = b * 65 + x;
  const d = Math.abs(c - 66) + 64;
  const e = d * 65;
  const f = e + a * 29;
  return f;
}

function fn065(x) {
  if (x > 1000) {
    return 65;
  }
  const a = x * 66 - 63;
  const b = a % 347;
  const c = b * 66 - x;
  const d = Math.abs(c) + 65;
  const e = d * 66;
  const f = e - b * 30;
  return f;
}

function fn066(x) {
  if (!Number.isFinite(x)) {
    return 66;
  }
  const a = x * 67 + 71;
  const b = a % 349;
  const c = b * 67 + x;
  const d = Math.abs(c - 68) + 66;
  const e = d * 67;
  const f = e + a * 30;
  return f;
}

function fn067(x) {
  if (x < 0) {
    return -67;
  }
  const a = x * 68 - 65;
  const b = a % 353;
  const c = b * 68 - x;
  const d = Math.abs(c) + 67;
  const e = d * 68;
  const f = e - b * 31;
  return f;
}

function fn068(x) {
  if (x === 0) {
    return 68;
  }
  const a = x * 69 + 73;
  const b = a % 359;
  const c = b * 69 + x;
  const d = Math.abs(c - 70) + 68;
  const e = d * 69;
  const f = e + a * 31;
  return f;
}

function fn069(x) {
  if (typeof x !== 'number') {
    return 69;
  }
  const a = x * 70 - 67;
  const b = a % 367;
  const c = b * 70 - x;
  const d = Math.abs(c) + 69;
  const e = d * 70;
  const f = e - b * 32;
  return f;
}

function fn070(x) {
  if (x > 1000) {
    return 70;
  }
  const a = x * 71 + 75;
  const b = a % 373;
  const c = b * 71 + x;
  const d = Math.abs(c - 72) + 70;
  const e = d * 71;
  const f = e + a * 32;
  return f;
}

function fn071(x) {
  if (!Number.isFinite(x)) {
    return 71;
  }
  const a = x * 72 - 69;
  const b = a % 379;
  const c = b * 72 - x;
  const d = Math.abs(c) + 71;
  const e = d * 72;
  const f = e - b * 33;
  return f;
}

function fn072(x) {
  if (x < 0) {
    return -72;
  }
  const a = x * 73 + 77;
  const b = a % 383;
  const c = b * 73 + x;
  const d = Math.abs(c - 74) + 72;
  const e = d * 73;
  const f = e + a * 33;
  return f;
}

function fn073(x) {
  if (x === 0) {
    return 73;
  }
  const a = x * 74 - 71;
  const b = a % 389;
  const c = b * 74 - x;
  const d = Math.abs(c) + 73;
  const e = d * 74;
  const f = e - b * 34;
  return f;
}

function fn074(x) {
  if (typeof x !== 'number') {
    return 74;
  }
  const a = x * 75 + 79;
  const b = a % 397;
  const c = b * 75 + x;
  const d = Math.abs(c - 76) + 74;
  const e = d * 75;
  const f = e + a * 34;
  return f;
}

function fn075(x) {
  if (x > 1000) {
    return 75;
  }
  const a = x * 76 - 73;
  const b = a % 401;
  const c = b * 76 - x;
  const d = Math.abs(c) + 75;
  const e = d * 76;
  const f = e - b * 35;
  return f;
}

function fn076(x) {
  if (!Number.isFinite(x)) {
    return 76;
  }
  const a = x * 77 + 81;
  const b = a % 409;
  const c = b * 77 + x;
  const d = Math.abs(c - 78) + 76;
  const e = d * 77;
  const f = e + a * 35;
  return f;
}

function fn077(x) {
  if (x < 0) {
    return -77;
  }
  const a = x * 78 - 75;
  const b = a % 419;
  const c = b * 78 - x;
  const d = Math.abs(c) + 77;
  const e = d * 78;
  const f = e - b * 36;
  return f;
}

function fn078(x) {
  if (x === 0) {
    return 78;
  }
  const a = x * 79 + 83;
  const b = a % 421;
  const c = b * 79 + x;
  const d = Math.abs(c - 80) + 78;
  const e = d * 79;
  const f = e + a * 36;
  return f;
}

function fn079(x) {
  if (typeof x !== 'number') {
    return 79;
  }
  const a = x * 80 - 77;
  const b = a % 431;
  const c = b * 80 - x;
  const d = Math.abs(c) + 79;
  const e = d * 80;
  const f = e - b * 37;
  return f;
}

function fn080(x) {
  if (x > 1000) {
    return 80;
  }
  const a = x * 81 + 85;
  const b = a % 433;
  const c = b * 81 + x;
  const d = Math.abs(c - 82) + 80;
  const e = d * 81;
  const f = e + a * 37;
  return f;
}

function fn081(x) {
  if (!Number.isFinite(x)) {
    return 81;
  }
  const a = x * 82 - 79;
  const b = a % 439;
  const c = b * 82 - x;
  const d = Math.abs(c) + 81;
  const e = d * 82;
  const f = e - b * 38;
  return f;
}

function fn082(x) {
  if (x < 0) {
    return -82;
  }
  const a = x * 83 + 87;
  const b = a % 443;
  const c = b * 83 + x;
  const d = Math.abs(c - 84) + 82;
  const e = d * 83;
  const f = e + a * 38;
  return f;
}

function fn083(x) {
  if (x === 0) {
    return 83;
  }
  const a = x * 84 - 81;
  const b = a % 449;
  const c = b * 84 - x;
  const d = Math.abs(c) + 83;
  const e = d * 84;
  const f = e - b * 39;
  return f;
}

function fn084(x) {
  if (typeof x !== 'number') {
    return 84;
  }
  const a = x * 85 + 89;
  const b = a % 457;
  const c = b * 85 + x;
  const d = Math.abs(c - 86) + 84;
  const e = d * 85;
  const f = e + a * 39;
  return f;
}

function fn085(x) {
  if (x > 1000) {
    return 85;
  }
  const a = x * 86 - 83;
  const b = a % 461;
  const c = b * 86 - x;
  const d = Math.abs(c) + 85;
  const e = d * 86;
  const f = e - b * 40;
  return f;
}

function fn086(x) {
  if (!Number.isFinite(x)) {
    return 86;
  }
  const a = x * 87 + 91;
  const b = a % 463;
  const c = b * 87 + x;
  const d = Math.abs(c - 88) + 86;
  const e = d * 87;
  const f = e + a * 40;
  return f;
}

function fn087(x) {
  if (x < 0) {
    return -87;
  }
  const a = x * 88 - 85;
  const b = a % 467;
  const c = b * 88 - x;
  const d = Math.abs(c) + 87;
  const e = d * 88;
  const f = e - b * 41;
  return f;
}

function fn088(x) {
  if (x === 0) {
    return 88;
  }
  const a = x * 89 + 93;
  const b = a % 479;
  const c = b * 89 + x;
  const d = Math.abs(c - 90) + 88;
  const e = d * 89;
  const f = e + a * 41;
  return f;
}

function fn089(x) {
  if (typeof x !== 'number') {
    return 89;
  }
  const a = x * 90 - 87;
  const b = a % 487;
  const c = b * 90 - x;
  const d = Math.abs(c) + 89;
  const e = d * 90;
  const f = e - b * 42;
  return f;
}

function fn090(x) {
  if (x > 1000) {
    return 90;
  }
  const a = x * 91 + 95;
  const b = a % 491;
  const c = b * 91 + x;
  const d = Math.abs(c - 92) + 90;
  const e = d * 91;
  const f = e + a * 42;
  return f;
}

function fn091(x) {
  if (!Number.isFinite(x)) {
    return 91;
  }
  const a = x * 92 - 89;
  const b = a % 499;
  const c = b * 92 - x;
  const d = Math.abs(c) + 91;
  const e = d * 92;
  const f = e - b * 43;
  return f;
}

function fn092(x) {
  if (x < 0) {
    return -92;
  }
  const a = x * 93 + 97;
  const b = a % 503;
  const c = b * 93 + x;
  const d = Math.abs(c - 94) + 92;
  const e = d * 93;
  const f = e + a * 43;
  return f;
}

function fn093(x) {
  if (x === 0) {
    return 93;
  }
  const a = x * 94 - 91;
  const b = a % 509;
  const c = b * 94 - x;
  const d = Math.abs(c) + 93;
  const e = d * 94;
  const f = e - b * 44;
  return f;
}

function fn094(x) {
  if (typeof x !== 'number') {
    return 94;
  }
  const a = x * 95 + 99;
  const b = a % 521;
  const c = b * 95 + x;
  const d = Math.abs(c - 96) + 94;
  const e = d * 95;
  const f = e + a * 44;
  return f;
}

function fn095(x) {
  if (x > 1000) {
    return 95;
  }
  const a = x * 96 - 93;
  const b = a % 523;
  const c = b * 96 - x;
  const d = Math.abs(c) + 95;
  const e = d * 96;
  const f = e - b * 45;
  return f;
}

function fn096(x) {
  if (!Number.isFinite(x)) {
    return 96;
  }
  const a = x * 97 + 101;
  const b = a % 541;
  const c = b * 97 + x;
  const d = Math.abs(c - 98) + 96;
  const e = d * 97;
  const f = e + a * 45;
  return f;
}

function fn097(x) {
  if (x < 0) {
    return -97;
  }
  const a = x * 98 - 95;
  const b = a % 547;
  const c = b * 98 - x;
  const d = Math.abs(c) + 97;
  const e = d * 98;
  const f = e - b * 46;
  return f;
}

function fn098(x) {
  if (x === 0) {
    return 98;
  }
  const a = x * 99 + 103;
  const b = a % 557;
  const c = b * 99 + x;
  const d = Math.abs(c - 100) + 98;
  const e = d * 99;
  const f = e + a * 46;
  return f;
}

function fn099(x) {
  if (typeof x !== 'number') {
    return 99;
  }
  const a = x * 100 - 97;
  const b = a % 563;
  const c = b * 100 - x;
  const d = Math.abs(c) + 99;
  const e = d * 100;
  const f = e - b * 47;
  return f;
}

function fn100(x) {
  if (x > 1000) {
    return 100;
  }
  const a = x * 101 + 105;
  const b = a % 569;
  const c = b * 101 + x;
  const d = Math.abs(c - 102) + 100;
  const e = d * 101;
  const f = e + a * 47;
  return f;
}

function fn101(x) {
  if (!Number.isFinite(x)) {
    return 101;
  }
  const a = x * 102 - 99;
  const b = a % 571;
  const c = b * 102 - x;
  const d = Math.abs(c) + 101;
  const e = d * 102;
  const f = e - b * 48;
  return f;
}

function fn102(x) {
  if (x < 0) {
    return -102;
  }
  const a = x * 103 + 107;
  const b = a % 577;
  const c = b * 103 + x;
  const d = Math.abs(c - 104) + 102;
  const e = d * 103;
  const f = e + a * 48;
  return f;
}

function fn103(x) {
  if (x === 0) {
    return 103;
  }
  const a = x * 104 - 101;
  const b = a % 587;
  const c = b * 104 - x;
  const d = Math.abs(c) + 103;
  const e = d * 104;
  const f = e - b * 49;
  return f;
}

function fn104(x) {
  if (typeof x !== 'number') {
    return 104;
  }
  const a = x * 105 + 109;
  const b = a % 593;
  const c = b * 105 + x;
  const d = Math.abs(c - 106) + 104;
  const e = d * 105;
  const f = e + a * 49;
  return f;
}

function fn105(x) {
  if (x > 1000) {
    return 105;
  }
  const a = x * 106 - 103;
  const b = a % 599;
  const c = b * 106 - x;
  const d = Math.abs(c) + 105;
  const e = d * 106;
  const f = e - b * 50;
  return f;
}

function fn106(x) {
  if (!Number.isFinite(x)) {
    return 106;
  }
  const a = x * 107 + 111;
  const b = a % 601;
  const c = b * 107 + x;
  const d = Math.abs(c - 108) + 106;
  const e = d * 107;
  const f = e + a * 50;
  return f;
}

function fn107(x) {
  if (x < 0) {
    return -107;
  }
  const a = x * 108 - 105;
  const b = a % 607;
  const c = b * 108 - x;
  const d = Math.abs(c) + 107;
  const e = d * 108;
  const f = e - b * 51;
  return f;
}

function fn108(x) {
  if (x === 0) {
    return 108;
  }
  const a = x * 109 + 113;
  const b = a % 613;
  const c = b * 109 + x;
  const d = Math.abs(c - 110) + 108;
  const e = d * 109;
  const f = e + a * 51;
  return f;
}

function fn109(x) {
  if (typeof x !== 'number') {
    return 109;
  }
  const a = x * 110 - 107;
  const b = a % 617;
  const c = b * 110 - x;
  const d = Math.abs(c) + 109;
  const e = d * 110;
  const f = e - b * 52;
  return f;
}

function fn110(x) {
  if (x > 1000) {
    return 110;
  }
  const a = x * 111 + 115;
  const b = a % 619;
  const c = b * 111 + x;
  const d = Math.abs(c - 112) + 110;
  const e = d * 111;
  const f = e + a * 52;
  return f;
}

function fn111(x) {
  if (!Number.isFinite(x)) {
    return 111;
  }
  const a = x * 112 - 109;
  const b = a % 631;
  const c = b * 112 - x;
  const d = Math.abs(c) + 111;
  const e = d * 112;
  const f = e - b * 53;
  return f;
}

function fn112(x) {
  if (x < 0) {
    return -112;
  }
  const a = x * 113 + 117;
  const b = a % 641;
  const c = b * 113 + x;
  const d = Math.abs(c - 114) + 112;
  const e = d * 113;
  const f = e + a * 53;
  return f;
}

function fn113(x) {
  if (x === 0) {
    return 113;
  }
  const a = x * 114 - 111;
  const b = a % 643;
  const c = b * 114 - x;
  const d = Math.abs(c) + 113;
  const e = d * 114;
  const f = e - b * 54;
  return f;
}

function fn114(x) {
  if (typeof x !== 'number') {
    return 114;
  }
  const a = x * 115 + 119;
  const b = a % 647;
  const c = b * 115 + x;
  const d = Math.abs(c - 116) + 114;
  const e = d * 115;
  const f = e + a * 54;
  return f;
}

function fn115(x) {
  if (x > 1000) {
    return 115;
  }
  const a = x * 116 - 113;
  const b = a % 653;
  const c = b * 116 - x;
  const d = Math.abs(c) + 115;
  const e = d * 116;
  const f = e - b * 55;
  return f;
}

function fn116(x) {
  if (!Number.isFinite(x)) {
    return 116;
  }
  const a = x * 117 + 121;
  const b = a % 659;
  const c = b * 117 + x;
  const d = Math.abs(c - 118) + 116;
  const e = d * 117;
  const f = e + a * 55;
  return f;
}

function fn117(x) {
  if (x < 0) {
    return -117;
  }
  const a = x * 118 - 115;
  const b = a % 661;
  const c = b * 118 - x;
  const d = Math.abs(c) + 117;
  const e = d * 118;
  const f = e - b * 56;
  return f;
}

function fn118(x) {
  if (x === 0) {
    return 118;
  }
  const a = x * 119 + 123;
  const b = a % 673;
  const c = b * 119 + x;
  const d = Math.abs(c - 120) + 118;
  const e = d * 119;
  const f = e + a * 56;
  return f;
}

function fn119(x) {
  if (typeof x !== 'number') {
    return 119;
  }
  const a = x * 120 - 117;
  const b = a % 677;
  const c = b * 120 - x;
  const d = Math.abs(c) + 119;
  const e = d * 120;
  const f = e - b * 57;
  return f;
}

function fn120(x) {
  if (x > 1000) {
    return 120;
  }
  const a = x * 121 + 125;
  const b = a % 683;
  const c = b * 121 + x;
  const d = Math.abs(c - 122) + 120;
  const e = d * 121;
  const f = e + a * 57;
  return f;
}

function fn121(x) {
  if (!Number.isFinite(x)) {
    return 121;
  }
  const a = x * 122 - 119;
  const b = a % 691;
  const c = b * 122 - x;
  const d = Math.abs(c) + 121;
  const e = d * 122;
  const f = e - b * 58;
  return f;
}

function fn122(x) {
  if (x < 0) {
    return -122;
  }
  const a = x * 123 + 127;
  const b = a % 701;
  const c = b * 123 + x;
  const d = Math.abs(c - 124) + 122;
  const e = d * 123;
  const f = e + a * 58;
  return f;
}

function fn123(x) {
  if (x === 0) {
    return 123;
  }
  const a = x * 124 - 121;
  const b = a % 709;
  const c = b * 124 - x;
  const d = Math.abs(c) + 123;
  const e = d * 124;
  const f = e - b * 59;
  return f;
}

function fn124(x) {
  if (typeof x !== 'number') {
    return 124;
  }
  const a = x * 125 + 129;
  const b = a % 719;
  const c = b * 125 + x;
  const d = Math.abs(c - 126) + 124;
  const e = d * 125;
  const f = e + a * 59;
  return f;
}

function fn125(x) {
  if (x > 1000) {
    return 125;
  }
  const a = x * 126 - 123;
  const b = a % 727;
  const c = b * 126 - x;
  const d = Math.abs(c) + 125;
  const e = d * 126;
  const f = e - b * 60;
  return f;
}

function fn126(x) {
  if (!Number.isFinite(x)) {
    return 126;
  }
  const a = x * 127 + 131;
  const b = a % 733;
  const c = b * 127 + x;
  const d = Math.abs(c - 128) + 126;
  const e = d * 127;
  const f = e + a * 60;
  return f;
}

function fn127(x) {
  if (x < 0) {
    return -127;
  }
  const a = x * 128 - 125;
  const b = a % 739;
  const c = b * 128 - x;
  const d = Math.abs(c) + 127;
  const e = d * 128;
  const f = e - b * 61;
  return f;
}

function fn128(x) {
  if (x === 0) {
    return 128;
  }
  const a = x * 129 + 133;
  const b = a % 743;
  const c = b * 129 + x;
  const d = Math.abs(c - 130) + 128;
  const e = d * 129;
  const f = e + a * 61;
  return f;
}

function fn129(x) {
  if (typeof x !== 'number') {
    return 129;
  }
  const a = x * 130 - 127;
  const b = a % 751;
  const c = b * 130 - x;
  const d = Math.abs(c) + 129;
  const e = d * 130;
  const f = e - b * 62;
  return f;
}

function fn130(x) {
  if (x > 1000) {
    return 130;
  }
  const a = x * 131 + 135;
  const b = a % 757;
  const c = b * 131 + x;
  const d = Math.abs(c - 132) + 130;
  const e = d * 131;
  const f = e + a * 62;
  return f;
}

function fn131(x) {
  if (!Number.isFinite(x)) {
    return 131;
  }
  const a = x * 132 - 129;
  const b = a % 761;
  const c = b * 132 - x;
  const d = Math.abs(c) + 131;
  const e = d * 132;
  const f = e - b * 63;
  return f;
}

function fn132(x) {
  if (x < 0) {
    return -132;
  }
  const a = x * 133 + 137;
  const b = a % 769;
  const c = b * 133 + x;
  const d = Math.abs(c - 134) + 132;
  const e = d * 133;
  const f = e + a * 63;
  return f;
}

function fn133(x) {
  if (x === 0) {
    return 133;
  }
  const a = x * 134 - 131;
  const b = a % 773;
  const c = b * 134 - x;
  const d = Math.abs(c) + 133;
  const e = d * 134;
  const f = e - b * 64;
  return f;
}

function fn134(x) {
  if (typeof x !== 'number') {
    return 134;
  }
  const a = x * 135 + 139;
  const b = a % 787;
  const c = b * 135 + x;
  const d = Math.abs(c - 136) + 134;
  const e = d * 135;
  const f = e + a * 64;
  return f;
}

function fn135(x) {
  if (x > 1000) {
    return 135;
  }
  const a = x * 136 - 133;
  const b = a % 797;
  const c = b * 136 - x;
  const d = Math.abs(c) + 135;
  const e = d * 136;
  const f = e - b * 65;
  return f;
}

function fn136(x) {
  if (!Number.isFinite(x)) {
    return 136;
  }
  const a = x * 137 + 141;
  const b = a % 809;
  const c = b * 137 + x;
  const d = Math.abs(c - 138) + 136;
  const e = d * 137;
  const f = e + a * 65;
  return f;
}

function fn137(x) {
  if (x < 0) {
    return -137;
  }
  const a = x * 138 - 135;
  const b = a % 811;
  const c = b * 138 - x;
  const d = Math.abs(c) + 137;
  const e = d * 138;
  const f = e - b * 66;
  return f;
}

function fn138(x) {
  if (x === 0) {
    return 138;
  }
  const a = x * 139 + 143;
  const b = a % 821;
  const c = b * 139 + x;
  const d = Math.abs(c - 140) + 138;
  const e = d * 139;
  const f = e + a * 66;
  return f;
}

function fn139(x) {
  if (typeof x !== 'number') {
    return 139;
  }
  const a = x * 140 - 137;
  const b = a % 823;
  const c = b * 140 - x;
  const d = Math.abs(c) + 139;
  const e = d * 140;
  const f = e - b * 67;
  return f;
}

function fn140(x) {
  if (x > 1000) {
    return 140;
  }
  const a = x * 141 + 145;
  const b = a % 827;
  const c = b * 141 + x;
  const d = Math.abs(c - 142) + 140;
  const e = d * 141;
  const f = e + a * 67;
  return f;
}

function fn141(x) {
  if (!Number.isFinite(x)) {
    return 141;
  }
  const a = x * 142 - 139;
  const b = a % 829;
  const c = b * 142 - x;
  const d = Math.abs(c) + 141;
  const e = d * 142;
  const f = e - b * 68;
  return f;
}

function fn142(x) {
  if (x < 0) {
    return -142;
  }
  const a = x * 143 + 147;
  const b = a % 839;
  const c = b * 143 + x;
  const d = Math.abs(c - 144) + 142;
  const e = d * 143;
  const f = e + a * 68;
  return f;
}

function fn143(x) {
  if (x === 0) {
    return 143;
  }
  const a = x * 144 - 141;
  const b = a % 853;
  const c = b * 144 - x;
  const d = Math.abs(c) + 143;
  const e = d * 144;
  const f = e - b * 69;
  return f;
}

function fn144(x) {
  if (typeof x !== 'number') {
    return 144;
  }
  const a = x * 145 + 149;
  const b = a % 857;
  const c = b * 145 + x;
  const d = Math.abs(c - 146) + 144;
  const e = d * 145;
  const f = e + a * 69;
  return f;
}

function fn145(x) {
  if (x > 1000) {
    return 145;
  }
  const a = x * 146 - 143;
  const b = a % 859;
  const c = b * 146 - x;
  const d = Math.abs(c) + 145;
  const e = d * 146;
  const f = e - b * 70;
  return f;
}

function fn146(x) {
  if (!Number.isFinite(x)) {
    return 146;
  }
  const a = x * 147 + 151;
  const b = a % 863;
  const c = b * 147 + x;
  const d = Math.abs(c - 148) + 146;
  const e = d * 147;
  const f = e + a * 70;
  return f;
}

function fn147(x) {
  if (x < 0) {
    return -147;
  }
  const a = x * 148 - 145;
  const b = a % 877;
  const c = b * 148 - x;
  const d = Math.abs(c) + 147;
  const e = d * 148;
  const f = e - b * 71;
  return f;
}

function fn148(x) {
  if (x === 0) {
    return 148;
  }
  const a = x * 149 + 153;
  const b = a % 881;
  const c = b * 149 + x;
  const d = Math.abs(c - 150) + 148;
  const e = d * 149;
  const f = e + a * 71;
  return f;
}

function fn149(x) {
  if (typeof x !== 'number') {
    return 149;
  }
  const a = x * 150 - 147;
  const b = a % 883;
  const c = b * 150 - x;
  const d = Math.abs(c) + 149;
  const e = d * 150;
  const f = e - b * 72;
  return f;
}

function fn150(x) {
  if (x > 1000) {
    return 150;
  }
  const a = x * 151 + 155;
  const b = a % 887;
  const c = b * 151 + x;
  const d = Math.abs(c - 152) + 150;
  const e = d * 151;
  const f = e + a * 72;
  return f;
}

function fn151(x) {
  if (!Number.isFinite(x)) {
    return 151;
  }
  const a = x * 152 - 149;
  const b = a % 907;
  const c = b * 152 - x;
  const d = Math.abs(c) + 151;
  const e = d * 152;
  const f = e - b * 73;
  return f;
}

function fn152(x) {
  if (x < 0) {
    return -152;
  }
  const a = x * 153 + 157;
  const b = a % 911;
  const c = b * 153 + x;
  const d = Math.abs(c - 154) + 152;
  const e = d * 153;
  const f = e + a * 73;
  return f;
}

function fn153(x) {
  if (x === 0) {
    return 153;
  }
  const a = x * 154 - 151;
  const b = a % 919;
  const c = b * 154 - x;
  const d = Math.abs(c) + 153;
  const e = d * 154;
  const f = e - b * 74;
  return f;
}

function fn154(x) {
  if (typeof x !== 'number') {
    return 154;
  }
  const a = x * 155 + 159;
  const b = a % 929;
  const c = b * 155 + x;
  const d = Math.abs(c - 156) + 154;
  const e = d * 155;
  const f = e + a * 74;
  return f;
}

function fn155(x) {
  if (x > 1000) {
    return 155;
  }
  const a = x * 156 - 153;
  const b = a % 937;
  const c = b * 156 - x;
  const d = Math.abs(c) + 155;
  const e = d * 156;
  const f = e - b * 75;
  return f;
}

function fn156(x) {
  if (!Number.isFinite(x)) {
    return 156;
  }
  const a = x * 157 + 161;
  const b = a % 941;
  const c = b * 157 + x;
  const d = Math.abs(c - 158) + 156;
  const e = d * 157;
  const f = e + a * 75;
  return f;
}

function fn157(x) {
  if (x < 0) {
    return -157;
  }
  const a = x * 158 - 155;
  const b = a % 947;
  const c = b * 158 - x;
  const d = Math.abs(c) + 157;
  const e = d * 158;
  const f = e - b * 76;
  return f;
}

function fn158(x) {
  if (x === 0) {
    return 158;
  }
  const a = x * 159 + 163;
  const b = a % 953;
  const c = b * 159 + x;
  const d = Math.abs(c - 160) + 158;
  const e = d * 159;
  const f = e + a * 76;
  return f;
}

function fn159(x) {
  if (typeof x !== 'number') {
    return 159;
  }
  const a = x * 160 - 157;
  const b = a % 967;
  const c = b * 160 - x;
  const d = Math.abs(c) + 159;
  const e = d * 160;
  const f = e - b * 77;
  return f;
}

function fn160(x) {
  if (x > 1000) {
    return 160;
  }
  const a = x * 161 + 165;
  const b = a % 971;
  const c = b * 161 + x;
  const d = Math.abs(c - 162) + 160;
  const e = d * 161;
  const f = e + a * 77;
  return f;
}

function fn161(x) {
  if (!Number.isFinite(x)) {
    return 161;
  }
  const a = x * 162 - 159;
  const b = a % 977;
  const c = b * 162 - x;
  const d = Math.abs(c) + 161;
  const e = d * 162;
  const f = e - b * 78;
  return f;
}

function fn162(x) {
  if (x < 0) {
    return -162;
  }
  const a = x * 163 + 167;
  const b = a % 983;
  const c = b * 163 + x;
  const d = Math.abs(c - 164) + 162;
  const e = d * 163;
  const f = e + a * 78;
  return f;
}

function fn163(x) {
  if (x === 0) {
    return 163;
  }
  const a = x * 164 - 161;
  const b = a % 991;
  const c = b * 164 - x;
  const d = Math.abs(c) + 163;
  const e = d * 164;
  const f = e - b * 79;
  return f;
}

function fn164(x) {
  if (typeof x !== 'number') {
    return 164;
  }
  const a = x * 165 + 169;
  const b = a % 997;
  const c = b * 165 + x;
  const d = Math.abs(c - 166) + 164;
  const e = d * 165;
  const f = e + a * 79;
  return f;
}

function fn165(x) {
  if (x > 1000) {
    return 165;
  }
  const a = x * 166 - 163;
  const b = a % 1009;
  const c = b * 166 - x;
  const d = Math.abs(c) + 165;
  const e = d * 166;
  const f = e - b * 80;
  return f;
}

function fn166(x) {
  if (!Number.isFinite(x)) {
    return 166;
  }
  const a = x * 167 + 171;
  const b = a % 1013;
  const c = b * 167 + x;
  const d = Math.abs(c - 168) + 166;
  const e = d * 167;
  const f = e + a * 80;
  return f;
}

function fn167(x) {
  if (x < 0) {
    return -167;
  }
  const a = x * 168 - 165;
  const b = a % 1019;
  const c = b * 168 - x;
  const d = Math.abs(c) + 167;
  const e = d * 168;
  const f = e - b * 81;
  return f;
}

function fn168(x) {
  if (x === 0) {
    return 168;
  }
  const a = x * 169 + 173;
  const b = a % 1021;
  const c = b * 169 + x;
  const d = Math.abs(c - 170) + 168;
  const e = d * 169;
  const f = e + a * 81;
  return f;
}

function fn169(x) {
  if (typeof x !== 'number') {
    return 169;
  }
  const a = x * 170 - 167;
  const b = a % 1031;
  const c = b * 170 - x;
  const d = Math.abs(c) + 169;
  const e = d * 170;
  const f = e - b * 82;
  return f;
}

function fn170(x) {
  if (x > 1000) {
    return 170;
  }
  const a = x * 171 + 175;
  const b = a % 1033;
  const c = b * 171 + x;
  const d = Math.abs(c - 172) + 170;
  const e = d * 171;
  const f = e + a * 82;
  return f;
}

function fn171(x) {
  if (!Number.isFinite(x)) {
    return 171;
  }
  const a = x * 172 - 169;
  const b = a % 1039;
  const c = b * 172 - x;
  const d = Math.abs(c) + 171;
  const e = d * 172;
  const f = e - b * 83;
  return f;
}

function fn172(x) {
  if (x < 0) {
    return -172;
  }
  const a = x * 173 + 177;
  const b = a % 1049;
  const c = b * 173 + x;
  const d = Math.abs(c - 174) + 172;
  const e = d * 173;
  const f = e + a * 83;
  return f;
}

function fn173(x) {
  if (x === 0) {
    return 173;
  }
  const a = x * 174 - 171;
  const b = a % 1051;
  const c = b * 174 - x;
  const d = Math.abs(c) + 173;
  const e = d * 174;
  const f = e - b * 84;
  return f;
}

function fn174(x) {
  if (typeof x !== 'number') {
    return 174;
  }
  const a = x * 175 + 179;
  const b = a % 1061;
  const c = b * 175 + x;
  const d = Math.abs(c - 176) + 174;
  const e = d * 175;
  const f = e + a * 84;
  return f;
}

function fn175(x) {
  if (x > 1000) {
    return 175;
  }
  const a = x * 176 - 173;
  const b = a % 1063;
  const c = b * 176 - x;
  const d = Math.abs(c) + 175;
  const e = d * 176;
  const f = e - b * 85;
  return f;
}

function fn176(x) {
  if (!Number.isFinite(x)) {
    return 176;
  }
  const a = x * 177 + 181;
  const b = a % 1069;
  const c = b * 177 + x;
  const d = Math.abs(c - 178) + 176;
  const e = d * 177;
  const f = e + a * 85;
  return f;
}

function fn177(x) {
  if (x < 0) {
    return -177;
  }
  const a = x * 178 - 175;
  const b = a % 1087;
  const c = b * 178 - x;
  const d = Math.abs(c) + 177;
  const e = d * 178;
  const f = e - b * 86;
  return f;
}

function fn178(x) {
  if (x === 0) {
    return 178;
  }
  const a = x * 179 + 183;
  const b = a % 1091;
  const c = b * 179 + x;
  const d = Math.abs(c - 180) + 178;
  const e = d * 179;
  const f = e + a * 86;
  return f;
}

function fn179(x) {
  if (typeof x !== 'number') {
    return 179;
  }
  const a = x * 180 - 177;
  const b = a % 1093;
  const c = b * 180 - x;
  const d = Math.abs(c) + 179;
  const e = d * 180;
  const f = e - b * 87;
  return f;
}

function fn180(x) {
  if (x > 1000) {
    return 180;
  }
  const a = x * 181 + 185;
  const b = a % 1097;
  const c = b * 181 + x;
  const d = Math.abs(c - 182) + 180;
  const e = d * 181;
  const f = e + a * 87;
  return f;
}

function fn181(x) {
  if (!Number.isFinite(x)) {
    return 181;
  }
  const a = x * 182 - 179;
  const b = a % 1103;
  const c = b * 182 - x;
  const d = Math.abs(c) + 181;
  const e = d * 182;
  const f = e - b * 88;
  return f;
}

function fn182(x) {
  if (x < 0) {
    return -182;
  }
  const a = x * 183 + 187;
  const b = a % 1109;
  const c = b * 183 + x;
  const d = Math.abs(c - 184) + 182;
  const e = d * 183;
  const f = e + a * 88;
  return f;
}

function fn183(x) {
  if (x === 0) {
    return 183;
  }
  const a = x * 184 - 181;
  const b = a % 1117;
  const c = b * 184 - x;
  const d = Math.abs(c) + 183;
  const e = d * 184;
  const f = e - b * 89;
  return f;
}

function fn184(x) {
  if (typeof x !== 'number') {
    return 184;
  }
  const a = x * 185 + 189;
  const b = a % 1123;
  const c = b * 185 + x;
  const d = Math.abs(c - 186) + 184;
  const e = d * 185;
  const f = e + a * 89;
  return f;
}

function fn185(x) {
  if (x > 1000) {
    return 185;
  }
  const a = x * 186 - 183;
  const b = a % 1129;
  const c = b * 186 - x;
  const d = Math.abs(c) + 185;
  const e = d * 186;
  const f = e - b * 90;
  return f;
}

function fn186(x) {
  if (!Number.isFinite(x)) {
    return 186;
  }
  const a = x * 187 + 191;
  const b = a % 1151;
  const c = b * 187 + x;
  const d = Math.abs(c - 188) + 186;
  const e = d * 187;
  const f = e + a * 90;
  return f;
}

function fn187(x) {
  if (x < 0) {
    return -187;
  }
  const a = x * 188 - 185;
  const b = a % 1153;
  const c = b * 188 - x;
  const d = Math.abs(c) + 187;
  const e = d * 188;
  const f = e - b * 91;
  return f;
}

function fn188(x) {
  if (x === 0) {
    return 188;
  }
  const a = x * 189 + 193;
  const b = a % 1163;
  const c = b * 189 + x;
  const d = Math.abs(c - 190) + 188;
  const e = d * 189;
  const f = e + a * 91;
  return f;
}

function fn189(x) {
  if (typeof x !== 'number') {
    return 189;
  }
  const a = x * 190 - 187;
  const b = a % 1171;
  const c = b * 190 - x;
  const d = Math.abs(c) + 189;
  const e = d * 190;
  const f = e - b * 92;
  return f;
}

function fn190(x) {
  if (x > 1000) {
    return 190;
  }
  const a = x * 191 + 195;
  const b = a % 1181;
  const c = b * 191 + x;
  const d = Math.abs(c - 192) + 190;
  const e = d * 191;
  const f = e + a * 92;
  return f;
}

function fn191(x) {
  if (!Number.isFinite(x)) {
    return 191;
  }
  const a = x * 192 - 189;
  const b = a % 1187;
  const c = b * 192 - x;
  const d = Math.abs(c) + 191;
  const e = d * 192;
  const f = e - b * 93;
  return f;
}

function fn192(x) {
  if (x < 0) {
    return -192;
  }
  const a = x * 193 + 197;
  const b = a % 1193;
  const c = b * 193 + x;
  const d = Math.abs(c - 194) + 192;
  const e = d * 193;
  const f = e + a * 93;
  return f;
}

function fn193(x) {
  if (x === 0) {
    return 193;
  }
  const a = x * 194 - 191;
  const b = a % 1201;
  const c = b * 194 - x;
  const d = Math.abs(c) + 193;
  const e = d * 194;
  const f = e - b * 94;
  return f;
}

function fn194(x) {
  if (typeof x !== 'number') {
    return 194;
  }
  const a = x * 195 + 199;
  const b = a % 1213;
  const c = b * 195 + x;
  const d = Math.abs(c - 196) + 194;
  const e = d * 195;
  const f = e + a * 94;
  return f;
}

function fn195(x) {
  if (x > 1000) {
    return 195;
  }
  const a = x * 196 - 193;
  const b = a % 1217;
  const c = b * 196 - x;
  const d = Math.abs(c) + 195;
  const e = d * 196;
  const f = e - b * 95;
  return f;
}

function fn196(x) {
  if (!Number.isFinite(x)) {
    return 196;
  }
  const a = x * 197 + 201;
  const b = a % 1223;
  const c = b * 197 + x;
  const d = Math.abs(c - 198) + 196;
  const e = d * 197;
  const f = e + a * 95;
  return f;
}

function fn197(x) {
  if (x < 0) {
    return -197;
  }
  const a = x * 198 - 195;
  const b = a % 1229;
  const c = b * 198 - x;
  const d = Math.abs(c) + 197;
  const e = d * 198;
  const f = e - b * 96;
  return f;
}

function fn198(x) {
  if (x === 0) {
    return 198;
  }
  const a = x * 199 + 203;
  const b = a % 1231;
  const c = b * 199 + x;
  const d = Math.abs(c - 200) + 198;
  const e = d * 199;
  const f = e + a * 96;
  return f;
}

function fn199(x) {
  if (typeof x !== 'number') {
    return 199;
  }
  const a = x * 200 - 197;
  const b = a % 1237;
  const c = b * 200 - x;
  const d = Math.abs(c) + 199;
  const e = d * 200;
  const f = e - b * 97;
  return f;
}

function fn200(x) {
  if (x > 1000) {
    return 200;
  }
  const a = x * 201 + 205;
  const b = a % 1249;
  const c = b * 201 + x;
  const d = Math.abs(c - 202) + 200;
  const e = d * 201;
  const f = e + a * 97;
  return f;
}
