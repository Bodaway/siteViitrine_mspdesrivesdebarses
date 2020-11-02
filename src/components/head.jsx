import React from "react"
import { Helmet } from "react-helmet"

export function Head({ data }) {
  return (
    <Helmet
      title="Maison de santé des rives de barse"
      meta={[
        {
          name: "description",
          content:
            "Site vitrine de la maison de santé des rives de barse à vendeuvre sur barse",
        },
        {
          name: "keywords",
          content:
            "médecin, maison de santé, vendeuvre, vendeuvre sur barse, rives de barse",
        },
      ]}
      link={[
        {
          // Bootstrap
          rel: "stylesheet",
          href:
            "https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css",
          integrity:
            "sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh",
          crossorigin: "anonymous",
        },
      ]}
    >
      <html lang="fr-FR" amp />

      <script
        src="https://kit.fontawesome.com/d58dae4cfc.js"
        crossorigin="anonymous"
      ></script>
    </Helmet>
  )
}
