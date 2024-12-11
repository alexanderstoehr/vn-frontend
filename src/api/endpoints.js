// Desc: All API endpoints are stored here - Documentation: https://api.veenotes.com/api/docs/

// Token Endpoints
export const postTokenEndpoint = "/auth/token/"
export const postVerifyTokenEndpoint = "/auth/token/verify/"
export const postRefreshTokenEndpoint = "/auth/token/refresh/"

// Registration Endpoints
export const postRegistrationEndpoint = "/auth/registration/"
export const patchRegistrationVerifyEndpoint = "/auth/registration/validation/"

// Password Reset Endpoints
export const passwordResetEndpoint = "/auth/password-reset/"
export const passwordResetVerifyEndpoint = "/auth/password-reset/validation/"

// Categories Endpoints
export const getAllCategoriesEndpoint = "/categories/"
export const getUsersCategoriesEndpoint = "/categories/user/"
export const postAttachCategoryEndpoint = (videoID) =>
    `/categories/attach/${videoID}/`

// Tags Endpoints
export const getUsersTagsEndpoint = "/tag/user/"
export const postAttachTagEndpoint = (videoID) => `/tag/attach/${videoID}/`
export const postDetachTagEndpoint = (videoID) => `/tag/detach/${videoID}/`

// Space Endpoints
export const getUsersSpacesEndpoint = "/space/"
export const postSpaceEndpoint = "/space/"
export const getSingleSpaceEndpoint = (spaceID) => `/space/${spaceID}/`
export const patchSingleSpaceEndpoint = (spaceID) => `/space/${spaceID}/`
export const deleteSingleSpaceEndpoint = (spaceID) => `/space/${spaceID}/`

// Video Endpoints
export const getUsersVideosEndpoint = "/video/"
export const postVideoEndpoint = "/video/"
export const getSingleVideoEndpoint = (videoID) => `/video/${videoID}/`
export const patchSingleVideoEndpoint = (videoID) => `/video/${videoID}/`
export const deleteSingleVideoEndpoint = (videoID) => `/video/${videoID}/`

// Note Endpoints
export const postNoteEndpoint = "/note/"
export const getSingleNoteEndpoint = (noteID) => `/note/${noteID}/`
export const patchSingleNoteEndpoint = (noteID) => `/note/${noteID}/`
export const deleteSingleNoteEndpoint = (noteID) => `/note/${noteID}/`
export const getAllNotesFromVideoEndpoint = (videoID) => `/notes/${videoID}/`
