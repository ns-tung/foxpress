const THUMBNAIL = "140x84";
const SMALL_SIZE = "300X180";
const MEDIUM_SIZE = "500x300";
const LARGE_SIZE = "680x408";
const FULL_SIZE = "900x540";
const regex = new RegExp(`(${THUMBNAIL}|${SMALL_SIZE}|${MEDIUM_SIZE}|${LARGE_SIZE}|${FULL_SIZE})`);

const formatSrc = (src) => {
    let { origin, pathname } = new URL(src);
    if(origin.includes('s1.vnecdn.net')) {
        return src;
    }

    if(!pathname.match(regex)) {
        origin = origin.replace(/(:\/\/i1|:\/\/vcdn1)/, "://i");
        pathname = pathname.replace(".jpg", `_${THUMBNAIL}.jpg`);
        return `${origin}${pathname}`;
    }
    return src;
}

const toThumbnail = (src) => {
    src = formatSrc(src);
    return src.replace(regex, THUMBNAIL);
}

const toSmall = (src) => {
    src = formatSrc(src);
    return src.replace(regex, SMALL_SIZE);
}

const toMedium = (src) => {
    src = formatSrc(src);
    return src.replace(regex, MEDIUM_SIZE);
}

const toLarge = (src) => {
    src = formatSrc(src);
    return src.replace(regex, LARGE_SIZE);
}

const toFull = (src) => {
    src = formatSrc(src);
    return src.replace(regex, FULL_SIZE);
}

export default { toThumbnail, toSmall, toMedium, toLarge, toFull };