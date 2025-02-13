/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */

/** @type {import("next").NextConfig} */
const config = {
    images: {
        domains: ["utfs.io", "fo4ugc338q.ufs.sh"],
    },
};

export default config;
