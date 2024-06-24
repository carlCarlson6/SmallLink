"use server"

import { createSmallLinkAction } from "../createSmallLinkAction";
import { getShortLinkAction } from "../getShortLink";

export const queries = {
    getShorLink: getShortLinkAction,
}

export const commands = {
    createSmallLink: createSmallLinkAction,
}
