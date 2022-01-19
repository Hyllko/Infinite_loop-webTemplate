import { includeBtn } from "./createBtn";
import { galleryImgMove, reviewImgMove } from "./gallery";
import { menuEvent } from "./clickEvents";
import { scrollChange } from "./scrollEvents";

// vlozenie noveho tlacitka pri mensiej sirke obrazovky
includeBtn(990);
includeBtn(650);

// zobrazenie noveho obrazka
reviewImgMove();
galleryImgMove();

// zobraznie/skrytie menu
menuEvent();
