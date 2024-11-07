
import { ItemType, ItemID } from "./consts";
import { ReactComponent as DefaultBody } from "./assets/body.svg";

import { ReactComponent as VomitMouth } from "./assets/mouth1.svg";
import { ReactComponent as TwinkleMouth } from "./assets/mouth2.svg";
import { ReactComponent as HeartMouth } from "./assets/mouth3.svg";

import { ReactComponent as DefaultEyes } from "./assets/eye1.svg";
import { ReactComponent as HappyEyes } from "./assets/eye2.svg";
import { ReactComponent as WinkEyes } from "./assets/eye3.svg";

const config = {
  category_order: [
    ItemType.Body,
    ItemType.Eyes,
    ItemType.Mouth,
  ],
  category_info: {
    [ItemType.Body]: {
      key: ItemType.Body,
      zIndex: 10,
      name: "Body",
      order: [ItemID.DefaultBody],
    },
    [ItemType.Eyes]: {
      key: ItemType.Eyes,
      zIndex: 20,
      name: "Eyes",
      order: [
        ItemID.DefaultEyes,
        ItemID.HappyEyes,
        ItemID.WinkEyes,
      ],
    },
    [ItemType.Mouth]: {
      key: ItemType.Mouth,
      zIndex: 20,
      name: "Mouth",
      order: [
        ItemID.VomitMouth,
        ItemID.TwinkleMouth,
        ItemID.HeartMouth,
      ],
    },
  },
  item_info: {
    [ItemID.DefaultBody]: {
      name: "Default",
      component: DefaultBody,
    },
    [ItemID.VomitMouth]: {
      name: "Vomit",
      component: VomitMouth,
    },
    [ItemID.TwinkleMouth]: {
      name: "Twinkle",
      component: TwinkleMouth,
    },
    [ItemID.HeartMouth]: {
      name: "Heart",
      component: HeartMouth,
    },
    [ItemID.DefaultEyes]: {
      name: "Default",
      component: DefaultEyes,
    },
    [ItemID.HappyEyes]: {
      name: "Happy",
      component: HappyEyes,
    },
    [ItemID.WinkEyes]: {
      name: "Wink",
      component: WinkEyes,
    },
  },
};

export default config;
