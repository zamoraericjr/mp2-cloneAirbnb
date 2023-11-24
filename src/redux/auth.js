import { CHANGE_AUTH, CHANGE_TITLE, CHANGE_REG_HOME, CHANGE_CAT, CHANGE_IMG, CHANGE_PRICE, CHANGE_LIST, CHANGE_FILTER, CHANGE_EMAIL, CHANGE_NAME, CHANGE_PW, CHANGE_LOGGED, CHANGE_ERROR, CHANGE_INFO, CH_LAT, CH_LANG, CH_ADD, CH_MAP } from "./authStat";

export const handleAuthChange = (payload) => ({
    type: CHANGE_AUTH,
    payload,
})

export const handleTitleChange = (payload) => ({
    type: CHANGE_TITLE,
    payload,
})

export const handleRegHomeChange = (payload) => ({
    type: CHANGE_REG_HOME,
    payload,
})

export const handleCatChange = (payload) => ({
    type: CHANGE_CAT,
    payload,
})

export const handleImgChange = (payload) => ({
    type: CHANGE_IMG,
    payload,
})

export const handlePriceChange = (payload) => ({
    type: CHANGE_PRICE,
    payload,
})

export const handleListChange = (payload) => ({
    type: CHANGE_LIST,
    payload,
})

export const handleFilterChange = (payload) => ({
    type: CHANGE_FILTER,
    payload,
})

export const handleEmailChange = (payload) => ({
    type: CHANGE_EMAIL,
    payload,
})
export const handleNameChange = (payload) => ({
    type: CHANGE_NAME,
    payload,
})
export const handlePwChange = (payload) => ({
    type: CHANGE_PW,
    payload,
})
export const handleLoggedChange = (payload) => ({
    type: CHANGE_LOGGED,
    payload,
})

export const handleErrorChange = (payload) => ({
    type: CHANGE_ERROR,
    payload,
})

export const handleInfoChange = (payload) => ({
    type: CHANGE_INFO,
    payload,
})

export const handleLatChange = (payload) => ({
    type: CH_LAT,
    payload,
})

export const handleLngChange = (payload) => ({
    type: CH_LANG,
    payload,
})

export const handleAddChange = (payload) => ({
    type: CH_ADD,
    payload,
})

export const handleMapChange = (payload) => ({
    type: CH_MAP,
    payload,
})