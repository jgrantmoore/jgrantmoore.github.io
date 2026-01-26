const nextConfig = {
  /**
   * Static Export
   *
   * Sets the build to static export so that we can
   * host from any static html hosting service.
   *
   * Limitations: https://nextjs.org/docs/pages/guides/static-exports
   */

  output: "export",
  basePath: '', // No basePath needed for user/org sites with custom domain
  images: {
    // Allows next/image to be used without 3rd party optimization service. - necessary for static export
    unoptimized: true,
  },
}
